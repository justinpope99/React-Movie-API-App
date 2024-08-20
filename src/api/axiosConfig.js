// This file will be used to configure axios
// We can configure and export the Axios object that we will use to make HTTP Requests to the API
import axios from 'axios';

export default axios.create({
    // The baseURL provides the base address of the API endpoints that our app will be calling
    baseURL:'https://expensive-ellissa-justin-pope-f21c5acc.koyeb.app',
    timeout: 20000,
    headers: {"Content-type": "application/json"}
})