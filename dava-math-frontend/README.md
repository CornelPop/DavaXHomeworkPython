    # DavaMath Frontend

This is the frontend for the **DavaMath** project, a web application for solving mathematical problems. The frontend is built using **React** and **Vite**, and communicates with a FastAPI backend for authentication and mathematical operations.
Project made by: Fedus Robert, Pop Cornel Adrian, Darko Reka - Katalin

---

## Tech Stack

- **React** 
- **Vite** 
- **Tailwind CSS** 
- **Radix UI** 
- **Lucide React** 
- **Shadcn** 
- **Class Variance Authority**, **clsx**, **tailwind-merge**
- **React Router DOM**

---

## 🛠️ Setup & Installation

1. **Install dependencies:**
   ```sh
   npm install
   ```

## 🧑‍💻 Development Mode

Start the development server with hot reload:

```sh
npm run dev
```

- The app will be available at [http://localhost:5173](http://localhost:5173).
- Make sure the backend is running at `http://localhost:8000`.

---

## Environment Variables

- **API_BASE**: Set in [`src/services/mathOperationsService.js`](src/services/mathOperationsService.js).
  - Change this value if your backend runs on a different host/port.

---

## 📦 Build & Deployment

To build the project for production:

```sh
npm run build
```

- The output will be in the `dist/` folder.

To preview the production build locally:

```sh
npm run preview
```

### Docker

You can build and run the frontend using Docker:

```sh
docker build -t davamath-frontend .
docker run -p 5173:5173 davamath-frontend
```

---

## 📝 License

This project is licensed under the MIT License.

---
