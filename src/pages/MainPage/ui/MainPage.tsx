import {useTranslation} from 'react-i18next';

export default function MainPage() {
  const {t} = useTranslation('translation');

  return (
		<div>
			<p>{t('pages.main')}</p>
			<h1>{t('title')}</h1>
		</div>
  );
}
