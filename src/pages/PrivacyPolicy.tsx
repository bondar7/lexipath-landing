import React from "react";

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <a
            href="/"
            className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors font-medium"
          >
            ← Back to Lexipath
          </a>
        </div>
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="p-8 md:p-12 lg:p-16 text-gray-700">
            <h1 className="text-4xl font-bold text-gray-900">Privacy Policy</h1>
            <p className="mt-3 text-lg text-gray-600">
              Last updated: February 12, 2026
            </p>

            <section className="mt-10">
              <p className="leading-relaxed">
                Lexipath ("we", "us", or "our") respects your privacy and is
                committed to protecting your personal data. This Privacy Policy
                explains how we collect, use, disclose, and safeguard your
                information when you visit our website at{" "}
                <a
                  href="https://lexipath.xyz"
                  className="text-blue-600 underline"
                >
                  https://lexipath.xyz
                </a>{" "}
                or use our services (collectively, the "Services"). It is
                designed to comply with the EU General Data Protection
                Regulation (GDPR), UK GDPR, the California Consumer Privacy Act
                (CCPA) as amended, and other applicable privacy laws worldwide.
              </p>
            </section>

            <section className="mt-12">
              <h2 className="text-2xl font-semibold text-gray-900">
                1. Data Controller
              </h2>
              <p className="mt-4 leading-relaxed">
                The data controller responsible for your personal data is:
                <br />
                <strong>Lexipath</strong> (a development-stage project, not yet
                incorporated).
                <br />
                Email:{" "}
                <a
                  href="mailto:lexipath.info@gmail.com"
                  className="text-blue-600 underline"
                >
                  lexipath.info@gmail.com
                </a>
                <br />
                Mailing address: available upon request.
              </p>
            </section>

            <section className="mt-12">
              <h2 className="text-2xl font-semibold text-gray-900">
                2. Information We Collect
              </h2>
              <div className="mt-4 space-y-6">
                <div>
                  <h3 className="text-lg font-medium text-gray-900">
                    a. Information you provide voluntarily
                  </h3>
                  <ul className="mt-3 list-disc pl-6 space-y-2">
                    <li>
                      <strong>Waitlist / newsletter emails:</strong> If you sign
                      up for updates or join our waitlist, we collect the email
                      address you provide.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-medium text-gray-900">
                    b. Information collected automatically
                  </h3>
                  <ul className="mt-3 list-disc pl-6 space-y-2">
                    <li>
                      <strong>Usage and device data:</strong> When you visit our
                      website, our servers and third-party analytics services
                      automatically record information, including your IP
                      address, browser type, operating system, referring pages,
                      pages visited, timestamps, and device identifiers. This
                      data is collected for security, debugging, and aggregate
                      usage analysis.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-medium text-gray-900">
                    c. Account data (future app users)
                  </h3>
                  <ul className="mt-3 list-disc pl-6 space-y-2">
                    <li>
                      When you create an account in the future, we will collect
                      and store the information necessary to provide the service
                      (e.g., email address and account identifiers) securely in
                      Supabase.
                    </li>
                  </ul>
                </div>
              </div>
              <p className="mt-6 text-sm text-gray-600">
                We do not collect any special categories of personal data (e.g.,
                health, race, religion).
              </p>
            </section>

            <section className="mt-12">
              <h2 className="text-2xl font-semibold text-gray-900">
                3. How We Use Your Information
              </h2>
              <ul className="mt-4 list-disc pl-6 space-y-3 leading-relaxed">
                <li>To provide, operate, and improve the Services.</li>
                <li>
                  To send you requested product updates, waitlist notifications,
                  or newsletters (you can unsubscribe at any time).
                </li>
                <li>
                  To analyze aggregate usage of the landing page (via Google
                  Analytics) and improve user experience.
                </li>
                <li>
                  To maintain security, prevent fraud, and debug technical
                  issues.
                </li>
                <li>To comply with legal obligations.</li>
              </ul>
            </section>

            <section className="mt-12">
              <h2 className="text-2xl font-semibold text-gray-900">
                4. Legal Bases for Processing (EEA & UK Residents)
              </h2>
              <ul className="mt-4 list-disc pl-6 space-y-3 leading-relaxed">
                <li>
                  <strong>Consent:</strong> for sending optional
                  marketing/waitlist emails.
                </li>
                <li>
                  <strong>Legitimate interests:</strong> for essential
                  analytics, security, fraud prevention, and service improvement
                  (e.g., Google Analytics and server logs).
                </li>
                <li>
                  <strong>Contract:</strong> to provide the Services to
                  registered users (once accounts are available).
                </li>
                <li>
                  <strong>Legal obligation:</strong> where required by
                  applicable law.
                </li>
              </ul>
            </section>

            <section className="mt-12">
              <h2 className="text-2xl font-semibold text-gray-900">
                5. Cookies and Similar Technologies
              </h2>
              <p className="mt-4 leading-relaxed">
                We use only strictly necessary cookies to ensure core website
                functionality. We do not use cookies for advertising or
                behavioral targeting.
              </p>
              <p className="mt-4 leading-relaxed">
                We use Google Analytics on the landing page to collect
                aggregate, anonymized usage statistics. Google Analytics may set
                cookies and collect your IP address (in anonymized form where
                configured). You can opt out of Google Analytics tracking at any
                time by installing the official{" "}
                <a
                  href="https://tools.google.com/dlpage/gaoptout"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 underline"
                >
                  Google Analytics opt-out browser add-on
                </a>{" "}
                or adjusting your browser settings.
              </p>
            </section>

            <section className="mt-12">
              <h2 className="text-2xl font-semibold text-gray-900">
                6. Sharing Your Information
              </h2>
              <p className="mt-4 leading-relaxed">
                We do not sell your personal data. We share data only with
                trusted service providers who assist us in operating the
                Services and who are contractually obligated to protect your
                data:
              </p>
              <ul className="mt-4 list-disc pl-6 space-y-3">
                <li>
                  <strong>Vercel</strong> – for hosting and content delivery
                  (processes server logs including IP addresses).
                </li>
                <li>
                  <strong>Supabase</strong> – for secure storage of user account
                  data (once accounts are implemented).
                </li>
                <li>
                  <strong>Google Analytics</strong> – for aggregate usage
                  analytics on the landing page.
                </li>
              </ul>
            </section>

            <section className="mt-12">
              <h2 className="text-2xl font-semibold text-gray-900">
                7. International Data Transfers
              </h2>
              <p className="mt-4 leading-relaxed">
                Your data may be processed in the United States or other
                countries outside your jurisdiction. When we transfer personal
                data from the EEA, UK, or Switzerland, we rely on appropriate
                safeguards such as Standard Contractual Clauses approved by the
                European Commission or equivalent mechanisms provided by our
                service providers.
              </p>
            </section>

            <section className="mt-12">
              <h2 className="text-2xl font-semibold text-gray-900">
                8. Data Retention
              </h2>
              <p className="mt-4 leading-relaxed">
                We retain personal data only as long as necessary for the
                purposes described in this policy. Waitlist emails are kept
                until you unsubscribe or request deletion. Server logs and
                analytics data are retained for a limited period for security
                and improvement purposes.
              </p>
            </section>

            <section className="mt-12">
              <h2 className="text-2xl font-semibold text-gray-900">
                9. Security
              </h2>
              <p className="mt-4 leading-relaxed">
                We implement reasonable technical and organizational measures to
                protect your personal data against unauthorized access, loss, or
                misuse. While no system is completely secure, we continually
                review and improve our security practices.
              </p>
            </section>

            <section className="mt-12">
              <h2 className="text-2xl font-semibold text-gray-900">
                10. Your Rights
              </h2>
              <p className="mt-4 leading-relaxed">
                Depending on your location, you may have the right to access,
                correct, delete, restrict, or object to the processing of your
                personal data, as well as the right to data portability. EEA/UK
                residents also have the right to lodge a complaint with a
                supervisory authority.
              </p>
              <p className="mt-4 leading-relaxed">
                California residents have additional rights under the CCPA,
                including the right to know, delete, and opt out of sale (we do
                not sell personal data).
              </p>
              <p className="mt-4 leading-relaxed">
                To exercise any rights, please contact us at{" "}
                <a
                  href="mailto:lexipath.info@gmail.com"
                  className="text-blue-600 underline"
                >
                  lexipath.info@gmail.com
                </a>
                . We will respond within the timeframes required by law.
              </p>
            </section>

            <section className="mt-12">
              <h2 className="text-2xl font-semibold text-gray-900">
                11. Do Not Track
              </h2>
              <p className="mt-4 leading-relaxed">
                We do not currently respond to browser "Do Not Track" signals,
                as there is no uniform industry standard.
              </p>
            </section>

            <section className="mt-12">
              <h2 className="text-2xl font-semibold text-gray-900">
                12. Children
              </h2>
              <p className="mt-4 leading-relaxed">
                Our Services are not intended for children under 13 (or the
                applicable age in your jurisdiction). We do not knowingly
                collect personal data from children. If we learn that we have
                collected such data, we will delete it promptly.
              </p>
            </section>

            <section className="mt-12">
              <h2 className="text-2xl font-semibold text-gray-900">
                13. Changes to This Policy
              </h2>
              <p className="mt-4 leading-relaxed">
                We may update this Privacy Policy from time to time. Material
                changes will be reflected by updating the "Last updated" date
                above. We encourage you to review this page periodically.
              </p>
            </section>

            <section className="mt-12 pb-8">
              <h2 className="text-2xl font-semibold text-gray-900">
                14. Contact Us
              </h2>
              <p className="mt-4 leading-relaxed">
                For any questions or to exercise your rights, please email us at{" "}
                <a
                  href="mailto:lexipath.info@gmail.com"
                  className="text-blue-600 underline"
                >
                  lexipath.info@gmail.com
                </a>
                .
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
