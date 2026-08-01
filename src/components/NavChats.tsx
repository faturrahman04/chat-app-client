import defaultUser from "../assets/default.png"

const NavChats = () => {
    return (
        <div className="p-4 flex items-center gap-4">
            <div>
                <img src={defaultUser} className="rounded-[50%] w-14" alt="" />
            </div>
            <div className="">
                <h1 className="font-semibold">Profile User Chat</h1>
                <p className="text-green-700">User A is typing...</p>
            </div>
        </div>
    )
}

export default NavChats