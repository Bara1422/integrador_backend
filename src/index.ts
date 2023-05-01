import express from 'express'
import handlers from './routes'
import dotenv from 'dotenv'
import cors from 'cors'
import morgan from 'morgan'
import { errorHandler } from './middlewares/error-handler'
import { Client } from 'pg'

const server = express()
const client = new Client({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
})

client.connect()

const PORT = process.env.PORT || 5000

//Load ENV vars
dotenv.config()

//Cors enable
const corsOptions = {
  origin: 'https://tod-gaming-reactintegrador-bara1422.vercel.app',
  optionsSuccessStatus: 200
}
server.use(cors(corsOptions))

//middleware para parser json en el body
server.use(express.json())

//morgan
server.use(morgan('combined'))

//Routes
server.use('/api/v1', handlers)

//handlerErrors
server.use(errorHandler)

server.get('/', (req, res) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.json({ message: 'Deberias iniciar los request en /api/v1/<entidad>' })
})

server.listen(PORT, () => {
  console.log(`Servidor en http://localhost:${PORT}`)
})
