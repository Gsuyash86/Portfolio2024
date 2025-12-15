export interface ContactInfo {
  name: string;
  phone: string;
  email: string;
  links: {
    linkedin: string;
    github: string;
    leetcode: string;
  };
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  startDate: string;
  endDate: string;
  achievements: string[];
}

export interface Project {
  name: string;
  tech: string;
  description: string[];
  link?: string;
  github?: string;
}

export interface Education {
  institution: string;
  degree: string;
  location: string;
  year: string;
  cgpa: string;
}

export interface ResumeData {
  contact: ContactInfo;
  skills: SkillCategory[];
  achievements: string;
  experience: Experience[];
  projects: Project[];
  education: Education;
}

export const resumeData: ResumeData = {
  contact: {
    name: "Suyash Gupta",
    phone: "+91-7017460040",
    email: "guptasuyash9@gmail.com",
    links: {
      linkedin: "https://www.linkedin.com/in/suyash-gupta-software-developer",
      github: "https://github.com/Gsuyash86",
      leetcode: "https://leetcode.com/u/guptasuyash9"
    }
  },
  skills: [
    {
      category: "Languages & Core",
      skills: ["JavaScript (ES6+)", "TypeScript", "SQL", "NoSQL", "HTML5", "CSS3"]
    },
    {
      category: "Frontend Architecture",
      skills: ["React.js", "Redux Toolkit", "Next.js", "Server-Side Rendering (SSR)", "Micro-Frontends"]
    },
    {
      category: "Backend Development",
      skills: ["Node.js", "Express.js", "Spring Boot", "RESTful APIs", "Microservices Architecture"]
    },
    {
      category: "Databases & Caching",
      skills: ["MongoDB", "PostgreSQL", "MySQL", "Cassandra", "CosmosDB", "Redis", "ElasticSearch"]
    },
    {
      category: "DevOps & Cloud",
      skills: ["AWS (EC2, S3)", "Azure", "Docker", "Kubernetes", "Jenkins", "CI/CD Pipelines", "Linux"]
    },
    {
      category: "Observability & Tools",
      skills: ["Kibana", "New Relic", "Logstash", "Git", "JIRA", "Postman", "Agile/Scrum"]
    }
  ],
  achievements: "Solved 500+ DSA problems across LeetCode, Scaler, and GeeksForGeeks",
  experience: [
    {
      company: "Times Network",
      role: "Senior Software Engineer",
      period: "Jan 2023 – Present",
      startDate: "2023-01",
      endDate: "Present",
      achievements: [
        "Engineered a high-performance SSR architecture using Astro and Express, slashing page load latency by 45% and compressing HTML bundle size by 50%",
        "Orchestrated a robust cache-purging mechanism on Akamai integrated with Node.js, enhancing content freshness while monitoring system health via Kibana and New Relic",
        "Revamped the high-traffic \"Top 10\" aggregation pages utilizing ElasticSearch, which accelerated data retrieval speeds by half (50%)",
        "Spearheaded major release cycles for TimesDrive and Times Galaxy, driving a 70% surge in monthly page views through optimized delivery pipelines",
        "Refined the MongoDB database schema, eliminating bottlenecks and boosting query execution performance by 30%",
        "Automated deployment workflows via Jenkins CI/CD, curtailing production downtime by 30% during release windows"
      ]
    },
    {
      company: "Infogain",
      role: "Senior Software Developer",
      period: "Jan 2022 – Jan 2023",
      startDate: "2022-01",
      endDate: "2023-01",
      achievements: [
        "Optimized legacy Node.js endpoints, achieving a 30% reduction in API response latency through code refactoring and asynchronous handling",
        "Deployed Redis caching layers to intercept frequent database calls, enabling 25% faster content retrieval for end-users"
      ]
    },
    {
      company: "Capgemini",
      role: "Full Stack Engineer",
      period: "Apr 2019 – Jan 2022",
      startDate: "2019-04",
      endDate: "2022-01",
      achievements: [
        "Modernized React.js user interfaces with reusable component libraries, cutting project delivery timelines by 20%"
      ]
    }
  ],
  projects: [
    {
      name: "TimesDrive",
      tech: "React.js, Node.js, CosmosDB",
      description: [
        "Designed complex data modeling workflows handling 2,000+ vehicle specifications, elevating API throughput by 30%"
      ]
    },
    {
      name: "URL Shortener Service",
      tech: "Node.js, Express, MongoDB",
      description: [
        "Built a high-availability link management tool for internal sales teams, boosting influencer campaign engagement by 30%",
        "Enhanced the conversion funnel by 25% through rigorous UI/UX optimization and A/B testing support"
      ]
    },
    {
      name: "HealthAndMe",
      tech: "Full Stack Development",
      description: [
        "Overhauled the search indexing and content recommendation engine, expanding user access to medical expert guidance by 30%"
      ]
    },
    {
      name: "Digit.in",
      tech: "Backend Architecture",
      description: [
        "Contributed critical backend infrastructure supporting 10M+ monthly active users, helping secure the #1 Tech Site ranking in India (ComScore)"
      ]
    }
  ],
  education: {
    institution: "GL Bajaj Institute of Technology and Management",
    degree: "Bachelor of Technology in Computer Science",
    location: "Uttar Pradesh, India",
    year: "2019",
    cgpa: "7.8/10"
  }
};
