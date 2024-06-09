import express from 'express';
import authRouter from '@routes/auth';
import requireAuth from '@middlewares/auth';
import todoRouter from '@routes/todo';
import cors from 'cors';


const corsOptions = {
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true,
};

const app = express();
app.use(express.json());
app.use(cors(corsOptions));

app.use('/auth', authRouter);
app.use('/todo', requireAuth, todoRouter);

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
