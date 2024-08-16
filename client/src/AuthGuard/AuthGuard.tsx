import { Navigate } from "react-router-dom";
import { useFetchLoggedInUser } from "../services/apis/auth/hooks";
import { Button } from "@mui/material";

interface props {
    children: React.ReactNode;
    redirect?: string;
}

const AuthGuard = ({ children, redirect = "/login" }: props) => {
    const { data: loggedInUser, isLoading: loaggedInUserLoading } = useFetchLoggedInUser();

    if (loaggedInUserLoading) {
        return <div>Loading</div>
    } else if (!loggedInUser || loggedInUser.success === false) {
        return <Navigate to={redirect} />
    } else {
        return (
            <div>
                <div className="p-5">
                    <Button variant="contained">Logout</Button>
                </div>
                {children}
            </div>
        )
    }


}

export default AuthGuard