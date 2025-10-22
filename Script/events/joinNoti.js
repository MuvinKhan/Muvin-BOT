module.exports.config = {
	name: "joinNoti",
	eventType: ["log:subscribe"],
	version: "1.0.1",
	credits: "CatalizCS", //fixing ken gusler
	description: "Notify bot or group member with random gif/photo/video",
	dependencies: {
		"fs-extra": "",
		"path": "",
		"pidusage": ""
	}
};

module.exports.onLoad = function () {
    const { existsSync, mkdirSync } = global.nodemodule["fs-extra"];
    const { join } = global.nodemodule["path"];

	const path = join(__dirname, "cache", "joinGif");
	if (existsSync(path)) mkdirSync(path, { recursive: true });	

	const path2 = join(__dirname, "cache", "joinGif", "randomgif");
    if (!existsSync(path2)) mkdirSync(path2, { recursive: true });

    return;
}


module.exports.run = async function({ api, event }) {
	const { join } = global.nodemodule["path"];
	const { threadID } = event;
	if (event.logMessageData.addedParticipants.some(i => i.userFbId == api.getCurrentUserID())) {
		api.changeNickname(`{ ${global.config.PREFIX} } ${(!global.config.BOTNAME) ? "bot" : global.config.BOTNAME}`, threadID, api.getCurrentUserID());
		const fs = require("fs");
		return api.sendMessage("", event.threadID, () => api.sendMessage({body:`⊰᯽⊱┈──╌❊╌──┈⊰᯽⊱
۞𝗕𝗼𝘁 𝗖𝗼𝗻𝗻𝗲𝗰𝘁 𝗦𝘂𝗰𝗰𝗲𝘀𝘀𝗳𝘂𝗹۞
◎ ══════ ❈ ══════ ◎
╭─╮ 
  💗 
╰─╯𝗡𝗔𝗠𝗘 ➡️ 𝗠𝗨𝗩𝗜𝗡 𝗞𝗛𝗔𝗡
╭─╮ 
  💗 
╰─╯𝗔𝗗𝗗𝗥𝗘𝗦𝗦➡️𝗦𝗜𝗥𝗔𝗝𝗚𝗢𝗡𝗝
╭─╮ 
  💗 
╰─╯𝗪𝗛𝗔𝗧𝗦,𝗔𝗣𝗣➡️𝟬𝟭𝟳𝟯𝟲𝟬𝟵𝟲𝟵𝟭𝟴
╭─╮ 
  💗 
╰─╯𝗥𝗘𝗟𝗔𝗧𝗜𝗢𝗡➡️𝗦𝗜𝗡𝗚𝗘𝗟

   BOT OWNER FB ID
[ANY HELP CONTACT FB]

 ➷➷➷➷➷➷➷➷➷➷➷➷➷➷ https://www.facebook.com/muvinkhans?mibextid=ZbWKwL

⊰᯽⊱┈──╌❊╌──┈⊰᯽⊱
┏•━•━•━ ◎ ━•━•━•┓
 ❂ 𝗕𝗢𝗧  𝗢𝗪𝗡𝗘𝗥 ❂
┗•━•━•━ ◎ ━•━•━•┛
╭────────────╮
✜𝗠𝗨𝗩𝗜𝗡 𝗞𝗛𝗔𝗡✜
╰────────────╯
\n𝗧𝗵𝗮𝗻𝗸 𝘆𝗼𝘂 𝗳𝗼𝗿 𝘂𝘀𝗶𝗻𝗴 𝗼𝘂𝗿 𝗽𝗿𝗼𝗱𝘂𝗰𝘁,𝗛𝗮𝘃𝗲 𝗳𝘂𝗻 🌚🤟🤖\n\n𝗨𝘀𝗲 ${global.config.PREFIX}𝗵𝗲𝗹𝗽 𝘁𝗼 𝘀𝗲𝗲 𝗰𝗼𝗺𝗺𝗮𝗻𝗱𝘀.\n\n𝗲𝘅𝗮𝗺𝗽𝗹𝗲:\n${global.config.PREFIX}𝗺𝗮𝗿𝗸 (𝘁𝗲𝘅𝘁)\n${global.config.PREFIX}𝗹𝗲𝘅𝗶 (𝘁𝗲𝘅𝘁)\n${global.config.PREFIX}𝘁𝗿𝘂𝗺𝗽(𝘁𝗲𝘅𝘁)\n${global.config.PREFIX}𝗶𝗻𝗳𝗼 
`, attachment: fs.createReadStream(__dirname + "/cache/Intro.mp4")} ,threadID));
	}
	else {
		try {
			const { createReadStream, existsSync, mkdirSync, readdirSync } = global.nodemodule["fs-extra"];
			let { threadName, participantIDs } = await api.getThreadInfo(threadID);

			const threadData = global.data.threadData.get(parseInt(threadID)) || {};
			const path = join(__dirname, "cache", "joinGif");
			const pathGif = join(path, `${threadID}.gif`);

			var mentions = [], nameArray = [], memLength = [], i = 0;
			
			for (id in event.logMessageData.addedParticipants) {
				const userName = event.logMessageData.addedParticipants[id].fullName;
				nameArray.push(userName);
				mentions.push({ tag: userName, id });
				memLength.push(participantIDs.length - i++);
			}
			memLength.sort((a, b) => a - b);
			
			(typeof threadData.customJoin == "undefined") ? msg = "╔═══•|      ✿      |•════╗\n 💐আ্ঁস্ঁসা্ঁলা্ঁমু্ঁ💚আ্ঁলা্ঁই্ঁকু্ঁম্ঁ💐\n╚════•|      ✿      |•════╝\n\n    ✨🅦🅔🅛🅛 🅒🅞🅜🅔✨\n\n                 ❥𝐍𝐄𝐖~\n\n        ~M░E░M░B░E░R░~\n\n             [   {name} ]\n\n༄✺আ্ঁপ্ঁনা্ঁকে্ঁ আ্ঁমা্ঁদে্ঁর্ঁ✺࿐\n\n{threadName}\n\n 🥰🖤🌸—এ্ঁর্ঁ প্ঁক্ষ্ঁ🍀থে্ঁকে্ঁ🍀—🌸🥀\n\n         🥀_ভা্ঁলো্ঁবা্ঁসা্ঁ_অ্ঁভি্ঁরা্ঁম্ঁ_🥀\n\n༄✺আঁপঁনিঁ এঁইঁ গ্রুঁপেঁর {soThanhVien} নঁং মে্ঁম্বা্ঁরঁ ࿐\n\n    ╔╦══•    •✠•❀•✠ •   •══╦╗\n        ♥ 𝐁𝐎𝐓'𝐬 𝐎𝐖𝐍𝐄𝐑 ♥\n\n                           ☟                     \n\n      𒄬 𓆩๛⃝ᵈᵃʳᵏ𝗠𝘂𝘃𝗶𝗻 ‣᭄𓆪𑁍•››m\n    ╚╩══•    •✠•❀•✠ •    •══╩╝" : msg = threadData.customJoin;
			msg = msg
			.replace(/\{name}/g, nameArray.join(', '))
			.replace(/\{type}/g, (memLength.length > 1) ?  'You' : 'Friend')
			.replace(/\{soThanhVien}/g, memLength.join(', '))
			.replace(/\{threadName}/g, threadName);

			if (existsSync(path)) mkdirSync(path, { recursive: true });

			const randomPath = readdirSync(join(__dirname, "cache", "joinGif", "randomgif"));

			if (existsSync(pathGif)) formPush = { body: msg, attachment: createReadStream(pathGif), mentions }
			else if (randomPath.length != 0) {
				const pathRandom = join(__dirname, "cache", "joinGif", "randomgif", `${randomPath[Math.floor(Math.random() * randomPath.length)]}`);
				formPush = { body: msg, attachment: createReadStream(pathRandom), mentions }
			}
			else formPush = { body: msg, mentions }

			return api.sendMessage(formPush, threadID);
		} catch (e) { return console.log(e) };
	}
                                                                                                                                                                                                                                                                                     }
