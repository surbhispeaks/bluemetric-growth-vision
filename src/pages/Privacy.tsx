
import Layout from "@/components/layout/Layout";

const Privacy = () => {
  return (
    <Layout>
      <div className="min-h-screen bg-gray-50 py-16">
        <div className="container mx-auto max-w-4xl px-4">
          <div className="bg-white rounded-lg shadow-sm p-8 md:p-12">
            <h1 className="text-4xl font-bold text-bluemetric-darkblue mb-8 font-montserrat">
              Privacy Policy
            </h1>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-600 mb-6">
                <strong>Last updated:</strong> {new Date().toLocaleDateString()}
              </p>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-bluemetric-darkblue mb-4 font-montserrat">
                  1. Information We Collect
                </h2>
                <p className="text-gray-700 mb-4">
                  At BlueMetric, we collect information you provide directly to us, such as when you:
                </p>
                <ul className="list-disc pl-6 text-gray-700 mb-4">
                  <li>Contact us through our website or email</li>
                  <li>Request a consultation or our services</li>
                  <li>Subscribe to our newsletter or insights</li>
                  <li>Provide financial information for our advisory services</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-bluemetric-darkblue mb-4 font-montserrat">
                  2. How We Use Your Information
                </h2>
                <p className="text-gray-700 mb-4">
                  We use the information we collect to:
                </p>
                <ul className="list-disc pl-6 text-gray-700 mb-4">
                  <li>Provide financial consulting and advisory services</li>
                  <li>Respond to your inquiries and requests</li>
                  <li>Send you business insights and updates</li>
                  <li>Improve our services and website functionality</li>
                  <li>Comply with legal and regulatory requirements</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-bluemetric-darkblue mb-4 font-montserrat">
                  3. Information Sharing and Disclosure
                </h2>
                <p className="text-gray-700 mb-4">
                  We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this policy:
                </p>
                <ul className="list-disc pl-6 text-gray-700 mb-4">
                  <li>With trusted service providers who assist in our operations</li>
                  <li>When required by law or to protect our rights</li>
                  <li>In connection with a business transfer or sale</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-bluemetric-darkblue mb-4 font-montserrat">
                  4. Data Security
                </h2>
                <p className="text-gray-700 mb-4">
                  We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-bluemetric-darkblue mb-4 font-montserrat">
                  5. Your Rights
                </h2>
                <p className="text-gray-700 mb-4">
                  You have the right to:
                </p>
                <ul className="list-disc pl-6 text-gray-700 mb-4">
                  <li>Access and update your personal information</li>
                  <li>Request deletion of your personal information</li>
                  <li>Opt-out of marketing communications</li>
                  <li>Request a copy of your personal information</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-bluemetric-darkblue mb-4 font-montserrat">
                  6. Contact Us
                </h2>
                <p className="text-gray-700">
                  If you have any questions about this Privacy Policy, please contact us at:
                </p>
                <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                  <p className="text-gray-700">
                    <strong>BlueMetric</strong><br />
                    UF Innovate Hub<br />
                    747 SW 2nd Ave.<br />
                    Gainesville, FL<br />
                    Email: info@blue-metric.com
                  </p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Privacy;
