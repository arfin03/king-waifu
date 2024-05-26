// Buat Lu Yang Jual Sc Ini Yang Jujur Jangan Samp Nipu Apalagi Lari Dari Tanggung Jawab dekk minim jual 10k - 20k

//==============[ By Always Ziyo Tzy ]==========//

const fs = require('fs')
//=============[ ----- ]============//

//==========================//

// Sosial Media 
global.gr = 'https://t.me/gc_animecommunity' // gausah di ubah :v
global.wagc = "https://chat.whatsapp.com/L7pl5lRq8MbL69bohZVIsL" // yg ini silahkan ubah
global.tele = '@lordarfin' // ubah aja
global.email = 'argamingscript@gmail.com' //serah
global.region = 'indonesia' // serah
global.ownername = '𝐌𝐚𝐨𝐮 𝐀𝐫𝐟𝐢𝐧〆ᴀᴄᴍ' //ubah jadi nama mu, note tanda ' gausah di hapus!
global.owner = ['6287713626692'] // ubah aja pake nomor lu
global.wanumber = ['6287713626692'] // ketika ketik .owner
global.botname = 'Nahida - MD' //ubah jadi nama bot mu, note tanda ' gausah di hapus!
//==========================[ Masukin Apikey nya ]=======================//
global.keyopenai = '-'
//====================[ BY Hw Mods]=============================//
global.packname = 'Nahida - Arfin' // ubah aja ini nama sticker
global.author = 'Arfin Always is here !!' // ubah aja ini nama sticker
global.prefa = ['','!','.',',','🐤','🗿']
global.sessionName = 'Nahida' //Gausah Juga
global.sp = '⭔' // Gausah Juga
global.wlcm = []
global.wlcmm = []
global.anticall = false // true = auto blok kalo ad yg telfon
//=================================================//
// Batas User nya
global.limitawal = {
    premium: "Infinity",
    free: 1000
}
// taaofc
global.thum = fs.readFileSync("./basezio/image/thum.jpeg") 
global.verifsukses = fs.readFileSync ("./basezio/image/sukses.jpeg")
global.dash = fs.readFileSync("./basezio/image/dashboar.jpeg")
//=========================[ BATAS COOEG ]========================//
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})