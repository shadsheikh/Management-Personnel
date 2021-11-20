require("../src/db/conn");
const authenticate = require("../middleware/authenticate");
const User = require("../src/models/userSchema");
exports.signup = async (req, res) => {
  const { Fname, Lname, email, phone, password, cpassword, role, id, dept } =
    req.body;
  if (
    !Fname ||
    !Lname ||
    !email ||
    !phone ||
    !password ||
    !cpassword ||
    !role ||
    !id ||
    !dept
  ) {
    return res.status(422).json({ error: "data is not inserted" });
  }
  try {
    const userExist = await User.findOne({ email: email });
    if (userExist) {
      console.log("email sent");
      return res.status(422).json({ error: "email already exist" });
    } else if (password != cpassword) {
      console.log("password function working");
      return res.status(422).json({ error: "recheck password" });
    } else {
      const user = new User({
        Fname,
        Lname,
        email,
        phone,
        password,
        cpassword,
        role,
        id,
        dept,
      });
      // const userRegister = await user.save();
      // =============================hasing =============================
      await user.save();

      res.status(200).render("auth-login.hbs");
      // res.status(201).json({ message: "successfully saved." });
      //  if(userRegister){
      //   res.status(201).json({ message: "successfully saved." });
      //  }
    }
  } catch (err) {
    next(err);
  }
};
