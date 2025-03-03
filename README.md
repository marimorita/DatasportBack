# DataSport 
Data Sport is a web application designed to improve membership and attendance management in sports environments. It replaces traditional methods such as notebooks and Excel lists with an efficient digital system.

This platform allows identifying individuals entering the facility, registering their information, and displaying relevant data in real-time.

## Logo
<img src="https://res.cloudinary.com/dlezql4zq/image/upload/v1740779239/logo_fmrkjw.png" alt="Logo" width="150">

## Main Features
1. User Management
- > User registration and login (employees and administrators)
- > Authentication with JWT
- > Role and permission management

2. Attendance & Access Control
- > Entry logging
- > Verification with a code sent via email
- > Data persistence using localStorage

3. Membership Fee Management
- > Payment and expiration tracking
- > Alerts for pending payments

4. Notes & Observations
- > Add notes and observations with the admin’s or employee’s name
- > Store observations in localStorage

5. Asset & Status Management
- > Query general and individual assets along with their statuses
- > Asset relationships using foreign keys in the database

6. Notification System
- > Uses React-Toastify for real-time alerts

## Technologies Used

### Backend:
- ![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white) Node.js → Server environment
- ![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB) Express → Backend framework
- ![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white) TypeScript → Static typing for better security
- ![TypeORM](https://img.shields.io/badge/TypeORM-FE0803.svg?style=for-the-badge&logo=typeorm&logoColor=white) TypeORM → ORM for database management
- ![MySQL](https://img.shields.io/badge/mysql-4479A1.svg?style=for-the-badge&logo=mysql&logoColor=white) MySQL → Database

### Frontend:
- ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB) React JSX → Main framework
- ![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white) Tailwind CSS → Fast and efficient styling
- ![Ant-Design](https://img.shields.io/badge/-AntDesign-%230170FE?style=for-the-badge&logo=ant-design&logoColor=white) Ant Design → Pre-designed components for a better user experience


## Dependencies Used

### Backend Dependencies:
- `@azure/communication-email` → For sending emails via Azure Communication Services.
- `@cloudinary/url-gen` → Useful if your API generates Cloudinary URLs programmatically.
- `@google/generative-ai` → If your API integrates with Google’s generative AI.
- `@types/express` → Type definitions for Express.js.
- `@types/jsonwebtoken` → Type definitions for JWTs.
- `@types/node` → Type definitions for Node.js.
- `@types/nodemailer` → Type definitions for Nodemailer.
- `@vonage/server-sdk` → For SMS and communication services.
- `bcryptjs` → For password hashing.
- `cors` → Middleware for handling CORS.
- `crypto` → Native Node.js module for cryptographic functions.
- `dotenv` → Loads environment variables.
- `env-var` → Helps validate and manage environment variables.
- `express` → Web framework for building the API.
- `form-data` → Handles multipart/form-data requests.
- `handlebars` → For generating dynamic email templates.
- `jsonwebtoken` → For authentication using JWTs.
- `messagebird` → If using MessageBird for SMS/communication.
- `minimatch` → Useful for file path matching in backend operations.
- `mysql2` → If using MySQL as a database.
- `nodemailer` → For sending emails.
- `rimraf` → For deleting files/folders in backend tasks.
- `typeorm` → If using TypeORM for SQL databases.

### Frontend Dependencies:
- `@mercadopago/sdk-react` → Official MercadoPago SDK for integrating payments in React.
- `@types/axios` → TypeScript types for Axios, useful for TypeScript projects.
- `axios` → HTTP client for making API requests.
- `context` → Possibly related to global state management in React.
- `jspdf` → Library for generating PDF documents in the frontend.
- `jspdf-autotable` → Extension for jsPDF to create tables in PDF documents.
- `lucide-react` → Lightweight and customizable SVG icon library for React.
- `react-icons` → Collection of popular icons from multiple libraries (FontAwesome, Material Icons, etc.).
- `react-toastify` → Library for displaying toast notifications in React.
- `wouter` → Lightweight routing library for React, similar to React Router.



## Frontend - Backend Connection
- fetch and Axios are used for HTTP requests
- Authentication is based on JWT tokens, with two-step code verification
- Data is stored and managed in localStorage for persistence

## Project Structure
### Backend
```bash
    project
    ├── src
    │   ├── config
    │   │   └── token/
    │   ├── data 
    │   │   ├── entities/auth/
    │   │   ├── models/
    │   │   ├── mysql/
    │   │   └── index.ts
    │   ├── domain 
    │   │   ├── datasources/
    │   │   ├── dto/auth/
    │   │   ├── errors/
    │   │   ├── repositories/
    │   │   └── index.ts
    │   ├── email 
    │   │   └── Page.html
    │   ├── infrastructure 
    │   │   ├── datasources/    
    │   │   ├── mappers/
    │   │   ├── repositories/
    │   │   └── index.ts
    │   ├── presentation 
    │   │   ├── auth/
    │   │   ├── routes.ts
    │   │   └── server.ts
    │   └── app.ts 
    ├── .env
    ├── .env.example
    ├── .gitignore
    ├── README.md
    ├── custom.d.ts
    ├── package-lock.json
    ├── package.json
    ├── render.yaml
    ├── tsconfig.json
    └── types.d.ts
```

### Frontend
```bash
    project
    ├── public
    ├── src
    │   ├── assets
    │   ├── components
    │   │   ├── Carrusel/
    │   │   ├── Context/
    │   │   ├── Footer/
    │   │   ├── Layouts/
    │   │   ├── Modals/
    │   │   ├── Pages/
    │   │   ├── shared/
    │   │   └── Pages
    │   ├── contexts/
    │   ├── hooks/
    │   ├── App.jsx
    │   ├── index.css
    │   └── main.jsx
    │
    ├── .eslintrc.cjs
    ├── .gitignore
    ├── axiosConfig.js
    ├── index.html
    ├── package-lock.json
    ├── package.json
    ├── postcss.config.js
    ├── tailwind.config.js
    ├── vercel.json
    ├── vite.json
    └── README.md
```

## Installation and configuration
### Frontend
1. Clone this repository
```bash 
    git clone https://github.com/marimorita/DataSportFront.git
    cd DataSportFront
```
2. Install dependencies
```bash 
    npm install
```
3. Setting environment variables
```bash 
    cp .env.example .env 
```
4. Running the application
```bash 
    npm run dev
```

## Deployment
- > Railway: SQL Services
- > Render: Backend 
- > Vercel: Frontend 

## Authors

Jerónimo Arias - [GitHub](https://github.com/Jer0-Arias)
 
Sergio Chica - [GitHub](https://github.com/SergioChica)

Mariana Mendez - [GitHub](https://github.com/marimorita)

## Contributing
Contributions are welcome! Please follow these steps to contribute:

Fork the repository.

- > Create a new branch (git checkout -b feature-branch).

- > Commit your changes (git commit -m "Add new feature").

- > Push to the branch (git push origin feature-branch).

Open a pull request.
