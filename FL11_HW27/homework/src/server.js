const express = require("express");
const app = express();
const port = 3000;

const dataJSON = require("../db/data.json");
//let deleteAutorization = require("./middlewares/delete-authorization");
//app.use(deleteAutorization);

app.get("/", (request, response) => {
 response.send("Hello from Express!");
});

app.get("/car/", (request, response) => {
  response.status(200).send(dataJSON);
 });

 app.get("/car/:id", (request, response) => {
  const carId = dataJSON.find(carData => carData.id === parseInt(request.params.id));
  if (carId) {
    response.status(200).send(carId);
  } else {
    response.status(404).send('id not found');
  }
 });

app.listen(port, err => {
 if (err) {
 return console.log("something bad happened", err);
 }
 console.log(`server is listening on ${port}`);
});

