/*CMD
  command: /viewStock
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
if (user.telegramid != admin) {
  return Api.sendMessage({
    text: "⚠️ Only admin can view full stock with codes.",
    parse_mode: "HTML"
  });
}

// Helper: load stock & format
function getStock(key) {
  let arr = Bot.getProperty(key);
  if (!arr || !Array.isArray(arr) || arr.length === 0)
    return { count: 0, list: "— No stock —" };

  let formatted = arr
    .map((c, i) => `${i+1}. ${c}`)
    .join("\n");

  return { count: arr.length, list: formatted };
}

// 8BP
let s8_3  = getStock("8bp_3day_stock");
let s8_10 = getStock("8bp_10day_stock");
let s8_30 = getStock("8bp_30day_stock");

// Carrom
let sc_3  = getStock("carom_3day_stock");
let sc_10 = getStock("carom_10day_stock");
let sc_30 = getStock("carom_30day_stock");

// Soccer
let ss_3  = getStock("soccer_3day_stock");
let ss_10 = getStock("soccer_10day_stock");
let ss_30 = getStock("soccer_30day_stock");

// Build final HTML message using blockquote expandable
let msg = 
`<b>📦 Admin Stock Viewer</b>
<i>(Expandable code lists)</i>

<b>🎮 8BP</b>
3 Days — ${s8_3.count} keys:
<blockquote expandable>${s8_3.list}</blockquote>

10 Days — ${s8_10.count} keys:
<blockquote expandable>${s8_10.list}</blockquote>

30 Days — ${s8_30.count} keys:
<blockquote expandable>${s8_30.list}</blockquote>

<b>🎮 Carrom</b>
3 Days — ${sc_3.count} keys:
<blockquote expandable>${sc_3.list}</blockquote>

10 Days — ${sc_10.count} keys:
<blockquote expandable>${sc_10.list}</blockquote>

30 Days — ${sc_30.count} keys:
<blockquote expandable>${sc_30.list}</blockquote>

<b>🎮 Soccer</b>
3 Days — ${ss_3.count} keys:
<blockquote expandable>${ss_3.list}</blockquote>

10 Days — ${ss_10.count} keys:
<blockquote expandable>${ss_10.list}</blockquote>

30 Days — ${ss_30.count} keys:
<blockquote expandable>${ss_30.list}</blockquote>
`;

Api.sendMessage({
  text: msg,
  parse_mode: "HTML"
});

