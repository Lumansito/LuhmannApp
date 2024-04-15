import {router} from 'express';

const router = express.Router();

router.get('/aquitectos');

router.get('/aquitectos/:id');

router.post('/aquitectos');

router.put('/aquitectos');

router.delete('/aquitectos');