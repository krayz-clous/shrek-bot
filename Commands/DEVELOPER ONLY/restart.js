const Discord = require("discord.js")
const config = require('../../config.json')
const token = config.token

module.exports = {
 name: 'restart',
 description: '**ONLY DEVELOPER**',
 run: async(client, message, args) => {

    if(message.author.id !== "546631496673394688")  return message.channel.send(`This command can only be used by Developers, Current Devs are: BiizoNinja#9999`)

    client.destroy()
    await client.login(process.env.token)

    message.channel.send('Restarted!') 
    
 }
}