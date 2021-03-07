import axios from "axios";
// create a version of axios with useful defaults
export default axios.create({
    baseURL: "http://homestead.test",
    headers: {
        Accept: "application/json",
        Authorization: "",
    },
});
