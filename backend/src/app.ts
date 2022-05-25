import http from 'http'
import express from 'express'
import { Server } from 'socket.io'
import cors from 'cors'
import bodyParser from 'body-parser'

const app = express()

app.use(cors())
app.use(bodyParser.json())

app.get('/status', (req, res) => {
  res.status(200).send({ status: 'ok' })
})

app.post('/edit', (req, res) => {
  console.log(req.body, 'jaosdjkhasd')
  io.to('calamity').emit('FromAPI', req.body.name)
})

const server = http.createServer(app)
const io = new Server(server, {
  cors: {
    origin: '*',
    methods: ['GET', 'POST'],
  },
})

io.on('connection', (socket) => {
  console.log('New client connected')

  socket.join('calamity')

  socket.on('disconnect', () => {
    console.log('Client disconnected')
  })
})

export default server
