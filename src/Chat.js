import React from 'react'
import "./Chat.css"
import { Avatar,IconButton } from "@material-ui/core"
import { SearchOutlined,MoreVert, AttachFile } from "@material-ui/icons";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon"
import MicIcon from "@material-ui/icons/Mic"

function Chat() {
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

            <p className="chat__message">
              <span className="chat__name">Arun</span>
              This is a Message
              <span className="chat__timestamp">{ new Date().toUTCString() }</span>
            </p>

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
                placeholder="text" type="text"
              />
              <button type="submit"> Send a Message </button>
            </form>
            <MicIcon />
          </div>
        </div>
    )
}

export default Chat
