const fs = require("fs");
module.exports.config = {
	name: "hasi23",
    version: "1.1.1",
	hasPermssion: 0,
	credits: "MUVIN KHAN", 
	description: "Just Respond",
	commandCategory: "no prefix",
    cooldowns: 5,};
module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	let react = event.body.toLowerCase();
	if(react.includes("তোমার নানির খালি ঘর ") ||
     react.includes("tomar nanir khali ghor") || 
react.includes("তোর নানির খালি ঘর") || 
react.includes("tor nanir khali ghor ") ||
react.includes("তোর নানির হেডা")) {
		var msg = {
		    body: "-হুম ওই ঘরে তোর বউরে নিয়া আমি বেগুন গাছ লাগাই তোর কোনো সমস্যা 🍁🙄"
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🍁", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

