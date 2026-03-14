import React from 'react'
import Terminal from 'react-console-emulator'
import "./CLI.css"


const CLI = () => {

  let user = "Flash"

  let space = "         "

  const commands = {

    hello: {
      usage: 'hello',
      fn: () => 'Hello, World!'
    },

    echo: {
      usage: 'echo <text>',
      fn: (...textInfo) => textInfo.join(" ")
    },

    whoiam: {
      fn: () => user
    },

    admin: {
      fn: () => `
╔════════════════════╗
 FLASH OS - ADMIN INFO
╚════════════════════╝

👨‍💻 Developer : Flash
🎓 Role       : MERN Stack Developer
⚙️ Skills     : React | Node.js | Express | MongoDB | System Design

🚀 Current Projects
• Web OS (browser based operating system)
• WhatsApp Clone (MERN + Socket.IO)

🧠 Interests
• Backend Architecture
• Real-time Applications
• System Design

🌐 GitHub
• https://github.com/dharmapal25


`
    },

    h: {
      fn: () => 'hello - welcomeMessage \n echo - printt something \n whoiam - username \n admin - project info'
    }



  }

  return (
    <div className="CLI-div">

      <Terminal
        commands={commands}
        welcomeMessage={'Welcome to my terminal!\n h - Help'}
        promptLabel={`${user}@terminal:~$`}
      />
    </div>

  )
}

export default CLI