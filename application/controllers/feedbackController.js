require("../src/db/conn");
const jwt = require("jsonwebtoken");
const User = require("../src/models/userSchema");

exports.feedback = async (req, res) => {
  try {
    const { Fname, Lname, Class, Feedback } = req.body;
    if (!Fname || !Lname || !Class || !Feedback) {
      return res.json({ error: "please fill all fields" });
    } else {
      const userFeedback = await User.findOne({ _id: req.userID });
      if (userFeedback) {
        const userMessage = await userFeedback.addMessage(
          Fname,
          Lname,
          Class,
          Feedback
        );

        await userFeedback.save();

        res.status(201).json({ message: "successfully saved." });
      }
    }
  } catch (error) {
    console.log(error);
  }
};
