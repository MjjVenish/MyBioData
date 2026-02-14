export interface BlogPost {
    slug: string
    title: string
    excerpt: string
    content: string
    image: string
    tag: string
    author: string
    date: string
    readTime: string
}

export const posts: BlogPost[] = [
    {
        slug: "how-to-become-modern-web-developer",
        title: "How to Become a Modern Web Developer in 2026",
        excerpt:
            "A complete roadmap to becoming a modern web developer in 2026, covering frontend, backend, AI tools, and real-world skills...",
        content: `
Web development in 2026 is more exciting than ever. With AI tools, modern frameworks, and powerful cloud platforms, becoming a web developer now requires both strong fundamentals and modern tool knowledge.

## Step 1: Master the Fundamentals

Start with:
- HTML5
- CSS3
- JavaScript (ES6+)

These are the foundation of everything on the web.

## Step 2: Learn a Modern Framework

Choose one:
- React
- Next.js
- Vue

In 2026, Next.js is highly popular for full-stack development.

## Step 3: Backend & Databases

Learn:
- Node.js
- Express or Next.js API routes
- PostgreSQL / MongoDB
- Authentication (JWT / OAuth)

## Step 4: Learn AI & APIs

Modern developers integrate:
- OpenAI / Groq APIs
- REST APIs
- WebSockets

## Step 5: Deployment & DevOps

Understand:
- Git & GitHub
- CI/CD
- Deploying on Vercel / Netlify

## Final Advice

Build real-world projects. Stay updated. Practice daily.

Consistency beats talent.
    `,
        image: "/images/blog-1.jpg",
        tag: "Web Developer",
        author: "Your Name",
        date: "14 Feb 2026",
        readTime: "6 Min",
    },

    {
        slug: "future-of-react-server-components",
        title: "The Future of React: Server Components & Performance Optimization",
        excerpt:
            "Explore how Server Components and modern optimization techniques are shaping the future of React applications...",
        content: `
React continues to evolve, and Server Components are changing how we build applications.

## What Are Server Components?

Server Components run only on the server and:
- Reduce JavaScript bundle size
- Improve performance
- Enhance SEO

## Performance Optimization Techniques

- Code splitting
- Dynamic imports
- Streaming with Suspense
- Image optimization
- Edge rendering

## Why It Matters

Users expect instant-loading apps. Performance is no longer optional — it is essential.

Developers who understand performance deeply will stand out in 2026.
    `,
        image: "/images/blog-2.jpg",
        tag: "React",
        author: "Your Name",
        date: "14 Feb 2026",
        readTime: "5 Min",
    },

    {
        slug: "modern-css-architecture-guide",
        title: "Modern CSS Architecture: Tailwind vs CSS-in-JS",
        excerpt:
            "Compare Tailwind CSS and CSS-in-JS approaches to understand which modern styling strategy fits your project best...",
        content: `
CSS architecture has evolved significantly.

## Tailwind CSS

Pros:
- Utility-first
- Fast development
- Design consistency
- Small final CSS bundle

Best for:
- Startups
- Rapid MVPs
- Component-based apps

## CSS-in-JS

Pros:
- Dynamic styling
- Scoped styles
- Theming support

Best for:
- Design systems
- Large-scale applications

## Which Should You Choose?

If you prefer speed and consistency → Tailwind  
If you prefer flexibility and dynamic styling → CSS-in-JS  

In 2026, both are powerful. The choice depends on your team and project needs.
    `,
        image: "/images/blog-3.jpg",
        tag: "CSS",
        author: "Your Name",
        date: "14 Feb 2026",
        readTime: "7 Min",
    },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
    return posts.find((post) => post.slug === slug);
}

