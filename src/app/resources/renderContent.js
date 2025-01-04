import { person, newsletter, social, home, about, blog, work, gallery } from './content';
import { createI18nContent } from './content-i18n';
import { i18n } from './config';
import ConsultationPage from '../[locale]/consultation/page';

const renderContent = (t) => {
    if ( i18n ) {
        return createI18nContent(t);
    } else {
        return {
            person,
            social,
            newsletter,
            home,
            about,
            blog,
            work,
            consultation,
            gallery
        }
    }
};

export { renderContent };