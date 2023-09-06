import { api } from "./api";

export function getListMovie() {
    return api.get('/popular');
}