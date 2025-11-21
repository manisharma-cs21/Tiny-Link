# 📌 TinyLink --- URL Shortener

A simple and fast URL Shortener built using **Node.js, Express, MongoDB,
EJS, and TailwindCSS**.\
It lets users create custom short URLs, track click statistics, and
manage links from a clean dashboard.

## 🚀 Features

-   🔗 Shorten any long URL
-   ✏️ Custom short code support
-   📊 Track clicks + last clicked timestamp
-   🗑️ Delete short links
-   🎨 Responsive UI with TailwindCSS
-   ⚙️ MongoDB for storage
-   🔄 Auto redirect when visiting short URLs

## 🛠️ Tech Stack

-   Node.js, Express
-   MongoDB
-   EJS Templates
-   TailwindCSS

## 📦 Installation

Create `.env`:


Start server:

``` bash
npm start
```

## 📁 Folder Structure

    TinyLink/
     ├── views/
     ├── models/
     ├── routes/
     ├── public/
     ├── server.js
     └── README.md

## 🔗 API Endpoints

-   POST /api/shorten
-   DELETE /api/links/:code
-   GET /:code

## 🛠️ Deployment

I am using vercel app for deployment 
