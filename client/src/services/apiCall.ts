import axios, { AxiosError } from "axios";
import { toast } from "react-toastify";

export const apiCall = async <R, D = {}>(method: 'get' | 'post' | 'patch' | 'put' | 'delete', url: string, data?: D, showToast: boolean = true): Promise<R> => {
    try {
        const response = await axios({
            method,
            url,
            data,
            withCredentials: true
        })
        return response.data;
    } catch (err) {
        if (err instanceof AxiosError && err.response) {
            if (err.response.data.success === true || err.response.data.success === false) {
                showToast && toast.error(err.response.data.message);
                return err.response.data;
            } else {
                showToast && toast.error("No Response From Server");
                return {
                    success: false,
                    message: "No Response From Server"
                } as R;
            }
        } else {
            showToast && toast.error("No Response From Server")
            return {
                success: false,
                message: "No Response From Server"
            } as R;
        }
    }
}