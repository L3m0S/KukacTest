import express from 'express';
import { logger } from '../utils/logger';
import { router } from './routes';
import { handleErrors} from './middlewares/handleErrors';

const app = express();

app.use(express.json());
app.use(router);

app.use(handleErrors);

const port = process.env.PORT || 3333;

app.listen(port, () => {
    logger.info(`Server is running on PORT: ${port}...`)
});