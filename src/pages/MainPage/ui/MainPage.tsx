import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button';

export default function MainPage () {
    const { t, i18n } = useTranslation('translation')

    return(
        <div>
            <p>{t('pages.main')}</p>
            <h1>{t('title')}</h1>
        </div>
    )
}
