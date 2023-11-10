import { Avatar, Menu } from "@mantine/core"
import falseUser from "@/data/constants/falseUser"

export default function MenuUser() {
    return (
        <Menu>
            <Menu.Target>
                <div className='flex items-center gap-3 cursor-pointer'>
                    <div className='hidden md:flex flex-col select-none'>
                        <span className='text-sm font-bold text-zinc-200'>{falseUser?.name}</span>
                        <span className='text-xs text-zinc-400'>{falseUser?.email}</span>
                    </div>
                    <Avatar
                        size={40}
                        radius="xl"
                        src={falseUser?.imageUrl ?? 'https://source.unsplash.com/random/100x100/?abstract'}
                    />
                </div>
            </Menu.Target>
        </Menu>
    )
}