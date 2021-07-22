const User = require("../../../models/User");

// To create new user
module.exports.createNewUser = async (req, res) => {
  try {
    const { userId, name, location } = req.body;
    let newRequest = await User.create({
      userId: userId,
      name: name,
      location: location,
    });
    return res.status(200).json(newRequest);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ msg: "Internal Server Error!" });
  }
};

// get All user Data
module.exports.allUsers = async (req, res) => {
  try {
    let totalRequests = await User.find();
    return res.status(200).json(totalRequests);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ msg: "Internal Server Error!" });
  }
};

// Edit User Detail
module.exports.editUser = async (req, res) => {
  try {
    const { id, userId, name, location } = req.body;
    let updateData = {
      userId,
      name,
      location,
    };
    let result = await User.findByIdAndUpdate(id, updateData);
    return res.status(200).json(result);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ msg: "Internal Server Error!" });
  }
};

// Delete User
module.exports.deleteUser = async (req, res) => {
  try {
    let result = await User.findByIdAndDelete(req.query.id);
    return res.status(200).json(result);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ msg: "Internal Server Error!" });
  }
};
