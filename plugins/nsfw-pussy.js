let fetch = require('node-fetch')

let handler = async (m, { conn }) => {
	let url = pussy[Math.floor(Math.random() * pussy.length)]
	conn.sendButtonImg(m.chat, url, 'DASAR SANGEAN', wm2, 'NEXT', '.pussy', m)
}
handler.command = /^(pussy)$/i
handler.tags = ['nsfw']
handler.help = ['pussy']

global.pussy =[
    "https://konachan.com/sample/cf3ff894bc6ca3d9ad74b0895415df52/Konachan.com%20-%20344645%20sample.jpg"
    "https://konachan.com/sample/9e775ffa7f367fc62ae38e568d6060ea/Konachan.com%20-%20344545%20sample.jpg"
    "https://konachan.com/sample/bc901b73e4f86b8c6372676148f76867/Konachan.com%20-%20343430%20sample.jpg"
    "https://konachan.com/image/74c6cd89359536941f7407f784b9fea9/Konachan.com%20-%20343530%20bed%20black_hair%20breasts%20brown_eyes%20censored%20fingering%20long_hair%20masturbation%20nipples%20nopan%20open_shirt%20original%20pussy%20pussy_juice%20skirt%20tagme_%28artist%29.jpg"
    "https://konachan.com/sample/89a3c9e38301d29358638b7689189a3a/Konachan.com%20-%20343419%20sample.jpg"
    "https://konachan.com/sample/2a13b2c4646b80853ad51fd65f770e48/Konachan.com%20-%20343306%20sample.jpg"
    "https://konachan.com/sample/b9d0682c79364aff6c081c7c10b8cca5/Konachan.com%20-%20343234%20sample.jpg"
    "https://konachan.com/sample/cb6bc247612d16c3f470177031fa03c5/Konachan.com%20-%20343232%20sample.jpg"
    "https://konachan.com/sample/11d01dc958cb258f541a1263885111a7/Konachan.com%20-%20343139%20sample.jpg"
    "https://konachan.com/sample/e445063fa8bc5d53417b91b5e0a2fce6/Konachan.com%20-%20343089%20sample.jpg"
    "https://konachan.com/sample/bab3c6e48cdfbe32ae1efafe2b38fdb5/Konachan.com%20-%20342825%20sample.jpg"
    "https://konachan.com/sample/e77473a16c1ca9967f40fbe3093a4613/Konachan.com%20-%20342824%20sample.jpg"
    "https://konachan.com/sample/125cc51b6c95b378eb5836c3eb3c7bd8/Konachan.com%20-%20342530%20sample.jpg"
    "https://konachan.com/sample/1b75d89d3ca6eedc8ddfcdc2837ac789/Konachan.com%20-%20342422%20sample.jpg"
    "https://konachan.com/sample/1a3e655fb624d3b3893b4dac682df99c/Konachan.com%20-%20342302%20sample.jpg"
    "https://konachan.com/sample/853f80eb36edfe02bd38d00450635844/Konachan.com%20-%20342229%20sample.jpg"
    "https://konachan.com/sample/5cea5a33da48216457f022a086d81362/Konachan.com%20-%20342107%20sample.jpg"
    "https://konachan.com/sample/757c4eda3ac33fbd2035ebce7425e0ec/Konachan.com%20-%20341860%20sample.jpg"
    "https://konachan.com/sample/96d476aab833f13d8f33de6abe8b5508/Konachan.com%20-%20341849%20sample.jpg"
    "https://konachan.com/sample/08b49fb419fc1e4d40f0243e41383b65/Konachan.com%20-%20341803%20sample.jpg"
    "https://konachan.com/sample/54b0e3c3992b1ef0395003ddbf3c2f09/Konachan.com%20-%20341800%20sample.jpg"
    "https://konachan.com/sample/a4acb7aa92a5cd059820fe8e456ae61d/Konachan.com%20-%20341786%20sample.jpg"
    "https://konachan.com/sample/8c235fdbda2fbf59d09ce82c1cc88d47/Konachan.com%20-%20341660%20sample.jpg"
    "https://konachan.com/sample/f124405d7297ac59f7de2ac276913179/Konachan.com%20-%20341519%20sample.jpg"
    "https://konachan.com/sample/c5d0155774d4b2a87b44fdf012a39543/Konachan.com%20-%20340938%20sample.jpg"
    "https://konachan.com/sample/cd13f8b04aacacc167226864ef8fe703/Konachan.com%20-%20340484%20sample.jpg"
    "https://konachan.com/sample/c5004a94b480cf31c3101e3ed9f8b810/Konachan.com%20-%20339350%20sample.jpg"
    "https://konachan.com/sample/cbd59205026377f3854eb810f267e1ce/Konachan.com%20-%20339169%20sample.jpg"
    "https://konachan.com/sample/07e1cd50b2162d55eb3717589aa83d48/Konachan.com%20-%20339170%20sample.jpg"
    "https://konachan.com/sample/534dc7f0e14bac23265096d3dc567f50/Konachan.com%20-%20339098%20sample.jpg"
    "https://konachan.com/sample/821830c15a64f21dc6ce4589d39e6b13/Konachan.com%20-%20339090%20sample.jpg"
    "https://konachan.com/sample/44b666712f20dff35a730aa59f89a300/Konachan.com%20-%20338997%20sample.jpg"
    "https://konachan.com/sample/cad6c3d46b05586120cb800fb26cfc43/Konachan.com%20-%20338880%20sample.jpg"
    "https://konachan.com/sample/de5f0517797f8cb6593d9941446d483c/Konachan.com%20-%20338043%20sample.jpg"
    "https://konachan.com/sample/ab13a1163abdaea549adf439e7c5c33e/Konachan.com%20-%20337965%20sample.jpg"
    "https://konachan.com/sample/2fa37971ca95672908e59115ca07fb3f/Konachan.com%20-%20337872%20sample.jpg"
    "https://konachan.com/sample/107cdabc600a2d45ff844af07ef404f3/Konachan.com%20-%20337607%20sample.jpg"
    "https://konachan.com/sample/547850a5dd7d89d29f0f7ec33172e124/Konachan.com%20-%20337184%20sample.jpg"
    "https://konachan.com/sample/096393835014644cc4030a1a69610da8/Konachan.com%20-%20336257%20sample.jpg"
    "https://konachan.com/sample/c3586b9ad04bc44b0a02c97cc0bb6e89/Konachan.com%20-%20336233%20sample.jpg"
    "https://konachan.com/sample/d202e6e045da3ab4bf39e44b2d198163/Konachan.com%20-%20335131%20sample.jpg"
    "https://konachan.com/sample/4bfa1990d27dd3c8be3b283a0965dc71/Konachan.com%20-%20334727%20sample.jpg"
    "https://konachan.com/sample/7bfa7a19bb3984c00d6858ee9a5e0533/Konachan.com%20-%20334641%20sample.jpg"
    "https://konachan.com/sample/ff346a70e33d504d1451aa34f7d97d93/Konachan.com%20-%20333683%20sample.jpg"
    "https://konachan.com/sample/23861c02a0f1aeb0601d9f2983cb6558/Konachan.com%20-%20333667%20sample.jpg"
    "https://konachan.com/sample/72ccd4fd6ca9aa0fdee782bff2dc8b66/Konachan.com%20-%20331737%20sample.jpg"
    "https://konachan.com/sample/a3edb9bfdc20c79c6d15694bb9f4abc3/Konachan.com%20-%20331664%20sample.jpg"
    "https://konachan.com/sample/1ed5e60b625d0f5706e0f703c4807301/Konachan.com%20-%20331016%20sample.jpg"
    "https://konachan.com/sample/c45ebdd6cccada768376edc1dbaeb494/Konachan.com%20-%20329086%20sample.jpg"
    "https://konachan.com/sample/c6f67e34c2d732b99d3bc151be05c4ce/Konachan.com%20-%20327965%20sample.jpg"
    "https://konachan.com/sample/caf6a60fbd6b38e8b18436cf2aceca73/Konachan.com%20-%20326424%20sample.jpg"
    "https://konachan.com/sample/3498fec2fca127576f1f306f104be880/Konachan.com%20-%20326664%20sample.jpg"
]
module.exports = handler
