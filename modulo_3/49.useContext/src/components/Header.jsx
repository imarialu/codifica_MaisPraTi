import {useAuth} from '../context/auth.jsx'

function Header(){
    const {user, login, logout} = useAuth();

    return(
        <header>
            {user ? (
                <>
                    <span>Olá, {user.name}</span>
                    <button onClick={logout}>Sair!</button>
                </>
            ) : (
                <button onClick={() => login('Maria')}>Entrar</button>
            )}
        </header>
    )
}

export default Header