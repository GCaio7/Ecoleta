import express from 'express';

import PointsController from './controllers/PointsController';
import ItemsController from './controllers/itemsController';

const routes = express.Router();
const pointsController = new PointsController();
const itemsController = new ItemsController();

routes.get('/items', itemsController.index);

routes.post('/points', pointsController.create);
routes.get('/points/', pointsController.index);
routes.get('/points/:id', pointsController.show);


// Nomeacao de metodos dos Controllers
    // index = listagem
    // show = exibir um unico registro
    // create
    // update
    // delete

export default routes;
