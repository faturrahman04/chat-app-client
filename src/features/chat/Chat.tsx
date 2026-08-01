import ChatBox from "../../components/ChatBox"
import SidebarChat from "../../components/SidebarChat"

const Chat = () => {
    return (
        <div className="flex gap-6">
            <SidebarChat />
            <ChatBox />
        </div>
    )
}

export default Chat