import Welcome from "./Welcome"
import MenuUser from "./MenuUser"

export default function Header() {
    return (
        <div className={`
            flex justify-between items-center
            p-7 border-b border-zinc-900
        `}>
            <Welcome />
            <MenuUser />
        </div>
    )
}