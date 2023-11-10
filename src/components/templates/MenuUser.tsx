import { Avatar, Menu } from "@mantine/core"
import Link from "next/link"
import { IconArrowsRightLeft, IconLogout, IconUser } from "@tabler/icons-react"
import { useContext } from "react"
import AutenticacaoContext from "@/data/contexts/AutenticacaoContext"

export default function MenuUser() {

    const { usuario, logout } = useContext(AutenticacaoContext)

       return (
        <Menu>
            <Menu.Target>
                <div className='flex items-center gap-3 cursor-pointer'>
                    <div className='hidden md:flex flex-col select-none'>
                        <span className='text-sm font-bold text-zinc-200'>{usuario?.name}</span>
                        <span className='text-xs text-zinc-400'>{usuario?.email}</span>
                    </div>
                    <Avatar
                        size={40}
                        radius="xl"
                        src={usuario?.imageUrl ?? 'https://source.unsplash.com/random/100x100/?abstract'}
                    />
                </div>
            </Menu.Target>
            <Menu.Dropdown>
                <Menu.Label>Usuário</Menu.Label>
                <Link href="/">
                    <Menu.Item
                        icon={<IconArrowsRightLeft size={14} />}
                    >Finanças</Menu.Item>
                </Link>
                <Link href="/user">
                    <Menu.Item
                        icon={<IconUser size={14} />}
                    >Meus Dados</Menu.Item>
                </Link>
                <Menu.Divider />
                <Menu.Item 
                    color="red" icon={<IconLogout size={14}/>}
                    onClick={logout}
                >Sair</Menu.Item>
            </Menu.Dropdown>
        </Menu>
    )
}