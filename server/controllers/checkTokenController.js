const jwt = require("jsonwebtoken");

const checkTokenController = async (req, res) => {
    const token = req.cookies["authToken"];
    if (!token) {
        return res.status(400).send({ message: "Token Doesn't Exist" });
    }
    try {
        const decoded = jwt.verify(token, process.env.JWTPRIVATEKEY); // Validate the token
        return res.status(200).send({ message: "Token is valid", user: decoded });
    } catch (err) {
        return res.status(401).send({ message: "Invalid or Expired Token" });
    }
};

module.exports = checkTokenController;
