import express from 'express';
import tasksRoutes from './routes/tasks.routes'

const app = express();

app.use(express.json());

app.use('/api/tasks', tasksRoutes);

app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

export default app