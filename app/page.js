'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import { PhoneCall, HeartPulse, Home, Utensils, Child, User, Baby, Clock, ShieldCheck, Users, Calendar, MapPin, BabyIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useRef } from 'react';

export default function HomePage() {
  const services = [
    {
      icon: <HeartPulse className="w-8 h-8 text-blue-600" />,
      title: "24/7 Nursing Care",
      description: "Qualified nurses available round the clock for patients and elderly care at home.",
      features: ["Post-operative care", "Elderly assistance", "Medication management"]
    },
    {
      icon: <Baby className="w-8 h-8 text-blue-600" />,
      title: "Child Care",
      description: "Experienced caregivers for your children's safety and development.",
      features: ["Newborn care", "Homework assistance", "Playtime supervision"]
    },
    {
      icon: <Home className="w-8 h-8 text-blue-600" />,
      title: "Housekeeping",
      description: "Complete housekeeping services including cleaning and maintenance.",
      features: ["Daily cleaning", "Laundry services", "Home organization"]
    },
    {
      icon: <Utensils className="w-8 h-8 text-blue-600" />,
      title: "Cooking Services",
      description: "Delicious home-cooked meals prepared by experienced cooks.",
      features: ["Custom meal plans", "Diet-specific cooking", "Weekly menu planning"]
    },
    {
      icon: <User className="w-8 h-8 text-blue-600" />,
      title: "Male/Female Helpers",
      description: "Reliable helpers for all your household assistance needs.",
      features: ["Errand running", "Pet care", "Gardening help"]
    }
  ];

  const stats = [
    { value: "24/7", label: "Availability" },
    { value: "50+", label: "Satisfied Clients" },
    { value: "100%", label: "Verified Staff" },
    { value: "5+", label: "Service Categories" }
  ];

  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  return (
    <main ref={ref}>
      {/* Hero Section with Parallax Effect */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div 
          style={{ y: yBg }}
          className="absolute inset-0 bg-[url('/hero.webp')] bg-cover bg-center brightness-50"
        />
        
        <div className="relative z-10 text-center px-6">
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <motion.span 
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.5, type: "spring" }}
              className="inline-block bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-medium mb-4"
            >
              Since 2025
            </motion.span>
            <motion.h1
              className="text-4xl md:text-6xl font-bold text-white mb-6"
            >
              Compassionate <span className="text-blue-300">Home Care</span> Services
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto mb-8"
            >
              Experienced Nurses and Aya available 24x7 for all home care needs including elderly care, child care, cooking, and housekeeping.
            </motion.p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-blue-600 text-white px-8 py-3 rounded-full text-lg font-medium shadow-lg hover:bg-blue-700 transition transform hover:scale-105"
            >
              <PhoneCall className="mr-2" /> Call Now
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center bg-transparent border-2 border-white text-white px-8 py-3 rounded-full text-lg font-medium hover:bg-white hover:text-blue-900 transition"
            >
              Our Services
            </Link>
          </motion.div>
        </div>
        
        <motion.div 
          animate={{ y: [0, 15, 0] }}
          transition={{ 
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white"
        >
          <svg className="w-8 h-8 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-6 bg-blue-900 text-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="text-center p-6 bg-blue-800 rounded-xl"
              >
                <motion.p 
                  initial={{ scale: 0.8 }}
                  whileInView={{ scale: 1 }}
                  transition={{ type: "spring" }}
                  className="text-4xl font-bold mb-2 text-blue-300"
                >
                  {stat.value}
                </motion.p>
                <p className="text-lg">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.h2
              whileInView={{ scale: [0.95, 1] }}
              transition={{ duration: 0.5 }}
              className="text-3xl font-bold text-blue-900 mb-4"
            >
              Our Comprehensive Services
            </motion.h2>
            <motion.p
              initial={{ x: -20 }}
              whileInView={{ x: 0 }}
              transition={{ duration: 0.6 }}
              className="text-lg text-gray-700 max-w-3xl mx-auto"
            >
              We provide a wide range of professional home care services tailored to your specific needs.
            </motion.p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.5, 
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 100
                }}
                viewport={{ once: true, margin: "-100px" }}
                whileHover={{ 
                  y: -10,
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)"
                }}
                className="bg-blue-50 p-8 rounded-xl shadow-md hover:shadow-lg transition-all"
              >
                <div className="flex flex-col items-center text-center">
                  <motion.div 
                    whileHover={{ rotate: 10, scale: 1.1 }}
                    className="mb-4 p-4 bg-white rounded-full"
                  >
                    {service.icon}
                  </motion.div>
                  <h3 className="text-xl font-bold text-blue-800 mb-2">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <ul className="space-y-1 text-left w-full">
                    {service.features.map((feature, i) => (
                      <motion.li 
                        key={i}
                        whileHover={{ x: 5 }}
                        className="flex items-start text-gray-700"
                      >
                        <span className="text-blue-500 mr-2">•</span>
                        <span>{feature}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <Link
              href="/services"
              className="inline-flex items-center border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-full text-lg font-medium hover:bg-blue-600 hover:text-white transition group"
            >
              Explore All Services
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ 
                  duration: 1.5,
                  repeat: Infinity
                }}
                className="ml-2 group-hover:translate-x-1 transition"
              >
                →
              </motion.span>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* About Preview with Staggered Animation */}
      <section className="py-20 px-6 bg-gradient-to-r from-blue-50 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="lg:w-1/2"
            >
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ staggerChildren: 0.1 }}
                viewport={{ once: true }}
              >
                <motion.h2
                  initial={{ y: 20 }}
                  whileInView={{ y: 0 }}
                  className="text-3xl font-bold text-blue-900 mb-6"
                >
                  About Mitali Nurse & Aya
                </motion.h2>
                
                <motion.p 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  className="text-gray-700 mb-4"
                >
                  Established on <span className="font-semibold">2nd May 2025</span>, Mitali Nurse & Aya Service Centre is committed to providing high-quality home care services to families in Kolkata.
                </motion.p>
                
                <motion.p 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  className="text-gray-700 mb-6"
                >
                  Located near <span className="font-semibold">Birati Railway Station</span>, we offer experienced professionals for 24-hour care, ensuring the highest level of support for patients, children, and household tasks.
                </motion.p>
                
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                >
                  <Link
                    href="/about"
                    className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-full font-medium hover:bg-blue-700 transition group"
                  >
                    Our Story
                    <span className="ml-2 group-hover:rotate-90 transition-transform">
                      →
                    </span>
                  </Link>
                </motion.div>
              </motion.div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="lg:w-1/2"
            >
              <div className="relative">
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.6 }}
                  className="bg-white p-2 rounded-xl shadow-xl"
                >
                  {/* Placeholder for business image - replace with actual image */}
                  <Image
  src="/img/1 (1).png"
  alt="Mitali Nurse & Aya Business Card"
  width={600}
  height={400}
  className="rounded-lg shadow-lg object-cover w-full h-64 md:h-80"
