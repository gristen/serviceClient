const Router = require('express')
const bodyParser = require('body-parser')



const router = new Router()
const conroller = require("../controllers/controller")
const urlencodedParser = bodyParser.urlencoded({ extended: false })


router.post('/auth',urlencodedParser,conroller.addUser)
router.get('/getAllClients',conroller.getAllClients)
router.put('/update',conroller.update)
router.delete('/delete/:id',conroller.DeleteClient)


module.exports = router