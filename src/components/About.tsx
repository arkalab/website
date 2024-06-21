import ContentBox from "./ContentBox";
import ContentBoxTitle from "./ContentBoxTitle";
import ContentBoxText from "./ContentBoxText";
import ContentBoxSubTitle from "./ContentBoxSubTitle";
import ContentBoxCarouselTwoColumns from "./ContentBoxCarouselTwoColumns";
import { useTranslations } from "next-intl";

export default function About() {
  const t = useTranslations("HomePage.About");
  return (
    <ContentBox>
      <ContentBoxTitle>{t("title")}</ContentBoxTitle>
      <ContentBoxCarouselTwoColumns>
        <ContentBoxText>
          <p>{t("description")}</p>
        </ContentBoxText>
        <ContentBoxText>
          <p>
            <ContentBoxSubTitle>{t("infrastructure.title")}</ContentBoxSubTitle>
            {t("infrastructure.description")}
          </p>
          <p>
            <ContentBoxSubTitle>
              {t("computer-vision.title")}
            </ContentBoxSubTitle>
            {t("computer-vision.description")}
          </p>
        </ContentBoxText>
      </ContentBoxCarouselTwoColumns>
    </ContentBox>
  );
}
