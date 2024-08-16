export type LoginApiPayload = {
    username: string;
    password: string;
};
export type LoginApiResponse = {
    success: boolean;
    message: string;
};


export type LoggedInUserApiResponse = {
    success: boolean;
    message: string;
    user: {
        _id: string;
        username: string;
        role: string;
    }
};

