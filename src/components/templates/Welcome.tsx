export default function Welcome() {
    const user = { name: 'João' }

    function renderName() {
        return (
            <span className="hidden sm:inline">
                {user?.name?.split(' ') [0]}
            </span>
        )
    }
    return (
        <div className={`text-3xl font-black`}>
            Olá {renderName()} 👋
        </div>
    )
}