import axios from 'axios';

const instance = axios.create({
    // baseURL: "http://localhost:5001/clone2-e1ec1/us-central1/api"
    baseURL: "https://us-central1-clone2-e1ec1.cloudfunctions.net/api"
})

export default instance;