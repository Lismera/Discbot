
var Discord = require('discord.io');
var logger = require('winston');
var auth = require('./auth.json');
var counter = new Map();
var user1 = "darthven#6848";
var user2 = "Hellian#8943";
var user3 = "Doxar#2463";
var user4 = "SyiniT#6481";
var user5 = "nikolas#9522";
var user6 = "Vital Madness#2383";
var user7 = "Marselliy#9243";
var user8 = "Silver#3451";

// Configure logger settings
logger.remove(logger.transports.Console);
logger.add(new logger.transports.Console, {
    colorize: true
});
logger.level = 'debug';
// Initialize Discord Bot
var bot = new Discord.Client({
   token: "NjA0MzA2NDMxMTg5MDU3NTQ2.XTsDQg.MO9qTl9phcpcxjSUks1Kgi5RlWA",
   autorun: true
});
bot.on('ready', function (evt) {
    logger.info('Connected');
    logger.info('Logged in as: ');
    logger.info(bot.username + ' - (' + bot.id + ')');
});
bot.on('message', function (user, userID, channelID, message, evt) {
    // Our bot needs to know if it will execute a command
    // It will listen for messages that will start with `!`
    if (message.substring(0, 1) == '!') {
        var args = message.substring(1).split(' ');
        var cmd = args[0];
       
        args = args.splice(1);
        switch(cmd) {
            // !ping
            case 'ping':
                bot.sendMessage({
                    to: channelID,
                    message: 'Pong!'
                });
            break;
            // !addpeople
	    case 'addpeople':

	    function counter1(user) {
		if (message.includes(user)) {
			if (counter.has(user)) {
				let i = counter.get(user);
				i++;
				counter.set(user, i);
			}

			else {
				counter.set(user , 1);
			}

			bot.sendMessage({
            to: channelID,
            message: 'Initiated: ' + "Autist name:" + user + " ,Autist score: " + counter.get(user)
                });
		}
	}
		
		counter1(user1);
		counter1(user2);
		counter1(user3);
		counter1(user4);
		counter1(user5);
		counter1(user6);
		counter1(user7);
		counter1(user8);

        }
     }
});