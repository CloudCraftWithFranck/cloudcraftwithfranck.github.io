"use client"; // Mark this file as a client component

import React, { useState, useEffect } from 'react';
import { Heading, Flex, Text } from '@/once-ui/components';
import { useTranslations } from 'next-intl';

export default function Home() {
    const t = useTranslations();

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
            direction="column"
            alignItems="center"
            marginTop="4"
            gap="4"
        >
            <Heading as="h2" variant="display-strong-l" marginBottom="m">
                What People Are Saying
            </Heading>
            <Flex
                direction="column"
                alignItems="center"
                justifyContent="center"
                style={{ height: '150px', overflow: 'hidden' }}
            >
                {testimonials.map((testimonial, index) => (
                    <Flex
                        key={index}
                        direction="column"
                        alignItems="center"
                        justifyContent="center"
                        style={{
                            transform: `translateX(${-100 * currentTestimonialIndex}%)`,
                            transition: 'transform 0.5s ease-in-out',
                            whiteSpace: 'nowrap',
                        }}
                    >
                        <Text variant="body-strong-s">{testimonial.feedback}</Text>
                        <Text variant="caption-default" marginTop="m" onBackground="neutral-weak">
                            - {testimonial.name} <span style={{ color: '#bbb' }}>{testimonial.username}</span>
                        </Text>
                    </Flex>
                ))}
            </Flex>
        </Flex>
    );
}
