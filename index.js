const TelegramBot = require("node-telegram-bot-api");

const token = "7458118504:AAGxcd30gzEKCD42A-rAbD_7FRlB6CSLhDA";
const bot = new TelegramBot(token, { polling: true });

bot.onText(/\/start/, (msg) => {
  console.log('chat')
  const chatId = msg.chat.id;
  const username = msg.from.username || msg.from.first_name;

  console.log(chatId, username);

  const webAppUrl = `https://nonocoinv2.vercel.app/`;
  const tronbridge = `https://t.me/NONOCoinSwap_Bot`
  const opts = {
    reply_markup: {
      inline_keyboard: [
        [{ text: "Play in 1 click", web_app: { url: webAppUrl } },{ text: "TON Bridge",  url: tronbridge  }],
        [
          {
            text: "Subscribe to the channel",
            url: "https://t.me/nonocoin_Announcement",
          },
        ],
        [{ text: "How to Earn from Game", callback_data: "game_guide" }],
      ],
    },
  };

  // Send image first
  bot.sendPhoto(chatId, 'https://ibb.co/7dVQPYbJ', {
    caption: `👑 Welcome to NoNoCoin 👑
Your all-in-one crypto and gaming platform, fully integrated within Telegram, powered by the fast and secure 💎 TON Blockchain.

❓ The Problem:
While TON continues to grow, users often face difficulties bridging their TON assets to other major blockchains like 🔶 BSC, 🔷 Ethereum, 🪙 Bitcoin, and 🪙 Solana. Additionally, cashing out 🪙 TON without relying on centralized exchanges (CEXs) can be a hassle. Users need an easier, more efficient way to bridge assets and spend crypto directly.

———

✔️ The Solution:
NoNoCoin solves these challenges by offering an all-in-one platform within Telegram. Here's how:

———

🌉 Cross-Chain Bridge
Easily transfer assets across 15+ blockchains, including TON, Ethereum, Bitcoin, Solana, BSC, and more, all within Telegram.

💳 Virtual Debit Cards
Use your NoNoCoins and other supported tokens for everyday purchases with virtual Mastercard and Visa cards. Add them to Google Pay or Apple Pay for easy, global spending.

🎮 Tap-to-Earn Game
Play interactive games and earn NoNoCoins as rewards. Engage with the game, accumulate rewards, and reinvest them in the ecosystem, all within Telegram.

🔒 Staking & Membership Tiers
Stake your NoNoCoins for 3, 6, or 12 months and unlock rewards. Higher tiers, Silver, Gold, and Diamond, offer fee discounts, exclusive content, and governance participation.

💬 Community Governance
Diamond-level stakers can participate in NoNoCoin's governance, influencing key decisions and helping guide the platform's development.

🤖 AI Mining
Leverage AI-driven mining to optimize your assets and increase your rewards. AI Mining ensures efficient resource use, maximizing your potential earnings.

🌐 AI Pools
Create or join AI-powered trading pools, where you can leverage smart algorithms to enhance your trading strategies and increase profits. Customize your pool's parameters, including leverage, risk levels, and liquidity.

———

📱 Telegram App Integration

👑 All-in-One Experience in Telegram
NoNoCoin integrates seamlessly into the Telegram app, giving you easy access to everything you need. Manage your assets, stake coins, use virtual debit cards, and earn rewards, all within Telegram. The NoNoCoin bot makes everything simple, secure, and hassle-free.

🔭 NoNoCoin Utilities & Features:

👑 Cross-Chain Asset Transfers | 👑 Virtual Debit Cards | 👑 Tap-to-Earn Gaming | 👑 Staking & Rewards | 👑 Community Governance | 👑 AI Mining & Pools | 👑 Secure Transactions

🌐 NoNoCoin Links:

🔗 [Website](https://nonocoin.com)
🔗 [Telegram Community](https://t.me/nonocoin_community)
🔗 [Twitter](https://twitter.com/nonocoin)
🔗 [Whitepaper](https://nonocoin.com/whitepaper)
🔗 [Tokenomics](https://nonocoin.com/tokenomics)
🔗 [NoNoCoinBOT](https://t.me/nonocoin_bot)`,
    parse_mode: 'Markdown',
    ...opts
  });
});

bot.on("callback_query", (callbackQuery) => {
  const msg = callbackQuery.message;
  const chatId = msg.chat.id;

  if (callbackQuery.data === "game_guide") {
    bot.sendMessage(
      chatId,
      `💰 Tap to earn
Tap the screen and collect coins.

⛏ Mine
Upgrade cards that will give you passive income opportunities.

⏰ Profit per hour
The exchange will work for you on its own, even when you are not in the game for 3 hours.
Then you need to log in to the game again.

📈 LVL
The more coins you have on your balance, the higher the level of your exchange is and the faster you can earn more coins.

👥 Friends
Invite your friends and you'll get bonuses. Help a friend move to the next leagues and you'll get even more bonuses.

🪙 Token listing
At the end of the season, a token will be released and distributed among the players.
Dates will be announced in our announcement channel. Stay tuned!

/help to get this guide`
    );
  }
});

console.log("Telegram bot is running...");
