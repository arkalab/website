import ContentBox from "../components/ContentBox";
import ContentBoxTitle from "../components/ContentBoxTitle";
import ContentBoxCarouselFourColumns from "../components/ContentBoxCarouselFourColumns";
import ContentBoxPartner from "../components/ContentBoxPartner";
import { useTranslations } from "next-intl";

export default function Partners() {
  const t = useTranslations("HomePage.Partners");
  return (
    <ContentBox>
      <ContentBoxTitle>{t("title")}</ContentBoxTitle>
      <ContentBoxCarouselFourColumns>
        <ContentBoxPartner img="/partner_rice.svg" url="https://www.rice.edu" />
      </ContentBoxCarouselFourColumns>
    </ContentBox>
  );
}
