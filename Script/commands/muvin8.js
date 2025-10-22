const fs = require("fs");
module.exports.config = {
	name: "hasi16",
    version: "1.1.1",
	hasPermssion: 0,
	credits: "MUVIN KHAN", 
	description: "Just Respond",
	commandCategory: "no prefix",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	let react = event.body.toLowerCase();
	if(react.includes("kemon acho") ||
     react.includes("কেমন আছো") || 
react.includes("কেমন আছেন") || 
react.includes("kemon asen") ||
react.includes("kmn aso")) {
		var msg = {
		    body: "-জ্বী আলহামদুলিল্লাহ ভালো আছি আপনি কেমন আছেন আপনার পরিবারের সবাই কেমন আছে ☺"
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🖤", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

    }
