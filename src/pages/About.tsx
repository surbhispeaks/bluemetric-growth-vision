
import Layout from "@/components/layout/Layout";
import AboutHero from "@/components/about/AboutHero";
import Founder from "@/components/about/Founder";
import Philosophy from "@/components/about/Philosophy";
import CallToAction from "@/components/home/CallToAction";

const About = () => {
  return (
    <Layout>
      <AboutHero />
      <Founder />
      <Philosophy />
      <CallToAction />
    </Layout>
  );
};

export default About;
