import { InlineCode } from "@/once-ui/components";

const createI18nContent = (t) => {
    const person = {
        firstName: 'Franck',
        lastName:  'Kengne',
        get name() {
            return `${this.firstName} ${this.lastName}`;
        },
        role:      t("person.role"),
        avatar:    '/images/avatar.jpg',
        location:  'America/New_York',        // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
        languages: ['English', 'Spanish', 'German']  // optional: Leave the array empty if you don't want to display languages
    }

    const newsletter = {
        display: true,
        title: <>{t("newsletter.title", {firstName: person.firstName})}</>,
        description: <>{t("newsletter.description")}</>
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
            link: '',
        },
        {
            name: 'Email',
            icon: 'email',
            link: 'mailto:frakengne5991@gmail.com',
        },
    ]

    const home = {
        label: t("home.label"),
        title: t("home.title", {name: person.name}),
        description: t("home.description", {role: person.role}),
        headline: <>{t("home.headline")}</>,
        subline: <>{t("home.subline")}</>
    }

    const about = {
        label: t("about.label"),
        title: t("about.title"),
        description: t("about.description", {name: person.name, role: person.role, location: person.location}),
        tableOfContent: {
            display: true,
            subItems: true
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
            title: t("about.intro.title"),
            description: <>{t("about.intro.description")}</>
        },
        work: {
            display: true, // set to false to hide this section
            title: t("about.work.title"),
            experiences: [
                {
                    company: 'CSE',
                    timeframe: t("about.work.experiences.CSE.timeframe"),
                    role: t("about.work.experiences.CSE.role"),
                    achievements: t("about.work.experiences.CSE.achievements").split(";"),
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
                    timeframe: t("about.work.experiences.OpenNMS.timeframe"),
                    role: t("about.work.experiences.OpenNMS.role"),
                    achievements: t("about.work.experiences.OpenNMS.achievements").split(";"),
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
                    description: <>{t(`about.studies.institutions.University of Jakarta.description`)}</>,
                },
                {
                    name: 'Rowan College Burlington County',
                    description: <>{t("about.studies.institutions.Build the Future.description")}</>,
                }
            ]
        },
        technical: {
            display: true, // set to false to hide this section
            title: t("about.technical.title"),
            skills: [
                {
                    title: 'Azure',
                    description: <>{t("about.technical.skills.Azure.description")}</>,
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
                    title: 'Certifications',
                    description: <>{t("about.technical.skills.Certifications.description")}</>, // "." not accepted in next-intl namespace
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
                        },            
                    ]
                },
            ]
        }
    }

    const blog = {
        label: t("blog.label"),
        title: t("blog.title"),
        description: t("blog.description", {name: person.name})
        // Create new blog posts by adding a new .mdx file to app/blog/posts
        // All posts will be listed on the /blog route
    }

    const work = {
        label: t("work.label"),
        title: t("work.title"),
        description: t("work.description", {name: person.name})
        // Create new project pages by adding a new .mdx file to app/blog/posts
        // All projects will be listed on the /home and /work routes
    }

    const gallery = {
        label: t("gallery.label"),
        title: t("gallery.title"),
        description: t("gallery.description", {name: person.name}),
        // Images from https://pexels.com
        images: [
            {
                src: '/images/gallery/img-01.jpg',
                alt: 'image',
                orientation: 'vertical'
            },
            {
                src: '/images/gallery/img-02.jpg',
                alt: 'image',
                orientation: 'horizontal'
            },
            { 
                src: '/images/gallery/img-03.jpg',
                alt: 'image',
                orientation: 'vertical'
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
                orientation: 'vertical'
            },
            {
                src: '/images/gallery/img-07.jpg',
                alt: 'image',
                orientation: 'horizontal'
            },
            {
                src: '/images/gallery/img-08.jpg',
                alt: 'image',
                orientation: 'vertical'
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
                orientation: 'vertical'
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
    return {
        person,
        social,
        newsletter,
        home,
        about,
        blog,
        work,
        gallery
    }
};

export { createI18nContent };