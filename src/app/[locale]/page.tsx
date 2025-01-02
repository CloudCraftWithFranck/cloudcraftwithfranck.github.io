import React from 'react';

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
                {/* Left Column: Title and Text */}
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

                {/* Right Column: YouTube Video */}
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

            {/* Metrics Section */}
            <Flex
                direction="column"
                alignItems="center"
                style={{
                    marginTop: '4rem',
                    background: '#111',
                    padding: '2rem',
                    borderRadius: '8px',
                    width: '100%',
                }}
            >
                <Heading as="h2" variant="display-strong-l" marginBottom="s">
                    3.1M+ Deploys per Month (and Counting)
                </Heading>
                <Text
                    variant="body-default-m"
                    style={{
                        color: '#aaa',
                        marginBottom: '2rem',
                        textAlign: 'center',
                    }}
                >
                    Real-time usage showing totals for users and services, along with 30-day deploys, requests, and logs.
                </Text>
                <Flex
                    direction="row"
                    wrap={true}
                    justifyContent="space-around"
                    style={{
                        width: '100%',
                        textAlign: 'center',
                        gap: '1rem',
                    }}
                >
                    <Flex direction="column" alignItems="center" style={{ flex: '1', minWidth: '150px' }}>
                        <Text variant="heading-default-l" style={{ color: '#fff' }}>USERS</Text>
                        <Text variant="display-strong-l">862,875</Text>
                    </Flex>
                    <Flex direction="column" alignItems="center" style={{ flex: '1', minWidth: '150px' }}>
                        <Text variant="heading-default-l" style={{ color: '#fff' }}>SERVICES</Text>
                        <Text variant="display-strong-l">2,264,078</Text>
                    </Flex>
                    <Flex direction="column" alignItems="center" style={{ flex: '1', minWidth: '150px' }}>
                        <Text variant="heading-default-l" style={{ color: '#fff' }}>DEPLOYS</Text>
                        <Text variant="display-strong-l">3,190,886</Text>
                    </Flex>
                    <Flex direction="column" alignItems="center" style={{ flex: '1', minWidth: '150px' }}>
                        <Text variant="heading-default-l" style={{ color: '#fff' }}>LOGS</Text>
                        <Text variant="display-strong-l">65,486,510,023</Text>
                    </Flex>
                    <Flex direction="column" alignItems="center" style={{ flex: '1', minWidth: '150px' }}>
                        <Text variant="heading-default-l" style={{ color: '#fff' }}>REQUESTS</Text>
                        <Text variant="display-strong-l">143,507,882,416</Text>
                    </Flex>
                </Flex>
            </Flex>

            {/* Community Section */}
            <Flex
                direction="row"
                alignItems="center"
                justifyContent="center"
                style={{
                    marginTop: '4rem',
                    gap: '32px',
                }}
            >
                {/* Left Column: Community Image */}
                <Flex flex={1} justifyContent="center">
                    <img
                        src="/images/gallery/community-image.jpg"
                        alt="Join us on Discord"
                        style={{
                            borderRadius: '8px',
                            maxWidth: '100%',
                            height: 'auto',
                        }}
                    />
                </Flex>

                {/* Right Column: Community Text and Button */}
                <Flex
                    flex={1}
                    direction="column"
                    justifyContent="center"
                    alignItems="flex-start"
                    style={{
                        textAlign: 'left',
                    }}
                >
                    <Heading as="h2" variant="display-strong-l" marginBottom="m">
                        Join us on Discord
                    </Heading>
                    <Text
                        variant="body-default-s"
                        marginBottom="m"
                        style={{
                            marginBottom: '1rem',
                        }}
                    >
                        Join our community of cloud engineers and grow without limits.
                    </Text>
                    <Button
                        href="https://cloudcraftwithfranck.org"
                        variant="primary"
                        size="l"
                    >
                        Join Discord
                    </Button>
                </Flex>
            </Flex>

            {newsletter.display && <Mailchimp newsletter={newsletter} />}
        </Flex>
    );
}
