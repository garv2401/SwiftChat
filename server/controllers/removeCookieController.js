const removeCookieController = async (req, res) => {
    const token = req.cookies["authToken"];
  
    if (token) {
      // Clear the cookie with matching options
      res.clearCookie("authToken", {
        httpOnly: false, // Matches original setting
        sameSite: "none", // Matches original setting
        secure: true, // Matches original setting
        path: "/", // Default path
      });
  
      return res.status(200).send({ message: "Cookie removed" });
    } else {
      return res.status(401).send({ message: "authToken cookie doesn't exist" });
    }
  };
  
  module.exports = removeCookieController;
  