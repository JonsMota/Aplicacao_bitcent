import { IconBrandGithub, IconBrandInstagram, IconBrandLinkedin, IconBrandYoutube } from "@tabler/icons-react"
import SocialMedia from "./SocialMedia"

export default function SocialMedias() {
    return (
        <div className="flex">
            <SocialMedia icon={<IconBrandYoutube />} url="https://www.youtube.com" />
            <SocialMedia icon={<IconBrandInstagram />} url="https://www.instagram.com" />
            <SocialMedia icon={<IconBrandGithub />} url="https://github.com" />
            <SocialMedia icon={<IconBrandLinkedin />} url="https://www.linkedin.com" />
        </div>
    )
}