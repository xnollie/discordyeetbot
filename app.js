const Discord = require('discord.js');
const client = new Discord.Client();
var fs = require("fs");

var yoteResponses = ["Say yote again motherfucker I dare you ...", "Umm 'scuse me it's yeeted*", "The past tents of yeet is yeeted. Are you tupid or something?", "I shall yeet your yote and raise you a yeeted*"];

// yeets in random text channel
function randomYeet(){
	var randomChannel = client.channels.get(client.channels.randomKey());
	if(randomChannel.type == "text"){
		randomChannel.send("YEET "+client.guilds.get(client.guilds.firstKey()).emojis.random());
	}
}

// pings sub-human(s?) in random text channel
function randomPing(){
	var randomChannel = client.channels.get(client.channels.randomKey());
	if(randomChannel.type == "text"){
		randomChannel.send("ay fuck you <@131883237583618050>");
	}
}

// checks whether users have yeeted in the past 2592000000 miliseconds (30 days) and pings them in #yeet if they haven't
//function lastYeet(){
	//fs.readFile("userdata.json", "utf8", function(err, data){
		//if(data){
			//data = JSON.parse(data);
			//Object.keys(data).forEach(function(user){
				//if(parseInt(data[user].timeSinceLastYeet) + 2592000000 <= Date.now() && parseInt(data[user].timeSinceLastYeet) !== 0){
					//client.channels.get("377221252546297857").send("<@"+user+"> * sniffles * please yeet soon "+client.guilds.get(client.guilds.firstKey()).emojis.get("378915032349540352")); // yeetcord yeet channel
					//client.channels.get("440454291346554880").send("<@"+user+"> * sniffles * please yeet soon "+client.guilds.get(client.guilds.firstKey()).emojis.get("458005921013170186")); // test server yeet channel
				}
			});
		}
		//else{
			//var userdata = {};
			//client.guilds.get(client.guilds.firstKey()).members.forEach(function(member){
				//if(!member.user.bot){
					//userdata[member.user.id] = {"timeSinceLastYeet": 0/*Date.now()*/};
				}
			});
			//fs.writeFile("userdata.json", JSON.stringify(userdata), function(err){
				//if(err)throw err;
			});
		}
	});
}

client.on("ready", () =>{
	//infinite loop executing randomYeet at random time interval between 1 and 10 hours (numbos in milliseconds)
	(function loopYeet(){
		var randomTime = Math.round(3600000 + Math.random() * 32400000);
		setTimeout(function(){
			randomYeet();
			loopYeet();
		}, randomTime);
	}());

	//infinite loop executing randomPing at random time interval between 1 and 7 days (numbos in milliseconds)
	(function loopPing(){
		var randomTime = Math.round(84000000 + Math.random() * 518400000);
		setTimeout(function(){
			randomPing();
			loopPing();
		}, randomTime);
	}());

	// infinite loop executing lastYeet every day
	(function loopLastYeet(){
		setTimeout(function(){
			lastYeet();
			loopLastYeet();
		}, 86400000);
	}());
});

//client.on("guildMemberAdd", member => {
	//fs.readFile("userdata.json", "utf8", function(err, data){
		//data = JSON.parse(data);
		//if(!member.user.bot){
			//data[member.user.id] = {"timeSinceLastYeet": Date.now()};
		}
		//fs.writeFile("userdata.json", JSON.stringify(data), function(err){
			//if(err)throw err;
		});
	});
});

//client.on("guildMemberRemove", member => {
	//fs.readFile("userdata.json", "utf8", function(err, data){
		//data = JSON.parse(data);
		//if(!member.user.bot){
			//delete data[member.user.id];
		}
		//fs.writeFile("userdata.json", JSON.stringify(data), function(err){
			//if(err)throw err;
		});
	});
});

client.on("message", message => {
	// This event will run on every single message received, from any channel or DM.

	// It's good practice to ignore other bots. This also makes your bot ignore itself
	// and not get into a spam loop (we call that "botception").
	if(message.author.bot) return;

	// if message contains yeet drop a big yeet right back at em with a random emote
	if(message.content.toLowerCase().match(/y[\s]*[e3][\s]*[e3]+[\s]*t/)){
		if(Math.floor(Math.random() * 1000000) === 373737){
			message.channel.send("bitch");
		}
		else{
			message.channel.send("YEET "+message.guild.emojis.random());
		}

		// reset a user's last yeet timestamp
		fs.readFile("userdata.json", "utf8", function(err, data){
			data = JSON.parse(data);
			data[message.author.id].timeSinceLastYeet = Date.now();
			fs.writeFile("userdata.json", JSON.stringify(data), function(err){
				if(err) throw err;
			});
		});
	}

	// if message contains yote drop a randomly selected reply from responses array
	if(message.content.toLowerCase().match(/yote/)){
		message.channel.send(yoteResponses[Math.floor(Math.random() * (yoteResponses.length -1))])
	}

	// 1 in 100 chance to ping user
	*if(Math.floor(Math.random() * 100) === 37){
		message.channel.send("YEET! <@131883237583618050>"); // ping Matthias for ballbusting purposes
		//message.channel.send("YEET! <@283767301033951233>"); // ping Semanari for meme purposes
		//message.channel.send("YEET! <@88328049401040896>"); // ping Hailey for testing purposes
		//message.channel.send("YEET! <@242656407164420096>"); // ping Zongo for testing purposes
	}*/

	// 1 in a 100.000 chance for a user to get uwu'd
	if(Math.floor(Math.random() * 100000) === 37){
		message.channel.send(message.author.toString()+" uwu");
	}
});

client.login(process.env.BOT_TOKEN);
