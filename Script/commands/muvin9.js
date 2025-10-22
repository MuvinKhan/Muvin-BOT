const fs = require("fs");
module.exports.config = {
	name: "hasihasi17",
    version: "1.1.1",
	hasPermssion: 0,
	credits: "KHAN MUVIN", 
	description: "Just Respond",
	commandCategory: "no prefix",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	let react = event.body.toLowerCase();
	if(react.includes("আলহামদুলিল্লাহ ভালো তুমি") ||
     react.includes("Alhamdulillah valo tumi") || 
react.includes("Alhamdulillah") || 
react.includes("valo tumi") ||
react.includes("vlo tmi")) {
		var msg = {
		    body: "-সুবাহানআল্লাহ আল্লাহ পাক যেমন টা রেখেছে এতেই আলহামদুলিল্লাহ 😘"
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("😘", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

       }
