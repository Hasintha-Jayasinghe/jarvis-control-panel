import express from 'express';
import { Gpio } from 'onoff';

const lampRouter = express.Router();
const lamp = new Gpio(18, 'out');

lampRouter.get('/on', (_, res) => {
  lamp.writeSync(1);
  res.send({ lamp: 'on' });
});

lampRouter.get('/off', (_, res) => {
  lamp.writeSync(0);
  res.send({ lamp: 'off' });
});

export default lampRouter;
