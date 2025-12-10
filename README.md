### Business Website
A modern dynamic pages & progressive website.

### TECH STACK
- NodeJS
- ReactJS
- TailwindCSS
- MongoDB

```
backend/
 ├── src/
 │   ├── domain/                      # Enterprise rules
 │   │    ├── entities/               # Product/User/Order entities (classes/schemas)
 │   │    └── interfaces/             # Repo interfaces
 │   │
 │   ├── application/                 # Use cases
 │   │    ├── product/                # Example: product use cases
 │   │    │    ├── CreateProduct.js
 │   │    │    └── GetProducts.js
 │   │    ├── user/
 │   │    └── order/
 │   │
 │   ├── infrastructure/              # External implementations
 │   │    ├── database/
 │   │    │    ├── mongoose/
 │   │    │    │    ├── ProductModel.js
 │   │    │    │    └── ProductRepositoryMongo.js
 │   │    ├── security/
 │   │    └── email/
 │   │
 │   ├── presentation/                # Express layer
 │   │    ├── controllers/
 │   │    │     └── productController.js
 │   │    ├── routes/
 │   │    │     └── productRoutes.js
 │   │    └── middleware/
 │   │
 │   ├── config/
 │   └── server.js
 │
 └── package.json



 frontend/
 ├── src/
 │   ├── application/          # Use cases (interact with backend API)
 │   ├── domain/               # Entities, models, validation
 │   ├── infrastructure/       # API service calls (axios)
 │   ├── presentation/         # UI components
 │   │    ├── pages/
 │   │    ├── components/
 │   │    └── forms/
 │   ├── routes/
 │   ├── store/
 │   └── App.jsx
 └── package.json


```

