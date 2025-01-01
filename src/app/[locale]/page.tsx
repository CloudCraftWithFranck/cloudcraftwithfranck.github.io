"use client";

import React, { useState, useEffect } from 'react';
import { Heading, Flex, Text } from '@/once-ui/components';

export default function Home() {
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
    );
}
