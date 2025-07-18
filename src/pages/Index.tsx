
import { useEffect } from "react";
import Layout from "@/components/layout/Layout";
import Hero from "@/components/home/Hero";
import SoundFamiliar from "@/components/home/SoundFamiliar";
import Differentiators from "@/components/home/Differentiators";
import Benefits from "@/components/home/Benefits";
import CallToAction from "@/components/home/CallToAction";

const Index = () => {
  useEffect(() => {
    document.title = "BlueMetric | Numbers And Beyond";
  }, []);

  return (
    <Layout>
      <Hero />
      <SoundFamiliar />
      <Differentiators />
      <Benefits />
      <div className="bg-gradient-to-b from-bluemetric-lightbg to-bluemetric-darkblue">
        <CallToAction />
      </div>
    </Layout>
  );
};

export default Index;
