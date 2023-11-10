import Area from "../common/Area"
import Slogan from "./Slogan"
import principal from "../../../../public/principal.jpg"
import ResponsiveImage from "../common/ResponsiveImage"

export default function Highlight() {
    return (
        <Area id="start">
            <div className={`
                h-[500px] flex items-center justify-around
            `}>
                <Slogan />
                <ResponsiveImage
                    image={principal}
                    className="rotate-3 hidden md:inline"
                />
            </div>
        </Area>
    )
}