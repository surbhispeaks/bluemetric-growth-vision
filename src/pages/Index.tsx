
import Layout from "@/components/layout/Layout";
import Hero from "@/components/home/Hero";
import Differentiators from "@/components/home/Differentiators";
import Benefits from "@/components/home/Benefits";
import CallToAction from "@/components/home/CallToAction";

const Index = () => {
  return (
    <Layout>
      <Hero />
      <Differentiators />
      <Benefits />
      <div className="bg-gradient-to-b from-bluemetric-lightbg to-bluemetric-darkblue">
        <CallToAction />
      </div>
    </Layout>
  );
};

export default Index;
