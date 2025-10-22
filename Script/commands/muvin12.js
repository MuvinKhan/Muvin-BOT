const fs = require("fs");
module.exports.config = {
	name: "hasi25",
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
	if(react.includes("রোবট কই") || 
react.includes("রোবট") ||
react.includes("robot")) {
		var msg = {
		    body: "-এই তো সোনা আমি এখানে আমাকে কি দেখতে পাচ্ছো না 🙈🙈"
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🇧🇩", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

       }
