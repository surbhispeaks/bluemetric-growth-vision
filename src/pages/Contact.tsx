
import Layout from "@/components/layout/Layout";
import ContactHero from "@/components/contact/ContactHero";
import ContactInfo from "@/components/contact/ContactInfo";
import ContactMap from "@/components/contact/ContactMap";

const Contact = () => {
  return (
    <Layout>
      <ContactHero />
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <ContactInfo />
            </div>
            <div>
              <ContactMap />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
