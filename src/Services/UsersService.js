import ApiService from "./ApiService";

export const fetchUsersService = (page) => {
    let url = `/api/users?page=${page}`;
    return ApiService(url);
}

export const loginUserService = (user) => {
    let url = `/api/login`;
    return ApiService(url, {
        method: "post",
        body: { ...user }
    });
}