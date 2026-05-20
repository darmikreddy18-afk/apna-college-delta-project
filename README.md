Wanderlust 🌍

An Airbnb-inspired full-stack travel listing web application where users can explore, create, review, and manage travel stays from around the world.

Built with the MERN ecosystem and deployed on the cloud, Wanderlust provides a complete real-world full-stack experience, including authentication, image uploads, authorization, database integration, and deployment.

🚀 Live Demo

🌐 Deployed Project:
https://delta-project-zbi7.onrender.com

✨ Features
🔐 Authentication & Authorization
User Signup & Login
Secure Authentication using Passport.js
Session-based Authentication
Authorization for Listings & Reviews
🏡 Listings
Create New Listings
Edit Existing Listings
Delete Listings
View Detailed Listing Pages
Upload Images using Cloudinary
⭐ Reviews
Add Reviews & Ratings
Delete Reviews
Review Ownership Protection
🔍 Search
Search listings by title
Case-insensitive search functionality
☁️ Deployment & Storage
MongoDB Atlas Database
Cloudinary Image Hosting
Render Deployment
🎨 UI/UX
Responsive Design
Flash Messages for User Feedback
Server-side Rendering using EJS
🛠️ Tech Stack
Frontend
HTML5
CSS3
Bootstrap 5
EJS
Backend
Node.js
Express.js
Database
MongoDB Atlas
Mongoose
Authentication
Passport.js
Passport-Local
Express-Session
Connect-Mongo
File Uploads
Multer
Cloudinary
Multer-Storage-Cloudinary
Deployment
Render
📂 Project Structure
Wanderlust/
│
├── controllers/
├── models/
├── routes/
├── views/
├── public/
├── middleware.js
├── cloudConfig.js
├── app.js
└── package.json
⚙️ Installation & Setup
1️⃣ Clone Repository
git clone https://github.com/your-username/wanderlust.git
2️⃣ Install Dependencies
npm install
3️⃣ Create Environment Variables

Create a .env file in the root directory.

ATLASDB_URL=your_mongodb_atlas_url

SECRET=your_session_secret

CLOUD_NAME=your_cloudinary_cloud_name
CLOUD_API_KEY=your_cloudinary_api_key
CLOUD_API_SECRET=your_cloudinary_api_secret
4️⃣ Run Application
node app.js

or

nodemon app.js
🗄️ Seed Database

To initialise sample listings:

node init/index.js
📸 Screenshots
Home Page

<img width="2863" height="1879" alt="image" src="https://github.com/user-attachments/assets/d10b3f97-b2a8-40d9-b163-21367b9e2ae8" />

Listing Page

<img width="2896" height="2581" alt="image" src="https://github.com/user-attachments/assets/bac9c63f-c87a-400d-9ed7-a96503581a01" />


Create Listing

<img width="2050" height="1222" alt="image" src="https://github.com/user-attachments/assets/f31084aa-c5f9-4d03-9af6-c72b093c9cb4" />


Login / Signup

<img width="1734" height="901" alt="image" src="https://github.com/user-attachments/assets/b4b2bead-93e6-4044-9b5f-23bde842d5cd" />

🔒 Environment Variables
Variable	Description
ATLASDB_URL	MongoDB Atlas Connection URL
SECRET	Session Secret
CLOUD_NAME	Cloudinary Cloud Name
CLOUD_API_KEY	Cloudinary API Key
CLOUD_API_SECRET	Cloudinary API Secret
🌟 Future Improvements
Booking System
Payment Gateway Integration
Wishlist / Favourites
Interactive Maps
Filters & Categories
AI-powered Travel Recommendations
Chat & Messaging System
Admin Dashboard
📚 What I Learned
Authentication & Authorization
RESTful Routing
MVC Architecture
Session Management
Cloud Image Uploads
Database Relationships
Deployment & Production Debugging
Backend Validation & Error Handling
👨‍💻 Author
Darmik Reddy

GitHub:
https://github.com/darmikreddy18-afk

📄 License

This project is built for learning and educational purposes.