/>

                </motion.div>
                
                <motion.div
                  initial={{ x: 20, y: 20, opacity: 0 }}
                  whileInView={{ x: 0, y: 0, opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  className="absolute -bottom-6 -left-6 bg-blue-600 text-white p-4 rounded-lg shadow-lg"
                >
                  <div className="flex items-center">
                    <Calendar className="w-6 h-6 mr-2" />
                    <span>Since 2025</span>
                  </div>
                </motion.div>
                
                <motion.div
                  initial={{ x: -20, y: -20, opacity: 0 }}
                  whileInView={{ x: 0, y: 0, opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                  className="absolute -top-6 -right-6 bg-white p-4 rounded-lg shadow-lg border border-blue-100"
                >
                  <div className="flex items-center">
                    <MapPin className="w-6 h-6 mr-2 text-blue-600" />
                    <span className="text-gray-800">Kolkata</span>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-6 bg-blue-900 text-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-blue-200 max-w-3xl mx-auto">
              Hear from families who have experienced our compassionate care services.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-blue-800 p-8 rounded-xl"
            >
              <div className="flex items-center mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg key={star} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="mb-6 italic">
                &quot;The nurse provided by Mitali was extremely professional and caring. She took excellent care of my elderly mother during her recovery.&quot;
              </p>
              <div className="flex items-center">
                <div className="bg-blue-700 w-10 h-10 rounded-full mr-4"></div>
                <div>
                  <p className="font-medium">Rahul Sharma</p>
                  <p className="text-blue-300 text-sm">Kolkata</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-blue-800 p-8 rounded-xl"
            >
              <div className="flex items-center mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg key={star} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="mb-6 italic">
                &quot;Their child care services are exceptional. The aya they sent was patient and loving with our toddler. Highly recommended!&quot;
              </p>
              <div className="flex items-center">
                <div className="bg-blue-700 w-10 h-10 rounded-full mr-4"></div>
                <div>
                  <p className="font-medium">Priya Patel</p>
                  <p className="text-blue-300 text-sm">Birati</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-blue-800 p-8 rounded-xl"
            >
              <div className="flex items-center mb-4">
                {[1, 2, 3, 4].map((star) => (
                  <svg key={star} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
                <svg className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>
              <p className="mb-6 italic">
                &quot;The cooking service has been a lifesaver for our busy family. The food is delicious and prepared with care.&quot;
              </p>
              <div className="flex items-center">
                <div className="bg-blue-700 w-10 h-10 rounded-full mr-4"></div>
                <div>
                  <p className="font-medium">Ananya Das</p>
                  <p className="text-blue-300 text-sm">Kolkata</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section with Animated Background */}
      <section className="relative py-20 px-6 overflow-hidden">
        <motion.div
          initial={{ scale: 1.2 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 bg-blue-900 opacity-95"
        />
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.3 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 bg-[url('/images/pattern.svg')] bg-repeat opacity-30"
        />
        
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-white mb-6"
          >
            Ready to Experience Quality Home Care?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl text-blue-200 mb-8"
          >
            Contact us today to discuss your requirements and we&apos;ll provide the perfect caregiver for your needs.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4, type: "spring" }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-white text-blue-900 px-8 py-3 rounded-full text-lg font-bold shadow-lg hover:bg-blue-100 transition transform hover:scale-105"
            >
              <PhoneCall className="mr-2" /> Call Now: 6291041613
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-transparent border-2 border-white text-white px-8 py-3 rounded-full text-lg font-medium hover:bg-white hover:text-blue-900 transition"
            >
              Send Message
            </Link>
          </motion.div>
        </div>
        
        {/* Floating animated elements */}
        <motion.div
          animate={{ 
            x: [0, 20, 0],
            y: [0, 15, 0],
            rotate: [0, 5, 0]
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/4 left-1/6 text-blue-300 opacity-70"
        >
          <HeartPulse className="w-12 h-12" />
        </motion.div>
        
        <motion.div
          animate={{ 
            x: [0, -15, 0],
            y: [0, 20, 0],
            rotate: [0, -5, 0]
          }}
          transition={{ 
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
          className="absolute bottom-1/3 right-1/5 text-blue-300 opacity-70"
        >
          <Home className="w-10 h-10" />
        </motion.div>
        
        <motion.div
          animate={{ 
            scale: [1, 1.1, 1],
            rotate: [0, 10, 0]
          }}
          transition={{ 
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
          className="absolute top-1/3 right-1/4 text-blue-300 opacity-70"
        >
          <BabyIcon className="w-8 h-8" />
        </motion.div>
      </section>
    </main>
  );
}