import React, { useState } from 'react'
import { motion } from 'framer-motion'

// Fake members (extended)
const teamMembers = [
    {
      name: "Jane Doe",
      title: "Head of Design",
      description: "Design visionary leading our creative team.",
      image: "https://study.uq.edu.au/sites/default/files/styles/hero_banner_medium/public/2020-05/Architecture-and-planning-hero_1.jpg?itok=Ye_iltKo"
    },
    {
        name: "Jane Doe",
        title: "Head of Design",
        description: "Design visionary leading our creative team.",
        image: "https://study.uq.edu.au/sites/default/files/styles/hero_banner_medium/public/2020-05/Architecture-and-planning-hero_1.jpg?itok=Ye_iltKo"
      },
    {
      name: "John Smith",
      title: "Lead Developer",
      description: "Building the future one line at a time.",
      image: "https://study.uq.edu.au/sites/default/files/styles/hero_banner_medium/public/2020-05/Architecture-and-planning-hero_1.jpg?itok=Ye_iltKo"
    },
    {
      name: "Anna Johnson",
      title: "Marketing Strategist",
      description: "Connecting people to our mission.",
      image: "https://study.uq.edu.au/sites/default/files/styles/hero_banner_medium/public/2020-05/Architecture-and-planning-hero_1.jpg?itok=Ye_iltKo"
    },
    {
      name: "Tom Clark",
      title: "UX Researcher",
      description: "User needs, data-driven insights.",
      image: "https://study.uq.edu.au/sites/default/files/styles/hero_banner_medium/public/2020-05/Architecture-and-planning-hero_1.jpg?itok=Ye_iltKo"
    },
    {
      name: "Sara Williams",
      title: "Operations Lead",
      description: "Keeping everything on track.",
      image: "https://study.uq.edu.au/sites/default/files/styles/hero_banner_medium/public/2020-05/Architecture-and-planning-hero_1.jpg?itok=Ye_iltKo"
    },
    {
      name: "Lucas Green",
      title: "AI Engineer",
      description: "Making our systems smarter every day.",
      image: "https://study.uq.edu.au/sites/default/files/styles/hero_banner_medium/public/2020-05/Architecture-and-planning-hero_1.jpg?itok=Ye_iltKo"
    }
  ]

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
            <h3 className="text-lg font-bold mb-1">{member.title}</h3>
            <p className="text-sm text-gray-600">{member.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}

export default OurTeam