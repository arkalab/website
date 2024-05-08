import { Listbox, ListboxButton, ListboxOption, ListboxOptions } from '@headlessui/react'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router';
import themeConfig from '../theme.config'

export default function LocaleSwitch({ className }) {
    const router = useRouter();
    const { asPath, locale } = router;
    const { i18n } = themeConfig; 
    const [selectedLanguage, setSelectedLanguage] = useState(i18n[0])
    
    useEffect(() => {
        const currentLanguage = i18n.find(l => l.locale === locale) || i18n[0];
        setSelectedLanguage(currentLanguage);
      }, [locale]);

    const handleLocaleChange = (language) => {
        router.push(asPath, asPath, { locale: language.locale });
      };

    return (
        <Listbox as="div" value={selectedLanguage} onChange={handleLocaleChange} className={className}>
            <ListboxButton>{selectedLanguage.text}</ListboxButton>
            <ListboxOptions anchor="bottom">
                {i18n.map((language) => (
                    <ListboxOption key={language.locale} value={language} className="data-[focus]:bg-blue-100">
                        {language.text}
                    </ListboxOption>
                ))}
            </ListboxOptions>
        </Listbox>
    )
}