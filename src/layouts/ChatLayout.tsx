import { Outlet } from "react-router"

const ChatLayout = () => {
    return (
        <div className="h-dvh p-6 bg-neutral-200 font-open-sans">
            <Outlet />
        </div>
    )
}

export default ChatLayout