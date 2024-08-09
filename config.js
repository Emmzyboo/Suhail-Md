const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="ezeanyimonyeka@gmail.com"
global.location="Lagos,Nigeria"


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349160836916";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "true";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_12_19_08_09_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI4LFxuICAgICAgICAxMzksXG4gICAgICAgIDQ0LFxuICAgICAgICA5LFxuICAgICAgICAyMzMsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMzQsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjAsXG4gICAgICAgIDI0LFxuICAgICAgICA1NyxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxNjgsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjQxLFxuICAgICAgICA2OCxcbiAgICAgICAgMTAyLFxuICAgICAgICA5MSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxMzQsXG4gICAgICAgIDIwLFxuICAgICAgICAxNzgsXG4gICAgICAgIDY0LFxuICAgICAgICAyMzEsXG4gICAgICAgIDI5LFxuICAgICAgICA5NCxcbiAgICAgICAgNDYsXG4gICAgICAgIDIyNCxcbiAgICAgICAgNDQsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTE0LFxuICAgICAgICA2NlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjQsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMzIsXG4gICAgICAgIDIxLFxuICAgICAgICAyMzksXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTg1LFxuICAgICAgICAxNDQsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTU4LFxuICAgICAgICAzNCxcbiAgICAgICAgOTYsXG4gICAgICAgIDE3MCxcbiAgICAgICAgODYsXG4gICAgICAgIDI0OSxcbiAgICAgICAgNzMsXG4gICAgICAgIDgyLFxuICAgICAgICAzMCxcbiAgICAgICAgMjUzLFxuICAgICAgICAyMzQsXG4gICAgICAgIDEyLFxuICAgICAgICAzLFxuICAgICAgICA3NyxcbiAgICAgICAgMTQ3LFxuICAgICAgICAyMzYsXG4gICAgICAgIDkzLFxuICAgICAgICAxODEsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTMwLFxuICAgICAgICA0MixcbiAgICAgICAgMjMwLFxuICAgICAgICAxNlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMCxcbiAgICAgICAgMjE2LFxuICAgICAgICAxNDksXG4gICAgICAgIDExMyxcbiAgICAgICAgMjE2LFxuICAgICAgICAzOCxcbiAgICAgICAgMjEsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTg5LFxuICAgICAgICAyNDEsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTQsXG4gICAgICAgIDE4LFxuICAgICAgICA5NyxcbiAgICAgICAgMzAsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjM5LFxuICAgICAgICA4MSxcbiAgICAgICAgODgsXG4gICAgICAgIDIyMSxcbiAgICAgICAgNTcsXG4gICAgICAgIDIyOCxcbiAgICAgICAgNzksXG4gICAgICAgIDIzMixcbiAgICAgICAgMCxcbiAgICAgICAgMTUyLFxuICAgICAgICAxNTgsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTU5LFxuICAgICAgICA2NSxcbiAgICAgICAgMjA5LFxuICAgICAgICA3MFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTEsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTg5LFxuICAgICAgICA1NSxcbiAgICAgICAgMTAwLFxuICAgICAgICAxOTgsXG4gICAgICAgIDk4LFxuICAgICAgICA3MixcbiAgICAgICAgMjE5LFxuICAgICAgICA1MSxcbiAgICAgICAgMTQzLFxuICAgICAgICAyMCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAyMjIsXG4gICAgICAgIDE0NSxcbiAgICAgICAgNjYsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjI3LFxuICAgICAgICAxOTksXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTE5LFxuICAgICAgICAyMjYsXG4gICAgICAgIDk2LFxuICAgICAgICA1NyxcbiAgICAgICAgMjI4LFxuICAgICAgICAxNCxcbiAgICAgICAgNzksXG4gICAgICAgIDIwOSxcbiAgICAgICAgMzgsXG4gICAgICAgIDg1LFxuICAgICAgICA3MyxcbiAgICAgICAgMjZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyNCxcbiAgICAgICAgOTksXG4gICAgICAgIDIxNixcbiAgICAgICAgMTA1LFxuICAgICAgICAzMSxcbiAgICAgICAgODMsXG4gICAgICAgIDY1LFxuICAgICAgICA5MCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxMzMsXG4gICAgICAgIDcwLFxuICAgICAgICAxMDEsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTYxLFxuICAgICAgICAyNDQsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTkyLFxuICAgICAgICAxNjcsXG4gICAgICAgIDc4LFxuICAgICAgICAxMDAsXG4gICAgICAgIDU1LFxuICAgICAgICAyMTcsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTkzLFxuICAgICAgICA4MyxcbiAgICAgICAgMTU4LFxuICAgICAgICAzNCxcbiAgICAgICAgMTA3LFxuICAgICAgICAzNixcbiAgICAgICAgMTQ2LFxuICAgICAgICAxNCxcbiAgICAgICAgNzFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM1LFxuICAgICAgICAyOSxcbiAgICAgICAgNTYsXG4gICAgICAgIDY0LFxuICAgICAgICA0NixcbiAgICAgICAgNjAsXG4gICAgICAgIDIzOSxcbiAgICAgICAgODIsXG4gICAgICAgIDE1MyxcbiAgICAgICAgNzcsXG4gICAgICAgIDYyLFxuICAgICAgICA5MSxcbiAgICAgICAgMTkwLFxuICAgICAgICAxNzQsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTMsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTcsXG4gICAgICAgIDE0LFxuICAgICAgICAyMTMsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTQsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTc5LFxuICAgICAgICAxMTAsXG4gICAgICAgIDE5NSxcbiAgICAgICAgODYsXG4gICAgICAgIDMzLFxuICAgICAgICAxNjIsXG4gICAgICAgIDEzMCxcbiAgICAgICAgNzQsXG4gICAgICAgIDMzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICA5MixcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgOTVcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDYsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICA4MixcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgNyxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDEyNFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3MixcbiAgICAgICAgMjM0LFxuICAgICAgICAyNDIsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTgxLFxuICAgICAgICAyMTUsXG4gICAgICAgIDcyLFxuICAgICAgICAxNjEsXG4gICAgICAgIDgyLFxuICAgICAgICAxMDksXG4gICAgICAgIDY5LFxuICAgICAgICAxNjUsXG4gICAgICAgIDQxLFxuICAgICAgICAxNDYsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjE2LFxuICAgICAgICAxNTQsXG4gICAgICAgIDIzLFxuICAgICAgICAxMzUsXG4gICAgICAgIDc0LFxuICAgICAgICAzMCxcbiAgICAgICAgMjAzLFxuICAgICAgICAxOTUsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAyMTYsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTY2LFxuICAgICAgICAxNTEsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTk0LFxuICAgICAgICAxMzEsXG4gICAgICAgIDIwLFxuICAgICAgICAyMzUsXG4gICAgICAgIDM3LFxuICAgICAgICAxOTcsXG4gICAgICAgIDEzNyxcbiAgICAgICAgNSxcbiAgICAgICAgMTIsXG4gICAgICAgIDE2OCxcbiAgICAgICAgOTYsXG4gICAgICAgIDk3LFxuICAgICAgICAyNCxcbiAgICAgICAgODAsXG4gICAgICAgIDk4LFxuICAgICAgICA3OSxcbiAgICAgICAgNSxcbiAgICAgICAgMTAsXG4gICAgICAgIDcxLFxuICAgICAgICAzMyxcbiAgICAgICAgMTc0LFxuICAgICAgICA1MSxcbiAgICAgICAgMTQzLFxuICAgICAgICA0NCxcbiAgICAgICAgODAsXG4gICAgICAgIDExMyxcbiAgICAgICAgNzksXG4gICAgICAgIDQ3LFxuICAgICAgICAyMDgsXG4gICAgICAgIDY0LFxuICAgICAgICA5NSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxODAsXG4gICAgICAgIDEzM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTI2LFxuICBcImFkdlNlY3JldEtleVwiOiBcImNsanpwZHZ5VjdnQThWVFl6Rk82Qlpwd1JmS2FIT244NVFMMk1xV1Q2S289XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjM0OTAxNjIzMjk0M0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiOURDN0U2OEFBQzk0MUYxQzczM0Y0MTFGQzQ4NkIyQURcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIzMjA1OTc3XG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjM0OTAxNjIzMjk0M0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiMUM5ODMwMUNDNzZDODFDMTREMjA5ODAyRDlGN0EwMDVcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIzMjA1OTc3XG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjM0OTAxNjIzMjk0M0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiRTJCMjc0RUM1MzEzMkU0QkVCMURBRTdBNEM3NjREMTJcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIzMjA1OTgwXG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIks4UTFOdUVnUnpxWkRCQl82RThIVndcIixcbiAgXCJwaG9uZUlkXCI6IFwiYWEwMDNiMDctZDlkZi00MDgxLWI3N2YtNmU2OTM2MTJkNjFiXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDM3LFxuICAgICAgMzUsXG4gICAgICAzMSxcbiAgICAgIDIxOSxcbiAgICAgIDExNSxcbiAgICAgIDExMixcbiAgICAgIDY2LFxuICAgICAgMTUzLFxuICAgICAgOTgsXG4gICAgICA4OCxcbiAgICAgIDg0LFxuICAgICAgMTk5LFxuICAgICAgNzAsXG4gICAgICA5OCxcbiAgICAgIDE0MCxcbiAgICAgIDIwNCxcbiAgICAgIDIyOSxcbiAgICAgIDI2LFxuICAgICAgOTcsXG4gICAgICAyMjRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjI5LFxuICAgICAgMTc1LFxuICAgICAgMjM4LFxuICAgICAgMjQ4LFxuICAgICAgODMsXG4gICAgICAyMSxcbiAgICAgIDYzLFxuICAgICAgMjQsXG4gICAgICA0MCxcbiAgICAgIDEyNyxcbiAgICAgIDE5MyxcbiAgICAgIDE2MSxcbiAgICAgIDI0MyxcbiAgICAgIDIyNyxcbiAgICAgIDE3LFxuICAgICAgMzUsXG4gICAgICA1MCxcbiAgICAgIDEzLFxuICAgICAgMTk4LFxuICAgICAgMTc4XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIksySzhYTjQ1XCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ5MDE2MjMyOTQzOjFAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjk5MjYxNTc2NDAwOTgxOjFAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSTZRaTc0Q0VOR1MyTFVHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJQajFSKzBhSTVNOG90RjFrdncrZnZqWE9abEVjUExZNW9La3haTVlOYzFRPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIkJXYjlNZ0VuUEFqUEV0WDZtWkJzbUNReTA0amhwejE5c3BrYkVKa1FxQWE5T1U2dHB1dEhPWWxxenV3amNHQXl6MU5aVmVuZFJJVDcxbjhYUUs4c0NnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcImcyNlRxLzNCc2drZ09aaldRR1lZVmtFTW5EMGZST3ltRHYwdU0vZ2JhRHBKVFZ1eC9qRVFhVnJTYkprN1dWdTYzd1ZnQ09rVDNZMHlCVnFaakxweGp3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDkwMTYyMzI5NDM6MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgODRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMzIwNTk3MixcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUZVaFwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBRlVoLmpzb24iOiAie1wia2V5RGF0YVwiOlwiclc4VzJiWnEzSTlvWGx0UlA1KzVCbDhCZWtIL0xtUUpVWG92OSt2U09TWT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo2NjcwNzY2MjIsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcyMzIwNTk3NzUxOVwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "FINANCETVBOT",
  ownername:process.env.OWNER_NAME|| "Finance TV",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
