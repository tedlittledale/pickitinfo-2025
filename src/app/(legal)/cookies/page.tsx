import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Cookie Policy',
  description: 'PickIt Cookie Policy - Learn about how we use cookies and similar technologies.',
}

export default function CookiePolicyPage() {
  const lastUpdated = new Date('2025-01-30')
  
  return (
    <article>
      <header className="mb-8">
        <h1>Cookie Policy</h1>
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
          <h2>1. Introduction</h2>
          <p>
            This Cookie Policy explains how PickIt (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) uses cookies and similar tracking 
            technologies on our website and mobile application. This policy should be read alongside our 
            <a href="/privacy" className="text-primary-600 hover:underline">Privacy Policy</a> and 
            <a href="/terms" className="text-primary-600 hover:underline">Terms of Service</a>.
          </p>
        </section>

        <section>
          <h2>2. What Are Cookies</h2>
          <p>
            Cookies are small text files that are stored on your device (computer, tablet, or mobile) when you 
            visit our website. They contain information that is transferred to your device&apos;s hard drive and allow 
            us to recognize your device and provide you with a more personalized experience.
          </p>
          
          <h3>2.1 Types of Cookies</h3>
          <div className="space-y-4">
            <div className="border-l-4 border-blue-500 pl-4">
              <h4 className="font-semibold">Session Cookies</h4>
              <p>Temporary cookies that are deleted when you close your browser.</p>
            </div>
            
            <div className="border-l-4 border-green-500 pl-4">
              <h4 className="font-semibold">Persistent Cookies</h4>
              <p>Remain on your device until they expire or you manually delete them.</p>
            </div>
            
            <div className="border-l-4 border-yellow-500 pl-4">
              <h4 className="font-semibold">First-Party Cookies</h4>
              <p>Set directly by our website.</p>
            </div>
            
            <div className="border-l-4 border-purple-500 pl-4">
              <h4 className="font-semibold">Third-Party Cookies</h4>
              <p>Set by external services we use (e.g., Google Analytics).</p>
            </div>
          </div>
        </section>

        <section>
          <h2>3. How We Use Cookies</h2>
          
          <h3>3.1 Strictly Necessary Cookies</h3>
          <p>
            These cookies are essential for the website to function properly. They enable basic functions 
            like page navigation and access to secure areas of the website.
          </p>
          
          <div className="bg-slate-50 p-4 rounded-lg mt-4">
            <h4 className="font-semibold mb-2">Examples:</h4>
            <ul className="space-y-2">
              <li><strong>Session Management:</strong> Remember your login status</li>
              <li><strong>Security:</strong> Prevent cross-site request forgery</li>
              <li><strong>Cookie Consent:</strong> Remember your cookie preferences</li>
              <li><strong>Load Balancing:</strong> Route requests to appropriate servers</li>
            </ul>
            <p className="mt-2 text-sm text-slate-600">
              <strong>Legal Basis:</strong> Legitimate interest (essential for website functionality)
            </p>
          </div>
          
          <h3>3.2 Performance and Analytics Cookies</h3>
          <p>
            These cookies help us understand how visitors interact with our website by collecting 
            and reporting information anonymously.
          </p>
          
          <div className="bg-slate-50 p-4 rounded-lg mt-4">
            <h4 className="font-semibold mb-2">We Use:</h4>
            <ul className="space-y-2">
              <li><strong>Google Analytics:</strong> Website usage statistics and user behavior</li>
              <li><strong>Performance Monitoring:</strong> Page load times and technical issues</li>
              <li><strong>Heat Mapping:</strong> User interaction patterns (anonymized)</li>
            </ul>
            <p className="mt-2 text-sm text-slate-600">
              <strong>Legal Basis:</strong> Consent (you can opt-out anytime)
            </p>
            <p className="mt-1 text-sm text-slate-600">
              <strong>Retention:</strong> 26 months (Google Analytics standard)
            </p>
          </div>
          
          <h3>3.3 Functional Cookies</h3>
          <p>
            These cookies enable enhanced functionality and personalization, such as remembering your 
            preferences and settings.
          </p>
          
          <div className="bg-slate-50 p-4 rounded-lg mt-4">
            <h4 className="font-semibold mb-2">Examples:</h4>
            <ul className="space-y-2">
              <li><strong>Language Preferences:</strong> Remember your chosen language</li>
              <li><strong>Accessibility Settings:</strong> Font size, contrast preferences</li>
              <li><strong>Location Settings:</strong> Remember your preferred map area</li>
              <li><strong>UI Preferences:</strong> Dashboard layout and display options</li>
            </ul>
            <p className="mt-2 text-sm text-slate-600">
              <strong>Legal Basis:</strong> Consent (you can disable in settings)
            </p>
          </div>
          
          <h3>3.4 Marketing and Targeting Cookies</h3>
          <p>
            These cookies track your browsing habits to enable us to show you relevant advertisements 
            and measure the effectiveness of our marketing campaigns.
          </p>
          
          <div className="bg-slate-50 p-4 rounded-lg mt-4">
            <h4 className="font-semibold mb-2">Currently We Do NOT Use:</h4>
            <ul className="space-y-2">
              <li>Advertising cookies</li>
              <li>Cross-site tracking</li>
              <li>Behavioral targeting</li>
              <li>Social media tracking pixels</li>
            </ul>
            <p className="mt-2 text-sm text-green-600">
              <strong>Note:</strong> We prioritize privacy and currently do not use marketing cookies. 
              If this changes, we will update this policy and request your explicit consent.
            </p>
          </div>
        </section>

        <section>
          <h2>4. Detailed Cookie List</h2>
          
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-slate-200">
              <thead className="bg-slate-50">
                <tr>
                  <th className="px-4 py-2 text-left font-semibold">Cookie Name</th>
                  <th className="px-4 py-2 text-left font-semibold">Purpose</th>
                  <th className="px-4 py-2 text-left font-semibold">Duration</th>
                  <th className="px-4 py-2 text-left font-semibold">Type</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                <tr>
                  <td className="px-4 py-2 font-mono text-sm">pickit_session</td>
                  <td className="px-4 py-2">Maintains user session</td>
                  <td className="px-4 py-2">Session</td>
                  <td className="px-4 py-2">Essential</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 font-mono text-sm">cookie_consent</td>
                  <td className="px-4 py-2">Stores cookie preferences</td>
                  <td className="px-4 py-2">1 year</td>
                  <td className="px-4 py-2">Essential</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 font-mono text-sm">csrf_token</td>
                  <td className="px-4 py-2">Security protection</td>
                  <td className="px-4 py-2">Session</td>
                  <td className="px-4 py-2">Essential</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 font-mono text-sm">_ga</td>
                  <td className="px-4 py-2">Google Analytics - distinguishes users</td>
                  <td className="px-4 py-2">2 years</td>
                  <td className="px-4 py-2">Analytics</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 font-mono text-sm">_ga_*</td>
                  <td className="px-4 py-2">Google Analytics - session state</td>
                  <td className="px-4 py-2">2 years</td>
                  <td className="px-4 py-2">Analytics</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 font-mono text-sm">user_preferences</td>
                  <td className="px-4 py-2">Stores UI and accessibility settings</td>
                  <td className="px-4 py-2">1 year</td>
                  <td className="px-4 py-2">Functional</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2>5. Third-Party Cookies</h2>
          
          <h3>5.1 Google Analytics</h3>
          <div className="bg-slate-50 p-4 rounded-lg">
            <p><strong>Purpose:</strong> Website analytics and user behavior analysis</p>
            <p><strong>Data Collected:</strong> Page views, session duration, bounce rate, device information</p>
            <p><strong>Privacy:</strong> IP addresses are anonymized</p>
            <p><strong>Opt-out:</strong> 
              <a href="https://tools.google.com/dlpage/gaoptout" className="text-primary-600 hover:underline ml-1" target="_blank" rel="noopener noreferrer">
                Google Analytics Opt-out Browser Add-on
              </a>
            </p>
            <p><strong>Privacy Policy:</strong>
              <a href="https://policies.google.com/privacy" className="text-primary-600 hover:underline ml-1" target="_blank" rel="noopener noreferrer">
                Google Privacy Policy
              </a>
            </p>
          </div>
          
          <h3>5.2 Google Maps</h3>
          <div className="bg-slate-50 p-4 rounded-lg">
            <p><strong>Purpose:</strong> Display interactive maps and route visualization</p>
            <p><strong>Data Collected:</strong> Location data, map interactions</p>
            <p><strong>Usage:</strong> Only when accessing map features</p>
            <p><strong>Privacy Policy:</strong>
              <a href="https://policies.google.com/privacy" className="text-primary-600 hover:underline ml-1" target="_blank" rel="noopener noreferrer">
                Google Privacy Policy
              </a>
            </p>
          </div>
        </section>

        <section>
          <h2>6. Managing Your Cookie Preferences</h2>
          
          <h3>6.1 Cookie Consent Banner</h3>
          <p>
            When you first visit our website, you&apos;ll see a cookie consent banner where you can:
          </p>
          <ul>
            <li>Accept all cookies</li>
            <li>Reject non-essential cookies</li>
            <li>Customize your preferences by cookie category</li>
          </ul>
          
          <h3>6.2 Changing Your Preferences</h3>
          <p>You can change your cookie preferences at any time by:</p>
          <ul>
            <li>Clicking the &quot;Cookie Preferences&quot; link in our website footer</li>
            <li>Accessing the preferences through your account settings</li>
            <li>Clearing cookies through your browser settings</li>
          </ul>
          
          <h3>6.3 Browser Controls</h3>
          <p>
            Most web browsers allow you to control cookies through their settings. You can:
          </p>
          <ul>
            <li>Block all cookies</li>
            <li>Allow only first-party cookies</li>
            <li>Delete existing cookies</li>
            <li>Get notified when cookies are set</li>
          </ul>
          
          <div className="bg-amber-50 border border-amber-200 p-4 rounded-lg mt-4">
            <p className="text-amber-800">
              <strong>Note:</strong> Disabling essential cookies may affect website functionality. 
              Some features may not work properly without cookies enabled.
            </p>
          </div>
          
          <h4 className="font-semibold mt-4 mb-2">Browser-Specific Instructions:</h4>
          <ul className="space-y-1">
            <li><a href="https://support.google.com/chrome/answer/95647" className="text-primary-600 hover:underline" target="_blank" rel="noopener noreferrer">Google Chrome</a></li>
            <li><a href="https://support.mozilla.org/en-US/kb/cookies-information-websites-store-on-your-computer" className="text-primary-600 hover:underline" target="_blank" rel="noopener noreferrer">Mozilla Firefox</a></li>
            <li><a href="https://support.apple.com/guide/safari/manage-cookies-and-website-data-sfri11471/mac" className="text-primary-600 hover:underline" target="_blank" rel="noopener noreferrer">Safari</a></li>
            <li><a href="https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" className="text-primary-600 hover:underline" target="_blank" rel="noopener noreferrer">Microsoft Edge</a></li>
          </ul>
        </section>

        <section>
          <h2>7. Mobile App Data Collection</h2>
          <p>
            Our mobile application may collect similar information to cookies through:
          </p>
          <ul>
            <li><strong>Local Storage:</strong> Storing preferences and settings locally on your device</li>
            <li><strong>Analytics SDKs:</strong> Collecting usage statistics and crash reports</li>
            <li><strong>Device Identifiers:</strong> For security and fraud prevention</li>
          </ul>
          
          <p className="mt-4">
            You can control these through your device&apos;s privacy settings and our in-app privacy controls.
          </p>
        </section>

        <section>
          <h2>8. Data Protection and Privacy</h2>
          
          <h3>8.1 Data Minimization</h3>
          <p>
            We only collect cookie data that is necessary for our stated purposes and retain it for 
            the minimum time required.
          </p>
          
          <h3>8.2 Security</h3>
          <p>
            Cookie data is transmitted securely using HTTPS encryption and stored in compliance with 
            industry security standards.
          </p>
          
          <h3>8.3 Your Rights</h3>
          <p>Under UK GDPR, you have the right to:</p>
          <ul>
            <li>Withdraw consent for non-essential cookies</li>
            <li>Access information about cookies we use</li>
            <li>Request deletion of cookie data</li>
            <li>Object to cookie processing</li>
          </ul>
        </section>

        <section>
          <h2>9. Changes to This Cookie Policy</h2>
          <p>
            We may update this Cookie Policy periodically to reflect changes in our practices, 
            technology, or legal requirements. We will:
          </p>
          <ul>
            <li>Notify you of significant changes via email or website notice</li>
            <li>Update the &quot;Last updated&quot; date at the top of this policy</li>
            <li>Request new consent if required by law</li>
          </ul>
        </section>

        <section>
          <h2>10. Contact Information</h2>
          <div className="bg-slate-50 p-4 rounded-lg">
            <p><strong>Privacy Questions:</strong> privacy@pickit.app</p>
            <p><strong>Data Protection Officer:</strong> dpo@pickit.app</p>
            <p><strong>General Support:</strong> support@pickit.app</p>
          </div>
          
          <p className="mt-4">
            For questions about our use of cookies or this Cookie Policy, please contact us at{' '}
            <a href="mailto:privacy@pickit.app" className="text-primary-600 hover:underline">
              privacy@pickit.app
            </a>
          </p>
        </section>
      </div>
    </article>
  )
}