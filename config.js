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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_18_11_08_07_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA4LFxuICAgICAgICAxNDksXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTIxLFxuICAgICAgICAxMzksXG4gICAgICAgIDUwLFxuICAgICAgICA1NCxcbiAgICAgICAgMjA2LFxuICAgICAgICAzMCxcbiAgICAgICAgMjQxLFxuICAgICAgICAyMzMsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTgzLFxuICAgICAgICAyMDYsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTkzLFxuICAgICAgICAxMjgsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTAwLFxuICAgICAgICA5NixcbiAgICAgICAgNTQsXG4gICAgICAgIDExLFxuICAgICAgICAxMTcsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjAxLFxuICAgICAgICAxNTIsXG4gICAgICAgIDEyNCxcbiAgICAgICAgODIsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjEwLFxuICAgICAgICAxNDYsXG4gICAgICAgIDExOVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOCxcbiAgICAgICAgMTc3LFxuICAgICAgICA1OCxcbiAgICAgICAgMjE3LFxuICAgICAgICA3MCxcbiAgICAgICAgMjMsXG4gICAgICAgIDMzLFxuICAgICAgICA5MyxcbiAgICAgICAgNSxcbiAgICAgICAgMjM3LFxuICAgICAgICAyMDcsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTYxLFxuICAgICAgICA3NSxcbiAgICAgICAgMTA5LFxuICAgICAgICAyMTUsXG4gICAgICAgIDI0LFxuICAgICAgICAxOTQsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTQ2LFxuICAgICAgICA0MCxcbiAgICAgICAgMTQsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTgzLFxuICAgICAgICAyNDUsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTY3LFxuICAgICAgICAxNTUsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjAxLFxuICAgICAgICAxMDQsXG4gICAgICAgIDQ0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzMixcbiAgICAgICAgMjIzLFxuICAgICAgICAyMTgsXG4gICAgICAgIDMsXG4gICAgICAgIDc5LFxuICAgICAgICAxMDMsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTY3LFxuICAgICAgICAyMzIsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjA3LFxuICAgICAgICA1MyxcbiAgICAgICAgMTIxLFxuICAgICAgICA5NSxcbiAgICAgICAgNTMsXG4gICAgICAgIDc1LFxuICAgICAgICAyNDcsXG4gICAgICAgIDEsXG4gICAgICAgIDI1MSxcbiAgICAgICAgNTIsXG4gICAgICAgIDQzLFxuICAgICAgICA4NixcbiAgICAgICAgMjExLFxuICAgICAgICA0OSxcbiAgICAgICAgMTAzLFxuICAgICAgICAxMyxcbiAgICAgICAgMjAxLFxuICAgICAgICAxMzIsXG4gICAgICAgIDMwLFxuICAgICAgICA0MCxcbiAgICAgICAgMTU0LFxuICAgICAgICA4OFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTEsXG4gICAgICAgIDEwLFxuICAgICAgICA2OSxcbiAgICAgICAgMzYsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMzQsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTI0LFxuICAgICAgICA3NSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxOTYsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTMsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTYsXG4gICAgICAgIDQxLFxuICAgICAgICAxNzcsXG4gICAgICAgIDYzLFxuICAgICAgICA3MSxcbiAgICAgICAgMjYsXG4gICAgICAgIDc0LFxuICAgICAgICA0OSxcbiAgICAgICAgMjM3LFxuICAgICAgICAxMyxcbiAgICAgICAgMzMsXG4gICAgICAgIDM1LFxuICAgICAgICAyMTgsXG4gICAgICAgIDExLFxuICAgICAgICAyMzYsXG4gICAgICAgIDk5LFxuICAgICAgICAyMzgsXG4gICAgICAgIDQ4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1NixcbiAgICAgICAgMjE2LFxuICAgICAgICAwLFxuICAgICAgICAxODQsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTE1LFxuICAgICAgICA4NyxcbiAgICAgICAgMjEwLFxuICAgICAgICAxOTQsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTU4LFxuICAgICAgICAxMzMsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjU0LFxuICAgICAgICAyNTIsXG4gICAgICAgIDg1LFxuICAgICAgICA2NyxcbiAgICAgICAgMjI0LFxuICAgICAgICA4MixcbiAgICAgICAgODAsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjU1LFxuICAgICAgICAxMDUsXG4gICAgICAgIDQzLFxuICAgICAgICAxMDMsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjQwLFxuICAgICAgICAxNDcsXG4gICAgICAgIDkyLFxuICAgICAgICAxLFxuICAgICAgICA1LFxuICAgICAgICA3NFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOSxcbiAgICAgICAgMjA5LFxuICAgICAgICAxNDgsXG4gICAgICAgIDUyLFxuICAgICAgICA1LFxuICAgICAgICAxMTUsXG4gICAgICAgIDE2LFxuICAgICAgICAxNSxcbiAgICAgICAgMTc3LFxuICAgICAgICAxOTksXG4gICAgICAgIDQxLFxuICAgICAgICA0NixcbiAgICAgICAgMTg5LFxuICAgICAgICA5NSxcbiAgICAgICAgMTE5LFxuICAgICAgICAxMzYsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTU3LFxuICAgICAgICAyNTUsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjA3LFxuICAgICAgICAxOTMsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjEsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTAxLFxuICAgICAgICAxNTIsXG4gICAgICAgIDEzNCxcbiAgICAgICAgNTUsXG4gICAgICAgIDExOCxcbiAgICAgICAgNDMsXG4gICAgICAgIDYwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDAsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMTA4XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDc2LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAxNixcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDhcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3LFxuICAgICAgICAxMTcsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjI4LFxuICAgICAgICAxNTgsXG4gICAgICAgIDk0LFxuICAgICAgICA5MCxcbiAgICAgICAgMTc5LFxuICAgICAgICAxNzAsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTEzLFxuICAgICAgICAyNDIsXG4gICAgICAgIDI5LFxuICAgICAgICAyMTYsXG4gICAgICAgIDE0NixcbiAgICAgICAgODksXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTkyLFxuICAgICAgICA1MixcbiAgICAgICAgMjE3LFxuICAgICAgICAxOTQsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTY1LFxuICAgICAgICAyMDEsXG4gICAgICAgIDc2LFxuICAgICAgICAyMzgsXG4gICAgICAgIDIwNSxcbiAgICAgICAgNSxcbiAgICAgICAgMjAzLFxuICAgICAgICAxOTgsXG4gICAgICAgIDI4LFxuICAgICAgICAyMjMsXG4gICAgICAgIDI0NixcbiAgICAgICAgOTcsXG4gICAgICAgIDUwLFxuICAgICAgICAyLFxuICAgICAgICAxMDQsXG4gICAgICAgIDI0LFxuICAgICAgICAzMyxcbiAgICAgICAgNjEsXG4gICAgICAgIDE2LFxuICAgICAgICAxODksXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTUyLFxuICAgICAgICAxMSxcbiAgICAgICAgMTg3LFxuICAgICAgICA1MixcbiAgICAgICAgMzcsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTM0LFxuICAgICAgICA4OSxcbiAgICAgICAgMTMzLFxuICAgICAgICAxMDcsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTIxLFxuICAgICAgICA5MixcbiAgICAgICAgMjI4LFxuICAgICAgICAxOTksXG4gICAgICAgIDE4NixcbiAgICAgICAgMjQyLFxuICAgICAgICAxMzIsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTE4LFxuICAgICAgICAxXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyMTUsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiU01JWTlQbzVhSElnTitackRxaUpyVUZycTVqVVo3Q3FkRVp4QjFwdmtHbz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiVEtob0taRl9SQkdrN2cxdTNObV9md1wiLFxuICBcInBob25lSWRcIjogXCIyYTNjZGY4Ny01YjQ2LTRlMjMtOTBhNC1jYzRjMWExNTM5YjFcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTU0LFxuICAgICAgMTc5LFxuICAgICAgMjA2LFxuICAgICAgOSxcbiAgICAgIDEzNSxcbiAgICAgIDE0OSxcbiAgICAgIDIyNCxcbiAgICAgIDIxLFxuICAgICAgMTI1LFxuICAgICAgMTcyLFxuICAgICAgMTM2LFxuICAgICAgNjYsXG4gICAgICAxNDAsXG4gICAgICA2NSxcbiAgICAgIDI1LFxuICAgICAgMTkwLFxuICAgICAgMTUwLFxuICAgICAgMTU5LFxuICAgICAgNjYsXG4gICAgICAyMzRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNDIsXG4gICAgICAyMzIsXG4gICAgICAyMCxcbiAgICAgIDE5OCxcbiAgICAgIDEwMyxcbiAgICAgIDQ3LFxuICAgICAgNyxcbiAgICAgIDM4LFxuICAgICAgMzAsXG4gICAgICA2MyxcbiAgICAgIDExMCxcbiAgICAgIDcsXG4gICAgICA5MCxcbiAgICAgIDE5NyxcbiAgICAgIDM5LFxuICAgICAgMjUzLFxuICAgICAgMzksXG4gICAgICAxNCxcbiAgICAgIDg4LFxuICAgICAgNDVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiRlJMTTdMODRcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDkxNjA4MzY5MTY6MzVAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJGaW5hbmNlXCIsXG4gICAgXCJsaWRcIjogXCIxNzEyODc5OTM0MDU0OTc6MzVAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSkNMeHVzR0VML3h6clVHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJITEx5NjNHaFVvQWRKVXlrVzl3TTRWOXR2NEJ4ZDBvck5JYWFMWFRuNXhBPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIjBsQXgxWUlvbmc0SW94ZXc4OG9zY1ZkekYxNVJSR2hsZlN5RlpRZHdML0ZaZEIyWkRrdE0xbkYwcXNVTHJDQlVCMUtPdSsxQ0I3SWZrSnBxY0xZY0RnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIjRGcXMwV0dVTjEwc0lla1gweGcrS3l5Q2FvN3dRTUUyTU1nU0ptOEFIOUJBN20zbjdDdVA4b0NSSUhXOWlldVJ2amdxL3YvZWVPSHdFaVVhdEpwM0R3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDkxNjA4MzY5MTY6MzVAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMTZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMzA1NDI3NVxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


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
