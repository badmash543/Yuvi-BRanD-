/**
 * @author MintDaL
 * @warn Do not edit code or edit credits
 */

module.exports.config = {
  name: "info",
  version: "1.2.6",
  hasPermssion: 0,
  credits: "kensu",
  description: "info bot owner",
  commandCategory: "Dành cho người dùng",
  hide:true,
  usages: "",
  cooldowns: 5,
};


module.exports.run = async function ({ api, event, args, Users, permssion, getText ,Threads}) {
  const content = args.slice(1, args.length);
  const { threadID, messageID, mentions } = event;
  const { configPath } = global.client;
  const { ADMINBOT } = global.config;
   const { NDH } = global.config;
  const { userName } = global.data;
  const request = global.nodemodule["request"];
  const fs = global.nodemodule["fs-extra"];
  const { writeFileSync } = global.nodemodule["fs-extra"];
  const mention = Object.keys(mentions);
  delete require.cache[require.resolve(configPath)];
  var config = require(configPath);
  const listAdmin = ADMINBOT || config.ADMINBOT || [];
  const listNDH = NDH || config.NDH ||  [];
  {
    const PREFIX = config.PREFIX;
    const namebot = config.BOTNAME;
    const { commands } = global.client;
    const threadSetting = (await Threads.getData(String(event.threadID))).data || 
    {};
    const prefix = (threadSetting.hasOwnProperty("PREFIX")) ? threadSetting.PREFIX 
    : global.config.PREFIX;
    const dateNow = Date.now();
    const time = process.uptime(),
	      	hours = Math.floor(time / (60 * 60)),
		      minutes = Math.floor((time % (60 * 60)) / 60),
		      seconds = Math.floor(time % 60);
    const data = [
      "Bạn không thể tìm được lệnh admin tại 'help' của MintBot",
      "Đừng mong chờ gì từ MintBot.",
      "Cái đoạn này á? Của SpermBot.",
      "Nếu muốn không lỗi lệnh thì hãy xài những lệnh có trong help vì những lệnh lỗi đã bị ẩn rồi.",
      "Đây là một con bot được các coder của MiraiProject nhúng tay vào.",
      "Muốn biết sinh nhật của Mint thì hãy xài 'birthday'.",
      "Cặc.",
      "Cút.",
      "Lồn.",
      "Bạn chưa biết.",
      "Bạn đã biết.",
      "Bạn sẽ biết.",
      "Không có gì là hoàn hảo, MintBot là ví dụ.",
      "Mirai dropped.",
      "MintBot là MiraiProject nhưng module là idea của SpermBot.",
      "Bạn không biết cách sử dụng MintBot? Đừng dùng nữa.",
      "Muốn chơi game? Qua bot khác mà chơi đây không rảnh",
      "MintBot có thể hiểu phụ nữ nhưng không thể có được họ.",
      "MintBot cân spam nhưng không có gì đáng để bạn spam."
    ];
    var link = [
      ""https://i.imgur.com/Mrq6wJj.jpeg",",
    ];
    
    var i = 1;
    var msg = [];
    const moment = require("moment-timezone");
    const date = moment.tz("Asia/Kolkata").format("HH:MM:ss L");
    for (const idAdmin of listAdmin) {
      if (parseInt(idAdmin)) {
        const name = await Users.getNameUser(idAdmin);
        msg.push(`${i++} ${name} - ${idAdmin}`);
      }
    }
    var msg1 = [];
            for (const idNDH of listNDH) {
                if (parseInt(idNDH)) {
                  const name1 = (await Users.getData(idNDH)).name
                    msg1.push(`${i++} ${name1} - ${idNDH} `);
                }
            }
    var callback = () => 
      api.sendMessage({ body: `🌹𝐀𝐃𝐌𝐈𝐍 𝐀𝐍𝐃 𝐁𝐎𝐓 𝐈𝐍FO 🌹
─────────────────\n♪♪♪♪♪♪♪『.{🍒💙•••Ɓ❍ʈ Ƈøɳɳɛƈʈɛɗ•••💞🌿
    ╾━╤デ╦︻(▀̿Ĺ̯▀̿ ̿)🇮🇳 𝐀𝐃𝐌𝐈𝐍 𝐀𝐍𝐃 𝐁𝐎𝐓 𝐈𝐍𝐅𝐎𝐑𝐌𝐀𝐓𝐈𝐎𝐍 🇮🇳 
(⌐▀͡ ̯ʖ▀)︻̷┻̿═━一-

☄️Bot Name︎︎︎☄️  𒁍≛⃝●✦༺🌺 𝐃𝐢𝐬𝐊𝐨 𝐑𝐚𝐉𝐚💋💋🥀🌺༻✦💔🪽

☄️💐🍁★𝙊𝙒𝙉𝙀𝙍 + 𝙈𝘼𝘿𝙀 💦🕊️𝘽𝙔★

✦⸙𝛥︵⸦⸧๏ᆖᆖ๏⸦⸧ 員⸨𝕆︵𝕆⸩⸙ 𓆩⃝𝐓Ħ͜͡ə̚ 𝐕͇͇̄̄̄̄𝐢𝐥𝐥͜͡𝐚𝐢𝐧̄̄̄͢•‣᭄ 【 ̈̈̈̈̈̈𝐊𝐢łł͜͡𝐞𝐫 ̠̠̠̠̠̠̠̽̽̽̽𝐛ø͜͡Ŷ𓆪 𒆜 𒋤⃝⃟̊̃Ŧ𝐮 𝐇̂𝐨͜͡𝐠𝐢 𝐀̄𝐩͜͡͡𝐧𝐞 ʘ͜͡ʘ⦕› 𝐏𝐚͜͡𝐩𝐚 ĸ͜͡𝐢 輪 ⃝ 𝐏𝐚͜͡𝐫𝐢 𝐇̂𝐮̩̩̩̩̩̩̊̊̊̊̊̊̊̊͜͡𝐦 𝐁𝐇̂͜͡͡𝐢 𒉽‡‣ ̄̄̄̄̄̄̄̄𝐀̄𝐩͜͡𝐧𝐢 ̀̀̀̀̀̀̀𝐌͜✦

★★᭄𝙁𝘼𝘾𝙀𝘽𝙊𝙊𝙆 𝙄𝘿 𝙇𝙄𝙉𝙆 🥀🌿,:

✦ https://www.facebook.com/profile.php?id=100074809252080 ✦ 
🌿🥀𝙁𝙊𝙇𝙇𝙊𝙒 𝙈𝙀 𝙊𝙉
 𝙄𝙉𝙎𝙏𝘼𝙂𝙍𝘼𝙈🌿🥀😋https://www.instagram.com/_yuvi___rajput___5159?igsh=MWVucjR5MjR1ZXlrMA==
✧══════•❁❀❁•══════✧

🌸Bot Prefix🌸☞︎︎︎☜︎︎︎✰ .

♥️Bot Owner♥️ ☞︎︎︎ཫ༄𒁍✬✿╭┳✪✪╤───────────➛➣ ★�⸙𝛥︵⸦⸧๏ᆖᆖ๏⸦⸧ 員⸨𝕆︵𝕆⸩⸙ 𓆩⃝𝐓Ħ͜͡ə̚ 𝐕͇͇̄̄̄̄𝐢𝐥𝐥͜͡𝐚𝐢𝐧̄̄̄͢•‣᭄ 【 ̈̈̈̈̈̈𝐊𝐢łł͜͡𝐞𝐫 ̠̠̠̠̠̠̠̽̽̽̽𝐛ø͜͡Ŷ𓆪 𒆜 𒋤⃝⃟̊̃Ŧ𝐮 𝐇̂𝐨͜͡𝐠𝐢 𝐀̄𝐩͜͡͡𝐧𝐞 ʘ͜͡ʘ⦕› 𝐏𝐚͜͡𝐩𝐚 ĸ͜͡𝐢 輪 ⃝ 𝐏𝐚͜͡𝐫𝐢 𝐇̂𝐮̩̩̩̩̩̩̊̊̊̊̊̊̊̊͜͡𝐦 𝐁𝐇̂͜͡͡𝐢 𒉽‡‣ ̄̄̄̄̄̄̄̄𝐀̄𝐩͜͡𝐧𝐢 ̀̀̀̀̀̀̀𝐌͜  ✬✿╭┳✪✪╤───────────➛➣☜︎︎︎✰ 





✅Thanks for using 𒁍●☆●🥀💔🪽 Bot🖤


🦢🍒•••ꞪɛᏒɛ ɪʂ ɮ❍┼ ❍ωɳɜɽ ɳaʍɜ•••🌷💞
┏━🕊️━━°❀•°:🎀🧸💙🧸🎀:°•❀°━━💞━┓
🌸✦✧✧✧✧✰🍒✬✿╭┳✪✪╤───────────➛➣ ★�*★᭄𝗢𝘄𝗻𝗲𝗿 ཫ༄𒁍✬✿╭┳✪✪╤───────────➛➣ ★�⸙𝛥︵⸦⸧๏ᆖᆖ๏⸦⸧ 員⸨𝕆︵𝕆⸩⸙ 𓆩⃝𝐓Ħ͜͡ə̚ 𝐕͇͇̄̄̄̄𝐢𝐥𝐥͜͡𝐚𝐢𝐧̄̄̄͢•‣᭄ 【 ̈̈̈̈̈̈𝐊𝐢łł͜͡𝐞𝐫 ̠̠̠̠̠̠̠̽̽̽̽𝐛ø͜͡Ŷ𓆪 𒆜 𒋤⃝⃟̊̃Ŧ𝐮 𝐇̂𝐨͜͡𝐠𝐢 𝐀̄𝐩͜͡͡𝐧𝐞 ʘ͜͡ʘ⦕› 𝐏𝐚͜͡𝐩𝐚 ĸ͜͡𝐢 輪 ⃝ 𝐏𝐚͜͡𝐫𝐢 𝐇̂𝐮̩̩̩̩̩̩̊̊̊̊̊̊̊̊͜͡𝐦 𝐁𝐇̂͜͡͡𝐢 𒉽‡‣ ̄̄̄̄̄̄̄̄𝐀̄𝐩͜͡𝐧𝐢 ̀̀̀̀̀̀̀𝐌͜  ✬✿╭┳✪✪╤───────────➛➣🌸
┗━🕊️━━°❀•°:🎀🧸💙🧸🎀:°•❀°━━💞━┛    
🕊️🌸
...
✮┼💞┼✮
☸🕊️━━•🌸•━━🕊️☸
✮☸✮
✮┼🍫┼✮
☸🎀━━•🧸•━━🎀☸
✮┼🦢┼✮
✮☸✮
☸🌈━━•🤍•━━🌈☸
✮☸✮
✮┼❄️┼✮`, attachment: fs.createReadStream(__dirname + "/cache/Abhi.jpg"), }, event.threadID, () => fs.unlinkSync(__dirname + "/cache/abhi.jpg"));
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname + "/cache/abhi.jpg")).on("close", () => callback()); 
  }
};
