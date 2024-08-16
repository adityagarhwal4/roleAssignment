
import { Button, TextField } from "@mui/material"
import { useState } from "react"
import { useFetchLoggedInUser, useMutateLogin } from "../../services/apis/auth/hooks";
import { Navigate } from "react-router-dom";

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const { mutateAsync: loginUser, isPending: loginLoading } = useMutateLogin();
    const { data: loggedInUser, isLoading: loggedInUserLoading } = useFetchLoggedInUser();

    const handleLoginClick = () => {
        loginUser({ username, password });
    }

    return (
        loggedInUserLoading
            ?
            <div>Loading</div>
            :
            loggedInUser?.success
                ?
                <Navigate to="/" ></Navigate>
                :

                <div className="flex flex-col gap-2 items-center justify-center h-screen">
                    <h1 className="text-2xl font-bold text-[#2E2E2E]">Login</h1>
                    <TextField
                        label="Username"
                        value={username}
                        onChange={event => setUsername(event.target.value)}
                        type="text"
                    />
                    <TextField
                        value={password}
                        onChange={event => setPassword(event.target.value)}
                        label="Password"
                        type="password"
                    />
                    <Button variant="contained" onClick={handleLoginClick} disabled={loginLoading}>Login</Button>
                </div>
    )
}

export default Login