const {Sequelize} = require ('sequelize')


const sequelize = new Sequelize(
    "postgres://cvkfwgervhntty:60ddb7a9136b303248f17527ad903b96e4a308a976cccd8b11a166317d2e9ac1@ec2-34-233-157-9.compute-1.amazonaws.com:5432/ddgj3ocsr4c365"

    ,{
        dialect: "postgres",
        dialiectoptions: {
            ssl:{
                require: true,
                rejectUnAuthorized:false
            }

        }
    }

)

module.exports = sequelize