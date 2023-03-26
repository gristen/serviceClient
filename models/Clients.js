//Статусы
const {Schema,model} = require('mongoose')


const clientsShema = new Schema ({
    // Статус
    // status: {
    //     ref: 'status',
    //     type: Schema.Types.ObjectId,
    //     required: true
    // },
    // Фамилия
    surname: {
        type: String,
        required: true,
        min: 2,
        max: 40
    },
    // Имя
    name: {
        type: String,
        required: true,
        min: 2,
        max: 20
    },
    // Отчество
    patronymic: {
        type: String,
        max: 45,
        min: 2,
    },
    // idДанные организации
    // organizationData: {
    //     ref: 'organizationData',
    //     type: Schema.Types.ObjectId,
    //     require: true
    // },
    // Логин
    login: {
        type: String,
        required: true,
        min: 5,
        max: 25
    },
    // Почта
    email: {
        type: String,
        required: true,
        unique: true
    },
    // Номер телефона
    numberPhone: {
        type: String,
        required: true,
        unique: true
    },
    // Пароль
    password: {
        type: String,
        required: true,
        unique: true,
        min: 7,
        max: 25
    },
})

module.exports = model('clients',clientsShema)
