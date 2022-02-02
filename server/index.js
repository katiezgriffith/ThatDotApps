const express = require('express'); 
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 4000;
const {sequelize} = require ('./sequelize')
const bcrypt = require ('bcrypt')

//Middleware
app.use(express.json());
app.use(cors());

//Put endpoints here
app.post('/register', async (req, res) => {
    const {username, firstName,lastName, email, password} = req.body
    const checkUser = await sequelize.query(`
    SELECT * FROM users WHERE username = '${username}'
    `)
    if (checkUser[1].rowCount !== 0 ) {
        res.status(500).send('Username exists')
    } else {
        const salt = bcrypt.genSalt(10)
        const passwordHash = bcrypt.hashSync(password,salt)
        await sequelize.query(`
        INSERT INTO users(firstName, lastName, username, email, password)
        VALUES (
            '${firstName}',
            '${lastName}',
            '${username}',
            '${email},
            '${passwordHash}'
        )
    `)
        const userInfo = await sequelize.query(`
        SELECT id, username, firstName, lastName, email FROM users WHERE username= '${username}
    `)
        res.status(200).send(userInfo)
        }
    })


app.post('/login', async (req, res) => {
    const {username, password} = req.body
    const validUser = await sequelize.query(`
    SELECT * FROM users WHERE username = '${username}
    `)
    if (validUser[1].rowCount === 1) {
        if (bcrypt.compareSync(password, validUser[0][0].password) ){
            let object = {
                id: validUser[0][0].id,
                firstName: validUser[0][0].firstName,
                lastName: validUser[0][0].lastName,
                username
            }
            res.status(200).send(object)
            } else {
            res.status(500).send('Password is Incorrect')
                }
            } else {
            res.status(401).send ('Username is Incorrect')
            }

        })
    


 sequelize.authenticate()                    
app.listen(PORT, () => console.log( `Server running on
Port ${PORT}`));