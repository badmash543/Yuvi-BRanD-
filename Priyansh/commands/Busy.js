module.exports.config = {
  name: "busy",
  version: "1.0.0",
  permissions: 2,
  credits: "Ishika",
  description: "Turn busy mode on or off",
  usages: "[reason]",
  commandCategory: "busy",
  cooldowns: 5
};

const busyPath = __dirname + '/cache/busy.json';
const fs = require('fs');

module.exports.onLoad = () => {
  if (!fs.existsSync(busyPath)) fs.writeFileSync(busyPath, JSON.stringify({}));
}

module.exports.handleEvent = async function({ api, event, Users }) {
    let busyData = JSON.parse(fs.readFileSync(busyPath));
    var { senderID, threadID, messageID, mentions } = event;
    if (senderID in busyData) {
        var info = busyData[senderID];
        delete busyData[senderID];
        fs.writeFileSync(busyPath, JSON.stringify(busyData, null, 4));
        return api.sendMessage(`आ गए आप वापिस ,😍😍`, threadID, () => {
            if (info.tag.length == 0) api.sendMessage("मेरे से झूठ ना बोला करो ☹️", threadID);
            else {
                var msg = "";
                for (var i of info.tag) {
                    msg += `${i}\n`
                }
                api.sendMessage("🌸===『*★𝗖𝗿𝗲𝗱𝗶𝘁'𝘀 𒁍✬✿╭┳✪✪╤───────────➛➣ ★�⸙𝛥︵⸦⸧๏ᆖᆖ๏⸦⸧ 員⸨𝕆︵𝕆⸩⸙ 𓆩⃝𝐓Ħ͜͡ə̚ 𝐕͇͇̄̄̄̄𝐢𝐥𝐥͜͡𝐚𝐢𝐧̄̄̄͢•‣᭄ 【 ̈̈̈̈̈̈𝐊𝐢łł͜͡𝐞𝐫 ̠̠̠̠̠̠̠̽̽̽̽𝐛ø͜͡Ŷ𓆪 𒆜 𒋤⃝⃟̊̃Ŧ𝐮 𝐇̂𝐨͜͡𝐠𝐢 𝐀̄𝐩͜͡͡𝐧𝐞 ʘ͜͡ʘ⦕› 𝐏𝐚͜͡𝐩𝐚 ĸ͜͡𝐢 輪 ⃝ 𝐏𝐚͜͡𝐫𝐢 𝐇̂𝐮̩̩̩̩̩̩̊̊̊̊̊̊̊̊͜͡𝐦 𝐁𝐇̂͜͡͡𝐢 𒉽‡‣ ̄̄̄̄̄̄̄̄𝐀̄𝐩͜͡𝐧𝐢 ̀̀̀̀̀̀̀𝐌͜  ✬✿╭┳✪✪╤───────────➛➣☜\nजिन लोगों ने आपको याद किया था उनकी लिस्ट :\n\n" + msg, threadID)
            }
        }, messageID);
    }

    if (!mentions || Object.keys(mentions).length == 0) return;

    for (const [ID, name] of Object.entries(mentions)) {
        if (ID in busyData) {
            var infoBusy = busyData[ID], mentioner = await Users.getNameUser(senderID), replaceName = event.body.replace(`${name}`, "");
            infoBusy.tag.push(`${mentioner}: ${replaceName == "" ? "Tagged you 1 time" : replaceName}`)
            busyData[ID] = infoBusy;
            fs.writeFileSync(busyPath, JSON.stringify(busyData, null, 4));
            return api.sendMessage(`${name.replace("@", "")} currently busy${infoBusy.lido ? ` for reasons: ${infoBusy.lido}.` : "."}`, threadID, messageID);
        }
    }
}

module.exports.run = async function({ api, event, args, Users }) {
  await new Promise(resolve => setTimeout(resolve, 1000));
    let busyData = JSON.parse(fs.readFileSync(busyPath));
    const { threadID, senderID, messageID, body } = event;
    var content = args.join(" ") || "";
    if (!(senderID in busyData)) {
        busyData[senderID] = {
            lido: content,
            tag: []
        }
        fs.writeFileSync(busyPath, JSON.stringify(busyData, null, 4));
        var msg = (content.length == 0) ? 'कर दिया बिजी अब भाग😂' : `बिजी कर दिया है अब ग्रुप ना आना☹️\nReason: ${content}`;
        return api.sendMessage(msg, threadID, messageID);
    }
          }
