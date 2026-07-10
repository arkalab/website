import ContentBox from "./ContentBox";
import ContentBoxTitle from "./ContentBoxTitle";
import ContentBoxCarouselTwoColumns from "./ContentBoxCarouselTwoColumns";
import ContentBoxProject from "./ContentBoxProject";
import Globe from "./Globe";
import { useTranslations } from "next-intl";

export default function About() {
  const t = useTranslations("HomePage.Projects");
  return (
    <ContentBox>
      <div className="mt-16 mb-24 flex flex-col items-center gap-1 sm:mb-8 sm:flex-row sm:justify-between sm:gap-6">
        <p className="hidden text-xl font-extrabold sm:block">
          {t("clientsBased")}
        </p>
        <Globe />
        <p className="text-center text-xl font-extrabold sm:hidden">
          {t("clients")}
        </p>
        <p className="hidden text-xl font-extrabold sm:block sm:text-right">
          {t("clientsGlobal")}
        </p>
      </div>
      <ContentBoxTitle>{t("title")}</ContentBoxTitle>
      <ContentBoxCarouselTwoColumns>
        <ContentBoxProject
          img="/project_google.png"
          name={t("google.title")}
          url="https://www1.folha.uol.com.br/esporte/2026/06/google-recria-com-ia-o-gol-mais-bonito-de-pele-na-javari-que-nao-foi-filmado.shtml"
          description={t("google.description")}
        />
        <ContentBoxProject
          img="/project_michel_chiha.webp"
          video="/project_michel_chiha"
          name={t("michelChiha.title")}
          url="https://constitution.michelchiha.org/"
          description={t("michelChiha.description")}
        />
        <ContentBoxProject
          logo="/project_tropiiify_logo.png"
          img="/project_tropiiify.png"
          name={t("tropiiify.title")}
          url="https://github.com/arkalab/tropiiify"
          description={t("tropiiify.description")}
        />
        <ContentBoxProject
          logo="/project_imaginerio_logo.png"
          img="/project_imaginerio.png"
          video="/project_imaginerio"
          name={t("imaginerio.title")}
          url="https://www.imaginerio.org"
          description={t("imaginerio.description")}
        />
      </ContentBoxCarouselTwoColumns>
    </ContentBox>
  );
}
