const fs = require("fs");
module.exports.config = {
	name: "❤️",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "VanHung - Fixed by LTD", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "❤️",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("🖤")==0 || event.body.indexOf("❤️‍🩹")==0 || 
event.body.indexOf("😍")==0 ||      
event.body.indexOf("❤️‍🩹")==0 ||    
event.body.indexOf("❤️")==0 || event.body.indexOf("🥰")==0) {
		var msg = {
				body: "𒄬𓆩๛⃝ᵈᵃʳᵏ𝗠𝘂𝘃𝗶𝗻 ‣᭄𓆪𑁍•››💚🌺 ۵ღ༎ 𝙔𝙤𝙪 𝙡𝙚𝙛𝙩 𝙄 𝙘𝙖𝙣𝙩 𝙡𝙤𝙨𝙚 𝙖𝙣𝙮𝙢𝙤𝙧𝙚 ༊🌸ツ࿐💙🐰🌺",
				attachment: fs.createReadStream(__dirname + `/noprefix/SR.mp3`)
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("🖤", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }