import useLoginAuthCustom from "./loginAuthCustomComp";

const LoginAuthCustomComp: React.FC = () => {
    const { isAuth, login, logout } = useLoginAuthCustom();

    return (
        <div>
            <h3>Login authorization using custom hook</h3>
            <p>{isAuth ? 'Looged in' : 'Logged Out'}</p>
            {isAuth ? (
                <button onClick={logout}>Logout</button>
            ) : (
                <button onClick={login}>Login</button>
            )}
        </div>
    )
}
export default LoginAuthCustomComp;