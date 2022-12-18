let express = require("express");

var cors = require("cors");
let app = express();
app.use(cors());

app.use(express.json());
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE, HEAD"
  );
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested=With,X-Auth-Token, Content-Type, Accept"
  );
  next();
});

const { Client } = require("pg");
const client = new Client({
    host: "db.neydeluylphztuisueee.supabase.co",
    user: "postgres",
    password: "Devendra@123",
    database: "postgres",
    port: 5432,
    ssl: { rejectUnauthorized: false },
});

var port = process.env.PORT || 2410;
app.listen(port, () => console.log(`Node app listening on port ${port}!`));


client.connect(function (err, result) {
   console.log(`Connected!!!`,client.port)
})


app.get("/mobileapp/:name", function (req, res, next) {
    console.log("Inside put of user");
    let name = req.params.name
    let values = [name]
    const query = `SELECT * FROM mobileapp where name=$1`;
    client.query(query, values, function (err, result) {
        if (err) {
            res.status(400).send(err);
        }
        res.send(result.rows);
    });
});



app.get("/mobileapp", function (req, res, next) {
    let brand = req.query.brand;
    let ram = req.query.ram;
    let rom = req.query.rom;
    let os = req.query.os;
  
    const query = "SELECT * FROM mobileapp";
    client.query(query, function (err, result) {
        if (err) console.log(err)
        else {
  
  
              if (brand && ram && rom && os) {
                let sql1 = "SELECT * FROM mobileapp";
                client.query(sql1, function (err, result1) {
                  let arr1 = (result1.rows);
                  let brandarry = brand.split(",")
                  arr2 = arr1.filter((st)=> brandarry.find((c1)=> c1=== st.brand))
                  let osarry = os.split(",")
                  arr3 = arr2.filter((st)=> osarry.find((c1)=> c1=== st.os))
                  let ramarry = ram.split(",")
                  arr4 = arr3.filter((st)=> ramarry.find((c1)=> c1=== st.ram))
                  let romarry = rom.split(",")
                  arr5 = arr4.filter((st)=> romarry.find((c1)=> c1=== st.rom))
                  res.send(arr5)
  
                })
               }
  
               else if (brand && ram && os) {
                let sql1 = "SELECT * FROM mobileapp";
                client.query(sql1, function (err, result1) {
                    let arr1 = (result1.rows);
                  let brandarry = brand.split(",")
                  arr2 = arr1.filter((st)=> brandarry.find((c1)=> c1=== st.brand))
                  let osarry = os.split(",")
                  arr3 = arr2.filter((st)=> osarry.find((c1)=> c1=== st.os))
                  let ramarry = ram.split(",")
                  arr4 = arr3.filter((st)=> ramarry.find((c1)=> c1=== st.ram))
                  res.send(arr4)
                })
               }
  
  
               else if (ram && rom && os) {
                let sql1 = "SELECT * FROM mobileapp";
                client.query(sql1, function (err, result1) {
                    let arr1 = (result1.rows);
                  let romarry = rom.split(",")
                  arr2 = arr1.filter((st)=> romarry.find((c1)=> c1=== st.rom))
                  let osarry = os.split(",")
                  arr3 = arr2.filter((st)=> osarry.find((c1)=> c1=== st.os))
                  let ramarry = ram.split(",")
                  arr4 = arr3.filter((st)=> ramarry.find((c1)=> c1=== st.ram))
                  res.send(arr4)
                })
               }
  
  
               else if (brand && rom && ram) {
                let sql1 = "SELECT * FROM mobileapp";
                client.query(sql1, function (err, result1) {
                    let arr1 = (result1.rows);
                  let romarry = rom.split(",")
                  arr2 = arr1.filter((st)=> romarry.find((c1)=> c1=== st.rom))
                  let brandarry = brand.split(",")
                  arr3 = arr2.filter((st)=> brandarry.find((c1)=> c1=== st.brand))
                  let ramarry = ram.split(",")
                  arr4 = arr3.filter((st)=> ramarry.find((c1)=> c1=== st.ram))
                  res.send(arr4)
  
              })
                 }
  
  
  
               else if (brand && rom && os) {
                let sql1 = "SELECT * FROM mobileapp";
                client.query(sql1, function (err, result1) {
                    let arr1 = (result1.rows);
                  let romarry = rom.split(",")
                  arr2 = arr1.filter((st)=> romarry.find((c1)=> c1=== st.rom))
                  let brandarry = brand.split(",")
                  arr3 = arr2.filter((st)=> brandarry.find((c1)=> c1=== st.brand))
                  let osarry = os.split(",")
                  arr4 = arr3.filter((st)=> osarry.find((c1)=> c1=== st.os))
                  res.send(arr4)
  
              })
               }
  
               else if (ram && os) {
                let sql1 = "SELECT * FROM mobileapp";
                client.query(sql1, function (err, result1) {
                    let arr1 = (result1.rows);
                  let osarry = os.split(",")
                  arr2 = arr1.filter((st)=> osarry.find((c1)=> c1=== st.os))
                  let ramarry = ram.split(",")
                  arr3 = arr2.filter((st)=> ramarry.find((c1)=> c1=== st.ram))
                    res.send(arr3)
                    })
             }
                 else if (rom && os) {
                  let sql1 = "SELECT * FROM mobileapp";
                  client.query(sql1, function (err, result1) {
                    let arr1 = (result1.rows);
                    let osarry = os.split(",")
                    arr2 = arr1.filter((st)=> osarry.find((c1)=> c1=== st.os))
                    let romarry = rom.split(",")
                    arr3 = arr2.filter((st)=> romarry.find((c1)=> c1=== st.rom))
                      res.send(arr3)
                    })
                 }
  
  
                  else if (brand && os) {
                    let sql1 = "SELECT * FROM mobileapp";
                    client.query(sql1, function (err, result1) {
                        let arr1 = (result1.rows);
                        let osarry = os.split(",")
                      arr2 = arr1.filter((st)=> osarry.find((c1)=> c1=== st.os))
                      let brandarry = brand.split(",")
                      arr3 = arr2.filter((st)=> brandarry.find((c1)=> c1=== st.brand))
                        res.send(arr3)
                        })
                   }
                 else if (brand && ram) {
                  let sql1 = "SELECT * FROM mobileapp";
                  client.query(sql1, function (err, result1) {
                    let arr1 = (result1.rows);
                    let ramarry = ram.split(",")
                    arr2 = arr1.filter((st)=> ramarry.find((c1)=> c1=== st.ram))
                    let brandarry = brand.split(",")
                    arr3 = arr2.filter((st)=> brandarry.find((c1)=> c1=== st.brand))
                      res.send(arr3)
                      })
                 }
                 else if (brand && rom) {
                  let sql1 = "SELECT * FROM mobileapp";
                  client.query(sql1, function (err, result1) {
                    let arr1 = (result1.rows);
                    let romarry = rom.split(",")
                    arr2 = arr1.filter((st)=> romarry.find((c1)=> c1=== st.rom))
                    let brandarry = brand.split(",")
                    arr3 = arr2.filter((st)=> brandarry.find((c1)=> c1=== st.brand))
                      res.send(arr3)
                      })
                 }
  
  
  
                 else if (ram && rom) {
                  let sql1 = "SELECT * FROM mobileapp";
                  client.query(sql1, function (err, result1) {
                    let arr1 = (result1.rows);
                    let romarry = rom.split(",")
                    arr2 = arr1.filter((st)=> romarry.find((c1)=> c1=== st.rom))
                    let ramarry = ram.split(",")
                    arr3 = arr2.filter((st)=> ramarry.find((c1)=> c1=== st.ram))
                      res.send(arr3)
                      })
                 }
  
  
  
  
  
  
  
  
               else if (ram) {
                let sql1 = "SELECT * FROM mobileapp";
                client.query(sql1, function (err, result1) {
                    let arr1 = (result1.rows);
                let ramarry = ram.split(",")
                arr1 = arr1.filter((st)=> ramarry.find((c1)=> c1=== st.ram))
                res.send(arr1)
                })
               }
  
  
                else if (brand) {
                let sql1 = "SELECT * FROM mobileapp";
                client.query(sql1, function (err, result1) {
                    let arr1 = (result1.rows);
                  let brandarry = brand.split(",")
                  arr1 = arr1.filter((st)=> brandarry.find((c1)=> c1=== st.brand))
                  res.send(arr1)
                  })
               }
  
  
               else if (rom) {
                let sql1 = "SELECT * FROM mobileapp";
                client.query(sql1, function (err, result1) {
                    let arr1 = (result1.rows);
                  let romarry = rom.split(",")
                  arr1 = arr1.filter((st)=> romarry.find((c1)=> c1=== st.rom))
                  res.send(arr1)
                })
               }
  
               else if (os) {
                let sql1 = "SELECT * FROM mobileapp";
                client.query(sql1, function (err, result1) {
                    let arr1 = (result1.rows);
                    let osarry = os.split(",")
                  arr1 = arr1.filter((st)=> osarry.find((c1)=> c1=== st.os))
                  res.send(arr1)
                })
                 }
  
  
  
  
  
  
  
               else  res.send(result.rows)
  
        }
    })
  })
  



