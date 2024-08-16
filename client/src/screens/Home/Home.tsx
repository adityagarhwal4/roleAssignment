import { Button } from "@mui/material"
import { useFetchLoggedInUser } from "../../services/apis/auth/hooks"

const Home = () => {
    const { data, isLoading } = useFetchLoggedInUser()
    return (
        isLoading
            ?
            <div>Loading</div>
            :
            <div>
                {data?.user?.role === "upload" && <Button sx={{ margin: 5 }} variant="contained">Upload file</Button>}
                {data?.user?.role === "approve" && <Button sx={{ margin: 5 }} variant="contained">Approve Files</Button>}
            </div>
    )
}

export default Home