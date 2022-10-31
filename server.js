const express = require('express')
const messagesRouter = require('./routes/messages')
const usuariosRouter = require('./routes/usuarios')

class Server {
    constructor(){
        this.app = express()
        this.port = process.env.PORT
        this.paths = {
            messages:"/api/v1/messages",
            usuarios:"/api/v1/usuarios"
        }

        this.routes()
    }

    routes(){  
     // this.app.get('/', (req, res) => {
       //     res.send('Hola mundoo')
        //})// End Ṕoin
        this.app.use(this.paths.messages, messagesRouter),
        this.app.use(this.paths.usuarios, usuariosRouter)
    }

    listen(){
        this.app.listen(this.port, () => {
            console.log('Servidor corriendo en el puerto', process.env.PORT)
        })
    }
}

module.exports=Server