import ContentBox from "./ContentBox";
import ContentBoxTitle from "./ContentBoxTitle";
import ContentBoxCarouselFourColumns from "./ContentBoxCarouselFourColumns";
import ContentBoxPartner from "./ContentBoxPartner";
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
