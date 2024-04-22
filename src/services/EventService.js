import axios from "axios";
import { API } from "../utils/apiURL";

export const getAll = async () => {
    const res = await axios.get(`${API}/event`);
    return res.data;
}

export const getRecent = async () => {
    const res = await axios.get(`${API}/event/recent`);
    return res.data;
}