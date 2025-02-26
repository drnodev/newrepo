const invModel = require("../models/inventory-model")
const utilities = require("../utilities/")

const invCont = {}

invCont.buildByClassificationId = async function (req, res, next) {
    try {
        const classification_id = req.params.classificationId
        const data = await invModel.getInventoryByClassificationId(classification_id)
        const grid = await utilities.buildClassificationGrid(data)
        let nav = await utilities.getNav()
        const className = data[0].classification_name
        res.render("./inventory/classification", {
            title: className + " vehicles",
            nav,
            grid,
        })   
    } catch (error) {
        next(error)
    }
}


invCont.buildByCardId = async function (req, res, next){
    try {
        const cardId = req.params.cardId
        const data   = await invModel.getInventoryById(cardId)
        const grid = await utilities.buildByCardId(data)
        let nav = await utilities.getNav()

console.log(data);


        res.render("./inventory/details",{
            title: `${data.inv_year} ${data.inv_make} ${data.inv_model}`,
            nav,
            grid
        })   
    } catch (error) {
        next(error)
    }
}



module.exports = invCont