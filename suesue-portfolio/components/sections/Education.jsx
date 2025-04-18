"use client";

import { motion } from "framer-motion";
import { GraduationCap, MapPin, Calendar, Briefcase } from "lucide-react";

const educationData = [
  {
    institution: "California Polytechnic State University, San Luis Obispo",
    location: "San Luis Obispo, CA",
    degree: "Bachelor of Science in Computer Science",
    dates: "Sept. 2024 – Jun. 2026",
  },
  {
    institution: "De Anza College",
    location: "Cupertino, CA",
    degree: "Associate degrees in Computer Science and Mathematics",
    dates: "Sept. 2022 – Jun. 2024",
  },
];

const workExperienceData = [
  {
    title: "International Center Front Desk Student Assistant",
    organization: "Cal Poly, San Luis Obispo",
    location: "San Luis Obispo, CA",
    dates: "Dec 2024 – Present",
    responsibilities: [
      "Manage data-driven projects supporting study abroad programs",
      "Create marketing content",
      "Engage with diverse student populations through in-person, phone, and email interactions"
    ]
  },
  {
    title: "Software Developer at Hack4Impact",
    organization: "Cal Poly, San Luis Obispo",
    location: "San Luis Obispo, CA",
    dates: "Oct. 2024 – Present",
    responsibilities: [
      "Collaborate with cross-functional teams to build software solutions for local nonprofits",
      "Technologies used: JavaScript, TypeScript, React, Next.js, Node.js, MongoDB"
    ]
  },
  {
    title: "Teaching and Mentorship Experience",
    organizations: [
      "Stanford University",
      "De Anza College",
      "ShareWorld Learning Center"
    ],
    dates: "Jun. 2023 – Present",
    responsibilities: [
      "Taught Stanford's CS106A (Intro to Python) to students globally in June 2023 and June 2024",
      "Tutored 80+ students in Advanced C++, Java, Python, and x86 Assembly",
      "Volunteered to teach Python to high school students"
    ]
  },
  {
    title: "Student Assistant at Admissions and Records",
    organization: "De Anza College",
    location: "Cupertino, CA",
    dates: "Jun. 2023 – Aug. 2024",
    responsibilities: [
      "Provided support for admissions and registration processes",
      "Handled in-person, phone, and email inquiries",
      "Performed database queries and data entry for PII-related projects"
    ]
  }
];

export default function Education() {
  return (
    <section id="education" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Education & <span className="bg-gradient-to-r from-purple-primary to-pink-accent bg-clip-text text-transparent">Experience</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My academic background and professional experience have equipped me with the 
            knowledge and skills needed to excel in the field of computer science.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Education Timeline */}
          <div>
            <h3 className="text-2xl font-bold mb-6 flex items-center">
              <GraduationCap className="mr-2 text-purple-primary" />
              <span className="bg-gradient-to-r from-purple-primary to-purple-secondary bg-clip-text text-transparent">Education</span>
            </h3>
            
            <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-1/2 before:w-[2px] before:bg-gradient-to-b before:from-purple-primary before:to-pink-accent before:h-full">
              {educationData.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative pl-10"
                >
                  <div className="absolute left-0 top-1 w-10 h-10 bg-gradient-to-br from-purple-primary to-pink-accent rounded-full flex items-center justify-center text-white shadow-custom">
                    {index + 1}
                  </div>
                  
                  <div className="bg-card p-5 rounded-lg shadow-custom border border-border hover:border-purple-primary/40 transition-all duration-300">
                    <h4 className="text-lg font-bold">{edu.institution}</h4>
                    <p className="bg-gradient-to-r from-purple-primary to-pink-accent bg-clip-text text-transparent font-medium">{edu.degree}</p>
                    
                    <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-sm text-muted-foreground">
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-1" />
                        {edu.location}
                      </div>
                      
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        {edu.dates}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          
          {/* Work Experience */}
          <div>
            <h3 className="text-2xl font-bold mb-6 flex items-center">
              <Briefcase className="mr-2 text-pink-accent" />
              <span className="bg-gradient-to-r from-purple-secondary to-pink-accent bg-clip-text text-transparent">Work Experience</span>
            </h3>
            
            <div className="space-y-6">
              {workExperienceData.map((work, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-card p-5 rounded-lg shadow-custom border border-border hover:border-pink-accent/40 transition-all duration-300"
                >
                  <h4 className="text-lg font-bold hover:bg-gradient-to-r hover:from-purple-secondary hover:to-pink-accent hover:bg-clip-text hover:text-transparent transition-all duration-300">{work.title}</h4>
                  <p className="bg-gradient-to-r from-purple-secondary to-pink-accent bg-clip-text text-transparent font-medium">
                    {work.organization || work.organizations?.join(", ")}
                  </p>
                  
                  <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-sm text-muted-foreground mb-3">
                    {work.location && (
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-1" />
                        {work.location}
                      </div>
                    )}
                    
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      {work.dates}
                    </div>
                  </div>
                  
                  <ul className="list-disc pl-5 text-sm space-y-1 text-foreground">
                    {work.responsibilities.map((resp, i) => (
                      <li key={i}>{resp}</li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 