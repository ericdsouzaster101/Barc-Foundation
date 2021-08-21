const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
  {
    user_name: {
      type: String,
      required: true,
    },
    user_email: {
      type: String,
      required: true,
    },
    user_message: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const UserModel = mongoose.model(
  'Users',
  userSchema
);

module.exports = UserModel;
