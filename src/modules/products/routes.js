import express from 'express';
import productsActions from './actions';

const router = express.Router();

router.get('/produtos/:id/image', productsActions.getProductImage);

export default router;