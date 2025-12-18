/*CMD
  command: resellerGridInput
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Admin Panel 
  answer: 
  keyboard: 
  aliases: resellergridinput
  group: 
CMD*/

let admin = Bot.getProperty("admin");

if (user.telegramid != admin) {
  return Api.sendMessage({
    text: "⚠️ Only admin can set reseller grid.",
    parse_mode: "HTML"
  });
}

let targetId = Bot.getProperty("reseller_add_target");

if (!targetId) {
  return Api.sendMessage({
    text: "⚠️ No reseller ID found. Run /addreseller again.",
    parse_mode: "HTML"
  });
}

if (!message || !message) {
  return Api.sendMessage({
    text: "❗ Send the grid text only.",
    parse_mode: "HTML"
  });
}

let lines = message.split("\n");
let pricing = {};

for (let line of lines) {
  line = line.trim();
  if (line === "") continue;

  let parts = line.split("-");
  if (parts.length !== 3) continue;

  let game = parts[0].trim().toLowerCase(); // 8bp / carom / socer
  let days = parts[1].trim();
  let price = parseFloat(parts[2].trim());

  if (isNaN(price)) continue;

  let key = `${game}_${days}`; // 8bp_3
  pricing[key] = price;
}

// SAVE IN userid_grid
Bot.setProperty(`${targetId}_grid`, pricing, "json");

// Clear state
Bot.setProperty("reseller_add_target", "", "string");

Api.sendMessage({
  text: `✔️ Reseller <b>${targetId}</b> added with custom grid.`,
  parse_mode: "HTML"
});

