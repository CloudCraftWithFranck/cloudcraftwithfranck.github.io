import { Flex } from '@/once-ui/components';
import { baseURL, renderContent } from '@/app/resources';
import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';
import ConsultationClient from './ConsultationClient';

export async function generateMetadata(
    { params: { locale } }: { params: { locale: string } }
) {
    const t = await getTranslations();
    const { consultation } = renderContent(t);

    const title = consultation.title;
    const description = consultation.description;
    const ogImage = `https://${baseURL}/og?title=${encodeURIComponent(title)}`;

    return {
        title,
        description,
        openGraph: {
            title,
            description,
            type: 'website',
            url: `https://${baseURL}/${locale}/consultation/`,
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

export default function Consultation(
    { params: { locale } }: { params: { locale: string } }
) {
    unstable_setRequestLocale(locale);

    const t = useTranslations();
    const { consultation } = renderContent(t);

    return (
        <Flex
            fillWidth
            maxWidth="m"
            direction="column"
            padding="l"
        >
            <h1>{consultation.title}</h1>
            <p>{consultation.description}</p>
            <ConsultationClient />
        </Flex>
    );
}
