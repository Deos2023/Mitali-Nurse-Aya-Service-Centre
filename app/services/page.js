'use client';
import { motion } from 'framer-motion';
import { HeartPulse, Baby, Home, Utensils, User, Clock, ShieldCheck, Users, Check, PhoneCall } from 'lucide-react';
import Link from 'next/link';

export default function ServicesPage() {
  const services = [
    {
      icon: <HeartPulse className="w-10 h-10 text-blue-600" />,
      title: "24/7 Nursing Care",
      description: "Professional nursing care for patients at home, including medication management, wound care, and vital monitoring.",
      features: [
        "Post-operative care",
        "Elderly care with compassion",
        "Chronic illness management",
        "Palliative care support",
        "Medication administration",
        "Physiotherapy assistance"
      ],
      highlight: "Our nurses are trained in geriatric care and post-hospitalization recovery"
    },
    {
      icon: <Baby className="w-10 h-10 text-blue-600" />,
      title: "Child Care Services",
      description: "Experienced caregivers to look after your children with love and attention.",
      features: [
        "Newborn care specialists",
        "Toddler supervision",
        "Homework assistance",
        "Developmental activities",
        "Meal preparation for children",
        "School pickup/dropoff"
      ],
      highlight: "All child caregivers are certified in pediatric first aid and CPR"
    },
    {
      icon: <Home className="w-10 h-10 text-blue-600" />,
      title: "Complete Housekeeping",
      description: "Thorough housekeeping services to maintain your home clean and organized.",
      features: [
        "Daily cleaning routines",
        "Laundry and ironing",
        "Utensil cleaning",
        "Home organization",
        "Groceries management",
        "Deep cleaning services"
      ],
      highlight: "Customizable cleaning schedules to fit your family's needs"
    },
    {
      icon: <Utensils className="w-10 h-10 text-blue-600" />,
      title: "Professional Cooking",
      description: "Delicious and nutritious home-cooked meals prepared by experienced cooks.",
      features: [
        "Custom meal plans",
        "Diet-specific cooking (diabetic, cardiac, etc.)",
        "Weekly menu planning",
        "Special occasion catering",
        "Nutritionally balanced meals",
        "Food storage management"
      ],
      highlight: "Our cooks can accommodate any dietary restrictions or preferences"
    },
    {
      icon: <User className="w-10 h-10 text-blue-600" />,
      title: "Household Helpers",
      description: "Reliable male and female helpers for all your household assistance needs.",
      features: [
        "Errand running",
        "Pet care services",
        "Gardening help",
        "Elderly companionship",
        "Shopping assistance",
        "General household support"
      ],
      highlight: "Helpers are available for both short-term and long-term engagements"
    }
  ];

  const whyChooseUs = [
    {
      icon: <Clock className="w-8 h-8 text-blue-600" />,
      title: "24/7 Availability",
      description: "Emergency services available any time of day or night"
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-blue-600" />,
      title: "Verified Professionals",
      description: "Thorough background checks and reference verification"
    },
    {
      icon: <Users className="w-8 h-8 text-blue-600" />,
      title: "Experienced Staff",
      description: "Minimum 3 years experience for all our caregivers"
    },
    {
      icon: <Check className="w-8 h-8 text-blue-600" />,
      title: "Quality Assurance",
      description: "Regular quality checks and client feedback system"
    }
  ];

  return (
    <main className=" pb-16">
      {/* Hero Section */}
      <section className="relative py-20 px-6 bg-gradient-to-r from-blue-900 to-blue-700 text-white overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto text-center relative z-10"
        >
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Our Comprehensive Care Services
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl text-blue-100 max-w-3xl mx-auto mb-8"
          >
            Discover our range of professional home care services designed to meet your family&apos;s unique needs
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Link
              href="/contact"
              className="inline-flex items-center bg-white text-blue-900 px-8 py-3 rounded-full text-lg font-bold shadow-lg hover:bg-blue-100 transition transform hover:scale-105"
            >
              <PhoneCall className="mr-2" /> Book a Service Now
            </Link>
          </motion.div>
        </motion.div>

        {/* Animated background elements */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute -right-40 -top-40 w-80 h-80 border-4 border-blue-400 rounded-full opacity-20"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="absolute -left-20 -bottom-20 w-64 h-64 border-4 border-blue-300 rounded-full opacity-20"
        />
      </section>

      {/* All Services Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-blue-900 mb-4">Our Service Offerings</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              We provide a complete range of home care services with flexible options to suit your requirements
            </p>
          </motion.div>

          <div className="space-y-20">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-100px" }}
                className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center`}
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="lg:w-2/5 bg-blue-50 p-8 rounded-xl shadow-lg"
                >
                  <div className="flex justify-center mb-6">
                    <div className="bg-white p-4 rounded-full shadow-md">
                      {service.icon}
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-center text-blue-800 mb-4">{service.title}</h3>
                  <p className="text-gray-700 text-center mb-6">{service.description}</p>
                  <div className="bg-blue-100 p-4 rounded-lg">
                    <p className="text-blue-900 font-medium text-center">{service.highlight}</p>
                  </div>
                </motion.div>

                <div className="lg:w-3/5">
                  <h4 className="text-xl font-semibold text-blue-700 mb-4">Service Includes:</h4>
                  <ul className="grid md:grid-cols-2 gap-4">
                    {service.features.map((feature, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 * i }}
                        viewport={{ once: true }}
                        className="flex items-start bg-blue-50 p-4 rounded-lg"
                      >
                        <Check className="w-5 h-5 text-blue-600 mt-0.5 mr-3 flex-shrink-0" />
                        <span className="text-gray-800">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 px-6 bg-blue-50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-blue-900 mb-4">Why Choose Mitali Nurse & Aya</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              What sets us apart in providing exceptional home care services
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="bg-white p-8 rounded-xl shadow-md text-center"
              >
                <div className="flex justify-center mb-4">
                  <div className="bg-blue-100 p-3 rounded-full">
                    {item.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-blue-800 mb-2">{item.title}</h3>
                <p className="text-gray-700">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Process Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-blue-900 mb-4">Our Simple Process</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Getting started with our services is quick and easy
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline */}
            <div className="hidden lg:block absolute left-1/2 h-full w-1 bg-blue-200 transform -translate-x-1/2"></div>
            
            <div className="space-y-12 lg:space-y-0">
              {[
                {
                  step: "1",
                  title: "Initial Consultation",
                  description: "We discuss your specific needs and requirements"
                },
                {
                  step: "2",
                  title: "Caregiver Matching",
                  description: "We select the most suitable professional for you"
                },
                {
                  step: "3",
                  title: "Service Agreement",
                  description: "We finalize the terms and schedule"
                },
                {
                  step: "4",
                  title: "Service Begins",
                  description: "Your caregiver starts providing services"
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`relative flex flex-col lg:flex-row ${index % 2 === 0 ? 'lg:text-right lg:flex-row-reverse' : 'lg:text-left'} items-center gap-8`}
                >
                  <div className={`lg:w-5/12 ${index % 2 === 0 ? 'lg:pl-8' : 'lg:pr-8'}`}>
                    <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center text-blue-800 font-bold text-2xl mb-4 mx-auto lg:mx-0">
                      {item.step}
                    </div>
                    <h3 className="text-xl font-semibold text-blue-800 mb-2">{item.title}</h3>
                    <p className="text-gray-700">{item.description}</p>
                  </div>
                  <div className="lg:w-2/12 flex justify-center">
                    <div className="w-8 h-8 bg-blue-600 rounded-full relative z-10"></div>
                  </div>
                  <div className="lg:w-5/12"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-blue-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-6"
          >
            Ready to Experience Our Services?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl text-blue-200 mb-8"
          >
            Contact us today to discuss your requirements and we&apos;ll provide the perfect solution
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-white text-blue-900 px-8 py-3 rounded-full text-lg font-bold shadow-lg hover:bg-blue-100 transition transform hover:scale-105"
            >
              <PhoneCall className="mr-2" /> Call Now
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-transparent border-2 border-white text-white px-8 py-3 rounded-full text-lg font-medium hover:bg-white hover:text-blue-900 transition"
            >
              Send Message
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}