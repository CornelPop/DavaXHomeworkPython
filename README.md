\# Project Overview



This project was developed by a team of 3 members(Me, Robert Fedus, Reka Katalin) as part of a technical assignment. It consists of a backend API built with Python and a frontend application developed using React and JavaScript.



The backend is responsible for processing mathematical operations and exposing RESTful API endpoints. The frontend provides a modern and user-friendly web interface that interacts with the backend through HTTP requests.



We chose to implement a fully functional web application with a clear separation of concerns between backend and frontend.



All mandatory technologies and practices specified in the assignment were respected, including the use of Pydantic for serialization/deserialization, clean code structure, and proper linting with flake8.



\# Tech Stack



Backend:



\* Python

\* FastAPI

\* Pydantic

\* SQLite (used as a database for persisting API requests)

\* Uvicorn (ASGI server for running the application)



Frontend:



\* JavaScript

\* React

\* Vite

\* Tailwind CSS

\* Radix UI

\* Lucide React

\* shadcn/ui

\* React Router DOM



\# How It Works



Backend (Python with FastAPI):



The backend exposes RESTful API endpoints that perform three main mathematical operations:



\* Power (pow)

\* Fibonacci number (nth term)

\* Factorial



Each request made to the backend is logged and stored in a SQLite database. All endpoints return JSON responses. Data validation and serialization are handled using Pydantic.



Frontend (React with JavaScript):



The frontend is a single-page web application built using modern web technologies. It allows users to input parameters for mathematical operations and receive computed results from the backend via HTTP requests. The UI is built using Tailwind CSS and enhanced with component libraries like Radix UI and shadcn/ui to ensure responsiveness and accessibility. React Router DOM is used to handle routing between views. The frontend communicates with the backend..



Additional Work



I completed several exercises using Python to improve my programming fundamentals and deepen my understanding of core concepts.



