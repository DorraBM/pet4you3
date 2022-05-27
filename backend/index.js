const express=require('express');
const bodyparser=require('body-parser');
const cors=require('cors');
//const Connection = require('mysql2/typings/mysql/lib/Connection');
const mysql=require('mysql2');

const app=express();

app.use(cors());
app.use(bodyparser.json());


//database Connection
const db=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'pet4you',
    port:3306
});

//check database connection
db.connect(err=>{
  if(err)
  {console.log(err,'dberr');}
  console.log('database connected...')
})

//get all data
app.get('/annonce',(req,res)=>{
      let  qr=`select * from annonce where titre="adoption" `;
      db.query(qr,(err,result)=>{
          if(err)
          {
              console.log(err,'errs');
          }

          if(result.length>0)
          {
              res.send({
                  message:'all annonce data',
                  data:result
              });
          }

      });

});


//get single data
app.get('/annonce/:id',(req,res)=>{
 let gId=req.params.id;
 let qr=`select * from annonce where id_annonce=${gId}`;
 db.query(qr,(err,result)=>{
    if(err)
    {
        console.log(err,'errs');
    }

    if(result.length>0)
    {
        res.send({
            message:'all single data',
            data:result
        });
    }
    else
    {
        res.send({
            message:'data not found'
        });
    }

 })
});

//get adoption data
app.get('/adoption',(req,res)=>{
    let  qr=`select * from annonce where titre="adoption" `;
    db.query(qr,(err,result)=>{
        if(err)
        {
            console.log(err,'errs');
        }

        if(result.length>0)
        {
            res.send({
                message:'all annonce data',
                data:result
            });
        }

    });

});

//get accouplement data
app.get('/accouplement',(req,res)=>{
    let  qr=`select * from annonce where titre="accouplement" `;
    db.query(qr,(err,result)=>{
        if(err)
        {
            console.log(err,'errs');
        }

        if(result.length>0)
        {
            res.send({
                message:'all annonce data',
                data:result
            });
        }

    });

});


//create data
app.post('/annonce',(req,res)=>{
    let titre=req.body.titre;
    let categorie=req.body.categorie;
    let espece=req.body.espece;
    let image=req.body.image;
    let age=req.body.age;
    let sexe=req.body.sexe;
    let vaccin=req.body.vaccin;
    let description=req.body.description;
    let lieu=req.body.lieu;
    let date_naissance=req.body.date_naissance;
    let nom=req.body.nom;

    let qr=` insert into annonce(titre,categorie,espece,image,age,sexe,vaccin,description,lieu,date_naissance,nom) 
      values('${titre }','${categorie }' ,'${espece }', '${image}','${age}','${sexe}','${vaccin}','${description}','${lieu}','${date_naissance}','${nom}')`;
      db.query(qr,(err,result)=>{
        if(err)
        {
            console.log(err,'errs');
        }
        console.log(result,'result');
        res.send({
                message:'data insered',
            });
        
     
      });
});


//update single data
app.put('/annonce/:id',(req,res)=>{
    let gId=req.params.id;
    let titre=req.body.titre;
    let categorie=req.body.categorie;
    let espece=req.body.espece;
    let image=req.body.image;
    let age=req.body.age;
    let sexe=req.body.sexe;
    let vaccin=req.body.vaccin;
    let description=req.body.description;
    let lieu=req.body.lieu;
    let date_naissance=req.body.date_naissance;
    let nom=req.body.nom;

    let qr=`update annonce set titre=${titre},categorie=${categorie} , 
    espece=${espece},image=${image},age=${age},sexe=${sexe},vaccin=${vaccin}, description=${description},lieu${lieu},date_naissance=${date_naissance},nom=${nom} where id_annonce=${gId}`;

    db.query(qr,(err,result)=>{
        if(err)
        {
            console.log(err);
        }
        res.send({
            message:'data updated'
        });
    });

});


//delete single data
app.delete('/annonce/:id',(req,res)=>{
    let gId=req.params.id;
    let qr=`delete from etudiant where id_annonce='${gId}'`;
    db.query(qr,(err,result)=>{
         if(err)
         {
             console.log(err);
         }
         res.send(
             {
                 message:'data deleted',
             }
         );
    });
});



app.listen(3000,()=>{
    console.log('server running..');

});
