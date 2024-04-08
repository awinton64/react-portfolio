import drinifyouthinkvideo from "./drink_if_you_think_explainer.mp4";
import captureitall from "./captureitall.png";
import groupprofile from "./groupprofile.gif";
import groupprofileblack from "./groupprofileblack.gif";
import personalprofile from "./personalprofile.gif";
import personalprofileblack from "./personalprofileblack.gif";
import liftfinder from "./liftfinder.gif";
import liftfinderblack from "./liftfinderblack.gif";
import compost2goflyer from "./compost2goflyer.png";
import compost2gouserguide from "./compost2gouserguide.gif";
import compost2gouserguideblack from "./compost2gouserguideblack.gif";
import resume from "./andrew_winton_resume_03_14_24_sales.pdf";

const logotext = "Andrew Winton";
const meta = {
    title: "Andrew Winton",
    description: "I'm Andrew Winton, a product manager, web developer, designer, creator, and AI enthusiast, currently working in Chicago",
};

const introdata = {
    title: "Hello, I'm Andrew Winton",
    animated: {
        first: "I love...",
        second: "Great conversations",
        third: "Creating games",
        fourth: "Playing foosball",
        fifth: "Writing poetry",
        sixth: "Eating chicken parm",
    },
    description: "I believe the best moments in life are created together and want to apply my intrapreneurial drive, product management skills, and web development knowledge to create products that bring people closer together and solve real human problems.",
};

const dataabout = {
    title: "Beliefs",
    resume: resume,
    aboutme: "I believe the best moments in life are those we create together. Whether it's playing games like foosball or having conversations over a shared meal, I find the most enjoyment in these experiences. I also have a passion for building physical products, whether it's a Frankenstein-inspired electric scooter or a web app designed to bring friends closer. I truly love the process of building and creating. If given the opportunity, I look forward to getting to know you too.",
};

const worktimeline = [
    {
        jobtitle: "Product Manager",
        where: "Elemint",
        date: "2023"
    },
    {
        jobtitle: "Product Manager",
        where: "West Monroe",
        date: "2022 - 2023"
    },
    {
        jobtitle: "Founder",
        where: "Just Recess",
        date: "January 2022 – Present"
    },
    {
        jobtitle: "Business Analyst",
        where: "Frenik Marketing Group",
        date: "2021"
    },
    {
        jobtitle: "Co-founder",
        where: "SpotMe",
        date: "2020"
    }
];

const skills = [
    {
        name: "Product Management",
        value: 90
    },
    {
        name: "Agile ceremonies",
        value: 85
    },
    {
        name: "Jira & Confluence",
        value: 85
    },
    {
        name: "Figma",
        value: 80
    },
    {
        name: "Adobe XD",
        value: 80
    },
    {
        name: "Miro",
        value: 80
    },
    {
        name: "ReactJS",
        value: 70
    },
    {
        name: "JavaScript",
        value: 70
    },
    {
        name: "HTML",
        value: 70
    },
    {
        name: "CSS",
        value: 70
    }
];

const services = [
    {
        title: "UI & UX Design",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at nisl euismod urna bibendum sollicitudin."
    },
    {
        title: "Mobile Apps",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at nisl euismod urna bibendum sollicitudin."
    },
    {
        title: "Wordpress Design",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at nisl euismod urna bibendum sollicitudin."
    }
];

const dataportfolio = [
    {
        title: "Friends of Friends",
        // img: captureitall,
        ifm: '<iframe title="FoF" height="450" width="100%" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2Fz1E53NBSfQSj16MAxNZcVt%2FFoF-Figma%3Ftype%3Ddesign%26node-id%3D42-1090%26t%3DPWsEDAndh02urFM3-1%26scaling%3Dscale-down%26page-id%3D0%253A1%26starting-point-node" allowfullscreen></iframe>',
        description: "An app that helps young adults in cities who want to make more friends by making it easy to find friends through people they already know, unlike apps that match solely based on interests or looks.",
        link: "https://docs.google.com/forms/d/e/1FAIpQLSce0FSNmIM04WrAqDAHlFC0RLqul9INogw-Lt5P71GQVrzX4Q/viewform?usp=sf_link"
    },
    {
        title: "Just Recess",
        vid: drinifyouthinkvideo,
        description: "The best moments in life are created through genuine human connection. That's why we offer an easy and entertaining way to get to know others in a small group setting and develop genuine, in-person connections. We build easy-to-use, curated digital games for friends. So next time you're drinking with friends in need of a game, think 'Drink If You Think'.",
        link: "https://justrecess.com/"
    },
    // {
    //     title: "Capture It All",
    //     img: captureitall,
    //     description: "This is a demo of our user-friendly web app for audio capture. CaptureItAll is an audio capture service designed to enhance the wedding experience for couples and guests. Our goal is to capture and document cherished moments and memories throughout the event, from the guest's perspective. The intended outcome is a custom vinyl record that encapsulates one of life's greatest shared moments.",
    //     link: "https://captureitall.netlify.app/"
    // },
    {
        title: "SpotMe's Lift Finder",
        img: liftfinder,
        imgDarkMode: liftfinderblack,
        description: "Do you need a spotter or lift partner? Use Lift Finder to find a partner by filtering by gym, distance, workout focus type, and gender.",
        link: "#"
    },
    {
        title: "SpotMe's Group Profile",
        img: groupprofile,
        imgDarkMode: groupprofileblack,
        description: "Want to know when your friends are hitting the gym, compete in friendly competition to rank each other's PRs, and share workouts in an easy-to-use format? Create a group among your friends.",
        link: "#"
    },
    {
        title: "SpotMe's Personal Profile",
        img: personalprofile,
        imgDarkMode: personalprofileblack,
        description: "Looking to track your improvement, create/discover personalized workouts, and never forget what you were planning on doing in the gym? Keep it all in your personal profile.",
        link: "#"
    },
    {
        title: "Compost2Go",
        animated: {
            first: "Contribute to a zero waste world",
            second: "Participate through your apartment",
            third: "Weekly pickups"
        },
        img: compost2goflyer,
        description: "We simplify your contribution to a zero waste world by eliminating barriers to sustainable choices. Our user-friendly apartment compost pick-up service allows you to collect compost easily. We take care of the pick-up, processing, and return the composted soil to benefit your community.",
        link: "#"
    },
    {
        title: "Compost2Go Pilot",
        img: compost2gouserguide,
        imgDarkMode: compost2gouserguideblack,
        description: "To validate the user experience, we conducted a three-week pilot involving two apartment buildings, each consisting of ten units. During this period, we successfully completed three pick-ups, collected over 250 data points through daily survey logs, and conducted one-on-one interviews.",
        link: "#"
    }
];

const contactConfig = {
    YOUR_EMAIL: "andrewwinton909@gmail.com",
    YOUR_FONE: "(678) 408-1063",
    description: "Please give me a call or send me an email. I look forward to getting to know you.",
    // create an emailjs.com account
    // check out this tutorial https://www.emailjs.com/docs/examples/reactjs/
    YOUR_SERVICE_ID: "service_g458g1w",
    YOUR_TEMPLATE_ID: "template_mjy2nss",
    YOUR_USER_ID: "UwnSH0h4GnOvZCEgb"
};

const socialprofils = {
    github: "https://github.com",
    facebook: "https://facebook.com",
    linkedin: "https://www.linkedin.com/in/andrewmwinton/",
    twitter: "https://twitter.com"
};

export {
    meta,
    dataabout,
    dataportfolio,
    worktimeline,
    skills,
    services,
    introdata,
    contactConfig,
    socialprofils,
    logotext
};
