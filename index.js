require('dotenv').config()
const fs = require('fs')
const Discord = require('discord.js')
const client = new Discord.Client()

fs.readdir('./events/', (err, files) => {
  files.forEach(file => {
    const eventHandler = require(`./events/${file}`)
    const eventName = file.split('.')[0]
    client.on(eventName, arg => eventHandler(client, arg))
  })
})
client.login('NTI1MTEwNDUzMzA3NzAzMjk4.D0js4w.FuuDcgB3YiJzvDWmypsSKxSncQ0')
require('http').createServer().listen()