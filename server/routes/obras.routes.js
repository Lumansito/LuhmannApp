import {Router} from 'express';
import {
    getObras,
    getObraBynroObra,
    createObra,
    updateObra,
    deleteObra
} from '../controllers/obras.controllers.js';

const router = Router();

router.get('/api/obras' , getObras);

router.get('/api/obras/:nroObra', getObraBynroObra);

router.post('/api/obras', createObra);

router.put('/api/obras/:nroObra', updateObra);

router.delete('/api/obras/:nroObra', deleteObra);

export default router;