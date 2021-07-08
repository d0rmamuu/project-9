const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const signupSchema = new Schema({
  user: { type: String, required: true},
  pass:{type: String, required: true },
  email: { type: String, required: true},
  phone:{type: String, required: true },
});



const signup= mongoose.model('signup', signupSchema);

module.exports = signup;
