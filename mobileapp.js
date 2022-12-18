let mysql = require("mysql");
let con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "testDB123",
});


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
var port = process.env.PORT || 2410;
app.listen(port, () => console.log(`Node app listening on port ${port}!`));

con.connect((err)=>{
    if(err) console.log(err);
    else console.log("Connected!");
})


app.get("/mobileapp/:name",function(req,res){
    let name = req.params.name
    let sql = "SELECT * FROM mobileapp where name='"+name+"'";
    con.query(sql, function (err, result) {
        if (err) console.log(err)
        else {
            res.send(JSON.parse(JSON.stringify(result)));
        }
  
                })
              
               })
  

  




app.post("/mobileapp",function(req,res){
    let name = req.body.name
    let price = +req.body.price
    let rom = req.body.rom
    let ram = req.body.ram;
    let brand = req.body.brand;
    let os = req.body.os;


    let sql = "insert into mobileapp (name,price,brand,ram,rom,os) values(?,?,?,?,?,?)";
    con.query(sql, [name,price,brand,ram,rom,os], function (err, result) {
            if (err) console.log(err);
        else {
                    res.send(JSON.parse(JSON.stringify(result)));
        }
    
    })
  

})




app.put("/mobileapp/:name",function(req,res){
    let name = req.params.name
    let price = +req.body.price
    let rom = req.body.rom
    let ram = req.body.ram;
    let brand = req.body.brand;
    let os = req.body.os;
    let sql = "UPDATE mobileapp SET price=?,brand=?,ram=?,rom=?,os=? where name=?";
    con.query(sql, [price,brand,ram,rom,os,name], function (err, result) {
            if (err) console.log(err);
        else {
                    res.send(JSON.parse(JSON.stringify(result)));
                    
        }
    
    })
  

})



app.delete("/mobileapp/:name",function(req,res){
    let name = req.params.name
    let sql = " DELETE FROM mobileapp where name=?";
    con.query(sql, name, function (err, result) {
            if (err) console.log(err);
        else {
                    res.send(JSON.parse(JSON.stringify(result)));
        }
    })
})


app.get("/mobileapp",function(req,res){
  let brand = req.query.brand;
  let ram = req.query.ram;
  let rom = req.query.rom;
  let os = req.query.os;


  let sql = "SELECT * FROM mobileapp ";
  con.query(sql, function (err, result) {
      if (err) console.log(err)
      else {


            if (brand && ram && rom && os) {
              let sql1 = "SELECT * FROM mobileapp";
              con.query(sql1, function (err, result1) {
                let arr1 = (JSON.parse(JSON.stringify(result1)));
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
              con.query(sql1, function (err, result1) {
                let arr1 = (JSON.parse(JSON.stringify(result1)));
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
              con.query(sql1, function (err, result1) {
                let arr1 = (JSON.parse(JSON.stringify(result1)));
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
              con.query(sql1, function (err, result1) {
                let arr1 = (JSON.parse(JSON.stringify(result1)));
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
              con.query(sql1, function (err, result1) {
                let arr1 = (JSON.parse(JSON.stringify(result1)));
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
              con.query(sql1, function (err, result1) {
                let arr1 = (JSON.parse(JSON.stringify(result1)));
                let osarry = os.split(",")
                arr2 = arr1.filter((st)=> osarry.find((c1)=> c1=== st.os))
                let ramarry = ram.split(",")
                arr3 = arr2.filter((st)=> ramarry.find((c1)=> c1=== st.ram))
                  res.send(arr3)
                  })
           }
               else if (rom && os) {
                let sql1 = "SELECT * FROM mobileapp";
                con.query(sql1, function (err, result1) {
                  let arr1 = (JSON.parse(JSON.stringify(result1)));
                  let osarry = os.split(",")
                  arr2 = arr1.filter((st)=> osarry.find((c1)=> c1=== st.os))
                  let romarry = rom.split(",")
                  arr3 = arr2.filter((st)=> romarry.find((c1)=> c1=== st.rom))
                    res.send(arr3)
                  })
               }


                else if (brand && os) {
                  let sql1 = "SELECT * FROM mobileapp";
                  con.query(sql1, function (err, result1) {
                    let arr1 = (JSON.parse(JSON.stringify(result1)));
                    let osarry = os.split(",")
                    arr2 = arr1.filter((st)=> osarry.find((c1)=> c1=== st.os))
                    let brandarry = brand.split(",")
                    arr3 = arr2.filter((st)=> brandarry.find((c1)=> c1=== st.brand))
                      res.send(arr3)
                      })
                 }
               else if (brand && ram) {
                let sql1 = "SELECT * FROM mobileapp";
                con.query(sql1, function (err, result1) {
                  let arr1 = (JSON.parse(JSON.stringify(result1)));
                  let ramarry = ram.split(",")
                  arr2 = arr1.filter((st)=> ramarry.find((c1)=> c1=== st.ram))
                  let brandarry = brand.split(",")
                  arr3 = arr2.filter((st)=> brandarry.find((c1)=> c1=== st.brand))
                    res.send(arr3)
                    })
               }
               else if (brand && rom) {
                let sql1 = "SELECT * FROM mobileapp";
                con.query(sql1, function (err, result1) {
                  let arr1 = (JSON.parse(JSON.stringify(result1)));
                  let romarry = rom.split(",")
                  arr2 = arr1.filter((st)=> romarry.find((c1)=> c1=== st.rom))
                  let brandarry = brand.split(",")
                  arr3 = arr2.filter((st)=> brandarry.find((c1)=> c1=== st.brand))
                    res.send(arr3)
                    })
               }



               else if (ram && rom) {
                let sql1 = "SELECT * FROM mobileapp";
                con.query(sql1, function (err, result1) {
                  let arr1 = (JSON.parse(JSON.stringify(result1)));
                  let romarry = rom.split(",")
                  arr2 = arr1.filter((st)=> romarry.find((c1)=> c1=== st.rom))
                  let ramarry = ram.split(",")
                  arr3 = arr2.filter((st)=> ramarry.find((c1)=> c1=== st.ram))
                    res.send(arr3)
                    })
               }








             else if (ram) {
              let sql1 = "SELECT * FROM mobileapp";
              con.query(sql1, function (err, result1) {
              let arr1 = (JSON.parse(JSON.stringify(result1)));
              let ramarry = ram.split(",")
              arr1 = arr1.filter((st)=> ramarry.find((c1)=> c1=== st.ram))
              res.send(arr1)
              })
             }


              else if (brand) {
              let sql1 = "SELECT * FROM mobileapp";
              con.query(sql1, function (err, result1) {
                let arr1 = (JSON.parse(JSON.stringify(result1)));
                let brandarry = brand.split(",")
                arr1 = arr1.filter((st)=> brandarry.find((c1)=> c1=== st.brand))
                res.send(arr1)
                })
             }


             else if (rom) {
              let sql1 = "SELECT * FROM mobileapp";
              con.query(sql1, function (err, result1) {
                let arr1 = (JSON.parse(JSON.stringify(result1)));
                let romarry = rom.split(",")
                arr1 = arr1.filter((st)=> romarry.find((c1)=> c1=== st.rom))
                res.send(arr1)
              })
             }

             else if (os) {
              let sql1 = "SELECT * FROM mobileapp";
              con.query(sql1, function (err, result1) {
                let arr1 = (JSON.parse(JSON.stringify(result1)));
                let osarry = os.split(",")
                arr1 = arr1.filter((st)=> osarry.find((c1)=> c1=== st.os))
                res.send(arr1)
              })
               }







             else  res.send(JSON.parse(JSON.stringify(result)))

      }
  })
})
