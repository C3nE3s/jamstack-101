import { readFileSync } from "fs";
import type { InferGetStaticPropsType, NextPage } from "next";
import Image from "next/image";
import path from "path";
import Block from "../components/Block";
import BrandGrid from "../components/BrandGrid";
import Layout from "../components/Layout";
import MouseArrowDown from "../components/MouseArrowDown";
import RectangleGraphic, {
  RECTANGLE_BG_IMAGE,
} from "../components/RectangleGraphic";
import RetroComputer from "../components/RetroComputer/RetroComputer";
import ScoreCircle from "../components/ScoreCircle/ScoreCircle";
import ScoreContainer from "../components/ScoreContainer/ScoreContainer";
import Text from "../components/Text";
import Title from "../components/Title";

export async function getStaticProps() {
  const buffer = readFileSync(
    path.join(process.cwd(), "components/MouseArrowDown.tsx")
  );
  const fileContent = buffer.toString().replaceAll("\n", "<br/>");

  return {
    props: {
      code: fileContent,
    },
  };
}

const Home: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  code,
}) => {
  return (
    <Layout>
      {/* HERO BLOCK */}
      <Block bg="light" className="py-16 md:py-28 lg:py-36">
        <div className="max-w-7xl mx-auto">
          <Title as="h1" className="text-gray-darkest lg:pb-5 pb-8">
            jamstack&nbsp;
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-200 via-[#F58E7D] to-[#CD789F]">
              101
            </span>
          </Title>
          <div className="flex flex-col items-center md:items-stretch md:flex-row h-fit lg:gap-12 gap-6 sm:gap-3">
            <div className="basis-1/2 flex-shrink-0 flex flex-col justify-between lg:pt-4">
              <Text
                as="p"
                color="gray"
                className="lg:pl-16 md:pl-8 lg:max-w-xl max-w-sm"
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu
                augue massa, tincidunt proin nunc viverra tristique tempor,
                ipsum. At lectus vel pretium tempor ut dui vivamus sit.
              </Text>
              <MouseArrowDown />
            </div>
            <div className="hidden md:block basis-1/2">
              <RectangleGraphic bgImage={RECTANGLE_BG_IMAGE.PEACH_GRADIENT} />
            </div>
          </div>
        </div>

        {/* <div className="flex flex-col max-w-7xl justify-center items-center mx-auto h-fit">
          <Title as="h1" className="text-gray-darkest w-full flex-1 flex-wrap">
            jamstack&nbsp;
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-200 via-[#F58E7D] to-[#CD789F]">
              101
            </span>
          </Title>
          <div className="w-full h-full flex flex-row gap-12 pb-9">
            <div className="flex flex-row w-full lg:pt-[18px] gap-12">
              <div className="basis-1/2 flex flex-col items-end justify-end lg:pl-[62px] lg:max-w-[550px] relative">
                <Text as="p" color="gray" className="lg:pt-[26px] pb-[88px]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu
                  augue massa, tincidunt proin nunc viverra tristique tempor,
                  ipsum. At lectus vel pretium tempor ut dui vivamus sit.
                </Text>
                <MouseArrowDown />
              </div>
              <RectangleGraphic bgImage={RECTANGLE_BG_IMAGE.PEACH_GRADIENT} />
            </div>
          </div>
        </div> */}
      </Block>
      {/* Javascript Block */}
      <Block
        bg="dark"
        className="relative lg:px-[305px] flex flex-col overflow-y-visible"
      >
        <span className="absolute inset-0 lg:px-[7.25rem] h-fit w-full before:content-[' '] before:absolute before:top-0 before:left-0 before:w-full before:h-2/3 before:bg-white">
          <Image
            src="/images/peach_gradient_block.svg"
            layout="responsive"
            height={893}
            width={1393}
            alt=""
            role="presentation"
          />
        </span>
        <div className="relative z-10 pt-[93px] flex flex-col items-center text-center -mb-72">
          <Title as="h2" className="pb-[44px]">
            javascript
          </Title>
          <Text as="p" color="white" className="max-lg:w-[575px]">
            Statically generated pages are brought to life with client-side
            JavaScript libraries and frameworks, such as Algolia and Next.js.
          </Text>
          <RetroComputer className="">
            <code className="text-[#44DBFF] font-mono text-xs lg:text-sm">
              {code}
            </code>
          </RetroComputer>
        </div>
      </Block>
      {/* Falling Logos */}
      <Block bg="dark">
        <BrandGrid />
      </Block>
      {/* API Block*/}
      <Block
        bg="dark"
        className="relative text-center flex flex-col items-center"
      >
        <Title as="h2" className="pb-16">
          api
        </Title>
        <Text
          as="p"
          color="white"
          emphasized={true}
          className="lg:max-w-[575px] pb-10"
        >
          At build time, a Jamstack website uses data from one or more APIs to
          generate markup. These APIs can be a headless CMS like Prismic, a
          database like Supabase, or even a local JSON file!
        </Text>

        {/* SLOT FOR THREEJS GLOBE HERE! */}
      </Block>

      {/* markdown block */}
      <Block bg="light" className="relative py-16 md:py-28 lg:py-36">
        <div className="flex flex-col items-center md:items-stretch max-w-7xl mx-auto lg:pb-64 md:pb-32 sm:pb-36 pb-24">
          <Title
            as="h2"
            className="hidden md:block pb-6 lg:pb-11 text-gray-darkest"
          >
            markup
          </Title>
          <div className="flex flex-col items-center md:items-stretch md:flex-row h-fit lg:gap-12 gap-6 sm:gap-3">
            <Title as="h2" className="md:hidden w-full pb-4 text-gray-darkest">
              markup
            </Title>
            <div className="basis-1/2 flex-shrink-0 flex flex-col justify-between lg:pt-4">
              <Text
                as="p"
                color="dark"
                emphasized={true}
                className="lg:max-w-xl max-w-sm pb-16 md:pb-0"
              >
                {`When ready for deployment, a static-site generator such as Astro or
                  Next.js is used to compile the website. The end result is a
                  collection of pre-rendered HTML pages that can be delivered
                  lightning-fast over a CDN like Vercel’s Edge Network.`}
              </Text>
              <Image
                src="/images/toppled_blocks.svg"
                layout="responsive"
                width={621}
                height={456}
                alt=""
                role="presentation"
              />
            </div>
            <div className="hidden md:block basis-1/2">
              <RectangleGraphic bgImage={RECTANGLE_BG_IMAGE.LEGO} />
            </div>
          </div>
        </div>
        {/* <div className="max-w-7xl mx-auto">
          <Title as="h2" className="pb-11 text-gray-darkest">
            markup
          </Title>
          <div className="flex flex-col items-center md:items-stretch md:flex-row h-fit lg:gap-12 gap-6 sm:gap-3"> 
            <div className="flex flex-col pt-6 pb-64">
              <Text
                as="p"
                color="gray"
                emphasized={true}
                className="lg:max-w-[575px] pb-32"
              >
                {`When ready for deployment, a static-site generator such as Astro or
                  Next.js is used to compile the website. The end result is a
                  collection of pre-rendered HTML pages that can be delivered
                  lightning-fast over a CDN like Vercel’s Edge Network.`}
              </Text>
              <Image
                src="/images/toppled_blocks.svg"
                layout="responsive"
                width={621}
                height={456}
                alt=""
                role="presentation"
              />
            </div>
            <RectangleGraphic
              bgImage={RECTANGLE_BG_IMAGE.LEGO}
              className="relative -mt-40"
            />
          </div>
          <div className="w-screen absolute bottom-0 left-0">
            <Image
              src="/images/wall_blocks.svg"
              layout="responsive"
              width={1512}
              height={228}
              alt=""
              role="presentation"
            />
          </div>
        </div> */}

        <div className="w-[133vw] sm:w-screen absolute bottom-0 left-0">
          <Image
            src="/images/wall_blocks.svg"
            layout="responsive"
            width={1512}
            height={228}
            alt=""
            role="presentation"
          />
        </div>
      </Block>

      {/* Scores Block */}
      <Block bg="dark" className="relative h-screen">
        <div className="w-4/5 absolute -top-[86px] left-1/2 transform -translate-x-1/2">
          <ScoreContainer>
            <h2 className="text-ooze text-7xl font-black tracking-[-0.039em] leading-[92px] text-center pb-24">
              top audit scores
            </h2>
            <div className="w-full flex flex-row justify-center items-center pb-32">
              <ScoreCircle dim={false} />
              <ScoreCircle dim={false} />
              <ScoreCircle dim={true} />
              <ScoreCircle dim={false} />
            </div>
            <div className="lg:max-w-[756px] mx-auto font-sans font-normal text-3xl leading-[42px] text-[#C7C7C7] pb-48 [&>*]:pb-6 mix-blend-color-dodge">
              <p>{`Search engines, business stakeholders, and end-users gauge a website’s value using metric tools like Google Lighthouse, which measures site performance, SEO, and accessibility.`}</p>
              <br />
              <p>{`Performance is one of the most difficult scores to get to 100. This is especially true in a time when users demand JavaScript-heavy, highly-interactive web experiences.`}</p>
              <br />
              <p>{`A Jamstack website, delivering SEO-friendly, lean & clean HTML in milliseconds, promises higher search-engine ranking and a more positive, responsive end-user experience.`}</p>
            </div>
          </ScoreContainer>
        </div>
      </Block>
    </Layout>
  );
};

export default Home;
