const express = require('express');
const cors = require('cors');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const app = express();

app.use(cors())
app.use(express.json())
app.use(bodyParser.urlencoded({extended:true}));  

const db = mysql.createConnection({
  host:'localhost',
  user: 'newroot',
  password:'password',
  database:'websystemdb'
})

////////OFFICIALS DATABASE///////
///get data to the table
app.get("/officials", (req, res) => {
  db.query("SELECT * FROM official", (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).send({ message: 'Error fetching officials' });
    } else {
      res.send(result);
    }
  });
});

///post officials data to table
app.post('/createOfficial', (req, res) => {
  const name = req.body.name;
  const position = req.body.position;
  const contact = req.body.contact;

  db.query (
    "INSERT INTO official (name, position, contact) VALUES (?,?,?)", 
    [name, position, contact], (err, result) => {
      if (err) {
        console.log(err)
      } else {
        res.send("Values Inserted")
      }
    }
  );
});

/// update data
app.put("/updateOfficial", (req, res) => {
  const id = req.body.id
  const contact = req.body
  db.query("UPDATE SET * official contact = ? WHERE id = ?", [contact, id], (err, result) => {
    if(err){
      console.log(err);
    } else {
      res.send(result);
    }
  })
})

app.delete('/delete/:id', (req, res) => {
  const id = req.params.id;
  db.query("DELETE FROM official WHERE id=?", [id], (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).send({ message: 'Error deleting official' });
    } else {
      res.send({ message: 'Official deleted successfully' });
    }
  });
});




/////RESIDENT DATABASE/////
///create resident
app.post('/createResident', (req, res) => {
  const residentname = req.body.residentname;
  const residentbirthday = req.body.residentbirthday;
  const residentsex = req.body.residentsex;
  const residentcontactnumber = req.body.residentcontactnumber;
  const residentmaritalstatus = req.body.residentmaritalstatus;

  db.query (
    "INSERT INTO residents (residentname, residentbirthday, residentsex, residentcontactnumber, residentmaritalstatus) VALUES (?,?,?,?,?)", 
    [residentname, residentbirthday, residentsex, residentcontactnumber, residentmaritalstatus], (err, result) => {
      if (err) {
        console.log(err)
      } else {
        res.send("Values Inserted")
      }
    }
  );
});

////get resident
app.get("/residents", (req, res) => {
  db.query("SELECT * FROM residents", (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).send({ message: 'Error fetching residents' });
    } else {
      res.send(result);
    }
  });
});

///delete resident
app.delete('/deleteresident/:residentid', (req, res) => {
  const residentid = req.params.residentid;
  db.query("DELETE FROM residents WHERE residentid=?", [residentid], (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).send({ message: 'Error deleting Resident' });
    } else {
      res.send({ message: 'Resident deleted successfully' });
    }
  });
});

/////USER DATABASE /////



app.listen(3002, () => {
  console.log('Server is running');
});