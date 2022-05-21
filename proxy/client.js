const axios = require("axios")
const config = require("./config");

const gateway = "http://" 
    + config.get("api.host") 
    + ":" 
    + config.get("api.port");

module.exports = {
    getApiData: async function() {
        const response = await axios.get(gateway);
        return response.data;
    }
}