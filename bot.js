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

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

//one line, on off rgbw
client.on('message', msg => {
    try
    {
        //standard ONOFF commands
        if (msg.content === prefix + 'led on') {
            msg.reply(messagerecievedtext);
                light.setPower(true).then(success => {
                msg.reply('success');
              });
        }
        if (msg.content === prefix + 'led off') {
            msg.reply(messagerecievedtext);
                light.setPower(false).then(success => {
                msg.reply('success');
            });
        }
        //rgb +w(r+g+b)
        if (msg.content === prefix + 'led red') {
            msg.reply(messagerecievedtext);
                light.setColor(255,0,0).then(success => {
                msg.reply('success');
            });
            
        }
        if (msg.content === prefix + 'led green') {
            msg.reply(messagerecievedtext);
                light.setColor(0,255,0).then(success => {
                msg.reply('success');
            });
        }
        if (msg.content === prefix + 'led blue') {
            msg.reply(messagerecievedtext);
                light.setColor(0,0,255).then(success => {
                msg.reply('success');
            });
        }
        if (msg.content === prefix + 'led white') {
            msg.reply(messagerecievedtext);
                light.setColor(255,255,255).then(success => {
                msg.reply('success');
            });
        }
        if (msg.content === prefix + 'led debug') {
            msg.react('✔️');
            msg.reply('debug started @' + Date.now());
            msg.reply('Authenticating to discord servers...');
            client.channels.cache.get(780593453624066078).send("hi");
        }
    }
    catch
    {
        msg.reply('something went wrong :(');
    }
});


//BOT TOKEN - do not touch
client.login('NzU4MTU3NjIxNzMxMjYyNDg0.X2q3Tg.mN0ctlJcAnnE4qnacDB-UYFYJ3Y');