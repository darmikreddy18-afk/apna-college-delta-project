# Wanderlust 🌍

An Airbnb-inspired full-stack travel listing web application where users can explore, create, review, and manage travel stays from around the world.

Wanderlust is a complete full-stack project built using Node.js, Express, MongoDB, and EJS with authentication, image uploads, reviews, cloud deployment, and search functionality.

---

## 🚀 Live Demo

🌐 https://delta-project-zbi7.onrender.com

---

# ✨ Features

## 🔐 Authentication & Authorization
- User Signup & Login
- Secure Authentication using Passport.js
- Session-based Authentication
- Authorization for Listings & Reviews

## 🏡 Listings
- Create New Listings
- Edit Listings
- Delete Listings
- View Detailed Listing Pages
- Upload Images using Cloudinary

## ⭐ Reviews
- Add Reviews & Ratings
- Delete Reviews
- Review Ownership Protection

## 🔍 Search Functionality
- Search listings by title
- Case-insensitive search

## ☁️ Deployment & Storage
- MongoDB Atlas Database
- Cloudinary Image Hosting
- Render Deployment

## 🎨 UI/UX
- Responsive Design
- Flash Messages
- Server-side Rendering using EJS

---

# 🛠️ Tech Stack

## Frontend
- HTML5
- CSS3
- Bootstrap 5
- EJS

## Backend
- Node.js
- Express.js

## Database
- MongoDB Atlas
- Mongoose

## Authentication
- Passport.js
- Passport-Local
- Express-Session
- Connect-Mongo

## File Uploads
- Multer
- Cloudinary
- Multer-Storage-Cloudinary

## Deployment
- Render

---

# 📂 Project Structure

```bash
Wanderlust/
│
├── controllers/
├── models/
├── routes/
├── views/
├── public/
├── init/
├── middleware.js
├── cloudConfig.js
├── app.js
└── package.json
```

---

# ⚙️ Installation & Setup

## 1️⃣ Clone Repository

```bash
git clone https://github.com/darmikreddy18-afk/wanderlust.git
```

---

## 2️⃣ Install Dependencies

```bash
npm install
```

---

## 3️⃣ Create Environment Variables

Create a `.env` file in the root directory.

```env
ATLASDB_URL=your_mongodb_atlas_url

SECRET=your_session_secret

CLOUD_NAME=your_cloudinary_cloud_name
CLOUD_API_KEY=your_cloudinary_api_key
CLOUD_API_SECRET=your_cloudinary_api_secret
```

---

## 4️⃣ Run the Application

```bash
node app.js
```

or

```bash
nodemon app.js
```

---

# 🗄️ Seed Database

To initialize sample listings:

```bash
node init/index.js
```

---

# 📸 Screenshots

## Home Page
<img width="2904" height="1479" alt="image" src="https://github.com/user-attachments/assets/dd0b0c01-0529-4e67-a978-e0f78401fe33" />



## Listing Page
<img width="2890" height="1429" alt="image" src="https://github.com/user-attachments/assets/8eff8791-8232-4b8b-b72c-f47089a1d33c" />


## Create Listing
<img width="2050" height="1222" alt="image" src="https://github.com/user-attachments/assets/f31084aa-c5f9-4d03-9af6-c72b093c9cb4" />

## Login / Signup
<img width="1734" height="901" alt="image" src="https://github.com/user-attachments/assets/b4b2bead-93e6-4044-9b5f-23bde842d5cd" />

---

# 🔒 Environment Variables

| Variable | Description |
|---|---|
| `ATLASDB_URL` | MongoDB Atlas Connection URL |
| `SECRET` | Session Secret |
| `CLOUD_NAME` | Cloudinary Cloud Name |
| `CLOUD_API_KEY` | Cloudinary API Key |
| `CLOUD_API_SECRET` | Cloudinary API Secret |

---

# 🌟 Future Improvements

- Booking System
- Payment Gateway Integration
- Wishlist / Favourites
- Interactive Maps
- Filters & Categories
- AI-powered Travel Recommendations
- Chat & Messaging System
- Admin Dashboard

---

# 📚 What I Learned

- Authentication & Authorization
- RESTful Routing
- MVC Architecture
- Session Management
- Cloud Image Uploads
- Database Relationships
- Deployment & Production Debugging
- Backend Validation & Error Handling

---

# 👨‍💻 Author

## Darmik Reddy

GitHub:  
https://github.com/darmikreddy18-afk

---

# 📄 License

This project is built for learning and educational purposes.
