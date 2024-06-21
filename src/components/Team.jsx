import ContentBox from "../components/ContentBox";
import ContentBoxTitle from "../components/ContentBoxTitle";
import ContentBoxCarouselFourColumns from "../components/ContentBoxCarouselFourColumns";
import ContentBoxTeamMember from "../components/ContentBoxTeamMember";
import { useTranslations } from "next-intl";

export default function About() {
  const t = useTranslations("HomePage.Team");
  return (
    <ContentBox>
      <ContentBoxTitle>Team</ContentBoxTitle>
      <ContentBoxCarouselFourColumns>
        <ContentBoxTeamMember
          img="/team_anita.png"
          name={t("Anita.name")}
          jobTitle={t("Anita.role")}
          url="https://pt.wikipedia.org/wiki/Anita_Lucchesi"
        />
        <ContentBoxTeamMember
          img="/team_bruno.png"
          name={t("Bruno.name")}
          jobTitle={t("Bruno.role")}
          url="https://bruno.land"
        />
        <ContentBoxTeamMember
          img="/team_martim.png"
          name={t("Martim.name")}
          jobTitle={t("Martim.role")}
          url=""
        />
        <ContentBoxTeamMember
          img="/team_yuri.png"
          name={t("Yuri.name")}
          jobTitle={t("Yuri.role")}
          url=""
        />
      </ContentBoxCarouselFourColumns>
    </ContentBox>
  );
}
