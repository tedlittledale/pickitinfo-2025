import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Accessibility Statement',
  description: 'PickIt Accessibility Statement - Our commitment to making our app and website accessible to everyone.',
}

export default function AccessibilityPage() {
  const lastUpdated = new Date('2025-01-30')
  
  return (
    <article>
      <header className="mb-8">
        <h1>Accessibility Statement</h1>
        <p className="text-slate-600 text-sm">
          Last updated: {lastUpdated.toLocaleDateString('en-GB', { 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
          })}
        </p>
        <p className="text-slate-600 text-sm mt-2">
          Version 1.0 • Next review: {new Date(lastUpdated.getTime() + 365 * 24 * 60 * 60 * 1000).toLocaleDateString('en-GB')}
        </p>
      </header>
      
      <div className="space-y-12">
        <section>
          <h2>1. Our Commitment to Accessibility</h2>
          <p>
            PickIt is committed to ensuring that our website and mobile application are accessible to all users, 
            including people with disabilities. We believe that everyone should have equal access to information 
            and functionality, and we strive to provide an inclusive digital experience.
          </p>
          <p>
            This accessibility statement applies to the PickIt website (pickit.app) and reflects our ongoing 
            efforts to improve accessibility in accordance with recognized standards and best practices.
          </p>
        </section>

        <section>
          <h2>2. Conformance Status</h2>
          <div className="bg-green-50 border border-green-200 p-4 rounded-lg">
            <p className="text-green-800">
              <strong>WCAG 2.2 Level AA Conformance:</strong> This website aims to conform with the 
              <a href="https://www.w3.org/WAI/WCAG22/quickref/" className="text-primary-600 hover:underline ml-1" target="_blank" rel="noopener noreferrer">
                Web Content Accessibility Guidelines (WCAG) 2.2
              </a> at the AA conformance level.
            </p>
          </div>
          
          <h3>2.1 Standards We Follow</h3>
          <ul>
            <li><strong>WCAG 2.2 Level AA:</strong> International standard for web accessibility</li>
            <li><strong>Section 508:</strong> US federal accessibility requirements</li>
            <li><strong>EN 301 549:</strong> European accessibility standard</li>
            <li><strong>UK Public Sector Bodies Accessibility Regulations 2018</strong></li>
          </ul>
        </section>

        <section>
          <h2>3. Accessibility Features</h2>
          
          <h3>3.1 Navigation and Structure</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-slate-50 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">Keyboard Navigation</h4>
              <ul className="text-sm space-y-1">
                <li>• Full keyboard accessibility</li>
                <li>• Visible focus indicators</li>
                <li>• Logical tab order</li>
                <li>• Skip navigation links</li>
              </ul>
            </div>
            
            <div className="bg-slate-50 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">Content Structure</h4>
              <ul className="text-sm space-y-1">
                <li>• Semantic HTML elements</li>
                <li>• Proper heading hierarchy</li>
                <li>• Landmark roles</li>
                <li>• Page titles and descriptions</li>
              </ul>
            </div>
          </div>
          
          <h3>3.2 Visual Design</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-slate-50 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">Color and Contrast</h4>
              <ul className="text-sm space-y-1">
                <li>• WCAG AA compliant color contrast (4.5:1 minimum)</li>
                <li>• Information not conveyed by color alone</li>
                <li>• High contrast mode support</li>
                <li>• Dark mode compatibility</li>
              </ul>
            </div>
            
            <div className="bg-slate-50 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">Typography and Layout</h4>
              <ul className="text-sm space-y-1">
                <li>• Resizable text up to 200% without loss of functionality</li>
                <li>• Readable fonts and sufficient line spacing</li>
                <li>• Responsive design for all screen sizes</li>
                <li>• No horizontal scrolling at 320px width</li>
              </ul>
            </div>
          </div>
          
          <h3>3.3 Interactive Elements</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-slate-50 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">Forms and Controls</h4>
              <ul className="text-sm space-y-1">
                <li>• Proper form labels and instructions</li>
                <li>• Error identification and suggestions</li>
                <li>• Required field indicators</li>
                <li>• Touch target size minimum 44x44 pixels</li>
              </ul>
            </div>
            
            <div className="bg-slate-50 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">Multimedia and Images</h4>
              <ul className="text-sm space-y-1">
                <li>• Alternative text for all informative images</li>
                <li>• Decorative images marked appropriately</li>
                <li>• Video captions and transcripts (when applicable)</li>
                <li>• Audio descriptions for visual content</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2>4. Assistive Technology Compatibility</h2>
          <p>Our website is designed to be compatible with the following assistive technologies:</p>
          
          <h3>4.1 Screen Readers</h3>
          <div className="bg-slate-50 p-4 rounded-lg">
            <ul className="grid md:grid-cols-2 gap-2">
              <li>• NVDA (Windows)</li>
              <li>• JAWS (Windows)</li>
              <li>• VoiceOver (macOS/iOS)</li>
              <li>• TalkBack (Android)</li>
            </ul>
          </div>
          
          <h3>4.2 Other Assistive Technologies</h3>
          <div className="bg-slate-50 p-4 rounded-lg">
            <ul className="grid md:grid-cols-2 gap-2">
              <li>• Voice recognition software</li>
              <li>• Alternative keyboards</li>
              <li>• Switch navigation devices</li>
              <li>• Eye-tracking systems</li>
            </ul>
          </div>
        </section>

        <section>
          <h2>5. Browser and Device Compatibility</h2>
          <p>We test our accessibility features on the following combinations:</p>
          
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-slate-200">
              <thead className="bg-slate-50">
                <tr>
                  <th className="px-4 py-2 text-left font-semibold">Platform</th>
                  <th className="px-4 py-2 text-left font-semibold">Browser</th>
                  <th className="px-4 py-2 text-left font-semibold">Screen Reader</th>
                  <th className="px-4 py-2 text-left font-semibold">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                <tr>
                  <td className="px-4 py-2">Windows 10/11</td>
                  <td className="px-4 py-2">Chrome, Firefox, Edge</td>
                  <td className="px-4 py-2">NVDA, JAWS</td>
                  <td className="px-4 py-2 text-green-600">✓ Supported</td>
                </tr>
                <tr>
                  <td className="px-4 py-2">macOS</td>
                  <td className="px-4 py-2">Safari, Chrome, Firefox</td>
                  <td className="px-4 py-2">VoiceOver</td>
                  <td className="px-4 py-2 text-green-600">✓ Supported</td>
                </tr>
                <tr>
                  <td className="px-4 py-2">iOS</td>
                  <td className="px-4 py-2">Safari Mobile</td>
                  <td className="px-4 py-2">VoiceOver</td>
                  <td className="px-4 py-2 text-green-600">✓ Supported</td>
                </tr>
                <tr>
                  <td className="px-4 py-2">Android</td>
                  <td className="px-4 py-2">Chrome Mobile</td>
                  <td className="px-4 py-2">TalkBack</td>
                  <td className="px-4 py-2 text-green-600">✓ Supported</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2>6. Known Issues and Limitations</h2>
          <p>
            We are continuously working to improve accessibility. Currently identified issues include:
          </p>
          
          <div className="space-y-4">
            <div className="border-l-4 border-yellow-500 pl-4">
              <h4 className="font-semibold">Interactive Map Components</h4>
              <p className="text-sm text-slate-600">
                <strong>Issue:</strong> Some map interactions may be challenging for screen reader users
              </p>
              <p className="text-sm text-slate-600">
                <strong>Workaround:</strong> Alternative text-based data views are provided
              </p>
              <p className="text-sm text-slate-600">
                <strong>Target Fix:</strong> Q2 2025
              </p>
            </div>
            
            <div className="border-l-4 border-blue-500 pl-4">
              <h4 className="font-semibold">Third-Party Content</h4>
              <p className="text-sm text-slate-600">
                <strong>Issue:</strong> Some embedded third-party content may not meet our accessibility standards
              </p>
              <p className="text-sm text-slate-600">
                <strong>Action:</strong> Working with vendors to improve accessibility
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2>7. Assessment and Testing Methods</h2>
          
          <h3>7.1 Automated Testing</h3>
          <div className="bg-slate-50 p-4 rounded-lg">
            <ul>
              <li><strong>axe-core:</strong> Automated accessibility testing in development</li>
              <li><strong>WAVE:</strong> Web accessibility evaluation tool</li>
              <li><strong>Lighthouse:</strong> Google&apos;s accessibility audit</li>
              <li><strong>Pa11y:</strong> Command-line accessibility testing</li>
            </ul>
          </div>
          
          <h3>7.2 Manual Testing</h3>
          <div className="bg-slate-50 p-4 rounded-lg">
            <ul>
              <li><strong>Keyboard Navigation:</strong> Complete keyboard-only testing</li>
              <li><strong>Screen Reader Testing:</strong> Regular testing with NVDA, JAWS, and VoiceOver</li>
              <li><strong>Color Contrast Analysis:</strong> Manual verification of all color combinations</li>
              <li><strong>User Testing:</strong> Feedback from users with disabilities</li>
            </ul>
          </div>
          
          <h3>7.3 External Audits</h3>
          <p>
            We conduct annual accessibility audits with certified accessibility professionals and 
            plan to undergo formal WCAG 2.2 AA conformance testing by Q3 2025.
          </p>
        </section>

        <section>
          <h2>8. Ongoing Accessibility Efforts</h2>
          
          <h3>8.1 Development Process</h3>
          <ul>
            <li><strong>Design Phase:</strong> Accessibility considerations in all design decisions</li>
            <li><strong>Development:</strong> Accessibility testing integrated into development workflow</li>
            <li><strong>Quality Assurance:</strong> Accessibility checks in all testing procedures</li>
            <li><strong>Release:</strong> Pre-release accessibility validation</li>
          </ul>
          
          <h3>8.2 Team Training</h3>
          <ul>
            <li>Regular accessibility training for all team members</li>
            <li>WCAG 2.2 guidelines integration in development practices</li>
            <li>Assistive technology familiarization sessions</li>
            <li>Inclusive design workshops</li>
          </ul>
        </section>

        <section>
          <h2>9. Feedback and Contact Information</h2>
          <p>
            We welcome your feedback on the accessibility of PickIt. Your input helps us identify 
            barriers and improve our services for everyone.
          </p>
          
          <h3>9.1 How to Contact Us</h3>
          <div className="bg-slate-50 p-4 rounded-lg">
            <p><strong>Accessibility Concerns:</strong> accessibility@pickit.app</p>
            <p><strong>Phone:</strong> +44 20 1234 5678 (9 AM - 5 PM GMT, Monday-Friday)</p>
            <p><strong>General Support:</strong> support@pickit.app</p>
            <p><strong>Response Time:</strong> Within 2 business days for accessibility issues</p>
          </div>
          
          <h3>9.2 What to Include in Your Feedback</h3>
          <ul>
            <li>The specific page or feature you experienced difficulty with</li>
            <li>The assistive technology you were using (if applicable)</li>
            <li>Your browser and operating system</li>
            <li>A description of the problem</li>
            <li>Any error messages you received</li>
          </ul>
        </section>

        <section>
          <h2>10. Alternative Access Methods</h2>
          <p>
            If you encounter accessibility barriers, we provide alternative ways to access our content and services:
          </p>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-slate-50 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">Content Alternatives</h4>
              <ul className="text-sm space-y-1">
                <li>• Text-only versions of visual content</li>
                <li>• Alternative formats (PDF, accessible HTML)</li>
                <li>• Phone-based support for complex tasks</li>
                <li>• Email assistance with form submissions</li>
              </ul>
            </div>
            
            <div className="bg-slate-50 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">Assistive Features</h4>
              <ul className="text-sm space-y-1">
                <li>• Built-in accessibility tools</li>
                <li>• Customizable display options</li>
                <li>• Keyboard shortcuts guide</li>
                <li>• Screen reader optimized content</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2>11. Legal and Regulatory Compliance</h2>
          <p>
            This accessibility statement demonstrates our commitment to compliance with:
          </p>
          <ul>
            <li><strong>UK Equality Act 2010:</strong> Duty to make reasonable adjustments</li>
            <li><strong>UK Public Sector Bodies (Websites and Mobile Applications) Accessibility Regulations 2018</strong></li>
            <li><strong>European Accessibility Act (EAA)</strong></li>
            <li><strong>Americans with Disabilities Act (ADA)</strong> (for US users)</li>
          </ul>
        </section>

        <section>
          <h2>12. Regular Review and Updates</h2>
          <p>
            This accessibility statement is reviewed and updated regularly to reflect our current accessibility status:
          </p>
          <ul>
            <li><strong>Monthly:</strong> Automated testing and issue tracking</li>
            <li><strong>Quarterly:</strong> Manual testing and user feedback review</li>
            <li><strong>Annually:</strong> Comprehensive accessibility audit and statement update</li>
            <li><strong>As needed:</strong> Updates following significant changes to our website or app</li>
          </ul>
          
          <p className="mt-4">
            <strong>Next scheduled review:</strong> {new Date(lastUpdated.getTime() + 365 * 24 * 60 * 60 * 1000).toLocaleDateString('en-GB', { 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}
          </p>
        </section>
      </div>
    </article>
  )
}