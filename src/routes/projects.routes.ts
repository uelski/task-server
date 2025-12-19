import {Router} from 'express'
import { prisma } from '../lib/prisma'
import { projects } from '../helpers/projects.helper'


const router = Router()

router.get('/', (req, res) => {
  res.json({ message: 'Hello World' });
});

router.get('/projects-with-tasks', async (req, res) => {
  const projects = await prisma.project.findMany({
    include: {
      tasks: true,
    },
  });
  res.json(projects);
});

router.post('/', async (req, res) => {
  const { title, description } = req.body;
  const project = await prisma.project.create({
    data: { title, description },
  });
  res.json(project);
});

router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { title, description } = req.body;
  const project = await prisma.project.update({
    where: { id: parseInt(id) },
    data: { title, description },
  });
  res.json(project);
});

//delete with projectid
router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  const project = await prisma.project.delete({
    where: { id: parseInt(id) },
  });
  res.json(project);
});

export default router