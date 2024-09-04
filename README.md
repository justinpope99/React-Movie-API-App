<a name="readme-top"></a>

<div align="center">

  <h1><b>React Movie API App</b></h1>

</div>
<br>

# 📗 Table of Contents

- [📖 About the Project](#about-project)
  - [🛠 Built With](#built-with)
    - [Tech Stack](#tech-stack)
    - [Key Features](#key-features)
  - [🚀 Live Demo](#live-demo)
- [💻 Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [React Movie API App Setup](#setup)
  - [Create React App](#create-react-app)
- [📷 Preview](#Preview)
- [👥 Author](#authors)
- [🤝 Contributing](#contributing)
- [⭐️ Show your support](#support)

<br>

# 📖 React Movie API App <a name="about-project"></a>

In this project, I have created a React app that connects to [my custom Spring Boot API](https://github.com/justinpope99/Java-Spring-Boot-Movie-API) to retrieve a list of movies, and displays different properties of those movies depending on what page the user goes to. The user can search for movies, view information about each movie, and create reviews, as well as see previous reviews that were posted.

<br>

## 🛠 Built With <a name="built-with"></a>

- HTML
- CSS
- React
- JavaScript
- Create React App

### Tech Stack <a name="tech-stack"></a>

I am using HTML, CSS, React, and JavaScript.

<details>
  <summary>Client</summary>
  <ul>
    <li><a href="https://html5.org/">HTML</a></li>
    <li><a href="https://www.w3.org/Style/CSS/Overview.en.html">CSS</a></li>
    <li><a href="https://react.dev/">React</a></li>
    <li><a href="https://www.w3schools.com/js/DEFAULT.asp">JavaScript</a></li>
  </ul>
</details>

### Key Features <a name="key-features"></a>

- On the home page, the app displays a list of movies on the home page in a Carousel using Material UI. In this Carousel, you will see the movie poster, backdrop, director, and overview. You will also see three buttons, one to link you to the movie's trailer page, one for the reviews page, and one for the overview page.
- At the top of the page, you will see a header that can link to the Home page, Search page, and the GitHub repository.
- On the search page, I have set up an input with an onChange function that uses derived state to filter through the list of movies to only show movies that match the query the user has entered. We have set up a useMemo for this as well so the code only runs when certain parameters have changed, the list of movies, or the query. The search will filter by the title. Each movie is displayed in a custom card that lists some details about the movie and includes two buttons to allow you to go to the movie's Movie page, or Reviews page.
- The Movie page displays the movie title, director, release date, poster, and overview. It also includes a button to go directly to the Reviews page. This functionality is implemented using useNavigate. There is also a link to take the user to the trailer.
- The reviews page allows the user to submit a review and gives them a toastify notification upon sumbmission.
- The page also dynamically counts the number of reviews from the database, and contains a scrollbar so users can scroll down to see all the reviews.
- Each review has an Avatar from Material UI, a name, the review content, and the date the review was posted.
- All of the data is fetched from [my custom Spring Boot API](https://github.com/justinpope99/Java-Spring-Boot-Movie-API) using Axios.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 🚀 Live Demo <a name="live-demo"></a>

[Live site on Vercel](https://react-movie-api-app.vercel.app/)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 💻 Getting Started <a name="getting-started"></a>

To get a local copy up and running, follow these steps.

### Prerequisites <a name="prerequisites"></a>

In order to run this project you need:

- [Code Editor](https://code.visualstudio.com)
- [Git installed](https://git-scm.com)
- [Node.js](https://nodejs.org)

<br>

## React Movie API App Setup <a name="setup"></a>

- Clone this branch to your local machine

  `git clone https://github.com/justinpope99/React-Movie-API-App/`

- Once the code has been downloaded

  `cd movie-gold-v1`

- Install the depencies

  `npm install`

- Run the application

  `npm start`

<p align="right">(<a href="#readme-top">back to top</a>)</p>

# Getting Started with Create React App <a name="create-react-app"></a>

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 📷 Preview <a name="Preview"></a>

### Home Page

<br>
<img width="739" alt="Screenshot of Justin Pope's React Movie API App Home Page" src="https://github.com/user-attachments/assets/2546e80d-5f6e-4b81-a384-34513a5c54ed">

<br>

### Search Page

<br>
<img width="739" alt="Screenshot of Justin Pope's React Movie API App Search Page" src="https://github.com/user-attachments/assets/ec237596-0483-479a-8cd6-94e37b7716d4">

<br>

### Trailer Page

<br>
<img width="739" alt="Screenshot of Justin Pope's React Movie API App Trailer Page" src="https://github.com/user-attachments/assets/dc6039b6-a11a-4b92-9422-1b0cab0d5edb">

<br>

### Reviews Page

<br>
<img width="739" alt="Screenshot of Justin Pope's React Movie API App Reviews Page" src="https://github.com/user-attachments/assets/5991c458-ea5c-43df-9ae9-8d0767accb8a">

<br>

### Movie Page

<br>
<img width="739" alt="Screenshot of Justin Pope's React Movie API App Movie Page" src="https://github.com/user-attachments/assets/b2df2d1f-7c7a-4a31-a5f1-ae59e553d94f">

<br>
<br>

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 👥 Author <a name="authors"></a>

👤 **Justin Pope**

- GitHub: [@justinpope99](https://github.com/justinpope99)
- LinkedIn: [LinkedIn](https://www.linkedin.com/in/justin-pope-2a040a102/)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 🤝 Contributing <a name="contributing"></a>

Contributions, issues, and feature requests are welcome!

Feel free to check the [issues page](../../issues/).

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## ⭐️ Show your support <a name="support"></a>

If you like this project give it a star

<p align="right">(<a href="#readme-top">back to top</a>)</p>
