import { apiCall } from "../../apiCall";
import { loggedInUserApiPath, loginApiPath } from "../../apiRoutes";
import { LoggedInUserApiResponse, LoginApiPayload, LoginApiResponse } from "./types";

export const loginApi = async (payload: LoginApiPayload): Promise<LoginApiResponse> => {
    const data = await apiCall<LoginApiResponse, LoginApiPayload>("post", `${loginApiPath}`, payload);
    return data;
}

export const loggedInUserApi = async (): Promise<LoggedInUserApiResponse> => {
    const data = await apiCall<LoggedInUserApiResponse>("get", `${loggedInUserApiPath}`);
    return data;
}