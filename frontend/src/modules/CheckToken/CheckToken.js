import { useState, useEffect } from "react";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";

const CheckToken = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem("token");

        if (token) {
            try {
                const decodedToken = jwtDecode(token);
                if (decodedToken && decodedToken.exp * 1000 > Date.now()) {
                    console.log("Token is valid");
                    console.log("User info: ", decodedToken);
                    console.log(token);
                    setIsAuthenticated(true);
                }
                else {
                    //navigate("/LogIn");
                    setIsAuthenticated(true);
                }

            } catch (error) {
                console.error("-Error decoding token-", error);
                localStorage.removeItem('token');
            }
        }
    }, []); // Пустой массив зависимостей означает, что эффект будет выполнен только один раз после первого рендеринга

    return isAuthenticated ? <>{children}</> : null;
}

export default CheckToken;
