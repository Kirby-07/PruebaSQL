import express from 'express'
import path from 'path'
import morgan from 'morgan'
import { fileURLToPath } from 'url'
import mysql from 'mysql'
import myConnection from 'express-myconnection'
import routes from './src/routes/routes.js'
const app = express();

const PORT = 3000;

const __dirname = (fileURLToPath(import.meta.url));

app.set('PORT', process.env.PORT || 3000);
app.set('view engine','ejs');
app.set('views', path.join(__dirname,'views'));

app.use(express.static(path.join(__dirname,'public')));
app.use('/',routes);
app.use(morgan('dev'));
app.use(myConnection(mysql,{
    host: 'bfmmvnl8bzu5zs1wgeqo-mysql.services.clever-cloud.com',
    user: 'uwtlopez4kil45l6',
    password: 'DYn548Ce438wu3bURPUA',
    port: 3306,
    database: 'bfmmvnl8bzu5zs1wgeqo'
}, 'single'));




app.listen(PORT,()=>{
    console.log(`Server is listening in ${PORT}`);
})