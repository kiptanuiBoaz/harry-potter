# Harry Potter Web Application Documentation

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Setup and Installation](#setup-and-installation)
- [Usage](#usage)
- [Redux State Management](#redux-state-management)
- [Responsive Design](#responsive-design)
- [Theme Toggle](#theme-toggle)
- [Authentication](#authentication)
- [Global Styles](#global-styles)
- [Pagination](#pagination)
- [GitHub Repository](#github-repository)

## Introduction

The Harry Potter Web Application is a Next.js-based project that utilizes the App Router, fetching data from the Harry Potter API to display character information in a table. The character names serve as links to individual character pages with more details. The application uses Redux Toolkit for state management and offers a responsive design for various screen sizes. It also provides a theme toggle for light and dark UI styling, simulates login and authentication using a Cookie token, and includes pagination with customizable items per page.

## Features

1. Fetches and displays character data from the Harry Potter API.
2. Utilizes Next.js version 13 with App Router.
3. Implements Redux Toolkit for state management.
4. Responsive design to ensure compatibility across devices.
5. Theme toggle to switch between light and dark UI themes.
6. Simulates login and authentication using a Cookie token.
7. Centralizes global styles for colors and fonts.
8. Pagination feature with the ability to customize items per page.

## Technologies Used

- Next.js 13
- TypeScript
- Redux Toolkit
- Tailwind CSS
- Cookie Token Authentication
- Harry Potter API

## Setup and Installation

1. Clone the repository from GitHub.
2. Install project dependencies using `npm install`.
3. Start the development server with `npm run dev`.

## Usage

Upon starting the development server, navigate to the application in your web browser to explore the Harry Potter character data displayed in a table. Clicking on a character's name will take you to a detailed character page. Toggle between light and dark themes using the provided UI element. Simulated login and authentication will allow you to experience different parts of the application. Customize the items per page for pagination to suit your preferences.

## Redux State Management

The project utilizes Redux Toolkit for efficient state management. Actions and reducers are organized using slices to manage different aspects of the application's state, including character data, authentication, and theme settings.

## Responsive Design

The application is designed to be responsive, ensuring a seamless experience across various screen sizes and devices. Media queries and responsive CSS techniques are used to adapt the layout and styling as needed.

## Theme Toggle

Switch between light and dark UI themes using the theme toggle feature. The user's choice of theme is stored in the Redux state for consistent theming throughout the application.

## Authentication

The application simulates login and authentication using a Cookie token. The token is stored in an environment variable named `COOKIE_TOKEN`, abstracted from the codebase. This allows different user experiences based on authentication status.

## Global Styles

Centralized global styles are defined for colors and fonts, providing a consistent and cohesive visual identity for the application.

## Pagination

The project includes pagination functionality that allows users to navigate through character data in the table. The number of items displayed per page is customizable, providing flexibility for the user's viewing preferences.

## GitHub Repository

For the complete source code and project details, please refer to the [GitHub repository](https://github.com/kiptanuiBoaz/harry-potter.git).

Feel free to explore the codebase, run the application, and contribute to its development. If you have any questions or require further assistance, please don't hesitate to reach out.

Enjoy your journey through the magical world of Harry Potter in this web application!

**Note:** This documentation provides an overview of the key features and components of the project. Detailed code explanations and usage instructions can be found within the codebase.
