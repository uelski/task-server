import {Router} from 'express'
import { prisma } from '../lib/prisma';

const router = Router()

router.get('/', (req, res) => {
  res.json({ message: 'Hello World' });
});

// post with projectid
router.post('/:projectId', async (req, res) => {
  const { title, description } = req.body;
  const { projectId } = req.params;
  const task = await prisma.task.create({
    data: { title, description, projectId: parseInt(projectId) },
  });
  res.json(task);
});

//patch with taskid
router.patch('/:taskId', async (req, res) => {
  const { title, description } = req.body;
  const { taskId } = req.params;
  const task = await prisma.task.update({
    where: { id: parseInt(taskId) },
    data: { title, description },
  });
  res.json(task);
});

//delete with taskid
router.delete('/:taskId', async (req, res) => {
  const { taskId } = req.params;
  const task = await prisma.task.delete({
    where: { id: parseInt(taskId) },
  });
  res.json(task);
});

export default router