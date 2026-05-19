const mongoose=require("mongoose");
const Mongo_url='mongodb://127.0.0.1:27017/wanderlust'; 
const Listing=require("../models/listing.js");
const initdata=require("./data.js");
main()
.then(()=>{
    console.log("connected to DB")

})
.catch((err)=>{
    console.log(err);

});
async function main(){
    await mongoose.connect(Mongo_url);

}

const initdb=async()=>{
    await Listing.deleteMany({});
    initdata.data=initdata.data.map((obj)=>({...obj,owner:"69f447e62363e7cdd741aa3c"

    }))
    await Listing.insertMany(initdata.data);
    console.log("data was initialized");

};
initdb();