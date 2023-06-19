/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Nikunj Raghav",
  title: "Hi all, I'm Nikunj",
  subTitle: emoji(
    "An MSc Software Systems graduate with a talent for web development. I've got 1 year of experience as a junior developer working with JavaScript, React and Python. I'm self-motivated, highly organized & reliable team player. "
  ),
  resumeLink:
    "https://drive.google.com/file/d/17KOfi4Zw0YABtOVmpouIl3WPdTUcQKBx/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/ProfessorBunny",
  linkedin: "https://www.linkedin.com/in/nikunj-raghav/",
  gmail: "nikunjraghav24@gmail.com",
  facebook: "https://www.facebook.com/starlordthriving/",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle:
    "A passionate Full Stack Web Developer having an experience of building Web applications with JavaScript / Reactjs / Nodejs / Next Js and some other libraries and frameworks. Currently exploring the world of mobile application with react native.",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    ),
    emoji("⚡ Integration of third party services such as Firebase")
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "University of Bath",
      logo: require("./assets/images/Bath.png"),
      subHeader: "Master of Science in Software Systems",
      duration: "September 2021 - October 2022",
      desc: "Completed my degree with upper second-class honours ",
      descBullets: [
        "Took courses about Software Engineering, Intelligent Agents, Reinforcement learning, ...",
        "Developed a sign language detection model for my dissertation and received distinction for it."
      ]
    },
    {
      schoolName:
        "Manav Rachna International Institute of Research and Studies",
      logo: require("./assets/images/mriirs.png"),
      subHeader: "Bachelor of Technology in Computer Science",
      duration: "June 2016 - July 2020",
      desc: "Completed my degree with upper second-class honours",
      descBullets: [
        "Took courses about Cyber Security, Artficial intelligence, Neural Network, Big Data Analytiys, ...",
        "Developed a currency detection model for visually impaired people in my final year dissertation and published a paper for the same"
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "80%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    },
    {
      Stack: "Backend",
      progressPercentage: "50%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Junior Developer",
      company: "Indxx, Inc",
      companylogo: require("./assets/images/indxx.png"),
      date: "September 2020 – September 2021",
      desc: "Developed various software as part of the software development team, for inhouse operations and also for company clients using React JS and Python.",
      descBullets: [
        "Developed a Employee Appraisal System using React and Node",
        "Developed automated web scraping tools to gather different types of data from national stock exchange websites.",
        "I was part of the team which was also responsible for maintenance of the company and client websites."
      ]
    },
    {
      role: "Software Engineer Intern",
      company: "Rites Ltd.",
      companylogo: require("./assets/images/rites.png"),
      date: "June 2019 – July 2019",
      desc: "Developed a secure registration system for the company vendors",
      descBullets: [
        "Worked under the guidance of software development team.",
        "Learned how to work as team under scrum project management framework.",
        "I was part of the team which was also responsible for maintenance of the company and client websites."
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle:
    "Some Startups I helped create their tech and my major Personal Projects ",
  projects: [
    {
      image: require("./assets/images/sra.png"),
      projectName: "Website development for SRA Homez",
      projectDesc:
        "A freelance project in which I helped SRA Homez(A startup for home automation projects based in Delhi, India) to create an aesthetically pleasing website for their clients and customers which allow them to list all their services in one place.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://www.srahomez.com/"
        },
        {
          name: "Contact Owner for reference",
          url: "https://www.instagram.com/srasaihomez/"
        }
      ]
    },
    {
      image: require("./assets/images/valo papers.png"),
      projectName: "Valorant Wallpapers",
      projectDesc:
        "Web App for downloading AI enhanced wallpapers via valorant API using a python service that uses realesrgan algorithm to upscale wallpapers. Upscaled wallpapers are uploaded to s3 bucket and hosted via AWS CDN, frontend is based on react JS & next JS and uses cloudinary to serve optimized wallpapers.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://valopapers.vercel.app/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/SLD.png"),
      projectName: "Real Time SLD",
      projectDesc:
        "Sign Language Detection Model built completely using Python. Dataset was made of numpy arrays which contained the keypoints that were collected using mediapipe holistic to train a deep neural network model consisting of LSTM layers, then all of it was combined using OpenCV to perform detection in real time.",
      footerLink: [
        {
          name: "Visit Repository",
          url: "https://github.com/ProfessorBunny/real-time-sign-language-detection"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Publications And Certifications 🏆 "),

  achievementsCards: [
    {
      title: "Publication in IEEE Xplore",
      subtitle:
        "HOMER: Cryptography based Currency Detection System for Visually Impaired People",
      image: require("./assets/images/ieee.png"),
      imageAlt: "IEEE Xplore",
      footerLink: [
        {
          name: "View Published Paper",
          url: "https://ieeexplore.ieee.org/document/9214204"
        },
        {
          name: "View Repository",
          url: "https://github.com/ProfessorBunny/homer-v2"
        }
      ]
    },
    {
      title: "Crux Course with Coding Blocks",
      subtitle:
        "Hands-on course for developing core programming and advanced Data-Structures concepts",
      image: require("./assets/images/codingblocks.png"),
      imageAlt: "Coding blocks logo",
      footerLink: [
        {
          name: "View Crux Course Catalog",
          url: "https://coding-blocks.github.io/classroom-courses/java-for-beginners.html"
        },
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1k-U_pX482515QblKi1XLxIl_Xn6zd_sB/view?usp=sharing"
        }
      ]
    },

    {
      title: "Cyber Security",
      subtitle:
        "Specialization in Digital Forensics and Cyber Security at MRIIRS in collaboration with IBM",
      image: require("./assets/images/mriirs.png"),
      imageAlt: "MRIIRS logo",
      footerLink: [
        {
          name: "View Program Highlights",
          url: "https://mriirs.edu.in/course/b-tech-cse-digital-forensics-and-cyber-security-in-association-with-ibm-mriirs/"
        },
        { name: "Certification", url: "https://drive.google.com/file/d/1k-ihInV1wMV8zBYiika3-kY2kaqqzxs6/view?usp=sharing" }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const basicProjects = {
  title: "Basic Projects",
  subtitle:
    "With Love for Developing cool stuff here are some basic projects I have built",
  displayMediumBlogs: "false",
  blogs: [
    {
      url: "https://guessthecolour.glitch.me/",
      title: "Guess The Colour",
      description:
        "A RGB code game web app that generates a random RGB value and set of random colors for user to guess the correct one. It uses DOM manipulation to provide interactive game-play to user."
    },
    {
      url: "https://yourtodolist.glitch.me/",
      title: "To Do List",
      description:
        "A simple interactive web app build using jQuery that allows user to add new task, mark of old task or completely remove an existing task."
    },
    {
      url: "https://monthly-expenses-tracking.netlify.app/",
      title: "Monthly Expense Tracker",
      description:
        "A React web app that allows users to add different expenses and then filter them based on year, along with providing a visual representation of monthly breakdown of expense for the selected year."
    }
    // {
    //   url: "https://food-order-demo-app.netlify.app/",
    //   title: "Food Order App",
    //   description:
    //     "A web app that loads products from a database (hosted at firebase) then uses react to provide interactive UI for it's users. The cart information after placing the order is stored in the database."
    // },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "",
      subtitle: "",
      slides_url: "",
      event_url: ""
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [""],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "I am currently open to work so if you have an opportunity for me then please reach out.",
  number: "+7880310354",
  email_address: "nikunjraghav511@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  basicProjects,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable
};
