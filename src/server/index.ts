import {Router} from 'express';
import chirpsRouter from './chirps'

const router = Router();

router.get('/', (req, res, next) => {
    res.json();
});

router.use('/chirps', (chirpsRouter))

export default router;


