const TelegramBot = require('node-telegram-bot-api');

// Bot tokeningizni kiriting
const token = '7505300343:AAEKg3AP_RWlGmMQA_ZbdVZ8iUnCfX8au8Y';

// Botni ishga tushirish
const bot = new TelegramBot(token, { polling: true });

// Start komandasi uchun handler
bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;

  // Menyu tugmalarini yaratish
  const menuOptions = {
    reply_markup: {
      keyboard: [
        [{ text: 'Main menu' }, { text: 'Game' }],
        [{ text: 'Menyu 3' }],
      ],
      resize_keyboard: true, // Tugmalarni mos hajmga keltirish
      one_time_keyboard: true // Bir martalik tugmalar
    }
  };

  // Foydalanuvchiga menyu tugmalarini yuborish
  bot.sendMessage(chatId, 'Menyu tugmasini tanlang:', menuOptions);
});

// Menyu tugmalarini qayta ishlash
bot.on('message', (msg) => {
  const chatId = msg.chat.id;

  if (msg.text === 'Menyu 1') {
    // Menyu 1 uchun link
    const gameOptions = {
      reply_markup: {
        inline_keyboard: [
          [{ text: 'O\'yinni boshlash', url: 'https://000quvonchbek.github.io/multi.bot/boom.html' }]
        ]
      }
    };
    bot.sendMessage(chatId, 'Siz Main menu ni tanladingiz.', gameOptions);
  } else if (msg.text === 'Game') {
    // Menyu 2 uchun link
    const gameOptions = {
      reply_markup: {
        inline_keyboard: [
          [{ text: 'Menyu 2 uchun havola', url: 'https://000quvonchbek.github.io/multi.bot/' }]
        ]
      }
    };
    bot.sendMessage(chatId, 'Siz Game ni tanladingiz.', gameOptions);
  } else if (msg.text === 'Menyu 3') {
    // Menyu 3 uchun link
    const gameOptions = {
      reply_markup: {
        inline_keyboard: [
          [{ text: 'Menyu 3 uchun havola', url: 'https://000quvonchbek.github.io/multi.bot/m.html' }]
        ]
      }
    };
    bot.sendMessage(chatId, 'Siz Menyu 3 ni tanladingiz.', gameOptions);
  } else {
    bot.sendMessage(chatId, 'Menyudan tanlang.');
  }
});