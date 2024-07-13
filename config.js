const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_06_31_07_13_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY4LFxuICAgICAgICAxNzQsXG4gICAgICAgIDIsXG4gICAgICAgIDQ1LFxuICAgICAgICAxNjIsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjYsXG4gICAgICAgIDExLFxuICAgICAgICAyMTIsXG4gICAgICAgIDQ4LFxuICAgICAgICAxODQsXG4gICAgICAgIDE3NSxcbiAgICAgICAgNzQsXG4gICAgICAgIDE2LFxuICAgICAgICA2NyxcbiAgICAgICAgMzgsXG4gICAgICAgIDUxLFxuICAgICAgICAyMzUsXG4gICAgICAgIDU5LFxuICAgICAgICAxMCxcbiAgICAgICAgMTIyLFxuICAgICAgICAxMCxcbiAgICAgICAgOTksXG4gICAgICAgIDMwLFxuICAgICAgICAxNixcbiAgICAgICAgNTIsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjI3LFxuICAgICAgICAxNDEsXG4gICAgICAgIDI2LFxuICAgICAgICAxMTcsXG4gICAgICAgIDEwM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTYsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTA1LFxuICAgICAgICAxNjIsXG4gICAgICAgIDM3LFxuICAgICAgICAyMjQsXG4gICAgICAgIDEwMSxcbiAgICAgICAgNTIsXG4gICAgICAgIDExNSxcbiAgICAgICAgMzEsXG4gICAgICAgIDYwLFxuICAgICAgICAyMjMsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTA0LFxuICAgICAgICA2OCxcbiAgICAgICAgMzMsXG4gICAgICAgIDg3LFxuICAgICAgICAxOTksXG4gICAgICAgIDE4OCxcbiAgICAgICAgNjAsXG4gICAgICAgIDIwNyxcbiAgICAgICAgNTYsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTUsXG4gICAgICAgIDMwLFxuICAgICAgICAxMTAsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTM0LFxuICAgICAgICA2NCxcbiAgICAgICAgMTA3LFxuICAgICAgICAxNzIsXG4gICAgICAgIDIzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjgsXG4gICAgICAgIDM0LFxuICAgICAgICAxOTUsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjUyLFxuICAgICAgICAyNDEsXG4gICAgICAgIDM4LFxuICAgICAgICAxNjMsXG4gICAgICAgIDU0LFxuICAgICAgICAyMjcsXG4gICAgICAgIDEyNSxcbiAgICAgICAgNTMsXG4gICAgICAgIDM1LFxuICAgICAgICA4NyxcbiAgICAgICAgMjMyLFxuICAgICAgICAyMjgsXG4gICAgICAgIDU1LFxuICAgICAgICA0MixcbiAgICAgICAgMjA5LFxuICAgICAgICAyMzYsXG4gICAgICAgIDQ1LFxuICAgICAgICAyMjYsXG4gICAgICAgIDIxMixcbiAgICAgICAgMzUsXG4gICAgICAgIDIzNSxcbiAgICAgICAgNDYsXG4gICAgICAgIDIwMCxcbiAgICAgICAgNjQsXG4gICAgICAgIDc5LFxuICAgICAgICAxNSxcbiAgICAgICAgMTE3LFxuICAgICAgICA5MlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0MCxcbiAgICAgICAgMTQxLFxuICAgICAgICAxODQsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTA1LFxuICAgICAgICAxNTMsXG4gICAgICAgIDE3OSxcbiAgICAgICAgNzIsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjQyLFxuICAgICAgICAxNzksXG4gICAgICAgIDExNSxcbiAgICAgICAgMjIwLFxuICAgICAgICA0NixcbiAgICAgICAgMjI0LFxuICAgICAgICAxODUsXG4gICAgICAgIDMwLFxuICAgICAgICAyMDQsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTA5LFxuICAgICAgICA5OCxcbiAgICAgICAgMTU5LFxuICAgICAgICAyMixcbiAgICAgICAgMTg1LFxuICAgICAgICA4NSxcbiAgICAgICAgOTUsXG4gICAgICAgIDY5LFxuICAgICAgICAxNjUsXG4gICAgICAgIDM2LFxuICAgICAgICAyMzQsXG4gICAgICAgIDE0OCxcbiAgICAgICAgNjNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDgwLFxuICAgICAgICA3NyxcbiAgICAgICAgMTU2LFxuICAgICAgICA4NCxcbiAgICAgICAgMjExLFxuICAgICAgICAxODcsXG4gICAgICAgIDE4MSxcbiAgICAgICAgNTIsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTA3LFxuICAgICAgICA0LFxuICAgICAgICAyMDMsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTUwLFxuICAgICAgICAxNDksXG4gICAgICAgIDI0NSxcbiAgICAgICAgMzcsXG4gICAgICAgIDksXG4gICAgICAgIDkzLFxuICAgICAgICA5MSxcbiAgICAgICAgMixcbiAgICAgICAgMTc2LFxuICAgICAgICAxMTEsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTE2LFxuICAgICAgICAxODAsXG4gICAgICAgIDE1NixcbiAgICAgICAgODcsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTA1LFxuICAgICAgICAyMTIsXG4gICAgICAgIDY2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTAzLFxuICAgICAgICA4MixcbiAgICAgICAgMjI2LFxuICAgICAgICA2MSxcbiAgICAgICAgMCxcbiAgICAgICAgMTI0LFxuICAgICAgICAxNSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxNDUsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTE4LFxuICAgICAgICAzMSxcbiAgICAgICAgMTg1LFxuICAgICAgICAzNyxcbiAgICAgICAgOTQsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTExLFxuICAgICAgICAxODUsXG4gICAgICAgIDc0LFxuICAgICAgICAxMDcsXG4gICAgICAgIDE4OCxcbiAgICAgICAgNSxcbiAgICAgICAgMTc4LFxuICAgICAgICAxMyxcbiAgICAgICAgNDIsXG4gICAgICAgIDEwMCxcbiAgICAgICAgNDIsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjMsXG4gICAgICAgIDk3LFxuICAgICAgICAxNFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgNixcbiAgICAgICAgICA4MixcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDk5XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDM3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjEwLFxuICAgICAgICAzMSxcbiAgICAgICAgMjM3LFxuICAgICAgICAxNTgsXG4gICAgICAgIDczLFxuICAgICAgICA2NixcbiAgICAgICAgMjUsXG4gICAgICAgIDc2LFxuICAgICAgICAxMCxcbiAgICAgICAgMTc1LFxuICAgICAgICAyNTIsXG4gICAgICAgIDc3LFxuICAgICAgICA0NyxcbiAgICAgICAgMTI0LFxuICAgICAgICAxNjEsXG4gICAgICAgIDE0LFxuICAgICAgICAyNDUsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTEsXG4gICAgICAgIDEwMyxcbiAgICAgICAgNTcsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTc2LFxuICAgICAgICAxNjUsXG4gICAgICAgIDU0LFxuICAgICAgICA4NCxcbiAgICAgICAgMjAzLFxuICAgICAgICAyMzgsXG4gICAgICAgIDYsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMzgsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTEwLFxuICAgICAgICAzOCxcbiAgICAgICAgMzMsXG4gICAgICAgIDE0NSxcbiAgICAgICAgNDEsXG4gICAgICAgIDE2NSxcbiAgICAgICAgOCxcbiAgICAgICAgMjAyLFxuICAgICAgICAxNDMsXG4gICAgICAgIDU0LFxuICAgICAgICAxODksXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTY0LFxuICAgICAgICAxMjQsXG4gICAgICAgIDkyLFxuICAgICAgICAxODAsXG4gICAgICAgIDg1LFxuICAgICAgICAyMDYsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjQ1LFxuICAgICAgICAyMzgsXG4gICAgICAgIDY4LFxuICAgICAgICAyMTcsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTA3LFxuICAgICAgICA4NyxcbiAgICAgICAgOTksXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTk4LFxuICAgICAgICAyMzksXG4gICAgICAgIDEyOCxcbiAgICAgICAgMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjA2LFxuICBcImFkdlNlY3JldEtleVwiOiBcIk5mTkJaVzI2dm9Ldjcyb3FMSytjL1N4SStpSFVNV3FVTmZTNkRaSWtKbWM9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjM0ODE0MzUxMTYzN0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiMzdEQUY2QzRBQjk3MEEyRThERDBDNzUxODQyMzNBQ0JcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIwODUyMzE1XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcImVCUkE0SFBiVG5XV3hKeGh6UEVpendcIixcbiAgXCJwaG9uZUlkXCI6IFwiNTk2NDJjMDQtODE5ZC00Y2NhLTkyNzItMGNlNDdmYmMzNTRjXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIxMSxcbiAgICAgIDEyOCxcbiAgICAgIDI0NixcbiAgICAgIDI2LFxuICAgICAgMTg1LFxuICAgICAgMjA2LFxuICAgICAgMjQxLFxuICAgICAgNjEsXG4gICAgICAzMyxcbiAgICAgIDgxLFxuICAgICAgOCxcbiAgICAgIDI0OCxcbiAgICAgIDIwOSxcbiAgICAgIDExOCxcbiAgICAgIDY2LFxuICAgICAgMjQ2LFxuICAgICAgMTQyLFxuICAgICAgMTkyLFxuICAgICAgMjQsXG4gICAgICAxNzJcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNjgsXG4gICAgICAyLFxuICAgICAgMjEwLFxuICAgICAgNjQsXG4gICAgICAyMDcsXG4gICAgICA3NSxcbiAgICAgIDIxNyxcbiAgICAgIDI0MixcbiAgICAgIDIxNCxcbiAgICAgIDE3OSxcbiAgICAgIDM3LFxuICAgICAgMTksXG4gICAgICAxMzksXG4gICAgICA4NyxcbiAgICAgIDE5MyxcbiAgICAgIDQ5LFxuICAgICAgMTA5LFxuICAgICAgMTYzLFxuICAgICAgMTcyLFxuICAgICAgMTYyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlRWWVI0UkpIXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ4MTQzNTExNjM3OjNAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjI2NTE4ODkxMzcxMzMwNDozQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ09UajZyRUZFTkcreUxRR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiNWw3RGQyZDRjY2dzTGVpYk1CWTJJU1RkZHUzQURoVG9rZXZqZDdaT0NHMD1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJKenYrZE5abEJHZTRyZjM4N212NDRXVUNESGtVL3FDWkNjNldIVFh1cVVTOHVvVzdIMFkyNkg1a0xTb1NTMm1tdHpEVUIzTTJVMTFXSXBtVTloeUVCdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJNUGxTcDlXSGhKdXY5Q3NDTVZOd1QxM29TczZKOWJ1QjhFNkJuSitGNFV3d0VjZWFIUG5raWtPelZ3Um80NXhkdWFFSDRlazJMakhzZ0Z1T0QvQmRDZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ4MTQzNTExNjM3OjNAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAyMixcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAxMDlcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMDg1MjMwOCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUtFTlwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBS0VOLmpzb24iOiAie1wia2V5RGF0YVwiOlwibXB5WFlzZ051djhZQVlxMUxuQ09WVllXTDlydSt5d1BRbTdBSE9iYTJZMD1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxNDQ2Njg3MjA0LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjA4NTIzMTMzNzVcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


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
