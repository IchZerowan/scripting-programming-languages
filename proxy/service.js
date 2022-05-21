const client = require("./client");

module.exports = {
    getProxiedData: async function(){
        return client.getApiData();
    }
}