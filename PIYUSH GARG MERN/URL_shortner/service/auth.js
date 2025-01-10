//USING HASH MAP 

// const sessionIdToUserMap = new Map();

// function setUser(id, user) {
//   sessionIdToUserMap.set(id, user);
// }

// function getUser(id) {
//   return sessionIdToUserMap.get(id);
// }


// USING JWT WEB TOKENS
const jwt = require('jsonwebtoken');
const secretKey = "Rakesh@123$2024"

function setUser(user) {
  if (!jwt) {
    return null;
  }
  else {
    return jwt?.sign({
      _id: user._id,
      email: user.email
    }, secretKey)  //passing payload with secret key
  }
}

function getUser(token) {
  if (token) {
    if (!jwt) {
      return null;
    }
    else {
      return jwt?.verify(token, secretKey);
    }
  }
}

module.exports = {
  setUser,
  getUser,
};