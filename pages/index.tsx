import type { InferGetStaticPropsType, NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Block from "../components/Block";
import MouseArrowDown from "../components/MouseArrowDown";
import Title from "../components/Title";
import Text from "../components/Text";
import RectangleGraphic, {
  RECTANGLE_BG_IMAGE,
} from "../components/RectangleGraphic";
import RetroComputer from "../components/RetroComputer/RetroComputer";
import { readFileSync } from "fs";
import path from "path";

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
    <div className="relative lg:w-screen-xl h-fit overflow-clip">
      <Head>
        <title>jamstack 101</title>
        <meta name="description" content="Marketing site for the jamstack" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Background Vertical Stripe */}
      <span className="absolute inset-0 lg:px-[7.25rem] h-fit w-full bg-transparent">
        <Image
          src="/images/vertical_dashed_grid.svg"
          layout="responsive"
          height={8057}
          width={1282}
          alt=""
          role="presentation"
          priority={true}
        />
      </span>

      <main>
        {/* HERO BLOCK */}
        <Block bg="light" className="pb-[42px]">
          <Title
            as="h1"
            className="text-gray-darkest lg:pt-[153px] lg:pl-[10px] w-full"
          >
            jamstack&nbsp;
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-200 via-[#F58E7D] to-[#CD789F]">
              101
            </span>
          </Title>

          <div className="flex flex-row lg:pt-[18px] gap-12">
            <div className="basis-1/2 flex flex-col lg:pl-[62px] lg:max-w-[550px] relative">
              <Text as="p" color="gray" className="lg:pt-[26px] pb-[88px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu
                augue massa, tincidunt proin nunc viverra tristique tempor,
                ipsum. At lectus vel pretium tempor ut dui vivamus sit.
              </Text>
              <MouseArrowDown />
            </div>
            <RectangleGraphic
              bgImage={RECTANGLE_BG_IMAGE.PEACH_GRADIENT}
              className="relative -mt-40"
            />
          </div>
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
          <div className="relative z-10 pt-[93px] pb-16 flex flex-col items-center text-center ">
            <Title as="h2" className="pb-[44px]">
              javascript
            </Title>
            <Text as="p" color="white" className="max-w-[575px]">
              Statically generated pages are brought to life with client-side
              JavaScript libraries and frameworks, such as Algolia and Next.js.
            </Text>
            <RetroComputer>
              <code className="text-[#44DBFF] font-mono">{code}</code>
            </RetroComputer>
          </div>
        </Block>
        {/* Falling Logos */}
        <Block bg="dark">Some text here</Block>
      </main>

      <footer>
        <span className="font-sans text-2xl">
          This is a design test by Calin Ennis for&nbsp;
          <a
            href="https://monogram.io/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-purple-500 text-purple-500"
          >
            Monogram
          </a>
          .
        </span>

        <span>
          <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
        </span>
      </footer>
    </div>
  );
};

export default Home;
