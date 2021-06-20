import { config } from 'dotenv';
import './customMatchers';
import { server } from '../mocks/server';

config();

beforeAll(() => server.listen({ onUnhandledRequest: 'bypass' }));

afterEach(() => server.resetHandlers());

afterAll(() => server.close());
