const mongoose=require("mongoose");
const Schema = mongoose.Schema;
const Review=require("./review.js");

 const userScehma=new Schema({
    title:{
        type: String,
        required:true
    },
    description:{
        type: String
    },
    image:{
        url:String,
        filename:String,
    
    },
    price:{
        type: Number,
        required:true
    },
    location:{
        type: String,
        required:true
    },
    country:{
        type: String,
        required:true
    },
    reviews:[
        {
            type: Schema.Types.ObjectId,
            ref: "Review",

        }
    ],
    owner:{
        type: Schema.Types.ObjectId,
        ref: "User",

    }
 });
 userScehma.post("findOneAndDelete",async(listing)=>{
    if(listing){
        await Review.deleteMany({_id:{$in:listing.reviews}});
    }
    

 })

 const Listing=new mongoose.model("Listing",userScehma);
 module.exports=Listing;