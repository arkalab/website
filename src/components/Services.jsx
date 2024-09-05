import ContentBox from "./ContentBox";
import ContentBoxTitle from "./ContentBoxTitle";
import ContentBoxTeamMember from "./ContentBoxTeamMember";
import ContentBoxCarouselFourColumns from "./ContentBoxCarouselFourColumns";
import { useTranslations } from "next-intl";

export default function Services() {
  const t = useTranslations("HomePage.Services");
  return (
    <ContentBox>
      <ContentBoxTitle>{t("title")}</ContentBoxTitle>
      <ContentBoxCarouselFourColumns>
        <ContentBoxTeamMember
          img="/planning.png"
          name={t("planning.title")}
          jobTitle={t("planning.description")}
        />
        <ContentBoxTeamMember
          img="/fundraising.png"
          name={t("fundraising.title")}
          jobTitle={t("fundraising.description")}
        />
        <ContentBoxTeamMember
          img="/software.png"
          name={t("software.title")}
          jobTitle={t("software.description")}
        />
        <ContentBoxTeamMember
          img="/support.png"
          name={t("support.title")}
          jobTitle={t("support.description")}
        />
      </ContentBoxCarouselFourColumns>
    </ContentBox>
  );
}
