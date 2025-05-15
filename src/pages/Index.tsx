
import Layout from "@/components/layout/Layout";
import Hero from "@/components/home/Hero";
import Differentiators from "@/components/home/Differentiators";
import Benefits from "@/components/home/Benefits";
import FAQ from "@/components/home/FAQ";
import CallToAction from "@/components/home/CallToAction";

const Index = () => {
  return (
    <Layout>
      <Hero />
      <Differentiators />
      <Benefits />
      <FAQ />
      <div className="bg-bluemetric-darkblue">
        <CallToAction />
      </div>
    </Layout>
  );
};

export default Index;
