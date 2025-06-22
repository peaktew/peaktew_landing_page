import React, { useState } from 'react'
import { motion } from 'framer-motion'

const teamMembers = [
  {
    name: "Lucas",
    title: "Chief Executive Officer (CEO)",
    description: "Steering the company’s vision, growth, and strategic direction.",
    image: "https://study.uq.edu.au/sites/default/files/styles/hero_banner_medium/public/2020-05/Architecture-and-planning-hero_1.jpg?itok=Ye_iltKo"
  },
  {
    name: "Mak",
    title: "General Counsel (GC)",
    description: "Providing legal expertise and ensuring compliance across all business activities.",
    image: "https://study.uq.edu.au/sites/default/files/styles/hero_banner_medium/public/2020-05/Architecture-and-planning-hero_1.jpg?itok=Ye_iltKo"
  },
  {
    name: "Vivian",
    title: "Talent Acquisition Specialist",
    description: "Finding and attracting top talent to grow PeakTew’s diverse team.",
    image: "https://study.uq.edu.au/sites/default/files/styles/hero_banner_medium/public/2020-05/Architecture-and-planning-hero_1.jpg?itok=Ye_iltKo"
  },
  {
    name: "Aljun",
    title: "Talent Acquisition Specialist",
    description: "Driving recruitment strategies to secure high-performing professionals.",
    image: "https://study.uq.edu.au/sites/default/files/styles/hero_banner_medium/public/2020-05/Architecture-and-planning-hero_1.jpg?itok=Ye_iltKo"
  },
  {
    name: "Stefaniya",
    title: "Talent Acquisition Specialist",
    description: "Identifying key talent and nurturing long-term hiring pipelines.",
    image: "https://study.uq.edu.au/sites/default/files/styles/hero_banner_medium/public/2020-05/Architecture-and-planning-hero_1.jpg?itok=Ye_iltKo"
  },
  {
    name: "Shannon",
    title: "Talent Acquisition Specialist",
    description: "Ensuring effective hiring processes and cultural alignment.",
    image: "https://study.uq.edu.au/sites/default/files/styles/hero_banner_medium/public/2020-05/Architecture-and-planning-hero_1.jpg?itok=Ye_iltKo"
  },
  
  {
    name: "Andrea",
    title: "Chief Financial Officer (CFO)",
    description: "Overseeing financial strategy, planning, and long-term sustainability.",
    image: "https://study.uq.edu.au/sites/default/files/styles/hero_banner_medium/public/2020-05/Architecture-and-planning-hero_1.jpg?itok=Ye_iltKo"
  },
  {
    name: "Jack",
    title: "Chief Design Officer (CDO)",
    description: "Leading the creative direction and brand aesthetics of PeakTew.",
    image: "https://study.uq.edu.au/sites/default/files/styles/hero_banner_medium/public/2020-05/Architecture-and-planning-hero_1.jpg?itok=Ye_iltKo"
  },
  {
    name: "Hamida",
    title: "Senior UI Designer",
    description: "Crafting visually engaging and intuitive user interfaces.",
    image: "https://study.uq.edu.au/sites/default/files/styles/hero_banner_medium/public/2020-05/Architecture-and-planning-hero_1.jpg?itok=Ye_iltKo"
  },
  {
    name: "Yuting",
    title: "UI Designer",
    description: "Designing clean, accessible, and functional interfaces for users.",
    image: "https://study.uq.edu.au/sites/default/files/styles/hero_banner_medium/public/2020-05/Architecture-and-planning-hero_1.jpg?itok=Ye_iltKo"
  },
  {
    name: "Siluni",
    title: "UX Designer",
    description: "Improving user journeys and aligning design with user needs.",
    image: "https://study.uq.edu.au/sites/default/files/styles/hero_banner_medium/public/2020-05/Architecture-and-planning-hero_1.jpg?itok=Ye_iltKo"
  },
  {
    name: "Erin",
    title: "Brand Designer",
    description: "Maintaining brand consistency and crafting visual identity assets.",
    image: "https://study.uq.edu.au/sites/default/files/styles/hero_banner_medium/public/2020-05/Architecture-and-planning-hero_1.jpg?itok=Ye_iltKo"
  },
  {
    name: "Krapanshu",
    title: "Front-End Manager Android",
    description: "Managing and guiding Android development teams with technical excellence.",
    image: "https://study.uq.edu.au/sites/default/files/styles/hero_banner_medium/public/2020-05/Architecture-and-planning-hero_1.jpg?itok=Ye_iltKo"
  },
  {
    name: "Simon",
    title: "Front-End Developer",
    description: "Developing responsive and interactive user-facing features.",
    image: "https://study.uq.edu.au/sites/default/files/styles/hero_banner_medium/public/2020-05/Architecture-and-planning-hero_1.jpg?itok=Ye_iltKo"
  },
  {
    name: "Brice",
    title: "Front-End Developer",
    description: "Transforming design mockups into high-performance code.",
    image: "https://study.uq.edu.au/sites/default/files/styles/hero_banner_medium/public/2020-05/Architecture-and-planning-hero_1.jpg?itok=Ye_iltKo"
  },
  {
    name: "Chukwudi",
    title: "Front-End Developer",
    description: "Delivering smooth, scalable interfaces for modern web platforms.",
    image: "https://study.uq.edu.au/sites/default/files/styles/hero_banner_medium/public/2020-05/Architecture-and-planning-hero_1.jpg?itok=Ye_iltKo"
  },
  {
    name: "Chima",
    title: "Front-End Developer",
    description: "Writing clean, maintainable code for engaging front-end experiences.",
    image: "https://study.uq.edu.au/sites/default/files/styles/hero_banner_medium/public/2020-05/Architecture-and-planning-hero_1.jpg?itok=Ye_iltKo"
  },
  {
    name: "Caleb",
    title: "Front-End Developer",
    description: "Implementing cutting-edge features for web and mobile apps.",
    image: "https://study.uq.edu.au/sites/default/files/styles/hero_banner_medium/public/2020-05/Architecture-and-planning-hero_1.jpg?itok=Ye_iltKo"
  },
  {
    name: "Andi",
    title: "Front-End Developer",
    description: "Building elegant and functional UI components.",
    image: "https://study.uq.edu.au/sites/default/files/styles/hero_banner_medium/public/2020-05/Architecture-and-planning-hero_1.jpg?itok=Ye_iltKo"
  },
  {
    name: "Andy",
    title: "Senior Back-End Developer",
    description: "Designing scalable backend architecture and APIs.",
    image: "https://study.uq.edu.au/sites/default/files/styles/hero_banner_medium/public/2020-05/Architecture-and-planning-hero_1.jpg?itok=Ye_iltKo"
  },
  {
    name: "Chris",
    title: "Senior Back-End Developer",
    description: "Ensuring robust performance and secure server-side operations.",
    image: "https://study.uq.edu.au/sites/default/files/styles/hero_banner_medium/public/2020-05/Architecture-and-planning-hero_1.jpg?itok=Ye_iltKo"
  },
  {
    name: "Deny",
    title: "Back-End Developer",
    description: "Building APIs and backend logic to power the platform.",
    image: "https://study.uq.edu.au/sites/default/files/styles/hero_banner_medium/public/2020-05/Architecture-and-planning-hero_1.jpg?itok=Ye_iltKo"
  }
];

