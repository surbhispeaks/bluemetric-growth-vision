
import Layout from "@/components/layout/Layout";

const Terms = () => {
  return (
    <Layout>
      <div className="min-h-screen bg-gray-50 py-16">
        <div className="container mx-auto max-w-4xl px-4">
          <div className="bg-white rounded-lg shadow-sm p-8 md:p-12">
            <h1 className="text-4xl font-bold text-bluemetric-darkblue mb-8 font-montserrat">
              Terms of Service
            </h1>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-600 mb-6">
                <strong>Last updated:</strong> {new Date().toLocaleDateString()}
              </p>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-bluemetric-darkblue mb-4 font-montserrat">
                  1. Acceptance of Terms
                </h2>
                <p className="text-gray-700 mb-4">
                  By accessing and using BlueMetric's services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-bluemetric-darkblue mb-4 font-montserrat">
                  2. Services Description
                </h2>
                <p className="text-gray-700 mb-4">
                  BlueMetric provides financial consulting services including:
                </p>
                <ul className="list-disc pl-6 text-gray-700 mb-4">
                  <li>Bookkeeping and financial reporting</li>
                  <li>Performance metrics analysis</li>
                  <li>Financial systems implementation</li>
                  <li>Business advisory services</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-bluemetric-darkblue mb-4 font-montserrat">
                  3. Client Responsibilities
                </h2>
                <p className="text-gray-700 mb-4">
                  Clients agree to:
                </p>
                <ul className="list-disc pl-6 text-gray-700 mb-4">
                  <li>Provide accurate and complete financial information</li>
                  <li>Maintain confidentiality of sensitive business information</li>
                  <li>Pay fees according to agreed terms</li>
                  <li>Comply with all applicable laws and regulations</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-bluemetric-darkblue mb-4 font-montserrat">
                  4. Professional Standards
                </h2>
                <p className="text-gray-700 mb-4">
                  BlueMetric adheres to professional accounting and consulting standards. Our services are provided in accordance with generally accepted accounting principles (GAAP) and industry best practices.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-bluemetric-darkblue mb-4 font-montserrat">
                  5. Confidentiality
                </h2>
                <p className="text-gray-700 mb-4">
                  We maintain strict confidentiality regarding all client information and business data. Client information will not be disclosed to third parties without explicit consent, except as required by law.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-bluemetric-darkblue mb-4 font-montserrat">
                  6. Limitation of Liability
                </h2>
                <p className="text-gray-700 mb-4">
                  BlueMetric's liability is limited to the fees paid for services. We are not liable for any indirect, incidental, or consequential damages arising from the use of our services.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-bluemetric-darkblue mb-4 font-montserrat">
                  7. Payment Terms
                </h2>
                <p className="text-gray-700 mb-4">
                  Payment terms will be specified in individual service agreements. Late payments may incur additional fees as outlined in the service agreement.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-bluemetric-darkblue mb-4 font-montserrat">
                  8. Termination
                </h2>
                <p className="text-gray-700 mb-4">
                  Either party may terminate services with appropriate notice as specified in the service agreement. Upon termination, all confidential information must be returned or destroyed.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-bluemetric-darkblue mb-4 font-montserrat">
                  9. Governing Law
                </h2>
                <p className="text-gray-700 mb-4">
                  These terms are governed by the laws of the State of Florida. Any disputes will be resolved in the courts of Florida.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-bluemetric-darkblue mb-4 font-montserrat">
                  10. Contact Information
                </h2>
                <p className="text-gray-700">
                  For questions regarding these terms, please contact us at:
                </p>
                <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                  <p className="text-gray-700">
                    <strong>BlueMetric</strong><br />
                    UF Innovate Hub<br />
                    747 SW 2nd Ave.<br />
                    Gainesville, FL 32601<br />
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

export default Terms;
