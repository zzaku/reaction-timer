const request = require('supertest');
const app = require('../server');
const mongoose = require('mongoose');
const User = require('../models/User');
const Timer = require('../models/Timer');

beforeAll(async () => {
  await mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
});

afterEach(async () => {
  await User.deleteMany({});
  await Timer.deleteMany({});
});

afterAll(async () => {
  await mongoose.connection.close();
});

describe('Timer Endpoints', () => {
  it('should submit a reaction time', async () => {
    const user = new User({ email: 'testuser@example.com', password: 'password123', role: 1 });
    await user.save();

    const token = await request(app)
      .post('/api/auth/login')
      .send({
        email: 'testuser@example.com',
        password: 'password123',
      })
      .then(res => res.body.token);

    const res = await request(app)
      .post('/api/timer/submit-reaction-time')
      .set('Authorization', `Bearer ${token}`)
      .send({
        userId: user._id,
        time: 320,
      });

    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty('message', 'Reaction time submitted successfully');
  });

  it('should retrieve reaction times for a user', async () => {
    const user = new User({ email: 'testuser@example.com', password: 'password123', role: 1 });
    await user.save();

    const token = await request(app)
      .post('/api/auth/login')
      .send({
        email: 'testuser@example.com',
        password: 'password123',
      })
      .then(res => res.body.token);

    await new Timer({ user_id: user._id, time: 320 }).save();
    await new Timer({ user_id: user._id, time: 310 }).save();

    const res = await request(app)
      .get(`/api/timer/get-reaction-times/${user._id}`)
      .set('Authorization', `Bearer ${token}`);

    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveLength(2);
  });
});
