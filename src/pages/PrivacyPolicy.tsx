import Header from "@/components/Header";
import Footer from "@/components/Footer";

const PrivacyPolicy = () => (
  <>
    <Header />
    <div className="bg-white min-h-screen pt-28 pb-24 px-4 md:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-black text-4xl md:text-5xl font-bold tracking-tight mb-8">Privacy Policy</h1>
        <p className="text-gray-500 text-sm mb-12">Last updated: January 15, 2024</p>

        <div className="space-y-10 text-gray-700 text-lg leading-relaxed">
          <section>
            <h2 className="text-black text-2xl font-semibold mb-4">1. Information We Collect</h2>
            <p>
              At Shutter Theory Photography Academy, we collect information you provide directly to us when you
              create an account, enroll in courses, book consultations, or communicate with us. This includes your
              name, email address, phone number, billing information, and any photography portfolio submissions.
            </p>
            <p className="mt-4">
              We also automatically collect certain information when you visit our website, including your IP address,
              browser type, device information, pages visited, and referring URL. We use cookies and similar
              technologies to enhance your browsing experience and analyze site traffic.
            </p>
          </section>

          <section>
            <h2 className="text-black text-2xl font-semibold mb-4">2. How We Use Your Information</h2>
            <ul className="list-disc pl-6 space-y-3">
              <li>Process course enrollments and manage your student account</li>
              <li>Send course materials, assignments, and feedback on your photography work</li>
              <li>Communicate about schedule changes, new course offerings, and academy events</li>
              <li>Process payments and send transaction confirmations</li>
              <li>Improve our website, courses, and overall student experience</li>
              <li>Respond to your comments, questions, and consultation requests</li>
            </ul>
          </section>

          <section>
            <h2 className="text-black text-2xl font-semibold mb-4">3. Sharing Your Information</h2>
            <p>
              We do not sell, trade, or rent your personal information to third parties. We may share your
              information with trusted service providers who assist us in operating our website, processing payments,
              and delivering courses — provided they agree to keep your information confidential.
            </p>
          </section>

          <section>
            <h2 className="text-black text-2xl font-semibold mb-4">4. Student Photography & Portfolio</h2>
            <p>
              Photographs submitted as part of coursework remain your intellectual property. With your explicit
              consent, we may feature exceptional student work in our gallery, marketing materials, or social media
              channels. You may withdraw this consent at any time by contacting us at hello@shuttertheory.com.
            </p>
          </section>

          <section>
            <h2 className="text-black text-2xl font-semibold mb-4">5. Data Security</h2>
            <p>
              We implement industry-standard security measures to protect your personal information, including
              SSL encryption, secure payment processing through Stripe, and regular security audits. However,
              no method of transmission over the Internet is 100% secure.
            </p>
          </section>

          <section>
            <h2 className="text-black text-2xl font-semibold mb-4">6. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us at{" "}
              <a href="mailto:hello@shuttertheory.com" className="text-amber-600 hover:text-amber-500 underline">
                hello@shuttertheory.com
              </a>{" "}
              or call us at +1 (555) 789-0123.
            </p>
          </section>
        </div>
      </div>
    </div>
    <Footer />
  </>
);

export default PrivacyPolicy;
