const BankModel = require("./Model");
//controllers

// const listBanksController = (req, res) => {
//   const banks = BankModel.all();
//   res.json({ data: banks });
// };

const createBankController = (req, res) => {
  const { name, location, branch, phone, address, accountNumber } = req.body;

  const bank = new BankModel({
    name,
    location,
    branch,
    phone,
    address,
    accountNumber,
  });
  bank.save().then(result => {
      res.json({ message: "create successful", data: bank });
  }).catch(err => console.log(err));
};

// const updateBankController = (req, res) => {
//   const { name, location, branch, phone, address, accountNumber } = req.body;
//   const updateBank = BankModel.update({
//     name,
//     location,
//     branch,
//     phone,
//     address,
//     accountNumber,
//   });

//   res.json({ message: "updated", data: updateBank });
// };

// const deleteBankController = (req, res) => {
//   const { name } = req.body;
//   const deletedBank = BankModel.delete({ name });
//   res.json({ message: "Bank deletes", data: deletedBank });
// };

module.exports = {
//   listBanksController,
  createBankController,
//   updateBankController,
//   deleteBankController,
};
