import React from 'react';
import {
  Heading,
  Flex,
  Text,
  Button,
  Avatar,
  RevealFx,
  Arrow,
} from '@/once-ui/components';
import { Projects } from '@/components/work/Projects';

import { baseURL, routes, renderContent } from '@/app/resources';
import { Mailchimp } from '@/components';
import { Posts } from '@/components/blog/Posts';
import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';
import { useTranslations } from 'next-intl';

import './page.css';

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
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

const StatsSection: React.FC = () => {
  const stats = [
    { label: 'Users', value: 866292 },
    { label: 'Services', value: 2277910 },
    { label: 'Deploys', value: 3163659 },
    { label: 'Logs', value: 660826205 },
    { label: 'Requests', value: 232696223316 },
  ];

  return (
    <section className="bg-black py-16">
      <div className="container mx-auto text-center text-white px-4">
        <h2 className="text-4xl font-bold mb-4">
          3.1M+ deploys per month (and counting)
        </h2>
        <p className="text-gray-400 mb-10">
          Real-time usage showing totals for users and services, along with
          30-day deploys, requests, and logs.
        </p>
        <div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 text-left"
          style={{ justifyContent: 'center' }}
        >
          {stats.map((stat, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center space-y-2"
            >
              <p className="text-3xl font-bold text-white">
                {stat.value.toLocaleString()}
              </p>
              <p className="text-gray-400 text-sm uppercase">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default function Home({ params: { locale } }: { params: { locale: string } }) {
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
      {/* Existing Sections */}
      <Flex
        fillWidth
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        gap="l"
        style={{ marginBottom: '2rem' }}
      >
        {/* Title Section */}
        <Flex direction="column" flex={1}>
          <RevealFx translateY="4" fillWidth justifyContent="flex-start" paddingBottom="m">
            <Heading wrap="balance" variant="display-strong-l">
              Cloud Advocate and Instructor
            </Heading>
          </RevealFx>
          <RevealFx translateY="8" delay={0.2} fillWidth justifyContent="flex-start" paddingBottom="m">
            <Text wrap="balance" onBackground="neutral-weak" variant="heading-default-xl">
              I'm Franck, a cloud advocate and instructor at CloudCraftWithFranck, where I craft intuitive cloud
              solutions for engineers.
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

        {/* YouTube Section */}
        <Flex flex={1} justifyContent="center" alignItems="center">
          <iframe
            src="https://www.youtube.com/embed/phLPKVx3Cl4?si=zghOhcozdSlmhKDG"
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

      {/* Stats Section */}
      <StatsSection />

      {/* Existing Content */}
      <RevealFx translateY="16" delay={0.6}>
        <Projects range={[1, 1]} locale={locale} />
      </RevealFx>

      {routes['/blog'] && (
        <Flex fillWidth gap="24" mobileDirection="column">
          <Flex flex={1} paddingLeft="l">
            <Heading as="h2" variant="display-strong-xs" wrap="balance">
              Latest from the Blog
            </Heading>
          </Flex>
          <Flex flex={3} paddingX="20">
            <Posts range={[1, 2]} columns="2" locale={locale} />
          </Flex>
        </Flex>
      )}

      <Projects range={[2]} locale={locale} />
    </Flex>
  );
}
