const mongoose = require('mongoose');


const connect=()=>{
    return mongoose.connect("mongodb+srv://happycredit:happycredit@cluster0.6qxxiep.mongodb.net/?retryWrites=true&w=majority")
}

module.exports = connect;