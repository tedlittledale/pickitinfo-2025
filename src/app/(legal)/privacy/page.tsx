import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "PickIt Privacy Policy - Learn how we collect, use, and protect your personal information in compliance with UK GDPR.",
};

export default function PrivacyPolicyPage() {
  const lastUpdated = new Date("2025-01-30");

  return (
    <article>
      <header className="mb-8">
        <h1>Privacy Policy</h1>
        <p className="text-slate-600 text-sm">
          Last updated:{" "}
          {lastUpdated.toLocaleDateString("en-GB", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </p>
        <p className="text-slate-600 text-sm mt-2">
          Version 1.0 • Effective from:{" "}
          {lastUpdated.toLocaleDateString("en-GB")}
        </p>
      </header>

      <div className="space-y-12">
        <section>
          <h2>1. Introduction and Data Controller</h2>
          <p>
            This Privacy Policy explains how PickIt (&quot;we,&quot;
            &quot;our,&quot; or &quot;us&quot;) collects, uses, processes, and
            protects your personal information when you use our litter-picking
            community mobile application and website (collectively, the
            &quot;Service&quot;).
          </p>
          <p>
            We are committed to protecting your privacy and complying with the
            UK General Data Protection Regulation (UK GDPR) and the Data
            Protection Act 2018.
          </p>
          <div className="bg-slate-50 p-4 rounded-lg mt-4">
            <h3 className="text-lg font-semibold mb-2">
              Data Controller Information:
            </h3>
            <p>
              <strong>Company:</strong> PickIt Ltd
            </p>
            <p>
              <strong>Address:</strong> [Company Address], United Kingdom
            </p>
            <p>
              <strong>Email:</strong> support@tedspace.me
            </p>
            <p>
              <strong>DPO Contact:</strong> support@tedspace.me
            </p>
          </div>
        </section>

        <section>
          <h2>2. Information We Collect</h2>

          <h3>2.1 Personal Information</h3>
          <ul>
            <li>
              <strong>Account Information:</strong> Username, email address
            </li>
            <li>
              <strong>Contact Information:</strong> When you contact us for
              support
            </li>
            <li>
              <strong>Device Information:</strong> Device type, operating
              system, app version
            </li>
          </ul>

          <h3>2.2 Location Data</h3>
          <p>
            <strong>Precise Location Data:</strong> We collect GPS coordinates
            when you:
          </p>
          <ul>
            <li>Record cleanup routes</li>
            <li>Mark litter collection points</li>
            <li>Participate in community challenges</li>
          </ul>
          <p>
            <strong>Legal Basis:</strong> Consent (you can withdraw consent at
            any time through app settings)
          </p>
          <p>
            <strong>Purpose:</strong> To track environmental impact, enable
            route recording, and provide location-based community features.
          </p>

          <h3>2.3 User-Generated Content</h3>
          <ul>
            <li>
              <strong>Photos:</strong> Before/after cleanup photos you choose to
              upload
            </li>
            <li>
              <strong>Route Data:</strong> Paths, duration, and distance of
              cleanup activities
            </li>
          </ul>

          <h3>2.4 Usage Analytics</h3>
          <ul>
            <li>App usage patterns and feature interaction</li>
            <li>Performance metrics and crash reports</li>
            <li>Anonymous aggregated statistics</li>
          </ul>
        </section>

        <section>
          <h2>3. How We Use Your Information</h2>

          <h3>3.1 Primary Purposes</h3>
          <ul>
            <li>
              <strong>Service Provision:</strong> Enable core app functionality
              and route tracking
            </li>
            <li>
              <strong>Environmental Impact:</strong> Calculate and display your
              cleanup statistics
            </li>
          </ul>

          <h3>3.2 Secondary Purposes</h3>
          <ul>
            <li>
              <strong>Service Improvement:</strong> Analyze usage to enhance app
              functionality
            </li>
            <li>
              <strong>Communication:</strong> Send important service updates and
              notifications
            </li>
            <li>
              <strong>Safety:</strong> Prevent fraud and ensure community safety
            </li>
          </ul>

          <h3>3.3 Legal Bases for Processing</h3>
          <ul>
            <li>
              <strong>Consent:</strong> Location data, marketing communications
            </li>
            <li>
              <strong>Contract Performance:</strong> Providing core app services
            </li>
            <li>
              <strong>Legitimate Interest:</strong> Service improvement, fraud
              prevention
            </li>
            <li>
              <strong>Legal Obligation:</strong> Compliance with applicable laws
            </li>
          </ul>
        </section>

        <section>
          <h2>4. Data Sharing and Third Parties</h2>

          <h3>4.1 We Share Data With:</h3>
          <ul>
            <li>
              <strong>Local Councils:</strong> Anonymous aggregated cleanup
              statistics (with consent)
            </li>
            <li>
              <strong>Service Providers:</strong> Cloud hosting, analytics,
              customer support
            </li>
            <li>
              <strong>Community Members:</strong> Public leaderboards and
              achievements (anonymized)
            </li>
          </ul>

          <h3>4.2 We Never Share:</h3>
          <ul>
            <li>
              Precise location data with third parties without explicit consent
            </li>
            <li>Personal information for marketing purposes</li>
            <li>Individual route data with councils or other organizations</li>
          </ul>

          <h3>4.3 Third-Party Services</h3>
          <ul>
            <li>
              <strong>Google Maps:</strong> For map display and route
              visualization
            </li>

            <li>
              <strong>Cloud Storage:</strong> AWS/Google Cloud for data storage
              and processing
            </li>
          </ul>
        </section>

        <section>
          <h2>5. Your Rights Under UK GDPR</h2>

          <p>You have the following rights regarding your personal data:</p>

          <div className="grid gap-4 mt-4">
            <div className="border-l-4 border-primary-500 pl-4">
              <h4 className="font-semibold">Right of Access (Article 15)</h4>
              <p>Request a copy of all personal data we hold about you</p>
            </div>

            <div className="border-l-4 border-primary-500 pl-4">
              <h4 className="font-semibold">
                Right to Rectification (Article 16)
              </h4>
              <p>Correct any inaccurate or incomplete personal data</p>
            </div>

            <div className="border-l-4 border-primary-500 pl-4">
              <h4 className="font-semibold">Right to Erasure (Article 17)</h4>
              <p>
                Request deletion of your personal data (&quot;right to be
                forgotten&quot;)
              </p>
            </div>

            <div className="border-l-4 border-primary-500 pl-4">
              <h4 className="font-semibold">
                Right to Restrict Processing (Article 18)
              </h4>
              <p>Limit how we process your personal data</p>
            </div>

            <div className="border-l-4 border-primary-500 pl-4">
              <h4 className="font-semibold">
                Right to Data Portability (Article 20)
              </h4>
              <p>Receive your data in a structured, machine-readable format</p>
            </div>

            <div className="border-l-4 border-primary-500 pl-4">
              <h4 className="font-semibold">Right to Object (Article 21)</h4>
              <p>Object to processing based on legitimate interests</p>
            </div>
          </div>

          <h3>5.1 How to Exercise Your Rights</h3>
          <ul>
            <li>
              <strong>In-App:</strong> Use the privacy settings in the app
            </li>
            <li>
              <strong>Email:</strong> Contact privacy@pickit.app
            </li>
            <li>
              <strong>Website:</strong> Use our{" "}
              <a
                href="/account-deletion"
                className="text-primary-600 hover:underline"
              >
                account deletion page
              </a>
            </li>
          </ul>

          <p className="mt-4">
            <strong>Response Time:</strong> We will respond to your request
            within 30 days (may be extended to 60 days for complex requests).
          </p>
        </section>

        <section>
          <h2>6. Data Retention</h2>

          <h3>6.1 Retention Periods</h3>
          <ul>
            <li>
              <strong>Account Data:</strong> Until account deletion or 3 years
              of inactivity
            </li>
            <li>
              <strong>Location Data:</strong> 2 years from collection, or until
              consent withdrawal
            </li>
            <li>
              <strong>Usage Analytics:</strong> 26 months (anonymized after 14
              months)
            </li>
            <li>
              <strong>Support Communications:</strong> 3 years for customer
              service purposes
            </li>
          </ul>

          <h3>6.2 Anonymization</h3>
          <p>
            After retention periods, data is either deleted or anonymized for
            statistical purposes. Anonymized data cannot be linked back to you
            and is not considered personal data.
          </p>
        </section>

        <section>
          <h2>7. Data Security</h2>

          <h3>7.1 Technical Measures</h3>
          <ul>
            <li>
              <strong>Encryption:</strong> Data encrypted in transit (TLS 1.3)
              and at rest (AES-256)
            </li>
            <li>
              <strong>Access Controls:</strong> Role-based access with
              multi-factor authentication
            </li>
            <li>
              <strong>Regular Audits:</strong> Security assessments and
              penetration testing
            </li>
            <li>
              <strong>Incident Response:</strong> 24/7 monitoring and breach
              response procedures
            </li>
          </ul>

          <h3>7.2 Organizational Measures</h3>
          <ul>
            <li>Staff training on data protection principles</li>
            <li>Privacy by design in all new features</li>
            <li>Regular policy reviews and updates</li>
          </ul>
        </section>

        <section>
          <h2>8. International Transfers</h2>
          <p>
            Your data is primarily processed within the UK. When we use
            international service providers, we ensure adequate protection
            through:
          </p>
          <ul>
            <li>UK GDPR adequacy decisions</li>
            <li>Standard Contractual Clauses (SCCs)</li>
            <li>Binding Corporate Rules where applicable</li>
          </ul>
        </section>

        <section>
          <h2>9. Children&apos;s Privacy</h2>
          <p>
            Our service is not intended for children under 13. We do not
            knowingly collect personal information from children under 13. If
            you believe we have collected information from a child under 13,
            please contact us immediately.
          </p>
          <p>
            For users aged 13-18, parental consent may be required depending on
            local laws.
          </p>
        </section>

        <section>
          <h2>10. Changes to This Policy</h2>
          <p>We may update this Privacy Policy periodically. We will:</p>
          <ul>
            <li>
              Notify you of material changes via email or app notification
            </li>
            <li>Post the updated policy on our website</li>
            <li>Update the &quot;Last updated&quot; date</li>
            <li>Provide a summary of changes for significant updates</li>
          </ul>
        </section>

        <section>
          <h2>11. Contact Information and Complaints</h2>

          <h3>11.1 Contact Us</h3>
          <div className="bg-slate-50 p-4 rounded-lg">
            <p>
              <strong>Privacy Questions:</strong> privacy@pickit.app
            </p>
            <p>
              <strong>Data Protection Officer:</strong> dpo@pickit.app
            </p>
            <p>
              <strong>General Support:</strong> support@pickit.app
            </p>
            <p>
              <strong>Response Time:</strong> Within 72 hours for privacy
              requests
            </p>
          </div>

          <h3>11.2 Regulatory Authority</h3>
          <p>
            If you believe we have not handled your personal data in accordance
            with this policy, you have the right to lodge a complaint with the
            UK Information Commissioner&apos;s Office (ICO):
          </p>
          <div className="bg-slate-50 p-4 rounded-lg">
            <p>
              <strong>ICO Website:</strong>{" "}
              <a
                href="https://ico.org.uk"
                className="text-primary-600 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                ico.org.uk
              </a>
            </p>
            <p>
              <strong>Phone:</strong> 0303 123 1113
            </p>
            <p>
              <strong>Address:</strong> Information Commissioner&apos;s Office,
              Wycliffe House, Water Lane, Wilmslow, Cheshire SK9 5AF
            </p>
          </div>
        </section>
      </div>
    </article>
  );
}
