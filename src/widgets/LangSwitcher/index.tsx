import {useTranslation} from 'react-i18next';
import {Button} from 'shared/ui/Button';

export function LangSwitcher() {
  const {t, i18n} = useTranslation();

  const changeLanguage = () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
  };

  return (
		<Button onClick={changeLanguage}>
			{t('translation button')}
		</Button>
  );
}
