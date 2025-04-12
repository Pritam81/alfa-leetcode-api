// api/index.ts
import { VercelRequest, VercelResponse } from '@vercel/node';
import app from '../src/app';
import { createServer, IncomingMessage, ServerResponse } from 'http';

const server = createServer((req: IncomingMessage, res: ServerResponse) => {
  app(req, res);
});

export default (req: VercelRequest, res: VercelResponse) => {
  server.emit('request', req, res);
};
