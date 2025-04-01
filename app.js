const express = require("express");
const aliases = require('module-alias/register');

const mongoConnection= require('@framework/mongoDBConnection')
const userClientRoute = require('@applications/users/router')

const app = express();


app.use(express.json());

(async () => {
  await mongoConnection()

})()


app.use("/users", userClientRoute)

app.listen(3000, () => {
    console.log("Server is Listening and Ready to Action")
}
)

