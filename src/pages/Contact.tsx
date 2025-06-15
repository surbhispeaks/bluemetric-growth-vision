
import { useEffect } from "react";
import Layout from "@/components/layout/Layout";
import ContactHero from "@/components/contact/ContactHero";
import ContactInfo from "@/components/contact/ContactInfo";
import ContactMap from "@/components/contact/ContactMap";

const Contact = () => {
  useEffect(() => {
    document.title = "Contact Us | BlueMetric";
  }, []);

  return (
    <Layout>
      <ContactHero />
      <section className="py-16 md:py-24 bg-gradient-to-b from-white to-bluemetric-lightbg">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-montserrat font-semibold text-bluemetric-darkblue mb-4">
                Let's Connect
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Ready to transform your business with data-driven insights? Get in touch with our team.
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
              <div className="order-2 lg:order-1">
                <ContactInfo />
              </div>
              <div className="order-1 lg:order-2">
                <ContactMap />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
