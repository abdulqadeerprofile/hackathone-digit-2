import dynamic from "next/dynamic";
import Features from "@/components/features/Features/Features";
import JoinUs from "@/components/features/JoinUs/JoinUs";
import Page from "@/components/shared/Page/Page";

import Hero from "./hero";
import Info from "./info";
  

export default function Home() {
  return (
    <Page>
      <Hero />
      <Features />      
      <JoinUs />
      <Info />
    </Page>
  );
}
