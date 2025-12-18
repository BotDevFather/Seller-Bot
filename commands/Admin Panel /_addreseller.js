/*CMD
  command: /addreseller
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Admin Panel 
  answer: 
  keyboard: 
  aliases: /setreseller
  group: 
CMD*/

let admin = Bot.getProperty("admin");

if (user.telegramid != admin) {
  return Api.sendMessage({
    text: "⚠️ Only admin can add a reseller.",
    parse_mode: "HTML"
  });
}

let parts = message.split(" ");
if (parts.length < 2) {
  return Api.sendMessage({
    text: "❗ Format:\n<code>/addreseller USERID</code>",
    parse_mode: "HTML"
  });
}

let targetId = parts[1].trim();
Bot.setProperty("reseller_add_target", targetId, "string");

Api.sendMessage({
  text:
`📄 <b>Send reseller price grid</b>
Format (one per line):
<code>
8BP-3-150
8BP-10-400
8BP-30-1500
Carom-3-400
Carom-10-1500
Carom-30-1600
Socer-3-2000
Socer-10-3000
Socer-30-4000
</code>`,
  parse_mode: "HTML"
});

Bot.runCommand("resellerGridInput");

