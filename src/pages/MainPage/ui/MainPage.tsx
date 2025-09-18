import { useTranslation } from 'react-i18next';

export default function MainPage () {
    const { t, i18n } = useTranslation('translation')

    console.log(i18n);
    
    return(
        <div>
            MainPage:
            <h1>{t('title')}</h1>
        </div>
    )
}
