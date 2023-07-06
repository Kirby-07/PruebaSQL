import {Router} from 'express'
const router = Router();



router.get('/',(req,res)=>{
  req.getConnection((err,conn) => {
    conn.query('SELECT * FROM SQLProject',(err,items)=>{
         if(err)
         {
             res.json(err);
         }
         else{
             res.render('botonJSON')
         }
         })
    });
})

router.get('/descargar-registros',(req,res)=>{
    req.getConnection((error, connection) => {
        if (error) {
          console.error('Error al conectar a la base de datos: ', error);
          res.status(500).json({ error: 'Error al conectar a la base de datos' });
          return;
        }
        connection.query('SELECT * FROM SQLProject', (error, results) => {
          if (error) {
            console.error('Error al obtener los registros: ', error);
            res.status(500).json({ error: 'Error al obtener los registros' });
            return;
          }
    
          const jsonData = JSON.stringify(results);
    
          
          res.setHeader('Content-Type', 'application/json');
          res.setHeader('Content-Disposition', 'attachment; filename=registros.json');
    
          
          res.send(jsonData);

        });
      });
})

 

export default router