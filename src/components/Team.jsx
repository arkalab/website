import ContentBox from "./ContentBox";
import ContentBoxTitle from "./ContentBoxTitle";
import ContentBoxCarouselFourColumns from "./ContentBoxCarouselFourColumns";
import ContentBoxTeamMember from "./ContentBoxTeamMember";
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
