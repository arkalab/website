import { Listbox, ListboxButton, ListboxOption, ListboxOptions } from '@headlessui/react'
import { useState } from 'react'
import { useRouter } from 'next/router';
import themeConfig from '../theme.config'

export default function LocaleSwitch({ className }) {
    const router = useRouter();
    const { asPath, locale } = router;
    const { i18n } = themeConfig; // Destructure i18n from the imported configuration
    const [selectedLanguage, setSelectedLanguage] = useState(i18n[0])
    
    const handleLocaleChange = (language) => {
        setSelectedLanguage(language);
        console.log(selectedLanguage)
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