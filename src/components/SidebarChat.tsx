import ChatList from "./ChatList"
import ProfileIcon from "./ProfileIcon"

const SidebarChat = () => {
    return (
        <div className="w-[25%] flex flex-col gap-2">
            <div className="bg-neutral-50 p-4 rounded-xl border-green-700 border-2">
                <ProfileIcon />
                {/* <ChatList /> */}
            </div>

            <div className="bg-neutral-50 rounded-xl p-4">
                <h1>Oke</h1>
            </div>
        </div>
    )
}

export default SidebarChat