import Header from "@/components/Header";
import Footer from "@/components/Footer";

const RefundPolicy = () => (
  <>
    <Header />
    <div className="bg-white min-h-screen pt-28 pb-24 px-4 md:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-black text-4xl md:text-5xl font-bold tracking-tight mb-8">Refund Policy</h1>
        <p className="text-gray-500 text-sm mb-12">Last updated: January 15, 2024</p>

        <div className="space-y-10 text-gray-700 text-lg leading-relaxed">
          <section>
            <h2 className="text-black text-2xl font-semibold mb-4">Our Commitment</h2>
            <p>
              At Shutter Theory, we're committed to delivering exceptional photography education. We understand
              that plans change, and we've designed our refund policy to be fair and transparent for all students.
            </p>
          </section>

          <section>
            <h2 className="text-black text-2xl font-semibold mb-4">Full Refund (100%)</h2>
            <div className="bg-gray-50 p-6 rounded-xl">
              <p className="font-semibold text-black mb-2">14+ days before course start date</p>
              <p>
                Cancel your enrollment at least 14 days before the course begins and receive a full refund.
                Refunds are processed within 5–7 business days to your original payment method.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-black text-2xl font-semibold mb-4">Partial Refund (50%)</h2>
            <div className="bg-gray-50 p-6 rounded-xl">
              <p className="font-semibold text-black mb-2">7–13 days before course start date</p>
              <p>
                Cancellations made between 7 and 13 days before the course start date are eligible for a 50%
                refund. Alternatively, you may transfer your enrollment to a future session at no additional cost.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-black text-2xl font-semibold mb-4">No Refund</h2>
            <div className="bg-gray-50 p-6 rounded-xl">
              <p className="font-semibold text-black mb-2">Less than 7 days before course start date</p>
              <p>
                Cancellations within 7 days of the course start date are not eligible for a refund. However,
                you may transfer your spot to another person or defer to a future session (subject to availability,
                one deferral per enrollment).
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-black text-2xl font-semibold mb-4">Course Cancellation by Shutter Theory</h2>
            <p>
              In the rare event that we need to cancel a course due to insufficient enrollment, instructor
              illness, or severe weather, you will receive a full refund or the option to transfer to an
              alternative session. We will notify you at least 48 hours in advance whenever possible.
            </p>
          </section>

          <section>
            <h2 className="text-black text-2xl font-semibold mb-4">Satisfaction Guarantee</h2>
            <p>
              If you're not satisfied after the first session of any multi-session course, contact us within
              24 hours and we'll work with you to find a solution — whether that's switching to a different
              course level, providing additional support, or issuing a prorated refund for remaining sessions.
            </p>
          </section>

          <section>
            <h2 className="text-black text-2xl font-semibold mb-4">How to Request a Refund</h2>
            <p>
              Email us at{" "}
              <a href="mailto:hello@shuttertheory.com" className="text-amber-600 hover:text-amber-500 underline">
                hello@shuttertheory.com
              </a>{" "}
              with your enrollment confirmation number and reason for cancellation. We aim to respond to all
              refund requests within 2 business days.
            </p>
          </section>
        </div>
      </div>
    </div>
    <Footer />
  </>
);

export default RefundPolicy;
