const Listing=require("../models/listing.js");




module.exports.index=async (req,res)=>{
    
    let allListings= await Listing.find({});
    res.render("listings/index.ejs",{allListings});

}
module.exports.renderNewForm=(req,res)=>{
   
    res.render("listings/new.ejs");
    
};

module.exports.showListings=async (req,res)=>{
    let {id}=req.params;
    let list= await Listing.findById(id).populate({path:"reviews",
        populate:{
            path:"author",
        }, 
    })
    .populate("owner");
    if(!list){
        req.flash("error","Listing you requested for does not exist!");
        return res.redirect("/listings");
    }
    else{
        res.render("listings/show.ejs",{list});

    }

}
module.exports.searchListing=async(req,res,next)=>{
    let search=req.query.search;
    let allListings=await Listing.find({title:{ $regex: search, $options: "i" }
    });
    if(allListings.length==0){
        req.flash("error","Listings you requested for do not exist!");
        res.redirect("/listings");
    }
    else{
         res.render("listings/index.ejs", { allListings });
    }
    

    
}
module.exports.createListing = async (req, res, next) => {

    let list = req.body.listing;

    let user1 = new Listing(list);

    user1.owner = req.user._id;

    if (req.file) {
        let url = req.file.path;
        let filename = req.file.filename;

        user1.image = { url, filename };
    }

    await user1.save();

    req.flash("success", "New Listing Created!");

    res.redirect("/listings");
};
module.exports.renderEditForm=async (req,res)=>{
    let {id}=req.params;
    let list= await Listing.findById(id);
    if(!list){
        req.flash("error","Listing you requested for does not exist!");
        return res.redirect("/listings");
    }
    let originalImageUrl=list.image.url;
    originalImageUrl = originalImageUrl.replace("/upload","/upload/w_250");
    res.render("listings/edit.ejs",{list,originalImageUrl});

};
module.exports.updateListing=async (req,res)=>{
    let {id}=req.params;   
    let listing=await Listing.findByIdAndUpdate(id,{...req.body.listing});
    if( typeof req.file!=="undefined"){
    let url=req.file.path;
    let filename=req.file.filename;
    listing.image={url,filename }
    await listing.save();

    }
    

    req.flash("success","Listing Updated!");
    res.redirect(`/listings/${id}`);
};

module.exports.destroyListing=async (req,res)=>{
    let {id}=req.params;
    let deletedListing=await Listing.findByIdAndDelete(id);
    req.flash("success","Listing Deleted!");
    res.redirect("/listings");
};