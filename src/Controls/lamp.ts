import chalk from 'chalk';
import express from 'express';
import SerialPort from 'serialport';
import i2c from 'i2c-bus';

const lampRouter = express.Router();

lampRouter.get('/on', (_, res) => {
  const lamp = i2c.openSync(1);
  lamp.writeByte(0x8, 1, 0x1, () => console.log('SENT ON COMMAND!'));
});

lampRouter.get('/off', (_, res) => {
  const lamp = i2c.openSync(1);
  lamp.writeByte(0x8, 1, 0x0, () => console.log('SENT OFF COMMAND!'));

  res.send({ lamp: 'off' });
});

export default lampRouter;
