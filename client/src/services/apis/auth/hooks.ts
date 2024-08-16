import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { loggedInUserApi, loginApi } from "./apis"
import { LoginApiPayload } from "./types"
import { toast } from "react-toastify";

export const useMutateLogin = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (payload: LoginApiPayload) => loginApi(payload),
        onSuccess: data => {
            if (data.success) {
                queryClient.invalidateQueries({ queryKey: ["loggedInUserApi"] })
                toast.success(data.message);
            }
        }
    })
}

export const useFetchLoggedInUser = () => {
    return useQuery({
        queryKey: ["loggedInUserApi"],
        queryFn: () => loggedInUserApi()
    })
}