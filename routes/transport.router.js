const {Router} = require("express")
const { transportController } = require("../controllers/transport.controller")
const router = Router()

router.post("/trans", transportController.createTransport)
router.delete("/trans/:id",transportController.deleteTransport)
router.get("/trans", transportController.getAllTransport)

module.exports = router