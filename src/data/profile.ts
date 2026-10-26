const DEVICON = "https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/icons";
const SIMPLE_ICONS = "https://cdn.jsdelivr.net/npm/simple-icons@15.0.0/icons";

export const SKILL_TAGS = [
	"TypeScript",
	"Java",
	"Go",
	"SQL",
	"Node.js",
	"Express.js",
	"Spring Boot",
	"WSO2",
	"Better Auth",
	"Supabase",
	"Firebase",
	"React",
	"Next.js",
	"Tailwind CSS",
	"MUI",
	"shadcn/ui",
	"Git",
	"Linux",
	"Docker",
	"Vercel",
];

/** `mono` icons are black artwork and get inverted in dark mode. */
export const SKILL_ICONS: { name: string; src: string; mono?: boolean }[] = [
	{ name: "TypeScript", src: `${DEVICON}/typescript/typescript-original.svg` },
	{ name: "Java", src: `${DEVICON}/java/java-original.svg` },
	{ name: "Go", src: `${DEVICON}/go/go-original.svg` },
	{ name: "PostgreSQL", src: `${DEVICON}/postgresql/postgresql-original.svg` },
	{ name: "Node.js", src: `${DEVICON}/nodejs/nodejs-original.svg` },
	{ name: "Express.js", src: `${DEVICON}/express/express-original.svg`, mono: true },
	{ name: "Spring Boot", src: `${DEVICON}/spring/spring-original.svg` },
	{ name: "Supabase", src: `${DEVICON}/supabase/supabase-original.svg` },
	{ name: "Firebase", src: `${DEVICON}/firebase/firebase-original.svg` },
	{ name: "React", src: `${DEVICON}/react/react-original.svg` },
	{ name: "Next.js", src: `${DEVICON}/nextjs/nextjs-original.svg`, mono: true },
	{ name: "Tailwind CSS", src: `${DEVICON}/tailwindcss/tailwindcss-original.svg` },
	{ name: "MUI", src: `${DEVICON}/materialui/materialui-original.svg` },
	{ name: "shadcn/ui", src: `${SIMPLE_ICONS}/shadcnui.svg`, mono: true },
	{ name: "Figma", src: `${DEVICON}/figma/figma-original.svg` },
	{ name: "Git", src: `${DEVICON}/git/git-original.svg` },
	{ name: "Linux", src: `${DEVICON}/linux/linux-original.svg` },
	{ name: "Docker", src: `${DEVICON}/docker/docker-original.svg` },
	{ name: "Vercel", src: `${DEVICON}/vercel/vercel-original.svg`, mono: true },
];

export const EXPERIENCE = [
	{
		period: "Jun 2023 – Present",
		title: "Co-Founder — Elephant Journey",
		description:
			"Co-founded a community-driven mobile app addressing human-elephant conflict in Sri Lanka, now at 15,000+ downloads across iOS and Android. Designed the complete UI/UX in Figma, maintain the Next.js website, and built internal tools for regional alert management and data analytics.",
	},
];

export const EDUCATION = [
	{
		period: "Oct 2024 – Present",
		title: "B.Sc (Hons) in Software Engineering — SLIIT",
		description:
			"Sri Lanka Institute of Information Technology, Malabe. Relevant modules: DSA, Database Design, Object-Oriented Analysis, Computer Networks, OS & System Admin.",
	},
	{
		period: "2019 – 2021",
		title: "G.C.E Advanced Level — Wayamba Royal College",
		description: "Commerce stream, Kurunegala.",
	},
];

export const OSS_PROJECTS = [
	{
		name: "OpenATS",
		role: "Creator & Maintainer",
		description:
			"An open-source hiring platform where jobs, candidates, assessments, interviews and offers live in one place on your own servers, with no per-seat pricing and candidate data that never leaves your hands.",
		stack: ["TypeScript", "Next.js", "Express.js", "PostgreSQL", "Better Auth", "BullMQ"],
		repo: "https://github.com/chamals3n4/OpenATS",
		site: "https://openats.dev",
	},
	{
		name: "OpenSchool",
		role: "Co-Creator & Maintainer",
		description:
			"Open digital platform for Sri Lankan schools: student and staff records, classes, attendance, curriculum, timetables, marks and reports in one self-hostable system.",
		stack: ["Go", "TypeScript", "PostgreSQL", "ThunderID"],
		repo: "https://github.com/openschool-org/openschool",
		site: "https://openschool-org.github.io/openschool-web/",
	},
];
