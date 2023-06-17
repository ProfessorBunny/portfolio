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
    "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing", // Set to empty to hide the button
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
  subTitle: "A passionate Full Stack Web Developer 🚀 having an experience of building Web applications with JavaScript / Reactjs / Nodejs / Next Js and some other libraries and frameworks. Currently exploring the world of mobile application with react native.",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    ),
    emoji(
      "⚡ Integration of third party services such as Firebase"
    )
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
    },
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
      schoolName: "Manav Rachna International Institute of Research and Studies",
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
    },
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
      date: "June 2019 – July 2020",
      desc: "Developed a secure registration system for the company vendors",
      descBullets: [
        "Worked under the guidance of software development team.",
        "Learned how to work as team under scrum project management framework.",
        "I was part of the team which was also responsible for maintenance of the company and client websites."
      ]
    },

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
  subtitle: "Some Big Personal Projects that I have developed recently ",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Valorant Wallpapers",
      projectDesc: "Web App for downloading valorant wallapers",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Real Time SLD",
      projectDesc: "Sign Language Detection Model using OpenCV",
      footerLink: [
        {
          name: "Visit Repository",
          url: "http://nextu.se/"
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
      ]
    },
    {
      title: "Crux course with coding blocks",
      subtitle:
        "Hands-on course for developing core programming and advanced Data-Structures concepts",
      image: require("./assets/images/codingblocks.png"),
      imageAlt: "Coding blocks logo",
      footerLink: [
        {
          name: "View Crux course catalog",
          url: "https://coding-blocks.github.io/classroom-courses/java-for-beginners.html"
        },
        {
          name: "Certification",
          url: ""
        }
      ]
    },

    {
      title: "Digital Forensics and Cyber Security ",
      subtitle: "Specialization in Digital Forensics and Cyber Security at MRIIRS in collaboration with IBM",
      image: require("./assets/images/mriirs.png"),
      imageAlt: "MRIIRS logo",
      footerLink: [
        { name: "Certification", url: "" },
        {
          name: "View Program Highlights",
          url: "https://mriirs.edu.in/course/b-tech-cse-digital-forensics-and-cyber-security-in-association-with-ibm-mriirs/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
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
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all. ",
  number: "+7880310354",
  email_address: "nikunjraghav511@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

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
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable
};
