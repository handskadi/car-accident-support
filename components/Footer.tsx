import Image from "next/image";
import Link from "next/link";

interface FooterProps {
  phoneNumber?: string;
  showClaimsLink?: boolean;
}

const Footer: React.FC<FooterProps> = ({
}) => {
  const currentYear = new Date().getFullYear();

  return (
    <>
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
          <p className="text-xs">© {currentYear} Car Accident Support. All rights reserved.</p>
        </div>
      </footer>
    </>

  );
};

export default Footer;
