let fetch = require('node-fetch')

let handler = async (m, { conn }) => {
	let url = pussy[Math.floor(Math.random() * pussy.length)]
	conn.sendButtonImg(m.chat, url, 'Ancrit sange', wm2, 'NEXT', '.pussy', m)
}
handler.command = /^(pussy)$/i
handler.tags = ['nsfw']
handler.help = ['pussy']
handler.premium = false

global.pussy =[
    "https://konachan.com/sample/f9fa53d9c84cb91e888ffebbaadb60dd/Konachan.com%20-%20314894%20sample.jpg",
    "https://konachan.com/sample/4eb3474d10f12495a2be3e182cbf7e01/Konachan.com%20-%20316619%20sample.jpg",
    "https://konachan.com/sample/08bb82891f6c6d0238942531c179dd69/Konachan.com%20-%20316316%20sample.jpg",
    "https://konachan.com/image/117b3b27f741563e3cc898b535a9f1fc/Konachan.com%20-%20317353%20anus%20eyepatch%20fischl_%28genshin_impact%29%20genshin_impact%20masturbation%20nipples%20nude%20pussy%20spread_pussy%20third-party_edit%20tttanggvl%20uncensored.jpg",
    "https://konachan.com/image/4b81b9d411dc35ba1e296f00054000c5/Konachan.com%20-%20317350%20barbara_%28genshin_impact%29%20censored%20genshin_impact%20long_hair%20penis%20pussy%20sex%20skirt_lift%20twintails%20vierzeck%20wink.jpg",
    "https://konachan.com/image/2e62ca6980a2c2cd77a97a7923d7de08/Konachan.com%20-%20317345%20animal_ears%20barefoot%20bell%20bow%20breasts%20brown_hair%20building%20choker%20flowers%20grass%20long_hair%20nipples%20original%20pussy%20tail%20tree%20uncensored%20yellow_eyes.jpg",
    "https://konachan.com/sample/4a0f6bb2cf85559ec865da7b2ddf2547/Konachan.com%20-%20317339%20sample.jpg",
    "https://konachan.com/sample/440a7610b93d91ab093544a89089c2e7/Konachan.com%20-%20317337%20sample.jpg",
    "https://konachan.com/sample/ea55561790e0fdc8ea63b1f54c1fbda3/Konachan.com%20-%20317328%20sample.jpg",
    "https://konachan.com/sample/8f46ff65ee4b208316a0c4bdcc989370/Konachan.com%20-%20317317%20sample.jpg",
    "https://konachan.com/sample/2b26ab530b7c6f015873004040e4ae60/Konachan.com%20-%20317285%20sample.jpg",
    "https://konachan.com/sample/e6970436ee2b650d3fcde3cb4210e6f2/Konachan.com%20-%20317290%20sample.jpg",
    "https://konachan.com/sample/e3747d62ab22fe9511124268c63be7c9/Konachan.com%20-%20317222%20sample.jpg",
    "https://konachan.com/sample/cffb8dd3fdd559af7ac39297f7cab4cc/Konachan.com%20-%20317167%20sample.jpg",
    "https://konachan.com/sample/2009598d749a5a111e61d5c65e3c757c/Konachan.com%20-%20317279%20sample.jpg",
    "https://konachan.com/sample/5c9c32ad5b7624d0c2baa8f298c31188/Konachan.com%20-%20317101%20sample.jpg",
    "https://konachan.com/sample/ba3859ae1511e240a88daccaf7a04573/Konachan.com%20-%20317063%20sample.jpg",
    "https://konachan.com/jpeg/448e0c4705f456978b5e2c901493471f/Konachan.com%20-%20316847%20cropped%20game_cg%20hentai_girl_hime%20tagme_%28artist%29%20tagme_%28character%29%20uncensored.jpg",
    "https://konachan.com/sample/36f0c0e075865ef92a4f72ca379ddcc7/Konachan.com%20-%20316955%20sample.jpg",
    "https://konachan.com/sample/747b76bfb23f7903019da58fb09bea9b/Konachan.com%20-%20316633%20sample.jpg",
    "https://konachan.com/sample/52730995ccd5136bb6c8524ab7363396/Konachan.com%20-%20316634%20sample.jpg",
    "https://konachan.com/sample/f855a318c6e1d15cf2762b075a80d36f/Konachan.com%20-%20316712%20sample.jpg",
    "https://cdn.discordapp.com/attachments/770948564947304448/770989111023894557/Hentai_nation_4.jpg",
    "https://cdn.discordapp.com/attachments/770948564947304448/770989422682439680/Hentai_nation_1.png",
    "https://cdn.discordapp.com/attachments/770948564947304448/771000755216973874/0497-1cmypx0C9hI.jpg",
    "https://cdn.discordapp.com/attachments/770948564947304448/771001007869788180/0509-zbyvCgRkuSA.jpg",
    "https://cdn.discordapp.com/attachments/770948564947304448/771001299226984469/0524-HdkO8t2f6go.jpg",
    "https://cdn.discordapp.com/attachments/770948564947304448/771001347696099421/523-C7dtJ0l-rj0.jpg",
    "https://cdn.discordapp.com/attachments/770948564947304448/771002374822297610/0608-aXFKZN-PWlU.jpg",
    "https://cdn.discordapp.com/attachments/770948564947304448/771002684639150090/0636-67wdpO6mMcc.jpg",
    "https://cdn.discordapp.com/attachments/770948564947304448/771002947240722432/0661-VwzjLvsGI7A.jpg",
    "https://cdn.discordapp.com/attachments/770948564947304448/771002955733663764/662-Yx9XfYTatZM.jpg",
    "https://cdn.discordapp.com/attachments/770948564947304448/771015583209750578/1626-H7y-au_FDqU.jpg",
    "https://cdn.discordapp.com/attachments/770948564947304448/771015701518614548/1635-U5PnTGNEoGk.jpg",
    "https://cdn.discordapp.com/attachments/770948564947304448/771016132718362664/1636-eIXD3KBhtKQ.jpg",
    "https://cdn.discordapp.com/attachments/770948564947304448/771016370569740308/1653-cIpIm5JVhAQ.jpg",
    "https://cdn.discordapp.com/attachments/770948564947304448/771017275360411668/1813-W4HozU682l8.jpg",
    "https://cdn.discordapp.com/attachments/770948564947304448/771019708522037248/Hentai_Nation_253.jpg",
    "https://cdn.discordapp.com/attachments/770948564947304448/771035044617125918/RLyUz_2OSXM.jpg",
    "https://cdn.discordapp.com/attachments/770948564947304448/771035046747308032/TEszjyDPdSw.jpg",
    "https://cdn.discordapp.com/attachments/770948564947304448/771375290500775936/Hentai_Nation_48.jpg",
    "https://cdn.discordapp.com/attachments/707201738255368194/771861611995463730/z4EdGoMSXwaMwrb6SSLu56WBCcGI7Kfk8s0L4kxgBi8.png",
    "https://cdn.discordapp.com/attachments/707201738255368194/771861644044271677/EbQUWvvWoAk90ng.png"
]
module.exports = handler