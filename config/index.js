// const API_VERSION = "v1";
// const IP_SERVER = "localhost";
// const PORT_DB = 27017;
// module.exports = {
//     API_VERSION,
//     IP_SERVER,
//     PORT_DB

// };
module.exports = {
    secret: process.env.NODE_ENV === 'production' ? process.env.SECRET : 'secret'
};