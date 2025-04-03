import CallButton from "@/components/CallButton";
import Image from "next/image";
import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="w-full text-gray-800">
      {/* Header */}
      <nav className="w-full py-4 px-4 bg-white relative shadow">
        <div className="flex items-center justify-center gap-2">
          {/* <p className="text-md whitespace-nowrap font-bold">Superannuation claims</p>

          <p className="text-sm whitespace-nowrap">
            | Powered By
          </p> */}
          <Image
            src="/logo.svg"
            alt="Logo"
            width={80}
            height={39}
            priority
          />
        </div>
      </nav>

      {/* Hero */}
      <section className="flex flex-col items-center justify-center text-center bg-[#E2F2FC] w-full px-4 py-8 gap-4">
        <h1 className="text-4xl font-bold">Make a Claim</h1>
        <p className="max-w-[490px] text-base">
          Car Accident Support provides an independent, streamlined claims process for car insurance customers involved in a non‑fault accident. Our expert team is here to help you get back on the road quickly and with minimal stress.
          <br className="hidden md:block" />
        </p>
      </section>

      {/* Call to action */}
      <section className="flex flex-col items-center justify-center text-center w-full gap-4 px-4 py-6">
        <h2 className="text-sm font-bold uppercase">Call us now to report a claim</h2>
        <Link
          href="tel:1300 564 150"
          className="flex items-center justify-center gap-6 pl-12 pr-14 py-4 rounded-lg shadow-md bg-[#0D83C7] hover:bg-[#103052] text-white"
        >
          <div className="animate-swing text-white">
            <svg viewBox="0 0 512 512" width="20" height="20" fill="currentColor">
              <path d="M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z" />
            </svg>
          </div>
          <span className="font-extrabold text-lg">1300 564 150</span>
        </Link>
        <div className="flex items-center gap-3">
          <div className="relative">
            <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-pulse">
              <div className="w-4 h-4 bg-blue-600/35 rounded-full"></div>
            </div>
          </div>
          <span className="text-sm mt-0.5">
            Estimated wait time: <span className="font-bold">under 3 minutes</span>
          </span>
        </div>
        <p className="max-w-[490px] text-base mt-4">Car Accident Support offers a fast, hassle‑free claims service for drivers who need
          an alternative to their insurer’s process. Our Australian‑based claims advisors are on hand 24/7 to provide prompt, expert
          assistance when you need it most.</p>
      </section>

      {/* Section 1 */}
      <section className="w-full px-4 lg:px-80 py-8 ">
        <div className="flex flex-col lg:flex-row items-center gap-10 pt-8 border-t border-gray-200 ">
          <div className="lg:w-1/2">
            <Image
              src="/images/mechanic-1.png"
              alt="Family image"
              width={768}
              height={432}
              className="rounded-md"
            />
          </div>
          <div className="lg:w-1/2">
            <h2 className="text-base font-semibold mb-4">We'll need:</h2>
            <ul className="list-disc pl-5 text-base">

              <li>Your name and vehicle registration number.</li>
              <li>A brief description of the accident.</li>
              <li>The location where the accident occurred.</li>
              <li>Contact details of any other parties involved, including passengers and witnesses.</li>
            </ul>
            <p className="my-6 text-gray-700">Your dedicated claim advisor will explain your options and guide you through every step of the process. Once your incident report is completed,
              we’ll arrange repairs to your vehicle or liaise directly with your insurer to move your claim forward.</p>
            <CallButton />
          </div>
        </div>
      </section>

      {/* Section 2 */}
      <section className="w-full px-4 lg:px-80 py-8 ">
        <div className="flex flex-col lg:flex-row-reverse items-center gap-10 pt-8 border-t border-gray-200 ">
          <div className="lg:w-1/2">
            <Image
              src="/images/mechanic-2.png"
              alt="Family picnic"
              width={768}
              height={432}
              className="rounded-md"
            />
          </div>
          <div className="lg:w-1/2">
            <h2 className="text-xl font-semibold mb-4">Making a Vehicle Repair Claim</h2>
            <p className="mb-4 text-gray-700">
              If your vehicle has sustained damage—whether from a minor scratch or a major collision—Car Accident
              Support is here to assist you with a seamless repair process.
            </p>
            <p className="mb-6 text-gray-700">To initiate a claim and arrange for repairs, please call 1300 564 150.</p>
            <CallButton />
          </div>
        </div>
      </section>

      {/* Section 3 */}
      <section className="w-full px-4 lg:px-80 py-8 ">
        <div className="flex flex-col lg:flex-row items-center gap-10 pt-8 border-t border-gray-200 ">
          <div className="lg:w-1/2">
            <Image
              src="/images/mechanic-3.png"
              alt="Family image"
              width={768}
              height={432}
              className="rounded-md"
            />
          </div>
          <div className="lg:w-1/2">
            <h2 className="text-base font-semibold mb-4">Our dedicated team will:</h2>
            <ul className="list-disc mb-6 pl-5 text-base">
              <li>Assess the Damage: Provide a thorough evaluation of your vehicle's condition.​</li>
              <li>Coordinate Repairs: Arrange for necessary repairs at our specialist repair centre,
                equipped with state-of-the-art machinery and staffed by experienced technicians.​</li>
              <li>Ensure Quality: Implement exhaustive quality assurance measures to guarantee your
                vehicle is restored to its optimal condition.​</li>
            </ul>
            <CallButton />
          </div>
        </div>
      </section>

      {/* Feature Highlights Section */}
      <section className="relative w-full bg-[#D6E7FF] overflow-hidden py-16">
        <div className="relative w-full px-4 lg:px-80 z-10 flex flex-col lg:flex-row items-center justify-between gap-10">

          {/* Left Column - Text Content */}
          <div className="flex flex-col items-start gap-4 lg:w-1/2">
            <p className="text-lg font-medium">
              By choosing Car Accident Support, you can trust that your vehicle is in expert hands, ensuring a smooth and efficient repair experience.
            </p>

            <div className="flex flex-wrap gap-2">
              {[
                "No excess payment", "NCD Protection", "24/7 Support",
                "Crash Experts", "Panel Beating", "Repair Service",
                "Quality Assured", "Paint Matching"
              ].map((item, idx) => (
                <span key={idx} className="text-sm bg-white text-gray-800 rounded-full px-3 py-1 border">
                  {item}
                </span>
              ))}
            </div>

            <Link
              href="tel:1300564150"
              className="mt-4 inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#0D83C7] text-white font-bold rounded-lg hover:bg-[#103052] shadow"
            >
              <svg viewBox="0 0 512 512" width="20" height="20" fill="currentColor">
                <path d="M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z" />
              </svg>
              1300 564 150
            </Link>
          </div>
        </div>

        {/* Right-hand Image full height */}
        <div className="absolute top-0 right-10 h-full hidden lg:block z-0">
          <Image
            src="/images/hand.png"
            alt="Hand with wrench"
            width={400}
            height={800}
            className="h-full w-auto object-contain"
          />
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-white py-16 px-4 w-full text-center">
        <h2 className="text-3xl font-bold mb-10">Testimonials</h2>
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
          {[
            {
              name: "Anne Rogers",
              text: "Absolutely thrilled with the colour-matched paint job on my car after a scratch. The skilled technicians seamlessly restored it, making it look brand new. Exceptional service and craftsmanship, highly recommended!",
            },
            {
              name: "Paul Foster",
              text: "Following a smash, I brought my car in for repairs. The team exceeded my expectations with their professionalism and top-notch work. My car looks and drives like new again. Outstanding service!",
            },
            {
              name: "Heather Ross",
              text: "Post-accident, they masterfully reshaped my car’s panels to perfection. The results were astonishing – my vehicle looks untouched! The team’s skill and dedication truly shine through. Highly recommend!",
            }
          ].map((testimonial, idx) => (
            <div
              key={idx}
              className="bg-gray-50 border rounded-lg shadow px-6 py-6 text-left"
            >
              <div className="flex items-center gap-1 mb-3 text-yellow-500">
                {Array(5).fill(0).map((_, starIdx) => (
                  <svg key={starIdx} fill="currentColor" viewBox="0 0 20 20" width={18} height={18}>
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.13 3.49a1 1 0 0 0 .95.69h3.67c.969 0 1.371 1.24.588 1.81l-2.97 2.16a1 1 0 0 0-.364 1.118l1.13 3.49c.3.921-.755 1.688-1.54 1.118l-2.97-2.16a1 1 0 0 0-1.176 0l-2.97 2.16c-.784.57-1.838-.197-1.54-1.118l1.13-3.49a1 1 0 0 0-.364-1.118l-2.97-2.16c-.783-.57-.38-1.81.588-1.81h3.67a1 1 0 0 0 .95-.69l1.13-3.49z" />
                  </svg>
                ))}
              </div>
              <p className="mb-4 text-gray-700">{testimonial.text}</p>
              <p className="text-sm font-semibold text-gray-800">{testimonial.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQs */}
      <section className="flex flex-col w-full px-4 pt-20 pb-8 gap-2 lg:px-80">
        <h2 className="text-3xl font-bold text-center pb-3">FAQ</h2>
        {[
          {
            q: "What is a Smash Repairer?",
            a: "A smash repairer specializes in mending vehicles damaged in accidents or collisions by addressing body damage, replacing parts, and repainting to reinstate the vehicle’s original appearance."
          },
          {
            q: "Which Vehicles Can Be Repaired?",
            a: "We can repair a variety of vehicles, such as cars, trucks, motorcycles, and commercial vehicles."
          },
          {
            q: "What Services Are Offered?",
            a: "Our repair centre provides services like collision repair, dent removal, painting, and mechanical repairs."
          },
          {
            q: "How Long Will My Vehicle Repair Take?",
            a: "Repair duration depends on the extent of damage. We’ll supply a time estimate when you bring your vehicle to us."
          },
          {
            q: "What Should I Do in an Accident That’s Not My Fault?",
            a: "Take photos of the scene, vehicle damage, and collect contact and insurance information of others involved and witnesses. Then, contact us at 1300 564 150."
          },
          {
            q: "Are You an Insurance Provider?",
            a: "No, we are an independent smash repair business committed to restoring damaged vehicles to their pre-accident state."
          }
        ].map((item, index) => (
          <details
            key={index}
            className="bg-[#F5F5F5] border border-[#D4D4D4] rounded-md px-4 py-3"
          >
            <summary className="cursor-pointer text-base font-bold text-gray-800">
              {item.q}
            </summary>
            <div className="text-base pt-2 text-gray-700 whitespace-pre-line">
              {item.a}
            </div>
          </details>
        ))}
      </section>

      {/* CTA Footer Section */}
      <section className="relative bg-[#103052] w-full mt-4 overflow-hidden text-white">
        <div className="absolute w-full bg-white" style={{ borderBottomLeftRadius: '100% 80%', borderBottomRightRadius: '100% 80%' }}>
          <h2 className="text-center text-2xl font-bold py-4 text-black">Car insurance claims</h2>
        </div>
        <div className="pt-24 pb-8 flex flex-col items-center justify-center gap-4">
          <p className="text-base">Call us anytime on</p>
          <Link
            href="tel:1300 564 150"
            className="flex items-center justify-center gap-6 pl-12 pr-14 py-4 rounded-lg shadow-md bg-white text-black"
          >
            <div className="animate-[ring_1s_ease-in-out_infinite]">📞</div>
            <span className="font-extrabold text-lg">1300 564 150</span>
          </Link>
          <p className="text-base">Lines are open 24/7 all year.</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full bg-white text-sm text-gray-600 px-4 py-8 lg:px-80">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col gap-4">

            <Image
              src="/logo.svg"
              alt="Firths Logo"
              width={227}
              height={71}
              priority
            />
          </div>
          <div>
            <h3 className="font-bold mb-2">Contact Us</h3>
            <ul className="space-y-2">
              <li><Link href="tel:1300 564 150" className="underline">1300 564 150</Link></li>
              <li>info@caraccidentsupport.online</li>
              <li>U 2b, 61-73 Parramatta Road,<br />Five Dock, NSW, 2046,<br /> Australia</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-2">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/complaints-procedure">Complaints Procedure</Link></li>
              <li><Link href="/privacy-policy">Privacy Policy</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-200 space-y-4">
          <p className="text-xs">Car Accident Support is a trading style of Gabi Taji. ABN: 91 390 400 411. Registered address: U 2b, 61-73 Parramatta Road, Five Dock, NSW, 2046</p>
          <p className="text-xs">Disclaimer: Car Accident Support is committed to delivering the best possible service and support while ensuring you have all the information needed to make informed decisions. Please note that while we outline the benefits of our services, the availability of these benefits may vary based on the specifics of your accident. In some cases, especially where fault is determined, certain advantages may be limited. Our aim is to support you every step of the way and help you navigate any challenges confidently.</p>
          <p className="text-xs">© 2025 Car Accident Support. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
