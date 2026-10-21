import { useEffect } from "react";
import { useLocation } from "react-router";

export const navLinks = [
    { to: "/", label: "Home"},
    { to: "/about", label: "About"},
    { to: "/projects", label: "Projects"},
    { to: "/experience", label: "Experience"},
    { to: "/contact", label: "Contact"},
]

export const contactInfo = {
    email: "alex.carter@gmail.com",
    location: "San Fransisco, CA 94105",
    phone: "+1 (415) 555-0192",
    hours: "Mon - Fri, 9 AM - 6 PM PST",
}

export const socials = ["Github", "LinkedIn", "Twitter"];

export const onlineLinks = [
    { name: "Github", handle: "@alexcarter" },
    { name: "LinkedIn", handle: "Alex Carter" },
    { name: "Twitter", handle: "@alexcodes" },
    { name: "Dev.to", handle: "@alexcarter" },
]

// home
export const stats = [
    { value: "20+", label: "Projects" },
    { value: "3+", label: "Years Exp." },
    { value: "15+", label: "Happy Clients" },
]

export const aboutCards = [
    { title: "Problem Solver", text: "I enjoy breaking down complex challenges into simple, elegant solutions that scale well over time." },
    { title: "Team Player", text: "Experienced collaborating with designers, product managers, and engineers in agile environments." },
    { title: "Lifelong Learner", text: "Always exploring new tools and technologies. Currently deepening my cloud architecture and DevOps skills." },
]

export const skillTags = ["React", "TypeScript", "JavaScript", "Node.js", "Python", "PostgreSQL", "MongoDB", "Docker", "AWS", "Next.js", "REST APIs", "GraphQL", "Tailwind CSS", "Figma", "Git"]

export const testimonials = [
    { quote: "Alex delivered our e-commerce platform ahead of schedule. The code quality was outstanding and the UI exceeded our expectations.", name: "Sarah Johnson", role: "CEO, BrightShop Inc." },
    { quote: "Working with Alex was a pleasure. They understood our requirements immediately and brought creative solutions to complex problems.", name: "Michael Chen", role: "CTO, Velocity Labs" },
    { quote: "Alex transformed our outdated website into a modern, responsive platform. Traffic increased 40% within the first month of launch.", name: "Emily Rodriguez", role: "Marketing Director, Apex Digital", },
];

// projects
export const projects = [
	{ id: 1, title: "ShopEase", category: "Full Stack", featured: true, image: "/images/shopease.jpg", github: "#", demo: "#",
		description: "A full-featured e-commerce platform with product catalog, shopping cart, order history, wishlists, and Stripe payment integration.", tags: ["React", "Node.js", "MongoDB", "Stripe"] },
	{ id: 2, title: "TaskFlow", category: "Frontend", featured: true, image: "/images/taskflow.jpg", github: "#", demo: "#",
		description: "A drag-and-drop task management app with real-time collaboration, team workspaces, priority labels, and deadline tracking.", tags: ["React", "TypeScript", "Firebase"] },
	{ id: 3, title: "WeatherNow", category: "Frontend", featured: false, image: "", github: "#", demo: "#",
		description: "A weather dashboard with 7-day forecasts, hourly charts, interactive maps, and location-based weather alerts powered by OpenWeather.", tags: ["React", "OpenWeather API", "CSS3"] },
	{ id: 4, title: "ChatSpace", category: "Full Stack", featured: true, image: "/images/chatspace.jpg", github: "#", demo: "#",
		description: "Real-time messaging platform with channels, direct messages, file sharing, emoji reactions, and user presence indicators.", tags: ["React", "Socket.io", "Express", "MongoDB"] },
	{ id: 5, title: "PortfolioGen", category: "Full Stack", featured: false, image: "/images/portfoliogen.jpg", github: "#", demo: "#",
		description: "A no-code portfolio builder that generates beautiful, responsive developer websites from a simple guided multi-step form.", tags: ["Next.js", "Tailwind CSS", "Supabase", "Vercel"] },
	{ id: 6, title: "BlogCMS", category: "Backend", featured: false, image: "/images/blogcms.jpg", github: "#", demo: "#",
		description: "A headless CMS and blog platform with Markdown support, tags, categories, scheduled publishing, and an admin dashboard.", tags: ["Next.js", "PostgreSQL", "Prisma", "TypeScript"] },
];

export const projectFilters = ["All", "Frontend", "Backend", "Full Stack"];

