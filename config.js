const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="sylivanusmomanyi@gmail.com"
global.location="Kisii,Kenya."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "120363180849475037@g.us"
global.DATABASE_URL = process.env.DATABASE_URL || "postgres://u4orkeulqa5b9m:pc90e97423c91d1aa0a9e1722ec790b8d753d1948a04d49e6e9da45f0ca6f40a0@ceqbglof0h8enj.cluster-czrs8kj4isg7.us-east-1.rds.amazonaws.com:5432/d1cogn2pmpblbr"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Africa/Nairobi";
global.github=process.env.GITHUB|| "https://github.com/SilvaTechB/silva-md-bot";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VaAkETLLY6d8qhLmZt2v";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VaAkETLLY6d8qhLmZt2v" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/751eef74109e0e5c8916c.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "𝑺𝒊𝒍𝒗𝒂 𝒕𝒆𝒄𝒉-ᴍᴅ" 


global.devs = "254700143167" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "254743706010";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "254743706010";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '1'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "true"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,254xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,254xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "254700143167, 254743706010";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://silvatech.vercel.app";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_08_57_07_11_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAwLFxuICAgICAgICA2OSxcbiAgICAgICAgOTMsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxNDEsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMzQsXG4gICAgICAgIDI0NyxcbiAgICAgICAgNTMsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAyMzQsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTEwLFxuICAgICAgICAzLFxuICAgICAgICAxNzgsXG4gICAgICAgIDI1MSxcbiAgICAgICAgNDQsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjUyLFxuICAgICAgICAyMTQsXG4gICAgICAgIDE0NyxcbiAgICAgICAgNDEsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTE1LFxuICAgICAgICAyMzEsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjE0LFxuICAgICAgICA5NCxcbiAgICAgICAgMjI2LFxuICAgICAgICA4OVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjIsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjIyLFxuICAgICAgICAxMzMsXG4gICAgICAgIDMsXG4gICAgICAgIDM4LFxuICAgICAgICA1MyxcbiAgICAgICAgMjE3LFxuICAgICAgICAxMCxcbiAgICAgICAgMTM3LFxuICAgICAgICAyMTYsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTk0LFxuICAgICAgICAxNTQsXG4gICAgICAgIDc2LFxuICAgICAgICAxODMsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjUxLFxuICAgICAgICA3NixcbiAgICAgICAgMzUsXG4gICAgICAgIDkwLFxuICAgICAgICA3OCxcbiAgICAgICAgNzQsXG4gICAgICAgIDIxOSxcbiAgICAgICAgOTAsXG4gICAgICAgIDE2LFxuICAgICAgICAzMCxcbiAgICAgICAgNDUsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjU0LFxuICAgICAgICA5OSxcbiAgICAgICAgMTE1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTIsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTUwLFxuICAgICAgICAxMjcsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTQzLFxuICAgICAgICAyMDgsXG4gICAgICAgIDI3LFxuICAgICAgICAxMDMsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTQwLFxuICAgICAgICAyMSxcbiAgICAgICAgMTI4LFxuICAgICAgICA2NCxcbiAgICAgICAgMTIxLFxuICAgICAgICAxNDksXG4gICAgICAgIDExNixcbiAgICAgICAgMTQ0LFxuICAgICAgICA2OSxcbiAgICAgICAgMjMwLFxuICAgICAgICA2NixcbiAgICAgICAgMTI4LFxuICAgICAgICA1OSxcbiAgICAgICAgMzEsXG4gICAgICAgIDk5LFxuICAgICAgICAyMjksXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTcyLFxuICAgICAgICAyOCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAyMzgsXG4gICAgICAgIDk1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjMxLFxuICAgICAgICA5OCxcbiAgICAgICAgMjA3LFxuICAgICAgICAxNCxcbiAgICAgICAgNTksXG4gICAgICAgIDEyLFxuICAgICAgICAxMzYsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjksXG4gICAgICAgIDE5MyxcbiAgICAgICAgOCxcbiAgICAgICAgMjA1LFxuICAgICAgICA5OCxcbiAgICAgICAgMTE2LFxuICAgICAgICA3MyxcbiAgICAgICAgMyxcbiAgICAgICAgNDYsXG4gICAgICAgIDgwLFxuICAgICAgICAyMDcsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjE0LFxuICAgICAgICA0MSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAyMjAsXG4gICAgICAgIDEzMSxcbiAgICAgICAgNzgsXG4gICAgICAgIDQ3LFxuICAgICAgICAyMzUsXG4gICAgICAgIDIxOCxcbiAgICAgICAgNzUsXG4gICAgICAgIDIwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4OCxcbiAgICAgICAgMjUsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTUwLFxuICAgICAgICA3MSxcbiAgICAgICAgMTYyLFxuICAgICAgICAxNTYsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTA2LFxuICAgICAgICAxNDYsXG4gICAgICAgIDM1LFxuICAgICAgICAxOTUsXG4gICAgICAgIDE5OCxcbiAgICAgICAgNzksXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjM3LFxuICAgICAgICAxMzAsXG4gICAgICAgIDksXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTM0LFxuICAgICAgICAxMDQsXG4gICAgICAgIDIyMSxcbiAgICAgICAgNCxcbiAgICAgICAgOTAsXG4gICAgICAgIDcwLFxuICAgICAgICA0MyxcbiAgICAgICAgMTYwLFxuICAgICAgICAzNixcbiAgICAgICAgNTAsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTA2LFxuICAgICAgICAxMTRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzMsXG4gICAgICAgIDIxLFxuICAgICAgICAxNCxcbiAgICAgICAgODksXG4gICAgICAgIDcwLFxuICAgICAgICA3NSxcbiAgICAgICAgMjEsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTIwLFxuICAgICAgICAyMzYsXG4gICAgICAgIDMzLFxuICAgICAgICAxOSxcbiAgICAgICAgMTUyLFxuICAgICAgICAxODMsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTY3LFxuICAgICAgICAxMDcsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTQyLFxuICAgICAgICAyMzQsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjIyLFxuICAgICAgICA0MixcbiAgICAgICAgMTY2LFxuICAgICAgICAxNDksXG4gICAgICAgIDEwMixcbiAgICAgICAgMTg1LFxuICAgICAgICAxMDgsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjAxLFxuICAgICAgICA0MixcbiAgICAgICAgOFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA5NixcbiAgICAgICAgICA0NixcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMTIyXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDk5LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAxOVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0NSxcbiAgICAgICAgNDcsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjA3LFxuICAgICAgICAyOSxcbiAgICAgICAgMzEsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjAwLFxuICAgICAgICAxMDYsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTA5LFxuICAgICAgICAxNjgsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTM4LFxuICAgICAgICAyNixcbiAgICAgICAgMTQ5LFxuICAgICAgICAxMDUsXG4gICAgICAgIDksXG4gICAgICAgIDUxLFxuICAgICAgICA0MSxcbiAgICAgICAgMTY4LFxuICAgICAgICAxMzAsXG4gICAgICAgIDYsXG4gICAgICAgIDYxLFxuICAgICAgICA4MCxcbiAgICAgICAgNTIsXG4gICAgICAgIDMyLFxuICAgICAgICAxODMsXG4gICAgICAgIDIwNSxcbiAgICAgICAgNjUsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjksXG4gICAgICAgIDE3MixcbiAgICAgICAgMTQxLFxuICAgICAgICA4OCxcbiAgICAgICAgNjksXG4gICAgICAgIDMxLFxuICAgICAgICA0MSxcbiAgICAgICAgMjAwLFxuICAgICAgICAxNzcsXG4gICAgICAgIDExMixcbiAgICAgICAgMTUxLFxuICAgICAgICAyMzcsXG4gICAgICAgIDExLFxuICAgICAgICAxNzQsXG4gICAgICAgIDM1LFxuICAgICAgICAyMzMsXG4gICAgICAgIDE0LFxuICAgICAgICAxMTcsXG4gICAgICAgIDEzMixcbiAgICAgICAgNzYsXG4gICAgICAgIDI0OSxcbiAgICAgICAgNzksXG4gICAgICAgIDc4LFxuICAgICAgICAxOTMsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTAsXG4gICAgICAgIDQ2LFxuICAgICAgICAxMDAsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjE1LFxuICAgICAgICA5MCxcbiAgICAgICAgMTA4LFxuICAgICAgICAwXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxMjcsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiYjNGalZDU2lOQnN1eko5MVZ6bis2ODRNd3krUVZVNUQ4djhhK0ltKzVWWT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiZjBzcG9PZWVRX0tJNXJjSEtiRDkzd1wiLFxuICBcInBob25lSWRcIjogXCJhYjI2NjcwMS03NWZhLTRkNTEtOTc4Yi0zZDRjYjU5ZjQyNDVcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMzcsXG4gICAgICA3MSxcbiAgICAgIDgwLFxuICAgICAgMTM2LFxuICAgICAgMTEwLFxuICAgICAgMjUyLFxuICAgICAgMTc1LFxuICAgICAgMTA4LFxuICAgICAgMTI4LFxuICAgICAgMzcsXG4gICAgICAyMCxcbiAgICAgIDk0LFxuICAgICAgMjgsXG4gICAgICA2MCxcbiAgICAgIDc3LFxuICAgICAgMjQ3LFxuICAgICAgMTQsXG4gICAgICAxMjYsXG4gICAgICAxOTcsXG4gICAgICAxNTVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNDYsXG4gICAgICA1NCxcbiAgICAgIDEwLFxuICAgICAgMjA2LFxuICAgICAgNDEsXG4gICAgICAxMDMsXG4gICAgICAxODIsXG4gICAgICAxMDksXG4gICAgICAyOSxcbiAgICAgIDkyLFxuICAgICAgOTgsXG4gICAgICAyMjIsXG4gICAgICAxMTksXG4gICAgICA3NixcbiAgICAgIDEyLFxuICAgICAgODgsXG4gICAgICAxNzIsXG4gICAgICAxOTIsXG4gICAgICAxMjIsXG4gICAgICAyMTRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiTkFOVDZEN05cIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI1NDcyNDQwOTg5NDoxNUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMjIzMzk4ODY1MTY2NDUwOjE1QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ08vTTZmZ0VFSXE5dnJRR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwic3o5QlBwYjZnZGhWQXpHdkcrczhPb0wvVEFiR2RZM1BOcDFvdVpSNGNsdz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJpNHFhMWZxLzkyaFBUZnVETEsrSlYzSkcxSXFuMnp2L3dFVzU5YlhYNTI2a093aEh4VmFreVdZRnlteGRwN3J4TmRIZFUvZmpDM1d3ckZTTk5FU2xBZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCIxUHZ6ZHVwTGJ0YWJRay8rZUtMWitmYTFyc2V5emsyVFNTLzNHMUJvaUo0YjFzVWFMOWpIb1crVHNGT1RETysyUG5HRGhaZkU0Rm1VN1hKRjA4WFpEZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyNTQ3MjQ0MDk4OTQ6MTVAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDMsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDkyXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjA2ODgyNjlcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktdW5kZWZpbmVkLmpzb24iOiB7fQp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "1", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.9",
  caption : global.caption || "『 𝑺𝒊𝒍𝒗𝒂 𝒕𝒆𝒄𝒉-ᴍᴅ 』" , // ```『 𝑺𝒊𝒍𝒗𝒂 𝒕𝒆𝒄𝒉-ᴍᴅ 』```", //*『𝑺𝒊𝒍𝒗𝒂 𝒕𝒆𝒄𝒉』*\n tiktok.com/@silva.edits6"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "𝑺𝒊𝒍𝒗𝒂 𝒕𝒆𝒄𝒉-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "𝑺𝒊𝒍𝒗𝒂 𝒕𝒆𝒄𝒉",


  errorChat : process.env.ERROR_CHAT || "254700143167",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "SILVA"  ).toUpperCase(),



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
