
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
      <CallToAction />
    </Layout>
  );
};

export default Index;
