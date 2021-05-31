import express from 'express';
import chalk from 'chalk';
import lampRouter from './Controls/lamp';

const app = express();

app.get('/', (_, res) => {
  res.send({ text: 'Please use jarvis! or use the admin portal' });
});

app.use('/lamp', lampRouter);

app.listen(4000, () => {
  console.log(chalk.green('Server started on http://localhost:4000'));
});
