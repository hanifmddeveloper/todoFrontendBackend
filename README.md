# 📝 Todo Backend API

A simple **Node.js + Express + MongoDB** backend API for managing Todo items.

This project includes Todo CRUD operations, MongoDB database connectivity, CORS support, and image upload functionality using Multer.

## 🚀 Features

* Create a Todo
* Get all Todos
* Update a Todo
* Delete a Todo
* Upload an image with a Todo
* Serve uploaded images
* MongoDB database integration
* CORS enabled
* Express JSON request handling

## 🛠️ Technologies Used

* **Node.js**
* **Express.js**
* **MongoDB**
* **Mongoose**
* **Multer** – image/file upload
* **CORS**
* **Axios**

The project uses CommonJS modules and `index.js` as the main entry point.

## 📁 Project Structure

```text
backend/
│
├── controllers/
│   └── todoControllers.js
│
├── config/
│   └── databaseConfig.js
│
├── utils/
│   └── storage.js
│
├── uploads/
│   └── uploaded images
│
├── index.js
├── package.json
├── package-lock.json
└── README.md
```

## ⚙️ Installation

Clone the repository:

```bash
git clone <your-repository-url>
```

Go into the project directory:

```bash
cd backend
```

Install dependencies:

```bash
npm install
```

## ▶️ Run the Server

Start the backend:

```bash
node index.js
```

The server will run on:

```text
http://localhost:5000
```

The application listens on port `5000`.

## 🔌 API Endpoints

### Create Todo

```http
POST /create/todo
```

Creates a new Todo.

This endpoint accepts an image using the `image` field.

Example:

```text
POST http://localhost:5000/create/todo
```

Request type:

```text
multipart/form-data
```

Image field:

```text
image
```

The route uses Multer's `upload.single('image')` middleware.

---

### Get All Todos

```http
GET /alltodos
```

Returns all Todo items.

Example:

```text
GET http://localhost:5000/alltodos
```

---

### Delete Todo

```http
DELETE /delete/:id
```

Deletes a Todo using its MongoDB ID.

Example:

```text
DELETE http://localhost:5000/delete/64xxxxxxxxxxxx
```

---

### Update Todo

```http
POST /update/:id
```

Updates a Todo using its MongoDB ID.

Example:

```text
POST http://localhost:5000/update/64xxxxxxxxxxxx
```

The four Todo routes are defined in `index.js`.

## 🖼️ Image Uploads

Uploaded images are served from the `/uploads` route.

```text
http://localhost:5000/uploads/<filename>
```

The application exposes the local `uploads` directory as a static Express route.

## 🗄️ Database

The project uses **MongoDB** with **Mongoose**.

Database connection is handled through:

```text
config/databaseConfig.js
```

and initialized when the server starts:

```js
dbConnection()
```

The project dependencies include both `mongodb` and `mongoose`.

## 📦 Dependencies

```text
express
mongoose
mongodb
multer
cors
axios
```

Current versions are defined in `package.json`.

## 🔄 API Flow

```text
Client
   │
   ├── POST /create/todo
   │          │
   │          ├── Multer
   │          └── Todo Controller
   │
   ├── GET /alltodos
   │          │
   │          └── Todo Controller
   │
   ├── POST /update/:id
   │          │
   │          └── Todo Controller
   │
   └── DELETE /delete/:id
              │
              └── Todo Controller
                         │
                         ▼
                    MongoDB
```

## 🔧 Configuration

Before running the application, make sure your MongoDB connection is configured in:

```text
config/databaseConfig.js
```

Do not commit database credentials or other secrets directly to GitHub.

Use environment variables such as:

```env
MONGO_URI=your_mongodb_connection_string
PORT=5000
```

## 📌 Future Improvements

* Add `.env` configuration
* Add proper error handling
* Add request validation
* Add authentication and authorization
* Add pagination
* Add API documentation with Swagger
* Add automated tests
* Add a proper `npm start` script

## 👨‍💻 Author

**Md Hanif**

First backend project built with Node.js, Express, and MongoDB.

---

⭐ If you find this project useful, feel free to give it a star!
