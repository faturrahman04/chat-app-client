import NavChats from "./NavChats"

import defaultUser from "../assets/default.png"

const ChatBox = () => {
    return (
        <div className="w-full flex flex-col gap-3">
            <div className="bg-neutral-50 rounded-xl w-full">
                <NavChats />
            </div>

            {/* Form user */}
            <div className="flex bg-neutral-50 rounded-xl pl-20 py-8 pr-8">
                <div className="flex flex-col justify-center items-center">
                    <div className="p-6">
                        <img src={defaultUser} className="rounded-[50%] w-30" alt="" />
                    </div>
                    <div className="text-center">
                        <h2 className="font-semibold">Account User</h2>
                        <p className="text-black/70">@account_email</p>
                        <p>Online</p>
                    </div>
                </div>
                <div>

                </div>
            </div>
        </div>
    )
}

export default ChatBox