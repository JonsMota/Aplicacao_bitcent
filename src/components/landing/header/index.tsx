import Area from "../common/Area"
import Logo from "../common/Logo"
import Menu from "./Menu"

export default function Header() {
    return (
        <Area className="bg-black fixed z-50">
            <div className="flex items-center justify-between h-20">
                <Logo />
                <Menu />
            </div>
        </Area>
    )
}