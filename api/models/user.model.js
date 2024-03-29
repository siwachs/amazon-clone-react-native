import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    verified: {
      type: Boolean,
      default: false,
    },
    verificationToken: String,
    addresses: [
      {
        name: String,
        mobileNumber: String,
        houseNumber: String,
        street: String,
        landmark: String,
        city: String,
        state: String,
        country: String,
        postalCode: String,
      },
    ],
    orders: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Order",
      },
    ],
  },
  {
    timestamps: true,
  },
);

const User = mongoose.model.User || mongoose.model("User", UserSchema);

export default User;
