import React from 'react';

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

    const recommendedBooks = [
        {
            title: 'Cloud Computing 101',
            description: 'An introduction to cloud computing concepts.',
            image: '/images/cloud-01.png',
        },
        {
            title: 'Advanced Cloud Solutions',
            description: 'Deep dive into cloud architecture and best practices.',
            image: '/images/cloud-02.png',
        },
        {
            title: 'Cloud Security Essentials',
            description: 'A comprehensive guide to securing your cloud environment.',
            image: '/images/cloud-03.png',
        },
        {
            title: 'DevOps for Cloud Engineers',
            description: 'Master DevOps tools and methodologies in the cloud.',
            image: '/images/cloud-04.png',
        },
    ];

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

            {/* Recommended Books Section */}
            <Flex
                direction="column"
                alignItems="center"
                style={{ marginTop: '4rem', marginBottom: '4rem' }}
            >
                <Heading as="h2" variant="display-strong-l" marginBottom="m">
                    Recommended Books
                </Heading>
                <Flex
                    className="books-container"
                    style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(4, 1fr)',
                        gap: '16px',
                        width: '100%',
                        justifyContent: 'center',
                    }}
                >
                    {recommendedBooks.map((book, index) => (
                        <div
                            key={index}
                            style={{
                                padding: '1.5rem',
                                borderRadius: '8px',
                                background: '#fff',
                                color: '#000',
                                boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
                                textAlign: 'center',
                            }}
                        >
                            <img
                                src={book.image}
                                alt={book.title}
                                style={{
                                    width: '100%',
                                    height: 'auto',
                                    borderRadius: '8px',
                                    marginBottom: '1rem',
                                }}
                            />
                            <Heading as="h3" variant="heading-default-m" marginBottom="s">
                                {book.title}
                            </Heading>
                            <Text variant="body-default-m">{book.description}</Text>
                        </div>
                    ))}
                </Flex>
            </Flex>

            {/* Newsletter Section */}
            {newsletter.display && <Mailchimp newsletter={newsletter} />}
        </Flex>
    );
}
