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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_03_47_07_03_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkyLFxuICAgICAgICAyMjgsXG4gICAgICAgIDExNSxcbiAgICAgICAgNDEsXG4gICAgICAgIDIyOCxcbiAgICAgICAgNDgsXG4gICAgICAgIDY5LFxuICAgICAgICAyMzUsXG4gICAgICAgIDksXG4gICAgICAgIDQ1LFxuICAgICAgICA3NixcbiAgICAgICAgMjQ1LFxuICAgICAgICAyMyxcbiAgICAgICAgMjI3LFxuICAgICAgICAyNDEsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTk4LFxuICAgICAgICAxMixcbiAgICAgICAgNjksXG4gICAgICAgIDIwNixcbiAgICAgICAgODYsXG4gICAgICAgIDk4LFxuICAgICAgICAyLFxuICAgICAgICA3LFxuICAgICAgICAxNjAsXG4gICAgICAgIDgyLFxuICAgICAgICAxNDgsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjQzLFxuICAgICAgICAyMTcsXG4gICAgICAgIDUwLFxuICAgICAgICA4MFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzMsXG4gICAgICAgIDQ4LFxuICAgICAgICAxMzEsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTY2LFxuICAgICAgICAxNjEsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTA5LFxuICAgICAgICAxNjYsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjUsXG4gICAgICAgIDY0LFxuICAgICAgICAxODMsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTIxLFxuICAgICAgICAxMCxcbiAgICAgICAgMTI2LFxuICAgICAgICA0NSxcbiAgICAgICAgMzksXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjQ1LFxuICAgICAgICAyMDIsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTUwLFxuICAgICAgICAxNzAsXG4gICAgICAgIDY5LFxuICAgICAgICAyMTEsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTU2LFxuICAgICAgICAxMDIsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0LFxuICAgICAgICAyNSxcbiAgICAgICAgNjksXG4gICAgICAgIDcsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTU0LFxuICAgICAgICAyMjAsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTUxLFxuICAgICAgICAyNTMsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMzIsXG4gICAgICAgIDM0LFxuICAgICAgICAyMzksXG4gICAgICAgIDExNSxcbiAgICAgICAgMTc4LFxuICAgICAgICA2NSxcbiAgICAgICAgNjAsXG4gICAgICAgIDExNyxcbiAgICAgICAgNTksXG4gICAgICAgIDE3MixcbiAgICAgICAgMTk0LFxuICAgICAgICAxMTksXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTE1LFxuICAgICAgICA2NyxcbiAgICAgICAgMTgzLFxuICAgICAgICAyOCxcbiAgICAgICAgMTIzLFxuICAgICAgICAyMzQsXG4gICAgICAgIDQ2LFxuICAgICAgICAxMDFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTk5LFxuICAgICAgICAxNjcsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjA1LFxuICAgICAgICAxODAsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTUzLFxuICAgICAgICAxNzUsXG4gICAgICAgIDIxOSxcbiAgICAgICAgNzIsXG4gICAgICAgIDcsXG4gICAgICAgIDE0LFxuICAgICAgICAxNDcsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTIsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjA3LFxuICAgICAgICA1NSxcbiAgICAgICAgNTgsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTgyLFxuICAgICAgICA0MCxcbiAgICAgICAgOTgsXG4gICAgICAgIDc1LFxuICAgICAgICAxMzQsXG4gICAgICAgIDEzMixcbiAgICAgICAgNDIsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxMyxcbiAgICAgICAgODYsXG4gICAgICAgIDgwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTYsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTM5LFxuICAgICAgICA2MixcbiAgICAgICAgMzksXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTM3LFxuICAgICAgICAyNTMsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTIxLFxuICAgICAgICAyMTYsXG4gICAgICAgIDI0NixcbiAgICAgICAgNDEsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTEyLFxuICAgICAgICAyNixcbiAgICAgICAgMTY4LFxuICAgICAgICAxNzgsXG4gICAgICAgIDQzLFxuICAgICAgICAyMzUsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTI0LFxuICAgICAgICA1NyxcbiAgICAgICAgNTQsXG4gICAgICAgIDEyMixcbiAgICAgICAgNDAsXG4gICAgICAgIDU3LFxuICAgICAgICAxNDAsXG4gICAgICAgIDc2LFxuICAgICAgICA4MyxcbiAgICAgICAgMjgsXG4gICAgICAgIDEwNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDgsXG4gICAgICAgIDIzNCxcbiAgICAgICAgOTMsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTUyLFxuICAgICAgICAyMzMsXG4gICAgICAgIDI0NCxcbiAgICAgICAgODYsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTQwLFxuICAgICAgICAyMjAsXG4gICAgICAgIDE2MixcbiAgICAgICAgNjAsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTAxLFxuICAgICAgICAyMTgsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTE2LFxuICAgICAgICA1NixcbiAgICAgICAgNDksXG4gICAgICAgIDIzNixcbiAgICAgICAgMzcsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjUwLFxuICAgICAgICAxNjEsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTQwLFxuICAgICAgICAyMTEsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTcsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMzNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgNixcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgOTJcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDQyXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTE1LFxuICAgICAgICAxOTcsXG4gICAgICAgIDMyLFxuICAgICAgICAyMixcbiAgICAgICAgMTksXG4gICAgICAgIDIxLFxuICAgICAgICAzNCxcbiAgICAgICAgMTc5LFxuICAgICAgICA4MixcbiAgICAgICAgNSxcbiAgICAgICAgMTkwLFxuICAgICAgICAxMTMsXG4gICAgICAgIDE1LFxuICAgICAgICAyMixcbiAgICAgICAgMTU0LFxuICAgICAgICAxNzIsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTk2LFxuICAgICAgICA1MixcbiAgICAgICAgMTc1LFxuICAgICAgICA3OCxcbiAgICAgICAgMjI5LFxuICAgICAgICAyNixcbiAgICAgICAgMTE5LFxuICAgICAgICA5NCxcbiAgICAgICAgMTAwLFxuICAgICAgICA4MixcbiAgICAgICAgMTA4LFxuICAgICAgICAzOCxcbiAgICAgICAgNjIsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMzYsXG4gICAgICAgIDEsXG4gICAgICAgIDksXG4gICAgICAgIDY5LFxuICAgICAgICA1OCxcbiAgICAgICAgMTg2LFxuICAgICAgICAxOCxcbiAgICAgICAgMTc1LFxuICAgICAgICAxNixcbiAgICAgICAgNjgsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTg1LFxuICAgICAgICAxMTcsXG4gICAgICAgIDM3LFxuICAgICAgICA2OCxcbiAgICAgICAgMTMsXG4gICAgICAgIDcwLFxuICAgICAgICA4NCxcbiAgICAgICAgMjM4LFxuICAgICAgICAyMTQsXG4gICAgICAgIDUwLFxuICAgICAgICAxMjMsXG4gICAgICAgIDk2LFxuICAgICAgICAxMzksXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjE2LFxuICAgICAgICAxODgsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjYsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTM5LFxuICAgICAgICAzNixcbiAgICAgICAgMTM0XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAzMSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCI0eGtwU1A2VXFrNi9McE1xa1h3RWE3LzNaak5NYlBGUVJKektsUWw1azVJPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJ4VTZ2aTI1Y1NQbWp1cTd1TEY1TG5BXCIsXG4gIFwicGhvbmVJZFwiOiBcImNmMTQwMzU2LTkxNzAtNDlhYS1iMTBhLWU5NmY1NjliOTg5YlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNjgsXG4gICAgICAyMjMsXG4gICAgICAyMzUsXG4gICAgICAxMzksXG4gICAgICAxODIsXG4gICAgICAxNjMsXG4gICAgICA1LFxuICAgICAgMjIzLFxuICAgICAgODEsXG4gICAgICAzMixcbiAgICAgIDIwNCxcbiAgICAgIDEwOSxcbiAgICAgIDEyNyxcbiAgICAgIDk1LFxuICAgICAgMTU4LFxuICAgICAgNDUsXG4gICAgICAyNSxcbiAgICAgIDIxLFxuICAgICAgMTcxLFxuICAgICAgNTJcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTI1LFxuICAgICAgMTMyLFxuICAgICAgMTMsXG4gICAgICAzMyxcbiAgICAgIDcyLFxuICAgICAgMTgyLFxuICAgICAgODAsXG4gICAgICA3NyxcbiAgICAgIDE4MSxcbiAgICAgIDEyMixcbiAgICAgIDc0LFxuICAgICAgMjE0LFxuICAgICAgMjcsXG4gICAgICAyMzEsXG4gICAgICAyNDAsXG4gICAgICAzMyxcbiAgICAgIDIyNSxcbiAgICAgIDIwMSxcbiAgICAgIDEyMSxcbiAgICAgIDEwNFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJQR1lNNlhDQ1wiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0OTE2MDgzNjkxNjoxN0BzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIkZpbmFuY2VUVlwiLFxuICAgIFwibGlkXCI6IFwiMTcxMjg3OTkzNDA1NDk3OjE3QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0tmVy9kb0hFTVdUazdRR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiNmh6UlR6RGoyWm5idmVrajR6Q0pNRkR1K1k2RzRXOUkydVFvbDFLWVJUYz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJSYkY0VVo0NXZodmJsaldVNzF4S3pqcnlkdDd3NnlGNTNkaTNtMVpRVHd6OXdmc2pYSUlIQ0NQM3gyM3VmSGdwcXR3b3JUMTJoTjdHVjdUUm01L0dDUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJBWmhwUXV6VVVTUllvc0JpVkJsMGhMWThERVlJcWxESTE5eHNtZ2FaMzRvQnNqOVZJdHdJYVlDbUorcGxIQzBBZm9DTFFOZkhIcVRPc3hqZ2tOK0lnQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ5MTYwODM2OTE2OjE3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICA2OSxcbiAgICAgICAgICA1NVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzE5OTc4NDQxLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBSDQxXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFINDEuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJNOVg4WENFcVRBMEhQZ0pURjEzSnVLbkV3Y0UzczZ6SEF3ZWYzOGVvRGowPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjIwNjk4NTA5MTksXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcxOTk3ODQ0ODczNlwifSIKfQ=="  // PUT your SESSION_ID 


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
