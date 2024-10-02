# Cat-fact-generator
A simple React application that generates random cat facts using the Cat Fact API. This app fetches a new cat fact each time the user clicks the “Generate cat fact” button. It’s a fun, lightweight project to practice API calls and handling asynchronous data in React.

# How It Works

	•	State Management: The app uses React’s useState to store the cat fact retrieved from the API.
	•	API Call: The app uses axios to fetch random cat facts from the Cat Fact API.
	•	Effect Hook: The useEffect hook is used to automatically fetch a cat fact as soon as the app loads.
	•	Button Functionality: When the “Generate cat fact” button is clicked, it triggers another API call to fetch a new random cat fact.

# Features

	•	Fetches a random cat fact when the app loads.
	•	Allows users to generate a new cat fact by clicking a button.
	•	Displays the cat fact dynamically.

# Technologies Used

	•	React: For building the user interface and managing state.
	•	Axios: For making HTTP requests to the Cat Fact API.
	•	JavaScript (ES6): Language features like useState, useEffect, and arrow functions.

# How to Run

	1.	Clone this repository.
	2.	Run npm install to install the necessary dependencies.
	3.	Start the development server by running npm start.
	4.	The app will open in your browser, and a random cat fact will be displayed. Click the “Generate cat fact” button to load a new one.
