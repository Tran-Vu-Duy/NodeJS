import db from "../models/index";
let getHomePage = async (req, res) => {
    try {
        let data = await db.User.findAll();
        console.log("------------");
        console.log(data);
        console.log("------------");
        return res.render("homepage.ejs", { data: JSON.stringify(data) });
    } catch (error) {
        console.log(error);
    }
};

let getSignUpPage = async (req, res) => {
    return res.render("signup.ejs");
};

let postSignUpPage = async (req, res) => {
    console.log(req.body);
    return res.send("OK");
}

module.exports = {
    getHomePage: getHomePage,
    getSignUpPage: getSignUpPage,
    postSignUpPage: postSignUpPage,
};