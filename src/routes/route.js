const express = require('express');
const router = express.Router();



const usercontroller = require("../controllers/usercontroller")
const bookController=require("../controllers/bookcontroller")
const reviewcontroller=require("../controllers/reviewcontroller")
const middleware=require("../middleware/auth.js")





//****************** USER API *************************************
router.post("/register",usercontroller.userCreate)
router.post("/login", usercontroller.userLogin)


//***************** BOOK API **************************************
router.post("/books",middleware.authentication,bookController.bookCreate)
router.get("/books",middleware.authentication,bookController.getBook)
router.get("/books/:bookId",middleware.authentication,bookController.getBookbyId)
router.put("/books/:bookId",middleware.authentication,bookController.bookUpdate)
router.delete("/books/:bookId",middleware.authentication,bookController.deletebyid)

//***************** REVIEW API ************************************
router.post("/books/:bookId/review",reviewcontroller.reviewCreate)
router.put("/books/:bookId/review/:reviewId",reviewcontroller.reviewUpdate)
router.delete("/books/:bookId/review/:reviewId",reviewcontroller.reviewDelete)


module.exports = router;
