const mongoose = require('mongoose');
const FormSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  favoritePokemon: {
    type: String,
    required: true}
  });
  module.exports = mongoose.model('Form', FormSchema);













/*class FormModel {
  constructor(name, age, email, favoritePokemon) {
    this.name = name;
    this.age = age;
    this.email = email;
    this.favoritePokemon = favoritePokemon;
  }
}
module.exports = FormModel;*/
