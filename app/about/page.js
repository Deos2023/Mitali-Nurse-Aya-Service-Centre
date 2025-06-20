'use client';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Users, ShieldCheck, HeartPulse, Award, PhoneCall } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function AboutPage() {
  const milestones = [
    {
      year: "2025",
      title: "Founded",
      description: "Mitali Nurse & Aya Service Centre established in Kolkata"
    },
    {
      year: "2025",
      title: "First 50 Clients",
      description: "Served our first 50 satisfied families within 3 months"
    },
    {
      year: "2026",
      title: "Expanded Team",
      description: "Grew our team to 25+ experienced caregivers"
    },
    {
      year: "Present",
      title: "Trusted Provider",
      description: "Recognized as a leading home care service in Kolkata"
    }
  ];

  const teamValues = [
    {
      icon: <HeartPulse className="w-8 h-8 text-blue-600" />,
      title: "Compassion",
      description: "We care deeply about every client&apos;s wellbeing"
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-blue-600" />,
      title: "Integrity",
      description: "Honest and ethical in all our dealings"
    },
    {
      icon: <Users className="w-8 h-8 text-blue-600" />,
      title: "Professionalism",
      description: "Highly trained and certified staff"
    },
    {
      icon: <Award className="w-8 h-8 text-blue-600" />,
      title: "Excellence",
      description: "Committed to delivering exceptional service"
    }
  ];

  return (
    <main className=" pb-16">
      {/* Hero Section */}
      <section className="relative py-20 px-6 bg-gradient-to-r from-blue-900 to-blue-700 text-white overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 bg-[url('/images/pattern.svg')] bg-repeat"
        />
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Our Story
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-xl text-blue-200 max-w-3xl mx-auto"
          >
            Providing compassionate home care services to Kolkata families since 2025
          </motion.p>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="lg:w-1/2"
            >
              <h2 className="text-3xl font-bold text-blue-900 mb-6">About Mitali Nurse & Aya</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  Founded on <span className="font-semibold">May 2, 2025</span>, Mitali Nurse & Aya Service Centre began with a simple mission: to provide reliable, compassionate home care services to families in Kolkata.
                </p>
                <p>
                  What started as a small team of dedicated caregivers has grown into a trusted service provider known for quality care and professional service.
                </p>
                <p>
                  Located at <span className="font-semibold">163/2, Kamal Park, Birati</span> (near Birati Railway Station), we serve families throughout Kolkata with a range of home care solutions.
                </p>
                <p>
                  Our team consists of experienced professionals who undergo rigorous training and background checks to ensure the highest standards of service.
                </p>
              </div>
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
                  whileHover={{ scale: 1.02 }}
                  className="bg-blue-50 p-4 rounded-xl shadow-lg overflow-hidden"
                >
                  {/* Placeholder for team image - replace with actual image */}
                  <Image
  src="/img/1 (1).png"
  alt="Mitali Nurse & Aya Business Card"
  width={600}
  height={400}
  className="rounded-lg shadow-lg object-cover w-full h-64 md:h-80"
/>

                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  className="absolute -bottom-6 -right-6 bg-blue-600 text-white p-6 rounded-lg shadow-lg"
                >
                  <div className="flex items-center">
                    <Users className="w-8 h-8 mr-3" />
                    <div>
                      <p className="text-2xl font-bold">25+</p>
                      <p className="text-sm">Trained Professionals</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 px-6 bg-blue-50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-blue-900 mb-4">Our Mission & Vision</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Guiding principles that drive everything we do
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-xl shadow-md"
            >
              <div className="flex items-center mb-4">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <HeartPulse className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-blue-800">Our Mission</h3>
              </div>
              <p className="text-gray-700">
                To provide compassionate, reliable, and professional home care services that enhance the quality of life for our clients and peace of mind for their families. We are committed to delivering exceptional care tailored to each individual&apos;s needs.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-xl shadow-md"
            >
              <div className="flex items-center mb-4">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <Award className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-blue-800">Our Vision</h3>
              </div>
              <p className="text-gray-700">
                To become Kolkata&apos;s most trusted home care provider, recognized for our exceptional service standards, compassionate caregivers, and innovative approaches to personalized home care solutions.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-blue-900 mb-4">Our Journey</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Milestones in our growth and development
            </p>
          </motion.div>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="hidden md:block absolute left-1/2 h-full w-1 bg-blue-200 transform -translate-x-1/2"></div>
            
            <div className="space-y-12 md:space-y-0">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`relative flex flex-col md:flex-row ${index % 2 === 0 ? 'md:text-right md:flex-row-reverse' : 'md:text-left'} items-center gap-6`}
                >
                  <div className={`md:w-5/12 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="bg-blue-100 p-6 rounded-lg shadow-sm"
                    >
                      <p className="text-blue-900 font-bold text-lg mb-1">{milestone.year}</p>
                      <h3 className="text-xl font-semibold text-blue-800 mb-2">{milestone.title}</h3>
                      <p className="text-gray-700">{milestone.description}</p>
                    </motion.div>
                  </div>
                  <div className="md:w-2/12 flex justify-center">
                    <motion.div
                      whileHover={{ scale: 1.2 }}
                      className="w-6 h-6 bg-blue-600 rounded-full relative z-10"
                    />
                  </div>
                  <div className="md:w-5/12"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-6 bg-blue-50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-blue-900 mb-4">Our Core Values</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              The principles that guide our team every day
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamValues.map((value, index) => (
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
                    {value.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-blue-800 mb-2">{value.title}</h3>
                <p className="text-gray-700">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-blue-900 mb-4">Our Team</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Meet the dedicated professionals behind Mitali Nurse & Aya
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Anil Sarkar",
                role: "Founder & Director",
                bio: "With over 10 years in healthcare management, Anil established Mitali to provide quality home care services."
              },
              {
                name: "Priya Chatterjee",
                role: "Head Nurse",
                bio: "Registered nurse with 8 years experience in geriatric and post-operative care."
              },
              {
                name: "Rahul Banerjee",
                role: "Operations Manager",
                bio: "Ensures smooth service delivery and client satisfaction."
              }
            ].map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-blue-50 rounded-xl overflow-hidden shadow-md"
              >
                <div className="bg-gray-300 h-48 flex items-center justify-center text-gray-600">
                  Team Member Photo
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-blue-900 mb-1">{member.name}</h3>
                  <p className="text-blue-700 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-700">{member.bio}</p>
                </div>
              </motion.div>
            ))}
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
            Want to Join Our Team?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl text-blue-200 mb-8"
          >
            We&apos;re always looking for compassionate caregivers to join our team
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
              <PhoneCall className="mr-2" /> Contact Us
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center bg-transparent border-2 border-white text-white px-8 py-3 rounded-full text-lg font-medium hover:bg-white hover:text-blue-900 transition"
            >
              Our Services
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}