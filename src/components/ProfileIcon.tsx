import defaultUser from "../assets/default.png"

const ProfileIcon = () => {
    return (
        <div className="flex items-center gap-4">
            <div>
                <img src={defaultUser} alt="" className="w-14 rounded-[50%]" />
            </div>
            <div>
                <h1 className="font-semibold">Account User</h1>
                <p className="text-neutral-950/70">Info account</p>
            </div>
        </div>
    )
}

export default ProfileIcon