app.post("/mobileapp", function (req, res, next) {
    console.log("Inside post of user");
    var values = Object.values(req.body);console.log(values);
    const query = `INSERT INTO mobileapp (name,price,brand,ram,rom,os) VALUES ($1,$2,$3,$4,$5,$6)`;
    client.query(query, values, function (err, result) {if (err) {res.status(400).send(err);}
    //console.log(result);
    res.send(`${result.rowCount} insertion successful`);
    });
});


app.put("/mobileapp/:name", function (req, res, next) {
    console.log("Inside put of user");
    let name = req.params.name
    let price = req.body.price
    let rom = req.body.rom
    let ram = req.body.ram;
    let brand = req.body.brand;
    let os = req.body.os;
    let values = [price,brand,ram,rom,os,name]
    const query = `UPDATE mobileapp SET price= $1,brand=$2,ram=$3,rom=$4,os=$5 where name=$6`;
    client.query(query, values, function (err, result) {
        if (err) {
            res.status(400).send(err);
        }
        res.send(" updation successful");
    });
});

app.delete("/mobileapp/:name", function (req, res, next) {
    console.log("Inside put of user");
    let name = req.params.name
    let values = [name]
    const query = `DELETE FROM mobileapp where name= $1`;
    client.query(query, values, function (err, result) {
        if (err) {
            res.status(400).send(err);
        }
        res.send("Delete successful");
    });
});
