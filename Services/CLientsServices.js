const ClientsSchema = require('../models/Clients.js')
const { json } = require('body-parser')
class StatusServices
{
    async addClient(req)
    {
       const client = new ClientsSchema(req.body) // создаем пользователя
       await client.save()//сохраняем
       return client  // возвращем пользователя которого создали
       
       
    }
    //получаем всех пользователей
    async getAllClients()
    {
         return ( await ClientsSchema.find())
    }
    async deleteClient(req)
    {

        await ClientsSchema.deleteMany(req.body) //функция удаления по ид
        return ("Пользователь успешно удален") //сообщения об успехе
    }
    async updateClient (req)
    {
         await ClientsSchema.findByIdAndUpdate(req.body._id,req.body,{new:true}) // ищем по ид и обновляем данные
    }

   
}

module.exports = new StatusServices()