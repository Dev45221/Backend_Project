const express = require('express');
const indexController = require('../controller/indexController')
const router = express.Router()

router.post("/v1/role", indexController.role)
router.get("/v1/role", indexController.getAllroles)
router.post("/v1/auth/signup", indexController.register)
router.post("/v1/auth/signin", indexController.login)
router.get("/v1/auth/me", indexController.getMe)
router.post("/v1/community", indexController.community)
router.get("/v1/community", indexController.getAllCommunities)

module.exports = {
    router
}