const express = require('express');
const { handleGetAllUsers, handleAddUser, handleGetUserById } = require('../controllers/user');
const router = express.Router();


// // Add users (POST)
// router.post("/", handleAddUser)

// // List all users (HTML)
// router.get("/", handleGetAllUsers)

//combining above code to refactor
router.route('/')
    .get(handleGetAllUsers)
    .post(handleAddUser)

//show speific user (DYNAMIC ROUTE)
router.get("/:id", handleGetUserById)

module.exports = router