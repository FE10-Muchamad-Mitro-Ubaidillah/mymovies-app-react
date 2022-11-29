import React, {useState } from "react";
import LoginInput from "../components/LoginInput";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const LoginPage = () => {
    const theme = useSelector((state) => state.theme);
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [cookie, setCookie] = useCookies("");
    const navigate = useNavigate();

    const onSubmitHandler = (e) => {
        setCookie("name", name, {path: "/"});
        navigate("/");
        e.preventDefault();
    }

    return (
        <div className={`${theme === `dark` ? `bg-gray-700` : `bg-white`} h-full w-full hero`}>
            <div className="hero-content text-center">
                <div className="max-w-sm">
                    <LoginInput
                        onSubmitLogin={(e) => onSubmitHandler(e)}
                        username={name}
                        password={password}
                        onChangeUsername={(e) => setName(e.target.value)}
                        onChangePassword={(e) => setPassword(e.target.value)}
                    />
                </div>
            </div>
        </div>
    )
}

export default LoginPage;