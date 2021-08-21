const UserModel = require('../DbSchema');

const getHomePage = (req, res) => {
  res.send('Hello express');
};

const addUserToDatabase = (req, res) => {
  const { user_name, user_email, user_message } =
    req.body;
  const user = new UserModel({
    user_name: user_name,
    user_email: user_email,
    user_message: user_message,
  });

  user
    .save('Data Inserted Successfully')
    .then((response) => console.log('success'))
    .catch((err) => console.log(err));
};

module.exports = {
  getHomePage,
  addUserToDatabase,
};
