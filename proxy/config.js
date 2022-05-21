require('dotenv').config();
const convict = require("convict");

const config = convict({
    api: {
        host: {
            doc: "API hsot name / IP",
            format: "*",
            default: "localhost",
            env: "API_DOMAIN"
        },
        port: {
            doc: "API port number",
            format: "port",
            default: "8080",
            env: "API_PORT"
        }
    }
});

config.load({});
config.validate({allowed: "strict"});

module.exports = config;