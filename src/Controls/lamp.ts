import express from 'express';
import i2c from 'i2c-bus';

const lampRouter = express.Router();
// ENTER A PORT!

lampRouter.get('/off', (_, res) => {
  const lamp = i2c.openSync(1);
  lamp.writeByteSync(0x8, 0, 1);

  res.send({ lamp: 'on' });
});

lampRouter.get('/on', (_, res) => {
  const lamp = i2c.openSync(1);
  lamp.writeByteSync(0x8, 0, 0);

  res.send({ lamp: 'off' });
});

export default lampRouter;
