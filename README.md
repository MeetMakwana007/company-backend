# User and People API

This project is a Node.js application that provides a RESTful API for user authentication and managing people details. The API includes endpoints for user login, registration, and managing people counts.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Configuration](#configuration)
- [Usage](#usage)
- [API Documentation](#api-documentation)
- [Error Handling](#error-handling)
- [Contributing](#contributing)
- [License](#license)

## Features

- **User Authentication**: Login and register users with JWT tokens.
- **People Management**: Retrieve and update people counts categorized by gender and age.
- **Swagger Documentation**: Auto-generated API documentation available at `/docs`.

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/your-repository.git
   ```

2. **Navigate to the project directory:**

   ```bash
   cd your-repository
   ```

3. **Install dependencies:**

   ```bash
   npm install
   ```

## Configuration

1. **Create a `.env` file in the root directory with the following content:**

   ```plaintext
   PORT=5000
   VERCEL_URL=your-vercel-url.vercel.app
   MONGO_URI=your-mongodb-connection-string
   ```

2. **Replace `your-vercel-url.vercel.app` with your Vercel deployment URL.**

3. **Replace `your-mongodb-connection-string` with your MongoDB connection string.**

## Usage

1. **Start the server:**

   ```bash
   npm start
   ```

2. **Access the Swagger API documentation:**

   Visit `http://localhost:5000/api/docs` in your browser.

## API Documentation

The API endpoints are documented using Swagger. The documentation provides details about the available routes, request/response formats, and error codes.

### Endpoints

- **User Authentication**

  - `POST /api/users/login`: Authenticate user and get a JWT token.
  - `POST /api/users/signup`: Register a new user and get a JWT token.

- **People Management**
  - `GET /api/people/details`: Retrieve counts of people categorized by gender and age.
  - `PATCH /api/people/modify`: Update the details of people counts.

## Error Handling

Errors are handled and returned in the following format:

```json
{
  "message": "Error message here"
}
```

## Error Codes

- **200 OK**: No Error was returned
- **400 Bad Request**: Invalid request parameters or data.
- **401 Unauthorized**: Authentication failure.
- **500 Internal Server Error**: Server-side issues.

## Contributing

If you'd like to contribute to this project, please fork the repository and create a pull request with your changes. Ensure your code follows the project's coding standards and includes appropriate tests.
