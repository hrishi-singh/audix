# Audix - Audiobook Reviews Web App

Audix is an audiobook web app that allows users to explore, review, and rate a wide range of audiobooks. Built with modern web technologies, Audix offers a user-friendly interface and a rich user experience, making it easier than ever to discover your next great listen.

## Features

- Explore a vast collection of audiobooks across various genres.
- Read and write reviews for your favorite audiobooks.
- Rate audiobooks to help others find great content.
- User-friendly and visually appealing interface.


## Getting Started

To get started with Audix, follow these steps:

### Prerequisites

Make sure you have the following installed on your machine:

- [Node.js](https://nodejs.org/en/) (v14 or higher)
- [MongoDB](https://www.mongodb.com/) (local or cloud instance)
- [Git](https://git-scm.com/)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/audix.git
   cd audix
   ```

2. Install the dependencies for both the frontend and backend:

   ```bash
   # Install backend dependencies
   cd server
   npm install

   # Install frontend dependencies
   cd ../client
   npm install
   ```

3. Set up environment variables:

   - Create a `.env` file in the `server` directory and add your MongoDB URI and any other required environment variables.

   ```bash
   MONGO_URI=your_mongodb_uri
   ```

## Running the Development Server

1. Start the backend server:

   ```bash
   cd server
   npm run dev
   ```

2. Start the frontend server:

   ```bash
   cd ../client
   npm start
   ```

3. Open your browser and navigate to `http://localhost:3000` to see the app in action.

## Tech Stack

- **React.js**: The app's frontend is built using React.js, providing a dynamic and responsive user interface.
- **MERN Stack**: The backend is powered by the MERN stack (MongoDB, Express.js, React.js, Node.js), enabling efficient and scalable full-stack development.
- **REST API**: The application communicates between the frontend and backend using REST APIs, ensuring smooth data flow and interaction.
- **Figma**: The UI/UX design was created in Figma, providing a clean and modern look.
- **Mockaroo**: Audiobook data was randomly generated using Mockaroo for testing and development purposes.


## Contributing

We welcome contributions to Audix! If you have any ideas, bug fixes, or enhancements, please feel free to submit a pull request. Be sure to follow the project's coding guidelines and include detailed information in your pull requests.


Happy coding! 🎧
