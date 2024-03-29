//bank model
// let banksDb = require("./Db"); 
const mongoose = require("mongoose");

const BankSchena = new mongoose.Schema({
    name: String,
    location: String,
    branch: String,
    address: String,
    accountNumber: String
});

//creating a module fo the schema
const BankModel = mongoose.model('Bank', BankSchena);


module.exports = BankModel;

// class BankModel {

//   constructor({ name, location, branch, phone, address, accountNumber }) {
//     this.name = name;
//     this.location = location;
//     this.branch = branch;
//     this.phone = phone;
//     this.address = address;
//     this.accountNumber = accountNumber;
//   }
//   save() {
//     banksDb.push(this);
//     return this;
//   }
//   static all() {
//     return banksDb;
//   }
//   static update(updateInfo = {}) {
//     //find the bank
//     banksDb = banksDb.map((bank) => {
//       if (bank.name === updateInfo.name) {
//         return { ...bank, ...updateInfo };
//       }

//       return bank;
//     });
//   }
//   static delete({ name }) {
//     let deleteBank = null;
//     banksDb = banksDb.filter((bank) => {
//       if (bank.name !== name) {
//         return true;
//       }
//       deleteBank = bank;
//       return false;
//     });
//     return deleteBank;
//   }
// }


// module.exports = BankModel;