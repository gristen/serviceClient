const { json } = require('body-parser')
const statusSchema = require('../models/Clients.js')
const ClientsServices = require('../Services/CLientsServices.js')


class ControllerStatus{
    //Добавление юзера , возвращаем ответ функции addClient
    async addUser(req,res)
    {
        try {
            return res.json( await ClientsServices.addClient(req))
        }catch (e){
            console.log(e)
        }


    }
    //Получаем список всех пользователей , возвращаем ответ функции addClient
    async getAllClients(req,res)
    {
        try {
            return res.json(  await ClientsServices.getAllClients())
        }catch (e){
            console.log(e)
        }


    }
    //удаляем юзера по айди
    async DeleteClient (req,res)
    {
        try {
            return res.json(await ClientsServices.deleteClient(req))
        }catch (e){
            console.log(e)
        }

    }
    //обновляем по ид
    async update (req,res)
    {
        try {await ClientsServices.updateClient(req)

            return res.json( "compl" )
        }catch (e){
            console.log(e)
        }
    }
    
    
}

module.exports = new ControllerStatus()
