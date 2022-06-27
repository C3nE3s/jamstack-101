import { PropsWithChildren } from "react";
import Image from "next/image";
import Head from "next/head";
import Footer from "./Footer";

// A real app would have many more properties like open graph, twitter, rss, sitemap, etc
interface MetaData {
  title: string;
  description: string;
}

interface LayoutProps {
  metaOverride?: MetaData | Partial<MetaData>;
}

const Layout: React.FC<PropsWithChildren<LayoutProps>> = ({
  children,
  metaOverride,
}) => {
  const meta: MetaData = {
    title: "jamstack 101",
    description: `Marketing site for the jamstack.`,
    ...metaOverride,
  };

  return (
    <>
      <Head>
        <title>jamstack 101</title>
        <meta name="description" content={meta.description} />
      </Head>
      <main className="relative">
        {/* Background Vertical Stripe */}
        <span className="absolute inset-0 lg:px-[7.25rem] h-fit w-full max-w-7xl mx-auto bg-transparent">
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
        {children}
      </main>
      <Footer />
    </>
  );
};

export default Layout;
