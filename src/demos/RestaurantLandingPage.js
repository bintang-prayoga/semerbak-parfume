import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import Hero from "components/hero/TwoColumnWithVideo.js";
import Features from "components/features/ThreeColSimple.js";
import MainFeature from "components/features/TwoColWithButton.js";
import MainFeature2 from "components/features/TwoColSingleFeatureWithStats2.js";
import TabGrid from "components/cards/TabCardGrid.js";
import DownloadApp from "components/cta/DownloadApp.js";
import Footer from "components/footers/FiveColumnWithInputForm.js";
import Header from "../components/headers/light.js";
import {ReactComponent as ChevronUpIcon} from "../images/chevron-up-icon.svg";

const BackToTopButton = styled.button`
  ${tw`z-20 focus:outline-none bg-white border-2 border-gray-500/50 rounded-full fixed bottom-0 right-0 mx-5 my-6 p-3 hover:bg-gray-600/50 transition duration-300`}
  svg {
    ${tw`w-6 h-6`}
  }
`;

const fragranceIconImageSrc = "images/features/keunggulan-1.png";
const substanceIconImageSrc = "images/features/keunggulan-2.png"
const moneyIconImageSrc = "images/features/keunggulan-3.png";

export default () => {
  const backToTop = () => {
    window.scrollTo({top: 0, behavior: 'smooth'})
  }
 
  const Subheading = tw.span`tracking-wider text-base font-medium text-primary-400`;
  const HighlightedText = styled.span`${tw`font-bold font-mono`}	color: #4CB2E4`;
  const HighlightedTextInverse = tw.span`bg-gray-100 text-primary-500 px-4 transform -skew-x-12 inline-block`;
  const Description = tw.span`inline-block mt-8`;
  const imageCss = tw`rounded-4xl`;
  return (
    <>
      <BackToTopButton onClick={backToTop}><ChevronUpIcon></ChevronUpIcon></BackToTopButton>
      <AnimationRevealPage>
        <Header />
        <MainFeature 
          id={"tentang-kami"}
          subheading={<Subheading>Sejak 2017</Subheading>}
          heading={
            <>
              Brand parfum dengan konsentrat asli Eropa
              <br />
              <br />  
              Aroma <HighlightedText>98%</HighlightedText> sama dengan parfum original
            </>
          }
          buttonRounded={false}
          textOnLeft={false}
          primaryButtonText="Kunjungi Toko"
          primaryButtonUrl="https://shopee.co.id/semerbak.parfume"
          imageSrc={
            "images/jumbotron/hero.gif"
          }
          imageCss={imageCss}
          imageDecoratorBlob={true}
          imageDecoratorBlobCss={tw`left-1/2 -translate-x-1/2 md:w-32 md:h-32 opacity-25`}
        />
        {/* TabGrid Component also accepts a tabs prop to customize the tabs and its content directly. Please open the TabGrid component file to see the structure of the tabs props.*/}
        <TabGrid
          id={"katalog"}
          heading={
            <>
              Katalog <HighlightedText>Semerbak</HighlightedText>
            </>
          }
        />
        <Features
          id={"keunggulan"}
          heading={
            <>
              Keunggulan <HighlightedText>Semerbak</HighlightedText>
            </>
          }
          cards={[
            {
              imageSrc: fragranceIconImageSrc,
              title: "Aroma Berkelas",
              description: "Aroma yang sama dengan parfum original",
            },
            {
              imageSrc: substanceIconImageSrc,
              title: "Bahan Berkualitas",
              description: "Terbuat dari konsentrat asli Eropa",
            },
            {
              imageSrc: moneyIconImageSrc,
              title: "Harga Terjangkau",
              description: "Harga yang ramah dikantong",
            }
          ]}

          imageContainerCss={tw`p-2!`}
          imageCss={tw`w-20! h-20!`}
        />
        <Footer />
      </AnimationRevealPage>
    </>
  );
}
