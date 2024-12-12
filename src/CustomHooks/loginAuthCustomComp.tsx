import { useState } from "react";

interface AuthInterface {
    isAuth: boolean;
    login: () => void;
    logout: () => void;
}

const useLoginAuthCustom = (): AuthInterface => {
    const [isAuth, setIsAuth] = useState<boolean>(false);

    const login = () => setIsAuth(true);
    const logout = () => setIsAuth(false);

    return { isAuth, login, logout };
};
export default useLoginAuthCustom;