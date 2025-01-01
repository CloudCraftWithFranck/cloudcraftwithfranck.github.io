import React from 'react';

import { Heading, Flex, Text, Button, Avatar, RevealFx, Arrow } from '@/once-ui/components';
import { Projects } from '@/components/work/Projects';

import { baseURL, routes, renderContent } from '@/app/resources';
import { Mailchimp } from '@/components';
import { Posts } from '@/components/blog/Posts';
import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';
import { useTranslations } from 'next-intl';

const testimonials = [
    { name: "Lyes", username: "@lyker_zi", feedback: "There is an easier option. Deploying literally anything on @Railway" },
    { name: "Benjamin Klieger", username: "@BenjaminKlieger", feedback: '"Ship your apps, databases, and more to production in seconds." @Railway is a breeze to deploy.' },
    { name: "kinsyu", username: "@kinsyudev", feedback: "Addicted to organizing my services in @Railway" },
    { name: "Sam Newby", username: "@SamNewby_", feedback: "The UX in deploying a new app on @Railway is probably the best I’ve ever used." },
    { name: "Wilson Wilson", username: "@euboid", feedback: "@Railway has the best support among every PaaS I’ve tried. < 1 minute responses. Every. Single. Time." },
    { name: "teo", username: "@teodor_io", feedback: "Railway is really good. Incredible developer experience." },
    { name: "Kyle McDonald", username: "@kpmdev", feedback: "Damn, @Railway is by far the fastest I’ve ever got up and running on a host." },
    { name: "caeser_kv", username: "@caesar_kv", feedback: "@Railway for postgres, railway for everything ❤️" },
];

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
            <Flex
                fillWidth
                direction="row"
                alignItems="flex-start"
                justifyContent="space-between"
                paddingY="l"
                gap="l"
            >
                {/* Left Column: Text Content */}
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
                                    {t('about.title')}
                                    <Arrow trigger="#about" />
                                </Flex>
                            </Button>
                        </Flex>
                    </RevealFx>
                </Flex>

                {/* Right Column: CloudCraft With Me */}
                <Flex
                    direction="column"
                    flex={1}
                    padding="20"
                    border="neutral-medium"
                    borderStyle="solid-1"
                    radius="m"
                    background="neutral-strong"
                    style={{ textAlign: 'center' }}
                >
                    <Heading
                        as="h2"
                        variant="display-strong-s"
                        marginBottom="m"
                    >
                        CloudCraft With Me
                    </Heading>
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
                            Latest from the blog
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
                fillWidth
                padding="xl"
                backgroundColor="neutral-strong"
                style={{ textAlign: 'center', marginTop: '2rem' }}
            >
                <Heading as="h2" variant="display-strong-s" marginBottom="m">
                    What People Are Saying
                </Heading>
                <Flex
                    direction="row"
                    wrap
                    gap="l"
                    justifyContent="center"
                >
                    {testimonials.map((testimonial, index) => (
                        <Flex
                            key={index}
                            direction="column"
                            padding="m"
                            radius="m"
                            background="neutral-weak"
                            style={{
                                width: '300px',
                                boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
                            }}
                        >
                            <Text variant="body-strong">{testimonial.feedback}</Text>
                            <Text variant="caption-default" marginTop="m" onBackground="neutral-weak">
                                - {testimonial.name} <span style={{ color: '#bbb' }}>{testimonial.username}</span>
                            </Text>
                        </Flex>
                    ))}
                </Flex>
            </Flex>

            {newsletter.display && <Mailchimp newsletter={newsletter} />}
        </Flex>
    );
}
