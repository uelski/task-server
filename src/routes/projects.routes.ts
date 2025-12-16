import {Router} from 'express'
import { projects } from '../helpers/projects.helper'
const router = Router()

router.get('/', (req, res) => {
  res.json({ message: 'Hello World' });
});

router.get('/projects-with-tasks', (req, res) => {
  res.json(projects);
});

export default router