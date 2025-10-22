  const fs = require("fs");
module.exports.config = {
	name: "bossmuvin",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "VanHung - Fixed by LTD", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "muvin",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("তোর বস কে")==0 || event.body.indexOf("Ka tor boss")==0 || event.body.indexOf("Tor boss ka")==0 || event.body.indexOf("Boss ka")==0) {
		var msg = {
				body: "আমার বস ডার্ক মুভিন 😁😝এটা তার ফেসবুক আইডির লিংক👉https://www.facebook.com/muvinkhans?mibextid=ZbWKwL তার ফেসবুক আইডির নাম Muvin Khan😝🙈",
				attachment: fs.createReadStream(__dirname + `/noprefix/bossmuvin.mp3`)
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("🌺", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
