# Google Clone with Animal Searches Nextjs 13

This is a project that replicates the Google search experience but uses Faker.js to generate animal search results. The project was built with Next.js 13 and includes automated testing using Cypress. You can also run the project easily using Docker.

## Overview

This project is a simple clone of Google's homepage, but instead of performing real web searches, it generates fictional animal search results with the help of Faker.js.

## Installation with Docker

Make sure you have Docker installed on your system. You can download and install Docker from Docker's official website.

Clone this repository to your machine:

```bash
  https://github.com/VictorLopes643/google.git
```

Navigate to the project directory:

```bash
  cd google
```

Build the Docker image using the Dockerfile in your project directory.

```bash
docker build -t google .
```

Run the Docker Container

```bash
docker run -p 3000:3000  google
```

Now, your project will be running at http://localhost:3000.

## Installation npm or yarn

Clone this repository to your machine:

```bash
  https://github.com/VictorLopes643/google.git
```

Navigate to the project directory:

```bash
  cd google
```

Install dependencies using npm or yarn:

```bash
  npm install
```

or

```bash
 yarn install
```

Start the project locally:

```bash
npm run dev
```

or

```bash
npm run dev
```

Now, your project will be running at http://localhost:3000.

## Testing

This project includes automated tests using Cypress. To run the tests, follow these steps:

Ensure that the project is running locally.

Open a new terminal and run the following command:

```bash
npm run cypress:open
```

## Stack

**Front-end:** Nextjs 13, TailwindCSS

**Tests:** Cypress
