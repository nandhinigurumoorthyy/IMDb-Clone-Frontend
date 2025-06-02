# 📽️ Movie Explorer (IMDb Clone) - Frontend (Client)

A fully responsive web application where users can **search**, **discover**, **add**, **edit**, and **manage** their movies. The app allows users to **sign up**, **log in**, and access a variety of features to personalize their movie collection. Built with **React.js**, **Axios**, and **React Router** for smooth navigation and API calls.

---

## 🚀 Demo

* 🌐 **Frontend (Client-side)**: [View Demo](https://imdb-clone-ui.netlify.app)
* 🌐 **Backend (Server-side)**: [Backend API](https://imdb-clone-backend-o1bt.onrender.com)

---

## 🗂️ Repository Links

* **Backend Repository**: [IMDb-Clone Server-side](https://github.com/nandhinigurumoorthyy/IMDb-Clone-Backend.git)

---

## 📦 Packages Used

Installed using `npm install`:

```bash
npm i react-router-dom
npm i axios
npm install react-icons
```

* **react-router-dom** — Routing and page navigation
* **axios** — For API requests (to TMDB API and backend server)
* **react-icons** — Icon library for beautiful UI elements

---

## 🛠️ Installation Steps

1. **Clone the repository**

```bash
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
```

2. **Navigate to client folder**

If you have separate folders like `client/` and `server/`, move into `client/`.

```bash
cd client
```

3. **Install dependencies**

```bash
npm install
```

4. **Start the development server**

```bash
npm run dev
```

App will run.


---
## 🎬 Add, Edit, and Delete Movies

This application allows users to **add**, **edit**, and **delete** movies from their own personal movie collection. The data is stored and managed via **MongoDB**, which provides persistence across sessions.

### 1. **Add a Movie**

* **How**: Navigate to the "Add Movie" page.
* **Form**: Fill out the form with the movie's title, genre, language, poster URL, and other details.
* **Functionality**: The movie is added to MongoDB and displayed on your profile or in your movie list.

### 2. **Edit a Movie**

* **How**: Click on the "Edit" button next to an existing movie on your profile or movie list.
* **Functionality**: Modify the movie’s details (e.g., title, description, genre, poster image) and save the changes.

### 3. **Delete a Movie**

* **How**: Click on the "Delete" button next to an existing movie on your profile or movie list.
* **Functionality**: The movie is permanently removed from MongoDB and will no longer appear in your collection.

---

## 🛠️ MongoDB Integration

This application uses **MongoDB** to store and manage your personal movie collection. When you add, edit, or delete a movie, the data is persisted in the MongoDB database through API requests sent from the frontend.

* **Movies Collection**: Stores all movie data added by the user, including title, description, release date, poster URL, and other movie details.

* **Backend**: API endpoints on the backend server handle CRUD operations (Create, Read, Update, Delete) and interact with the MongoDB database. This ensures data is stored persistently and can be retrieved even after page reloads or app restarts.

For full functionality, make sure the **backend server** connected to MongoDB is running.

---

## 🛠️ User Authentication with JWT

This application uses JSON Web Tokens (JWT) to authenticate users. Users need to be logged in before they can add, edit, or delete movies. Here's how the authentication system works and how to set it up.

### Authentication Flow:
* **Sign Up**: Users can create an account by providing a username and password.

* **Login**: After successful authentication, the server sends a JWT to the client. This token is used to authenticate subsequent API requests.

---
## 📱 Responsive Design

* 100% mobile-friendly.
* Responsive on all screen sizes: Desktop 🖥️, Tablet 📱, and Mobile 📱.
* Built using **CSS media queries** and **flexbox/grid layouts**.

---

## 💡 TMDB API

The application fetches movie and actor data from **TMDB (The Movie Database) API**. Here’s how we utilize it:

* **Movie Data**: Get detailed information about movies including title, overview, release date, ratings, genres, and more.
* **Actor Data**: Fetch actor profiles and movies they have worked in.
* **Poster Images**: Fetch movie posters in different sizes (e.g., w300, w500) to display in the app.
* **Genres**: Fetch a list of genres available for movies and use it as filters.

The **TMDB API** provides us access to a wide range of movie data, helping us deliver an engaging user experience with up-to-date movie information.

TMDB API Documentation: [TMDB API Docs](https://www.themoviedb.org/documentation/api)

---

## 📂 Project Structure

```
client/
 ├── public/
 ├── src/
 │    ├── components/
 │    ├── assets/
 │    ├── App.jsx
 │    └── ...
 ├── package.json
 ├── README.md
```



---


## ⚡ Tech Stack

* React.js
* CSS3 (Responsive)
* Axios
* React Router DOM
* TMDB API (for movies)

---

### **Notes**

* The `TMDB API` key is required to fetch real movie data. Make sure to replace any placeholder or test API key in your app's environment configuration.
* You can explore more of the features of the TMDB API directly at the [TMDB API Docs](https://www.themoviedb.org/documentation/api).
* MongoDB is used to store user and movie data.

