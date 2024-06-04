import Header from '../../components/Header'
import ContentBox from "../../components/ContentBox"
import MainContent from '../../components/MainContent'
import ContentBoxTitle from "../../components/ContentBoxTitle"
import ContentBoxText from "../../components/ContentBoxText"
import ContentBoxSubTitle from "../../components/ContentBoxSubTitle"
import ContentBoxCarouselTwoColumns from "../../components/ContentBoxCarouselTwoColumns"
import ContentBoxCarouselFourColumns from "../../components/ContentBoxCarouselFourColumns"
import ContentBoxTeamMember from "../../components/ContentBoxTeamMember"
import ContentBoxProject from "../../components/ContentBoxProject"
import ContentBoxPartner from "../../components/ContentBoxPartner"
import Footer from "../../components/Footer"

export default function Home() {
  return (
    <>
      <Header>We are a <ins><b>digital collections consulting firm</b></ins> specialized in research and development for cultural heritage institutions and private collectors</Header>
      <MainContent>
        <ContentBox>
          <ContentBoxTitle>About</ContentBoxTitle>
          <ContentBoxCarouselTwoColumns>
            <ContentBoxText>
              <p>We use AI and open standards to digitize, catalog, and share artworks and historical documents on the web</p>
            </ContentBoxText>
            <ContentBoxText>
              <p><ContentBoxSubTitle>IIIF infrastructure</ContentBoxSubTitle> Implementation of the International Image Interoperability Framework</p>
              <p><ContentBoxSubTitle>Computer Vision</ContentBoxSubTitle> Image recognition, content classification, manuscript transcription</p>
            </ContentBoxText>
          </ContentBoxCarouselTwoColumns>
        </ContentBox>
        <ContentBox>
          <ContentBoxTitle>Team</ContentBoxTitle>
          <ContentBoxCarouselFourColumns>
            <ContentBoxTeamMember
              img="/team_anita.png"
              name="Anita Lucchesi"
              jobTitle="Business"
              url="https://pt.wikipedia.org/wiki/Anita_Lucchesi"
            />
            <ContentBoxTeamMember
              img="/team_bruno.png"
              name="Bruno Buccalon"
              jobTitle="Design"
              url="https://bruno.land"
            />
            <ContentBoxTeamMember
              img="/team_martim.png"
              name="Martim Passos"
              jobTitle="Technology"
              url=""
            />
            <ContentBoxTeamMember
              img="/team_yuri.png"
              name="Yuri Tavares"
              jobTitle="Technology"
              url=""
            />
          </ContentBoxCarouselFourColumns>
        </ContentBox>
        <ContentBox>
          <ContentBoxTitle>Partners</ContentBoxTitle>
          <ContentBoxCarouselFourColumns>
            <ContentBoxPartner
              img="/partner_rice.svg"
              url="https://www.rice.edu"
            />
          </ContentBoxCarouselFourColumns>
        </ContentBox>
        <ContentBox>
          <ContentBoxTitle>Projects</ContentBoxTitle>
          <ContentBoxCarouselTwoColumns>
            <ContentBoxProject
              logo="/project_tropiiify_logo.png"
              img="/project_tropiiify.png"
              name="tropiiify"
              url="https://github.com/arkalab/tropiiify"
              description="Tropy plugin for exporting IIIF collections"
            />
            <ContentBoxProject
              logo="/project_imaginerio_logo.png"
              img="/project_imaginerio.png"
              name="imagineRio"
              url="https://www.imaginerio.org"
              description="Historical mapping of Rio de Janeiro"
            />
          </ContentBoxCarouselTwoColumns>
        </ContentBox>
      </MainContent>
      <Footer>
        <p>arka@arka.la</p>
      </Footer>
    </>
  );
}
