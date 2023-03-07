import express from 'express'
import { signin, signup, register } from '../controllers/auth.js';

const router = express.Router();

//CREATE A USER
router.post("/signup", signup)

//SIGN IN
router.post("/signin", signin)


//REGSITER
router.post("/register", register)

export default router;