import ContentBox from "../components/ContentBox"
import ContentBoxTitle from "../components/ContentBoxTitle"
import ContentBoxCarouselTwoColumns from "../components/ContentBoxCarouselTwoColumns"
import ContentBoxProject from "../components/ContentBoxProject"
import { useTranslations } from 'next-intl'


export default function About() {
    const t = useTranslations('HomePage.Projects')
    return (
        <ContentBox>
            <ContentBoxTitle>{t('title')}</ContentBoxTitle>
            <ContentBoxCarouselTwoColumns>
                <ContentBoxProject
                    logo="/project_tropiiify_logo.png"
                    img="/project_tropiiify.png"
                    name={t('tropiiify.title')}
                    url="https://github.com/arkalab/tropiiify"
                    description={t('tropiiify.description')}
                />
                <ContentBoxProject
                    logo="/project_imaginerio_logo.png"
                    img="/project_imaginerio.png"
                    name={t('imaginerio.title')}
                    url="https://www.imaginerio.org"
                    description={t('imaginerio.description')}
                />
            </ContentBoxCarouselTwoColumns>
        </ContentBox>)
}