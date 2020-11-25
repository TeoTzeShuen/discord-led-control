// Variable declaration - 
// all variables not in a function go under this line
prefix = 'bot '
messagerecievedtext = 'ok - pinging lights...'
messagedebugtext = 'stats:'

//Discord stuff begin
const Discord = require('discord.js');
const client = new Discord.Client();
//Discord stuff end

//Flux stuff begin
const { Control } = require('magic-home');
let light = new Control("192.168.1.100");
//Flux stuff end

//config stuff goes here
const config = require('./config.json');
//config stuff ends

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

//one line, on off rgbw
client.on('message', msg => {
    try
    {
        switch (msg.content){
            case (prefix + 'led on'):
            msg.reply(messagerecievedtext);
                light.setPower(true).then(success => {
                msg.reply('success');
            });
            break;
            case(prefix + 'led off'):
            msg.reply(messagerecievedtext);
                light.setPower(false).then(success => {
                msg.reply('success');
            });
            break;
            case(prefix + 'led red'):
            msg.reply(messagerecievedtext);
                light.setColor(255,0,0).then(success => {
                msg.reply('success');
            });
            break;
            case(prefix + 'led green'):
            msg.reply(messagerecievedtext);
                light.setColor(0,255,0).then(success => {
                msg.reply('success');
            });
            case(prefix + 'led blue'):
            msg.reply(messagerecievedtext);
                light.setColor(0,0,255).then(success => {
                msg.reply('success');
            });
            case(prefix + 'led white'):
            msg.reply(messagerecievedtext);
                light.setColor(255,255,255).then(success => {
                msg.reply('success');
            });
        }  
    }
    catch
    {
        msg.reply('something went wrong :(');
    }
});


//BOT TOKEN - do not touch
client.login(config.token);