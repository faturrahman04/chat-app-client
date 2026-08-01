import ChatList from "./ChatList"
import ProfileIcon from "./ProfileIcon"

const SidebarChat = () => {
    return (
        <div className="bg-neutral-50 p-4 rounded-xl w-[25%]">
            <ProfileIcon />
            <ChatList />
        </div>
    )
}

export default SidebarChat