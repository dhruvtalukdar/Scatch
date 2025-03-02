const authService = require("../service/authService");


module.exports.registerUser = async function (req, res) {
    try {
        const { email, password, fullname} = req.body;
        const { user, token } = await authService.registerUser(email, password, fullname);

        res.cookie("token", token);
        res.status(201).send(user);
        console.log("User registered successfully");
    }
    catch (err) {
        console.error("Error registering user: ", err.message);
        res.status(500).json({ message: "Internal server error" });
    }
}

module.exports.signInUser = async function (req, res) {
    try {
        const { email, password } = req.body;
        const { user, token } = await authService.signInUser(email, password);

        res.cookie("token", token);
        res.send("user logged in successfully");
        }
    catch (err) {
        res.status(400).json(err);
        console.log(err.message);
    }
};


// MIGHT BE IMPORTANT
// // password hashing
        // bcrypt.genSalt(10, function (err, salt) {
        //     bcrypt.hash(password, salt, async function (err, hash) {
        //         if (err) return res.send(err.message);
        //         else {
        //             let createdUser = await userModel.create({
        //                 email,
        //                 password : hash,
        //                 fullname
        //             });
        //             let token = generateToken(createdUser);
        //             res.cookie("token", token);
        //             res.status(201).send(createdUser);
        //             console.log("User registered successfully");
        //         };
        //     });
        // });

        // // Generating token
        // let token = jwt.sign(
        //     { userId: "123456", email: "createduser@gmail.com" }, 
        //     JWT_SECRET
        //     // { expiresIn: "1h" } // Token valid for 1 hour
        // );

        // res.send(token);

        // res.status(201).json({ user: createdUser, token });
        // console.log("User registered successfully");


        // let { email, password } = req.body;

        // // check if user exists
        // let user = await userModel.findOne({ email });

        // if(!user) return res.status(400).send("Invalid email or password");

        // bcrypt.compare(password, user.password, function (err, result) {
        //     if (!result) return res.status(400).send("Invalid email or password");
        //     else {
        //         let token = generateToken(user);
        //         res.cookie("token", token);
        //         res.send("user logged in successfully");
        //     }
        //     if (err) return res.send(err.message);

        // });