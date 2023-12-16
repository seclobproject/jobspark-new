import asyncHandler from "../Config/asyncHandler.js";
import User from "../Models/userModel.js";
import jwt from "jsonwebtoken";

// Login/get user
export const loginUser = asyncHandler(async (req, res) => {
  const { firstName, lastName, phone, email } = req.body;

  const user = await User.findOne({ email });

  const token = jwt.sign(
    { userId: user._id },
    "secret_of_jwt_for_jobspark_5959",
    {
      expiresIn: "365d",
    }
  );

  if (user) {
    res.status(200).json({
      id: user._id,
      firstName: user.firstName,
      email: user.email,
      token_type: "Bearer",
      access_token: token,
      sts: "01",
      msg: "Login Success",
    });
  } else {
    const createUser = await User.create({
      firstName,
      lastName,
      phone,
      email,
    });

    if (createUser) {
      res.status(201).json({
        firstName: createUser.firstName,
        lastName: createUser.lastName,
        phone: createUser.phone,
        email: createUser.email,
        token_type: "Bearer",
        access_token: token,
        sts: "01",
        msg: "Account creation success",
      });
    } else {
      res.status(400);
    }
  }
});
