import {router} from 'express';

const router = express.Router();

router.get('/obras');

router.get('/obras/:id');

router.post('/obras');

router.put('/obras');

router.delete('/obras');