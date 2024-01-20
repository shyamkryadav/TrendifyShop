const mongoose=require('mongoose');
const connection= async ()=>{
    const isConnected = await mongoose.connect('mongodb://127.0.0.1:27017/TrendifyShop');
    if(isConnected){
        console.log("dataBase is connected ");
    }else{
        console.log("dataBase is not connected");

    }
}
module.exports = connection;
