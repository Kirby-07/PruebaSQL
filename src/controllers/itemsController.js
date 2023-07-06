
const controller = {};

controller.list = (req,res)=>{
    req.getConnection((err,conn) => {
       conn.query('SELECT * FROM SQLProject',(err,items)=>{
            if(err)
            {
                res.json(err);
            }
            else{
                res.render('index')
            }
            
            })
       });
        
    };


export default controller