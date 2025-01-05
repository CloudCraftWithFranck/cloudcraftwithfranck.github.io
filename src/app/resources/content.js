
import { InlineCode } from "@/once-ui/components";

const person = {
    firstName: 'Franck',
    lastName:  'Kengne',
    get name() {
        return `${this.firstName} ${this.lastName}`;
    },
    role:      'Cloud Advocate and Instructor',
    avatar:    '/images/avatar.jpg',
    location:  'America/New_York',        // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
    languages: ['English', 'Spanish', 'German']  // optional: Leave the array empty if you don't want to display languages
}

const newsletter = {
    display: true,
    title: <>Subscribe to {person.firstName}'s Newsletter</>,
    description: <>I occasionally write about cloud, AI, security, and share thoughts on the problem solving and critical solutions for cloud engineering.</>
}

const social = [
    // Links are automatically displayed.
    // Import new icons in /once-ui/icons.ts
    {
        name: 'GitHub',
        icon: 'github',
        link: 'https://github.com/CloudCraftWithFranck',
    },
    {
        name: 'LinkedIn',
        icon: 'linkedin',
        link: 'https://www.linkedin.com/in/franck-kengne-cloud-advocate-0822a6233/',
    },
    {
        name: 'X',
        icon: 'x',
        link: 'https://x.com/',
    },
    {
        name: 'Email',
        icon: 'email',
        link: 'mailto:frakengne5991@gmail.com',
    },
]

const home = {
    label: 'Home',
    title: `${person.name}'s Website`,
    description: `View my last post on Youtube as a ${person.role}`,
    headline: <>Cloud Advocate and Instructor</>,
    subline: <>I'm Franck, a cloud advocate and Instructor at <InlineCode>CloudCraftWithFranck</InlineCode>, where I craft intuitive<br/> cloud solution for engineers.</>
}

const about = {
    label: 'About',
    title: 'About me',
    description: `Meet ${person.name}, ${person.role} from ${person.location}`,
    tableOfContent: {
        display: true,
        subItems: false
    },
    avatar: {
        display: true
    },
    calendar: {
        display: true,
        link: 'https://cal.com/cloudcraftwithfranck'
    },
    intro: {
        display: true,
        title: 'Introduction',
        description: <>Franck Kengne is a US-based Cloud Advocate with a passion for transforming complex cloud challenges into simple, and straightforward solutions. His work spans cloud challenges, problem solving, and critical thinking as well as interviews in cloud technology.</>
    },
    work: {
        display: true, // set to false to hide this section
        title: 'Work Experience',
        experiences: [
            {
                company: 'CSE',
                timeframe: '2023 - Present',
                role: 'Senior Azure Cloud Engineer',
                achievements: [
                    <>Advanced experience with Docker for containerization, optimizing microservices deployments with fully automated CI/CD pipelines through Azure DevOps for seamless application delivery.</>,
                    <>Specialized in architecting and managing Microsoft PowerApps solutions in enterprise Azure environments, integrating custom APIs, automation workflows, and complex logic apps.</>
                ],
                images: [ // optional: leave the array empty if you don't want to display images
                    {
                        src: '/images/projects/project-01/cover-18.jpg',
                        alt: 'CSE Project',
                        width: 16,
                        height: 9
                    }
                ]
            },
            {
                company: 'The OpenNMS Group',
                timeframe: '2022 - 2023',
                role: 'Senior IT Operations Engineer',
                achievements: [
                    <>Expert in deploying and managing AWS cloud solutions, leveraging EC2, S3, VPC, and IAM for scalable, secure, and cost-effective cloud operations</>,
                    <>Proficient in Infrastructure as Code (IaC) using Terraform, automating infrastructure provisioning and configuration for both on-premises and cloud environments.</>
                ],
                images: [ // optional: leave the array empty if you don't want to display images
                    {
                        src: '/images/projects/project-01/cover-17.jpg',
                        alt: 'OpenNMS Project',
                        width: 16,
                        height: 9
                    }
                ]
            }
        ]
    },
    studies: {
        display: true, // set to false to hide this section
        title: 'Studies',
        institutions: [
            {
                name: 'University of Maryland Global Campus',
                description: <>Studied software engineering and cybersecurity.</>,
            },
            {
                name: 'Rowan College Burlington Count',
                description: <>Studied information insurance and cybersecurity.</>,
            }
        ]
    },
    technical: {
        display: true, // set to false to hide this section
        title: 'Technical skills',
        skills: [
            {
                title: 'Azure',
                description: <>Able to configure, deploy, and manage any azure service.</>,
                // optional: leave the array empty if you don't want to display images
                images: [
                    {
                        src: '/images/projects/project-01/cover-02.jpg',
                        alt: 'Project image',
                        width: 16,
                        height: 9
                    },
                    {
                        src: '/images/projects/project-01/cover-03.jpg',
                        alt: 'Project image',
                        width: 16,
                        height: 9
                    },
                ]
            },
            {
                title: 'Terraform',
                description: <>Building scalable infrastructure using terraform is my passion.</>,
                // optional: leave the array empty if you don't want to display images
                images: [
                    {
                        src: '/images/projects/project-01/cover-04.jpg',
                        alt: 'Project image',
                        width: 16,
                        height: 9
                    },
                ]
            }
        ]
    },
    Credentials: {
        display: true, // set to false to hide this section
        title: t("about.Credentials.title"),
        description: <>{t("about.technical.skills.Certifications.description")}</>,
        images: [
            {
                src: '/images/projects/project-01/badge-04.jpg',
                alt: 'Certification image',
                width: 16,
                height: 9
            },
            {
                src: '/images/projects/project-01/badge-03.jpg',
                alt: 'Certification image',
                width: 16,
                height: 9
            },
            {
                src: '/images/projects/project-01/badge-02.jpg',
                alt: 'Certification image',
                width: 16,
                height: 9
            },
            {
                src: '/images/projects/project-01/badge-01.jpg',
                alt: 'Certification image',
                width: 16,
                height: 9
            },
            {
                src: '/images/projects/project-01/badge-05.jpg',
                alt: 'Certification image',
                width: 16,
                height: 9
            },
            {
                src: '/images/projects/project-01/badge-06.jpg',
                alt: 'Certification image',
                width: 16,
                height: 9
            },
            {
                src: '/images/projects/project-01/badge-07.jpg',
                alt: 'Certification image',
                width: 16,
                height: 9
            }
        ]
    }
}

const blog = {
    label: 'Blog',
    title: 'Writing about cloud, AI and security...',
    description: `Read what ${person.name} has been up to recently`
    // Create new blog posts by adding a new .mdx file to app/blog/posts
    // All posts will be listed on the /blog route
}

const work = {
    label: 'Work',
    title: 'My projects',
    description: `Design and dev projects by ${person.name}`
    // Create new project pages by adding a new .mdx file to app/blog/posts
    // All projects will be listed on the /home and /work routes
}

const gallery = {
    label: 'Gallery',
    title: 'My photo gallery',
    description: `A photo collection by ${person.name}`,
    // Images from https://pexels.com
    images: [
        { 
            src: '/images/gallery/img-01.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-02.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-03.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-04.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-05.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-06.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-07.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-08.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-09.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-10.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-11.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-12.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-13.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-14.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
    ]

}


export { person, social, newsletter, home, about, blog, work, gallery };
