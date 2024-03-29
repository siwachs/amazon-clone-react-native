import Order from "../models/order.model.js";
import User from "../models/user.model.js";

const getOrders = async (req, res) => {
  try {
    const { userId } = req.params;

    if (req.user.userId !== userId) {
      return res.status(401).json({
        error: true,
        message: "Unauthorized access.",
      });
    }

    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ error: true, message: "No User found." });
    }

    const orders = await Order.find({ user: userId });

    res.status(200).json({
      error: false,
      orders,
    });
  } catch (error) {
    res.status(500).json({
      error: true,
      message: error.message,
    });
  }
};

const placeOrder = async (req, res) => {
  try {
    const { userId } = req.params;
    const { shippingAddress, cartItems, totalPrice, paymentMethod } = req.body;

    if (req.user.userId !== userId) {
      return res.status(401).json({
        error: true,
        message: "Unauthorized access.",
      });
    }

    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ error: true, message: "No User found." });
    }

    const orderObject = new Order({
      user: userId,
      shippingAddress,
      products: cartItems,
      totalPrice,
      paymentMethod,
    });

    const order = await orderObject.save();
    user.orders.push(order._id);
    await user.save();

    res.status(201).json({
      error: false,
      message: "Order placed successfully",
    });
  } catch (error) {
    res.status(500).json({
      error: true,
      message: error.message,
    });
  }
};

export { getOrders, placeOrder };
