import express from 'express'
import handlers from './routes'
import dotenv from 'dotenv'
import cors from 'cors'
import morgan from 'morgan'
import { errorHandler } from './middlewares/error-handler'

const server = express()

const PORT = process.env.PORT || 5000

//Load ENV vars
dotenv.config()

//Cors enable
server.use(cors())

//middleware para parser json en el body
server.use(express.json())

//morgan
server.use(morgan('combined'))

//Routes
server.use('/api/v1', handlers)

//handlerErrors
server.use(errorHandler)

server.get('/', (req, res) => {
  res.json({ message: 'Deberias iniciar los request en /api/v1/<entidad>' })
})

server.listen(PORT, () => {
  console.log(`Servidor en http://localhost:${PORT}`)
})
