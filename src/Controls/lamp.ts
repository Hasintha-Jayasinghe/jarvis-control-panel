import chalk from 'chalk';
import express from 'express';
import SerialPort from 'serialport';

const lampRouter = express.Router();
// ENTER A PORT!
const lamp = new SerialPort('', { baudRate: 9600, dataBits: 8 }, err =>
  console.log(err?.message)
);

lampRouter.get('/on', (_, res) => {
  const buffer = new Buffer(1);
  buffer[0] = 0x0;
  lamp.write(buffer, err => {
    if (err) {
      console.log(chalk.red(err.message));
    }
  });
  res.send({ lamp: 'on' });
});

lampRouter.get('/off', (_, res) => {
  const buffer = new Buffer(1);

  buffer[0] = 0x1;
  lamp.write(buffer, err => {
    if (err) {
      console.log(chalk.red(err.message));
    }
  });

  res.send({ lamp: 'off' });
});

export default lampRouter;
