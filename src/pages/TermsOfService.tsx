import Header from "@/components/Header";
import Footer from "@/components/Footer";

const TermsOfService = () => (
  <>
    <Header />
    <div className="bg-white min-h-screen pt-28 pb-24 px-4 md:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-black text-4xl md:text-5xl font-bold tracking-tight mb-8">Terms of Service</h1>
        <p className="text-gray-500 text-sm mb-12">Effective: January 15, 2024</p>

        <div className="space-y-10 text-gray-700 text-lg leading-relaxed">
          <section>
            <h2 className="text-black text-2xl font-semibold mb-4">1. Acceptance of Terms</h2>
            <p>
              By accessing and using the Shutter Theory Photography Academy website and enrolling in our courses,
              you agree to be bound by these Terms of Service. If you do not agree with any part of these terms,
              please do not use our services.
            </p>
          </section>

          <section>
            <h2 className="text-black text-2xl font-semibold mb-4">2. Course Enrollment</h2>
            <p>
              Enrollment in Shutter Theory courses is subject to availability. Upon successful payment, you will
              receive a confirmation email with course details, schedule, and access instructions. Course spots
              are limited to ensure personalized attention — class sizes are capped at 12 students per session.
            </p>
            <p className="mt-4">
              Students must be at least 16 years of age to enroll. Students under 18 require parental or guardian
              consent and a signed waiver before participating in any outdoor workshops.
            </p>
          </section>

          <section>
            <h2 className="text-black text-2xl font-semibold mb-4">3. Payment Terms</h2>
            <p>
              All course fees are listed in USD and must be paid in full before the course start date unless
              a payment plan has been arranged. We accept major credit cards, PayPal, and bank transfers.
              Payment plans are available for courses exceeding $500, with a 20% deposit required at enrollment.
            </p>
          </section>

          <section>
            <h2 className="text-black text-2xl font-semibold mb-4">4. Equipment Requirements</h2>
            <p>
              Students are expected to bring their own camera equipment unless otherwise stated. Beginner
              courses accommodate any camera type, including smartphones. Advanced and studio courses require
              a DSLR or mirrorless camera with manual controls. Loaner equipment is available for a $50/session
              rental fee — please reserve at least 48 hours in advance.
            </p>
          </section>

          <section>
            <h2 className="text-black text-2xl font-semibold mb-4">5. Code of Conduct</h2>
            <p>
              Students are expected to maintain a respectful and supportive learning environment. Harassment,
              discrimination, or disruptive behavior will not be tolerated and may result in removal from the
              course without refund. Photography of other students or instructors requires explicit consent.
            </p>
          </section>

          <section>
            <h2 className="text-black text-2xl font-semibold mb-4">6. Intellectual Property</h2>
            <p>
              All course materials, including lesson plans, presentations, handouts, and video recordings, are the
              intellectual property of Shutter Theory Photography Academy. Students may not reproduce, distribute,
              or share these materials without written permission. Photographs created by students during courses
              remain the property of the student.
            </p>
          </section>

          <section>
            <h2 className="text-black text-2xl font-semibold mb-4">7. Liability</h2>
            <p>
              Shutter Theory Photography Academy is not responsible for loss or damage to personal equipment
              during courses or workshops. Students participate in outdoor workshops and field trips at their
              own risk. We strongly recommend that all students carry adequate insurance for their photography
              equipment.
            </p>
          </section>
        </div>
      </div>
    </div>
    <Footer />
  </>
);

export default TermsOfService;
