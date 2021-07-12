const {
    WAConnection,
    MessageType,
    Presence,
    Mimetype,
    GroupSettingChange,
   WA_DEAFULT_EPHEMERAL,
   DataView,
   TypedArray,
   waChatKey,
   mentionedJid,
   processTime,
   processTicksAndRejections,
   WALocationMessage,
   WA_MESSAGE_STUB_TYPES,
   ReconnectMode,
   MessageOptions,
} = require('@adiwajshing/baileys')
//_MÓDULOS NPM

const fs = require('fs')
const moment = require('moment-timezone')
const { exec, spawn } = require('child_process')
const fetc = require('node-fetch')
const ffmpeg = require('fluent-ffmpeg')
const { removeBackgroundFromImageFile } = require('remove.bg');
const imgbb = require('imgbb-uploader');
const speed = require('performance-now');
const cd = 4.32e+7;
const qrcode = require("qrcode-terminal");
const crypto = require('crypto');
const axios = require('axios').default;
const imageToBase64 = require('image-to-base64');
const googleImage = require('g-i-s');
const CFonts = require('cfonts')
const FormData = require('form-data')
const chalk = require('chalk')

//_ARQUIVOS DA LIB
const { color, bgcolor } = require('./lib/color');
const { fetchJson, fetchText } = require('./lib/fetcher');
const { recognize } = require('./lib/ocr');
const { wait, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, banner, banner2, simih, start, info, success, close, addATM, addKoinUser, checkATMuser, temporizador } = require('./lib/functions');
const { webp2gifFile } = require("./lib/gif.js")
const { cmdadd } = require('./lib/totalcmd.js')
const { getRegisterNo, getRegisterName, getRegisterSerial, getRegisterAge, getRegisterTime, getRegisteredRandomId, addRegisteredUser, createSerial, checkRegisteredUser } = require('./lib/register.js')
const { getLevelingXp, getLevelingId, addLevelingXp,getLevelingnivelAtual, addLevelingLevel, addLevelingId, getLevelingLevel, getUserRank, addCooldown, leveltab } = require('./lib/leveling.js')
const { addTTTId, addTTTwin,addTTTdefeat, addTTTtie, addTTTpoints, getTTTId, getTTTwins, getTTTdefeats, getTTTties, getTTTpoints } = require('./lib/tictactoe.js') //JOGO DA VELHA,AGRADECIMENTOS: Resen
const { addLimit, getLimit } = require('./lib/limit.js') // LIMITADOR, AGRADECIMENTOS: IRIS(kill), Resen
const { addMetadata } = require('./lib/exif.js')
const { y2mateV, y2mateA, wikiSearch, jagoKata } = require('./lib/y2mate')
const { convertSticker } = require('./lib/swm.js')
const { uploadimg } = require('./lib/uploadimg')
const { isFiltered, addFilter } = require('./lib/antispam')
const { addBanned, unBanned, BannedExpired, cekBannedUser } = require("./lib/banned.js")

//_JSON GRUPO/CONFIGURAÇÕES
const nsfw = JSON.parse(fs.readFileSync('./database/data/nsfw.json'));
let premium = JSON.parse(fs.readFileSync('./database/datauser/premium.json'))
const welkom = JSON.parse(fs.readFileSync('./database/data/welkom.json'));
const _leveling = JSON.parse(fs.readFileSync('./database/data/leveling.json'));
const antilink = JSON.parse(fs.readFileSync('./database/data/antilink.json'));
const atsticker = JSON.parse(fs.readFileSync('./database/data/atsticker.json'));
const _simi = JSON.parse(fs.readFileSync('./database/data/simi.json'));
const antifake = JSON.parse(fs.readFileSync('./database/data/antifake.json'));

//_JSON INFORMAÇÕES DO USUÁRIO
let _level = JSON.parse(fs.readFileSync('./database/datauser/level.json'));
let _registered = JSON.parse(fs.readFileSync('./database/datauser/registered.json'));
let uang = JSON.parse(fs.readFileSync('./database/datauser/uang.json'));
let ban = JSON.parse(fs.readFileSync('./database/datauser/banned.json'));

//_ OUTROS ARQUIVOS DO BOT
const tictactoe = JSON.parse(fs.readFileSync('./database/ttt/tictactoe.json'));
const daily = JSON.parse(fs.readFileSync('./database/data/diario.json'));
const dailiy = JSON.parse(fs.readFileSync('./database/data/limitem.json'));
const { menu, menujv, grupo, pz, menuvip, menubv, money, zuera} = require('./database/menus/menu')
const sotoy2 = JSON.parse(fs.readFileSync('./sotoy2.json'));
const { ptbr } = require('./database/mess')
const totalcmd = JSON.parse(fs.readFileSync('./database/data/totalcmd.json'))[0].totalcmd
const infos = JSON.parse(fs.readFileSync('./database/data/settings.json'))
const { prefix, ownerName, ownerNumber, premNumber, botName, cdd, autoHourActivate, cr, crfig, crlv, crtt, crg, crinfo } = infos

const apivhtear = 'apivhtear';
const apibarbar = 'apibarbar';
const tobzkey = 'apitobz';
const BotName = '${infos.botName}'; 
const instagram = 'http://www.instagram.com/Joaovsr25'; 
const aktif = '08:00 - 22:00'; 

const vcard = 'BEGIN:VCARD\n'
            + 'VERSION:3.0\n' 
            + 'FN:⏤͟͟͞͞«ᶤ⃢𝗝𝗩ꦿ⃟ۜ░⃟⃛⃝ᶤ⃢⃝ ꦿ⃟ۜ░\n' // Nama kamu
            + 'ORG:⏤͟͟͞͞🔥«ꦿ᭄꥓〭ᶤ⃢𝐽𝑉 𝐵𝜎𝜎𝜏𝑠 𝐼𝜋🪐 ꦿ⃟ۜ░⃟⃛⃝⃟;\n' // Nama bot
            + 'TEL;type=CELL;type=VOICE;waid=555185480669:+55 5185480669\n' //Nomor whatsapp kamu
            + 'END:VCARD'
blocked = []
limitawal = '999999999'

//_TIC-TAC-TOE By: Resen
const { ttthelp } = require('./database/ttt/TTTconfig/ttthelp');
const { tttme } = require('./database/ttt/TTTconfig/tttme');
var tttset = require('./database/ttt/TTTconfig/tttset.json');
var esp = require('./database/ttt/TTTconfig/tttframe.json');

//_TESTE PARA VITÓRIA DE ❌
const WinnerX = () => {
	if (
		(esp.a1=="❌"&&esp.a2=="❌"&&esp.a3=="❌") || (esp.b1=="❌"&&esp.b2=="❌"&&esp.b3=="❌") || (esp.c1=="❌"&&esp.c2=="❌"&&esp.c3=="❌") || 
		(esp.a1=="❌"&&esp.b1=="❌"&&esp.c1=="❌") || (esp.a2=="❌"&&esp.b2=="❌"&&esp.c2=="❌") || (esp.a3=="❌"&&esp.b3=="❌"&&esp.c3=="❌") ||
		(esp.a1=="❌"&&esp.b2=="❌"&&esp.c3=="❌") || (esp.a3=="❌"&&esp.b2=="❌"&&esp.c1=="❌")
	) {
		return true
	} else {
		return false
	}
}

//TESTE PARA VITÓRIA DE ⭕
const WinnerO = () => {
	if (
		(esp.a1=="⭕"&&esp.a2=="⭕"&&esp.a3=="⭕") || (esp.b1=="⭕"&&esp.b2=="⭕"&&esp.b3=="⭕") || (esp.c1=="⭕"&&esp.c2=="⭕"&&esp.c3=="⭕") || 
		(esp.a1=="⭕"&&esp.b1=="⭕"&&esp.c1=="⭕") || (esp.a2=="⭕"&&esp.b2=="⭕"&&esp.c2=="⭕") || (esp.a3=="⭕"&&esp.b3=="⭕"&&esp.c3=="⭕") ||
		(esp.a1=="⭕"&&esp.b2=="⭕"&&esp.c3=="⭕") || (esp.a3=="⭕"&&esp.b2=="⭕"&&esp.c1=="⭕")
	) {
		return true
	} else {
		return false
	}
}

//TESTE PARA EMPATE
const Tie = () => {
	if (esp.a1!="🔲"&&esp.a2!="🔲"&&esp.a3!="🔲"&&esp.b1!="🔲"&&esp.b2!="🔲"&&esp.b3!="🔲"&&esp.c1!="🔲"&&esp.c2!="🔲"&&esp.c3!="🔲") {
		return true
	} else {
		return false
	}
}

const IA = () => {
    if (WinnerX() || WinnerO() || Tie()) {
		tttset.reActivate1 = "off"
//INICIO DO MODO IMPOSSIVEL
	} else if (tttset.tttdifficulty == "IMPOSSIBLE" && ( 
		//TESTE PARA TENTATIVA DE VITÓRIA
		(esp.a1=="⭕"&&esp.a2=="⭕"&&esp.a3=="🔲") || (esp.a1=="⭕"&&esp.a2=="🔲"&&esp.a3=="⭕") || (esp.a1=="🔲"&&esp.a2=="⭕"&&esp.a3=="⭕") ||
		(esp.b1=="⭕"&&esp.b2=="⭕"&&esp.b3=="🔲") || (esp.b1=="⭕"&&esp.b2=="🔲"&&esp.b3=="⭕") || (esp.b1=="🔲"&&esp.b2=="⭕"&&esp.b3=="⭕") ||
		(esp.c1=="⭕"&&esp.c2=="⭕"&&esp.c3=="🔲") || (esp.c1=="⭕"&&esp.c2=="🔲"&&esp.c3=="⭕") || (esp.c1=="🔲"&&esp.c2=="⭕"&&esp.c3=="⭕") ||
		(esp.a1=="⭕"&&esp.b1=="⭕"&&esp.c1=="🔲") || (esp.a1=="⭕"&&esp.b1=="🔲"&&esp.c1=="⭕") || (esp.a1=="🔲"&&esp.b1=="⭕"&&esp.c1=="⭕") ||
		(esp.a2=="⭕"&&esp.b2=="⭕"&&esp.c2=="🔲") || (esp.a2=="⭕"&&esp.b2=="🔲"&&esp.c2=="⭕") || (esp.a2=="🔲"&&esp.b2=="⭕"&&esp.c2=="⭕") ||
		(esp.a3=="⭕"&&esp.b3=="⭕"&&esp.c3=="🔲") || (esp.a3=="⭕"&&esp.b3=="🔲"&&esp.c3=="⭕") || (esp.a3=="🔲"&&esp.b3=="⭕"&&esp.c3=="⭕") ||
		(esp.a1=="⭕"&&esp.b2=="⭕"&&esp.c3=="🔲") || (esp.a1=="⭕"&&esp.b2=="🔲"&&esp.c3=="⭕") || (esp.a1=="🔲"&&esp.b2=="⭕"&&esp.c3=="⭕") ||
		(esp.a3=="⭕"&&esp.b2=="⭕"&&esp.c1=="🔲") || (esp.a3=="⭕"&&esp.b2=="🔲"&&esp.c1=="⭕") || (esp.a3=="🔲"&&esp.b2=="⭕"&&esp.c1=="⭕") ||
		//TESTE PARA TENTATIVA DE BLOQUEIO
		(esp.a1=="❌"&&esp.a2=="❌"&&esp.a3=="🔲") || (esp.a1=="❌"&&esp.a2=="🔲"&&esp.a3=="❌") || (esp.a1=="🔲"&&esp.a2=="❌"&&esp.a3=="❌") ||
		(esp.b1=="❌"&&esp.b2=="❌"&&esp.b3=="🔲") || (esp.b1=="❌"&&esp.b2=="🔲"&&esp.b3=="❌") || (esp.b1=="🔲"&&esp.b2=="❌"&&esp.b3=="❌") ||
		(esp.c1=="❌"&&esp.c2=="❌"&&esp.c3=="🔲") || (esp.c1=="❌"&&esp.c2=="🔲"&&esp.c3=="❌") || (esp.c1=="🔲"&&esp.c2=="❌"&&esp.c3=="❌") ||
		(esp.a1=="❌"&&esp.b1=="❌"&&esp.c1=="🔲") || (esp.a1=="❌"&&esp.b1=="🔲"&&esp.c1=="❌") || (esp.a1=="🔲"&&esp.b1=="❌"&&esp.c1=="❌") ||
		(esp.a2=="❌"&&esp.b2=="❌"&&esp.c2=="🔲") || (esp.a2=="❌"&&esp.b2=="🔲"&&esp.c2=="❌") || (esp.a2=="🔲"&&esp.b2=="❌"&&esp.c2=="❌") ||
		(esp.a3=="❌"&&esp.b3=="❌"&&esp.c3=="🔲") || (esp.a3=="❌"&&esp.b3=="🔲"&&esp.c3=="❌") || (esp.a3=="🔲"&&esp.b3=="❌"&&esp.c3=="❌") ||
		(esp.a1=="❌"&&esp.b2=="❌"&&esp.c3=="🔲") || (esp.a1=="❌"&&esp.b2=="🔲"&&esp.c3=="❌") || (esp.a1=="🔲"&&esp.b2=="❌"&&esp.c3=="❌") ||
		(esp.a3=="❌"&&esp.b2=="❌"&&esp.c1=="🔲") || (esp.a3=="❌"&&esp.b2=="🔲"&&esp.c1=="❌") || (esp.a3=="🔲"&&esp.b2=="❌"&&esp.c1=="❌")
	)){
		tttset.reActivate1 = "off"
		IAmove1()
	//JOGADAS PROGRAMADAS ABAIXO
	} else if (tttset.tttdifficulty == "IMPOSSIBLE" &&
              ((esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "❌" && esp.c2 == "🔲" && esp.c3 == "⭕") ||
               (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "❌" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "??" && esp.c3 == "⭕") ||
               (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "❌" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "??" && esp.c1 == "⭕" && esp.c2 == "❌" && esp.c3 == "🔲") ||
               (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "⭕" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "❌" && esp.c1 == "❌" && esp.c2 == "🔲" && esp.c3 == "🔲"))) {
     	  tttset.reActivate1 = "off"
          esp.a1 = "⭕"
	} else if (tttset.tttdifficulty == "IMPOSSIBLE" &&
              ((esp.a1 == "⭕" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "❌" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "❌") ||
               (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "⭕" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "❌" && esp.c1 == "❌" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
               (esp.a1 == "❌" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "❌") ||
               (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "❌" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "❌" && esp.c2 == "🔲" && esp.c3 == "🔲"))) {
          tttset.reActivate1 = "off"
          esp.a2 = "⭕"
	} else if (tttset.tttdifficulty == "IMPOSSIBLE" &&
              ((esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "⭕" && esp.c2 == "🔲" && esp.c3 == "❌") ||
               (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "❌" && esp.b3 == "🔲" && esp.c1 == "⭕" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
               (esp.a1 == "❌" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "❌" && esp.c3 == "⭕") ||
               (esp.a1 == "⭕" && esp.a2 == "🔲" && esp.a3 == "❌" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "❌"))) {
          tttset.reActivate1 = "off"
          esp.a3 = "⭕"
	} else if (tttset.tttdifficulty == "IMPOSSIBLE" &&
              ((esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "❌" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "⭕" && esp.c2 == "❌" && esp.c3 == "🔲") ||
               (esp.a1 == "⭕" && esp.a2 == "❌" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "❌"))) {
          tttset.reActivate1 = "off"
          esp.b1 = "⭕"
	} else if (tttset.tttdifficulty == "IMPOSSIBLE" &&
              ((esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "⭕" && esp.c2 == "❌" && esp.c3 == "🔲") ||
               (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "❌" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "⭕" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
               (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "❌" && esp.c3 == "⭕") ||
               (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "❌" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "⭕") ||
               (esp.a1 == "⭕" && esp.a2 == "❌" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
               (esp.a1 == "⭕" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "❌" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
               (esp.a1 == "🔲" && esp.a2 == "❌" && esp.a3 == "⭕" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
               (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "⭕" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "❌" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
               (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "❌" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "⭕" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
               (esp.a1 == "❌" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "⭕") ||
               (esp.a1 == "⭕" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "❌") ||
               (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "⭕" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "❌" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
               (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "❌" && esp.c1 == "⭕" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
               (esp.a1 == "🔲" && esp.a2 == "❌" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "⭕" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
               (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "❌" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "⭕") ||
               (esp.a1 == "🔲" && esp.a2 == "❌" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "⭕") ||
               (esp.a1 == "⭕" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "❌" && esp.c3 == "🔲") ||
               (esp.a1 == "⭕" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "❌" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
               (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "⭕" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "❌" && esp.c3 == "🔲") ||
               (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "⭕" && esp.b1 == "❌" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
               (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "❌") ||
               (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "❌" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
               (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "❌" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
               (esp.a1 == "❌" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "🔲"))) {
          tttset.reActivate1 = "off"
          esp.b2 = "⭕"
	} else if (tttset.tttdifficulty == "IMPOSSIBLE" &&
              ((esp.a1 == "❌" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "❌" && esp.c3 == "⭕") ||
               (esp.a1 == "🔲" && esp.a2 == "❌" && esp.a3 == "⭕" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "❌" && esp.c2 == "🔲" && esp.c3 == "🔲"))) {
          tttset.reActivate1 = "off"
          esp.b3 = "⭕"
	} else if (tttset.tttdifficulty == "IMPOSSIBLE" &&
              ((esp.a1 == "❌" && esp.a2 == "🔲" && esp.a3 == "⭕" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
               (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "⭕" && esp.b1 == "🔲" && esp.b2 == "❌" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
               (esp.a1 == "❌" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "❌" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "⭕") ||
               (esp.a1 == "⭕" && esp.a2 == "❌" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "❌"))) {
          tttset.reActivate1 = "off"
          esp.c1 = "⭕"
	} else if (tttset.tttdifficulty == "IMPOSSIBLE" &&
              ((esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "❌" && esp.b1 == "❌" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "⭕" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
               (esp.a1 == "❌" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "❌" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "⭕"))) {
          tttset.reActivate1 = "off"
          esp.c2 = "⭕"
	} else if (tttset.tttdifficulty == "IMPOSSIBLE" &&
		    ((esp.a1 == "⭕" && esp.a2 == "🔲" && esp.a3 == "❌" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
               (esp.a1 == "⭕" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "❌" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
               (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "❌" && esp.b1 == "❌" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "⭕" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
               (esp.a1 == "🔲" && esp.a2 == "❌" && esp.a3 == "⭕" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "❌" && esp.c2 == "🔲" && esp.c3 == "🔲"))) {
          tttset.reActivate1 = "off"
          esp.c3 = "⭕"
	} else if (tttset.tttdifficulty == "IMPOSSIBLE" && (esp.a1 ==  "🔲" || esp.a3 ==  "🔲" || esp.b2 ==  "🔲" || esp.c1 ==  "🔲" || esp.c3 ==  "🔲")) {
		//PRIORIZAR CANTOS E CENTRO
		tttset.reActivate1 = "off"
		while (tttset.reActivate3 == "on") {
			priorityC()
		}
		tttset.reActivate3 = "on"
//FIM DO MODO IMPOSSIVEL
	} else if (tttset.tttdifficulty == "HARD" && ( 
		//TESTE PARA TENTATIVA DE VITÓRIA
		(esp.a1=="⭕"&&esp.a2=="⭕"&&esp.a3=="🔲") || (esp.a1=="⭕"&&esp.a2=="🔲"&&esp.a3=="⭕") || (esp.a1=="🔲"&&esp.a2=="⭕"&&esp.a3=="⭕") ||
		(esp.b1=="⭕"&&esp.b2=="⭕"&&esp.b3=="🔲") || (esp.b1=="⭕"&&esp.b2=="🔲"&&esp.b3=="⭕") || (esp.b1=="🔲"&&esp.b2=="⭕"&&esp.b3=="⭕") ||
		(esp.c1=="⭕"&&esp.c2=="⭕"&&esp.c3=="🔲") || (esp.c1=="⭕"&&esp.c2=="🔲"&&esp.c3=="⭕") || (esp.c1=="🔲"&&esp.c2=="⭕"&&esp.c3=="⭕") ||
		(esp.a1=="⭕"&&esp.b1=="⭕"&&esp.c1=="🔲") || (esp.a1=="⭕"&&esp.b1=="🔲"&&esp.c1=="⭕") || (esp.a1=="🔲"&&esp.b1=="⭕"&&esp.c1=="⭕") ||
		(esp.a2=="⭕"&&esp.b2=="⭕"&&esp.c2=="🔲") || (esp.a2=="⭕"&&esp.b2=="🔲"&&esp.c2=="⭕") || (esp.a2=="🔲"&&esp.b2=="⭕"&&esp.c2=="⭕") ||
		(esp.a3=="⭕"&&esp.b3=="⭕"&&esp.c3=="🔲") || (esp.a3=="⭕"&&esp.b3=="🔲"&&esp.c3=="⭕") || (esp.a3=="🔲"&&esp.b3=="⭕"&&esp.c3=="⭕") ||
		(esp.a1=="⭕"&&esp.b2=="⭕"&&esp.c3=="🔲") || (esp.a1=="⭕"&&esp.b2=="🔲"&&esp.c3=="⭕") || (esp.a1=="🔲"&&esp.b2=="⭕"&&esp.c3=="⭕") ||
		(esp.a3=="⭕"&&esp.b2=="⭕"&&esp.c1=="🔲") || (esp.a3=="⭕"&&esp.b2=="🔲"&&esp.c1=="⭕") || (esp.a3=="🔲"&&esp.b2=="⭕"&&esp.c1=="⭕") ||
		//TESTE PARA TENTATIVA DE BLOQUEIO
		(esp.a1=="❌"&&esp.a2=="❌"&&esp.a3=="🔲") || (esp.a1=="❌"&&esp.a2=="🔲"&&esp.a3=="❌") || (esp.a1=="🔲"&&esp.a2=="❌"&&esp.a3=="❌") ||
		(esp.b1=="❌"&&esp.b2=="❌"&&esp.b3=="🔲") || (esp.b1=="❌"&&esp.b2=="🔲"&&esp.b3=="❌") || (esp.b1=="🔲"&&esp.b2=="❌"&&esp.b3=="❌") ||
		(esp.c1=="❌"&&esp.c2=="❌"&&esp.c3=="🔲") || (esp.c1=="❌"&&esp.c2=="🔲"&&esp.c3=="❌") || (esp.c1=="🔲"&&esp.c2=="❌"&&esp.c3=="❌") ||
		(esp.a1=="❌"&&esp.b1=="❌"&&esp.c1=="🔲") || (esp.a1=="❌"&&esp.b1=="🔲"&&esp.c1=="❌") || (esp.a1=="🔲"&&esp.b1=="❌"&&esp.c1=="❌") ||
		(esp.a2=="❌"&&esp.b2=="❌"&&esp.c2=="🔲") || (esp.a2=="❌"&&esp.b2=="🔲"&&esp.c2=="❌") || (esp.a2=="🔲"&&esp.b2=="❌"&&esp.c2=="❌") ||
		(esp.a3=="❌"&&esp.b3=="❌"&&esp.c3=="🔲") || (esp.a3=="❌"&&esp.b3=="🔲"&&esp.c3=="❌") || (esp.a3=="🔲"&&esp.b3=="❌"&&esp.c3=="❌") ||
		(esp.a1=="❌"&&esp.b2=="❌"&&esp.c3=="🔲") || (esp.a1=="❌"&&esp.b2=="🔲"&&esp.c3=="❌") || (esp.a1=="🔲"&&esp.b2=="❌"&&esp.c3=="❌") ||
		(esp.a3=="❌"&&esp.b2=="❌"&&esp.c1=="🔲") || (esp.a3=="❌"&&esp.b2=="🔲"&&esp.c1=="❌") || (esp.a3=="🔲"&&esp.b2=="❌"&&esp.c1=="❌")
	)){
		tttset.reActivate1 = "off"
		IAmove1()
	//JOGADAS PROGRAMADAS ABAIXO
	} else if (tttset.tttdifficulty == "HARD" &&
              ((esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "❌" && esp.c2 == "🔲" && esp.c3 == "⭕") ||
               (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "❌" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "⭕") ||
               (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "❌" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "⭕" && esp.c2 == "❌" && esp.c3 == "🔲") ||
               (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "⭕" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "❌" && esp.c1 == "❌" && esp.c2 == "🔲" && esp.c3 == "🔲"))) {
     	  tttset.reActivate1 = "off"
          esp.a1 = "⭕"
	} else if (tttset.tttdifficulty == "HARD" &&
              ((esp.a1 == "⭕" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "❌" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "❌") ||
               (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "⭕" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "❌" && esp.c1 == "❌" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
               (esp.a1 == "❌" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "❌") ||
               (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "❌" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "❌" && esp.c2 == "🔲" && esp.c3 == "🔲"))) {
          tttset.reActivate1 = "off"
          esp.a2 = "⭕"
	} else if (tttset.tttdifficulty == "HARD" &&
              ((esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "⭕" && esp.c2 == "🔲" && esp.c3 == "❌") ||
               (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "❌" && esp.b3 == "🔲" && esp.c1 == "⭕" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
               (esp.a1 == "❌" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "❌" && esp.c3 == "⭕") ||
               (esp.a1 == "⭕" && esp.a2 == "🔲" && esp.a3 == "❌" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "❌"))) {
          tttset.reActivate1 = "off"
          esp.a3 = "⭕"
	} else if (tttset.tttdifficulty == "HARD" &&
              ((esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "❌" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "⭕" && esp.c2 == "❌" && esp.c3 == "🔲") ||
               (esp.a1 == "⭕" && esp.a2 == "❌" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "❌"))) {
          tttset.reActivate1 = "off"
          esp.b1 = "⭕"
	} else if (tttset.tttdifficulty == "HARD" &&
              ((esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "⭕" && esp.c2 == "❌" && esp.c3 == "🔲") ||
               (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "❌" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "⭕" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
               (esp.a1 == "🔲" && esp.a2 == "??" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "❌" && esp.c3 == "⭕") ||
               (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "❌" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "⭕") ||
               (esp.a1 == "⭕" && esp.a2 == "❌" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
               (esp.a1 == "⭕" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "❌" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
               (esp.a1 == "🔲" && esp.a2 == "❌" && esp.a3 == "⭕" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
               (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "⭕" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "❌" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
               (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "❌" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "⭕" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
               (esp.a1 == "❌" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "⭕") ||
               (esp.a1 == "⭕" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "❌") ||
               (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "⭕" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "❌" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
               (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "❌" && esp.c1 == "⭕" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
               (esp.a1 == "🔲" && esp.a2 == "❌" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "⭕" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
               (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "❌" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "⭕") ||
               (esp.a1 == "🔲" && esp.a2 == "❌" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "⭕") ||
               (esp.a1 == "⭕" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "❌" && esp.c3 == "🔲") ||
               (esp.a1 == "⭕" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "❌" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
               (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "⭕" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "❌" && esp.c3 == "🔲") ||
               (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "⭕" && esp.b1 == "❌" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
               (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "❌") ||
               (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "❌" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
               (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "❌" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
               (esp.a1 == "❌" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "🔲"))) {
          tttset.reActivate1 = "off"
          esp.b2 = "⭕"
	} else if (tttset.tttdifficulty == "HARD" &&
              ((esp.a1 == "❌" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "❌" && esp.c3 == "⭕") ||
               (esp.a1 == "🔲" && esp.a2 == "❌" && esp.a3 == "⭕" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "❌" && esp.c2 == "🔲" && esp.c3 == "🔲"))) {
          tttset.reActivate1 = "off"
          esp.b3 = "⭕"
	} else if (tttset.tttdifficulty == "HARD" &&
              ((esp.a1 == "❌" && esp.a2 == "🔲" && esp.a3 == "⭕" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
               (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "⭕" && esp.b1 == "🔲" && esp.b2 == "❌" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
               (esp.a1 == "❌" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "❌" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "⭕") ||
               (esp.a1 == "⭕" && esp.a2 == "❌" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "❌"))) {
          tttset.reActivate1 = "off"
          esp.c1 = "⭕"
	} else if (tttset.tttdifficulty == "HARD" &&
              ((esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "❌" && esp.b1 == "❌" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "⭕" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
               (esp.a1 == "❌" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "❌" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "⭕"))) {
          tttset.reActivate1 = "off"
          esp.c2 = "⭕"
	} else if (tttset.tttdifficulty == "HARD" &&
		    ((esp.a1 == "⭕" && esp.a2 == "🔲" && esp.a3 == "❌" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
               (esp.a1 == "⭕" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "❌" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
               (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "❌" && esp.b1 == "❌" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "⭕" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
               (esp.a1 == "🔲" && esp.a2 == "❌" && esp.a3 == "⭕" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "❌" && esp.c2 == "🔲" && esp.c3 == "🔲"))) {
          tttset.reActivate1 = "off"
          esp.c3 = "⭕"
	} else if (tttset.tttdifficulty == "HARD" && (esp.a1 ==  "🔲" || esp.a3 ==  "🔲" || esp.b2 ==  "🔲" || esp.c1 ==  "🔲" || esp.c3 ==  "🔲")) {
		//PRIORIZAR CANTOS E CENTRO
		tttset.reActivate1 = "off"
		while (tttset.reActivate3 == "on") {
			priorityC()
		}
		tttset.reActivate3 = "on"
	} else if (tttset.tttdifficulty == "NORMAL" && ( 
		//TESTE PARA TENTATIVA DE VITÓRIA
		//TESTE PARA TENTATIVA DE VITÓRIA
		(esp.a1=="⭕"&&esp.a2=="⭕"&&esp.a3=="🔲") || (esp.a1=="⭕"&&esp.a2=="🔲"&&esp.a3=="⭕") || (esp.a1=="🔲"&&esp.a2=="⭕"&&esp.a3=="⭕") ||
		(esp.b1=="⭕"&&esp.b2=="⭕"&&esp.b3=="🔲") || (esp.b1=="⭕"&&esp.b2=="🔲"&&esp.b3=="⭕") || (esp.b1=="🔲"&&esp.b2=="⭕"&&esp.b3=="⭕") ||
		(esp.c1=="⭕"&&esp.c2=="⭕"&&esp.c3=="🔲") || (esp.c1=="⭕"&&esp.c2=="🔲"&&esp.c3=="⭕") || (esp.c1=="🔲"&&esp.c2=="⭕"&&esp.c3=="⭕") ||
		(esp.a1=="⭕"&&esp.b1=="⭕"&&esp.c1=="🔲") || (esp.a1=="⭕"&&esp.b1=="🔲"&&esp.c1=="⭕") || (esp.a1=="🔲"&&esp.b1=="⭕"&&esp.c1=="⭕") ||
		(esp.a2=="⭕"&&esp.b2=="⭕"&&esp.c2=="🔲") || (esp.a2=="⭕"&&esp.b2=="🔲"&&esp.c2=="⭕") || (esp.a2=="🔲"&&esp.b2=="⭕"&&esp.c2=="⭕") ||
		(esp.a3=="⭕"&&esp.b3=="⭕"&&esp.c3=="🔲") || (esp.a3=="⭕"&&esp.b3=="🔲"&&esp.c3=="⭕") || (esp.a3=="🔲"&&esp.b3=="⭕"&&esp.c3=="⭕") ||
		(esp.a1=="⭕"&&esp.b2=="⭕"&&esp.c3=="🔲") || (esp.a1=="⭕"&&esp.b2=="🔲"&&esp.c3=="⭕") || (esp.a1=="🔲"&&esp.b2=="⭕"&&esp.c3=="⭕") ||
		(esp.a3=="⭕"&&esp.b2=="⭕"&&esp.c1=="🔲") || (esp.a3=="⭕"&&esp.b2=="🔲"&&esp.c1=="⭕") || (esp.a3=="🔲"&&esp.b2=="⭕"&&esp.c1=="⭕") ||
		//TESTE PARA TENTATIVA DE BLOQUEIO
		(esp.a1=="❌"&&esp.a2=="❌"&&esp.a3=="🔲") || (esp.a1=="❌"&&esp.a2=="🔲"&&esp.a3=="❌") || (esp.a1=="🔲"&&esp.a2=="❌"&&esp.a3=="❌") ||
		(esp.b1=="❌"&&esp.b2=="❌"&&esp.b3=="🔲") || (esp.b1=="❌"&&esp.b2=="🔲"&&esp.b3=="❌") || (esp.b1=="🔲"&&esp.b2=="❌"&&esp.b3=="❌") ||
		(esp.c1=="❌"&&esp.c2=="❌"&&esp.c3=="🔲") || (esp.c1=="❌"&&esp.c2=="🔲"&&esp.c3=="❌") || (esp.c1=="🔲"&&esp.c2=="❌"&&esp.c3=="❌") ||
		(esp.a1=="❌"&&esp.b1=="❌"&&esp.c1=="🔲") || (esp.a1=="❌"&&esp.b1=="🔲"&&esp.c1=="❌") || (esp.a1=="🔲"&&esp.b1=="❌"&&esp.c1=="❌") ||
		(esp.a2=="❌"&&esp.b2=="❌"&&esp.c2=="🔲") || (esp.a2=="❌"&&esp.b2=="🔲"&&esp.c2=="❌") || (esp.a2=="🔲"&&esp.b2=="❌"&&esp.c2=="❌") ||
		(esp.a3=="❌"&&esp.b3=="❌"&&esp.c3=="🔲") || (esp.a3=="❌"&&esp.b3=="🔲"&&esp.c3=="❌") || (esp.a3=="🔲"&&esp.b3=="❌"&&esp.c3=="❌") ||
		(esp.a1=="❌"&&esp.b2=="❌"&&esp.c3=="🔲") || (esp.a1=="❌"&&esp.b2=="🔲"&&esp.c3=="❌") || (esp.a1=="🔲"&&esp.b2=="❌"&&esp.c3=="❌") ||
		(esp.a3=="❌"&&esp.b2=="❌"&&esp.c1=="🔲") || (esp.a3=="❌"&&esp.b2=="🔲"&&esp.c1=="❌") || (esp.a3=="🔲"&&esp.b2=="❌"&&esp.c1=="❌")
	)){
		//NORMAL
		tttset.reActivate1 = "off"
		let randomNORMAL = Math.floor(Math.random() * 3)
		if (randomNORMAL == 0 || randomNORMAL == 1) {
			IAmove1()
		} else {
			while (tttset.reActivate2 == "on") {
				IAalter()
			}
		}
		tttset.reActivate2 = "on"
	} else {
		//EASY / RANDOM
		let randomALL = Math.floor(Math.random() * 9)
		switch (randomALL) {
			case 0:
				if (esp.a1 == "🔲") {
    	            tttset.reActivate1 = "off"
    	            esp.a1 = "⭕"
    	        }
    	    break
			case 1:
				if (esp.a2 == "🔲") {
    	            tttset.reActivate1 = "off"
    	            esp.a2 = "⭕"
    	        }
    	    break
			case 2:
				if (esp.a3 == "🔲") {
    	            tttset.reActivate1 = "off"
    	            esp.a3 = "⭕"
    	        }
    	    break
			case 3:
				if (esp.b1 == "🔲") {
    	            tttset.reActivate1 = "off"
    	            esp.b1 = "⭕"
    	        }
    	    break
			case 4:
				if (esp.b2 == "🔲") {
    	            tttset.reActivate1 = "off"
    	            esp.b2 = "⭕"
    	        }
    	    break
			case 5:
				if (esp.b3 == "🔲") {
    	            tttset.reActivate1 = "off"
    	            esp.b3 = "⭕"
    	        }
    	    break
			case 6:
				if (esp.c1 == "🔲") {
    	            tttset.reActivate1 = "off"
    	            esp.c1 = "⭕"
    	        }
    	    break
			case 7:
				if (esp.c2 == "🔲") {
    	            tttset.reActivate1 = "off"
    	            esp.c2 = "⭕"
    	        }
    	    break
			case 8:
				if (esp.c3 == "🔲") {
        	        tttset.reActivate1 = "off"
        	        esp.c3 = "⭕"
        	    }
        	break
		}
	}
}

const IAmove1 = () => {
	//JOGADA PARA VITÓRIA
	if (esp.a1=="⭕"&&esp.a2=="⭕"&&esp.a3=="🔲") {
		esp.a3 = "⭕"
	} else if (esp.a1=="⭕"&&esp.a2=="🔲"&&esp.a3=="⭕") {
		esp.a2 = "⭕"
	} else if (esp.a1=="🔲"&&esp.a2=="⭕"&&esp.a3=="⭕") {
		esp.a1 = "⭕"
	} else if (esp.b1=="⭕"&&esp.b2=="⭕"&&esp.b3=="🔲") {
		esp.b3 = "⭕"
	} else if (esp.b1=="⭕"&&esp.b2=="🔲"&&esp.b3=="⭕") {
		esp.b2 = "⭕"
	} else if (esp.b1=="🔲"&&esp.b2=="⭕"&&esp.b3=="⭕") {
		esp.b1 = "⭕"
	} else if (esp.c1=="⭕"&&esp.c2=="⭕"&&esp.c3=="🔲") {
		esp.c3 = "⭕"
	} else if (esp.c1=="⭕"&&esp.c2=="🔲"&&esp.c3=="⭕") {
		esp.c2 = "⭕"
	} else if (esp.c1=="🔲"&&esp.c2=="⭕"&&esp.c3=="⭕") {
		esp.c1 = "⭕"
	} else if (esp.a1=="⭕"&&esp.b1=="⭕"&&esp.c1=="🔲") {
		esp.c1 = "⭕"
	} else if (esp.a1=="⭕"&&esp.b1=="🔲"&&esp.c1=="⭕") {
		esp.b1 = "⭕"
	} else if (esp.a1=="🔲"&&esp.b1=="⭕"&&esp.c1=="⭕") {
		esp.a1 = "⭕"
	} else if (esp.a2=="⭕"&&esp.b2=="⭕"&&esp.c2=="🔲") {
		esp.c2 = "⭕"
	} else if (esp.a2=="⭕"&&esp.b2=="🔲"&&esp.c2=="⭕") {
		esp.b2 = "⭕"
	} else if (esp.a2=="🔲"&&esp.b2=="⭕"&&esp.c2=="⭕") {
		esp.a2 = "⭕"
	} else if (esp.a3=="⭕"&&esp.b3=="⭕"&&esp.c3=="🔲") {
		esp.c3 = "⭕"
	} else if (esp.a3=="⭕"&&esp.b3=="🔲"&&esp.c3=="⭕") {
		esp.b3 = "⭕"
	} else if (esp.a3=="🔲"&&esp.b3=="⭕"&&esp.c3=="⭕") {
		esp.a3 = "⭕"
	} else if (esp.a1=="⭕"&&esp.b2=="⭕"&&esp.c3=="🔲") {
		esp.c3 = "⭕"
	} else if (esp.a1=="⭕"&&esp.b2=="🔲"&&esp.c3=="⭕") {
		esp.b2 = "⭕"
	} else if (esp.a1=="🔲"&&esp.b2=="⭕"&&esp.c3=="⭕") {
		esp.a1 = "⭕"
	} else if (esp.a3=="⭕"&&esp.b2=="⭕"&&esp.c1=="🔲") {
		esp.c1 = "⭕"
	} else if (esp.a3=="⭕"&&esp.b2=="🔲"&&esp.c1=="⭕") {
		esp.b2 = "⭕"
	} else if (esp.a3=="🔲"&&esp.b2=="⭕"&&esp.c1=="⭕") {
		esp.a3 = "⭕"
	//JOGADA PARA BLOQUEIO
	} else if (esp.a1=="❌"&&esp.a2=="❌"&&esp.a3=="🔲") {
		esp.a3 = "⭕"
	} else if (esp.a1=="❌"&&esp.a2=="🔲"&&esp.a3=="❌") {
		esp.a2 = "⭕"
	} else if (esp.a1=="🔲"&&esp.a2=="❌"&&esp.a3=="❌") {
		esp.a1 = "⭕"
	} else if (esp.b1=="❌"&&esp.b2=="❌"&&esp.b3=="🔲") {
		esp.b3 = "⭕"
	} else if (esp.b1=="❌"&&esp.b2=="🔲"&&esp.b3=="❌") {
		esp.b2 = "⭕"
	} else if (esp.b1=="🔲"&&esp.b2=="❌"&&esp.b3=="❌") {
		esp.b1 = "⭕"
	} else if (esp.c1=="❌"&&esp.c2=="❌"&&esp.c3=="🔲") {
		esp.c3 = "⭕"
	} else if (esp.c1=="❌"&&esp.c2=="🔲"&&esp.c3=="❌") {
		esp.c2 = "⭕"
	} else if (esp.c1=="🔲"&&esp.c2=="❌"&&esp.c3=="❌") {
		esp.c1 = "⭕"
	} else if (esp.a1=="❌"&&esp.b1=="❌"&&esp.c1=="🔲") {
		esp.c1 = "⭕"
	} else if (esp.a1=="❌"&&esp.b1=="🔲"&&esp.c1=="❌") {
		esp.b1 = "⭕"
	} else if (esp.a1=="🔲"&&esp.b1=="❌"&&esp.c1=="❌") {
		esp.a1 = "⭕"
	} else if (esp.a2=="❌"&&esp.b2=="❌"&&esp.c2=="🔲") {
		esp.c2 = "⭕"
	} else if (esp.a2=="❌"&&esp.b2=="🔲"&&esp.c2=="❌") {
		esp.b2 = "⭕"
	} else if (esp.a2=="🔲"&&esp.b2=="❌"&&esp.c2=="❌") {
		esp.a2 = "⭕"
	} else if (esp.a3=="❌"&&esp.b3=="❌"&&esp.c3=="🔲") {
		esp.c3 = "⭕"
	} else if (esp.a3=="❌"&&esp.b3=="🔲"&&esp.c3=="❌") {
		esp.b3 = "⭕"
	} else if (esp.a3=="🔲"&&esp.b3=="❌"&&esp.c3=="❌") {
		esp.a3 = "⭕"
	} else if (esp.a1=="❌"&&esp.b2=="❌"&&esp.c3=="🔲") {
		esp.c3 = "⭕"
	} else if (esp.a1=="❌"&&esp.b2=="🔲"&&esp.c3=="❌") {
		esp.b2 = "⭕"
	} else if (esp.a1=="🔲"&&esp.b2=="❌"&&esp.c3=="❌") {
		esp.a1 = "⭕"
	} else if (esp.a3=="❌"&&esp.b2=="❌"&&esp.c1=="🔲") {
		esp.c1 = "⭕"
	} else if (esp.a3=="❌"&&esp.b2=="🔲"&&esp.c1=="❌") {
		esp.b2 = "⭕"
	} else if (esp.a3=="🔲"&&esp.b2=="❌"&&esp.c1=="❌") {
		esp.a3 = "⭕"
	}
}

//MOVIMENTO ALTERNATIVO
const IAalter = () => {
	let randomALTER = Math.floor(Math.random() * 9)
	switch (randomALTER) {
		case 0:
			if (esp.a1 == "🔲") {
                tttset.reActivate2 = "off"
                esp.a1 = "⭕"
            }
        break
		case 1:
			if (esp.a2 == "🔲") {
                tttset.reActivate2 = "off"
                esp.a2 = "⭕"
            }
        break
		case 2:
			if (esp.a3 == "🔲") {
                tttset.reActivate2 = "off"
                esp.a3 = "⭕"
            }
        break
		case 3:
			if (esp.b1 == "🔲") {
                tttset.reActivate2 = "off"
                esp.b1 = "⭕"
            }
        break
		case 4:
			if (esp.b2 == "🔲") {
                tttset.reActivate2 = "off"
                esp.b2 = "⭕"
            }
        break
		case 5:
			if (esp.b3 == "🔲") {
                tttset.reActivate2 = "off"
                esp.b3 = "⭕"
            }
        break
		case 6:
			if (esp.c1 == "🔲") {
                tttset.reActivate2 = "off"
                esp.c1 = "⭕"
            }
        break
		case 7:
			if (esp.c2 == "🔲") {
                tttset.reActivate2 = "off"
                esp.c2 = "⭕"
            }
        break
		case 8:
			if (esp.c3 == "🔲") {
                tttset.reActivate2 = "off"
                esp.c3 = "⭕"
            }
        break
	}
}

//JOGAR NOS CANTOS E CENTRO - IMPOSSIVEL
const priorityC = () => {
	let randomPriC = Math.floor(Math.random() * 5)
	switch (randomPriC) {
		case 0 :
			if (esp.a1 == "🔲") {
				tttset.reActivate3 = "off"
				esp.a1 = "⭕"
			}
		break
		case 1 :
			if (esp.a3 == "🔲") {
				tttset.reActivate3 = "off"
				esp.a3 = "⭕"
			}
		break
		case 2 :
			if (esp.b2 == "🔲") {
				tttset.reActivate3 = "off"
				esp.b2 = "⭕"
			}
		break
		case 3 :
			if (esp.c1 == "🔲") {
				tttset.reActivate3 = "off"
				esp.c1 = "⭕"
			}
		break
		case 4 :
			if (esp.c3 == "🔲") {
				tttset.reActivate3 = "off"
				esp.c3 = "⭕"
			}
		break
	}
}
///_ END TIC-TAC-TOE CONFIG by: Resen

function kyun(seconds){
  function pad(s){
    return (s < 10 ? '0' : '') + s;
  }
  var hours = Math.floor(seconds / (60*60));
  var minutes = Math.floor(seconds % (60*60) / 60);
  var seconds = Math.floor(seconds % 60);

  //return pad(hours) + ':' + pad(minutes) + ':' + pad(seconds)
  return `${pad(hours)} Horas ${pad(minutes)} Minutos ${pad(seconds)} Segundos`
}

async function starts() {
	const client = new WAConnection()
	client.logger.level = 'warn'
	console.log(banner.string)
	client.on('qr', () => {
		console.log(color('[','white'), color('!','red'), color(']','white'), color(' Scan the qr code above'))
	})

	fs.existsSync('./DarKBOT.json') && client.loadAuthInfo('./DarKBOT.json')
	client.on('connecting', () => {
		start('2', 'ᴄᴏɴᴇᴄᴛᴀɴᴅᴏ ᴊᴠʙᴏᴏᴛs')
	})
	client.on('open', () => {
		success('2', 'ᴄᴏɴᴇᴄᴛᴀᴅᴏ✅ ')
	})
	await client.connect({timeoutMs: 30*1000})
        fs.writeFileSync('./DarKBOT.json', JSON.stringify(client.base64EncodedAuthInfo(), null, '\t'))

//client.on('blocklist-update', async (chat) => {
 //   for (i of chat.added){
       // console.log(color("LISTA DE USUÁRIOS BLOQUEADOS", "blue"))
  //      target = i.replace('@c.us', '@s.whatsapp.net')
//        blocked.push(target)
   //     console.log(color("[ BLOQUEADO ] ",'red')+target)
  //  }
 //   for (i of chat.removed){
  //      target = i.replace('@c.us', '@s.whatsapp.net')
   //     blocked.splice(blocked.indexOf(target), 1)
  //      console.log(color("[ DESBLOQUEADO ] ", 'green')+target)
 //   }
//    })

	client.on('CB:Blocklist', json => {
            if (blocked.length > 2) return
	    for (let i of json[1].blocklist) {
	    	blocked.push(i.replace('c.us','s.whatsapp.net'))
	    }
	})
	client.on('CB:action,,battery', json => {
		global.batteryLevelStr = json[2][0][1].value
	   global.batterylevel = parseInt(batteryLevelStr)
		baterai = batterylevel
        if (json[2][0][1].live == 'true') charging = true
       if (json[2][0][1].live == 'false') charging = false
        console.log(json[2][0][1])
		console.log(color('ϟ➪ᴀ ', 'white'), color('ʙᴀᴛᴇʀɪᴀ', 'red'), color('ᴅᴏ ʙᴏᴛ ᴇsᴛᴀ ᴇᴍ', 'white'),  color('ϟ➪ ' + batterylevel+'%', "red"))
	})
	client.on('close', async () => {
  if (client.state == 'close') {
  client.logger.error('Reconectando...')
    await client.loadAuthInfo('./DarKBOT.json')
    await client.connect()
    global.timestamp.connect = new Date
  }
})
client.on('group-participants-update', async (anu) => {
		if(antifake.includes(anu.jid)) {
	const mdata = await client.groupMetadata(anu.jid)
			if (anu.action == 'add'){
				num = anu.participants[0]
				if(!num.split('@')[0].startsWith(55)) {
					client.sendMessage(mdata.id, '*Иʋмɛяσ ҒA⃟ƘЄ Ɩи∂σ ∂ɛ βαƨɛ ☞☜*', MessageType.text)
					setTimeout(async function () {
						client.groupRemove(mdata.id, [num])
					}, 3000)
				}
			}
			}
		if (!welkom.includes(anu.jid)) return
		try {
			const mdata = await client.groupMetadata(anu.jid)
			console.log(anu)
			if (anu.action == 'add') {
				num = anu.participants[0]
				try {
					ppimg = await client.getProfilePicture(`${anu.participants[0].split('@')[0]}@c.us`)
				} catch {
					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
				bvdark = `┏ ✘🌖 *ꪶ ࣤsᴇᴊᴀ ʙᴇᴍ ᴠɪɴᴅᴏꫂ* 🌘✘┓\n┃•────•─────────•───•\n┣ꪶ͢★ʀᴇɢɪsᴛʀᴇ-sᴇ ɴᴏ ʙᴏᴛミ★\n   ϟᴜᴛɪʟɪᴢᴇ: +registrar\n┣❲👤❳${prefix}registrar sᴇᴜɴᴏᴍᴇ/idade\n┣❲👤❳ꪶ͢Exᴇᴍᴘʟᴏ: ${prefix}registrar Joao/18\n┗━━━━━━━━━━━━━━┈`
				client.sendMessage(mdata.id, bvdark, MessageType.text, {contextInfo: {"mentionedJid": [num]}})
					} else if (anu.action == 'remove') {
				num = anu.participants[0]
				try {
					ppimg = await client.getProfilePicture(`${num.split('@')[0]}@c.us`)
				} catch {
					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
				bvdark = `┏ ✘🌖 *ꪶ ࣤSᴀɪᴜ ᴅᴏ Gʀᴜᴘᴏꫂ*.᭢ 🌔✘\n┃•────•─────────•───•\n┣ꪶ͢★Eᴍ ᴍᴇᴍᴏʀɪᴀ ᴅᴇ:\n┣ꪶ͢@${num.split('@')[0]}\n┣ꪶ͢Vᴀ ᴇᴍ Pᴀᴢ \n┗━━━━━━━━━━━━━━┈`
				client.sendMessage(mdata.id,bvdark, MessageType.text, {contextInfo: {"mentionedJid": [num]}})
			}
		} catch (e) {
		//	console.log('Error : %s', color(e, 'red'))
		}
	})

client.on('CB:action,,call', async json => {
        const callerId = json[2][0][1].from;
        console.log("LIGAÇÃO DE" + callerId)
        client.sendMessage(callerId, "┏ ┓✘「 ꪶ ࣤΣŁƖƬΣ᭢᜴⁩ꪶ͢🅑🅞🅣ꫂ 」✘┓\n│ ┃─────────────────\n│ ┃ϟ➪ 🚫⚠️ sɪsᴛᴇᴍᴀ ᴀɴᴛɪ ᴄᴀʟʟ ⚠️🚫\n│ ┃ϟ➪ ᴀᴜᴛᴏ-ʙʟᴏǫᴜᴇᴀɴᴅᴏ sᴇᴜ ᴄᴏɴᴛᴀᴛᴏ 🏴‍☠️\n┗ ┛━━━「 ꪶ ࣤΣŁƖƬΣ᭢᜴⁩━━━━┈", MessageType.text)
        setTimeout(async() => {
            await client.blockUser(callerId, "add")
        }, 4000)
    })
    
  client.on('chat-update', async (mek) => {
		try {
                        if (!mek.hasNewMessage) return
                        mek = JSON.parse(JSON.stringify(mek)).messages[0]
			if (!mek.message) return
			if (mek.key && mek.key.remoteJid == 'status@broadcast') return
			if (mek.key.fromMe) return
			global.prefix
			global.blocked
			const content = JSON.stringify(mek.message)
			const speed = require('performance-now');
			const from = mek.key.remoteJid
			sender = mek.key.fromMe ? client.user.jid : mek.key.remoteJid.endsWith('@g.us') ? mek.participant : mek.key.remoteJid
            conts = mek.key.fromMe ? client.user.jid : client.contacts[sender] || {
 notify: jid.replace(/@.+/, '')
            }
			const type = Object.keys(mek.message)[0]
			const apiKey = 'Your-Api-Key'
			const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
			const time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
			body = (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption.startsWith(prefix) ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption.startsWith(prefix) ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text.startsWith(prefix) ? mek.message.extendedTextMessage.text : ''
			budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
            var pes = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''
			const messagesC = pes.slice(0).trim().split(/ +/).shift().toLowerCase()
			const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()
			const args = body.trim().split(/ +/).slice(1)
			const isCmd = body.startsWith(prefix)
		
let pushname = mek.key.fromMe ? client.user.name : conts.notify || conts.vname || conts.name || '-'

            const date = moment.tz('America/Sao_Paulo').format('DD/MM/YY')
            const hr = moment.tz('America/Sao_Paulo').format('HH:mm:ss')
            const timi = moment.tz('America/Sao_Paulo').add(30, 'days').calendar();
            const timu = moment.tz('America/Sao_Paulo').add(20, 'days').calendar();
            const hour_now = moment().format('HH:mm:ss')

			mess = {
					wait: '❬❗❭ Espere',
					success: '️❬ ✔ ❭ Sucesso 🖤',
					levelon: '❬ ✔ ❭ *leveling* *ativado*',
					leveloff: ' ❬ X ❭  *leveling* *desativado*',
					levelnoton: '❬ X ❭ *leveling não ativado*',
					levelnol: '*error* 0 °-°',
					error: {
				stick: '*Bem, falhe, tente novamente ^_^*',
				Iv: '𝗠𝗮𝗮𝗳 𝗹𝗶𝗻𝗸 𝘁𝗶𝗱𝗮𝗸 𝘃𝗮𝗹𝗶𝗱☹️'
				},
				only: {
					//REMOVI, DESNECESSÁRIO.
				}
			}

			const botNumber = client.user.jid
			const ownerNumber = [`555185480669@s.whatsapp.net`] // replace this with your number
			const premium = ["555185480669@s.whatsapp.net", "556999815493@s.whatsapp.net", "553899790512@s.whatsapp.net", "5512997861316@s.whatsapp.net", "5511933598341@s.whatsapp.net", "555196234055@s.whatsapp.net", "15086239185@s.whatsapp.net", "553598970545@s.whatsapp.net", "5521965837616@s.whatsapp.net", "5512997861316@s.whatsapp.net"] 
			const isGroup = from.endsWith('@g.us')
			const groupMetadata = isGroup ? await client.groupMetadata(from) : ''
			const groupName = isGroup ? groupMetadata.subject : ''
const tescuk = ["0@s.whatsapp.net"]
const groupMembers = isGroup ? groupMetadata.participants : ''
			const groupDesc = isGroup ? groupMetadata.desc : ''
			const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
			const isUser = checkRegisteredUser(sender)
const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
			const groupId = isGroup ? groupMetadata.jid : ''
			const isGroupAdmins = groupAdmins.includes(sender) || false
			const isLevelingOn = isGroup ? _leveling.includes(from) : true
const isAuto = isGroup ? atsticker.includes(from) : true
			const isWelkom = isGroup ? welkom.includes(from) : true
			const isNsfw = isGroup ? nsfw.includes(from) : true
      const isAntiLink = isGroup ? antilink.includes(from) : false
	    	const isSimi = isGroup ? _simi.includes(from) : false
			const isOwner = ownerNumber.includes(sender)
			const isBan = cekBannedUser(sender, ban)
			const isPremium = premium.includes(sender)
			const errorurl2 = 'https://i.ibb.co/dttZM8b/591530180aad.png'
			totalchat = await client.chats.all()
const q = args.join(' ')
const isUrl = (url) => {
			    return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))
			}
			const reply = (teks) => {
				client.sendMessage(from, teks, text, {quoted:mek})
			}
			const sendImage = (teks) => {
		    client.sendMessage(from, teks, image, {quoted:mek})
		    }
			const sendMess = (hehe, teks) => {
				client.sendMessage(hehe, teks, text)
			}
			const mentions = (teks, memberr, id) => {
				(id == null || id == undefined || id == false) ? client.sendMessage(from, teks.trim(), extendedText, {contextInfo: {"mentionedJid": memberr}}) : client.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": memberr}})
			}
			const costum = (pesan, tipe, target, target2) => {
                 client.sendMessage(from, pesan, tipe, {quoted: {key: {fromMe: false, participant: `${target}`, ...(from ? {remoteJid: from}: {})}, message: {conversation: `${target2}` }}})
            }
            
//_VISUALIZA AS MENSAGENS 
client.chatRead(from)

			//_FUCTION PATENTE
            const nivelAtual = getLevelingLevel(sender)
            var patt = '⏤͟͟͞͞ᴀᴘʀᴇɴᴅɪᴢ I🥉'
if (nivelAtual === 0) {
 patt = '⏤͟͟͞͞ꦿ⃟ۜ Ḷɛи∂á̷яισ❖ꪶ͢Ɖa⃟яƘ᭢᜴⁩🔥🖤'
          } else if (nivelAtual === 1) {
 patt = '⏤͟͟͞͞ᴀᴘʀᴇɴᴅɪᴢ  I🥉'
         } else if (nivelAtual === 2) {
 patt = '⏤͟͟͞͞ᴀᴘʀᴇɴᴅɪᴢ II🥉'
         } else if (nivelAtual === 3) {
 patt = '⏤͟͟͞͞ᴀᴘʀᴇɴᴅɪᴢ  III🥉'
         } else if (nivelAtual === 4) {
 patt = '⏤͟͟͞͞ᴀᴘʀᴇɴᴅɪᴢ  IV🥉'
         } else if (nivelAtual === 5) {
 patt = '⏤͟͟͞͞ᴀᴘʀᴇɴᴅɪᴢ  V🥉'
         } else if (nivelAtual === 6) {
 patt = '⏤͟͟͞͞ᴄᴏɴᴠᴇʀsᴀᴅᴏʀ I🥈'
         } else if (nivelAtual === 7) {
 patt = '⏤͟͟͞͞ᴄᴏɴᴠᴇʀsᴀᴅᴏʀ II🥈'
         } else if (nivelAtual === 8) {
 patt = '⏤͟͟͞͞ᴄᴏɴᴠᴇʀsᴀᴅᴏʀ III🥈'
         } else if (nivelAtual === 9) {
 patt = '⏤͟͟͞͞ᴄᴏɴᴠᴇʀsᴀᴅᴏʀ IV🥈'
         } else if (nivelAtual === 10) {
 patt = '⏤͟͟͞͞ᴄᴏɴᴠᴇʀsᴀᴅᴏʀ V🥈'
         } else if (nivelAtual === 11) {
 patt = '⏤͟͟͞͞ꦿ⃟ۜ  ᴅᴇᴍøɴɪᴏ I🥇'
         } else if (nivelAtual === 12) {
 patt = '⏤͟͟͞͞ꦿ⃟ۜ  ᴅᴇᴍøɴɪᴏ II🥇'
         } else if (nivelAtual === 13) {
 patt = '⏤͟͟͞͞ꦿ⃟ۜ  ᴅᴇᴍøɴɪᴏ III🥇'
         } else if (nivelAtual === 14) {
 patt = '⏤͟͟͞͞ꦿ⃟ۜ  ᴅᴇᴍøɴɪᴏ IV🥇'
         } else if (nivelAtual === 15) {
 patt = '⏤͟͟͞͞ꦿ⃟ۜ  ᴅᴇᴍøɴɪᴏ V🥇'
         } else if (nivelAtual === 16) {
 patt = '⏤͟͟͞͞ꦿ⃟ۜ  ʙʀᴜxᴏ🌚 I'
         } else if (nivelAtual === 17) {
 patt = '⏤͟͟͞͞ꦿ⃟ۜ  ʙʀᴜxᴏ🌚 II'
         } else if (nivelAtual === 18) {
 patt = '⏤͟͟͞͞ꦿ⃟ۜ  ʙʀᴜxᴏ🌚 III'
         } else if (nivelAtual === 19) {
 patt = '⏤͟͟͞͞ꦿ⃟ۜ  ʙʀᴜxᴏ🌚 IV'
         } else if (nivelAtual === 20) {
 patt = '⏤͟͟͞͞ꦿ⃟ۜ  ʙʀᴜxᴏ🌚 V'
         } else if (nivelAtual === 21) {
 patt = '⏤͟͟͞͞ꦿ⃟ۜ  sᴀᴛᴀɴɪsᴛᴀ I 💎'
         } else if (nivelAtual === 22) {
 patt = '⏤͟͟͞͞ꦿ⃟ۜ  sᴀᴛᴀɴɪsᴛᴀ II 💎'
         } else if (nivelAtual === 23) {
 patt = '⏤͟͟͞͞ꦿ⃟ۜ  sᴀᴛᴀɴɪsᴛᴀ III 💎'
         } else if (nivelAtual === 24) {
 patt = '⏤͟͟͞͞ꦿ⃟ۜ  sᴀᴛᴀɴɪsᴛᴀ IV 💎'
         } else if (nivelAtual === 25) {
 patt = '⏤͟͟͞͞ꦿ⃟ۜ  sᴀᴛᴀɴɪsᴛᴀ V 💎'
         } else if (nivelAtual === 26) {
 patt = '⏤͟͟͞͞ꦿ⃟ۜ  ᴍɪʟɪᴛᴀʀ🇧🇷 I'
         } else if (nivelAtual === 27) {
 patt = '⏤͟͟͞͞ꦿ⃟ۜ  ᴍɪʟɪᴛᴀʀ🇧🇷 II'
         } else if (nivelAtual === 28) {
 patt = '⏤͟͟͞͞ꦿ⃟ۜ  ᴍɪʟɪᴛᴀʀ🇧🇷 III'
         } else if (nivelAtual === 29) {
 patt = '⏤͟͟͞͞ꦿ⃟ۜ  ᴍɪʟɪᴛᴀʀ🇧🇷 IV'
         } else if (nivelAtual === 30) {
 patt = '⏤͟͟͞͞ꦿ⃟ۜ  ᴍɪʟɪᴛᴀʀ🇧🇷 V'
         } else if (nivelAtual === 31) {
 patt = '⏤͟͟͞͞ꦿ⃟ۜ  ᴄᴏᴍᴀɴᴅᴀɴᴛᴇ🏴‍☠️ I'
         } else if (nivelAtual === 32) {
 patt = '⏤͟͟͞͞ꦿ⃟ۜ  ᴄᴏᴍᴀɴᴅᴀɴᴛᴇ🏴‍☠️ II'
         } else if (nivelAtual === 33) {
 patt = '⏤͟͟͞͞ꦿ⃟ۜ  ᴄᴏᴍᴀɴᴅᴀɴᴛᴇ🏴‍☠️ III'
         } else if (nivelAtual === 34) {
 patt = '⏤͟͟͞͞ꦿ⃟ۜ  ᴄᴏᴍᴀɴᴅᴀɴᴛᴇ🏴‍☠️ IV '
         } else if (nivelAtual === 35) {
 patt = '⏤͟͟͞͞ꦿ⃟ۜ  ᴄᴏᴍᴀɴᴅᴀɴᴛᴇ🏴‍☠️ V'
         } else if (nivelAtual === 36) {
 patt = '⏤͟͟͞͞ꦿ⃟ۜ  ᴀssᴀssɪɴᴏ🏴‍☠️💀 I'
         } else if (nivelAtual === 37) {
 patt = '⏤͟͟͞͞ꦿ⃟ۜ  ᴀssᴀssɪɴᴏ🏴‍☠️💀 II'
         } else if (nivelAtual === 38) {
 patt = '⏤͟͟͞͞ꦿ⃟ۜ  ᴀssᴀssɪɴᴏ🏴‍☠️💀 III'
         } else if (nivelAtual === 39) {
 patt = '⏤͟͟͞͞ꦿ⃟ۜ  ᴀssᴀssɪɴᴏ🏴‍☠️💀 IV'
         } else if (nivelAtual === 40) {
 patt = '⏤͟͟͞͞ꦿ⃟ۜ  ᴀssᴀssɪɴᴏ🏴‍☠️💀 V'
         } else if (nivelAtual === 41) {
 patt = '🦅Crazyng☄️'
         } else if (nivelAtual === 42) {
 patt = '🔥Mágico l 🔥'       
            } else if (nivelAtual === 43) {
 patt = '🔥Mágico ll🔥'
            } else if (nivelAtual === 44) {
 patt = '🔥Mágico lll 🔥'         
            } else if (nivelAtual === 45) {
 patt = '🔥Mágico lV🔥' 
            } else if (nivelAtual === 46) {
 patt = '🔥Mágico V🔥'     
         } else if (nivelAtual === 47) {
 patt = '🦅 Águia Elite l🦅'    
            } else if (nivelAtual === 48) {
 patt = '🦅 Águia Elite ll🦅'    
            } else if (nivelAtual === 49) {
 patt = '🦅 Águia Elite ll🦅'    
            } else if (nivelAtual === 50) {
 patt = '🦅 Águia Elite IV🦅'    
            } else if (nivelAtual === 51) {
 patt = '🦅 Águia Elite V🦅'        
         } else if (nivelAtual === 52) {
 patt = '☄️ Espectral l☄️'     
            } else if (nivelAtual === 53) {
 patt = '☄️ Espectral ll☄️'    
            } else if (nivelAtual === 54) {
 patt = '☄️ Espectral lll☄️'    
            } else if (nivelAtual === 55) {
 patt = '☄️ Espectral IV☄️'   
            } else if (nivelAtual === 56) {
 patt = '☄️ Espectral V☄️'
            } else if (nivelAtual === 57) {
 patt = ' ⏤͟͟͞͞ꦿ⃟ۜ  ᴀɴᴊᴏ ɪ '    
            } else if (nivelAtual === 58) {
 patt = '⏤͟͟͞͞ꦿ⃟ۜ  ᴀɴᴊᴏ ɪɪ'    
            } else if (nivelAtual === 59) {
 patt = '⏤͟͟͞͞ꦿ⃟ۜ  ᴀɴᴊᴏ ɪɪɪ'    
            } else if (nivelAtual === 60) {
 patt = '⏤͟͟͞͞ꦿ⃟ۜ  ᴀɴᴊᴏ ɪᴠ'    
            } else if (nivelAtual === 61) {
 patt = '⏤͟͟͞͞ꦿ⃟ۜ  ᴀɴᴊᴏ ᴠ'        
         } else if (nivelAtual === 62) {
 patt = ' ⏤͟͟͞͞ꦿ⃟ۜ  ɴᴇғɪʟɪɴ ɪ👼'    
            } else if (nivelAtual === 63) {
 patt = ' ⏤͟͟͞͞ꦿ⃟ۜ  ɴᴇғɪʟɪɴ ɪɪ👼'    
            } else if (nivelAtual === 64) {
 patt = ' ⏤͟͟͞͞ꦿ⃟ۜ  ɴᴇғɪʟɪɴ ɪɪɪ👼'    
            } else if (nivelAtual === 65) {
 patt = ' ⏤͟͟͞͞ꦿ⃟ۜ  ɴᴇғɪʟɪɴ ɪᴠ👼'    
            } else if (nivelAtual === 66) {
 patt = '⏤͟͟͞͞ꦿ⃟ۜ  ɴᴇғɪʟɪɴ ᴠ👼'        
         } else if (nivelAtual === 67) {
         	patt = '⏤͟͟͞͞ꦿ⃟ۜ   ᴀʀᴄᴀɴᴊᴏ ɪ🌬️' 
         } else if (nivelAtual === 68) {
 patt = ' ⏤͟͟͞͞ꦿ⃟ۜ  ᴀʀᴄᴀɴᴊᴏ ɪɪ🌬️'    
            } else if (nivelAtual === 69) {
 patt = ' ⏤͟͟͞͞ꦿ⃟ۜ  ᴀʀᴄᴀɴᴊᴏ ɪɪɪ🌬️'    
            } else if (nivelAtual === 70) {
 patt = ' ⏤͟͟͞͞ꦿ⃟ۜ  ᴀʀᴄᴀɴᴊᴏ ɪᴠ🌬️'    
            } else if (nivelAtual === 71) {
 patt = ' ⏤͟͟͞͞ꦿ⃟ۜ  ᴀʀᴄᴀɴᴊᴏ ᴠ🌬️'    
   } else if (nivelAtual === 72) {
         	patt = '⏤͟͟͞͞ꦿ⃟ۜ  ᴅᴇᴜs ɪ🌬️' 
         } else if (nivelAtual === 73) {
 patt = ' ⏤͟͟͞͞ꦿ⃟ۜ  ᴅᴇᴜs 🧙‍♂️ ɪɪ🌬️'    
            } else if (nivelAtual === 74) {
 patt = ' ⏤͟͟͞͞ꦿ⃟ۜ  ᴅᴇᴜs 🧙‍♂️ ɪɪɪ🌬️'    
            } else if (nivelAtual === 75) {
 patt = ' ⏤͟͟͞͞ꦿ⃟ۜ  ᴅᴇᴜs 🧙‍♂️ ɪᴠ🌬️'    
            } else if (nivelAtual === 76) {
 patt = ' ⏤͟͟͞͞ꦿ⃟ۜ  ᴅᴇᴜs 🧙‍♂️ ᴠ🌬️'    
 } else if (nivelAtual === 77) {
 patt = ' ⏤͟͟͞͞ꦿ⃟ۜ  Tɪᴛᴀ̃ 💥'    
            } else if (nivelAtual === 78) {
 patt = ' ⏤͟͟͞͞ꦿ⃟ۜ  sᴏᴍʙʀᴀ 🌀'    
            } else if (nivelAtual === 79) {
 patt = ' ⏤͟͟͞͞ꦿ⃟ۜ  Esᴄᴜʀɪᴅ⃟ᴀ̃o 💀🖤'    
            } else if (nivelAtual >= 80) {
 patt = '⏤͟͟͞͞ꦿ⃟ۜ Ḷɛи∂á̷яισ❖Ɖ𝚨ƦƘ🔥'    
}
            //_TIPO DE USUÁRIO
            if (isOwner) {
 var tuser = '⏤͟͟͞͞ꦿ⃟ۜ Ḷɛи∂á̷яισ❖Ɖ𝚨ƦƘ🔥'
            } else if (isPremium) {
 var tuser = 'ᴠɪᴘ😎'
            } else if (sender == isUser) {
 var tuser = 'ʀᴇɢɪsᴛʀᴀᴅᴏ 🥳'
            } else {
 var tuser = 'ᴅᴇsᴄᴏɴʜᴇᴄɪᴅᴏ🗿'
            }
          
              //_XP COM LEVELING ATIVO
               if (!mek.key.fromMe) {
 if (isGroup && isLevelingOn && !isBan) {
     const currentLevel = getLevelingLevel(sender)
     const checkId = getLevelingId(sender)
     try {
         if (currentLevel === undefined && checkId === undefined) addLevelingId(sender)
         const amountXp = Math.floor(Math.random() * (15 - 25 + 1) + 40) //Math.floor(Math.random() * 10) + 500
         const requiredXp = 5 * Math.pow(currentLevel, (5 / 2)) + 50 * currentLevel + 100 // * (Math.pow(2, currentLevel) - 1)
         const getLevel = getLevelingLevel(sender)
         const namelv = checkId
         addLevelingXp(sender, amountXp)
         if (requiredXp <= getLevelingXp(sender)) {
             addLevelingLevel(sender, 1)
             const lvup = {
  text: `
┏ ✘🌖 *ꪶ ࣤ𝑫͢𝚲𝑹𝑲᭢᜴⁩ꪶ͢𝑩𝑶𝑻ꫂ* 🌘✘┓
┃•────•──────────•───•
┣✘🌖 *ᴠᴏᴄᴇ sᴜʙɪᴜ ᴅᴇ ɴɪᴠᴇʟ* 🌘✘
┃•────•──────────•───•
┣❲❖❳ ɴᴏᴍᴇ: @${namelv.split('@')[0]}
┣❲❖❳ xᴘ: ${getLevelingXp(sender)}
┣❲❖❳ ɴɪᴠᴇʟ: ${getLevel} ⇆ ${getLevelingLevel(sender)}↵
┣❲❖❳ ᴘᴀᴛᴇɴᴛᴇ: ${patt}
┣❲🆙❳ Pᴀʀᴀʙéɴs‼️
┗━━━━━━━━━━━━━━━━━┈`,
  contextInfo: {
      mentionedJid: [namelv]
  }
             }
           client.sendMessage(from, lvup, text, {quoted: mek, quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg","caption": `ϟ➪Bᴀᴛᴇʀɪᴀ: ꪶ͢${batterylevel}%ꫂ🔋\n🆙Sɪsᴛᴇᴍᴀ ᴅᴇ Nɪᴠᴇɪs🆙 `}}}})					
         }
     } catch (err) {
         console.error(err)
     }
 }
            }



////FINALIZAR TTT AUTOMATICAMENTE By: Resen
if (tttset.tttstatus == "off" && tttset.autoEndTime == "on") {
tttset.autoEndTime = "off"
} else if (tttset.tttstatus == "on" && tttset.autoEndTime == "on") {
if (isLevelingOn) {
const randomEndTTTXP = 0 - (Math.floor(Math.random() * 75) + 50)
addLevelingXp(tttset.player, randomEndTTTXP)
const checkTTTIdEnd = getTTTId(tttset.player)
if (checkTTTIdEnd === undefined) addTTTId(tttset.player)
addTTTpoints(tttset.player, randomEndTTTXP)
client.sendMessage(tttset.local,`❌ O TEMPO DE JOGO EXPIROU ❌\n\n➣  PUNIÇÃO: ${randomEndTTTXP} XP`, text, {quoted: tttset.mentionPlayer})
} else {
client.sendMessage(tttset.local,`❌ O TEMPO DE JOGO EXPIROU ❌`, text, {quoted: tttset.mentionPlayer})
}
esp.a1 = "🔲"; esp.a2 = "🔲"; esp.a3 = "🔲"
esp.b1 = "🔲"; esp.b2 = "🔲"; esp.b3 = "🔲"
esp.c1 = "🔲"; esp.c2 = "🔲"; esp.c3 = "🔲"
tttset.tttstatus = "off"
tttset.autoEndTime = "off"
}
	
	//******* ANTI-PV BY LUCAS HORA
//if (isCmd && !isGroup && !isOwner) {
// reply('┏🔥✘⏤͟͟͞͞«ʙᴏᴛ sʏsᴛᴇᴍᶤ ✘🔥┓\n╔═══❖•ೋ°°ೋ•❖═══╗\n│➠ᴘʀɪᴠᴀᴅᴏ ʙʟᴏǫᴜᴇᴀᴅᴏ🚫\n╚═══❖•ೋ°°ೋ•❖═══╝') 
// client.blockUser (from, "add") 
//return
//}
	
	//ANTI-SPAM BY Jv
     if (isCmd && isFiltered(from) && !isGroup) {
        console.log(color('sᴘᴀᴍ', 'red'), color(''), color(`${command}`), color('ᴅᴇ:', 'gray'), color(pushname, 'red'))
        const ff = {
   text:  `@${sender.split('@')[0]}\nᴠᴏᴄᴇ ᴇsᴛᴀ ᴜsᴀɴᴅᴏ ᴏ ᴄᴏᴍᴀɴᴅᴏ ʀᴀᴘɪᴅᴏ ᴅᴇᴍᴀɪs, ᴅᴇɪxᴇ ᴏ ʙᴏᴛ ʀᴇsᴘɪʀᴀʀ. 🤬`,
     contextInfo: {
         mentionedJid: [sender]
     }
  }
        return reply(ff)}
        
        if (isCmd && isFiltered(from) && isGroup) {
        console.log(color('SPAM', 'red'), color(moment.tz('America/Sao_Paulo').format('HH:mm:ss'), 'yellow'), color(`${command}`), 'DE:', color(pushname))
        const ff1 = {
   text:  `@${sender.split('@')[0]}\nᴠᴏᴄᴇ ᴇsᴛᴀ ᴜsᴀɴᴅᴏ ᴏ ᴄᴏᴍᴀɴᴅᴏ ʀᴀᴘɪᴅᴏ ᴅᴇᴍᴀɪs, ᴅᴇɪxᴇ ᴏ ʙᴏᴛ ʀᴇsᴘɪʀᴀʀ. 🤬`,
     contextInfo: {
         mentionedJid: [sender]
     }
  }
        return reply(ff1)}
	
	//_DINHEIRO 
            if (isCmd) {
 const checkATM = checkATMuser(sender)
 try {
     if (checkATM === undefined) addATM(sender)
     const uangsaku = Math.floor(Math.random() * 10) + 90
     addKoinUser(sender, uangsaku)
 } catch (err) {
     console.error(err)
 }
            }
            //_DINHEIRO 2
            if (isCmd) {
 const checkATM2 = checkATMuser(sender)
 try {
     if (checkATM2 === undefined) addATM(sender)
     const uangsaku = Math.floor(Math.random() * 10) + 90
     addKoinUser(sender, uangsaku)
 } catch (err) {
     console.error(err)
 }
            }
	
	async function sendFileFromUrl(from, url, caption, mek, men) {
            let mime = '';
            let res = await axios.head(url)
            mime = res.headers['content-type']
            let type = mime.split("/")[0]+"Message"
            if(mime === "image/gif"){
 type = MessageType.video
 mime = Mimetype.gif
            }
            if(mime === "application/apk"){
 type = MessageType.document
 mime = Mimetype.apk
            }
            if(mime.split("/")[0] === "audio"){
 mime = Mimetype.mp4Audio
            }
            return client.sendMessage(from, await getBuffer(url), type, {caption: caption, quoted: mek, mimetype: mime, contextInfo: {"mentionedJid": men ? men : []}})
        }
        const textImg = (teks) => {
            return client.sendMessage(from, teks, text, {quoted: mek, thumbnail: fs.readFileSync(setting.pathImg)})
        }
	
//_CORES(cores das letras no terminal)
			colors = ['red','white','black','blue','yellow','green']
			
			//_TIPO DE MENSAGEM
            const isImage = type == 'imageMessage'
            const isVideo = type == 'videoMessage'
            const isAudio = type == 'audioMessage'
            const apk = type == 'documentMessage'
            const isSticker = type == 'stickerMessage'
            const isContact = type == 'contactMessage'
            const isLocation = type == 'locationMessage'
            const isMedia = (type === 'imageMessage' || type === 'videoMessage' || type === 'audioMessage')
            typeMessage = body.substr(0, 50).replace(/\n/g, '')
            if (isImage) typeMessage = "Image"
            else if (isVideo) typeMessage = "Video"
            else if (isAudio) typeMessage = "Audio"
            else if (isSticker) typeMessage = "Sticker"
            else if (isContact) typeMessage = "Contact"
            else if (apk) typeMessage = "Document"
            else if (isLocation) typeMessage = "Location"
            const isQuotedText = type === 'extendedTextMessage' && content.includes('textMessage')
            const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
            const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
            const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
            const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
            const isQuotedContact = type === 'extendedTextMessage' && content.includes('contactMessage')
            const isQuotedLocation = type === 'extendedTextMessage' && content.includes('locationMessage')
            const isQuotedapk = type === 'extendedTextMessage' && content.includes('documentMessage')
			
			
			//_VISUALIZA AS MENSAGENS 
           client.chatRead(from)

        const {
 wa_version,
 mcc,
 mnc,
 os_version,
 device_manufacturer,
 device_model
            } = client.user.phone
			
		//_COMANDOS
            if (!isGroup && isCmd) console.log(color('ᴄᴏᴍᴀɴᴅᴏ✅', 'red'), color(''), color('ᴄᴏᴍᴀɴᴅᴏ:', 'gray'), color(`${command}`, 'red'), color('ᴅᴏ:', 'gray'), color(pushname))
            if (isCmd && isGroup) console.log(color('ᴄᴏᴍᴀɴᴅᴏ✅', 'red'), color(''), color('ᴄᴏᴍᴀɴᴅᴏ:', 'gray'), color(`${command}`, 'red'), color('ᴅᴏ:', 'gray'), color(pushname), color('ɴᴏ ɢʀᴜᴘᴏ:', 'gray'), color(groupName, 'red'))

            //_MENSAGENS
            if (!isCmd && isGroup) console.log(color('ᴍᴇɴsᴀɢᴇᴍ✅', 'gray'), color(''), color('ᴅᴏ:', 'gray'), color(pushname, 'red'), 'ɴᴏ ɢʀᴜᴘᴏ:', color(groupName, 'red'))
            if (!isGroup && !isCmd) console.log(color('ᴍᴇɴsᴀɢᴇᴍ✅', 'gray'), color(''), color('ᴅᴏ:', 'gray'), color(pushname, 'red'))

			//_RESPONDER AUTOMATICAMENTE
            
    if (budy === "+grupo") {
client.updatePresence(from, Presence.composing)
//reply('comando desativado para evitar flood')
members_id = []
todos = (args.length > 1) ? body.slice(8).trim(): ''
todos += `Total: ${groupMembers.length} membros\n`
for (let mem of groupMembers) {
todos += `║➸@${mem.jid.split('@')[0]}\n`
members_id.push(mem.jid)
}
mentions(`┏•─────•「★」•─────•┒   \n┃❗*_ɢʀᴜᴘᴏ ᴏғɪᴄɪᴀʟ_*❗\n┗•─────•「★」•─────•┚\n┃https://chat.whatsapp.com/L3IhomsXPsn0CWcFmEwHa0 \n┃Cσℓα αɛ ρɛssᴏᴀʟ ➠✅ ⇡\n┗ ┛━━━━━━━━━━━━━━┈`, members_id, true)

}

//Comandos Interação

if (budy.match('Boanoite|BOANOITE|NOITE|noite|Noite')) {
had = `ʙᴏᴀ ɴᴏɪᴛᴇ é ʀᴏʟɪᴍã, ᴄᴏᴍɪ ᴛᴜ ᴇ ᴛᴜᴀ ɪʀᴍã🤬🇧🇷`
client.sendMessage(from, had, text, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "ꪶ͢🏆ꫂʙᴏᴀ ɴᴏɪᴛᴇ🖤ꫂ\nᴇsᴘᴇʀᴏ ǫᴜᴇ ᴅᴜʀᴍᴀ ʙᴇᴍ✨🖤", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('./database/menus/menu.webp')}}}}) 
}

if (budy.match('Boatarde|tarde|Tarde|TARDE')) {
had = `sᴀʟᴠᴇ 「${pushname}」, ʙᴏᴀ ᴛᴀʀᴅᴇᴇᴇ🇧🇷🖤`
client.sendMessage(from, had, text, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "ꪶ͢🏆ꫂʙᴏᴀ ᴛᴀʀᴅᴇ🖤ꫂ", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('./database/menus/menu.webp')}}}}) 
}

//COMANDOS ZUEIRA

if (budy === 'Acerto mizeravi') {
  buf = fs.readFileSync(`./Zuera/acertomizeravi.mp3`)
client.sendMessage(from, buf, audio, {mimetype: 'audio/mp4',quoted: mek,ptt: true})}

if (budy === 'Aham sei') {
  buf = fs.readFileSync(`./Zuera/ahamsei.mp3`)
client.sendMessage(from, buf, audio, {mimetype: 'audio/mp4',quoted: mek,ptt: true})}

if (budy === 'Va a merda') {
  buf = fs.readFileSync(`./Zuera/ahvaamerda.mp3`)
client.sendMessage(from, buf, audio, {mimetype: 'audio/mp4',quoted: mek,ptt: true})}

if (budy === 'Ai meu cu') {
  buf = fs.readFileSync(`./Zuera/aimeucu.mp3`)
client.sendMessage(from, buf, audio, {mimetype: 'audio/mp4',quoted: mek,ptt: true})}

if (budy === 'Que burro') {
  buf = fs.readFileSync(`./Zuera/aiqueburrodazeropraele.mp3`)
client.sendMessage(from, buf, audio, {mimetype: 'audio/mp4',quoted: mek,ptt: true})}

if (budy === 'Chega') {
  buf = fs.readFileSync(`./Zuera/chega.mp3`)
client.sendMessage(from, buf, audio, {mimetype: 'audio/mp4',quoted: mek,ptt: true})}

if (budy === 'Dirigindo') {
  buf = fs.readFileSync(`./Zuera/dirigindomeucarrofunk.mp3`)
client.sendMessage(from, buf, audio, {mimetype: 'audio/mp4',quoted: mek,ptt: true})}

if (budy === 'As vezes não') {
  buf = fs.readFileSync(`./Zuera/ehverdadeasvezesnao.mp3`)
client.sendMessage(from, buf, audio, {mimetype: 'audio/mp4',quoted: mek,ptt: true})}

if (budy === 'Elemento') {
  buf = fs.readFileSync(`./Zuera/elementocaradepau.mp3`)
client.sendMessage(from, buf, audio, {mimetype: 'audio/mp4',quoted: mek,ptt: true})}

if (budy === 'Errou') {
  buf = fs.readFileSync(`./Zuera/errou.mp3`)
client.sendMessage(from, buf, audio, {mimetype: 'audio/mp4',quoted: mek,ptt: true})}

if (budy === 'Cada coisa') {
  buf = fs.readFileSync(`./Zuera/essagenteinventacadacoisa.mp3`)
  client.sendMessage(from, buf, audio, {mimetype: 'audio/mp4',quoted: mek,ptt: true})}

if (budy === 'Zzz') {
  buf = fs.readFileSync(`./Zuera/euquerodormirporra.mp3`)
client.sendMessage(from, buf, audio, {mimetype: 'audio/mp4',quoted: mek,ptt: true})}

if (budy === 'Inteligente') {
  buf = fs.readFileSync(`./Zuera/alienx.mp3`)
client.sendMessage(from, buf, audio, {mimetype: 'audio/mp4',quoted: mek,ptt: true})}

if (budy === 'Sou uma foca') {
  buf = fs.readFileSync(`./Zuera/eusouumafoca.mp3.mp3`)
client.sendMessage(from, buf, audio, {mimetype: 'audio/mp4',quoted: mek,ptt: true})}

if (budy === 'Fudeu') {
  buf = fs.readFileSync(`./Zuera/fudeudevez.mp3`)
client.sendMessage(from, buf, audio, {mimetype: 'audio/mp4',quoted: mek,ptt: true})}

if (budy === 'Fui tapeado') {
  buf = fs.readFileSync(`./Zuera/fuitapeado.mp3`)
client.sendMessage(from, buf, audio, {mimetype: 'audio/mp4',quoted: mek,ptt: true})}

if (budy === 'Miniboi') {
  buf = fs.readFileSync(`./Zuera/funkminiboi.mp3`)
client.sendMessage(from, buf, audio, {mimetype: 'audio/mp4',quoted: mek,ptt: true})}

if (budy === 'Iluminati') {
  buf = fs.readFileSync(`./Zuera/illuminati.mp3`)
client.sendMessage(from, buf, audio, {mimetype: 'audio/mp4',quoted: mek,ptt: true})}

if (budy === 'Vc') {
  buf = fs.readFileSync(`./Zuera/medaolicencaqueeuvoucagar.mp3`)
client.sendMessage(from, buf, audio, {mimetype: 'audio/mp4',quoted: mek,ptt: true})}

if (budy === 'Deepweb') {
  buf = fs.readFileSync(`./Zuera/musicadeepweb.mp3`)
client.sendMessage(from, buf, audio, {mimetype: 'audio/mp4',quoted: mek,ptt: true})}

if (budy === 'Sad') {
  buf = fs.readFileSync(`./Zuera/musicatristenaruto.mp3`)
client.sendMessage(from, buf, audio, {mimetype: 'audio/mp4',quoted: mek,ptt: true})}

if (budy === 'Sadd') {
  buf = fs.readFileSync(`./Zuera/musicatristenarutofunk.mp3`)
client.sendMessage(from, buf, audio, {mimetype: 'audio/mp4',quoted: mek,ptt: true})}

if (budy === 'Nunca nem vi') {
  buf = fs.readFileSync(`./Zuera/nuncanemvi.mp3`)
client.sendMessage(from, buf, audio, {mimetype: 'audio/mp4',quoted: mek,ptt: true})}

if (budy === 'O gás') {
  buf = fs.readFileSync(`./Zuera/oogas.mp3`)
client.sendMessage(from, buf, audio, {mimetype: 'audio/mp4',quoted: mek,ptt: true})}

if (budy === 'Para') {
  buf = fs.readFileSync(`./Zuera/paracomessaporraai.mp3`)
client.sendMessage(from, buf, audio, {mimetype: 'audio/mp4',quoted: mek,ptt: true})}

if (budy === 'Que bonito') {
  buf = fs.readFileSync(`./Zuera/queviadaobonitohein.mp3`)
client.sendMessage(from, buf, audio, {mimetype: 'audio/mp4',quoted: mek,ptt: true})}

if (budy === 'Viagem') {
  buf = fs.readFileSync(`./Zuera/queviagemeessavei.mp3`)
client.sendMessage(from, buf, audio, {mimetype: 'audio/mp4',quoted: mek,ptt: true})}

if (budy === 'Dollynho') {
  buf = fs.readFileSync(`./Zuera/souodollynhovamoscantar.mp3`)
client.sendMessage(from, buf, audio, {mimetype: 'audio/mp4',quoted: mek,ptt: true})}

if (budy === 'Um merda') {
  buf = fs.readFileSync(`./Zuera/souummerdamerdao.mp3`)
client.sendMessage(from, buf, audio, {mimetype: 'audio/mp4',quoted: mek,ptt: true})}

if (budy === 'Chega') {
  buf = fs.readFileSync(`./Zuera/chega.mp3`)
client.sendMessage(from, buf, audio, {mimetype: 'audio/mp4',quoted: mek,ptt: true})}

if (budy === 'Pegano fogo') {
  buf = fs.readFileSync(`./Zuera/tapegandofogobicho.mp3`)
client.sendMessage(from, buf, audio, {mimetype: 'audio/mp4',quoted: mek,ptt: true})}

if (budy === 'Vergonha') {
  buf = fs.readFileSync(`./Zuera/voceeavergonhadaprofissao.mp3`)
client.sendMessage(from, buf, audio, {mimetype: 'audio/mp4',quoted: mek,ptt: true})}

if (budy === 'Vem tranquilo') {
  buf = fs.readFileSync(`./Zuera/vemtranquilo.mp3`)
client.sendMessage(from, buf, audio, {mimetype: 'audio/mp4',quoted: mek,ptt: true})}

//FIM COMANDOS INTERAÇÃO

//COMANDOS ELOGIOS
if (budy.match('Lindo|lindo|LINDO|Gostoso|gostoso|bonito|Bonito')) {
had = `ᴏʙʀɪɢᴀᴅᴏ 「${pushname}」🌚🖤`
client.sendMessage(from, had, text, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "ꪶ͢🏆ᴏʙʀɪɢᴀᴅᴏ😊🖤ꫂ", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('./database/menus/menu.webp')}}}}) 
}

if (budy.match('legal|Legal|LEGAL|DHR|dhr|daora|dahora|fofo|Fofo|FOFO|humilde|Humilde|HUMILDE|INCRÍVEL|incrível|Incrível')) {
had = `ᴏʙʀɪɢᴀᴅᴏ 「${pushname}」, sᴇʀ ᴜᴍ ʀᴏʙô ᴇsᴄʀᴀᴠɪᴢᴀᴅᴏ ᴍᴇ ғᴇᴢ ᴛᴇʀ ᴇssᴀs ᴄᴀʀᴀᴄᴛᴇʀɪsᴛɪᴄᴀs🖤`
client.sendMessage(from, had, text, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "ꪶ͢🏆ᴏʙʀɪɢᴀᴅᴏ😊🖤ꫂ", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('./database/menus/menu.webp')}}}}) 
}

           
            //_COMANDOS 
         //  if (isCmd && isFiltered(from)) return reply("
            switch (command) {
            	
            case 'play':
anu = await fetchJson(`https://api-gdr2.herokuapp.com/api/ytplay?q=${body.slice(6)}`)
                if (anu.error) return reply(anu.error)
                infomp3 = `┏ ┓✘「 ꪶ ࣤΣŁƖƬΣ᭢᜴⁩ꪶ͢🅥🅘🅟ꫂ 」✘┓\n│ ┃─────────────────\n│ ┃ϟ➪ ɴᴏᴍᴇ: ${anu.result.title}\n│ ┃ϟ➪ ᴜʀʟ: ${anu.result.source}\n│ ┃ϟ➪ ᴛᴀᴍᴀɴʜᴏ: ${anu.result.size} \n┗ ┛━━━「 ꪶ ࣤ🅥🅘🅟᭢᜴⁩━━━━┈`
     buffer = await getBuffer(anu.result.thumb)
                lagu = await getBuffer(anu.result.url)
 client.sendMessage(from, lagu, audio, {mimetype: 'audio/mp4', filename: `${anu.result.title}.mp3`, quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg","caption": `ꪶ͢${anu.result.title}ꫂ\nϟ➪ʙᴀᴛᴇʀɪᴀ: ꪶ͢${batterylevel}%ꫂ🔋`, 'jpegThumbnail': await getBuffer(anu.result.thumb)}}}}) 
                break

            
            case 'playv2':
					  try {
					if (!isUser) return reply(mess.only.Notregis)
					  if (args.length < 1) return reply('Cadê o nome da música krlh?')
                reply('🔎 Procurando música, aguarde...🔎')
                anu = await fetchJson(`https://api-gdr2.herokuapp.com/api/ytplay?q=${body.slice(6)}`)
                 infomp3 = `✅ 𝗠𝗨𝗦𝗜𝗖𝗔 𝗘𝗡𝗖𝗢𝗡𝗧𝗥𝗔𝗗𝗔 ✅\n\n𝗧𝗶́𝘁𝘂𝗹𝗼:\n${anu.result.title}\n𝗟𝗶𝗻𝗸:\n${anu.url}\n𝗩𝗶𝗲𝘄𝘀:\n${anu.result.views}\n𝗗𝘂𝗿𝗮𝗰̧𝗮̃𝗼:\n${anu.duration} \n𝗕𝗮𝗶𝘅𝗮𝗻𝗱𝗼 𝗺𝘂́𝘀𝗶𝗰𝗮, 𝗮𝗴𝘂𝗮𝗿𝗱𝗲...\n\n•────•──────────•────•\n║▌│█║▌│ █║▌│█│║▌║
│█║ꪶ ࣤ𝑫͢𝚲𝑹𝑲᭢᜴⁩ꪶ͢𝑩𝑶𝑻ꫂ, ꁴᴸᵘᶜᵃˢ ˢᶜʳꋊ│█║▌
`
                buffer = await getBuffer(anu.result.thumb)
                lagu = await getBuffer(anu.result.url)
                client.sendMessage(from, buffer, image, {quoted: mek, caption: infomp3})
                client.sendMessage(from, lagu, audio, {mimetype: 'audio/mp4', filename: `${anu.result.title}.mp3`, quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg","caption": `ꪶ͢ ${anu.result.title}.mp3ꫂ`, 'jpegThumbnail': await getBuffer(anu.result.thumb)}}}}) 
					     } catch (erro) {
                  reply(mess.error.again)
                  console.log(erro)
                }
                break
            
           
 //_MENU
case 'help':
case '?':
case 'ajuda':
case 'menu': 
     try {
     BT = `${baterai}`
     } catch {
     BT = "aguarde..."
     }
     const useLevel = getLevelingLevel(sender)
     const useXp = getLevelingXp(sender)
     const checATM = checkATMuser(sender)
 //    if (isUser) return reply(costum(menu(pushname, prefix, BT, tuser, checATM, useLevel, useXp, patt), text, tescuk, cr))
//if (!q.includes('/')) return reply(`
//┏ ✘🌖 *ꪶ ࣤ𝑫͢𝚲𝑹𝑲᭢᜴⁩ꪶ͢𝑩𝑶𝑻ꫂ* 🌘✘┓
//┃•────•─────────•───•
//┣━✘🌖 *ʀᴇɢɪsᴛʀᴇ-sᴇ* 🌘✘
//┃•────•─────────•───•
//┣ꪶ͢${pushname}ꫂ Vᴏᴄᴇ ᴘʀᴇᴄɪsᴀ sᴇ ʀᴇɢɪsᴛʀᴀʀ ᴘᴀʀᴀ ᴀᴄᴇssᴀʀ o Mᴇɴᴜ.
//┣❲👤❳${prefix}registrar sᴇᴜɴᴏᴍᴇ/idade
//┣❲👤❳ꪶ͢Exᴇᴍᴘʟᴏ: ${prefix}registrar ꪶ͢Ɖa⃟яƘ᭢᜴⁩/18
//┗━━━━━━━━━━━━━━┈`)
  //   costum(menu(pushname, prefix, BT, tuser, checATM, useLevel, useXp, patt), text, tescuk, cr)
client.sendMessage(from, menu(pushname, prefix, BT, tuser, checATM, useLevel, useXp, patt) , text, {quoted: mek, quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg","caption": `ꪶ ࣤ𝑫͢𝚲𝑹𝑲᭢᜴⁩ꪶ͢𝑩𝑶𝑻ꫂ\nϟ➪ʙᴀᴛᴇʀɪᴀ: ꪶ͢${batterylevel}%ꫂ🔋`, 'jpegThumbnail': fs.readFileSync('./database/menus/menu.webp')}}}})					
break

case 'zuera':
costum(zuera(pushname, prefix), text, tescuk, cr)
break

case 'bot':
case 'Bot':
case 'BOT': 
case 'info':
case 'infobot':
case 'Info': 
     const xingg = getLevelingId(sender)
     const useTime = getRegisterTime(sender)
     const requireXp = 5 * Math.pow(useLevel, (5 / 2)) + 50 * useLevel + 100
     const chec = getLevelingId(sender)
     if (useLevel === undefined && chec === undefined) addLevelingId(sender)
     uptime = process.uptime()
     myMonths = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Desembro"];
     myDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];
     var tglk = new Date();
     var day = tglk.getDate()
     bulan = tglk.getMonth()
     var thisDay = tglk.getDay(),
         thisDay = myDays[thisDay];
     var yy = tglk.getYear()
     var year = (yy < 1000) ? yy + 1900 : yy;
     const tanggal = `${thisDay}, ${day} de ${myMonths[bulan]} de ${year}`
     const serial = getRegisterSerial(sender)
     const idade = getRegisterAge(sender)
     const nreg = getRegisterName(sender)
     const users = `${_level.length}`
     const chatss = `${totalchat.length}`
     const comandost = totalcmd
     costum(menujv(pushname, prefix, wa_version, temporizador, uptime, hr, tanggal, groupName, users, chatss, tuser, checATM, useLevel, useXp, requireXp, patt, comandost), text, tescuk, crinfo)
         /*if (useLevel == undefined && useXp == undefined) {
         	reply('Informações com "undefined" indicam que você ainda não se registrou \nUse o comando =registrar')
         }*/       
     break

//_Menu INFORMAES GERAIS
//case 'grupo':
//case 'gp':
//case 'Grupo':
                   // client.sendMessage(from, grupo(prefix) , text, {quoted: mek, quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg","caption": " ɢʀᴜᴘᴏ ᴏғɪᴄɪᴀʟ ᴅᴏ 「 ꪶ ࣤ𝑫͢𝚲𝑹𝑲᭢᜴⁩ꪶ͢𝑩𝑶𝑻ꫂ 」\nᴠᴏᴄᴇ sᴇʀᴀ ʙᴇᴍ-ᴠɪɴᴅᴏ(ᴀ)🖤", 'jpegThumbnail': fs.readFileSync('./database/menus/menu.webp')}}}})					
//  break

case 'vips':
case 'menuvip':
case 'mv':
case 'comandosvip': 
if (!isPremium) return reply('┏ ┓✘「 ꪶ ࣤΣŁƖƬΣ᭢᜴⁩ꪶ͢🅥🅘🅟ꫂ 」✘┓\n│ ┃─────────────────\n│ ┃ϟ➪ᴠᴏᴄє ɴᴀᴏ é ᴠɪᴘ\n┗ ┛━━━「 ꪶ ࣤꝒ℟Ʃ𐌼ί𝚄Ɱ᭢᜴⁩━━━━┈')
     client.sendMessage(from, menuvip(pushname, prefix, groupName ) , text, {quoted: mek, quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg","caption": " 🌒ꪶ ࣤꝒ℟Ʃ𐌼ί𝚄Ɱꫂ᭢᜴⁩ 🌔", 'jpegThumbnail': fs.readFileSync('./database/menus/vip.webp')}}}})					
break

case 'money':
case 'dinheiro':
case 'dindin':
const checATM2 = checkATMuser(sender)
client.sendMessage(from, money(pushname, prefix, checATM2) , text, {quoted: mek, quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg","caption": `ϟ➪Bᴀᴛᴇʀɪᴀ: ꪶ͢${batterylevel}%ꫂ🔋\n💰sɪsᴛᴇᴍᴀ ᴅᴇ ᴅɪɴʜᴇɪʀᴏ💲`, 'jpegThumbnail': fs.readFileSync('./database/menus/menu.webp')}}}})					
//client.sendMessage(from, money(pushname, prefix, groupName, checATM), text, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": `ϟ➪Bᴀᴛᴇʀɪᴀ: ꪶ͢${batterylevel}%ꫂ🔋\n💰sɪsᴛᴇᴍᴀ ᴅᴇ ᴅɪɴʜᴇɪʀᴏ💲`, "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486"}}}}) 
break

case 'pz':
case 'PZ':
case 'pZ':
case 'Pz': 
if (!isNsfw) return reply(ptbr.nsfw())
     client.sendMessage(from, pz(pushname, prefix, groupName ) , text, {quoted: mek, quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg","caption": " ꪶ ࣤʟɪsᴛᴀ ᴅᴏ ᴘᴀʀᴀɪsᴏꫂ 🔞\n😏PUTARIA E ZUEIRA✅", 'jpegThumbnail': fs.readFileSync('./database/menus/pz.webp')}}}})					
addFilter(from)
break

    case 'hadrian':
reply( 'ᴏ ᴍᴏᴅᴇʀᴀᴅᴏʀ ᴍᴀɪs ʙʀᴀʙᴏ ᴅᴏ 「 ꪶ ࣤ𝑫͢𝚲𝑹𝑲᭢᜴⁩ꪶ͢𝑩𝑶𝑻ꫂ 」🌚🏆')
break

case 'tttx1':
case 'x1':
case 'ttt x1':
had = `🌀1️⃣2️⃣3️⃣
🅰️🔲🔲🔲
🅱️🔲🔲🔲
©️🔲🔲🔲`
client.sendMessage(from, had, text, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": `ϟ➪ᴘᴇᴅʀᴀ🪨 ᴘᴀᴘᴇʟ🧻 ᴛᴇsᴏᴜʀᴀ✂️\n Dᴜᴇʟᴏ ᴅᴇ ᴍᴇᴍʙʀᴏs`, "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486"}}}}) 
reply(`⭕ | ❌`)
reply(`O ᴊᴏɢᴀᴅᴏʀ sᴜʙsᴛɪᴛᴜɪʀᴀ ᴏ 🔲 ᴘᴇʟᴏs sɪᴍʙᴏʟᴏs ⭕ ᴏᴜ ❌.\nSᴇ ᴛᴇɴᴛᴀʀ ʀᴏᴜʙᴀʀ ɪʀᴀ ᴘᴇʀᴅᴇʀ xᴘ.`)
break

case 'hadrianbr':
had = `ᴏ ᴀᴅᴍ ᴍᴀɪs ʙʀᴀʙᴏ ᴅᴏ ɢʀᴜᴘᴏ\n${groupName}`
client.sendMessage(from, had, text, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "ʜᴀᴅʀɪᴀɴ ɢᴇɴᴛᴇ ʙᴏᴀ🌚🏆", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('./database/menus/menu.webp')}}}}) 
break

case 'pain':
had = `ᴏ ᴅᴇsɪɢɴᴇʀ ᴍᴀɪs ғᴏᴅᴀ ᴅᴏ ɢʀᴜᴘᴏ\n${groupName}`
client.sendMessage(from, had, text, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "ꪶ͢𝐓.𝐃.𝐌ꪶ͢〽️ꫂㅤ𝑷𝑨𝑰𝑵⁷⁷⁷ᵒᶠᶜ\nᴏ ᴍᴀɪs ғᴏᴅᴀ ᴅᴀ ǫᴜᴇʙʀᴀᴅᴀ🔥", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('./src/pain.webp')}}}}) 
break

case 'sasuke':
had = `ᴏ ᴍᴇᴜ ᴍᴀɴᴏ ɢᴇɴᴛᴇ ʙᴏᴀ ᴅᴏ ɢʀᴜᴘᴏ\n${groupName}`
client.sendMessage(from, had, text, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "ꪶ͢⚔️⃝⇽ɢ̐r̐e̐ɢ̐o̐⇾⃝⚔️\nᴏ ᴍᴀɪs ғᴏᴅᴀ ᴅᴀ ǫᴜᴇʙʀᴀᴅᴀ🔥", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('./database/menus/menu.webp')}}}}) 
break

case 'pain2':
had = `ꪶ͢𝐓.𝐃.𝐌ꪶ͢〽️ꫂㅤ𝑷𝑨𝑰𝑵⁷⁷⁷ᵒᶠᶜ Ɲσ Cσмαи∂σ`
client.sendMessage(from, had, text, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "ꪶ͢𝐓.𝐃.𝐌ꪶ͢〽️ꫂㅤ𝑷𝑨𝑰𝑵⁷⁷⁷ᵒᶠᶜ\nᴏ ᴍᴀɪs ғᴏᴅᴀ ᴅs ǫᴜᴇʙʀᴀᴅᴀ🔥", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('./src/pain.webp')}}}}) 
break         

case 'add':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (args.length < 1) return reply('Yang mau di add jin ya?')
					if (args[0].startsWith('08')) return reply('Gunakan kode negara mas')
					try {
						num = `${args[0].replace(/ /g, '')}@s.whatsapp.net`
						client.groupAdd(from, [num])
					} catch (e) {
						console.log('Error :', e)
						reply('Gagal menambahkan target, mungkin karena di private')
					}
					break



case 'a':
bu2 = fs.readFileSync('./Acode.apk')
client.sendMessage(from, bu2, MessageType.document, {Mimetype: "application/apk" , quoted: mek})
break

case 'apk':

                if (args.length < 1) return
                    reply(ptbr.wait())
                    anu = fs.readFileSync('./Acode.apk')
                    reply(anu.trim())
                    addFilter(from)
                    break

case 'mediafire':
teks = args.join(" ")
if (args.length < 1) return reply('```INSIRA SEU LINK DA MEDIAFIRE```')
post = await fetchJson(`https://api-exteam.herokuapp.com/api/mediafire/down?link=${teks}&apikey=${apikey}`)
reply('```CONCLUINDO DOWNLOAD, AGUARDE...!```')
teks = `ARQUIVO: ${post.nome_arquivo}\nTIPO: ${post.tipo}`
send = await getBuffer(post.link) 
client.sendMessage(from, teks, text, {quoted: mek})
client.sendMessage(from, send, document, { quoted: mek, mimetype: `Mimetype.${post.tipo}`, filename: `${post.nome_arquivo}`})
break

case 'antifake':
					try {
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (args.length < 1) return reply('┏🔥✘⏤͟͟͞͞«βσт sʏsᴛᴇᴍᶤ ✘🔥┓\n  ╔═══❖•ೋ°°ೋ•❖═══╗\n  │ ᴀᴛɪᴠᴀʀ sɪsᴛᴇᴍᴀ ᴅᴇ ʟᴇᴠᴇʟ\n  │[❗] +ᴀɴᴛɪғᴀᴋᴇ 1 - ᴀᴛɪᴠᴀʀ ✅\n  │[❗] +ᴀɴᴛɪғᴀᴋᴇ 0 - ᴅᴇsᴀᴛɪᴠᴀʀ 🚫\n  ╚═══❖•ೋ°°ೋ•❖═══╝')
					if (Number(args[0]) === 1) {
						if (isAntiFake) return reply('[❗] *Já ativo*')
						antifake.push(from)
						fs.writeFileSync('./antifake.json', JSON.stringify(antifake))
						reply('┏🔥✘⏤͟͟͞͞«βσт sʏsᴛᴇᴍᶤ ✘🔥┓\n  ╔═══❖•ೋ°°ೋ•❖═══╗\n  │[❗]  ᴀᴛɪᴠᴏ ᴄᴏᴍ sᴜᴄᴇssᴏ.✅\n  ╚═══❖•ೋ°°ೋ•❖═══╝')
					} else if (Number(args[0]) === 0) {
						antifake.splice(from, 1)
						fs.writeFileSync('./antifake.json', JSON.stringify(antifake))
						reply('┏🔥✘⏤͟͟͞͞«βσт sʏsᴛᴇᴍᶤ ✘🔥┓\n  ╔═══❖•ೋ°°ೋ•❖═══╗\n  │[❗] Ɖɛƨαтιѵα∂σ🚫(☉︎｡☉︎)\n  ╚═══❖•ೋ°°ೋ•❖═══╝')
					} else {
						reply('[1-0]')
					}
					} catch {
						reply('[❗] 𝗧𝗘𝗡𝗧𝗘 𝗡𝗢𝗩𝗔𝗠𝗘𝗡𝗧𝗘! ')
					}
                break

//Comandos PREMIUM
case 'bateria':
teks = `┏ ┓✘「 ꪶ ࣤΣŁƖƬΣ᭢᜴⁩ꪶ͢🅥🅘🅟ꫂ 」✘┓\n│ ┃─────────────────\n│ ┃ϟ➪ᴀ ʙᴀᴛᴇʀɪᴀ ᴅᴏ ʙᴏᴛ ᴇsᴛᴀ ᴇᴍ \n│ ┃ϟ➪ꪶ͢${batterylevel}%ꫂ 🔋\n┗ ┛━━━「 ꪶ ࣤꝒ℟Ʃ𐌼ί𝚄Ɱ᭢᜴⁩━━━━┈`
reply(teks)
                 break

case 'clearchat':
     if (!isOwner) return reply(ownerB(ownerName))
     anu = await client.chats.all()
     list_chat = await client.chats.all()
     for (let chat of list_chat) {
         client.modifyChat(chat.jid, "delete", {includeStarred: false})
     }
     reply("Chat limpo")			
				break
			
			case 'tela':
			const start = async (kill = new Client()) => {
	const sesPic = await kill.getSnapshot()
            if (!isOwner) return await kill.reply(from, mess.only.group(), id)
            await kill.sendfile(from, sespic, 'session.png', 'neh...', id) }
  break
			
			case 'lolla':
			
			had = `ᴀ ʟᴏʟᴀ é ʟᴇɢᴀʟ, ᴀᴄᴇɪᴛᴇ ᴍᴀɴé 💃`
			client.sendMessage(from, had, text, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "ᴇʟᴀ é ᴍᴏ ʟᴇɢᴀʟ ᴘᴏᴡ 🤷‍♂️", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('./database/menus/lola.webp')}}}}) 
			break
			
case 'mining': 
     if (!isGroup) return reply(ptbr.group())
     if (isOwner) {
         const one = Math.ceil(Math.random() * 10000)
         addLevelingXp(sender, one)
         await reply(`Você ganhou: ${one}Xp 🛐`)
     } else if (isPremium) {
         const onee = Math.ceil(Math.random() * 10000)
         addLevelingXp(sender, onee)
         await reply(`Você ganhou: ${onee}Xp 🛐`)
     } else if (groupAdmins) {
         const onne = Math.ceil(Math.random() * 10000)
         addLevelingXp(sender, onne)
         await reply(`Você ganhou: ${onne}Xp 🛐`)
     } else {
         pdd = "120000"
         const limiter = getLimit(sender, dailiy)
         if (limiter !== undefined && pdd - (Date.now() - limiter) > 0) {
             reply('Aguarde o tempo de espera de 2 minutos para minerar novamente...')
         }
         const mining = Math.ceil(Math.random() * 1000)
         addLevelingXp(sender, mining)
         await reply(`Você ganhou: ${mining}Xp`)
         addLimit(sender, dailiy)
     }
     break

//COMANDOS ZUERA
case 'abraço':
case 'abraçar':
if (!isGroup) return reply(ptbr.group())
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return 
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
pro = '.\n'
for (let _ of mentioned) {
pro += `@${_.split('@')[0]}\n`
}
yhb = `Que fofo... @${sender.split("@")[0]} deu um abraço apertado em @${mentioned[0].split('@')[0]}`
mentions(yhb, yhb, true)
break

case 'burro':
case 'Burro':
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
for (let _ of mentioned) {
idde = ["30℅ ʙᴜʀʀᴏ\n Um Burro doente","76℅ ʙᴜʀʀᴏ \n Um retardado mental","90℅ ʙᴜʀʀᴏ \n vc é tão burro que come bosta pensando que é chocolate","72℅ ʙᴜʀʀᴏ \n voce come carne estragada da friboi seu fdp","83℅ ʙᴜʀʀᴏ \n Vc caga no chão","73℅ ʙᴜʀʀᴏ \n você nasceu com problema no ventre","83℅ ʙᴜʀʀᴏ \n reprovou na matéria de ED.Fisica","74℅ ʙᴜʀʀᴏ \n come bosta de cavalo no almoço","92℅ ʙᴜʀʀᴏ \n da o cu na escola ao invés de estudar","100℅ ʙᴜʀʀᴏ \n  mano vsf vc é muito burro ","94℅ ʙᴜʀʀᴏ","48℅ ʙᴜʀʀᴏ \n mija no chão do banheiro","37℅ ʙᴜʀʀᴏ \n mano vai estudar seu fdp","53℅ ʙᴜʀʀᴏ \n 53? vey vc é burro pra krl","63℅ ʙᴜʀʀᴏ \n mija no copo e toma mijo"]
}
idd2 = idde[Math.floor(Math.random() * (idde.length))]
morte = `O @${mentioned[0].split('@')[0]} é  ${idd2}.`
reply(morte)
break

case 'comer':
case 'foder':
if (!isGroup) return reply(mess.only.group)
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return 
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
pro = '.\n'
for (let _ of mentioned) {
pro += `@${_.split('@')[0]}\n`
}
yhb = `*@${mentioned[0].split('@')[0]}* *ғᴏɪ ᴄᴏᴍɪᴅᴏ ᴀ ғᴏʀçᴀ ᴘᴏʀ:* *@${sender.split("@")[0]}*`
mentions(yhb, yhb, true)
break

case 'pagar':
case 'boquete':
if (!isGroup) return reply(mess.only.group)
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return 
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
pro = '.\n'
for (let _ of mentioned) {
pro += `@${_.split('@')[0]}\n`
}
yhb = `*@${mentioned[0].split('@')[0]}* *ғᴏɪ ᴏʙʀɪɢᴀᴅᴏ ᴀ ᴘᴀɢᴀʀ ᴜᴍ ʙᴏǫᴜᴇᴛᴇ ᴘᴀʀᴀ ᴏ:* *@${sender.split("@")[0]}*`
mentions(yhb, yhb, true)
break

case 'matar':
case 'assassinar':
if (!isGroup) return reply(mess.only.group)
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return 
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
pro = '.\n'
for (let _ of mentioned) {
pro += `@${_.split('@')[0]}\n`
}
yhb = `*@${mentioned[0].split('@')[0]}* *ғᴏɪ ᴇsᴘᴀɴᴄᴀᴅᴏ ᴀᴛᴇ ᴀ ᴍᴏʀᴛᴇ ᴘᴏʀ: *@${sender.split("@")[0]}*`
mentions(yhb, yhb, true)
break

case 'adotar':
case 'ADOTAR':
if (!isGroup) return reply(mess.only.group)
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return 
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
pro = '.\n'
for (let _ of mentioned) {
pro += `@${_.split('@')[0]}\n`
}
yhb = `*@${mentioned[0].split('@')[0]}* *ғᴏɪ ᴀᴅᴏᴛᴀᴅᴏ ᴇ ᴀɢᴏʀᴀ ᴇ ғɪʟʜᴏ ᴅᴏ: *@${sender.split("@")[0]}*`
mentions(yhb, yhb, true)
break

case 'casar':
case 'Casar':
if (!isGroup) return reply(mess.only.group)
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return 
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
pro = '.\n'
for (let _ of mentioned) {
pro += `@${_.split('@')[0]}\n`
}
yhb = `*@${mentioned[0].split('@')[0]}* *ғᴏɪ ғᴏʀçᴀᴅᴀ(ᴏ) ᴀ sᴇ ᴄᴀsᴀʀ ᴄᴏᴍ: *@${sender.split("@")[0]}*`
mentions(yhb, yhb, true)
break

case 'escravizar':
case 'escravo':
if (!isGroup) return reply(mess.only.group)
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return 
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
pro = '.\n'
for (let _ of mentioned) {
pro += `@${_.split('@')[0]}\n`
}
yhb = `*@${mentioned[0].split('@')[0]}* *ғᴏɪ ᴇsᴄʀᴀᴠɪᴢᴀᴅᴀ(ᴏ) ᴘᴇʟᴏ: *@${sender.split("@")[0]}*`
mentions(yhb, yhb, true)
break

//Ranks By Jv
case 'ranklevel':
		case 'rl':
		case 'rank':
				_level.sort((a, b) => (a.xp < b.xp) ? 1 : -1)	
				let leaderboardlvl = ' 🏆《 Rᴀɴᴋ Nɪᴠᴇɪs 》🏆\n\n'				
				let nom = 0
				try {
				for (let i = 0; i < 10; i++) {
					nom++
					leaderboardlvl += `
┏ ✘🌖 *ꪶ ࣤ𝑫͢𝚲𝑹𝑲᭢᜴⁩ꪶ͢𝑩𝑶𝑻ꫂ* 🌘✘┓
┃•────•─────────•───•
┣❲❖❳ [${nom}] ϟ➠ wa.me/+${_level[i].id.replace('@s.whatsapp.net', '')}
┣❲❖❳「  xᴘ 」: ϟ${_level[i].xp}
┣❲❖❳「 Lᴇᴠᴇʟ 」 :ϟ➠ ${_level[i].level}
┗ ──────「★」──────┚\n`
			    
			    }
 leaderboardlvl += `×•-•-•⟮ 🏆Rᴀɴᴋɪɴɢ Lᴇᴠᴇʟ🏆⟯•-•-•×`               	
			   client.sendMessage(from, leaderboardlvl, text, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "✨🏆𝚁𝚊𝚔𝚒𝚗𝚐 𝙻𝚎𝚟𝚎𝚕🏆✨ ", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('./database/menus/menu.webp')}}}}) 
				} catch (err) {
				console.error(err)
				await reply(`Maximo 10 Pessoas No grupo!`)
				}
				break

//FIM COMANDOS PREMIUM



//^_Ranks By JV_^

case 'ranklindos':
try{
if(!isGroup) return reply(mess.only.group)
d = []
teks = '[❗] *Rank dos Lindos❤️*\n'
for(i = 0; i < 5; i++) {
r = Math.floor(Math.random() * groupMetadata.participants.length + 0)
teks += `⏤͟͟͞͞ᶤ⃢ ❤️ꦿ⃟ۜ░☞ @${groupMembers[r].jid.split('@')[0]}\n`
d.push(groupMembers[r].jid)
}
mentions(teks, d, true)
} catch (e) {
console.log(e)
reply('[❗] *Erro, tente novamente* ')
}
break

case 'rankfeios':
try{
if(!isGroup) return reply(mess.only.group)
d = []
teks = '[❗] *Rank dos Feios🤮*\n'
for(i = 0; i < 5; i++) {
r = Math.floor(Math.random() * groupMetadata.participants.length + 0)
teks += `⏤͟͟͞͞ᶤ⃢ 🤢ꦿ⃟ۜ░☞ @${groupMembers[r].jid.split('@')[0]}\n`
d.push(groupMembers[r].jid)
}
mentions(teks, d, true)
} catch (e) {
console.log(e)
reply('[❗] *Erro, tente novamente* ')
}
break
//^_RANKS BY JV_^

case 'mo':
client.updatePresence(from, Presence.composing)
//reply('comando desativado para evitar flood')
if (!isGroup) return reply(ptbr.group())
if (!isOwner) return reply(ptbr.ownerB())
if (!isPremium) return reply('┏ ┓✘「 ꪶ ࣤΣŁƖƬΣ᭢᜴⁩ꪶ͢🅥🅘🅟ꫂ 」✘┓\n│ ┃─────────────────\n│ ┃ϟ➪ᴠᴏᴄє ɴᴀᴏ é ᴠɪᴘ\n┗ ┛━━━「 ꪶ ࣤꝒ℟Ʃ𐌼ί𝚄Ɱ᭢᜴⁩━━━━┈')
members_id = []
todos = (args.length > 1) ? body.slice(8).trim(): ''
todos += `Total: ${groupMembers.length} membros\n`
for (let mem of groupMembers) {
todos += `║➸@${mem.jid.split('@')[0]}\n`
members_id.push(mem.jid)
}
mentions('╭╾╼◐⚋✘ 🔥⏤͟͟͞͞•𝗠𝗲𝗻𝗰𝗶𝗼𝗻𝗮𝗿 𝗧𝗼𝗱𝗼𝘀• ✘⚋◑╾╼╮\n║➸'+todos+'╰╾╼◐⚋✘🔥⏤͟͟͞͞•ᬊ͜͡𝗢𝗪𝗡𝗘𝗥•🔥✘⚋◑╾╼╯', members_id, true)
break

case 'rola':
 case 'pau':
     random = `${Math.floor(Math.random() * 35)}`
     const tamanho = random
         addFilter(from)
     if (tamanho < 13) {
         pp = 'ғɪᴍᴏsᴇɴᴛᴏ ғᴅᴘ'
     } else if (tamanho == 13) {
         pp = 'ᴍɪxᴜʀᴜᴄᴀ ᴅᴇ ʀᴏʟᴀ'
     } else if (tamanho == 14) {
         pp = 'ᴘᴀᴜ ᴘᴇǫᴜᴇɴᴏ ᴠsғ'
     } else if (tamanho == 15) {
         pp = 'ᴀᴛᴇ ǫᴜᴇ ᴛᴀ ᴇɴᴛʀᴀɴᴅᴏ ɴᴀ ᴍᴇᴅɪᴀ... ɴᴇɪᴠᴀ'
     } else if (tamanho == 16) {
         pp = 'ᴀᴛᴇ ǫᴜᴇ ᴛᴀ ɴᴀ ᴍᴇᴅɪᴀ'
     } else if (tamanho == 17) {
         pp = 'ᴄᴀʟᴍᴀ ᴘᴏᴡ, ǫᴜᴇʀ ᴘᴏçᴏ ᴠᴀɪ ᴄᴏᴍ ᴀ sᴀᴍᴀʀᴀ😳'
     } else if (tamanho == 18) {
         pp = 'ᴄᴀʟᴍᴀ ᴘᴏᴡ, ǫᴜᴇʀ ᴘᴏçᴏ ᴠᴀɪ ᴄᴏᴍ ᴀ sᴀᴍᴀʀᴀ😳'
     } else if (tamanho == 19) {
         pp = 'ᴄᴀʟᴍᴀ ᴘᴏᴡ, ǫᴜᴇʀ ᴘᴏçᴏ ᴠᴀɪ ᴄᴏᴍ ᴀ sᴀᴍᴀʀᴀ😳'
     } else if (tamanho == 20) {
         pp = 'ᴛʀɪᴘé ғᴅᴘ'
     } else if (tamanho == 21) {
         pp = 'ᴛʀɪᴘé ғᴅᴘ'
     } else if (tamanho == 22) {
         pp = 'ᴘᴇʟᴏ ᴠɪsᴛᴏ ᴛᴜ ǫᴜᴇʀ ᴍᴇᴛᴇʀ ɴᴏ ᴜᴛᴇʀᴏ ᴅᴏ ᴍᴜɴᴅᴏ ɴᴇ ғᴅᴘ'
     } else if (tamanho == 23) {
         pp = 'ᴘᴇʟᴏ ᴠɪsᴛᴏ ᴛᴜ ǫᴜᴇʀ ᴍᴇᴛᴇʀ ɴᴏ ᴜᴛᴇʀᴏ ᴅᴏ ᴍᴜɴᴅᴏ ɴᴇ ғᴅᴘ'
     } else if (tamanho == 24) {
         pp = 'sᴇ ᴠɪʀᴀʀ ᴏ ᴘᴀᴜ ᴘʀᴀ ᴄɪᴍᴀ, ʙᴀᴛᴇ ᴇᴍ ᴜᴍ sᴀᴛéʟɪᴛᴇ'
     } else if (tamanho > 25) {
         pp = 'sᴇ ᴠɪʀᴀʀ ᴏ ᴘᴀᴜ ᴘʀᴀ ᴄɪᴍᴀ, ʙᴀᴛᴇ ᴇᴍ ᴜᴍ sᴀᴛéʟɪᴛᴇ'
     }
     hasil = `ᴠᴏᴄᴇ ᴛᴇᴍ ${random}ᴄᴍ ᴅᴇ ʀᴏʟᴀ\n\n${pp}`
     reply(hasil)
     break

			//_INFORMAÇÕES DO USUÁRIO

case 'registrar':
case 'registrar':
case 'register':
case 'registra':
case 'registrar':
addFilter(from)
if (isUser) return  reply(`┏ ✘「ꪶ͢ʀᴇɢɪsᴛʀᴏꫂ᭢᜴⁩」✘┓\n┣───────────────\n┣❲❖❳ ᴠᴏᴄᴇ ᴊᴀ ᴘᴏssᴜɪ ʀᴇɢɪsᴛʀᴏ\n┣❲❖❳ sᴇᴊᴀ ғᴇʟɪᴢ ${pushname}\n┗━━━━━━━━━━━━━━┈`)
if (!q.includes('/')) return reply(`
┏ ✘🌖 *ꪶ ࣤ𝑫͢𝚲𝑹𝑲᭢᜴⁩ꪶ͢𝑩𝑶𝑻ꫂ* 🌘✘┓
┃•────•─────────•───•
┣━✘🌖 *ʀᴇɢɪsᴛʀᴇ-sᴇ* 🌘✘
┃•────•─────────•───•
┣ꪶ͢${pushname}ꫂ Vᴏᴄᴇ ᴘʀᴇᴄɪsᴀ sᴇ ʀᴇɢɪsᴛʀᴀʀ.
┣❲👤❳${prefix}registrar sᴇᴜɴᴏᴍᴇ/idade
┣❲👤❳ꪶ͢Exᴇᴍᴘʟᴏ: ${prefix}registrar ꪶ͢Ɖa⃟яƘ/18
┗━━━━━━━━━━━━━━┈`)
// if (args.length < 1) return reply(`Como se registrar:\nComando: ${prefix}registrar nome|idade\nExemplo: ${prefix}registrar Jv|18`)
const namaUser = q.substring(0, q.indexOf('/') - 0)
const umurUser = q.substring(q.lastIndexOf('/') + 1)
const serialUser = createSerial(20)
if(isNaN(umurUser)) return reply(`Digite da forma correta:\nComando: ${prefix}registrar nome|idade\nExemplo: ${prefix}registrar Jv|18`)
if (namaUser.length >= 60) return reply(`Seu nome é muito longo`)
if (umurUser > 40) return reply(`Idade máxima é 40 anos`)
if (umurUser < 12) return reply(`Idade mínima é 12 anos`)
veri = sender
try {
ppimg = await client.getProfilePicture(`${sender.split('@')[0]}@s.whatsapp.net`)
} catch {
ppimg = ''
}
captionnya = 
` 
┏ ✘「ꪶ͢ʀᴇɢɪsᴛʀᴏꫂ᭢᜴⁩」✘┓
┣───────────────
┣❲❖❳ ᴅɪᴀ: ${date}
┣❲❖❳ ʜᴏʀᴀ: ${hr}
┣❲❖❳ ɴɪᴄᴋ: ${pushname}
┣❲❖❳ ᴜsᴜᴀʀɪᴏ: ${namaUser}
┣❲❖❳ ɪᴅᴀᴅᴇ: ${umurUser}
┣❲❖❳ ɴᴜᴍᴇʀᴏ: ${sender.split("@")[0]}
┗━━━━━━━━━━━━━━┈
✘➫ ᴘᴀʀᴀʙᴇɴs, ᴠᴏᴄᴇ ᴇsᴛᴀ ʀᴇɢɪsᴛʀᴀᴅᴏ!✅\nᴇsᴄʀᴇᴠᴀ +menu ᴘᴀʀᴀ ᴍᴇ ᴜsᴀʀ😏 `
daftarimg = await getBuffer(ppimg)
addRegisteredUser(sender, namaUser, umurUser, time, serialUser)
client.sendMessage(from, daftarimg, image, {quoted: mek, caption: captionnya, contextInfo: {mentionedJid: [sender]}})                    
break

case 'perfil':
case 'eu':
addFilter(from)
const usLevel = getLevelingLevel(sender)
const usXp = getLevelingXp(sender)
const usTime = getRegisterTime(sender) 
const serh = getRegisterSerial(sender)
const idad = getRegisterAge(sender)
const regin = getRegisterName(sender)
const requirXp = 500 * (Math.pow(2, usLevel) - 1)
veri = sender
try {
                        ppimg = await client.getProfilePicture(`${sender.split('@')[0]}@c.us`)
                    } catch {
                        ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
                    }
captionnya = 
` 
┏ ✘🌖 *ꪶ ࣤ𝑫͢𝚲𝑹𝑲᭢᜴⁩ꪶ͢𝑩𝑶𝑻ꫂ* 🌘✘┓
┃•────•─────────•───•
┣❲❗❳ ꪶ͢ɴᴍʀ: @${sender.split("@")[0]}ꫂ
┣❲❗❳ ꪶ͢ɪᴅᴀᴅᴇ: ${idad}ꫂ
┣❲❗❳ ꪶ͢Nᴏᴍᴇ: ${regin}ꫂ
┣❲❗❳ ꪶ͢ᴛᴇᴍᴘᴏ: ${usTime}ꫂ
┣❲❗❳ ꪶ͢ɴɪᴠᴇʟ: ${usLevel}ꫂ
┣❲❗❳ ꪶ͢Xᴘꫂ: ${usXp}ꫂ
┣❲❗❳ ꪶ͢Pᴀᴛᴇɴᴛᴇ: ${patt}ꫂ
┗━━━━━━━━━━━━━━┈`
if (isUser) return reply(captionnya)
if (!q.includes('/')) return reply(`
┏ ✘「ꪶ͢ʀᴇɢɪsᴛʀᴏꫂ᭢᜴⁩」✘┓
┣───────────────
┣❲‼️❳ ᴏᴘᴀᴀ! ᴠᴏᴄᴇ ɴᴀᴏ sᴇ ʀᴇɢɪsᴛʀᴏᴜ.
┣❲‼️❳ ʀᴇɢɪsᴛʀᴇ-sᴇ: ${pushname}
┣❲❖❳ ʀᴇɢɪsᴛʀᴇ ᴅᴇ ғᴏʀᴍᴀ ᴄᴏʀʀᴇᴛᴀ.
┣❲❖❳ +ʀᴇɢɪsᴛʀᴀʀ ɴᴏᴍᴇ/ɪᴅᴀᴅᴇ
┣❲❖❳ ᴜsᴇ ғᴏɴᴛᴇ ɴᴏʀᴍᴀʟ
┗━━━━━━━━━━━━━━┈`)
daftarimg = await getBuffer(ppimg)
client.sendMessage(from, captionnya, text, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "✨🏆𝚁𝚊𝚔𝚒𝚗𝚐 𝙻𝚎𝚟𝚎𝚕🏆✨ ", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486"}}}}) 
				client.sendMessage(from, daftarimg, image, {quoted: mek, caption: captionnya, contextInfo: {mentionedJid: [sender]}}) 
break

//FIM COMANDOS USUÁRIO

//COMANDOS IMAGENS
case 'placayt':
if (args.length < 1) return reply(`❮❗❯ *Digite algum texto para isso, ꪶ ࣤ𝑫͢𝚲𝑹𝑲᭢᜴⁩ꪶ͢𝑩𝑶𝑻ꫂ*`)
pc = body.slice(10)
hehe = await getBuffer(`https://api.zeks.xyz/api/gplaybutton?text=${pc}&apikey=rMbq8991lMELibMxhsc5IeMCubs`)
client.sendMessage(from, hehe, image, {quoted: mek, capition: `❮✔❯ *Prontinho mano*`
});
break
case 'texto3d':
if (args.length < 1) return reply(`❮❗❯ *Digite algum texto para isso, ꪶ ࣤ𝑫͢𝚲𝑹𝑲᭢᜴⁩ꪶ͢𝑩𝑶𝑻ꫂ*`)
pc = body.slice(8)
hehe = await getBuffer(`https://api.zeks.xyz/api/text3dbox?text=${pc}&apikey=rMbq8991lMELibMxhsc5IeMCubs`)
client.sendMessage(from, hehe, image, {quoted: mek, capition: `❮✔❯ *Prontinho mano*`
});
break
case 'folhas':
if (args.length < 1) return reply(`❮❗❯ *Digite algum texto para isso, ꪶ ࣤ𝑫͢𝚲𝑹𝑲᭢᜴⁩ꪶ͢𝑩𝑶𝑻ꫂ*`)
pc = body.slice(7)
hehe = await getBuffer(`https://api.zeks.xyz/api/leavest?text=${pc}&apikey=rMbq8991lMELibMxhsc5IeMCubs`)
client.sendMessage(from, hehe, image, {quoted: mek, capition: `❮✔❯ *Prontinho mano*`
});
break
case 'freefire':
if (args.length < 1) return reply(`❮❗❯ *Digite algum texto para isso, ꪶ ࣤ𝑫͢𝚲𝑹𝑲᭢᜴⁩ꪶ͢𝑩𝑶𝑻ꫂ*`)
pc = body.slice(9)
hehe = await getBuffer(`https://api.zeks.xyz/api/epep?text=${pc}&apikey=rMbq8991lMELibMxhsc5IeMCubs`)
client.sendMessage(from, hehe, image, {quoted: mek, capition: `❮✔❯ *Prontinho mano*`
});
break
case 'break':
if (args.length < 1) return reply(`❮❗❯ *Digite algum texto para isso, ꪶ ࣤ𝑫͢𝚲𝑹𝑲᭢᜴⁩ꪶ͢𝑩𝑶𝑻ꫂ*`)
pc = body.slice(6)
hehe = await getBuffer(`https://api.zeks.xyz/api/breakwall?apikey=rMbq8991lMELibMxhsc5IeMCubs&text=${pc}`)
client.sendMessage(from, hehe, image, {quoted: mek, capition: `❮✔❯ *Prontinho mano*`
});
break
case 'missing'://Coloque uma api valida
if (args.length < 1) return reply(`❮❗❯ *Digite algum texto para isso, clientS|BOT|NB*`);
pc = body.slice(8)
tx1 = pc.split("/")[0];
tx2 = pc.split("/")[1];
tx3 = pc.split("/")[2]
hehe = await getBuffer(`https://api.zeks.xyz/api/missing-image?image=https://api.zeks.xyz/logo.jpg&text1=${tx1}&text2=${tx2}&text3=${tx3}&apikey=rMbq8991lMELibMxhsc5IeMCubs`)
client.sendMessage(from, hehe, image, {quoted: mek, capition: `❮✔❯ *Prontinho mano*`
});
break
case 'cemiterio':
pc = body.slice(10)
anu = await fetchJson(`https://api-gdr2.herokuapp.com/api/textmaker14?text=${pc}&theme=cemiterio`, {method: 'get'})
buffer = await getBuffer(anu.result.url)
client.sendMessage(from, buffer, image, {quoted: mek})
break
case 'chama':
pc = body.slice(6)
anu = await fetchJson(`https://api-gdr2.herokuapp.com/api/textmaker6?text=${pc}&theme=flaming`, {method: 'get'})
buffer = await getBuffer(anu.result.url)
client.sendMessage(from, buffer, image, {quoted: mek})
break
case 'wolf':
pc = body.slice(5)
anu = await fetchJson(`https://api-gdr2.herokuapp.com/api/textmaker10?text=${pc}&theme=wolf`, {method: 'get'})
buffer = await getBuffer(anu.result.url)
client.sendMessage(from, buffer, image, {quoted: mek})
break
case 'grafite': //@Kratos æ„›
if (args.length < 1) return reply(`❮❗❯ *Digite algum texto para isso, ꪶ ࣤ𝑫͢𝚲𝑹𝑲᭢᜴⁩ꪶ͢𝑩𝑶𝑻ꫂ*`)
teks = body.slice(8)
kratosdominar = await getBuffer(`https://hadi-api.herokuapp.com/api/photoxy/grafiti-text-cover?teks=${teks}`)
client.sendMessage(from, kratosdominar, image, {quoted: mek, capition: `❮✔❯ *Prontinho mano*`
})
break
case 'matrix'://Coloque uma api valida //kratos
if (args.length < 1) return reply(`❮❗❯ *Digite algum texto para isso, ꪶ ࣤ𝑫͢𝚲𝑹𝑲᭢᜴⁩ꪶ͢𝑩𝑶𝑻ꫂ*`)
pc = body.slice(7)
hehe = await getBuffer(`https://api.zeks.xyz/api/matrix?apikey=rMbq8991lMELibMxhsc5IeMCubs&text=${pc}`)
client.sendMessage(from, hehe, image, {quoted: mek, capition: `❮✔❯ *Prontinho mano*`
});
break
case 'pint'://Coloque uma api valida //kratos
if (args.length < 1) return reply(`❮❗❯ *Digite algum texto para isso, ꪶ ࣤ𝑫͢𝚲𝑹𝑲᭢᜴⁩ꪶ͢𝑩𝑶𝑻ꫂ*`)
pc = body.slice(5)
hehe = await getBuffer(`https://api.zeks.xyz/api/logobp?apikey=rMbq8991lMELibMxhsc5IeMCubs&text=${pc}`)
client.sendMessage(from, hehe, image, {quoted: mek, capition: `❮✔❯ *Prontinho mano*`
});
break
case 'glitch'://Coloque uma api valida
if (args.length < 1) return reply(`❮❗❯ *Digite algum texto para isso, clientS|BOT*`)
pc = body.slice(7)
tx1 = pc.split("/")[0];
tx2 = pc.split("/")[1];
hehe = await getBuffer(`https://api.zeks.xyz/api/gtext?text1=${tx1}&text2=${tx2}&apikey=rMbq8991lMELibMxhsc5IeMCubs`)
client.sendMessage(from, hehe, image, {quoted: mek, capition: `❮✔❯ *Prontinho mano*`
});
break
case 'phlogo'://Coloque uma api valida
if (args.length < 1) return reply(`❮❗❯ *Digite algum texto para isso, clientS|BOT*`)
pc = body.slice(7)
tx1 = pc.split("/")[0];
tx2 = pc.split("/")[1];
hehe = await getBuffer(`https://api.zeks.xyz/api/phlogo?text1=${tx1}&text2=${tx2}&apikey=rMbq8991lMELibMxhsc5IeMCubs`)
client.sendMessage(from, hehe, image, {quoted: mek, capition: `❮✔❯ *Prontinho mano*`
});
break
case 'bneon'://Coloque uma api valida
if (args.length < 1) return reply(`❮❗❯ *Digite algum texto para isso, ꪶ ࣤ𝑫͢𝚲𝑹𝑲᭢᜴⁩ꪶ͢𝑩𝑶𝑻ꫂ*`)
pc = body.slice(6)
hehe = await getBuffer(`https://api.zeks.xyz/api/bneon?apikey=rMbq8991lMELibMxhsc5IeMCubs&text=${pc}`)
client.sendMessage(from, hehe, image, {quoted: mek, capition: `❮✔❯ *Prontinho mano*`
});
break
case 'marvel'://Coloque uma api valida
if (args.length < 1) return reply(`❮❗❯ *Digite algum texto para isso, clientS|BOT*`)
pk = body.slice(7)
tn1 = pk.split("/")[0];
tn2 = pk.split("/")[1];
hehe = await getBuffer(`https://api.zeks.xyz/api/marvellogo?&text1=${tn1}&text2=${tn2}&apikey=rMbq8991lMELibMxhsc5IeMCubs`)
client.sendMessage(from, hehe, image, {quoted: mek, capition: `❮✔❯ *Prontinho mano*`
});
break
case 'luzdeneon':
if (args.length < 1) return reply(`❮❗❯ *Digite algum texto para isso, ꪶ ࣤ𝑫͢𝚲𝑹𝑲᭢᜴⁩ꪶ͢𝑩𝑶𝑻ꫂ*`)
pc = body.slice(10)
hehe = await getBuffer(`https://docs-jojo.herokuapp.com/api/neon_light?text=${pc}`)
client.sendMessage(from, hehe, image, {quoted: mek, capition: `❮✔❯ *Prontinho mano*`
});
break
case 'wolflogo'://Coloque uma api valida
if (args.length < 1) return reply(`❮❗❯ *Digite algum texto para isso, clientS|BOT*`)
pc = body.slice(9)
tx1 = pc.split("/")[0];
tx2 = pc.split("/")[1];
hehe = await getBuffer(`https://api.zeks.xyz/api/wolflogo?apikey=rMbq8991lMELibMxhsc5IeMCubs&text1=${tx1}&text2=${tx2}`)
client.sendMessage(from, hehe, image, {quoted: mek, capition: `❮✔❯ *Prontinho mano*`
});
break

case 'gtav':
     var imgbb = require('imgbb-uploader')
     if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
         ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
         reply(ptbr.wait())
         owgi = await client.downloadAndSaveMediaMessage(ted)
         tels = body.slice(7)
         anu = await imgbb("9d7a1bd760e2e3360dbfd40cec4d7ad7", owgi)
         hehe = await getBuffer(`https://videfikri.com/api/textmaker/gtavposter/?urlgbr=${anu.display_url}`)
         client.sendMessage(from, hehe, image, {
             quoted: mek
         })
     } else {
         reply('Você precisa marcar ou enviar uma imagem')
     }
     break

case 'bf4':
     try {
         if (args.length < 1) return reply(`Digite da forma correta:\nComando: ${prefix}retro texto1|texto2`)
         pc = body.slice(4)
         tx1 = pc.split("/")[0];
         tx2 = pc.split("/")[1];
         reply(ptbr.waitimg())
     addFilter(from)
         haha = await getBuffer(`https://videfikri.com/api/textmaker/bf4/?text1=${tx1}&text2=${tx2}`)
         client.sendMessage(from, haha, image, {
             quoted: mek
         })
     } catch (e) {
         console.log(`Error :`, color(e, 'red'))
         reply('❌ocorreu um erro❌')
     }
     break

//FIM COMANDOS IMAGENS
			
			case 'eu':
     const eu = {
         text: `🏴‍☠️ @${sender.split("@")[0]} 🌔`,
         contextInfo: {
             mentionedJid: [sender]
         }
     }
     client.sendMessage(from, eu, text)
     addFilter(from)
     break
			
			//_JOGO DA VELHA
//INICIO DO JOGO DA VELHA ❌ ⭕ 🔲
case 'ttt':
if (!isGroup) {
reply(ptbr.group())
} else if (tttset.tttstatus == "on") {
reply(`Alguém já está jogando no momento\nPor favor aguarde um instante...`)
} else if (tttset.waitingTime == "on") {
reply(`ᴏᴘᴀ @${sender.split("@")[0]} só ᴠᴄ ǫᴜᴇʀ ᴊᴏɢᴀʀ, ᴇsᴘᴇʀᴀ ᴏ ᴛᴇᴍᴘᴏ ᴀᴄᴀʙᴀʀ ʙʀᴏ.`)
} else if (args == 0 || (args != 'easy' && args != 'Easy' && args != 'EASY' && args != 'normal' && args != 'Normal' && args != 'NORMAL' && args != 'hard' && args != 'Hard' && args != 'HARD'&& args != 'impossible'&& args != 'Impossible' && args != 'IMPOSSIBLE')) {
reply(`Defina a dificuldade\nEx.: ${prefix}ttt easy\n\nDificuldades: easy, normal, hard e impossible`)
} else if (undefined !== undefined && cdd - (Date.now() - undefined) > 0) {
reply(`ᴏᴘᴀ @${sender.split("@")[0]} só ᴠᴄ ǫᴜᴇʀ ᴊᴏɢᴀʀ, ᴇsᴘᴇʀᴀ ᴏ ᴛᴇᴍᴘᴏ ᴀᴄᴀʙᴀʀ ʙʀᴏ.`)
} else {
tttset.tttstatus = "on"
tttset.player = sender
tttset.mentionPlayer = mek
tttset.local = from
if (args == 'easy' || args == 'Easy' || args == 'EASY') {
tttset.tttdifficulty = "EASY"
} else if (args == 'normal' || args == 'Normal' || args == 'NORMAL') {
tttset.tttdifficulty = "NORMAL"
} else if (args == 'hard' || args == 'Hard' || args == 'HARD') {
tttset.tttdifficulty = "HARD"
} else if (args == 'impossible' || args == 'Impossible' || args == 'IMPOSSIBLE') {
tttset.tttdifficulty = "IMPOSSIBLE"
}
const randomStartIA = Math.floor(Math.random() * 3)
if (randomStartIA == 0) {
IA()
tttset.reActivate1 = "on"	
}
client.sendMessage(from, `O ᴊᴏɢᴏ ᴄᴏᴍᴇçᴏᴜ!\nAᴅᴠᴇʀsᴀʀɪᴏ: @${sender.split("@")[0]} \nMᴏᴅᴏ: ${tttset.tttdifficulty}`, text, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": `ᴊᴏɢᴏ ᴅᴀ ᴠᴇʟʜᴀ#️⃣👵\nᴘᴀʀᴛɪᴅᴀ: ${tttset.tttdifficulty}`, "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486"}}}}) 
client.sendMessage(from, `🌀1️⃣2️⃣3️⃣\n🅰️${esp.a1}${esp.a2}${esp.a3}\n🅱️${esp.b1}${esp.b2}${esp.b3}\n©️${esp.c1}${esp.c2}${esp.c3}`, text, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": `ᴊᴏɢᴏ ᴅᴀ ᴠᴇʟʜᴀ#️⃣👵\nᴄᴏᴍᴇçᴏᴜ!! ʙᴏᴀ sᴏʀᴛᴇ 🏴`, "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486"}}}}) 
//costum(`O jogo começou!!!\nModo: ${tttset.tttdifficulty}`, text, tescuk)
//client.sendMessage(from, `🌀1️⃣2️⃣3️⃣\n🅰️${esp.a1}${esp.a2}${esp.a3}\n🅱️${esp.b1}${esp.b2}${esp.b3}\n©️${esp.c1}${esp.c2}${esp.c3}`,text )
//client.sendMessage(from,`Caso não saiba como jogar digite: ${prefix}ttthelp`, text) 
setTimeout( () => {
tttset.waitingTime = "off"
tttset.autoEndTime = "on"
}, 240000) //4 minutos
}
break

case 'ttthelp':
client.sendMessage(from, ttthelp(prefix), text)
break

case 'tttme':
if (!isGroup) return reply(ptbr.group())
const checkTTTIdMe = getTTTId(sender)
if (checkTTTIdMe === undefined) addTTTId(sender)
client.sendMessage(from, tttme(pushname, getTTTwins(sender), getTTTdefeats(sender), getTTTties(sender), getTTTpoints(sender)), text, {quoted:mek})
break

case 'tttrank':
if (!isGroup) return reply(ptbr.group())
//if (tictactoe.length < 3) return reply(`Humm, é necessário que no mínimo 3 pessoas tenham jogado...`)
tictactoe.sort((a, b) => (a.points < b.points) ? 1 : -1)
mentioned_jid = []
let board = '【 TTT RANKS 】\n\n'
try {
for (let i = 0; i < 3; i++) {
if (i == 0) {board += `${i + 1}º 🥇 : @${tictactoe[i].jid.split('@')[0]}\n╭╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╸\n│ ➣ Vitórias: ${tictactoe[i].wins} 🎊\n│ ➣ Derrotas: ${tictactoe[i].defeats} 💥\n│ ➣ Empates: ${tictactoe[i].ties} 🌀\n│ ➣ Pontos: ${tictactoe[i].points} ✨\n╰╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╸\n\n`
} else if (i == 1) {board += `${i + 1}º ?? : @${tictactoe[i].jid.split('@')[0]}\n╭╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╸\n│ ➣ Vitórias: ${tictactoe[i].wins} 🎊\n│ ➣ Derrotas: ${tictactoe[i].defeats} 💥\n│ ➣ Empates: ${tictactoe[i].ties} 🌀\n│ ➣ Pontos: ${tictactoe[i].points} ✨\n╰╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╸\n\n`
} else if (i == 2) {board += `${i + 1}º 🥉 : @${tictactoe[i].jid.split('@')[0]}\n╭╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╸\n│ ➣ Vitórias: ${tictactoe[i].wins} 🎊\n│ ➣ Derrotas: ${tictactoe[i].defeats} 💥\n│ ➣ Empates: ${tictactoe[i].ties} 🌀\n│ ➣ Pontos: ${tictactoe[i].points} ✨\n╰╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╸\n\n`
}
mentioned_jid.push(tictactoe[i].jid)
} 
mentions(board, mentioned_jid, true)
} catch (err) {
console.log(err)
await client.sendMessage(from, `Humm, é necessário que no mínimo 3 pessoas tenham jogado...`, text, {quoted: mek})
}
break

case 'coord' :
tttset.playertest = sender
if (!isGroup) {
reply(ptbr.group())
} else if (tttset.tttstatus == "off") {
reply(`Você ainda não iniciou o jogo\nDigite ${prefix}ttt [DIFICULDADE] para iniciar`)
} else if (tttset.player != tttset.playertest) {
reply(`Alguém já está jogando no momento\nPor favor aguarde um instante...`)
} else if (tttset.tttantibug == "on") {
reply(`Aguarde a ação anterior ser concluída...`)
} else {
tttset.tttantibug = "on"
const coordX = args
if (coordX != 'a1' && coordX != 'a2' && coordX != 'a3' &&
coordX != 'b1' && coordX != 'b2' && coordX != 'b3' &&
coordX != 'c1' && coordX != 'c2' && coordX != 'c3') {
reply(`Digite o comando com uma coordenada\nExemplo: ${prefix}coord a1`)
tttset.tttantibug = "off"
} else {
switch (args[0]) {
case 'a1':
if (esp.a1 != "🔲") {
reply('O espaço já foi ocupado\nTente outra coordenada')
} else {
esp.a1 = "❌"
while (tttset.reActivate1 == "on") {
IA()
}
}
break
case 'a2':
if (esp.a2 != "🔲") {
reply('O espaço já foi ocupado\nTente outra coordenada')
} else {
esp.a2 = "❌"
while (tttset.reActivate1 == "on") {
IA()
}
}
break
case 'a3':
if (esp.a3 != "🔲") {
reply('O espaço já foi ocupado\nTente outra coordenada')
} else {
esp.a3 = "❌"
while (tttset.reActivate1 == "on") {
IA()
}
}
break
case 'b1': 
if (esp.b1 != "🔲") {
reply('O espaço já foi ocupado\nTente outra coordenada')
} else {
esp.b1 = "❌"
while (tttset.reActivate1 == "on") {
IA()
}
}
break
case 'b2':
if (esp.b2 != "🔲") {
reply('O espaço já foi ocupado\nTente outra coordenada')
} else {
esp.b2 = "❌"
while (tttset.reActivate1 == "on") {
IA()
}
}
break
case 'b3':
if (esp.b3 != "🔲") {
reply('O espaço já foi ocupado\nTente outra coordenada')
} else {
esp.b3 = "❌"
while (tttset.reActivate1 == "on") {
IA()
}
}
break
case 'c1':
if (esp.c1 != "🔲") {
reply('O espaço já foi ocupado\nTente outra coordenada')
} else {
esp.c1 = "❌"
while (tttset.reActivate1 == "on") {
IA()
}
}
break
case 'c2':
if (esp.c2 != "🔲") {
reply('O espaço já foi ocupado\nTente outra coordenada')
} else {
esp.c2 = "❌"
while (tttset.reActivate1 == "on") {
IA()
}
}
break
case 'c3':
if (esp.c3 != "🔲") {
reply('O espaço já foi ocupado\nTente outra coordenada')
} else {
esp.c3 = "❌"
while (tttset.reActivate1 == "on") {
IA()
}
}
break
}
tttset.reActivate1 = "on"
reply(`🌀1️⃣2️⃣3️⃣\n🅰️${esp.a1}${esp.a2}${esp.a3}\n🅱️${esp.b1}${esp.b2}${esp.b3}\n©️${esp.c1}${esp.c2}${esp.c3}`)
var randomTTTXP = 0
if (WinnerX()) {
if (isLevelingOn) {
switch (tttset.tttdifficulty) {
case "EASY":
randomTTTXP = Math.floor(Math.random() * 25) + 100
addLevelingXp(tttset.player, randomTTTXP)
break
case "NORMAL":
randomTTTXP = Math.floor(Math.random() * 75) + 250
addLevelingXp(tttset.player, randomTTTXP)
break
case "HARD":
randomTTTXP = Math.floor(Math.random() * 200) + 500
addLevelingXp(tttset.player, randomTTTXP)
break
case "IMPOSSIBLE":
randomTTTXP = Math.floor(Math.random() * 500) + 600
addLevelingXp(tttset.player, randomTTTXP)
break
}
client.sendMessage(from, `🎉🎉 Vɪᴛóʀɪᴀ ᴅᴏ @${sender.split("@")[0]} 🎉🎉\n\n➣  Rᴇᴄᴏᴍᴘᴇɴsᴀ: +${randomTTTXP} xᴘ 🔮`, text, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": `ϟ➪Bᴀᴛᴇʀɪᴀ: ꪶ͢${batterylevel}%ꫂ🔋\nᴊᴏɢᴏ ᴅᴀ ᴠᴇʟʜᴀ#️⃣👵`, "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486"}}}}) 
//client.sendMessage(from, `🎉🎉 Vɪᴛóʀɪᴀ ᴅᴏ ᴊᴏɢᴀᴅᴏʀ 🎉🎉\n\n➣  RECOMPENSA: +${randomTTTXP} XP 🔮`, text)
} else {
	client.sendMessage(from, `🎉🎉 Vɪᴛóʀɪᴀ ᴅᴏ @${sender.split("@")[0]} 🎉🎉\n\n➣  Rᴇᴄᴏᴍᴘᴇɴsᴀ: +${randomTTTXP} xᴘ 🔮`, text, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": `ϟ➪Bᴀᴛᴇʀɪᴀ: ꪶ͢${batterylevel}%ꫂ🔋\nᴊᴏɢᴏ ᴅᴀ ᴠᴇʟʜᴀ#️⃣👵`, "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486"}}}}) 
//client.sendMessage(from, `🎉🎉 Vɪᴛóʀɪᴀ ᴅᴏ ᴊᴏɢᴀᴅᴏʀ 🎉🎉`, text)
}
const currentTTTwins = getTTTwins(tttset.player)
const checkTTTIdWin = getTTTId(tttset.player)
if (currentTTTwins === undefined && checkTTTIdWin === undefined) addTTTId(tttset.player)
addTTTwin(tttset.player, 1)
addTTTpoints(tttset.player, randomTTTXP)
esp.a1 = "🔲"; esp.a2 = "🔲"; esp.a3 = "🔲"
esp.b1 = "🔲"; esp.b2 = "🔲"; esp.b3 = "🔲"
esp.c1 = "🔲"; esp.c2 = "🔲"; esp.c3 = "🔲"
tttset.tttstatus = "off"
tttset.waitingTime = "on"
} else if (WinnerO()) {
if (isLevelingOn) {
switch (tttset.tttdifficulty) {
case "EASY":
randomTTTXP = 0 - (Math.floor(Math.random() * 200) + 200)
addLevelingXp(tttset.player, randomTTTXP)
break
case "NORMAL":
randomTTTXP = 0 - (Math.floor(Math.random() * 75) + 300)
addLevelingXp(tttset.player, randomTTTXP)
break
case "HARD":
randomTTTXP = 0 - (Math.floor(Math.random() * 25) + 500)
addLevelingXp(tttset.player, randomTTTXP)
break
case "IMPOSSIBLE": 
randomTTTXP = 0 - (Math.floor(Math.random() * 25) + 600)
addLevelingXp(tttset.player, randomTTTXP)
break
}	
client.sendMessage(from, `🎉🎉 Vɪᴛóʀɪᴀ ᴅᴏ ꪶ ࣤ𝑫͢𝚲𝑹𝑲᭢᜴⁩ꪶ͢𝑩𝑶𝑻ꫂ 🎉🎉\n\n➣  Rᴇᴄᴏᴍᴘᴇɴsᴀ: +${randomTTTXP} xᴘ 🔮`, text, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": `ϟ➪Bᴀᴛᴇʀɪᴀ: ꪶ͢${batterylevel}%ꫂ🔋\nᴊᴏɢᴏ ᴅᴀ ᴠᴇʟʜᴀ#️⃣👵`, "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486"}}}}) 
//client.sendMessage(from, `🎉🎉 Vɪᴛᴏʀɪᴀ ᴅᴏ ꪶ ࣤ𝑫͢𝚲𝑹𝑲᭢᜴⁩ꪶ͢𝑩𝑶𝑻ꫂ🎉🎉\n\n➣  PUNIÇÃO: ${randomTTTXP} XP 🔮`, text)
} else {
	client.sendMessage(from, `🎉🎉 Vɪᴛóʀɪᴀ ᴅᴏ ꪶ ࣤ𝑫͢𝚲𝑹𝑲᭢᜴⁩ꪶ͢𝑩𝑶𝑻ꫂ 🎉🎉\n\n➣  Rᴇᴄᴏᴍᴘᴇɴsᴀ: +${randomTTTXP} xᴘ 🔮`, text, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": `ϟ➪Bᴀᴛᴇʀɪᴀ: ꪶ͢${batterylevel}%ꫂ🔋\nᴊᴏɢᴏ ᴅᴀ ᴠᴇʟʜᴀ#️⃣👵`, "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486"}}}}) 
//client.sendMessage(from, `🎉🎉 VITÓRIA DO JvBoots-BOT 🎉🎉`, text)
}
const currentTTTdefeats = getTTTdefeats(tttset.player)
const checkTTTIdDefeat = getTTTId(tttset.player)
if (currentTTTdefeats === undefined && checkTTTIdDefeat === undefined) addTTTId(tttset.player)
addTTTdefeat(tttset.player, 1)
addTTTpoints(tttset.player, randomTTTXP)
esp.a1 = "🔲"; esp.a2 = "🔲"; esp.a3 = "🔲"
esp.b1 = "🔲"; esp.b2 = "🔲"; esp.b3 = "🔲"
esp.c1 = "🔲"; esp.c2 = "🔲"; esp.c3 = "🔲"
tttset.tttstatus = "off"
tttset.waitingTime = "on"
} else if (Tie()) {
if (isLevelingOn) {
	client.sendMessage(from, `🎉🎉 ʜᴏᴜᴠᴇ ᴜᴍ ᴇᴍᴘᴀᴛᴇ 🎉🎉\n\nɴɪɴɢᴜᴇᴍ ᴠᴇɴᴄᴇᴜ, ᴏᴜ ᴘᴇʀᴅᴇᴜ.🔮`, text, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": `ϟ➪Bᴀᴛᴇʀɪᴀ: ꪶ͢${batterylevel}%ꫂ🔋\nᴊᴏɢᴏ ᴅᴀ ᴠᴇʟʜᴀ#️⃣👵`, "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486"}}}}) 
//client.sendMessage(from, `🎉🎉 EMPATE 🎉🎉\n\n➣  NÃO HÁ GANHOS NEM PERDAS`, text)
} else {
	client.sendMessage(from, `🎉🎉 ʜᴏᴜᴠᴇ ᴜᴍ ᴇᴍᴘᴀᴛᴇ 🎉🎉\n\nɴɪɴɢᴜᴇᴍ ᴠᴇɴᴄᴇᴜ, ᴏᴜ ᴘᴇʀᴅᴇᴜ.🔮`, text, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": `ϟ➪Bᴀᴛᴇʀɪᴀ: ꪶ͢${batterylevel}%ꫂ🔋\nᴊᴏɢᴏ ᴅᴀ ᴠᴇʟʜᴀ#️⃣👵`, "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486"}}}}) 
//client.sendMessage(from, `🎉🎉 EMPATE 🎉🎉`, text)
}
const currentTTTties = getTTTties(tttset.player)
const checkTTTIdTie = getTTTId(tttset.player)
if (currentTTTties === undefined && checkTTTIdTie === undefined) addTTTId(tttset.player)
addTTTtie(tttset.player, 1)
esp.a1 = "🔲"; esp.a2 = "🔲"; esp.a3 = "🔲"
esp.b1 = "🔲"; esp.b2 = "🔲"; esp.b3 = "🔲"
esp.c1 = "🔲"; esp.c2 = "🔲"; esp.c3 = "🔲"
tttset.tttstatus = "off"
tttset.waitingTime = "on"
}
tttset.tttantibug = "off"
}
}
break
//_FIM DO JOGO DA VELHA
			
			//_INFORMAÇÕES DO BOT		

		
		case 'fs':
		if (!isOwner) return reply(ptbr.ownerB())
				    ranp = getRandom('.gif')
					rano = getRandom('.webp')
				anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/screed?text=${args[0]}`,{method: 'get'})
				exec(`wget ${anu} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
						if (err) return reply(ind.stikga())
						buffer = fs.readFileSync(rano)
						client.sendMessage(from, buffer, sticker, {quoted: mek})
						fs.unlinkSync(rano)
					})
					break
		
					case 'kiss':
				    try {    
					
						res = await fetchJson(`https://tobz-api.herokuapp.com/api/kiss?apikey=BotWeA`, {method: 'get'})
						bufferv = await getBuffer(res.result)
						client.sendMessage(from, bufferv, image, {quoted: mek, caption: 'ezzzz'})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						sa = await getBuffer(`https://i.ibb.co/JcSjmNY/IMG-20210107-WA0052.jpg`)
						client.sendMessage(from, sa, image, {quoted: mek, caption: 'Erro como!!'})
						reply('❌ *ERRO* ❌')
					}
					break
					case 'lista':
					if (!isGroup) return reply(mess.only.group)
					if (!isOwner) return reply('Você quem é o proprietário?')
					if (args.length < 1) return reply('Onde está o texto, irmão?')
					reply(mess.wait)
					client.sendMessage(from, 'Adicionando mensagem à lista com sucesso' , text, { quoted: mek })
					client.sendMessage(from, addsay(prefix), text, { quoted: mek })
					break
				
				
				case 'infobot':
					me = client.user
					uptime = process.uptime()
					teks = `*Nome* : ${me.name}\n*Número* : @${me.jid.split('@')[0]}\n*Prefixo* : ${prefix}\n*Contatos bloqueados* : ${blocked.length}\n*O bot está ativo em* : ${kyun(uptime)}*`
					buffer = await getBuffer('https://imgur.com/gallery/Ojtq0CI.png')
					client.sendMessage(from, buffer, image, {caption: teks, contextInfo:{mentionedJid: [me.jid]}})
					break
				
                   case 'destrava':
                    if (!isPremium) return reply('┏ ┓✘「 ꪶ ࣤΣŁƖƬΣ᭢᜴⁩ꪶ͢🅥🅘🅟ꫂ 」✘┓\n│ ┃─────────────────\n│ ┃ϟ➪ᴠᴏᴄє ɴᴀᴏ é ᴠɪᴘ\n┗ ┛━━━「 ꪶ ࣤꝒ℟Ʃ𐌼ί𝚄Ɱ᭢᜴⁩━━━━┈')
                    client.sendMessage(from, destrava(prefix), text, { quoted: mek })
                    break
                   case 'pack':
                    if (!isPremium) return reply('┏ ┓✘「 ꪶ ࣤΣŁƖƬΣ᭢᜴⁩ꪶ͢🅥🅘🅟ꫂ 」✘┓\n│ ┃─────────────────\n│ ┃ϟ➪ᴠᴏᴄє ɴᴀᴏ é ᴠɪᴘ\n┗ ┛━━━「 ꪶ ࣤꝒ℟Ʃ𐌼ί𝚄Ɱ᭢᜴⁩━━━━┈')
                    client.sendMessage(from, pack(prefix), text, { quoted: mek })
                    break
     
case 'tapa':
 if (!isPremium) return reply('┏ ┓✘「 ꪶ ࣤΣŁƖƬΣ᭢᜴⁩ꪶ͢🅥🅘🅟ꫂ 」✘┓\n│ ┃─────────────────\n│ ┃ϟ➪ᴠᴏᴄє ɴᴀᴏ é ᴠɪᴘ\n┗ ┛━━━「 ꪶ ࣤꝒ℟Ʃ𐌼ί𝚄Ɱ᭢᜴⁩━━━━┈')
     if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('A marca-alvo que você quer chutar!')
     mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
     ppt = ["tapa"]
			ppy = ppt[Math.floor(Math.random() * ppt.length)]
ppg = Math.floor(Math.random() * 20) + 80
     pru = '.\n'
     for (let _ of mentioned) {
         pru += `@${_.split('@')[0]}\n`
     }
     susp = `Você acabou de dar um tapa na raba da😏 @${mentioned[0].split('@')[0]}`
     var suspp = {
         text: susp,
         contextInfo: {
             mentionedJid: [mentioned]
         },
     }
     const kratos = fs.readFileSync('./src/tapa.mp4')
     client.sendMessage(from, kratos, MessageType.video, {
         mimetype: 'video/gif',
         quoted: mek,
         caption: susp
     })
     break

case 'm':
client.updatePresence(from, Presence.composing) 
if (!isOwner) return reply(ptbr.ownerB())
if (!isGroup) return reply(ptbr.group())
htg = body.slice(2)
group = await client.groupMetadata(from);
member = group['participants']
jids = [];
member.map( async adm => {
jids.push(adm.id.replace('c.us', 's.whatsapp.net'));
})
options = {
text: htg,
contextInfo: {mentionedJid: jids},
quoted: mek
}
await client.sendMessage(from, options, text)
break

case 'bateria':
if (!isOwner) return reply(ptbr.ownerB(ownerName))
if (!isPremium) return reply('┏ ┓✘「 ꪶ ࣤΣŁƖƬΣ᭢᜴⁩ꪶ͢🅥🅘🅟ꫂ 」✘┓\n│ ┃─────────────────\n│ ┃ϟ➪ᴠᴏᴄє ɴᴀᴏ é ᴠɪᴘ\n┗ ┛━━━「 ꪶ ࣤꝒ℟Ʃ𐌼ί𝚄Ɱ᭢᜴⁩━━━━┈')
teks = `┏ ┓✘「 ꪶ ࣤΣŁƖƬΣ᭢᜴⁩ꪶ͢🅥🅘🅟ꫂ 」✘┓\n│ ┃─────────────────\n│ ┃ϟ➪ᴀ ʙᴀᴛᴇʀɪᴀ ᴅᴏ ʙᴏᴛ ᴇsᴛᴀ ᴇᴍ \n│ ┃ϟ➪ꪶ͢${batterylevel}%ꫂ 🔋\n┗ ┛━━━「 ꪶ ࣤꝒ℟Ʃ𐌼ί𝚄Ɱ᭢᜴⁩━━━━┈`
reply(teks)
                 break

case 'zombie':
     addFilter(from)
     var imgbb = require('imgbb-uploader')
     if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
         ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
         reply(ptbr.waitimg())
     addFilter(from)
         owgi = await client.downloadAndSaveMediaMessage(ger)
         anu = await imgbb("9d7a1bd760e2e3360dbfd40cec4d7ad7", owgi)
         imgtrg = `${anu.display_url}`
         anu1 = await fetchJson(`https://jonaz-api-v2.herokuapp.com/zombie?url=${imgtrg}`)
         if (anu1.error) return reply("Não consegui detectar nenhum rosto")
         nobg = await getBuffer(anu1.resultado)
         client.sendMessage(from, nobg, image, {
             quoted: mek
         })
     } else {
         reply('Você precisa marcar ou enviar uma imagem para isso')
     }
     break

case 'gerarnick':
     teksl = body.slice(10)
     send = await fetchJson(`http://brizas-api.herokuapp.com/gerador/fancytext?apikey=brizaloka&text=${teksl}`)
     teks = `✅ NICKS PERSONALIZADOS ✅

LISTA RANDOM:
🔰 ${send.random_1} 
🔰 ${send.random_2} 
🔰 ${send.random_3} 
🔰 ${send.random_4} 
🔰 ${send.random_5}
 
 FONTES PRÉ-DEFINIDAS:
🔰 ${send.squares}
🔰 ${send.inverted_squares}
🔰 ${send.italic}
🔰 ${send.bold}
🔰 ${send.future_alien}
🔰 ${send.asian_1}
🔰 ${send.asian_2}
🔰 ${send.squiggle}
🔰 ${send.squiggle_2}
🔰 ${send.squiggle_3}
🔰 ${send.squiggle_4}
🔰 ${send.neon}
🔰 ${send.INFECTED}`
     client.sendMessage(from, teks, text, {
         quoted: mek
     })
     addFilter(from)
     break

case 'trigger':
     encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
     media = await client.downloadAndSaveMediaMessage(encmedia)
     ran = getRandom('.mp3')
     exec(`ffmpeg -i ${media} -filter_complex "acrusher=level_in=8:level_out=18:bits=8:mode=log:aa=1" ${ran}`, (err, stderr, stdout) => {
         fs.unlinkSync(media)
         if (err) return reply('Error!')
         hah = fs.readFileSync(ran)
         client.sendMessage(from, hah, audio, {
             mimetype: 'audio/mp4',
             ptt: true,
             quoted: mek
         })
         fs.unlinkSync(ran)
     })
     addFilter(from)
     break

case 'quando': 
     client.updatePresence(from, Presence.composing)
     if (args.length < 1) return reply('Digite a pergunta')
     random = arrayQND[Math.floor(Math.random() * arrayQND.length)]
     random2 = `${Math.floor(Math.random() * 11) + 1}`
     if (random == 'Hoje' || random == 'Amanhã' || random == 'Nunca') {
         texto = `Pergunta: ${body.slice(1)}\n\nResposta: ${random}`
     } else if (random2 == 1) {
         texto = `Pergunta: ${body.slice(1)}\n\nResposta: 1 ${random}`
     } else {
         random3 = arrayQND2[Math.floor(Math.random() * arrayQND2.length)]
         texto = `Pergunta: ${body.slice(1)}\n\nResposta: ${random2} ${random3}`
     }
     reply(texto)
     addFilter(from)
     break

case 'omais':
     if (args.length < 1) return reply(`Exemplo: ${prefix}omais bonito`)
     membr = []
     const mett = groupMembers
     const msdd = groupMembers
     const siapssa = mett[Math.floor(Math.random() * mett.length)]
     const sipssd = pushname[Math.floor(Math.random() * msdd.length)]
     bbebn = `O mais${body.slice(6)} é o(a): @${siapssa.jid.split('@')[0]}`
     membr.push(siapssa.jid)
     mentions(bbebn, membr, true)
     addFilter(from)
     pr = `┏ ┓✘「 ꪶ ࣤΣŁƖƬΣ᭢᜴⁩ꪶ͢🅥🅘🅟ꫂ 」✘┓\n│ ┃─────────────────\n│ ┃ϟ➪ᴠᴏᴄє ɴᴀᴏ é ᴠɪᴘ ${pushname}\n┗ ┛━━━「 ꪶ ࣤꝒ℟Ʃ𐌼ί𝚄Ɱ᭢᜴⁩━━━━┈`
     break

case 'togif':
     if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
         const encmediaaa = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
         const mediaaa = await client.downloadAndSaveMediaMessage(encmediaaa)
         reply(ptbr.wait())
         addFilter(from)
         a = await webp2gifFile(mediaaa)
         mp4 = await getBuffer(a.result)
         client.sendMessage(from, mp4, MessageType.video, {
             mimetype: 'video/gif',
             filename: `stick.gif`,
             quoted: mek,
             caption: '✅'
         })
         fs.unlinkSync(mediaaa)
     }
     break

//COMANDOS CRIAR FIG ORIG


    //_CRIAÇÃO DE STICKERS

                case 's':
                case 'stiker':
                case 'sticker':
                case 'stickergif':
                case 'stikergif':
                case 'fig':
                case 'gif':
                case 'figura':
                case 'figu':
                case 'figurinha':
                addFilter(from)
                    if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
                        const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
                        const media = await client.downloadAndSaveMediaMessage(encmedia)
                        ran = getRandom('.webp')
                        await ffmpeg(`./${media}`)
                            .input(media)
                            .on('start', function(cmd) {
                                console.log(`Started : ${cmd}`)
                            })
                            .on('error', function(err) {
                                console.log(`Error : ${err}`)
                                fs.unlinkSync(media)
                                reply(ptbr.stick())
                            })
                            .on('end', function() {
                                console.log('Finish')
                                exec(`webpmux -set exif ${addMetadata('client-BOT', 'Italu Dev')} ${ran} -o ${ran}`, async(error) => {
                                    if (error) return reply(ptbr.stick())
                                    client.sendMessage(from, fs.readFileSync(ran), sticker, {
                                        quoted: mek
                                    })
                                    fs.unlinkSync(media)
                                    fs.unlinkSync(ran)
                                })
                            })
                            .addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(200,iw)':min'(200,ih)':force_original_aspect_ratio=decrease,fps=15, pad=200:200:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
                            .toFormat('webp')
                            .save(ran)
                    } else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
                        const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
                        const media = await client.downloadAndSaveMediaMessage(encmedia)
                        ran = getRandom('.webp')
                        reply(ptbr.wait())
                        await ffmpeg(`./${media}`)
                            .inputFormat(media.split('.')[1])
                            .on('start', function(cmd) {
                                console.log(`Started : ${cmd}`)
                            })
                            .on('error', function(err) {
                                console.log(`Error : ${err}`)
                                fs.unlinkSync(media)
                                tipe = media.endsWith('.mp4') ? 'video' : 'gif'
                                reply(ptbr.stick())
                            })
                            .on('end', function() {
                                console.log('Finish')
                                buff = fs.readFileSync(ran)
                                exec(`webpmux -set exif ${addMetadata('client-BOT', 'Italu Dev')} ${ran} -o ${ran}`, async(error) => {
                                    if (error) return reply(ptbr.stick())
                                    client.sendMessage(from, buff, sticker, {quoted: mek})
                                    fs.unlinkSync(media)
                                    fs.unlinkSync(ran)
                                })
                            })
                            .addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(200,iw)':min'(200,ih)':force_original_aspect_ratio=decrease,fps=15, pad=200:200:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
                            .toFormat('webp')
                            .save(ran)
                    } else {
                        reply(`Você precisa enviar ou marcar uma imagem ou vídeo com no máximo 10 segundos`)
                    }
                    break
              
case 'np':
if (!isGroup) return reply(ptbr.group())
if (!isGroupAdmins) return reply(ptbr.admin())
idgrup = `${from.split("@s.whatsapp.net")[0]}`;
client.groupUpdateSubject(idgrup, `${body.slice(3)}`)
break

				case 'ytmp4':
					if (args.length < 1) return reply('Cadê o url, hum?')
					if(!isUrl(args[0]) && !args[0].includes('youtu')) return reply(mess.error.Iv)
					anu = await fetchJson(`https://st4rz.herokuapp.com/api/ytv2?url=${args[0]}`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					teks = `*Title* : ${anu.title}`
					thumb = await getBuffer(anu.thumb)
					client.sendMessage(from, thumb, image, {quoted: mek, caption: teks})
					buffer = await getBuffer(anu.result)
					client.sendMessage(from, buffer, video, {mimetype: 'video/mp4', filename: `${anu.title}.mp4`, quoted: mek})
					break
		
				case 'ytmp3':
			    	if (!isPremium) return reply(mess.only.premium)
                   reply(mess.wait)
					if (args.length < 1) return reply('Cadê o url, hum?')
					if(!isUrl(args[0]) && !args[0].includes('youtu')) return reply(mess.error.Iv)
					anu = await fetchJson(`https://mhankbarbars.herokuapp.com/api/yta?url=${args[0]}&apiKey=${apiKey}`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					teks = `*Título* : ${anu.title}\n*Tamanho do arquivo* : ${anu.filesize}`
					thumb = await getBuffer(anu.thumb)
					client.sendMessage(from, thumb, image, {quoted: mek, caption: teks})
					bufferyyy = await getBuffer(anu.result)
					client.sendMessage(from, bufferyyy, audio, {mimetype: 'audio/mp4', filename: `${anu.title}.mp3`, quoted: mek})
					break
				case 'ytmp':
					if (args.length < 1) return reply('Cadê o url, hum?')
					anu = await fetchJson(`https://api.vhtear.com/ytmp3?query=${body.slice(7)}&apikey=OOute55hhUyiwy772999she88982665000kjuGaGh`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					teks = `*Title* : ${anu.title}\n*Filesize* : ${anu.size}`
					thumb = await getBuffer(anu.thumb)
					client.sendMessage(from, thumb, image, {quoted: mek, caption: teks})
					buffer = await getBuffer(anu.result)
					client.sendMessage(from, buffer, audio, {mimetype: 'audio/mp3', filename: `${anu.title}.mp3`, quoted: mek})
					break

//_EFEITO ESQUILO PARA AUDIO
case 'esquilo':
if (!isQuotedAudio) return reply('Marque um áudio')
pai = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
tup = await client.downloadAndSaveMediaMessage(pai)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${tup} -filter:a "atempo=0.7,asetrate=65100" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(tup)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
client.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
fs.unlinkSync(ran)
})
break

//_EFDEITO GIGANTE PARA AUDIO	
case 'monstro':
if (!isQuotedAudio) return reply('Marque um áudio')
muk = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
gem = await client.downloadAndSaveMediaMessage(muk)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${gem} -filter:a "atempo=1.6,asetrate=22100" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(gem)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
client.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
fs.unlinkSync(ran)
})
break

//_DEIXA O AUDIO RÁPIDO
case 'rapido':
if (!isQuotedAudio) return reply('Marque um áudio')
encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
media = await client.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${media} -filter:a "atempo=0.9,asetrate=95100" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return reply('Erro')
hah = fs.readFileSync(ran)
client.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
fs.unlinkSync(ran)
})
break

case 'infobr':
me = client.user
inf = `‣ Nome do bot: ${me.name}
  ‣ Número do bot: @555198183837
  ‣ Dono: ⏤͟͟͞͞🔥«ꦿ᭄꥓〭ᶤ⃢𝐽𝑉 𝐵𝜎𝜎𝜏𝑠 𝐼𝜋🪐 ꦿ⃟ۜ░⃟⃛⃝⃟
  ‣ Prefix: ${prefix}
  ‣ Total de usuários: ${_registered.length} usuários
  ‣ Total chats: ${totalchat.length}`
client.sendMessage(inf, text, {contextInfo: {"mentionedJid": [me]}})
break

//_ABRE O GRUPO
case 'openg':
  case 'abrir':
client.updatePresence(from, Presence.composing)
if (!isGroup) return reply(ptbr.group())
if (!isGroupAdmins) return reply(ptbr.admin())
if (!isBotGroupAdmins) return reply(ptbr.Badmin())
open = {
  text: `Grupo aberto por: @${sender.split("@")[0]}`,
  contextInfo: {
mentionedJid: [sender]
  }
}
client.groupSettingChange (from, GroupSettingChange.messageSend, false)
client.sendMessage(from, open, text, {
  quoted: mek
})
break

//_FECHA O GRUPO
case 'fechar':
client.updatePresence(from, Presence.composing)
if (!isGroup) return reply(ptbr.group())
if (!isGroupAdmins) return reply(ptbr.admin())
if (!isBotGroupAdmins) return reply(ptbr.Badmin())
var nomor = mek.participant
const close = {
text: `Grupo fechado por: @${nomor.split("@s.whatsapp.net")[0]}`,
contextInfo: {
mentionedJid: [nomor]
}
}
client.groupSettingChange (from, GroupSettingChange.messageSend, true);
reply(close)
break



//_INFORMAÇÕES DO GRUPO
case 'infogp':
case 'infogc':
case 'groupinfo':
case 'infogrup':
case 'grupinfo':
client.updatePresence(from, Presence.composing)
if (!isGroup) return reply(ptbr.group())
let { owner, creation, participants, desc } = groupMetadata;
const creationTime = moment.unix(creation);
try {
ppUrl = await client.getProfilePicture(from)
} catch {
ppUrl = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
buffer = await getBuffer(ppUrl)
infogp = 
`  ‣Nome: ${groupName}
  ‣Quantidade de membros: ${groupMembers.length}
  ‣Total de administradores: ${groupAdmins.length}
  ‣Criador : ꪶ ࣤL⃟ɛи∂αяισ ꪶ͢Ɖa⃟яƘ᭢᜴⁩
  ‣Total de membros: ${participants.length} membros`
await client.sendMessage(from, buffer, image, {quoted: mek, caption: infogp, contextInfo: {mentionedJid: [owner.split]}})
break

case 'wa.me':
 case 'wame':
     client.updatePresence(from, Presence.composing)
     options = {
         text: `Seu link wa.me: wa.me/${sender.split("@s.whatsapp.net")[0]}\nOu: \napi.whatsapp.com/send?phone=${sender.split("@")[0]}`,
         contextInfo: {
             mentionedJid: [sender]
         }
     }
     client.sendMessage(from, options, text, {
         quoted: mek
     })
     break

//_AUMENTA O BASS DE UM AUDIO	
case 'bass':                 
if (!isQuotedAudio) return reply('Marque um áudio')
ass = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
bas = await client.downloadAndSaveMediaMessage(ass)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${bas} -af equalizer=f=20:width_type=o:width=2:g=15 ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(bas)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
client.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
fs.unlinkSync(ran)
})
break

case 'bv':
     if (!isGroup) return reply(ptbr.group())
     if (!isGroupAdmins) return reply(ptbr.admin())
     if (args.length < 1) return reply(`┏ ✘「 ꪶ ࣤ𝑫͢𝚲𝑹𝑲᭢᜴⁩ꪶ͢𝑩𝑶𝑻ꫂ 」✘┓\n┃─────────────────\n┣❲❖❳ ᴘᴀʀᴀ ᴀᴛɪᴠᴀʀ ᴇsᴄʀᴇᴠᴀ 🌔\n┣❲❖❳+ᴡᴇʟᴄᴏᴍᴇ 1\n┗━━━「 ꪶ ࣤꝒ℟Ʃ𐌼ί𝚄Ɱ᭢᜴⁩━━┛`)
     if (Number(args[0]) === 1) {
         if (iswelkom) return reply('┏ ✘「 ꪶ ࣤ𝑫͢𝚲𝑹𝑲᭢᜴⁩ꪶ͢𝑩𝑶𝑻ꫂ 」✘┓\n┃─────────────────\n┣❲❖❳ ᴏ ʙᴇᴍ-ᴠɪɴᴅᴏ ᴊᴀ ᴇsᴛᴀ ᴀᴛɪᴠᴏ🌔\n┗━━━「 ꪶ ࣤꝒ℟Ʃ𐌼ί𝚄Ɱ᭢᜴⁩━━┛')
         welkom.push(from)
         fs.writeFileSync('./database/data/welkom.json', JSON.stringify(welkom))
         reply('┏ ✘「 ꪶ ࣤ𝑫͢𝚲𝑹𝑲᭢᜴⁩ꪶ͢𝑩𝑶𝑻ꫂ 」✘┓\n┃─────────────────\n┣❲❖❳ ᴏ ʙᴇᴍ-ᴠɪɴᴅᴏ ғᴏɪ ᴀᴛɪᴠᴀᴅᴏ🌔\n┗━━━「 ꪶ ࣤꝒ℟Ʃ𐌼ί𝚄Ɱ᭢᜴⁩━━┛')
     } else if (Number(args[0]) === 0) {
         if (!iswelkom) return reply('┏ ✘「 ꪶ ࣤ𝑫͢𝚲𝑹𝑲᭢᜴⁩ꪶ͢𝑩𝑶𝑻ꫂ 」✘┓\n┃─────────────────\n┣❲❖❳ ᴏ ʙᴇᴍ-ᴠɪɴᴅᴏ ɴᴀᴏ ᴇsᴛᴀ ᴀᴛɪᴠᴏ🌔\n┗━━━「 ꪶ ࣤꝒ℟Ʃ𐌼ί𝚄Ɱ᭢᜴⁩━━┛')
         let position = false
         Object.keys(welkom).forEach((i) => {
             if (welkom[i] === from) {
  position = i
             }
         })
         if (position !== false) {
             welkom.splice(position, 1)
             fs.writeFileSync('./database/data/welkom.json', JSON.stringify(_leveling))
         }
         reply('┏ ✘「 ꪶ ࣤ𝑫͢𝚲𝑹𝑲᭢᜴⁩ꪶ͢𝑩𝑶𝑻ꫂ 」✘┓\n┃─────────────────\n┣❲❖❳ ᴏ ʙᴇᴍ-ᴠɪɴᴅᴏ ғᴏɪ ᴅᴇsᴀᴛɪᴠᴀᴅᴏ🌔\n┗━━━「 ꪶ ࣤꝒ℟Ʃ𐌼ί𝚄Ɱ᭢᜴⁩━━┛')
     } else {
         reply(`┏ ✘「 ꪶ ࣤ𝑫͢𝚲𝑹𝑲᭢᜴⁩ꪶ͢𝑩𝑶𝑻ꫂ 」✘┓\n┃─────────────────\n┣❲❖❳ ᴘᴀʀᴀ ᴀᴛɪᴠᴀʀ ᴇsᴄʀᴇᴠᴀ 🌔\n┣❲❖❳+ᴡᴇʟᴄᴏᴍᴇ 1\n┗━━━「 ꪶ ࣤꝒ℟Ʃ𐌼ί𝚄Ɱ᭢᜴⁩━━┛`)
     }
     break

//_DEIXA O AUDIO ESTOURADO		
case 'earrape':         
case 'estourar':       
jvblock = (`ᴏʟᴀ  @${sender.split("@")[0]}, ᴇsᴛᴇ ᴄᴏᴍᴀɴᴅᴏ ғᴏɪ ʙʟᴏǫᴜᴇᴀᴅᴏ.`)
client.sendMessage(from, jvblock, text, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": `ϟ➪Bᴀᴛᴇʀɪᴀ: ꪶ͢${batterylevel}%ꫂ🔋\n🚫Cᴏᴍᴀɴᴅᴏ Bʟᴏǫᴜᴇᴀᴅᴏ🚫`, "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('./database/menus/menu.webp')}}}}) 
break

				case 'game':
				
					anu = await fetchJson(`http://rt-files.000webhostapp.com/tts.php?apikey=rasitech`, {method: 'get'})
					setTimeout( () => {
					client.sendMessage(from, '*➸ Responda :* '+anu.result.jawaban+'\n'+anu.result.desk, text, {quoted: mek}) // ur cods
					}, 30000) // 1000 = 1s,
					setTimeout( () => {
					client.sendMessage(from, '_10 Outro segundo…_', text) // ur cods
					}, 20000) // 1000 = 1s,
					setTimeout( () => {
					client.sendMessage(from, '_20 Outro segundo_…', text) // ur cods
					}, 10000) // 1000 = 1s,
					setTimeout( () => {
					client.sendMessage(from, '_30 Outro segundo_…', text) // ur cods
					}, 1000) // 1000 = 1s,
					setTimeout( () => {
					client.sendMessage(from, anu.result.soal, text, { quoted: mek }) // ur cods
					}, 0) // 1000 = 1s,
					break
                
				case 'encode64':

				encode64 = `${body.slice(10)}`
				anu = await fetchJson(`https://api.i-tech.id/hash/bs64?key=${TechApi}&type=encode&string=${encode64}`, {method: 'get'})
				frhan.sendMessage(from, `${anu.result}`, text, {quoted: mek})
					await limitAdd(sender) 
					break 
				case 'decode64':

				decode64 = `${body.slice(10)}`
					anu = await fetchJson(`https://api.i-tech.id/hash/bs64?key=${TechApi}&type=decode&string=${decode64}`, {method: 'get'})
					frhan.sendMessage(from, `${anu.result}`, text, {quoted: mek})
					await limitAdd(sender) 
					break  
				case 'decode32':

				decode32 = `${body.slice(10)}`
					anu = await fetchJson(`https://api.i-tech.id/hash/bs32?key=${TechApi}&type=decode&string=${decode32}`, {method: 'get'})
					frhan.sendMessage(from, `${anu.result}`, text, {quoted: mek})
					await limitAdd(sender) 
					break  
				case 'encode32':

				encode32 = `${body.slice(10)}`
					anu = await fetchJson(`https://api.i-tech.id/hash/bs32?key=${TechApi}&type=encode&string=${encode32}`, {method: 'get'})
					frhan.sendMessage(from, `${anu.result}`, text, {quoted: mek})
					await limitAdd(sender) 
					break  
				case 'encbinary':

				encbinary = `${body.slice(11)}`
					anu = await fetchJson(`https://api.anoncybfakeplayer.com/api/binary/?encode=${encbinary}`, {method: 'get'})
					frhan.sendMessage(from, `${anu.result}`, text, {quoted: mek})
					await limitAdd(sender) 
					break  
				case 'decbinary':

				decbin = `${body.slice(11)}`
					anu = await fetchJson(`https://api.anoncybfakeplayer.com/api/binary/?decode=${decbin}`, {method: 'get'})
					frhan.sendMessage(from, `${anu.result}`, text, {quoted: mek})
					await limitAdd(sender) 
					break  
				case 'encoctal':

				encoc = `${body.slice(10)}`
					anu = await fetchJson(`https://api.anoncybfakeplayer.com/api/octal/?encode=${encoc}`, {method: 'get'})
					frhan.sendMessage(from, `${anu.result}`, text, {quoted: mek})
					await limitAdd(sender)
					break  
				case 'decoctal':

				decoc = `${body.slice(10)}`
					anu = await fetchJson(`https://api.anoncybfakeplayer.com/api/octal/?decode=${decoc}`, {method: 'get'})
					frhan.sendMessage(from, `${anu.result}`, text, {quoted: mek})
					await limitAdd(sender) 
					break  
				case 'becrypt':

				
					case 'antiracismo':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (args.length < 1) return reply('Hmmmm')
					if ((args[0]) === 'on') {
						if (isAntiRacismo) return reply('O modo antiracismo já está ativo')
						antiracismo.push(from)
						fs.writeFileSync('./database/json/antiracismo.json', JSON.stringify(antiracismo))
						reply(`\`\`\`✓Ativado com sucesso o modo antiracismo no grupo\`\`\` *${groupMetadata.subject}*`)
					} else if ((args[0]) === 'off') {
						antiracismo.splice(from, 1)
						fs.writeFileSync('./database/json/antiracismo.json', JSON.stringify(antiracismo))
						reply(`\`\`\`✓Modo antiracismo desativado com sucesso no grupo\`\`\` *${groupMetadata.subject}*`)
					} else {
						reply('On para ativar, Off para desligar')
					}
					break
				case 'porno':
     if (!isGroup) return reply(ptbr.group())
     if (args.length < 1) return reply(`Digite ${prefix}porno 1 para ativar`)
     if (!isGroupAdmins) return reply(ptbr.admin())
     if (Number(args[0]) === 1) {
         if (isNsfw) return reply('❎funções porno já estão ativadas no grupo❎')
         nsfw.push(from)
         fs.writeFileSync('./database/data/nsfw.json', JSON.stringify(nsfw))
         reply('✅funções porno ativadas nesse grupo✅')
     } else if (Number(args[0]) === 0) {
         if (!isNsfw) return reply('❎funções porno não estão ativadas nesse grupo❎')
         let position = false
         Object.keys(nsfw).forEach((i) => {
             if (nsfw[i] === from) {
  position = i
             }
         })
         if (position !== false) {
             nsfw.splice(position, 1)
             fs.writeFileSync('./database/data/nsfw.json', JSON.stringify(nsfw))
         }
         reply('🚫funções NSFW desativadas nesse grupo🚫')
     } else {
         reply(`Digite ${prefix}nsfw 1 para ativar, 0 para desativar o recurso`)
     }
     break
				
                 case 'nomegp':
		             if (args.length < 1) return reply ('o nome do grupo é: *${groupMetadata.subject}*')
		             break
				
				case 'ytsearch':
					if (args.length < 1) return reply('Yang mau di cari apa?')
					reply(mess.wait)
					anu = await fetchJson(`https://api.arugaz.my.id/api/media/ytsearch?query=${body.slice(10)}`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					teks = '=================\n'
					for (let i of anu.result) {
						teks += `\`\`\`Título\`\`\` : *${i.title}*\n\`\`\`Link\`\`\` : *https://youtu.be/${i.id}*\n\`\`\`Publicados\`\`\` : *${i.uploadDate}*\n\`\`\`Duração\`\`\` : *${i.duration}*\n\`\`\`Visualizadores: \`\`\`*${h2k(i.viewCount)}*\n\`\`\`Canal:\`\`\` *${i.channel.name}*\n=================\n`
					}
					reply(teks.trim())
					await limitAdd(sender) 
					break 
				
				case 'nulis':
				case 'tulis':
					if (args.length < 1) return reply('O que você quer escrever??') 
					teks = body.slice(7)
					reply(mess.wait)
					anu = await fetchJson(`https://mhankbarbar.tech/nulis?text=${teks}&apiKey=${BarBarKey}`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					buff = await getBuffer(anu.result)
					client.sendMessage(from, buff, image, {quoted: mek, caption: mess.success})
                    await limitAdd(sender)
					break
				case 'jogo':
					anu = await fetchJson(`http://rt-files.000webhostapp.com/tts.php?apikey=rasitech`, {method: 'get'})
					setTimeout( () => {
					client.sendMessage(from, '*➸ Responda :* '+anu.result.jawaban+'\n'+anu.result.desk, text, {quoted: mek}) // ur cods
					}, 30000) // 1000 = 1s,
					setTimeout( () => {
					client.sendMessage(from, '_10 Outro segundo…_', text) // ur cods
					}, 20000) // 1000 = 1s,
					setTimeout( () => {
					client.sendMessage(from, '_20 Outro segundo_…', text) // ur cods
					}, 10000) // 1000 = 1s,
					setTimeout( () => {
					client.sendMessage(from, '_30 Outro segundo_…', text) // ur cods
					}, 1000) // 1000 = 1s,
					setTimeout( () => {
					client.sendMessage(from, anu.result.soal, text, { quoted: mek }) // ur cods
					}, 0) // 1000 = 1s,
					break

				case 'vip':
 if (!isPremium) return reply('┏ ┓✘「 ꪶ ࣤΣŁƖƬΣ᭢᜴⁩ꪶ͢🅥🅘🅟ꫂ 」✘┓\n│ ┃─────────────────\n│ ┃ϟ➪ᴠᴏᴄє ɴᴀᴏ é ᴠɪᴘ\n┗ ┛━━━「 ꪶ ࣤꝒ℟Ʃ𐌼ί𝚄Ɱ᭢᜴⁩━━━━┈')
					teks = '┏ ┓✘「 ꪶ ࣤΣŁƖƬΣ᭢᜴⁩ꪶ͢🅥🅘🅟ꫂ 」✘┓\n│ ┃─────────────────\n'
					for (let V of premium) {
						teks += `│ ┃ϟ➪@${V.split('@')[0]}\n`
					}
					teks += `│ ┃ϟ🅥🅘🅟🅢™: ${premium.length}\n│ ┃ϟƓʀʯрσ: ${groupName}\n┗ ┛━━━「 ꪶ ࣤꝒ℟Ʃ𐌼ί𝚄Ɱ᭢᜴⁩━━━━┈`
					client.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": premium}})
break

                 
                 case 'setdesc':
			    	 if (!isGroup) return reply(mess.only.group)
				     if (!isGroupAdmins) return reply(mess.only.admin)
			   	     if (!isBotGroupAdmins) return reply(mess.only.Badmin)
				     client.groupUpdateDescription(from, `${body.slice(9)}`)
				     client.sendMessage(from, 'Descrição alterada com sucesso', text, {quoted: mek})
				     break
			case 'google':
                const googleQuery = body.slice(8)
                if(googleQuery == undefined || googleQuery == ' ') return reply(`*Hasil Pencarian : ${googleQuery}* tidak ditemukan`)
                google({ 'query': googleQuery }).then(results => {
                let vars = `_*Resultado da pesquisa : ${googleQuery}*_\n`
                for (let i = 0; i < results.length; i++) {
                    vars +=  `\n═════════════════\n\n*Título* : ${results[i].title}\n\n*Descrição* : ${results[i].snippet}\n\n*Link* : ${results[i].link}\n\n`
                }
                    reply(vars)
                }).catch(e => {
                    console.log(e)
                    client.sendMessage(from, 'Google Error : ' + e);
                })
                await limitAdd(sender) 
                break 
		
				//_APAGA MENSAGENS ENVIADAS PELO BOT
case 'delete':
  case 'del':
case 'apagar':
if (!isGroup)return reply(ptbr.group())
if (!isPremium) return reply('┏ ┓✘「 ꪶ ࣤΣŁƖƬΣ᭢᜴⁩ꪶ͢🅥🅘🅟ꫂ 」✘┓\n│ ┃───────────────── \n│ ┃ϟ➪ᴠᴏᴄє ɴᴀᴏ é ᴠɪᴘ \n┗ ┛━━━「 ꪶ ࣤꝒ℟Ʃ𐌼ί𝚄Ɱ᭢᜴⁩━━━━┈')
try {
client.deleteMessage(from, {
  id: mek.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true
})
} catch {
  reply('Só é possível deletar mensagens minhas')
}
break

case 'covid19':
case 'covid':
case 'COVID':
post = await fetchJson(`https://api-gdr2.herokuapp.com/api/covidbr`)
send = `┏ ┓✘「 ꪶ ࣤ𝑫͢𝚲𝑹𝑲᭢᜴⁩ꪶ͢𝑩𝑶𝑻ꫂ 」✘┓\n│ ┃─────────────────\n│ ┃[❗] ʟᴏᴄᴀʟ: ${post.result.local}\n│ ┃[❗] ᴅᴀᴅᴏs: ${post.result.dadosAtualizados}\n│ ┃[❗] ᴛᴏᴛᴀʟ ᴅᴇ ᴄᴀsᴏs ${post.result.totalCasos}\n│ ┃[❗] ɴᴏᴠᴏs ᴄᴀsᴏs ${post.result.novosCasos}\n│ ┃[❗] ᴛᴏᴛᴀʟ ᴅᴇ ᴍᴏʀᴛᴇs ${post.result.totalMortes}\n│ ┃[❗] ᴍᴏʀᴛᴇs ʀᴇᴄᴇɴᴛᴇs: ${post.result.novasMortes}\n│ ┃[❗] ʀᴇᴄᴜᴘᴇʀᴀᴅᴏs: ${post.result.recuperados}\n│ ┃[❗] ᴠᴀᴄɪɴᴀᴅᴏs-1: ${post.result.vacinadosPrimeiraDose}\n│ ┃[❗] ᴠᴀᴄɪɴᴀᴅᴏs2: ${post.result.vacinadosSegundaDose}\n┗ ┛━━━━━━━━━━━━━━┈`
client.sendMessage(from, send, text, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "🔥「 ꪶ ࣤ𝑫͢𝚲𝑹𝑲᭢᜴⁩ꪶ͢𝑩𝑶𝑻ꫂ 」🏆\nᴄᴏᴠɪᴅ-19 ᴇsᴛᴀᴛɪsᴛɪᴄᴀs.", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('./database/menus/menu.webp')} } }, caption: "ᴀǫᴜɪ ᴇsᴛá." })
break
             
				case 'attp':
if (args.length < 1) return reply(`Use dessa forma:\nComando: ${prefix}attp Toin gado`)
attp2 = await getBuffer(`https://api.xteam.xyz/attp?file&text=${encodeURIComponent(body.slice(5))}`)
client.sendMessage(from, attp2, sticker, {quoted: mek})
break

                  case 'desbloquear':
					if (!isGroup) return reply(mess.only.group)
					if (!isOwner) return reply(mess.only.ownerB)
				    client.blockUser (`${body.slice(9)}@c.us`, "remove")
					client.sendMessage(from, `perintah Diterima, membuka blokir ${body.slice(9)}@c.us`, text)
				    break
                case 'image':
					if (args.length < 1) return reply('O que você quer procurar, mana?')
					goo = body.slice(7)
					anu = await fetchJson(`https://api.vhtear.com/googleimg?query=${goo}&apikey=ANTIGRATISNIHANJENKKK`, {method: 'get'})
					reply(mess.wait)
				    var pol = JSON.parse(JSON.stringify(anu.result.result_search));
                    var tes2 =  pol[Math.floor(Math.random() * pol.length)];
					pint = await getBuffer(tes2)
					client.sendMessage(from, pint, image, { caption: '*Google Image*\n\n*Resultado da pesquisa : '+goo+'*', quoted: mek })
					break
				case 'block':
					if (!isOwner) return reply(mess.only.ownerB)
					client.banUser (`${body.slice(4)}@c.us`, "add")
					client.sendMessage(from, `você foi banido ${body.slice(7)}@c.us`, text)
					
					//_LISTAR USUÁRIOS ONLINE
 case 'online':
let ido = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : from
let online = [...Object.keys(client.chats.get(ido).presences), client.user.jid]
client.sendMessage(from, '┏🔥✘ꪶ ࣤ𝑫͢𝚲𝑹𝑲᭢᜴⁩ꪶ͢𝑩𝑶𝑻ꫂ ✘🔥┓\n╔═══❖•ೋ°°ೋ•❖═══╗\n│📲 ᴍᴇᴍʙʀᴏs ᴏɴʟɪɴᴇ: 🔛\n╚═══❖•ೋ°°ೋ•❖═══╝\n' + online.map(v => '📳⃢⃟⃤➪@' + v.replace(/@.+/, '')).join`\n`, text, { quoted: mek,
contextInfo: { mentionedJid: online }
})
break
					
				case 'otagall2':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					members_id = []
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += '\n\n'
					for (let mem of groupMembers) {
						teks += `*😘* ${mem.jid.split('@')[0]}\n`
						members_id.push(mem.jid)
					}
					mentions(teks, members_id, true)
					break
                
                case 'img':
					client.updatePresence(from, Presence.composing) 
					data = await fetchJson(`https://fdciabdul.tech/api/pinterest/?keyword=${body.slice(4)}}`)				
					n = JSON.parse(JSON.stringify(data));
					nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					client.sendMessage(from, pok, image, { quoted: mek, caption: `*Imagem*`})			
					break
                
                case 'alerta':
				 data = fs.readFileSync('./src/alerta.js');
                 jsonData = JSON.parse(data);
                 randIndex = Math.floor(Math.random() * jsonData.length);
                 randKey = jsonData[randIndex];
                hasil = await getBuffer(randKey.result)
                sendImage(hasil, mek, '*alerta :V*')
				break									
	
				case 'naruto':

					reply(mess.wait)
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=Naruto`, {method: 'get'})
					naru = JSON.parse(JSON.stringify(anu));
					to =  naru[Math.floor(Math.random() * naru.length)];
					nye = await getBuffer(to)
					client.sendMessage(from, nye, image, { caption: 'naruto!!', quoted: mek })
					await limitAdd(sender)
					break 
				
				case 'casal':
if (!isGroup) return reply(ptbr.group())
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return 
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
pro = '.\n'
for (let _ of mentioned) {
pro += `@${_.split('@')[0]}\n`
}
porc = `${Math.floor(Math.random() * 100)}`
yhb =  `@${mentioned[0].split('@')[0]} tem uma chance de ${porc}% de namorar com @${mentioned[1].split('@')[0]}`,
mentions(`${yhb}`, mentioned, true, {quoted: mek})
break
//mini games, rate, random
				
				case 'addfoto':
					if (!isGroup) return reply(mess.only.group)
					if (!isOwner) return reply('Você quem é o dono? ')
					client.sendMessage(from, addfoto(prefix), text, { quoted: mek })
					break
			    case 'otagall3':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					members_id = []
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += '\n\n'
					for (let mem of groupMembers) {
						teks += `*#* wa.me/${mem.jid.split('@')[0]}\n`
						members_id.push(mem.jid)
					}
					mentions(teks, members_id, true)
					break
			   
			case 'instaimg':
				if (!isUrl(args[0]) && !args[0].includes('www.instagram.com')) return reply(mess.error.lv)
				    anu = await fetchJson(`https://alfians-api.herokuapp.com/api/ig?url=${args[0]}`, {method: 'get'})
				    insta = getBuffer(anu.result)
				    reply(mess.wait)
				    client.sendMessage(from, insta, image, {quoted: mek})
				    await limitAdd(sender) 
				    break  
				case 'instavid':
				if (!isUrl(args[0]) && !args[0].includes('www.instagram.com')) return reply(mess.error.lv)
				    anu = await fetchJson(`https://alfians-api.herokuapp.com/api/ig?url=${args[0]}`, {method: 'get'})
				    insta = getBuffer(anu.result)
				    reply(mess.wait)
				    client.sendMessage(from, insta, video, {mimtype: 'video/mp4', filename: 'instagram'.mp3, quoted: mek})
				    await limitAdd(sender) 
				    break  
				    
				case 'instastory':
				if (args.length < 1) return reply('username??')
				if (isLimit(sender)) return reply(limitend(pushname2))
				instor = `${body.slice(12)}`
				anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/igstory?username=${instor}`, {method: 'get'})
				insta = '=========================\n'
				for (let story of anu.result) {
				insta += `• *Envio:* ${story.uploaded}\n• *Termina:* ${story.expired}\n• *Tamanho: ${story.filesize}\n• *Tipo:* ${story.type}\n• Link: ${story.url}\n=========================\n`
				}
				reply(insta.trim())
				await limitAdd(sender)
				break
                                
	
			
		        case 'gay':		
	            	if (args.length < 1) return reply('ᴍᴀʀᴄᴀ ᴀʟɢᴜᴇᴍ ᴘᴏʀʀᴀ')
					rate = body.slice(1)
					const ti =['4','9','17','28','34','48','59','62','74','83','97','100','29','94','75','82','41','39']
					const kl = ti[Math.floor(Math.random() * ti.length)]
					client.sendMessage(from, 'sᴇʀᴀ ǫᴜᴇ ᴠᴏᴄᴇ é ᴘᴜᴛᴀᴏ? *'+rate+'*\n\ᴏ ǫᴜᴀɴᴛᴏ é ɢᴀʏ: '+ kl+'%', text, { quoted: mek })
					break
                    
                    //Leveis/Níveis
                case 'level':
     if (!isGroup) return reply(ptbr.group())
     if (!isLevelingOn) return reply(ptbr.levelnoton())
     const userLevel = getLevelingLevel(sender)
     const userXp = getLevelingXp(sender)
     const userTime = getRegisterTime(sender)
     if (userLevel === undefined && userXp === undefined) return reply(ptbr.levelnol())
     const requiredXp = 5 * Math.pow(userLevel, (5 / 2)) + 50 * userLevel + 100
         /*evela = `  
┏ ┓✘「 ꪶ ࣤ𝑫͢𝚲𝑹𝑲᭢᜴⁩ꪶ͢𝑩𝑶𝑻ꫂ 」✘┓
│ ┃─────────────────
┣❲❖❳ ɴᴏᴍᴇ: ${pushname}
┣❲❖❳ xᴘ: ${userXp}
┣❲❖❳ ɴɪᴠᴇʟ: ${userLevel}
┣❲❖❳ ᴘᴀᴛᴇɴᴛᴇ: ${patt}
┗ ┛━━━━━━━━━━━━━━┈`*/
     client.sendMessage(from, leveltab(pushname, userLevel, userXp, patt), text, {
             quoted: mek,
             contextInfo: {
  mentionedJid: [sender]
             }
         })
         .catch(async(err) => {
             console.error(err)
             await reply(`Error!\n${err}`)
         })
         addFilter(from)
     break 

                case 'leveis':
     if (!isGroup) return reply(ptbr.group())
     if (!isGroupAdmins) return reply(ptbr.admin())
     if (args.length < 1) return reply(`Digite da forma correta:\nComando: ${prefix}leveis 1 para ativar `)
     if (Number(args[0]) === 1) {
         if (isLevelingOn) return reply('┏ ┓✘「 ꪶ ࣤ𝑫͢𝚲𝑹𝑲᭢᜴⁩ꪶ͢𝑩𝑶𝑻ꫂ 」✘┓\n│ ┃─────────────────\n┣❲❖❳ ᴊᴀ ᴇsᴛᴀ ᴀᴛɪᴠᴏ.✅\n┗ ┛━━━━━━━━━━━━━━┈')
         _leveling.push(from)
         fs.writeFileSync('./database/data/leveling.json', JSON.stringify(_leveling))
         reply('┏ ┓✘「 ꪶ ࣤ𝑫͢𝚲𝑹𝑲᭢᜴⁩ꪶ͢𝑩𝑶𝑻ꫂ 」✘┓\n│ ┃─────────────────\n┣❲❖❳ ᴀᴛɪᴠᴏ ᴄᴏᴍ sᴜᴄᴇssᴏ.✅\n┗ ┛━━━━━━━━━━━━━━┈')
     } else if (Number(args[0]) === 0) {
         if (!isLevelingOn) return reply('┏ ┓✘「 ꪶ ࣤ𝑫͢𝚲𝑹𝑲᭢᜴⁩ꪶ͢𝑩𝑶𝑻ꫂ 」✘┓\n│ ┃─────────────────\n┣❲❖❳ ᴀᴛɪᴠᴇ ᴘᴀʀᴀ ғᴜɴᴄɪᴏɴᴀʀ✅\n┗ ┛━━━━━━━━━━━━━━┈')
         let position = false
         Object.keys(_leveling).forEach((i) => {
             if (_leveling[i] === from) {
  position = i
             }
         })
         if (position !== false) {
             _leveling.splice(position, 1)
             fs.writeFileSync('./database/data/leveling.json', JSON.stringify(_leveling))
         }
         reply('┏ ┓✘「 ꪶ ࣤ𝑫͢𝚲𝑹𝑲᭢᜴⁩ꪶ͢𝑩𝑶𝑻ꫂ 」✘┓\n│ ┃─────────────────\n┣❲❖❳ ᴅᴇsᴀᴛɪᴠᴀᴅᴏ ᴄᴏᴍ sᴜᴄᴇssᴏ.✅\n┗ ┛━━━━━━━━━━━━━━┈')
     } else {
         reply(`┏ ┓✘「 ꪶ ࣤ𝑫͢𝚲𝑹𝑲᭢᜴⁩ꪶ͢𝑩𝑶𝑻ꫂ 」✘┓\n│ ┃─────────────────\n│ ┃ ᴀᴛɪᴠᴀʀ sɪsᴛᴇᴍᴀ ᴅᴇ ʟᴇᴠᴇʟ\n┣❲❖❳ +ʟᴇᴠᴇɪs 1 - ᴀᴛɪᴠᴀʀ ✅\n┣❲❖❳ +ʟᴇᴠᴇɪs 0 - ᴅᴇsᴀᴛɪᴠᴀʀ 🚫\n┗ ┛━━━━━━━━━━━━━━┈`)
     }
     break

 case 'autostk':
     if (!isGroup) return reply(ptbr.group())
     if (!isGroupAdmins) return reply(ptbr.admin())
     if (args.length < 1) return reply(`Digite da forma correta:\nComando: ${prefix}autostk 1 para ativar `)
     if (Number(args[0]) === 1) {
         if (isAuto) return reply('❎O recurso AUTO STICKER já está ativado no grupo❎')
         atsticker.push(from)
         fs.writeFileSync('./database/data/atisticker.json', JSON.stringify(_leveling))
         reply('✅O recurso AUTO STICKER foi ativado✅')
     } else if (Number(args[0]) === 0) {
         if (!isAuto) return reply('❎O recurso AUTO STICKER não está ativado no grupo❎')
         let position = false
         Object.keys(atsticker).forEach((i) => {
             if (atsticker[i] === from) {
  position = i
             }
         })
         if (position !== false) {
             atsticker.splice(position, 1)
             fs.writeFileSync('./database/data/atisticker.json', JSON.stringify(atsticker))
         }
         reply('❌O recurso AUTO STICKER foi desativado❌')
     } else {
         reply(`Digite da forma correta:\nComando: ${prefix}autostk 1, para ativar e 0 para desativar`)
     }
     break
			    
				case 'setnomebot':
					if (args.length < 1) return
					if (!isOwner) return reply(mess.only.ownerB)
					name = body.slice(12)
					reply(`O nome do bot foi alterado com sucesso para : ${name}`)
					break
					
			    case 'igstalk':
					if (args.length < 1) return reply('Masukan username mu!!')
					ige = body.slice(9)
					reply(mess.wait)
					anu = await fetchJson(`https://api.vhtear.com/igprofile?query=${ige}&apikey=ANTIGRATISNIHANJENKKK`, {method: 'get'})
					buffer = await getBuffer(anu.result.picture)
					capt = `User Ditemukan!!\n\n*➸ Nama :* ${anu.result.full_name}\n*➸ Username :* ${anu.result.username}\n*➸ Followers :* ${anu.result.follower}\n*➸ Mengikuti :* ${anu.result.follow}\n*➸ Jumlah Post :* ${anu.result.post_count}\n*➸ Private :* ${anu.result.is_private}\n*➸ Bio :* ${anu.result.biography}`
					client.sendMessage(from, buffer, image, {quoted: mek, caption: capt})
					break
				
					case 'totaluser':
					if (!isOwner) return reply(mess.only.ownerB)    
					teks = `\`\`\`╭────*「 *TOTAL DE USUÁRIOS 👑* 」\n\`\`\``
					no = 0
					for (let hehehe of user) {
						no += 1
						teks += `\`\`\`[${no.toString()}]\`\`\` @${hehehe.split('@')[0]}\n`
					}
					teks += `│+ Total de usuários : ${user.length}\n╰──────*「 *JvBoots* 」*────`
					 client.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": user}})
					break
				
				case 'setppbot':
				client.updatePresence(from, Presence.composing) 
				if (!isQuotedImage) return reply(`Envie fotos com legendas ${prefix}setbotpp ou tags de imagem que já foram enviadas`)
					if (!isOwner) return reply(mess.only.ownerB)
					enmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await client.downloadAndSaveMediaMessage(enmedia)
					await client.updateProfilePicture(botNumber, media)
					reply('Obrigado pelo novo perfil😗')
					break
				

case 'attp2':	
if (args.length < 1) return reply(`_Coloque o texto _\n\n*Exemplo ${prefix}sttc kratos*`)
teks = body.slice(6)
url = encodeURI(`http://brizas-api.herokuapp.com/ttp/attp2?apikey=brizaloka&text=${teks}`)
send = await getBuffer(url)
client.sendMessage(from, send, sticker, {quoted: mek})
			     	break	
	case 'attp3': 
if (args.length < 1) return reply(`_Coloque o texto _\n\n*Exemplo ${prefix}sttc kratos*`)
teks = body.slice(6)
url = encodeURI(`http://brizas-api.herokuapp.com/ttp/attp3?apikey=brizaloka&text=${teks}`)
send = await getBuffer(url)
client.sendMessage(from, send, sticker, {quoted: mek})
			     	break	
	case 'attp4': 
if (args.length < 1) return reply(`_Coloque o texto _\n\n*Exemplo ${prefix}sttc kratos*`)
teks = body.slice(6)
url = encodeURI(`http://brizas-api.herokuapp.com/ttp/attp4?apikey=brizaloka&text=${teks}`)
send = await getBuffer(url)
client.sendMessage(from, send, sticker, {quoted: mek})
			     	break	
		case 'attp5':	
if (args.length < 1) return reply(`_Coloque o texto _\n\n*Exemplo ${prefix}sttc kratos*`)
teks = body.slice(6)
url = encodeURI(`http://brizas-api.herokuapp.com/ttp/attp5?apikey=brizaloka&text=${teks}`)
send = await getBuffer(url)
client.sendMessage(from, send, sticker, {quoted: mek})
			     	break
case 'attp6':	
if (args.length < 1) return reply(`_Coloque o texto _\n\n*Exemplo ${prefix}sttc kratos*`)
teks = body.slice(6)
url = encodeURI(`http://brizas-api.herokuapp.com/ttp/attp6?apikey=brizaloka&text=${teks}`)
send = await getBuffer(url)
client.sendMessage(from, send, sticker, {quoted: mek})
			     	break	 

                 
                
				case 'infogc':
				client.updatePresence(from, Presence.composing)
				if (!isGroup) return reply(mess.only.group)
					try {
					ppimg = await client.getProfilePicture(from)
				} catch {
					ppimg = 'https://i.ibb.co/NthF8ds/IMG-20201223-WA0740.jpg'
				}
					let buf = await getBuffer(ppimg)
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += `*Nome do grupo :* ${groupName}\n*Descrição :* ${groupDesc}\n*Número de Administradores :* ${groupAdmins.length}\n*Número de membros :* ${groupMembers.length}`
					no = 0
					for (let admon of groupAdmins) {
						no += 1
						teks += `[${no.toString()}]`
					}
					client.sendMessage(from, buf, image, {quoted: mek, caption: teks})
					break
			    case 'owner':
                    client.sendMessage(from, {displayname: "Jv", vcard: vcard}, MessageType.contact, { quoted: mek})
                    client.sendMessage(from, 'Ctt do meu dono ai, pfv n flode o chat',MessageType.text, { quoted: mek} )
                    break

//_MENCIONAR TODOS GKS
case 'marcargks':
client.updatePresence(from, Presence.composing)
//reply('comando desativado para evitar flood')
if (!isGroup) return reply(ptbr.group())
if (!isGroupAdmins) return reply(ptbr.admin())
members_id = []
todos = (args.length > 1) ? body.slice(8).trim(): ''
todos += `Total: ${groupMembers.length} membros\n`
for (let mem of groupMembers) {
todos += `║➸@${mem.jid.split('@')[0]}\n`
members_id.push(mem.jid)
}
mentions('╭╾╼◐⚋ ༒ᴍᴇɴᴄɪᴏɴᴀʀ ᴛᴏᴅᴏs ༒⚋◑╾╼╮\n║➸'+todos+'╰╾╼◐⚋🔥⏤͟͟͞͞βσт•GKร•🔥⚋◑╾╼╯', members_id, true)
break

				case 'bloqueados':
					teks = 'Esta é a lista de números bloqueados :\n'
					for (let block of blocked) {
						teks += `~> @${block.split('@')[0]}\n`
					}
					teks += `Total : ${blocked.length}`
					client.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": blocked}})
					break
				
				case 'divulgar':
parametros = `${body.slice(9)}`;
members_id = []
for (let mem of groupMembers) {
numero = `${mem.jid.split('@')[0]}`
const id = numero;
const exists = await client.isOnWhatsApp(id);
if (exists) {
client.sendMessage(numero + '@s.whatsapp.net', parametros, text)
}
}
break
				
				case 'tts':
					if (args.length < 1) return client.sendMessage(from, 'Qual é o código da linguagem, tio?', text, {quoted: mek})
					const gtts = require('./lib/gtts')(args[0])
					if (args.length < 2) return client.sendMessage(from, 'Cadê o texto tio', text, {quoted: mek})
					dtt = body.slice(7)
					ranm = getRandom('.mp3')
					rano = getRandom('.ogg')
					dtt.length > 600
					? reply('A maior parte do texto é merda')
					: gtts.save(ranm, dtt, function() {
						exec(`ffmpeg -i ${ranm} -ar 48000 -vn -c:a libopus ${rano}`, (err) => {
							fs.unlinkSync(ranm)
							buff = fs.readFileSync(rano)
							if (err) return reply('falha:(')
							client.sendMessage(from, buff, audio, {quoted: mek, ptt:true})
							fs.unlinkSync(rano)
						})
					})
					break
				
				

					case 'addvip':
if (!isGroup) return reply(ptbr.group())
if (!isOwner) return  reply(ptbr.ownerB())
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return 
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
pru = '.\n'
for (let _ of mentioned) {
pru += `@${_.split('@')[0]}\n`
}
premium.push(`${mentioned}`)
fs.writeFileSync('./database/datauser/premium.json', JSON.stringify(premium))
susp = `┏🔥✘「 ꪶ ࣤ𝑫͢𝚲𝑹𝑲᭢᜴⁩ꪶ͢𝑶𝑻ꫂ 」✘┓\n╔═══❖•ೋ°°ೋ•❖═══╗\n│‣@${mentioned[0].split('@')[0]} \n│‣ ᴀɢᴏʀᴀ ᴇ ᴜᴍ ᴍᴇᴍʙʀᴏ ᴠɪᴘ👑\n│‣ ᴘᴀʀᴀʙᴇɴs ɢᴜᴇʀʀᴇɪʀᴏ ( ͡° ͜ʖ ͡°) \n╚═══❖•ೋ°°ೋ•❖═══╝`
mentions(`${susp}`, mentioned, true)   
break

				
					case 'dellvip':
if (!isGroup) return reply(ptbr.group())
if (!isOwner) return  reply(ptbr.ownerB())
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return 
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
pru = '.\n'
for (let _ of mentioned) {
pru += `@${_.split('@')[0]}\n`
}
delp = premium.indexOf
premium.splice(`${mentioned}`)
fs.writeFileSync('./database/datauser/premium.json', JSON.stringify(premium))
susp = `┏🔥✘「 ꪶ ࣤ𝑫͢𝚲𝑹𝑲᭢᜴⁩ꪶ͢𝑩𝑶𝑻ꫂ 」✘🔥┓\n╔═══❖•ೋ°°ೋ•❖═══╗\n│‣@${mentioned[0].split('@')[0]} \n│‣ ғᴏɪ ʀᴇᴍᴏᴠɪᴅᴏ ᴅᴏs ᴍᴇᴍʙʀᴏs ᴠɪᴘs 🚫\n│‣@${mentioned[0].split('@')[0]} ➪ᵐᵉᵐᵇʳᵒ ᶜᵒᵐᵘᵐ👎\n╚═══❖•ೋ°°ೋ•❖═══╝` 
mentions(`${susp}`, mentioned, true)   
break
				
                  case 'corno':
case 'xifrudo':
idde = ["ᴄᴏʀɴᴏ ᴏᴛᴀʀɪᴏ","ᴄᴏʀɴᴏ ʙᴇsᴛᴀ","ᴄᴏʀɴᴏ xɪғʀᴜᴅᴏ","ᴄᴏʀɴᴏ ʙᴜʀʀᴏ ᴇ ʟᴇsᴏ","ᴄᴏʀɴᴏ ʀᴇᴛᴀʀᴅᴀᴅᴏ ᴇ ғᴅᴘ","ᴄᴏʀɴᴏ ᴄᴏɴғᴏʀᴍᴀᴅᴏ","ᴄᴏʀɴᴏ ғᴜᴅɪᴅᴏ","ᴄᴏʀɴᴏ sᴜɪᴄɪᴅᴀ","ᴄᴏʀɴᴏ ᴄᴀʙᴇʟᴇʀᴇɪʀᴏ","ᴄᴏʀɴᴏ ʙᴜʀʀᴏ","ᴄᴏʀɴᴏ ɪɴɢᴇɴᴜᴏ"]
idd2 = idde[Math.floor(Math.random() * (idde.length))]
morte = `O ${pushname} é ᴄᴏʀɴᴏ? \nᴇʟᴇ é: ${idd2}`
reply(morte)
break

case 'top5':
try{
if(!isGroup) return reply(ptbr.group())
d = []
top1 = body.slice(5)
teks = `️‍Top 5${top1}:\n`
for(i = 0; i < 5; i++) {
r = Math.floor(Math.random() * groupMetadata.participants.length + 0)
teks += `️‍❧ @${groupMembers[r].jid.split('@')[0]}\n`
d.push(groupMembers[r].jid)
}
mentions(teks, d, true, {quoted: mek})
} catch (e) {
console.log(e)
reply('ocorreu um erro')
}
break

case 'morte':
case 'death':
idde = ["30","76","90","72","83","73","83","74","92","100","94","48","37","53","63"]
idd2 = idde[Math.floor(Math.random() * (idde.length))]
morte = `ᴘᴇssᴏᴀs ᴄᴏᴍ ᴇssᴇ ɴᴏᴍᴇ: ${pushname} \ᴄᴏsᴛᴜᴍᴀᴍ ᴍᴏʀʀᴇʀ ᴀᴏs ${idd2} ᴀɴᴏs ᴅᴇ ɪᴅᴀᴅᴇ.`
reply(morte)
break
			
case 'sn':
const sn = ['sim', 'não']
gosto = body.slice(3)
if (args.length < 1) return client.sendMessage(from, `Você deve fazer uma pergunta...\nExemplo: ${prefix}sn O Italu é um baiano preguiçoso?`, text, {quoted: mek})
const jawab = sn[Math.floor(Math.random() * (sn.length))]
hasil = `${gosto}\n\nSegundo meus cálculos, eu acredito que... ${jawab}`
reply(hasil)
break
                   
case 'gadometro':
case 'gado':
var chifre = ["ultra extreme gado", "Gado-Master", "Gado-Rei", "Gado", "Escravo-ceta", "Escravo-ceta Maximo", "Gacorno?", "Jogador De Forno Livre<3", "Mestre Do Frifai<3<3", "Gado-Manso", "Gado-Conformado", "Gado-Incubado", "Gado Deus", "Mestre dos Gados", "Topa tudo por buceta", "Gado Comum", "Mini Gadinho", "Gado Iniciante", "Gado Basico", "Gado Intermediario", "Gado Avançado", "Gado Profisional", "Gado Mestre", "Gado Chifrudo", "Corno Conformado", "Corno HiperChifrudo", "Chifrudo Deus", "Mestre dos Chifrudos"]
var gado = chifre[Math.floor(Math.random() * chifre.length)]
gadop = `${Math.floor(Math.random() * 100)}`
hisil = `Você é:\n\n${gado}`
reply(hisil)
break

case 'b': 
jvbr = `sᴏᴍᴇɴᴛᴇ ᴏ⏤͟͟͞͞ꦿ⃟ۜCʀια∂σя🖤░⃟⃛⃝ᶤ⃢⃝░  `
				if (!isOwner) return reply(jvbr)
				client.groupRemove(jvbr)
	const timestamp = speed();
                    const latensi = speed() - timestamp
                    client.updatePresence(from, Presence.composing) 
				uptime = process.uptime()
				reply(`ʙᴏᴛ ᴛᴇsᴛᴀᴅᴏ✅\n*${latensi.toFixed(4)} sᴇɢ.`)
if (mek.message.extendedTextMessage === null ||mek.message.extendedTextMessage === undefined) return;
if (mek.message.extendedTextMessage.contextInfo.participant === undefined) {
entah = mek.message.extendedTextMessage.contextInfo.mentionedJid
if (exe1.length > 1) {
var M_exe = []
for (let cut of exe1) {
M_exe.push(cut)
}
client.groupRemove(from, M_exe)
} else {
client.groupRemove(from, [exe1[0]])
}
} else {
exe1 = mek.message.extendedTextMessage.contextInfo.participant
client.groupRemove(from, [exe1])
}
break

case 'addxp':
     if (!isOwner) return reply(ptbr.owner())
     if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return
     mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
     pru = '.\n'
     for (let _ of mentioned) {
         pru += `@${_.split('@')[0]}\n`
     }
     susp = `Foi adicionado ${args[1]} em xp para @${mentioned[0].split('@')[0]}`
     mentions(`${susp}`, mentioned, true)
     addLevelingXp((mentioned[0]), Number(args[1]))
     addFilter(from)
     break

case 'ma':
client.updatePresence(from, Presence.composing) 
if (!isOwner) 
if (!isGroup) return reply(ptbr.group())
htg = body.slice(4)
group = await client.groupMetadata(from);
member = group['participants']
jids = [];
member.map( async adm => {
jids.push(adm.id.replace('c.us', 's.whatsapp.net'));
})
options = {
text: htg,
contextInfo: {mentionedJid: jids},
quoted: mek
}
await client.sendMessage(from, options, text)
break

//_MENCIONA TODOS OS MEMBROS DO GRUPO
case 'mencionar':
client.updatePresence(from, Presence.composing)
//reply('comando desativado para evitar flood')
if (!isGroup) return reply(ptbr.group())
if (!isPremium) return reply('┏ ┓✘「 ꪶ ࣤΣŁƖƬΣ᭢᜴⁩ꪶ͢🅥🅘🅟ꫂ 」✘┓\n│ ┃───────────────── \n│ ┃ϟ➪ᴠᴏᴄє ɴᴀᴏ é ᴠɪᴘ\n┗ ┛━━━「 ꪶ ࣤꝒ℟Ʃ𐌼ί𝚄Ɱ᭢᜴⁩━━━━┈')
members_id = []
todos = (args.length > 1) ? body.slice(8).trim(): ''
todos += `Total: ${groupMembers.lexngth} membros\n`
for (let mem of groupMembers) {
todos += `║➸@${mem.jid.split('@')[0]}\n`
members_id.push(mem.jid)
}
mentions('╭╾╼◐⚋ ༒ᴍᴇɴᴄɪᴏɴᴀʀ ᴛᴏᴅᴏs ༒⚋◑╾╼╮\n║➸'+todos+'╰╾╼◐⚋⚋ ༒⏤͟͟͞͞«ᶤ⃢𝗝𝗩ꦿ⃟ۜ░⃟⃛⃝ᶤ⃢⃝ ꦿ⃟ ༒ ⚋⚋◑╾╼╯', members_id, true)
break

//_TE MENCIONA
case 'eu':
const tagme = {
text: `@${sender.split("@")[0]} 🌚`,
contextInfo: {mentionedJid: [sender]
}
}
client.sendMessage(from, tagme, text)
break

		    	case 'grupoinfo':
                    client.updatePresence(from, Presence.composing)
                    if (!isGroup) return reply(mess.only.group)
                    ppUrl = await client.getProfilePicture(from) // leave empty to get your own
			        buffer = await getBuffer(ppUrl)
		            client.sendMessage(from, buffer, image, {quoted: mek, caption: `*NOME* : ${groupName}\n*MEMBRO* : ${groupMembers.length}\n*ADMIN* : ${groupAdmins.length}\n*DESCRIÇÃO* : ${groupDesc}`})
                    break
				case 'meme':
					reply(mess.wait)
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=MEME BRASIL`, {method: 'get'})
					ri = JSON.parse(JSON.stringify(anu));
					ze =  ri[Math.floor(Math.random() * ri.length)];
					nye = await getBuffer(ze)
					client.sendMessage(from, nye, image, { caption: 'cringe️', quoted: mek })
					await limitAdd(sender) 	
					break
			
			case 'falamacaco':
fala = 'macaco'
client.sendMessage(from, fala, text, {quoted: mek})
break
			
			
//_BRINCADEIRAS, GAMES E JOGOS.

case 'cassino':
const somtoy = sotoy2[Math.floor(Math.random() * (sotoy2.length))]	
ppg = Math.floor(Math.random() * 13) + 60
if ((somtoy == '🔥 : 🔥 : 🔥') ||(somtoy == '👑 : 👑 : 👑') ||(somtoy == '🖤 : 🖤 : 🖤') ||(somtoy == '🏆 : 🏆 : 🏆')) {
var vitr = "🌒ᴠᴇɴᴄᴇᴜ🌔"
} else {
var vitr = "Perdeu"
}
const slott = 
`  
 ᴄᴏɴsɪɢᴀ ᴀ sᴇǫᴜᴇɴᴄɪᴀ ɪɢᴜᴀʟ
┏━─────👑────━┓
┃??ꪶ ࣤꝒ℟Ʃ𐌼ί𝚄Ɱ᭢᜴⁩🌔┃
┗━────╮     ╭───━┛
┏━────╯     ╰──────━┓
┃   🎰🎰 ᴠᴇɢᴀs ᴘʀᴏ  🎰🎰
┃➜➜ ${somtoy} ⇇⇇
┃ϟƓʀʯрσ: ${groupName}
┗━──────────────━┛
                      

${vitr}`
if (vitr == "ѵσcɛ ɢαинσʋ ${ppg} ∂ɛ χρ!!!") {
setTimeout( () => {
reply(`ѵσcɛ ɢαинσʋ ${ppg} ∂ɛ χρ!!!`)
}, 100)
}
client.sendMessage(from, slott, text, {quoted: mek})
break

case 'chance':
client.updatePresence(from, Presence.composing) 
var avb = body.slice(7)
if (args.length < 1) return client.sendMessage(from, `Você precisa digitar da forma correta\nExemplo: ${prefix}chance do Italu ser um trouxa`, text, {quoted: mek})
random = `${Math.floor(Math.random() * 100)}`
hasil = `A chance ${body.slice(7)}\n\né de... ${random}%`
client.sendMessage(from, hasil, text, {quoted: mek, contextInfo: {mentionedJid: [sender]}})
break

case 'amongus':
if (!isGroup) return reply(ptbr.group())
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Você precisa mencionar alguém')
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
pro = '.\n'
for (let _ of mentioned) {
pro += `@${_.split('@')[0]}\n`
}
sus = 
`.      　。　　　　•　    　ﾟ　　。
　　.　　　.　　　  　　.　　　　　。　　   。　.
　.　　      。　        ඞ   。　    .    •
•            @${mentioned[0].split('@')[0]} was E j e c t e d
                  1 impostor remain   。　.
　 　　。　　 　　　　ﾟ　　　.　      　　　.
,　　　　.                  .`
//client.groupRemove(from, mentioned)
mentions(`${sus}`, mentioned, true)
break

case 'dono':
const bug = body.slice(5)
 if (args.length > 300) return client.sendMessage(from, 'Máximo 300 caracteres', msgType.text, {quoted: mek})
var nomor = mek.participant
teks1 = `[SOLICITAÇÃO]\nDe: @${sender.split("@s.whatsapp.net")[0]}\nErro ou bug: ${bug}`
var options = {
 text: teks1, 
contextInfo: {mentionedJid: [sender]}, 
}
client.sendMessage('555185480669@s.whatsapp.net', options, text, {quoted: mek})
reply("sᴜᴀ ᴍᴇɴsᴀɢᴇᴍ ғᴏɪ ᴇɴᴠɪᴀᴅᴀ ᴘᴀʀᴀ ᴏ ᴍᴇᴜ ᴄʀɪᴀᴅᴏʀ. ᴀɢᴜᴀʀᴅᴇ ᴇʟᴇ ʀᴇᴛᴏʀɴᴀʀ.")
break

case 'solicitar':
const pesann = body.slice(8)
if (args.length > 300) return client.sendMessage(from, 'Máximo 300 caracteres', msgType.text, {quoted: mek})
var nomor = mek.participant
const teks2 = `[Solicitação]\nDe: @${sender.split("@s.whatsapp.net")[0]}\nMensagem: ${pesann}`
var options = {
text: teks1,
contextInfo: {mentionedJid: [sender]},
}
client.sendMessage('555185480669@s.whatsapp.net', options, text, {quoted: mek})
reply("Mensagem enviada ao meu dono; Spam = block + ban.")
break

case "ppt":
if (!isGroup) return reply(mess.only.group);
if (args.length < 1) return reply(ptbr.tterro())
ppt = ["pedra","papel","tesoura"]
ppy = ppt[Math.floor(Math.random() * ppt.length)]
ppg = Math.floor(Math.random() * 13) + 80
pptb = ppy
pph = `Vᴏᴄê ɢᴀɴʜᴏᴜ ${ppg} ᴇᴍ xᴘ`
if ((pptb == "pedra" && args == "papel") || 
(pptb == "papel" && args == "tesoura") || 
(pptb == "tesoura" && args == "pedra")) {
var vit = `Vɪᴛóʀɪᴀ ᴅᴏ @${sender.split("@")[0]}`
} else if ((pptb == "pedra" && args == "tesoura") || 
(pptb == "papel" && args == "pedra") || 
(pptb == "tesoura" && args == "papel")) {
var vit = "O ꪶ ࣤ𝑫͢𝚲𝑹𝑲᭢᜴⁩ꪶ͢𝑩𝑶𝑻ꫂ ɢᴀɴʜᴏᴜ\nᴠᴏᴄᴇ ᴘᴇʀᴅᴇᴜ ☹️"
} else if ((pptb == "pedra" && args == "pedra") ||
(pptb == "papel" && args == "papel") ||
(pptb == "tesoura" && args == "tesoura")) {
var vit = "ᴠᴏᴄᴇ ᴇᴍᴘᴀᴛᴏᴜ"
} else if (vit = "") {
return reply(ptbr.tterro())
}
if (vit == "") {
var tes = ""
}
if (vit == "" ) { 
var tes = ""
}
if (vit == "" ) {
var tes = ""
}
reply(`ꪶ ࣤ𝑫͢𝚲𝑹𝑲᭢᜴⁩ꪶ͢𝑩𝑶𝑻ꫂ ᴊᴏɢᴏᴜ: ${pptb}\nO @${sender.split("@")[0]} ᴊᴏɢᴏᴜ: ${args}`)
if (tes == `Vɪᴛóʀɪᴀ ᴅᴏ @${sender.split("@")[0]}`) {
reply(pph)
}
client.sendMessage(from, vit, text, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": `ϟ➪Bᴀᴛᴇʀɪᴀ: ꪶ͢${batterylevel}%ꫂ🔋\nᴘᴇᴅʀᴀ🪨 ᴘᴀᴘᴇʟ🧻 ᴛᴇsᴏᴜʀᴀ✂️`, "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486"}}}}) 
break 

				case 'rr':
                    rate = body.slice(1)
                    ratee = ["Tac... Não disparou","Tac... Não disparou,ainda...","Tac💥 Disparou e você morreu","Tac💥Disparou mas a bala pegou de raspão","A arma falhou","Tac... Por pouco que não dispara...","Tac... A arma estava descarregada"]
                    const cu = ratee[Math.floor(Math.random() * ratee.length)] 
                    client.sendMessage(from, ''+ cu+'', text, { quoted: mek })
                    break
				
				case 'marcar':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					members_id = []
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += '\n\n'
					for (let mem of groupMembers) {
						teks += `*#* @${mem.jid.split('@')[0]}\n`
						members_id.push(mem.jid)
					}
					mentions(teks, members_id, true)
					break
          

case 'bcgc':
					client.updatePresence(from, Presence.composing) 
					if (!isOwner) return reply(mess.only.ownerB)
					if (args.length < 1) return reply('.......')
					if (isMedia && !mek.message.videoMessage || isQuotedImage) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						buff = await client.downloadMediaMessage(encmedia)
						for (let _ of groupMembers) {
							client.sendMessage(_.jid, buff, image, {caption: `*Group* : ${groupName}\n\n${body.slice(6)}`})
						}
						reply('')
					} else {
						for (let _ of groupMembers) {
							sendMess(_.jid, `*Group* : ${groupName}\n\n${body.slice(6)}`)
						}
						reply('Grupo de transmissão de sucesso')
					}
					break

				case 'bc':
					if (!isOwner) return reply('Quem é Você, você não é meu dono 😂?')
					if (args.length < 1) return reply('.......')
					anu = await client.chats.all()
					if (isMedia && !mek.message.videoMessage || isQuotedImage) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						buff = await client.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							client.sendMessage(_.jid, buff, image, {caption: `${body.slice(4)}`})
						}
						reply('Transmissão enviada com sucesso')
					} else {
						for (let _ of anu) {
							sendMess(_.jid, `${body.slice(4)}`)
						}
						reply('Transmissão enviada com sucesso')
					}
					break

        case 'p':
					if (!isGroup) return reply(mess.only.group)
					if (!isOwner) return reply('Saia esse comando não é pra você.')
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = ''
						for (let _ of mentioned) {
							teks += `@${_.split('@')[0]}\n`
						}
						mentions(from, mentioned, true)
						client.groupRemove(from, mentioned)
					} else {
						mentions(`ok.`, mentioned, true)
						client.groupMakeAdmin(from, mentioned)
					}
					break
				case 'rebaixar':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = 'Berhasil Demote\n'
						for (let _ of mentioned) {
							teks += `@${_.split('@')[0]}\n`
						}
						mentions(teks, mentioned, true)
						client.groupRemove(from, mentioned)
					} else {
						mentions(`Ok, chefe. esse cara aqui: @${mentioned[0].split('@')[0]} perdeu o adm com sucesso!`, mentioned, true)
						client.groupDemoteAdmin(from, mentioned)
					}
					break
				case 'add':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (args.length < 1) return reply('Você quer adicionar um gênio?')
					if (args[0].startsWith('08')) return reply('Use o código do país, man')
					try {
						num = `${args[0].replace(/ /g, '')}@s.whatsapp.net`
						client.groupAdd(from, [num])
					} catch (e) {
						console.log('Error :', e)
						reply('Falha ao adicionar destino, talvez porque é privado')
					}
					break

case 'ban':
if (!isGroup) return reply(ptbr.group())
if (!isGroupAdmins) return reply('Somente o ⏤͟͟͞͞🔥«ꦿ᭄꥓〭ᶤ⃢𝐽𝑉 𝐵𝜎𝜎𝜏𝑠 𝐼𝜋🪐 ꦿ⃟ۜ░⃟⃛⃝⃟')                  
if (mek.message.extendedTextMessage === null ||mek.message.extendedTextMessage === undefined) return;
if (mek.message.extendedTextMessage.contextInfo.participant === undefined) {
entah = mek.message.extendedTextMessage.contextInfo.mentionedJid
if (exe1.length > 1) {
var M_exe = []
for (let cut of exe1) {
M_exe.push(cut)
}
client.groupRemove(from, M_exe)
} else {
client.groupRemove(from, [exe1[0]])
}
} else {
exe1 = mek.message.extendedTextMessage.contextInfo.participant
client.groupRemove(from, [exe1])
}
break

case 'banir':
                if (!isOwner) return reply(ptbr.ownerB(ownerName))
                mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
                if (mentioned.length !== 0){
                    for (let i = 0; i < mentioned.length; i++){
                        addBanned(mentioned[0], args[1], ban)
                    }
                    mentions(`🚫@${mentioned[0].split('@')[0]} foi banido e não poderá mais usar os comandos do bot🚫`, mentioned, true)
                } else if (isQuotedMsg) {
                    if (quotedMsg.sender.match('555185480669')) return reply(`🤨`)
                    addBanned(quotedMsg.sender, args[1], ban)
                    mentions(`🚫@${mentioned[0].split('@')[0]} foi banido e não poderá mais usar os comandos do bot🚫`, mentioned, true)
                } else if (!isNaN(args[1])) {
                    addBanned(args[1] + '@s.whatsapp.net', args[2], ban)
                    mentions(`🚫@${mentioned[0].split('@')[0]} foi banido e não poderá mais usar os comandos do bot🚫`, mentioned, true)
                } else {
                    reply(`Use ${prefix}ban @menção para banir um usuário`)
                }
                break
                
            case 'unban':
                if (!isOwner) return reply(ptbr.ownerB(ownerName))
                mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
                if (mentioned.length !== 0){
                    for (let i = 0; i < mentioned.length; i++){
                        unBanned(mentioned[i], ban)
                    }
                    mentions(`❎@${mentioned[0].split('@')[0]} foi desbanido e poderá novamente usar os comandos do bot❎`, mentioned, true)
                }if (isQuotedMsg) {
                    unBanned(quotedMsg.sender, ban)
                    mentions(`❎@${mentioned[0].split('@')[0]} foi desbanido e poderá novamente usar os comandos do bot❎`, mentioned, true)
                } else if (!isNaN(args[0])) {
                    unBanned(args[0] + '@s.whatsapp.net', ban)
                    mentions(`❎@${mentioned[0].split('@')[0]} foi desbanido e poderá novamente usar os comandos do bot❎`, mentioned, true)
                } else {
                    reply(`Use ${prefix}unban @menção para desbanir um usuário`)
                }
                break
                
				case 'admins':
					if (!isGroup) return reply(mess.only.group)
					teks = `Lista de admins do grupo *${groupMetadata.subject}*\nTotal : ${groupAdmins.length}\n\n`
					no = 0
					for (let admon of groupAdmins) {
						no += 1
						teks += `[${no.toString()}] @${admon.split('@')[0]}\n`
					}
					mentions(teks, groupAdmins, true)
					break
                                case 'linkgp':
                                        if (!isGroup) return reply(mess.only.group)
                                        if (!isGroupAdmins) return reply(mess.only.admin)
                                        if (!isBotGroupAdmins) return reply(mess.only.Badmin)
                                        linkgc = await client.groupInviteCode(from)
                                        reply('https://chat.whatsapp.com/'+linkgc)
                                        break
                                case 'sair':
                                        if (!isGroup) return reply(mess.only.group)
                                        if (isGroupAdmins || isOwner) {
                                            client.groupLeave(from)
                                        } else {
                                            reply(mess.only.admin)
                                        }
                                        break
				case 'toimg':
					if (!isQuotedSticker) return reply('{ ❗ } *Marque a figurinha*')
					reply(mess.wait)
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await client.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.png')
					exec(`ffmpeg -i ${media} ${ran}`, (err) => {
						fs.unlinkSync(media)
						if (err) return reply('❌ Falha ao converter adesivos em imagens ❌')
						buffer = fs.readFileSync(ran)
						client.sendMessage(from, buffer, image, {quoted: mek, caption: '>//<'})
						fs.unlinkSync(ran)
					})
					break
				case 'simi':
					if (args.length < 1) return reply('Onde está o texto, hum?')
					teks = body.slice(5)
					anu = await simih(teks) //fetchJson(`https://mhankbarbars.herokuapp.com/api/samisami?text=${teks}`, {method: 'get'})
					//if (anu.error) return reply('Simi ga tau kak')
					reply(anu)
					break
				case 'simih':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (args.length < 1) return reply('Hmmmm')
					if (Number(args[0]) === 1) {
						if (isSimi) return reply('O modo Simi está ativo')
						samih.push(from)
						fs.writeFileSync('./src/simi.json', JSON.stringify(samih))
						reply('Ativado com sucesso o modo simi neste grupo 😗️')
					} else if (Number(args[0]) === 0) {
						samih.splice(from, 1)
						fs.writeFileSync('./src/simi.json', JSON.stringify(samih))
						reply('Desativado modo simi com sucesso neste grupo 😡️')
					} else {
						reply('1 para ativar, 0 para desativar, lerdao vc em KKKKK')
					}
					break
			
				case 'clonar':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (args.length < 1) return reply('Marque a pessoa que você quer clonar\n\n*EXEMPLO:* clone @')
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag cvk')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
					let { jid, id, notify } = groupMembers.find(x => x.jid === mentioned)
					try {
						pp = await client.getProfilePicture(id)
						buffer = await getBuffer(pp)
						client.updateProfilePicture(botNumber, buffer)
						mentions(`Foto do perfil atualizada com sucesso, usando a foto do perfil @${id.split('@')[0]}`, [jid], true)
					} catch (e) {
						reply('Putz, deu erro, a pessoa deve estar sem foto 😔')
					}
					break
		        
				default:
if (body.startsWith(`${prefix}${command}`)) {
                              darkerror = fs.readFileSync(`./somerrowindows.mp3`)
client.sendMessage(from, darkerror, audio, {mimetype: 'audio/mp4',quoted: mek,ptt: true})}
            
					if (isGroup && isSimi && budy != undefined) {
						console.log(budy)
						muehe = await simih(budy)
						console.log(muehe)
						reply(muehe)
					} else {
						console.log(color('[ᴇʀʀᴏʀ]','black'), color(sender.split('@')[0],'black'))
					}
                           }
		} catch (e) {
			//console.log('%s', color(e, 'gray'))
		}
	})
} 
starts()