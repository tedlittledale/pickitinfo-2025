import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "PickIt Terms of Service - The terms and conditions for using our community litter picking app.",
};

export default function TermsOfServicePage() {
  const lastUpdated = new Date('2025-01-30')
  
  return (
    <article>
      <header className="mb-8">
        <h1>Terms of Service</h1>
        <p className="text-slate-600 text-sm">
          Last updated: {lastUpdated.toLocaleDateString('en-GB', { 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
          })}
        </p>
        <p className="text-slate-600 text-sm mt-2">
          Version 1.0 • Effective from: {lastUpdated.toLocaleDateString('en-GB')}
        </p>
      </header>

      <div className="space-y-12">
        <section>
          <h2>1. Agreement to Terms</h2>
          <p>
            By accessing or using PickIt (the &quot;Service&quot;), you agree to be bound by these Terms of Service 
            (&quot;Terms&quot;) and our Privacy Policy. If you do not agree to these Terms, please do not use our Service.
          </p>
          <p>
            These Terms constitute a legally binding agreement between you and PickIt Ltd 
            (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;), a company registered in England and Wales.
          </p>
        </section>

        <section>
          <h2>2. Service Description</h2>
          <p>
            PickIt is a community-focused mobile application and website that enables users to:
          </p>
          <ul>
            <li>Track litter-picking activities using GPS route recording</li>
            <li>Document environmental cleanup efforts with photos</li>
            <li>Participate in community challenges and achievements</li>
            <li>Connect with local cleanup groups and volunteers</li>
            <li>Share anonymized data with local councils and authorities</li>
            <li>View community impact statistics and leaderboards</li>
          </ul>
          
          <h3>2.1 Eligibility</h3>
          <p>
            You must be at least 13 years old to use our Service. Users under 18 may require 
            parental consent in accordance with local laws.
          </p>
        </section>

        <section>
          <h2>3. User Accounts and Registration</h2>
          
          <h3>3.1 Account Creation</h3>
          <p>
            To access certain features, you must create an account providing accurate and complete information.
          </p>
          
          <h3>3.2 Account Security</h3>
          <ul>
            <li>You are responsible for maintaining the confidentiality of your account credentials</li>
            <li>You must notify us immediately of any unauthorized use of your account</li>
            <li>We are not liable for losses arising from unauthorized account access</li>
          </ul>
          
          <h3>3.3 Account Verification</h3>
          <p>
            We may verify account information to prevent fraud and ensure community safety.
          </p>
        </section>

        <section>
          <h2>4. User Obligations and Conduct</h2>
          
          <h3>4.1 Lawful Use</h3>
          <p>You agree to:</p>
          <ul>
            <li>Use the Service only for lawful purposes</li>
            <li>Comply with all applicable local, national, and international laws</li>
            <li>Respect environmental regulations and safety guidelines</li>
            <li>Obtain necessary permissions before accessing private property</li>
          </ul>
          
          <h3>4.2 Community Guidelines</h3>
          <p>You must not:</p>
          <ul>
            <li>Upload false, misleading, or inappropriate content</li>
            <li>Harass, threaten, or discriminate against other users</li>
            <li>Share personally identifiable information of others without consent</li>
            <li>Use the Service for commercial purposes without authorization</li>
            <li>Attempt to circumvent security measures or access restrictions</li>
            <li>Upload content that violates intellectual property rights</li>
          </ul>
          
          <h3>4.3 Safety and Responsibility</h3>
          <ul>
            <li>Follow safety protocols during cleanup activities</li>
            <li>Do not handle dangerous materials without proper training</li>
            <li>Report hazardous waste to appropriate authorities</li>
            <li>Respect private property and obtain permission before cleanup</li>
          </ul>
        </section>

        <section>
          <h2>5. Content Ownership and Licensing</h2>
          
          <h3>5.1 Your Content</h3>
          <p>
            You retain ownership of all content you create, including photos, route data, and comments 
            (&quot;User Content&quot;). However, by uploading User Content, you grant us:
          </p>
          <ul>
            <li>A worldwide, non-exclusive, royalty-free license to use, display, and distribute your content</li>
            <li>Rights to process and analyze your content for service improvement</li>
            <li>Permission to share anonymized data with local councils and environmental organizations</li>
            <li>Rights to use your content for promotional purposes (with attribution)</li>
          </ul>
          
          <h3>5.2 Content Standards</h3>
          <p>Your content must:</p>
          <ul>
            <li>Be accurate and truthful</li>
            <li>Not infringe on third-party rights</li>
            <li>Not contain offensive, harmful, or illegal material</li>
            <li>Comply with our community guidelines</li>
          </ul>
          
          <h3>5.3 Content Removal</h3>
          <p>
            We reserve the right to remove content that violates these Terms or our community guidelines, 
            with or without notice.
          </p>
        </section>

        <section>
          <h2>6. Privacy and Location Data</h2>
          <p>
            Your privacy is important to us. Our collection and use of personal information is governed by our 
            <a href="/privacy" className="text-primary-600 hover:underline">Privacy Policy</a>, 
            which is incorporated into these Terms by reference.
          </p>
          
          <h3>6.1 Location Services</h3>
          <p>
            Our Service uses location data to provide core functionality. You can control location permissions 
            through your device settings, but disabling location services may limit app functionality.
          </p>
        </section>

        <section>
          <h2>7. Intellectual Property Rights</h2>
          
          <h3>7.1 Our Rights</h3>
          <p>
            The Service, including its design, features, and underlying technology, is owned by us and protected 
            by copyright, trademark, and other intellectual property laws.
          </p>
          
          <h3>7.2 Limited License</h3>
          <p>
            We grant you a limited, non-exclusive, non-transferable license to use the Service for personal, 
            non-commercial purposes in accordance with these Terms.
          </p>
          
          <h3>7.3 Trademark Policy</h3>
          <p>
            &quot;PickIt&quot; and related logos are our trademarks. You may not use our trademarks without 
            express written permission.
          </p>
        </section>

        <section>
          <h2>8. Third-Party Services and Integration</h2>
          
          <h3>8.1 Council Integration</h3>
          <p>
            We may share anonymized community data with local councils and environmental agencies to support 
            public services and environmental initiatives.
          </p>
          
          <h3>8.2 Third-Party Services</h3>
          <p>
            Our Service may integrate with third-party services (e.g., Google Maps, social media platforms). 
            Your use of these services is subject to their respective terms and policies.
          </p>
          
          <h3>8.3 External Links</h3>
          <p>
            We are not responsible for the content or practices of external websites or services linked 
            from our Service.
          </p>
        </section>

        <section>
          <h2>9. Service Availability and Modifications</h2>
          
          <h3>9.1 Service Availability</h3>
          <p>
            We strive to maintain service availability but do not guarantee uninterrupted access. 
            The Service may be temporarily unavailable due to maintenance, technical issues, or other factors.
          </p>
          
          <h3>9.2 Service Modifications</h3>
          <p>
            We reserve the right to modify, suspend, or discontinue any aspect of the Service at any time, 
            with or without notice.
          </p>
          
          <h3>9.3 Updates</h3>
          <p>
            We may provide updates to improve functionality, security, or compliance. Some updates may be required 
            to continue using the Service.
          </p>
        </section>

        <section>
          <h2>10. Account Termination</h2>
          
          <h3>10.1 Termination by You</h3>
          <p>
            You may terminate your account at any time through:
          </p>
          <ul>
            <li>In-app account deletion settings</li>
            <li>Our <a href="/account-deletion" className="text-primary-600 hover:underline">web-based deletion process</a></li>
            <li>Contacting our support team</li>
          </ul>
          
          <h3>10.2 Termination by Us</h3>
          <p>
            We may terminate or suspend your account if you:
          </p>
          <ul>
            <li>Violate these Terms or community guidelines</li>
            <li>Engage in fraudulent or harmful behavior</li>
            <li>Violate applicable laws or regulations</li>
            <li>Remain inactive for an extended period</li>
          </ul>
          
          <h3>10.3 Effect of Termination</h3>
          <p>
            Upon termination, your right to use the Service ceases immediately. We will handle your data 
            in accordance with our Privacy Policy and applicable law.
          </p>
        </section>

        <section>
          <h2>11. Disclaimers and Limitations of Liability</h2>
          
          <h3>11.1 Service Disclaimers</h3>
          <p>
            The Service is provided &quot;as is&quot; without warranties of any kind, either express or implied, 
            including but not limited to warranties of merchantability, fitness for a particular purpose, 
            or non-infringement.
          </p>
          
          <h3>11.2 Limitation of Liability</h3>
          <p>
            To the fullest extent permitted by law, we shall not be liable for any indirect, incidental, 
            special, consequential, or punitive damages, including but not limited to loss of profits, 
            data, or use, arising from your use of the Service.
          </p>
          
          <h3>11.3 Geographic Limitations</h3>
          <p>
            We make no representation that the Service is appropriate or available for use in all locations. 
            Users accessing the Service from other jurisdictions do so at their own risk.
          </p>
        </section>

        <section>
          <h2>12. Indemnification</h2>
          <p>
            You agree to indemnify and hold harmless PickIt Ltd, its officers, directors, employees, and agents 
            from any claims, damages, losses, or expenses (including reasonable attorney fees) arising from:
          </p>
          <ul>
            <li>Your use of the Service</li>
            <li>Your violation of these Terms</li>
            <li>Your violation of any third-party rights</li>
            <li>Your User Content</li>
          </ul>
        </section>

        <section>
          <h2>13. Governing Law and Dispute Resolution</h2>
          
          <h3>13.1 Governing Law</h3>
          <p>
            These Terms are governed by and construed in accordance with the laws of England and Wales, 
            without regard to conflict of law principles.
          </p>
          
          <h3>13.2 Dispute Resolution</h3>
          <p>
            Any disputes arising from these Terms or your use of the Service shall be resolved through:
          </p>
          <ol>
            <li><strong>Direct Communication:</strong> First, contact us to resolve the matter informally</li>
            <li><strong>Mediation:</strong> If informal resolution fails, disputes may be resolved through mediation</li>
            <li><strong>Jurisdiction:</strong> Courts of England and Wales have exclusive jurisdiction</li>
          </ol>
          
          <h3>13.3 Class Action Waiver</h3>
          <p>
            You agree to resolve disputes individually and waive any right to participate in class action lawsuits 
            or class-wide arbitration.
          </p>
        </section>

        <section>
          <h2>14. Changes to Terms</h2>
          <p>
            We may update these Terms periodically to reflect changes in our Service, applicable law, 
            or business practices. We will:
          </p>
          <ul>
            <li>Notify you of material changes via email or in-app notification</li>
            <li>Post updated Terms on our website with a new effective date</li>
            <li>Provide a 30-day notice period for significant changes</li>
            <li>Consider continued use as acceptance of updated Terms</li>
          </ul>
        </section>

        <section>
          <h2>15. Severability and Waiver</h2>
          
          <h3>15.1 Severability</h3>
          <p>
            If any provision of these Terms is found to be unenforceable, the remaining provisions 
            will remain in full force and effect.
          </p>
          
          <h3>15.2 Waiver</h3>
          <p>
            Our failure to enforce any provision of these Terms does not constitute a waiver of that provision 
            or any other provision.
          </p>
        </section>

        <section>
          <h2>16. Contact Information</h2>
          <div className="bg-slate-50 p-4 rounded-lg">
            <p><strong>Legal Questions:</strong> legal@pickit.app</p>
            <p><strong>General Support:</strong> support@pickit.app</p>
            <p><strong>Privacy Concerns:</strong> privacy@pickit.app</p>
            <p><strong>Business Address:</strong> [Company Address], United Kingdom</p>
          </div>
          
          <p className="mt-4">
            For questions about these Terms of Service, please contact us at{" "}
            <a
              href="mailto:legal@pickit.app"
              className="text-primary-600 hover:underline"
            >
              legal@pickit.app
            </a>
          </p>
        </section>

        <section>
          <h2>17. Effective Date and Acceptance</h2>
          <p>
            These Terms are effective as of {lastUpdated.toLocaleDateString('en-GB')} and supersede all 
            previous versions. By using our Service after this date, you acknowledge that you have read, 
            understood, and agree to be bound by these Terms.
          </p>
        </section>
      </div>
    </article>
  );
}
