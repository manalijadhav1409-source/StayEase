import api from "./api";
import { API } from "../constants/apiEndpoints";

export const login = (data) => {
    return api.post(API.LOGIN, data);
};

export const register = (data) => {
    return api.post(API.REGISTER, data);
};