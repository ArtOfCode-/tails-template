import * as express from 'express';
import * as mt from 'mysql';
import { render } from '../render_helpers';
import { ResponseWithLayout } from '../definitions';
const router = express.Router(); // eslint-disable-line new-cap

export default (pool: mt.Pool, log): express.Router => {
    router.get('/', async (req: express.Request, res: ResponseWithLayout) => {
        render(req, res, 'dashboard/dash', {}, {pool});
    });

    return router;
};