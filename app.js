import express from 'express'
import {dirname,join} from 'path'
import morgan from 'morgan'
import { fileURLToPath } from 'url'
import mysql from 'mysql'
import myConnection from 'express-myconnection'
import routes from './src/routes/routes.js'

const app = express();
const PORT = 3000;

const __dirname = dirname(fileURLToPath(import.meta.url));




//Settings
app.set('PORT', process.env.PORT || 3000);
app.set('view engine','ejs');
app.set('views', join(__dirname,'./views'));


//Middleware
app.use(morgan('dev'));
app.use(myConnection(mysql,{
    host: 'bfmmvnl8bzu5zs1wgeqo-mysql.services.clever-cloud.com',
    user: 'uwtlopez4kil45l6',
    password: 'DYn548Ce438wu3bURPUA',
    port: 3306,
    database: 'bfmmvnl8bzu5zs1wgeqo'
}, 'single'));

//Routes
app.use('/',routes);

//Static Files
app.use(express.static(join(__dirname,'public')));

app.listen(PORT,()=>{
    console.log(`Server is listening in ${PORT}`);
})
