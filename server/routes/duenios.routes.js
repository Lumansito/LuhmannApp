import {router} from 'express';

const router = express.Router();

router.get('/duenios');

router.get('/duenios/:id');

router.post('/duenios');

router.put('/duenios');

router.delete('/duenios');