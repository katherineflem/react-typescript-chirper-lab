import * as express from 'express';
import apiRouter from './index';
import * as morgan from 'morgan';
const app = express();

app.use(morgan('dev'));

app.use(express.json());

app.use(express.static('public'));

app.use('/api',apiRouter);


const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server listening on port: ${port}`);
});
