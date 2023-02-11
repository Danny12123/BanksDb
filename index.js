
const express = require('express');
const bodyParser = require('body-parser');

const {listBanksController,
  createBankController,
  updateBankController,
  deleteBankController,} = require('./Controllers');
const BankModel = require('./Model')
const server = express();

const mongoose = require('mongoose');

//middlewares
server.use(bodyParser.json());
 

//routes
//view bank - get method
// server.get('/bank', listBanksController);
//create bank - put method
server.post('/bank', createBankController);
//update bank - put method
// server.put('/bank', updateBankController);
//delete bank - delete method
// server.delete('/bank', deleteBankController);

//connect to the database start server
mongoose.connect(
  "mongodb+srv://codetrainUser:codetrain123@cluster0.ibt64yk.mongodb.net/codetrainUser?retryWrites=true&w=majority", {useNewUrlParser: true, useUnifiedTopology: true}
).then((result) =>{

    server.listen(4000,  ()=> console.log('server is ready'));
}).catch(err => console.log(err)); 