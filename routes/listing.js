const express=require("express");
const router=express.Router();
const wrapAsync=require("../utils/wrapAsync.js");
const Listing=require("../models/listing.js");
const{isLoggedIn,isOwner,validateListing}=require("../middleware.js");
const { populate } = require("../models/review.js");
const listingsController=require("../controllers/listings.js");
const multer=require("multer");
const {storage}=require("../cloudConfig.js");
const upload=multer({storage});


router.route("/")
.get((wrapAsync(listingsController.index)))
.post(isLoggedIn, upload.single("listing[image]"),validateListing,wrapAsync(listingsController.createListing));
router.get("/new",isLoggedIn,listingsController.renderNewForm);
router.route("/search")
.get(listingsController.searchListing);
router.route("/:id")
.get(wrapAsync(listingsController.showListings))
.put(isLoggedIn,isOwner,upload.single("listing[image]"),validateListing,wrapAsync(listingsController.updateListing))
.delete(isLoggedIn,isOwner,wrapAsync(listingsController.destroyListing));


router.get("/:id/edit",isLoggedIn,wrapAsync(listingsController.renderEditForm));

module.exports=router;