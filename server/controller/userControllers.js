const User = require('../models/userModel');


async function createAdmin(req, res) {
  try {
    const user = new User({
      name: 'User',
      email: 'userAdmin@gmail.com',
      password: '1234',
      isAdmin: true
    });
    console.log(user)
    const newUser = await user.save();
    res.json(newUser);
  } catch (error) {
    res.send({ msg: error.message });
  }
};


module.exports = {
  createAdmin,
}