const {Router} = require("express")
const { peopleController } = require("../controllers/peopleC.controller")
const router = Router()

router.post("/people", peopleController.createPeople)
router.delete("/people/:id",peopleController.deletePeople)
router.get("/people", peopleController.getAllPeople)

module.exports = router