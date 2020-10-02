import axios from "axios";

const instance = axios.create({
    //   baseURL: 'https://us-central1-cfase-4b2b2.cloudfunctions.net/api'
    baseURL: "http://localhost:5001/clone-bee0c/us-central1/api"
});

export default instance;