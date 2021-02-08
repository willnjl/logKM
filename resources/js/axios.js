import axios from "axios";
// create a version of axios with useful defaults
export default axios.create({
    baseURL: "http://homestead.test",
    withCredentials: true,
    headers: {
        Accept: "application/json",
        Authorization: "",
    },
});
