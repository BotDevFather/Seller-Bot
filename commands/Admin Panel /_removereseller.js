/*CMD
  command: /removereseller
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Admin Panel 
  answer: 
  keyboard: 
  aliases: /removereseller
  group: 
CMD*/

let admin = Bot.getProperty("admin");

if (user.telegramid != admin) {
  return Api.sendMessage({
    text: "⚠️ Only admin can remove a reseller.",
    parse_mode: "HTML"
  });
}

let parts = message.split(" ");
if (parts.length < 2) {
  return Api.sendMessage({
    text: "❗ Format:\n<code>/removereseller USERID</code>",
    parse_mode: "HTML"
  });
}

let targetId = parts[1].trim();

// Remove reseller grid
Bot.setProperty(`${targetId}_grid`, "", "string");

Api.sendMessage({
  text: `🗑️ Reseller <b>${targetId}</b> removed successfully.`,
  parse_mode: "HTML"
});

