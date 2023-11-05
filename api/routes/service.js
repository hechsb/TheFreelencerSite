const express = require("express");
const router = express.Router();
const multer =require('multer')
const upload = multer();
const{ addServiceToUser, getServicesForUser, getUserNameOfService, getServiceById, userApplyForJob, usersPending}=require("../controllers/service")

router.get("/getserviceUser/:userId",getServicesForUser)
router.get("/getUserNameOfService/:serviceId",getUserNameOfService)
router.get("/getServiceById/:serviceId",getServiceById)
router.get("/usersPending/:serviceId",usersPending)
router.post("/add/:userId",upload.single('image'),addServiceToUser)
router.post("/userApplyForJob/:userId/:serviceId", userApplyForJob)


module.exports = router;