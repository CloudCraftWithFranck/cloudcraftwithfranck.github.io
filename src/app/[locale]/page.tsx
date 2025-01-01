"use client";

import React, { useState, useEffect } from 'react';
import { Heading, Flex, Text, Button, Avatar, RevealFx, Arrow } from '@/once-ui/components';
import { Projects } from '@/components/work/Projects';
import { baseURL, routes, renderContent } from '@/app/resources';
import { Mailchimp } from '@/components';
import { Posts } from '@/components/blog/Posts';
import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';
import { useTranslations } from 'next-intl';

// Server-side metadata generation
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

export default function Home({ params: { locale } }: { params: { locale: string } }) {
    unstable_setRequestLocale(locale);
    const t = useTranslations();
    const { home, about, person, newsletter } = renderContent(t);

    // Testimonials data
    const testimonials = [
        { feedback: "This platform has transformed the way I approach cloud projects.", name: "John Doe", username: "@johndoe" },
        { feedback: "A fantastic tool for beginners and experts alike!", name: "Jane Smith", username: "@janesmith" },
        { feedback: "The resources available here are second to none.", name: "Alice Johnson", username: "@alicejohnson" },
    ];

    // State for sliding testimonials
    const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTestimonialIndex((prevIndex) =>
                (prevIndex + 1) % testimonials.length
            );
        }, 2000); // Change slide every 2 seconds

        return () => clearInterval(interval); // Cleanup on component unmount
    }, [testimonials.length]);

    return (
        <Flex
            maxWidth="m"
            fillWidth
            gap="xl"
            direction="column"
            alignItems="center"
        >
            {/* Existing Page Content */}
            <Flex
                fillWidth
                direction="row"
                alignItems="flex-start"
                justifyContent="space-between"
                paddingY="l"
                gap="l"
            >
                <Flex
                    direction="column"
                    fillWidth
                    flex={2}
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
                            {home.headline}
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
                            {home.subline}
                        </Text>
                    </RevealFx>
                </Flex>
            </Flex>

            {/* Testimonials Section */}
            <Flex
                direction="column"
                alignItems="center"
                marginTop="4"
                gap="4"
            >
                <Heading as="h2" variant="display-strong-l" marginBottom="m">
                    What People Are Saying
                </Heading>
                <Flex
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                    style={{
                        height: '150px',
                        overflow: 'hidden',
                        whiteSpace: 'nowrap',
                    }}
                >
                    {testimonials.map((testimonial, index) => (
                        <Flex
                            key={index}
                            direction="column"
                            alignItems="center"
                            justifyContent="center"
                            style={{
                                transform: `translateX(${(index - currentTestimonialIndex) * 100}%)`,
                                transition: 'transform 0.5s ease-in-out',
                            }}
                        >
                            <Text variant="body-strong-s">{testimonial.feedback}</Text>
                            <Text variant="body-default-s" marginTop="m" onBackground="neutral-weak">
                                - {testimonial.name} <span style={{ color: '#bbb' }}>{testimonial.username}</span>
                            </Text>
                        </Flex>
                    ))}
                </Flex>
            </Flex>

            {/* Newsletter Section */}
            {newsletter.display && <Mailchimp newsletter={newsletter} />}
        </Flex>
    );
}
