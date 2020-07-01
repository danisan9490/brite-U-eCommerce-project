const User = require('../models/userModel');
const getToken = require('../util');

async function createAdmin(req, res) {
  try {
    const user = new User({
      name: 'User',
      email: 'Admin@gmail.com',
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

async function postSignIn(req, res) {

  const signInUser = await User.findOne({
    email: req.body.email,
    password: req.body.password
  });
  if (signInUser) {
    res.send({
      _id: signInUser.id,
      name: signInUser.name,
      email: signInUser.email,
      isAdmin: signInUser.isAdmin,
      token: getToken(signInUser)
    })
  } else {
    res.status(401).send({ msg: "Invalid Email or Password" })
  }
}

async function postRegister(req, res) {
  const user = new User({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password
  });
  const newUser = await user.save();
  if (newUser) {
    res.send({
      _id: newUser.id,
      name: newUser.name,
      email: newUser.email,
      isAdmin: newUser.isAdmin,
      token: getToken(newUser)
    })
  } else {
    res.status(401).send({ msg: 'Invalid User Data.' },);
  }
}

async function editUser(req, res) {
  const userId = req.params.id;
  const user = await User.findById(userId);
  if (user) {
    user.name = req.body.name || user.name;
    user.email = req.body.email || user.email;
    user.password = req.body.password || user.password;
    const updatedUser = await user.save();
    res.send({
      _id: updatedUser.id,
      name: updatedUser.name,
      email: updatedUser.email,
      isAdmin: updatedUser.isAdmin,
      token: getToken(updatedUser)
    });
  } else {
    res.status(404).send({ msg: 'User Not Found' });
  }
}

module.exports = {
  createAdmin,
  postSignIn,
  postRegister,
  editUser
}