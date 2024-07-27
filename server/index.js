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
  user: 'root',
  password: 'naika@352088',
  database:'websystemdb'
})

////////OFFICIALS DATABASE///////
///get data to the table
app.get("/officials", (req, res) => {
  db.query("SELECT * FROM official ORDER BY name ASC", (err, result) => {
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


///search official
app.get('/search-officials', (req, res) => {
  const query = req.query.query;
  const sql = `SELECT * FROM official WHERE name LIKE '%${query}%'`;
  db.query(sql, (err, results) => {
    if (err) {
      console.error('Error executing query:', err);
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      res.json(results);
    }
  });
});

//delete official
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
  db.query("SELECT * FROM residents ORDER BY residentname ASC", (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).send({ message: 'Error fetching residents' });
    } else {
      res.send(result);
    }
  });
});


/// Define the /residents/total endpoint
app.get('/residents/total', (req, res) => {
  const query = `
    SELECT COUNT(*) AS totalResidents, SUM(CASE WHEN residentsex = 'Male' THEN 1 ELSE 0 END) AS totalMaleResidents, SUM(CASE WHEN residentsex = 'Female' THEN 1 ELSE 0 END) AS totalFemaleResidents FROM residents
  `;
  
  db.query(query, (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).send({ message: 'Error fetching residents count' });
    } else {
      res.send(result[0]);
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

//
  app.get('/search-residents', (req, res) => {
  const query = req.query.query;
  const sql = `SELECT * FROM residents WHERE residentname LIKE '%${query}%'`;
  db.query(sql, (err, results) => {
    if (err) {
      console.error('Error executing query:', err);
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      res.json(results);
    }
  });
});


// update resident
app.put('/updateResident', (req, res) => {
  const task = req.body;
  const data = db.query('UPDATE residents SET residentname=?, residentbirthday=?, residentsex=?, residentcontactnumber=?, residentmaritalstatus=? WHERE residentid=?', [
    task.residentname,
    task.residentbirthday,
    task.residentsex,
    task.residentcontactnumber,
    task.residentmaritalstatus,
    task.residentid
  ]);

  console.log(data);
});



/// update official data "UPDATE official SET name = ?, position = ?, contact = ? WHERE id = ?", 
app.put("/updateOfficial", (req, res) => {
  const task = req.body;
  const data = db.query( "UPDATE official SET name = ?, position = ?, contact = ? WHERE id = ?", [
    task.name,
    task.position,
    task.contact,
    task.id
  ]);
  console.log(data)
});


app.listen(3002, () => {
  console.log('Server is running');
});