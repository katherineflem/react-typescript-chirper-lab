import * as express from 'express';
import apiRouter from './routes';

const app = express();

console.log(p);

app.use(express.static('/public'));
app.use(apiRouter);

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server listening on port: ${port}`);
});
