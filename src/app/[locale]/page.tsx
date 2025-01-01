'use client'; 

import React, { useState, useEffect } from 'react';

import { Heading, Flex, Text, Button, Avatar, RevealFx, Arrow } from '@/once-ui/components';
import { Projects } from '@/components/work/Projects';

import { baseURL, routes, renderContent } from '@/app/resources';
import { Mailchimp } from '@/components';
import { Posts } from '@/components/blog/Posts';
import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';
import { useTranslations } from 'next-intl';

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
            feedback: 'This platform has transformed the way I approach cloud projects.',
            name: 'John Doe',
            username: 'johndoe',
        },
        {
            feedback: 'A fantastic tool for beginners and experts alike!',
            name: 'Jane Smith',
            username: 'janesmith',
        },
        {
            feedback: 'The resources available here are second to none.',
            name: 'Alice Johnson',
            username: 'alicejohnson',
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    // Automatically change the testimonial every 2 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
        }, 2000);

        return () => clearInterval(interval);
    }, [testimonials.length]);

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
            {/* Testimonials Section */}
            <Flex
                direction="column"
                alignItems="center"
                style={{ marginTop: '4rem', overflow: 'hidden', width: '100%' }}
            >
                <Heading as="h2" variant="display-strong-l" marginBottom="m">
                    What People Are Saying
                </Heading>
                <Flex
                    direction="row"
                    style={{
                        width: '100%',
                        justifyContent: 'center',
                        transform: `translateX(-${currentIndex * 100}%)`,
                        transition: 'transform 0.5s ease-in-out',
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
                                flex: '0 0 100%',
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
