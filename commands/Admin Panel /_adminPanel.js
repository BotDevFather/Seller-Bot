/*CMD
  command: /adminPanel
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Admin Panel 
  answer: 
  keyboard: 
  aliases: 
  group: 
CMD*/

let admin = Bot.getProperty("admin");
let userId = user.telegramid;
let botLink = "@" + bot.name;

if (userId == admin) {

  let adminName = user.first_name;

  let text = 
`👋 Hello ${adminName},
Welcome to the Admin Panel of ${botLink}.

Use the options below to manage the bot:`;

  let buttons = [

    // STOCK MANAGEMENT
    [
      { text: "📦 Upload Stock", callback_data: "/uploadStock" },
      { text: "📊 View Stock", callback_data: "/viewStock" }
    ],

    // PRICE MANAGEMENT
    [
      { text: "💲 User Prices", callback_data: "/managePrices" },
      { text: "💼 View Reseller", callback_data: "/resellerList" }
    ],

    // BALANCE MANAGEMENT
    [
      { text: "➕ Add Balance", callback_data: "/addbalance" },
      { text: "➖ Remove Balance", callback_data: "/removeBalance" }
    ],

    // USER MANAGEMENT
    [
      { text: "🔐 Set Reseller", callback_data: "/setReseller" },
      { text: "🚫 Remove Reseller", callback_data: "/removereseller" }
    ],[{text: "📄 Change QR", callback_data:"/changeQR"}]
  ];

  Api.sendMessage({
    text: text,
    reply_markup: { inline_keyboard: buttons },
    parse_mode: "html"
  });

} else {

  Api.sendMessage({
    text: `⚠️ You are not the admin of ${botLink}.`,
    parse_mode: "html"
  });

}

