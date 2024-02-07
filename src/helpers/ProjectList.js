import Pic1 from '../assets/chat.svg';
import Pic2 from '../assets/1.png';
import Pic3 from '../assets/angular.png';
import Pic4 from '../assets/pureriver.png';
import Pic5 from '../assets/serverless.svg';
import Pic6 from '../assets/pokebaner.svg';
import Pic7 from '../assets/vue.png';


export const ProjectList = [

    {
        name: "Vue live-chat App",
        image: Pic7,
        skills: "JavaScript",
        stack: "VUE, Firebase Database",
        about: "Live-Chat Room using VUE framework, firebase Authentication system for user to sign up and login, hosted on firebase ",
        link: 'https://vue-annachatapp.web.app/chatroom',
        github: 'https://github.com/annaszumiec/VUE-live-chat',
        isLinked: false,
    },
    {
        name: "Native App",
        image: Pic1,
        skills: "JavaScript",
        stack: "React Native, Expo, and Google Firestore Database",
        about: "Chat app for mobile devices using React Native a framework for building Android and iOS apps that only requires one codebase. The app provide users with a chat interface and options to share images and their location.",
        link: '',
        github: 'https://github.com/annaszumiec/Chat-app',
        isLinked: false,
    },

    {
        name: "Serverless App",
        image: Pic2,
        skills: "JavaScript, HTML,CSS ,Gherkin ",
        stack: "React Native, Expo, and Google Firestore Database",
        about: "Serverless, progressive web application (PWA) with React using a test-driven development (TDD) technique. The application uses the Google Calendar API to fetch upcoming events.",
        link: 'https://annaszumiec.github.io/meet/',
        github: 'https://github.com/annaszumiec/meet',
        isLinked: true

    },
    {
        name: "Angular Movie App ",
        image: Pic3,
        skills: "TypeScript, HTML, SCSS ",
        stack: "Angular, Node.js, npm package ",
        about: "Using Angular to build client-side for an application called Pureriver Films based on its existing server-side code (REST API and database)",
        link: 'https://pureriverfilms-angular.netlify.app',
        github: 'https://github.com/annaszumiec/PureriverFilms-Angular-client'

    },
    {
        name: "Movie App - Client Side",
        image: Pic4,
        skills: "JavaScript, HTML, SCSS",
        stack: "MERN (MongoDB, Express, React, Node.js)",
        about: "Using React to build the client-side for an application called Pureriver Films based on its existing server-side code (REST API and database).Application use Bootstrap as a UI library for styling and responsiveness and is hosted online on platform Netlify. ",
        link: 'https://pureriverfilms.netlify.app/',
        github: 'https://github.com/annaszumiec/PureriverFilms_client'

    },

    {
        name: "Movie App - Server Side",
        image: Pic5,
        skills: "JavaScript, HTML, CSS",
        stack: "MERN (MongoDB, Express, React, Node.js)",
        about: "Server-side component of a “movies” web application with REST API for an application called “Pureriver Films” that interacts with a database that stores data about different movies.",
        github: 'https://github.com/annaszumiec/pureriverfilms'

    },
    {
        name: "Pokédex",
        image: Pic6,
        skills: "JavaScript ,HTML, CSS",
        stack: "API, ESLint,   ",
        about: "This Application displays Pokemon details (Image / height/ weight / types / abilities) when the spinning pokemon ball (on hoover) is cliked. (function available with cursor - touch screen do not apply) It is also possible to use search funktion to find quickly specific pokemon by typing pokemon's name.",
        link: 'https://annaszumiec.github.io/Pokedex/',
        github: 'https://github.com/annaszumiec/Pokedex'
    },
];

