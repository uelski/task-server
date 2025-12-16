import express from 'express';
import cors from 'cors'
import tasksRoutes from './routes/tasks.routes'
import projectsRoutes from './routes/projects.routes'

const app = express();

// --- CORS setup ---
app.use(
    cors({
      origin: 'http://localhost:5173', // Vite dev server
      methods: ['GET', 'POST', 'PATCH', 'PUT', 'DELETE', 'OPTIONS'],
      allowedHeaders: ['Content-Type', 'Authorization'],
      credentials: true, // only if you're using cookies/auth headers
    })
);

app.use(express.json());

app.use('/api/tasks', tasksRoutes);
app.use('/api/projects', projectsRoutes);

app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

export default app