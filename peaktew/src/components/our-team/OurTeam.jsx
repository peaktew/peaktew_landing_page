import React, { useState } from "react";
import { motion } from "framer-motion";

const teamMembers = [
  {
    name: "Lucas",
    title: "Chief Executive Officer",
    description: "The visionary behind Peaktew.",
    image: "Lucas.png",
  },
  {
    name: "Andrea",
    title: "Chief Financial Officer",
    description: "The financial powerhouse behind Peaktew.",
    image: "Andrea.jpg",
  },
  {
    name: "Jack",
    title: "Chief Design Officer",
    description: "The creative visionary behind Peaktew.",
    image: "Jack.jpg",
  },
  {
    name: "Mak",
    title: "General Counsel",
    description: "",
    image: "Mak.jpeg",
  },
  {
    name: "Vivian",
    title: "Talent Acquisition",
    description: "",
    image: "Vivian.jpg",
  },
  {
    name: "Aljun",
    title: "Talent Acquisition",
    description: "",
    image: "Aljun.jpg",
  },
  {
    name: "Stefanniya",
    title: "Talent Acquisition",
    description: "",
    image: "Stefaniya.jpg",
  },
  {
    name: "Sahnnon",
    title: "Talent Acquisition",
    description: "",
    image: "Shannon.jpeg",
  },
  {
    name: "Hamida",
    title: "Senior UI Designer",
    description: "",
    image: "Hamida.png",
  },
  {
    name: "Yuting",
    title: "UI Designer",
    description: "",
    image: "Yuting.jpg",
  },
  {
    name: "Siluni",
    title: "UX Designer",
    description: "",
    image: "Siluni.jpeg",
  },
  {
    name: "Erin",
    title: "Brand Designer",
    description: "",
    image: "Erin.jpeg",
  },
  {
    name: "Krapanshu",
    title: "Front End Manager Android",
    description: "",
    image: "Krapanshu.jpeg",
  },
  {
    name: "Simon",
    title: "Front End Developer Android",
    description: "",
    image: "Simon.jpeg",
  },
  {
    name: "Brice",
    title: "Front End Developer Android",
    description: "",
    image: "Brice.jpeg",
  },
  {
    name: "Chukwudi",
    title: "Front End Developer Android",
    description: "",
    image: "Chukwudi.jpeg",
  },
  {
    name: "Chima",
    title: "Front End Manager iOS",
    description: "",
    image: "Chima.jpeg",
  },
  {
    name: "Caleb",
    title: "Front End Developer iOS",
    description: "",
    image: "Caleb.jpeg",
  },
  {
    name: "Andi",
    title: "Front End Developer iOS",
    description: "",
    image: "Andi.jpeg",
  },
  {
    name: "Emmanuel",
    title: "Back End Manager",
    description: "",
    image: "Emmrys.jpg",
  },
  {
    name: "Chris",
    title: "Senior Back End Developer 1",
    description: "",
    image: "Chris.jpeg",
  },
  {
    name: "Andy",
    title: "Senior Back End Developer 1",
    description: "",
    image: "Andy.jpeg",
  },
  {
    name: "Deny",
    title: "Back End Developer",
    description: "",
    image: "Deny.jpeg",
  },
];

const OurTeam = () => {
  const [page, setPage] = useState(0);
  const membersPerPage = 6;
  const maxPage = Math.floor(teamMembers.length / membersPerPage);

  const handleNext = () => setPage((prev) => (prev < maxPage ? prev + 1 : 0));
  const handlePrev = () => setPage((prev) => (prev > 0 ? prev - 1 : maxPage));

  const visibleMembers = teamMembers.slice(
    page * membersPerPage,
    (page + 1) * membersPerPage
  );

  return (
    <div className="px-6 sm:px-12 py-28 bg-white relative overflow-hidden">
      {/* Section Header */}
      <div className="max-w-6xl mx-auto mb-16">
        <h2 className="text-6xl font-extrabold text-[#6D28B2] mb-6">
          Our Team
        </h2>
        <div className="max-w-xl">
          <p className="text-xl font-semibold mb-3 text-gray-800">
            Meet the members who make it possible
          </p>
          <p className="text-gray-500">
            Look through the members of each department
          </p>
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
              src={`/src/assets/team_member/${member.image}`}
              alt={member.name}
              className="w-full h-52 object-cover object-center rounded-lg mb-4 bg-gray-100 transform hover:scale-95 transition-transform duration-200"
            />
            <h2 className="text-lg font-bold mb-1">{member.name}</h2>
            <h3 className="text-m font-bold mb-1">{member.title}</h3>
            <p className="text-sm text-gray-600">{member.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default OurTeam;
