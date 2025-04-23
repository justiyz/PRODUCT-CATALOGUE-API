# 🚲 Product Catalogue API

A RESTful API for managing products — built with Node.js, Express, Postgres, Sequelize, and Jest.

---

## 📦 Technologies

- Node.js (Express)
- Postgres Database
- Sequelize ORM
- Postman documentation
- Unit tests with Jest
- GitHub Actions CI pipeline

---

## 📦 Features

- CRUD for products
- Basic search/filter by product name & sku
- Service/controller architecture
- Validation using Joi
- Middlewares
- GitHub Actions CI pipeline

---

## 🚀 Setup

### 1. Clone the repo

```bash
git clone https://github.com/your-username/product-catalogue-api.git
cd product-catalogue-api
```

### 2. Install dependencies

```bash
npm install
```

### 3. Environment variables

Create a `.env` file in the root:

```env
LOOK AT THE ".env.test" file to determine the setup based on the enivroment.
PORT=4000
NODE_ENV=development
DB_USERNAME=your_db_user
DB_PASSWORD=your_db_password
DB_NAME=product_catalogue_dev
DB_HOST=localhost
```

(Also create `.env.test` for test environment)

### 4. Run the server

```bash
npm run dev
```

---

## 🥪 Running Tests

```bash
npm run test
```

> Unit tests written with **Jest**, covering contoller/services for product creation and retrieval.

---

## 🥪 Creating Models

```bash
npx sequelize-cli model:generate --name ModelName --attributes xxx:string,xxo:integer
```
 - Example:
```bash
     npx sequelize-cli model:generate --name Users --attributes name:string,balance:decimal,age:integer
```

---

## 🥪 Running Migrations (do this after you have connected to your database)

```bash
npx sequelize-cli db:migrate
```

---

## 🔍 API Documentation

- Postman Collection: [](#)

---

## 📁 Project Structure

```
src/
├── controllers/
├── services/
├── schemas/
├── middlewares/
├── routes/
├── utils/
├── tests/
└── sequelize/
```

---

## 🔀 CI/CD

GitHub Actions is set up for:

- Installing dependencies
- Running tests on push and pull requests to `main`

Workflow file: `.github/workflows/nodejs.yml`

---

## ⚙️ Assumptions

- All products have unique names
- Product price is stored with 2 decimal precision
- Search endpoint (find all products) uses a case-insensitive LIKE query and can also be paginated

---


## 🙌 Author

**Ernest Inyang**  
Senior Backend Engineer

# PRODUCT-CATALOGUE-API
