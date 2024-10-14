# CSE3311_Team_8

# CampusConnect - ReactJS & Java Spring Boot

## Overview
CampusConnect is a social media platform built with ReactJS on the frontend and Java Spring Boot on the backend. This guide will help you set up and run both parts of the project locally.

## Prerequisites
Make sure you have the following installed on your machine:
- **Node.js** (v16 or higher) and **npm** for the React frontend.
- **Java** (JDK 17 or higher) for the Spring Boot backend.
- **Maven** for managing dependencies in the Java Spring project.

### 1. Cloning the Project
First, clone the repository:

git clone https://github.com/stealthcamaro/CSE3311_Team_8.git
cd CSE3311_Team_8/ReactJS-JavaSpringVersion

### 2. Running the Java Spring Backend
Step 1: Navigate to Backend Directory
Go to the Java Spring backend directory:

Step 3: Build and Run the Spring Boot App
Use Maven to build and run the project:

./mvnw spring-boot:run
The backend will start on http://localhost:8080.

Connecting Frontend to Backend
The React app is configured to communicate with the Spring Boot backend running on http://localhost:8080. Make sure both the frontend and backend are running at the same time.

Viewing the App

Make sure both the React frontend and the Spring Boot backend are running.
Open your browser and go to:
Frontend (React): http://localhost:3000
The React app will use the backend for any API calls.
Troubleshooting
Common Errors
Port Conflicts: If localhost:3000 or localhost:8080 is already in use, you may need to change the ports or stop other running processes.
Database Connection Issues: Ensure PostgreSQL is running and the credentials in application.properties are correct.
Frontend not connecting to Backend: Ensure that both the frontend and backend are running on the correct ports (3000 for frontend, 8080 for backend).

License
This project is licensed under the MIT License.
