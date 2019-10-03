import Axios from "axios";

const baseURL = process.env.REACT_APP_URL;

export const restConnector = Axios.create({baseURL: baseURL})