// about
export const education = [
	{ title: "B.S. Computer Science", place: "UC Berkeley · Berkeley, CA", date: "2019 – 2023", text: "Graduated with honors. Dean's List 2021 & 2022. Focused on software engineering, distributed systems, and human-computer interaction." },
	{ title: "Full Stack Web Development", place: "Codecademy Pro · Online", date: "2022", text: "Intensive program covering modern JavaScript, React, Node.js, databases, and deployment workflows using industry-standard tools." },
	{ title: "Data Structures & Algorithms", place: "Coursera — Stanford University · Online", date: "2021", text: "Certificate course covering sorting algorithms, trees, graphs, dynamic programming, and complexity analysis." },
];

export const workExperience = [
	{ title: "Junior Software Developer", place: "TechCorp Inc. · San Francisco, CA", date: "Jan 2023 - Present", points: [
		"Build and maintain full-stack features for a B2B SaaS platform serving 10,000+ users.",
		"Collaborate with designers and senior engineers in 2-week agile sprints.",
		"Reduced API response times by 35% through query optimization and Redis caching." ] },
	{ title: "Software Engineering Intern", place: "StartupXYZ · San Jose, CA", date: "May 2022 - Aug 2022", points: [
		"Developed React components for the company's customer-facing dashboard.",
		"Wrote unit and integration tests, achieving 85% code coverage across new modules." ] },
	{ title: "Web Developer", place: "Freelance · Remote", date: "Jun 2022 - Dec 2022", points: [
		"Built responsive websites and web apps for 8 small business clients.",
		"Managed client communication, requirements gathering, scoping, and delivery." ] },
];

export const skillBars = [
	{ label: "React / Next.js", value: 90 },
	{ label: "TypeScript / JavaScript", value: 88 },
	{ label: "Node.js / Express", value: 82 },
	{ label: "Python / Django", value: 74 },
	{ label: "PostgreSQL / MongoDB", value: 80 },
	{ label: "Docker / AWS", value: 65 },
];

export const interests = [
	"Open Source", "UI/UX Design", "Machine Learning", "System Design",
	"Rock Climbing", "Photography", "Coffee Brewing", "Reading Sci-Fi",
];

// experiences
export const experienceTable = [
	{ company: "TechCorp Inc.", position: "Junior Software Developer", duration: "Jan 2023 - Present", location: "San Francisco, CA", type: "Full-time" },
	{ company: "Freelance", position: "Web Developer", duration: "Jun 2022 - Dec 2022", location: "Remote", type: "Contract" },
	{ company: "StartupXYZ", position: "Software Engineering Intern", duration: "May 2022 - Aug 2022", location: "San Jose, CA", type: "Internship" },
	{ company: "UC Berkeley Tech Club", position: "President & Lead Developer", duration: "Sep 2021 - May 2023", location: "Berkeley, CA", type: "Volunteer" },
];

export const certifications = [
	{ abbr: "AWS", title: "AWS Certified Developer - Associate", issuer: "Amazon Web Services", date: "Dec 2023 · Valid until Dec 2026" },
	{ abbr: "GCP", title: "Google Professional Cloud Developer", issuer: "Google Cloud", date: "Oct 2023 · Valid until Oct 2025" },
	{ abbr: "MDB", title: "MongoDB Certified Developer Associate", issuer: "MongoDB Inc.", date: "Mar 2022 · Valid until Mar 2024" },
];

export const awards = [
	{ title: "Employee of the Month", org: "TechCorp Inc.", date: "March 2024", text: "Recognized for delivering the customer portal redesign ahead of schedule with zero post-launch bugs." },
	{ title: "Best Overall Project", org: "Bay Area CodeFest Hackathon", date: "November 2022", text: "First place out of 48 teams for building a real-time food rescue coordination app in 24 hours." },
	{ title: "Dean's List", org: "UC Berkeley", date: "2021 & 2022", text: "Achieved top academic standing in the College of Engineering for two consecutive academic years." },
	{ title: "Outstanding Senior Project", org: "CS Department, UC Berkeley", date: "May 2023", text: "Capstone project — an AI-assisted code review tool — recognized as the top project in the graduating class." },
];

// contact
export const countries = ["United States", "Canada", "United Kingdom", "Australia", "Germany", "Indonesia", "Singapore", "Other"];
export const contactMethods = ["Email", "Phone", "Whatsapp"];
export const techOptions = ["React", "Node.js", "Python", "TypeScript", "React Native", "Vue.js", "Django", "Express.js"];

