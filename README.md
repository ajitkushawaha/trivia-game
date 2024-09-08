# Trivia Quiz App

This is a Trivia Quiz web application built using React, TypeScript, and Vite. It allows users to answer a series of trivia questions fetched from an external API, gives immediate feedback on whether the answer was correct or wrong, and keeps track of the user's score. The project also includes testing using Jest.

## Table of Contents
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Running the App](#running-the-app)
- [Running Tests](#running-tests)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)

## Features
- Displays trivia questions fetched from an external API.
- Allows users to choose one answer for each question.
- Provides immediate feedback after the user selects an answer (correct or wrong).
- Tracks user score across multiple questions.
- A final results page showing correct and incorrect answers.
- Ability to restart the quiz.
- Fully tested using Jest.

## Tech Stack
- **Frontend**: React, TypeScript, Vite
- **State Management**: React Context API
- **Routing**: React Router
- **Styling**: Custom CSS (you can replace with CSS Modules or a CSS-in-JS solution)
- **Testing**: Jest

## Getting Started

### Prerequisites
Make sure you have the following installed on your machine:
- [Node.js](https://nodejs.org/) (v16 or above)
- [npm](https://www.npmjs.com/) (v8 or above) or [yarn](https://yarnpkg.com/)

### Setup

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/trivia-quiz-app.git

Project Structure

/trivia-quiz-app
│
├── /public              # Static assets like index.html
├── /src                 # Main source code folder
│   ├── /assets          # Static assets for the app (images, etc.)
│   ├── /components      # Reusable components like QuestionCard
│   ├── /context         # React Context API for managing global state
│   ├── /hooks           # Custom React hooks
│   ├── /pages           # Pages like Home, Quiz, and Results
│   ├── /styles          # Global and component-specific styles
│   ├── /tests           # Unit tests for Jest
│   ├── App.tsx          # Main App component
│   └── index.tsx        # Entry point for the app
├── .gitignore           # Files to ignore in Git
├── jest.config.js       # Jest configuration file
├── package.json         # Project dependencies and scripts
├── tsconfig.json        # TypeScript configuration
├── vite.config.ts       # Vite configuration
└── README.md            # This file




The key sections outlined in the README.md file serve to provide a comprehensive guide for users, developers, and contributors. Here’s a more detailed explanation of each section:

1. Features:
This section gives a high-level overview of the main functionalities of your Trivia Quiz App. It helps the reader quickly understand what your app can do. Typical features for a quiz app might include:

Displaying trivia questions.
Letting users select answers from multiple options.
Showing immediate feedback (whether the selected answer is correct or incorrect).
Keeping track of the score.
Displaying a final result page after all questions have been answered.
Option to restart the quiz.
Purpose: To help users know the functionality the app offers.

2. Tech Stack:
This lists the core technologies used in the project, which provides a sense of the architecture and dependencies. In this case:

Frontend: React and TypeScript.
Build tool: Vite (used for bundling and optimizing the project).
State Management: React Context API (manages global state such as the current question, score, etc.).
Routing: React Router (used for page navigation).
Styling: Plain CSS or any framework you use for styling the application.
Testing: Jest for writing unit tests and testing application components.
Purpose: To inform other developers about the technologies used, so they understand the project's environment and architecture.

3. Getting Started:
This is one of the most critical sections for developers who want to run the project locally. It includes:

Prerequisites: Tools and software developers need to have installed (Node.js, npm, yarn).
Setup Instructions: Steps to clone the repository, install dependencies, and set up the development environment.
Purpose: To help anyone quickly and easily set up the project on their local machine.

4. Running the App:
This section describes how to start the app's development server using Vite. It includes:

The specific command to run (e.g., npm run dev or yarn dev).
Information about accessing the app, usually http://localhost:3000.
Purpose: To allow developers to easily test and work on the app in a local environment.

5. Running Tests:
In this section, you describe how to run unit tests using Jest. It typically includes:

The command for running tests (e.g., npm run test).
A brief note about how Jest works with your project (if you have a specific configuration for Jest).
Purpose: To help developers ensure the code is working as expected through automated tests.

6. Project Structure:
This section explains how the project's files and folders are organized. In a typical Vite React project, you may describe:

/src: Contains the main source code.
/components: Where reusable components like QuestionCard live.
/context: Where the React Context API is used for managing global state.
/hooks: Custom hooks like useFetchTrivia used for fetching questions.
/pages: Pages like Home, Quiz, and Results.
/styles: Styles for global and component-specific CSS.
Other files like vite.config.ts, jest.config.js, tsconfig.json, etc