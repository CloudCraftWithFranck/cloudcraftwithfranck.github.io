import React, { useState, useEffect } from 'react';

import { Heading, Flex, Text, Button, Avatar, RevealFx, Arrow } from '@/once-ui/components';
import { Projects } from '@/components/work/Projects';

import { baseURL, routes, renderContent } from '@/app/resources';
import { Mailchimp } from '@/components';
import { Posts } from '@/components/blog/Posts';
import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';
import { useTranslations } from 'next-intl';

import './page.css'; // Importing CSS for the grid styling

export async function generateMetadata(
    { params: { locale } }: { params: { locale: string } }
) {
    const t = await getTranslations();
    const { home } = renderContent(t);
    const title = home.title;
    const description = home.description;
    const ogImage = `https://${baseURL}/og?title=${encodeURIComponent(title)}`;

    return {
        title,
        description,
        openGraph: {
            title,
            description,
            type: 'website',
            url: `https://${baseURL}/${locale}`,
            images: [
                {
                    url: ogImage,
                    alt: title,
                },
            ],
        },
        twitter: {
            card: 'summary_large_image',
            title,
            description,
            images: [ogImage],
        },
    };
}

export default function Home(
    { params: { locale } }: { params: { locale: string } }
) {
    unstable_setRequestLocale(locale);
    const t = useTranslations();
    const { home, about, person, newsletter } = renderContent(t);

    const testimonials = [
        {
            feedback: 'Franck has helped me with terraform fixes when I was struggling with VNET and subnet configurations.',
            name: 'Viviane Huguette',
            username: 'khugg',
        },
        {
            feedback: 'Franck is good at explaining azure pipelines with dotnet code deployments to web apps.',
            name: 'Patience Opara',
            username: 'popara',
        },
        {
            feedback: 'CloudCraftWithFranck is very for beginners. I was coached not knowing anything on Azure, and now I am rocking it.',
            name: 'Dory Tchamdjeu',
            username: 'dory',
        },
        {
            feedback: 'If you need a clean portfolio for your cloud showcases, ask Cloudcraftwithfranck for help. They got you!',
            name: 'Paola Djobissie',
            username: 'pdjobissie',
        },
    ];

    const [theme, setTheme] = useState<'light' | 'dark'>('light');

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme') as 'light' | 'dark';
        if (savedTheme) {
            setTheme(savedTheme);
            document.documentElement.setAttribute('data-theme', savedTheme);
        }
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme);
        document.documentElement.setAttribute('data-theme', newTheme);
    };

    return (
        <Flex
            maxWidth="m"
            fillWidth
            gap="xl"
            direction="column"
            alignItems="center"
        >
            <script
                type="application/ld+json"
                suppressHydrationWarning
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        '@context': 'https://schema.org',
                        '@type': 'WebPage',
                        name: home.title,
                        description: home.description,
                        url: `https://${baseURL}`,
                        image: `${baseURL}/og?title=${encodeURIComponent(home.title)}`,
                        publisher: {
                            '@type': 'Person',
                            name: person.name,
                            image: {
                                '@type': 'ImageObject',
                                url: `${baseURL}${person.avatar}`,
                            },
                        },
                    }),
                }}
            />

            {/* Theme Toggle Button */}
            <Button
                onClick={toggleTheme}
                style={{
                    position: 'absolute',
                    top: '1rem',
                    right: '1rem',
                    zIndex: 1000,
                }}
            >
                {theme === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
            </Button>

            {/* Title and YouTube Section */}
            <Flex
                fillWidth
                direction="row"
                alignItems="center"
                justifyContent="space-between"
                gap="l"
                style={{
                    marginBottom: '2rem',
                }}
            >
                <Flex
                    direction="column"
                    flex={1}
                >
                    <RevealFx
                        translateY="4"
                        fillWidth
                        justifyContent="flex-start"
                        paddingBottom="m"
                    >
                        <Heading
                            wrap="balance"
                            variant="display-strong-l"
                        >
                            Cloud Advocate and Instructor
                        </Heading>
                    </RevealFx>
                    <RevealFx
                        translateY="8"
                        delay={0.2}
                        fillWidth
                        justifyContent="flex-start"
                        paddingBottom="m"
                    >
                        <Text
                            wrap="balance"
                            onBackground="neutral-weak"
                            variant="heading-default-xl"
                        >
                            I'm Franck, a cloud advocate and instructor at CloudCraftWithFranck, where I craft intuitive cloud solutions for engineers.
                        </Text>
                    </RevealFx>
                    <RevealFx translateY="12" delay={0.4}>
                        <Flex fillWidth>
                            <Button
                                id="about"
                                data-border="rounded"
                                href={`/${locale}/about`}
                                variant="tertiary"
                                size="m"
                            >
                                <Flex gap="8" alignItems="center">
                                    {about.avatar.display && (
                                        <Avatar
                                            style={{
                                                marginLeft: '-0.75rem',
                                                marginRight: '0.25rem',
                                            }}
                                            src={person.avatar}
                                            size="m"
                                        />
                                    )}
                                    About Me
                                    <Arrow trigger="#about" />
                                </Flex>
                            </Button>
                        </Flex>
                    </RevealFx>
                </Flex>

                <Flex
                    flex={1}
                    justifyContent="center"
                    alignItems="center"
                >
                    <iframe
                        src="https://www.youtube.com/embed/example-video-id"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        style={{
                            width: '100%',
                            height: '300px',
                            borderRadius: '8px',
                        }}
                    ></iframe>
                </Flex>
            </Flex>

            {/* New Grid Section */}
            <Flex
                direction="column"
                alignItems="center"
                style={{ marginTop: '4rem' }}
            >
                <Heading as="h2" variant="display-strong-l" marginBottom="m">
                    Hundreds Of Hours Invested
                </Heading>
                <Flex className="grid-container" style={{ gap: '16px' }}>
                    <div className="grid-item">STUDENTS</div>
                    <div className="grid-item">COMPANIES</div>
                    <div className="grid-item">ARTICLES</div>
                    <div className="grid-item">PROJECTS</div>
                    <div className="grid-item">COUNTRIES</div>
                    <div className="grid-item">1,388</div>
                    <div className="grid-item">187</div>
                    <div className="grid-item">2,360</div>
                    <div className="grid-item">239</div>
                    <div className="grid-item">21</div>
                </Flex>
            </Flex>

            <RevealFx translateY="16" delay={0.6}>
                <Projects range={[1, 1]} locale={locale} />
            </RevealFx>

            {routes['/blog'] && (
                <Flex
                    fillWidth
                    gap="24"
                    mobileDirection="column"
                >
                    <Flex flex={1} paddingLeft="l">
                        <Heading
                            as="h2"
                            variant="display-strong-xs"
                            wrap="balance"
                        >
                            Latest from the Blog
                        </Heading>
                    </Flex>
                    <Flex flex={3} paddingX="20">
                        <Posts range={[1, 2]} columns="2" locale={locale} />
                    </Flex>
                </Flex>
            )}

            <Projects range={[2]} locale={locale} />

            {/* Testimonials Section */}
            <Flex
                direction="column"
                alignItems="center"
                style={{ marginTop: '4rem' }}
            >
                <Heading as="h2" variant="display-strong-l" marginBottom="m">
                    What People Are Saying
                </Heading>
                <Flex
                    direction="row"
                    style={{
                        flexWrap: 'wrap',
                        gap: '16px',
                        justifyContent: 'center',
                    }}
                >
                    {testimonials.map((testimonial, index) => (
                        <Flex
                            key={index}
                            direction="column"
                            alignItems="center"
                            padding="l"
                            style={{
                                borderRadius: '8px',
                                background: '#000',
                                color: '#fff',
                                maxWidth: '300px',
                                textAlign: 'center',
                                margin: '8px',
                            }}
                        >
                            <Text variant="body-strong-s">
                                {testimonial.feedback}
                            </Text>
                            <Text
                                variant="body-default-s"
                                marginTop="m"
                                style={{ color: '#bbb' }}
                            >
                                - {testimonial.name}{' '}
                                <span>@{testimonial.username}</span>
                            </Text>
                        </Flex>
                    ))}
                </Flex>
            </Flex>

            {newsletter.display && <Mailchimp newsletter={newsletter} />}
        </Flex>
    );
}
