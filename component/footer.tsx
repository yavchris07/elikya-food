// components/Footer.tsx
import Link from 'next/link'
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-custom py-12 w-[70%] mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4">
              Elikya<span className="text-secondary">Foods</span>
            </h3>
            <p className="text-gray-400 mb-4">
              Transforming Africa&apos;s food future with sustainable supply chains.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-secondary transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-secondary transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-secondary transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-secondary transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          {/* <div>
            <h4 className="font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['Home', 'About', 'Solution & Impact', 'Invest & Partner'].map((item) => (
                <li key={item}>
                  <Link 
                    href={`/${item.toLowerCase().replace(' & ', '-').replace(' ', '-')}`}
                    className="text-gray-400 hover:text-secondary transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div> */}

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-lg mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-gray-400">
                <Mail size={18} className="text-secondary" />
                <a href="mailto:hello@elikyafoods.com" className="hover:text-secondary transition-colors">
                  hello@elikyafoods.com
                </a>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <Phone size={18} className="text-secondary" />
                <a href="tel:+243975830262" className="hover:text-secondary transition-colors">
                  +243 975 830 262
                </a>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <MapPin size={18} className="text-secondary" />
                <span>Kinshasa, Democratic Republic of Congo</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-bold text-lg mb-4">Stay Updated</h4>
            <p className="text-gray-400 mb-3">
              Subscribe to our newsletter for impact stories and opportunities.
            </p>
            <form className="flex flex-col gap-3">
              <input
                type="email"
                placeholder="Your email"
                className="px-4 py-2 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-gray-800 hover:bg-gray-600 rounded-lg font-semibold transition-colors cursor-pointer"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Elikya Foods. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}