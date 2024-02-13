const Razorpay = require("razorpay")

exports.instance = new Razorpay({
  key_id: process.env.RAZORPAY_KEY,
  //   key_id: "rzp_test_8pomYtDZdUsK16",
  key_secret: process.env.RAZORPAY_SECRET,
})
