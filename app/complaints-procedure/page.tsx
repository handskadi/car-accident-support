import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const ComplaintsProcedure = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <main className="px-4 py-12 md:py-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-8">Complaints Procedure</h1>

          <div className="space-y-8">
            <section>
              <p className="text-base text-gray-700">
                At Car Accident Support, we value our clients and are committed to delivering high standards of service. If you are dissatisfied with any part of your experience with us, we encourage you to raise your concerns so we can address them effectively and fairly.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-4">How to Lodge a Complaint</h2>
              <p className="text-base text-gray-700">
                You can lodge a complaint in writing, by phone, or by email. We recommend submitting your complaint in writing to ensure we capture all the relevant information.
              </p>
              <ul className="list-disc pl-6 text-base text-gray-700 mt-4 space-y-2">
                <li><strong>Phone:</strong> 1300 564 150</li>
                <li><strong>Email:</strong> info@caraccidentsupport.online</li>
                <li><strong>Mail:</strong> U 2b, 61-73 Parramatta Road, Five Dock, NSW, 2046</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-4">What Happens Next?</h2>
              <p className="text-base text-gray-700">
                Once we receive your complaint, we will acknowledge it within 7 business days. Our aim is to investigate and resolve complaints promptly and fairly. We may contact you for further information to assist with our review.
              </p>
              <p className="text-base text-gray-700 mt-4">
                We strive to provide a final response within 30 days. If we are unable to do so, we will keep you informed about the status of your complaint.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-4">Escalation and External Review</h2>
              <p className="text-base text-gray-700">
                If you are not satisfied with our final response, you can escalate your complaint to the Australian Financial Complaints Authority (AFCA).
              </p>
              <ul className="list-disc pl-6 text-base text-gray-700 mt-4 space-y-2">
                <li><strong>Website:</strong> www.afca.org.au</li>
                <li><strong>Email:</strong> info@afca.org.au</li>
                <li><strong>Phone:</strong> 1800 931 678 (free call)</li>
                <li><strong>Mail:</strong> GPO Box 3, Melbourne VIC 3001</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-4">Support for Vulnerable Clients</h2>
              <p className="text-base text-gray-700">
                We understand that some clients may require additional support in raising a complaint. We are committed to providing accessibility and reasonable adjustments to help you communicate with us effectively. Please let us know how we can assist you.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-4">Continuous Improvement</h2>
              <p className="text-base text-gray-700">
                All complaints are logged and reviewed as part of our continuous improvement process. We use your feedback to evaluate and enhance the quality of our services.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-4">Contact Us</h2>
              <p className="text-base text-gray-700">
                If you have any questions or need help submitting your complaint, please contact us directly.
              </p>
              <ul className="list-disc pl-6 text-base text-gray-700 mt-4 space-y-2">
                <li><strong>Phone:</strong> 1300 564 150</li>
                <li><strong>Email:</strong> info@caraccidentsupport.online</li>
              </ul>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ComplaintsProcedure;