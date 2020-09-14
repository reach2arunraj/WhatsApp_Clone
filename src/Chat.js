import React, {useState} from 'react'
import "./Chat.css"
import { Avatar,IconButton } from "@material-ui/core"
import { SearchOutlined,MoreVert, AttachFile } from "@material-ui/icons";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon"
import MicIcon from "@material-ui/icons/Mic"
import axios from "./axios"

function Chat({ messages }) {

  const [ input, setInput ] = useState("")

  const sendMessage = async (e) =>{
    e.preventDefault();
    await axios.post("/messages/new", {
      "message": input,
      "name":"Demo App",
      "timestamp":"Just Now",
      "received": false
    });
    setInput("");
  }

    return (
        <div className="chat">
          <div className="chat__header">
            <Avatar />
            <div className="chat__headerInfo">
              <h3>Room Name</h3>
              <p>Last Seen at...</p>
            </div>
            <div className="chat__headerRight">
              <IconButton>
                <SearchOutlined />
              </IconButton>
              <IconButton>
                <AttachFile />
              </IconButton>
              <IconButton>
                <MoreVert />
              </IconButton>
            </div>
          </div>

          <div className="chat__body">

            {messages.map(({name, message, timestamp, received}) =>(
              <p className={`chat__message ${received && "chat__reciever"}`}>
                <span className="chat__name">{name}</span>
                {message}
                <span className="chat__timestamp">{timestamp}</span>
              </p>
            ))}

            <p className="chat__reciever chat__message">
              <span className="chat__name">Arun</span>
              This is a Message
              <span className="chat__timestamp">{ new Date().toUTCString() }</span>
            </p>

            <p className="chat__message">
              <span className="chat__name">Arun</span>
              This is a Message
              <span className="chat__timestamp">{ new Date().toUTCString() }</span>
            </p>
          </div>

          <div className="chat__footer">
            <InsertEmoticonIcon />
            <form>
              <input
                value={input}
                placeholder="text" type="text"
                onChange={e => setInput(e.target.value)}
              />
              <button type="submit" onClick={sendMessage}> Send a Message </button>
            </form>
            <MicIcon />
          </div>
        </div>
    )
}

export default Chat
