const Kab = require("../models/Kabinetai")

const getKab = async (req, res)=> {
    const {diena, pamoka} = req.query
    console.log(diena, pamoka)
    try {
        const kab = await Kab.findOne({})
        if (!diena) {
            return res.status(400).json({msg: "please provide a diena"})
        }
        if (!(diena in kab)) {
            return res.status(400).json({msg: "bloga diena"})
        }
        if (pamoka) {
            if (!(pamoka in kab[diena])) {
                return res.status(400).json({msg: "bloga pamoka"})
            }
            return res.status(200).json({data: kab[diena][pamoka]})
        }
            
        res.status(200).json({data: kab[diena], diena: true})
    } catch (err) {
        console.log(err)
    }
}



module.exports = {
    getKab
}