const OurTeam = () => {
  const [page, setPage] = useState(0)
  const membersPerPage = 6
  const maxPage = Math.floor(teamMembers.length / membersPerPage)

  const handleNext = () => setPage((prev) => (prev < maxPage ? prev + 1 : 0))
  const handlePrev = () => setPage((prev) => (prev > 0 ? prev - 1 : maxPage))

  const visibleMembers = teamMembers.slice(
    page * membersPerPage,
    (page + 1) * membersPerPage
  )

  return (
    <div className="px-6 sm:px-12 py-28 bg-white relative overflow-hidden">
      {/* Section Header */}
      <div className="max-w-6xl mx-auto mb-16">
        <h2 className="text-6xl font-extrabold text-[#6D28B2] mb-6">Our Team</h2>
        <div className="max-w-xl">
          <p className="text-xl font-semibold mb-3 text-gray-800">
            Meet the members who make it possible
          </p>
          <p className="text-gray-500">Look through the members of each department</p>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={handlePrev}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black text-white rounded-full p-3 z-10 hover:bg-gray-800"
      >
        &#8592;
      </button>
      <button
        onClick={handleNext}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black text-white rounded-full p-3 z-10 hover:bg-gray-800"
      >
        &#8594;
      </button>

      {/* Team Grid with animation */}
      <motion.div
        key={page}
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -50 }}
        transition={{ duration: 0.5 }}
        className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto"
      >
        {visibleMembers.map((member, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            className="border border-gray-200 rounded-2xl p-6 bg-white shadow-md hover:shadow-lg transition duration-200"
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-full h-52 object-cover rounded-lg mb-4 bg-gray-100"
            />
            <h3 className="text-lg font-bold mb-1">{member.name}</h3>
            <p className="text-sm text-gray-600">{member.title}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}

export default OurTeam