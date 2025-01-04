import { Flex } from '@/once-ui/components';
import { baseURL, renderContent } from '@/app/resources';
import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';
import { useTranslations } from 'next-intl';

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

    const pricingPlans = [
        {
            title: t('consultation.basicPlanTitle'),
            description: t('consultation.basicPlanDescription'),
            price: t('consultation.basicPlanPrice'),
        },
        {
            title: t('consultation.premiumPlanTitle'),
            description: t('consultation.premiumPlanDescription'),
            price: t('consultation.premiumPlanPrice'),
        },
    ];

    return (
        <Flex
            fillWidth
            maxWidth="m"
            direction="column"
            padding="l"
        >
            <h1>{consultation.title}</h1>
            <p>{consultation.description}</p>
            <Flex
                justify="space-around"
                direction="row"
                wrap="wrap"
                gap="m"
            >
                {pricingPlans.map((plan, index) => (
                    <div
                        key={index}
                        style={{
                            border: '1px solid #ccc',
                            borderRadius: '8px',
                            padding: '16px',
                            maxWidth: '300px',
                            textAlign: 'center',
                        }}
                    >
                        <h2>{plan.title}</h2>
                        <p>{plan.description}</p>
                        <p style={{ fontSize: '24px', fontWeight: 'bold' }}>
                            {plan.price}
                        </p>
                        <button
                            style={{
                                backgroundColor: '#0070f3',
                                color: 'white',
                                padding: '10px 20px',
                                border: 'none',
                                borderRadius: '4px',
                                cursor: 'pointer',
                            }}
                        >
                            {t('consultation.bookNow')}
                        </button>
                    </div>
                ))}
            </Flex>
        </Flex>
    );
}
