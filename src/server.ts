import express from 'express';
import MainRouter from './routes/MainRoute';
import UserRouter from './routes/UserRoute';
import LanceRouter from './routes/LanceRoute';
import LeilaoRouter from './routes/LeilaoRoute';

const app = express();
const port = 3000;

app.use(express.json())
app.set('view engine', 'ejs');
app.set('views', './src/views');

app.use(UserRouter);
app.use(MainRouter);
app.use(LanceRouter);
app.use(LeilaoRouter);

app.listen(port, function(){
    console.log(`Server running on port ${port}`);
})