# Basic HTTP Server with Logging
This repository contains a simple HTTP server implemented using Node.js. The server handles basic routes and logs each request to a file.
It is designed for educational purposes and can be extended for more complex applications.

## Table of Contents
- Features
- Getting Started
- Usage
- Endpoints
- Logging
- Contributing
- License

## Features
- Basic HTTP server setup using Node.js.
- Route handling for /, /about, and /contact.
- Request logging to a file (log.txt).
- Ignores /favicon.ico requests to minimize unnecessary processing.

## Getting Started

### Prerequisites

To run this project locally, you'll need the following installed on your system:

- Node.js (version 12 or higher recommended)

### Installation

1. Clone the repository:

```bash
git clone https://github.com/vaibhav0006/node-assignment-1.git
```
2. Install dependencies:

```bash
  npm install
```
## Usage

1. Start the server
```bash
npm start
```
2. Access the server in your browser:

- Navigate to http://localhost:5000 to view the homepage.
- Use other endpoints such as http://localhost:5000/about?name=YourName and http://localhost:5000/contact.

## Endpoints
Home (/):
- Returns a text response "HomePage".

About (/about):
- Takes a name query parameter and responds with "Hi {name}".
- Example: http://localhost:5000/about?name=John.

Contact (/contact):
- Responds with "ContactPage" for GET requests.

## Logging
Each request is logged to a log.txt file with a timestamp and the request URL. This helps in monitoring the server's activity and for debugging purposes.

## Contributing
Contributions are welcome! Follow these steps to contribute:

1. Fork the repository.
2. Create a new branch for your feature or bug fix:
   
```bash
 git checkout -b feature/your-feature-name
```
3. Make your changes and commit them:
   
```bash
 git commit -m "Add your descriptive commit message"
```
4. Push your changes:
   
```bash
 git push origin feature/your-feature-name
```
5. Create a pull request on GitHub.

## License
This project is licensed under the MIT License. See the LICENSE file for more details.
