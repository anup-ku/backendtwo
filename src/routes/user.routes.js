import {Router} from "express";
import {loginUser,logoutUser,registerUser, 
refreshAccessToken} from "../controller/user.controller.js";
import { upload } from "../middlewares/multer.middleware.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";


const router = Router();

router.route("/register").post(
    upload.fields([
        { 
            name: "avatar", 
            maxCount: 1
        },

        
        {
            name: "images",
            maxCount: 1 
        },
    ]),
    registerUser
)

router.route("/Login").post(loginUser)

//secured routes
router.route("/logout").post(verifyJWT, logoutUser)
router.route("/refresh-token").post(refreshAccessToken)


export default router;