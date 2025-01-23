# Konnekt Bio-Links App

This is a simple, customizable **Bio-Links** app built with **React.js**. The app allows users to display a list of links along with a short description and logo. This project is designed to be easily modifiable and extendable, allowing for the addition of new links and updates to the existing content.

## Table of Contents

- [Demo](#demo)
- [Features](#features)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the App](#running-the-app)
- [How to Use](#how-to-use)
  - [Modifying Links](#modifying-links)
  - [Updating Header Content](#updating-header-content)
- [License](#license)

## Demo

A live demo of the app can be found [here](https://konnekt.gr).

## Features

- **Dynamic Links**: Easily configurable links for any resource.
- **Responsive Design**: Mobile-first design that adapts to different screen sizes.
- **Customizable Header**: Ability to update the logo, title, and description.
- **Smooth UI Animations**: Hover effect on buttons for a modern touch.

## Project Structure

```
.
├── src
│   ├── App.js
│   ├── App.css
│   ├── AppElements.js
│   ├── linksData.js
│   ├── Assets
│   │   └── konnekt-pink.jpg
│   └── index.js
├── public
│   ├── index.html
│   └── ...
├── LICENSE
├── README.md
└── package.json
```

- **`App.js`**: The main app component where the header and the links are rendered dynamically.
- **`AppElements.js`**: Contains styled components used in the app.
- **`linksData.js`**: Contains the header and link data that can be easily modified.
- **`Assets/`**: Contains static assets such as images.
- **`App.css`**: Global CSS styling for the app.

## Getting Started

### Prerequisites

- **Node.js** (>= 14.x)
- **npm** or **yarn** for package management.

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/konnekt-linktree-app.git
   cd konnekt-linktree-app
   ```

2. Install the necessary dependencies:

   Using npm:

   ```bash
   npm install
   ```

   Or using yarn:

   ```bash
   yarn install
   ```

### Running the App

To start the development server, run:

```bash
npm start
```

Or if using yarn:

```bash
yarn start
```

This will open the app in your default browser at `http://localhost:3000`.

## How to Use

### Modifying Links

All the links in the app are stored in `linksData.js`. Each link object contains the following properties:

- **`id`**: A unique identifier for each link.
- **`buttonTitle`**: The text that appears on the button.
- **`url`**: The target URL for the link.
- **`icon`**: Placeholder for an icon (currently not in use).

To modify the links, simply update the `linksData` array in `linksData.js`:

```javascript
export const linksData = [
	{
		id: 1,
		buttonTitle: "New Button Title",
		url: "https://new-url.com",
		icon: "",
	},
	// Add more links as needed
];
```

### Updating Header Content

The header section (image, title, and description) is defined in `headerData` in the `linksData.js` file. To update the content:

```javascript
export const headerData = {
	imageSrc: "./Assets/new-logo.jpg", // Path to new logo image
	altText: "New alt text",
	title: "New Title",
	description: "New description text for the header section.",
};
```

- **`imageSrc`**: Path to the logo image.
- **`altText`**: Alt text for accessibility.
- **`title`**: The text displayed as the main header.
- **`description`**: The sub-header text that provides additional information.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
