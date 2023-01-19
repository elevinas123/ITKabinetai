const express =require("express")
const { getKab } = require("../controllers/kab")
const router = express.Router()

router.route("/").get(getKab)

module.exports = router