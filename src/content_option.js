import captureitall from "./captureitall.png";
import groupprofile from "./groupprofile.gif";
import personalprofile from "./personalprofile.gif";
import liftfinder from "./liftfinder.gif";
import compost2goflyer from "./compost2goflyer.png";
import compost2gouserguide from "./compost2gouserguide1.gif";


const logotext = "Andrew Winton";
const meta = {
    title: "Andrew Winton",
    description: "I'm Andrew Winton, a product manager, web developer, designer, creator, and AI enthusiast, currently working in Chicago",
};

const introdata = {
    title: "I'm Andrew Winton",
    animated: {
        first: "I believe life's meaning comes from relationships",
        second: "I love helping to create easy to use technology to improve relationships",
        third: "I just happen to have some example here",
    },
    description: "I believe the best moments in life are created together and want to apply my intrapreneurial drive, product management skills, and web development knowledge to ship products at the intersection of AI and the digital world that solve real human needs.",
    //your_img_url: "src/assets/images/headshot.jpeg"
};

const dataabout = {
    title: "Beliefs",
    aboutme: "I believe the best moments in life are those we create together. Whether it's playing games like foosball or having conversations over a shared meal, I find the most enjoyment in these experiences. I also have a passion for building physical products, whether it's a Frankenstein-inspired electric scooter or a web app designed to bring friends closer. I truly love the process of building and creating. If given the opportunity, I look forward to getting to know you too.",
};
const worktimeline = [{
    jobtitle: "Product Manager",
    where: "West Monroe",
    date: "Aug 2022 – June 2023",
},
{
    jobtitle: "Business Analyst",
    where: "Frenik Marketing Group",
    date: "May 2021 – August 2021",
},
{
    jobtitle: "Co-founder",
    where: "Atlanta, GA",
    date: "March 2020 – December 2020",
},
];

const skills = [{
    name: "Agile ceremonies",
    value: 90,
},
{
    name: "Atlassian tools (Jira, Confluence)",
    value: 85,
},
{
    name: "Figma",
    value: 80,
},
{
    name: "Adobe XD",
    value: 80,
},
{
    name: "Miro",
    value: 80,
},
{
    name: "React",
    value: 70,
},
{
    name: "JavaScript",
    value: 70,
},
{
    name: "HTML",
    value: 70,
},
{
    name: "CSS",
    value: 70,
},
{
    name: "Django",
    value: 20,
}
];

const services = [{
    title: "UI & UX Design",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at nisl euismod urna bibendum sollicitudin.",
},
{
    title: "Mobile Apps",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at nisl euismod urna bibendum sollicitudin.",
},
{
    title: "Wordpress Design",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at nisl euismod urna bibendum sollicitudin.",
},
];

const dataportfolio = [{
    title: "Capture It All",
    animated: {
        first: "Create together",
        second: "Captured together",
        third: "Cherished forever",
    },
    img: captureitall,
    description: "This is a demo of our user-friendly web app for audio capture. CaptureItAll is an audio capture service designed to enhance the wedding experience for couples and guests. Our goal is to capture and document cherished moments and memories throughout the event, from the guest's perspective. The intended outcome is a custom vinyl record that encapsulates one of life's greatest shared moments.",
    link: "https://captureitall.netlify.app/",
},
{
    title: "SpotMe's Lift Finder",
    animated: {
        first: "Need a spotter?",
        second: "Easy find a spot",
        third: "Use lift finder",
    },
    img: liftfinder,
    description: "The wisdom of life consists in the elimination of non-essentials.",
    link: "#",
},
{
    title: "SpotMe's Group Profile",
    animated: {
        first: "Find friends",
        second: "Know when they are working out",
        third: "Compete & celebarte together",
    },
    img: groupprofile,
    description: "The wisdom of life consists in the elimination of non-essentials.",
    link: "#",
},
{
    title: "SpotMe's Personal Profile",
    animated: {
        first: "Create and track workouts",
        second: "Measure your progress",
        third: "Achieve your goals",
    },
    img: personalprofile,
    description: "The wisdom of life consists in the elimination of non-essentials.",
    link: "#",
},
{
    title: "Compost2Go",
    animated: {
        first: "Contribute to a zero waste world",
        second: "Participate through your apartment",
        third: "Weekly pickups",
    },
    img: compost2goflyer,
    description: "The wisdom of life consists in the elimination of non-essentials.",
    link: "#",
},
{
    title: "Compost2Go Pilot",
    animated: {
        first: "Contribute to a zero waste world",
        second: "Participate through your apartment",
        third: "Weekly pickups",
    },
    img: compost2gouserguide,
    description: "The wisdom of life consists in the elimination of non-essentials.",
    link: "#",
},
];

const contactConfig = {
    YOUR_EMAIL: "andrewwinton909@gmail.com",
    YOUR_FONE: "(678)408-1063",
    description: "Please give me a call or send me an email. I look forward to getting to know you.",
    // creat an emailjs.com account 
    // check out this tutorial https://www.emailjs.com/docs/examples/reactjs/
    YOUR_SERVICE_ID: "service_g458g1w",
    YOUR_TEMPLATE_ID: "template_mjy2nss",
    YOUR_USER_ID: "UwnSH0h4GnOvZCEgb",
};

const socialprofils = {
    github: "https://github.com",
    facebook: "https://facebook.com",
    linkedin: "https://www.linkedin.com/in/andrewmwinton/",
    twitter: "https://twitter.com",
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
    logotext,
};