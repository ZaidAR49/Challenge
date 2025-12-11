import React from 'react'
import { Link } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'
import Footer from '../components/Footer'

const PolicyPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <Link to="/signup" className="flex items-center gap-2 text-primary hover:text-secondary transition w-fit mb-4">
            <FiArrowLeft className="text-lg" />
            <span className="font-semibold">Back to Sign Up</span>
          </Link>
          <h1 className="text-4xl font-bold text-dark">Terms & Policies</h1>
          <p className="text-gray-600 mt-2">Please read our complete terms and policies carefully</p>
        </div>
      </div>

      {/* Main Content */}
      <main className="flex-1 max-w-4xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-lg shadow-sm p-8 border border-gray-200">
          <div className="text-xs leading-relaxed text-gray-700 space-y-4 font-sans" style={{ lineHeight: '1.5', fontSize: '0.8125rem', fontFamily: 'Georgia, serif', color: '#4b5563' }}>
            <p>
              <strong>1. TERMS OF SERVICE AND USER AGREEMENT</strong><br/>
              By accessing and using this LearnHub course platform ("Platform"), you agree to be bound by these Terms of Service. If you do not agree to abide by the above, please do not use this service. LearnHub reserves the right to update and change the Terms of Service from time to time without notice. Your continued use of the website will mean you accept those changes. Unauthorized use of LearnHub materials contained herein is prohibited. These materials and the content of our web pages are protected by copyright law. You may not reproduce, publish, transmit, distribute, display, modify, create derivative works from, sell, or participate in any sale of information, products or services contained on the Platform without the express written permission of LearnHub.
            </p>

            <p>
              <strong>2. CONTENT OWNERSHIP AND INTELLECTUAL PROPERTY</strong><br/>
              All content available on the Platform, including but not limited to courses, lectures, videos, documents, materials, code, images, text, software, and any other intellectual property, is owned by LearnHub or its content providers. You agree not to reproduce, distribute, transmit, modify, or create derivative works of any content without explicit written permission. All course materials are licensed to you for personal, non-commercial educational use only. Any unauthorized copying, distribution, or use of course content is strictly prohibited and may result in legal action. Certificates of completion are owned by LearnHub and may only be used by the individual who completed the course.
            </p>

            <p>
              <strong>3. USER REGISTRATION AND ACCOUNT RESPONSIBILITY</strong><br/>
              To access certain features of the Platform, you must create an account and provide accurate, current, and complete information. You are responsible for maintaining the confidentiality of your password and username. You agree not to disclose your password to any third party and to notify LearnHub immediately of any unauthorized use of your account. You are fully responsible for all activities that occur under your username. LearnHub assumes no liability for losses incurred due to the theft or misuse of your account credentials. You may not register an account using false information or impersonate any person. Each account is strictly personal and may not be shared, sold, or transferred to another individual.
            </p>

            <p>
              <strong>4. CERTIFICATE AUTHENTICITY AND USAGE</strong><br/>
              Certificates issued by LearnHub certify that the named individual has completed the specified course according to our standards. Your full name as provided during registration will appear on your certificate. You agree to provide your legal name and to verify its accuracy before completing registration. Misrepresenting your identity or using false names will result in certificate revocation and account termination. Certificates may be displayed online, printed, or used in resumes and professional profiles, but you agree not to modify, duplicate, or alter certificates in any way. LearnHub reserves the right to verify the authenticity of certificates and may revoke certificates if fraudulent activity is detected.
            </p>

            <p>
              <strong>5. ACCEPTABLE USE POLICY</strong><br/>
              You agree not to use the Platform for any illegal, harmful, or unethical purposes. Prohibited activities include: distributing malware or viruses, engaging in harassment or threatening behavior, attempting to gain unauthorized access to systems, collecting personal data without consent, transmitting spam or unsolicited communications, accessing or modifying other users' accounts, circumventing security measures, and using automated tools to access the Platform without permission. LearnHub reserves the right to suspend or terminate your account if you violate these terms. Any attempt to abuse the system will result in immediate account suspension and potential legal action.
            </p>

            <p>
              <strong>6. PRIVACY AND DATA PROTECTION</strong><br/>
              LearnHub collects personal information including but not limited to your name, email address, username, password, learning progress, and engagement metrics. This information is used to provide services, improve your learning experience, issue certificates, and communicate with you about courses and updates. We do not sell your personal data to third parties. Your information is protected with industry-standard encryption and security measures. However, no method of transmission over the internet is 100% secure. We encourage you to review our Privacy Policy for comprehensive information about how we handle your data. By creating an account, you consent to the collection and use of your information as described in our Privacy Policy.
            </p>

            <p>
              <strong>7. COURSE COMPLETION AND LEARNING STANDARDS</strong><br/>
              Course completion requirements vary by course and are clearly specified at the beginning of each course. Typical requirements include watching video lectures, completing assignments, participating in quizzes, and demonstrating competency in the course material. LearnHub instructors and automated systems monitor course progress and may flag suspicious activity such as unusually fast completion times, unusual patterns, or suspected plagiarism. Any evidence of academic dishonesty, including plagiarism, cheating, or unauthorized assistance, will result in course failure and potential account suspension. You certify that all work submitted is your own original work. Certificates will only be issued upon genuine completion of course requirements.
            </p>

            <p>
              <strong>8. DISCLAIMER OF WARRANTIES</strong><br/>
              The Platform and all content are provided "as is" without warranty of any kind, express or implied. LearnHub does not warrant that the Platform will be uninterrupted, secure, or error-free. LearnHub disclaims all warranties, including but not limited to implied warranties of merchantability, fitness for a particular purpose, and non-infringement. We do not guarantee that courses will lead to employment or that skills learned will be applicable to all job markets. Course content is provided for educational purposes and does not constitute professional advice. LearnHub is not responsible for the accuracy, completeness, or timeliness of any course content or third-party information accessible through the Platform.
            </p>

            <p>
              <strong>9. USER DATA SECURITY AND USAGE DISCLAIMER</strong><br/>
              While we implement standard security measures to protect your information, LearnHub assumes no responsibility for the security or privacy of any information you transmit to or through the Platform. You transmit all information at your own risk. LearnHub does not guarantee that your data will remain confidential or secure at all times. Additionally, by providing your personal information, you grant LearnHub full rights to use, modify, analyze, and process your data in any manner we deem appropriate. This includes using your information for analytics, improving our services, marketing purposes, training algorithms, and any other use without further compensation or notification. You waive any claims regarding how your data is used or processed. LearnHub is not liable for any unauthorized access, data breaches, or misuse of your information, whether resulting from system vulnerabilities, human error, or external threats.
            </p>

            <p>
              <strong>10. PLATFORM UNDER IMPLEMENTATION NOTICE</strong><br/>
              Please be aware that the LearnHub Platform is currently under active development and implementation. Not all features, courses, or functionalities may be fully operational or available at any given time. Some services may be incomplete, contain bugs, or be removed without notice. Certain features may not work as intended. We are continuously updating and improving the Platform, which may result in temporary unavailability, data loss, or changes to how services function. You acknowledge that by using this Platform, you are using a service in active development and accept all associated risks. LearnHub is not responsible for service interruptions, data loss, incomplete features, or the removal of content or courses. Features and content may change, be modified, or discontinued at any time without notice. We recommend not relying solely on this Platform for critical learning or professional certification until it reaches full production status.
            </p>

            <p>
              <strong>11. LIMITATION OF LIABILITY</strong><br/>
              In no event shall LearnHub be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of profits, data loss, or business interruption, arising out of or related to your use of the Platform. Your sole remedy for dissatisfaction with the Platform is to discontinue use. Some jurisdictions do not allow the exclusion or limitation of liability, so some of the above may not apply to you. The total liability of LearnHub for any claim shall not exceed the amount you paid for the course.
            </p>

            <p>
              <strong>12. MODIFICATION AND TERMINATION OF SERVICES</strong><br/>
              LearnHub reserves the right to modify, suspend, or discontinue any course or feature of the Platform at any time without notice. We may also update course content, change instructors, or modify course schedules. Refund policies and course availability are subject to change. LearnHub reserves the right to terminate your account at any time for any reason, including violation of these terms. Upon termination, your access to the Platform and any certificates will be revoked. Course fees paid are generally non-refundable except where required by law or at the sole discretion of LearnHub.
            </p>

            <p>
              <strong>13. THIRD-PARTY LINKS AND CONTENT</strong><br/>
              The Platform may contain links to third-party websites and resources. LearnHub is not responsible for the availability, accuracy, or content of external websites. Your use of third-party sites is governed by their own terms and policies. LearnHub does not endorse any third-party content and assumes no liability for any third-party materials. You access third-party content at your own risk. Any transactions with third parties are your sole responsibility.
            </p>

            <p>
              <strong>14. DISPUTE RESOLUTION</strong><br/>
              Any disputes arising from these terms or your use of the Platform shall be governed by and construed in accordance with the laws of the jurisdiction in which LearnHub operates. You agree to submit to the exclusive jurisdiction of courts in that jurisdiction. Before pursuing legal action, you agree to attempt to resolve disputes through informal communication with LearnHub. LearnHub may require binding arbitration for dispute resolution instead of court proceedings.
            </p>

            <p>
              <strong>15. COURSE FEEDBACK AND RATINGS</strong><br/>
              You may be asked to provide feedback on courses, instructors, and your learning experience. This feedback is valuable and helps us improve. However, you agree that any feedback you provide may be used by LearnHub without compensation or attribution. Abusive or defamatory feedback will result in account termination. You agree not to post reviews containing profanity, hate speech, or false information designed to damage instructors or the platform.
            </p>

            <p>
              <strong>16. TECHNICAL REQUIREMENTS AND COMPATIBILITY</strong><br/>
              The Platform requires a modern web browser and a stable internet connection. LearnHub is not responsible for technical issues related to your internet service, computer, or browser. You are responsible for maintaining appropriate security on your devices. LearnHub does not guarantee compatibility with all devices or browsers. Some courses may require specific software or hardware. Video courses may require a minimum internet speed. LearnHub provides technical support within reasonable effort, but extended support may require additional fees.
            </p>

            <p>
              <strong>17. UPDATES TO THESE TERMS</strong><br/>
              LearnHub reserves the right to modify these Terms and Policies at any time. Changes become effective immediately upon posting to the Platform. Your continued use of the Platform after modifications indicates your acceptance of the updated terms. We recommend reviewing these terms periodically to stay informed of any updates. If you disagree with any changes, your only recourse is to discontinue use of the Platform. For significant changes, we may provide additional notice through email.
            </p>

            <p>
              <strong>18. CONTACT INFORMATION</strong><br/>
              If you have any questions about these Terms and Policies, please contact LearnHub support at support@learnhub.com. You may also contact us through our website's contact form. We will respond to inquiries within a reasonable timeframe. For technical support, please visit our help center or submit a support ticket. Our customer service team is available during business hours.
            </p>

            <p className="text-gray-600 italic">
              Last Updated: December 11, 2025<br/>
              LearnHub - Master & Innovate
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default PolicyPage
