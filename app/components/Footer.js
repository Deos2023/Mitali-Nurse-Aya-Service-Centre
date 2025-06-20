'use client'
import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Clock, Facebook, Instagram } from 'lucide-react'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-blue-900 to-blue-700 text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* About Column */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold mb-6 text-white">Mitali Nurse & Aya Service Centre</h3>
            <p className="text-blue-100 mb-6">
              Established in 2025, we provide compassionate and professional home care services including nursing, child care, and household assistance.
            </p>
            <div className="flex gap-4">
              <Link href="#" target="_blank" className="bg-blue-600 hover:bg-blue-800 p-2 rounded-full transition">
                <Facebook className="w-5 h-5" />
              </Link>
              <Link href="#" target="_blank" className="bg-blue-600 hover:bg-blue-800 p-2 rounded-full transition">
                <Instagram className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>

          {/* Services Column */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold mb-6 text-white">Our Services</h3>
            <ul className="space-y-3 text-blue-100">
              <li>24/7 Nursing Care</li>
              <li>Child Care Services</li>
              <li>Elderly Care Assistance</li>
              <li>Housekeeping & Cooking</li>
              <li>Male/Female Helpers</li>
            </ul>
          </motion.div>

          {/* Quick Links Column */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold mb-6 text-white">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link href="/" className="text-blue-100 hover:text-white transition">Home</Link></li>
              <li><Link href="/about" className="text-blue-100 hover:text-white transition">About Us</Link></li>
              <li><Link href="/services" className="text-blue-100 hover:text-white transition">Services</Link></li>
              <li><Link href="/contact" className="text-blue-100 hover:text-white transition">Contact</Link></li>
            </ul>
          </motion.div>

          {/* Contact Column */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold mb-6 text-white">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex flex-col items-start gap-3">
                <div className='flex gap-2'>
                  <Phone className="w-5 h-5 mt-1 text-blue-300" />
                  <div>
                    <p className="text-blue-100">6291041613</p>
                  </div>
                </div>
                <div className='flex gap-2'>
                  <Phone className="w-5 h-5 mt-1 text-blue-300" />
                  <div>
                    <p className="text-blue-100">9123900699</p>
                  </div>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 mt-1 text-blue-300" />
                <span className="text-blue-100">sarkaranil2017@gmail.com</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 mt-1 text-blue-300" />
                <span className="text-blue-100">
                  163/2, Kamal Park, Birati, Kolkata - 700051<br />
                  Near Birati Railway Station
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 mt-1 text-blue-300" />
                <span className="text-blue-100">24 hours, 7 days a week</span>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="border-t border-blue-400 my-12"
        />

        {/* Map Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="overflow-hidden shadow-xl rounded-lg mb-12"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3682.222863030761!2d88.4228143153434!3d22.64696608514056!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f89e62eb5a7a05%3A0x6a9a3b9b6c1e1b1e!2sBirati%20Railway%20Station!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            className="w-full"
          ></iframe>
        </motion.div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-6">
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-blue-100 text-sm text-center md:text-left"
          >
            © {new Date().getFullYear()} Mitali Nurse & Aya Service Centre. All rights reserved.<br />
            Website Developed & Maintained by Digital Exposure Online Services

          </motion.p>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex gap-6"
          >
            <a href="#" className="text-blue-200 hover:text-white text-sm transition">Privacy Policy</a>
            <a href="#" className="text-blue-200 hover:text-white text-sm transition">Terms of Service</a>
          </motion.div>
        </div>
      </div>
    </footer>
  )
}