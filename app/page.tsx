
import Head from "next/head";
import "@/devlink/global.css";
import { Newnav,HeroSection,SocialSection,PricingSection ,Features,Footer} from "@/devlink";


export default function Home() {
  return (
    <>
      <Head>
        <title>Visual Development Jobs</title>
        <meta name="description" content="Jobs" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Newnav />
      <HeroSection />
      <SocialSection />
      <PricingSection />
      <Features />
      <Footer />
    </>
  )
}
