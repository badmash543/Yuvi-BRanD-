module.exports.config = {
  name: "pair",
  version: "1.0.0", 
  hasPermssion: 0,
  credits: "PREM BABU",
  description: "THIS BOT IS MR PREM SHARMA",
  commandCategory: "COUPLE LOVE PAIRING", 
  usages: "pair", 
  cooldowns: 15
};
module.exports.run = async function({ api, event,Threads, Users }) {
        const axios = global.nodemodule["axios"];
        const fs = global.nodemodule["fs-extra"];

        var { participantIDs } =(await Threads.getData(event.threadID)).threadInfo;
        var tle = Math.floor(Math.random() * 101);
        var namee = (await Users.getData(event.senderID)).name
        const botID = api.getCurrentUserID();
        const listUserID = event.participantIDs.filter(ID => ID != botID && ID != event.senderID);
        var id = listUserID[Math.floor(Math.random() * listUserID.length)];
        var name = (await Users.getData(id)).name
        var arraytag = [];
                arraytag.push({id: event.senderID, tag: namee});
                arraytag.push({id: id, tag: name});

  
        let Avatar = (await axios.get( `https://graph.facebook.com/${event.senderID}/picture?width=512&height=512&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`, { responseType: "arraybuffer" } )).data; 
            fs.writeFileSync( __dirname + "/cache/avt.png", Buffer.from(Avatar, "utf-8") );

        let gifLove = (await axios.get( `https://i.imgur.com/MBETCWy.gif`, { responseType: "arraybuffer" } )).data; 
            fs.writeFileSync( __dirname + "/cache/giflove.png", Buffer.from(gifLove, "utf-8") );

        let Avatar2 = (await axios.get( `https://graph.facebook.com/${id}/picture?width=512&height=512&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`, { responseType: "arraybuffer" } )).data;
            fs.writeFileSync( __dirname + "/cache/avt2.png", Buffer.from(Avatar2, "utf-8") );

        var imglove = [];
              
              imglove.push(fs.createReadStream(__dirname + "/cache/avt.png"));
              imglove.push(fs.createReadStream(__dirname + "/cache/giflove.png"));
              imglove.push(fs.createReadStream(__dirname + "/cache/avt2.png"));

        var msg = {body: `🌸===『*★𝗖𝗿𝗲𝗱𝗶𝘁'𝘀 𒁍✬✿╭┳✪✪╤───────────➛➣ ★�*★᭄𝗢𝘄𝗻𝗲𝗿 ཫ༄𒁍≛⃝𝐌𝐑.𒁍✬✿╭┳✪✪╤───────────➛➣ ★�⸙𝛥︵⸦⸧๏ᆖᆖ๏⸦⸧ 員⸨𝕆︵𝕆⸩⸙ 𓆩⃝𝐓Ħ͜͡ə̚ 𝐕͇͇̄̄̄̄𝐢𝐥𝐥͜͡𝐚𝐢𝐧̄̄̄͢•‣᭄ 【 ̈̈̈̈̈̈𝐊𝐢łł͜͡𝐞𝐫 ̠̠̠̠̠̠̠̽̽̽̽𝐛ø͜͡Ŷ𓆪 𒆜 𒋤⃝⃟̊̃Ŧ𝐮 𝐇̂𝐨͜͡𝐠𝐢 𝐀̄𝐩͜͡͡𝐧𝐞 ʘ͜͡ʘ⦕› 𝐏𝐚͜͡𝐩𝐚 ĸ͜͡𝐢 輪 ⃝ 𝐏𝐚͜͡𝐫𝐢 𝐇̂𝐮̩̩̩̩̩̩̊̊̊̊̊̊̊̊͜͡𝐦 𝐁𝐇̂͜͡͡𝐢 𒉽‡‣ ̄̄̄̄̄̄̄̄𝐀̄𝐩͜͡𝐧𝐢 ̀̀̀̀̀̀̀𝐌͜  ✬✿╭┳✪✪╤───────────➛➣🍒💐)✪��★  ✬✿╭┳✪✪╤───────────➛➣____________________________________________________________________‎‎[•||•●•||•┼┼──🌸𝐓ʋ𝗺𝘀𝗮 𝐊❍ıı 𝐏ɣ𝗮𝗮ɽ𝗮 𝐊❍ıı  𝐌𝗮𝘀❍𝗺 𝐍𝗮Ħıı 𝐇𝐚ıı•||•🐬•||•]]
🌹✦━━━━━🌹━━🌹━━━━━✦🌹
\n[•||•●•||•┼┼──🌸🌿𝐓ʋ𝗺 𝐉𝗮𝗮η  𝐇❍ 𝐌ƏɽƏ 𝐓ʋ𝗺ĦƏ 𝐌𝗮ɭʋ𝗺 𝐍𝗮Ħıı 𝐇𝐚ıı•||•🌸•||• ]]
🌹✦━━━━━🌹━━🌹━━━━━✦🌹
\nAAP DONON KA PYAR👉 ${tle} HAIN 🤐👈\n`+namee+" "+"♥️"+" "+name, mentions: arraytag, attachment: imglove}
        return api.sendMessage(msg, event.threadID, event.messageID)
}
