import axios from "axios";

const BASE_URL = "http://localhost:5000/api/v1";
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzOTU0ZDdmMmIzOTA0NjFmZTY1MDRhZiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY3NDk4NzEyOSwiZXhwIjoxNjc1MjQ2MzI5fQ.Ys2FzzLjkvw2n5t0sArkN0eaGGZe17-o0gOFCoALMZQ";

export const publicRequest = axios.create({
    baseURL: BASE_URL,
});

export const userRequest = axios.create({
    baseURL: BASE_URL,
    header: {token: `Bearer ${TOKEN}`},
});