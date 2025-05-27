
import Layout from "@/components/layout/Layout";
import AboutHero from "@/components/about/AboutHero";
import Founder from "@/components/about/Founder";
import Philosophy from "@/components/about/Philosophy";
import CallToAction from "@/components/home/CallToAction";

const About = () => {
  return (
    <Layout>
      <AboutHero />
      <div className="bg-gradient-to-b from-white to-bluemetric-lightbg">
        <Founder />
      </div>
      <Philosophy />
      <div className="bg-gradient-to-b from-bluemetric-lightbg to-bluemetric-darkblue">
        <CallToAction />
      </div>
    </Layout>
  );
};

export default About;
