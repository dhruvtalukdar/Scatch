# 🛒 E-Commerce Platform

## 🚀 Project Setup & Configuration  

### 📌 Backend Setup  

#### 1️⃣ Initialize Node.js Project  
```sh
npm init -y
```

#### 2️⃣ Install Dependencies  
```sh
npm install express mongoose
npm install jsonwebtoken cookie-parser bcrypt
npm install multer  # For file uploads
```

#### 3️⃣ Git Handling  
To track empty folders in Git:  
```sh
gkeep
```

## Database Models  

### User Model  
```js
const UserSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  cart: { type: Array, default: [] },
  isAdmin: { type: Boolean, default: false },
  orders: { type: Array, default: [] },
  contact: { type: Number },
  picture: { type: String }, // Store image path or URL
});
```

### Product Model  
```js
const ProductSchema = new mongoose.Schema({
  image: { type: String, required: true },
  name: { type: String, required: true },
  price: { type: Number, required: true },
  discount: { type: Number, default: 0 },
  bgColor: { type: String },
  panelColor: { type: String },
  textColor: { type: String },
});
```

## Environment Variables  
Set environment variables using:  
```sh
set DEBUG=development:*
$env:NODE_ENV="development"; nodemon app.js 
```

## Routes  

| Endpoint          | Description                           |
|------------------|----------------------------------|
| `/`             | Signup or Login                  |
| `/shop`         | Shop page                        |
| `/users/cart`   | User's cart                      |
| `/owner/product` | Show all products (Owner)       |
| `/owner/admin`  | Admin panel to manage products  |





 ## Authentication
 ``` sh
 npm install jsonwebtoken bcrypt dotenv cookie-parser
 ```



## 🎨 Frontend Setup  

#### 1️⃣ Create React App  
```sh
npx create-react-app public/frontend
cd public/frontend
```

#### 2️⃣ Install TailwindCSS  
```sh
npm install -D tailwindcss
npx tailwindcss init
```

---

### ✅ Project is ready to build! 🚀
