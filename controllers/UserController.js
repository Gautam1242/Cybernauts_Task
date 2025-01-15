import UserModel from "../models/UserModel.js";

// fetch all the registered users
const fetchUser = async (req, res) => {
  try {
    const users = await UserModel.find();
    res.status(200).json({
      success: true,
      users: users,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

// create new user
const createUser = async (req, res) => {
  try {
    const { name, age, hobbies } = req.body;
    const newUser = await UserModel.create({ name, age, hobbies });
    res.status(201).json({
      success: true,
      message: "User Created Successfully",
      newUser: newUser,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

// update the existing user
const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, age, hobbies } = req.body;
    const user = await UserModel.findByIdAndUpdate(
      id,
      { name, age, hobbies },
      { new: true }
    );
    res.status(200).json({
      success: true,
      message: "User Details Updated Successfully",
      updatedUser: user,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

// delete the user
const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user=await UserModel.findByIdAndDelete(id);
    if(!user){
      return res.status(404).json({
        success:false,
        message:"User Not Found"
      })
    }
    res.status(200).json({
      success: true,
      message: "User Deleted Successfully",
    });
  } catch (error) {
    console.log(error);
    res.json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

export { fetchUser, createUser, updateUser, deleteUser };
