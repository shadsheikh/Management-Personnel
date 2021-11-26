const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });
const userSchema = new mongoose.Schema({
  Fname: {
    type: String,
    required: true,
  },
  Lname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  cpassword: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
  },
  id: {
    type: String,
    required: true,
  },
  dept: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
   messages: [{
        Fname: {
            type: String,
            required: true,
        },
        Lname: {
            type: Number,
            required: true,
        },
        Class: {
            type: String,
            required: true,
        },
        Feedback: {
            type: String,
            required: true,
        },
    }, ],
  tokens: [
    {
      token: {
        type: String,
        required: true,
      },
    },
  ],
});

// we are hasing the password
userSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, 12);
    this.cpassword = await bcrypt.hash(this.cpassword, 12);
  }
  next();
});

// ==================================== we are generating token==================
userSchema.methods.generateAuthToken = async function () {
  try {
    let token = jwt.sign({ _id: this._id }, process.env.SECRET_KEY);
    this.tokens = this.tokens.concat({ token: token });
    await this.save();
    return token;
  } catch (err) {
    console.log(err);
  }
};

userSchema.methods.addMessage = async function(Fname, Lname,Class, Feedback) {
    try {
        this.messages = this.messages.concat({
            Fname, Lname,Class, Feedback
        });
        await this.save();
        return this.messages;
    } catch (err) {
        console.log(err);
    }
};
//====================================collection creation ===============================
 const User = mongoose.model("student", userSchema);


module.exports = User;
