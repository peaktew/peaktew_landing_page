import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const departments = [
  {
    name: "Senior Management",
    members: [
      {
        name: "Lucas",
        title: "Chief Executive Officer",
        image: "Business/I- Business/Lucas (CEO).png",
      },
      {
        name: "Andrea",
        title: "Chief Financial Officer",
        image: "Finance/II- Finance/Andrea (CFO).jpg",
      },
      {
        name: "Jack",
        title: "Chief Design Officer",
        image: "Design/III- Design/Jack (CDO).jpg",
      },
      {
        name: "Andi",
        title: "Chief Technology Officer",
        image: "Technology/IV- Technology/Andi (CTO).jpeg",
      },
    ],
  },
  {
    name: "General Office",
    members: [
      {
        name: "Vivian",
        title: "HR Manager",
        image: "General Office/0- General Office/Vivian (HRM).jpg",
      },
      {
        name: "Aljun",
        title: "Talent Acquisition Manager",
        image: "General Office/0- General Office/Aljun (TAM).jpg",
      },
      {
        name: "Stefaniya",
        title: "HR Coordinator",
        image: "General Office/0- General Office/Stefaniya (HRC).jpg",
      },
      {
        name: "Maya",
        title: "Talent Acquisition Specialist",
        image: "General Office/0- General Office/Maya (TAS).jpg",
      },
      {
        name: "Nurul",
        title: "Talent Acquisition Specialist",
        image: "General Office/0- General Office/Nurul (TAS).jpg",
      },
      {
        name: "Sara",
        title: "Talent Acquisition Specialist",
        image: "General Office/0- General Office/Sara (TAS).jpg",
      },
    ],
  },
  {
    name: "Business",
    members: [
      {
        name: "Cilia",
        title: "Business Development Manager",
        image: "Business/I- Business/Cilia (BDM).png",
      },
      {
        name: "Nicole",
        title: "Business Development Graduate Specialist",
        image: "Business/I- Business/Nicole (BDGS).jpeg",
      },
      {
        name: "Andrea C",
        title: "Business Development Graduate Specialist",
        image: "Business/I- Business/Andrea C (BDGS1).jpg",
      },
      {
        name: "Ana",
        title: "Business Development Executive Specialist",
        image: "Business/I- Business/Ana (BDES).jpeg",
      },
      {
        name: "Anita",
        title: "Business Development Executive Specialist",
        image: "Business/I- Business/Anita (BDES).png",
      },
      {
        name: "Eve",
        title: "Digital Marketing Manager",
        image: "Business/I- Business/Eve (DMM).jpg",
      },
      {
        name: "Isaac",
        title: "Digital Content Producer",
        image: "Business/I- Business/Isaac (DCP).PNG",
      },
      {
        name: "Sinem",
        title: "Digital Content Producer",
        image: "Business/I- Business/Sinem (DCP).jpg",
      },
      {
        name: "Felissha",
        title: "Community Manager",
        image: "Business/I- Business/Felissha (CM).JPG",
      },
      {
        name: "Renee",
        title: "Community Manager",
        image: "Business/I- Business/Renee (CM).JPG",
      },
    ],
  },
  {
    name: "Finance",
    members: [
      {
        name: "Khin",
        title: "Assistant Finance Officer",
        image: "Finance/II- Finance/Khin (AFO).JPG",
      },
    ],
  },
  {
    name: "Design",
    members: [
      {
        name: "Hamida",
        title: "Senior UI Designer",
        image: "Design/III- Design/Hamida (SUI).png",
      },
      {
        name: "Yuting",
        title: "Senior UI Designer",
        image: "Design/III- Design/Yuting (SUI). jpeg",
      },
      {
        name: "Luana",
        title: "UX Designer",
        image: "Design/III- Design/Luana (UX).jpeg",
      },
      {
        name: "Kian",
        title: "Brand Design Director",
        image: "Design/III- Design/Kian (BDD).png",
      },
    ],
  },
  {
    name: "Technology",
    members: [
      {
        name: "Jana",
        title: "Front End Manager (Android)",
        image: "Technology/IV- Technology/Jana (FEMA).png",
      },
      {
        name: "Alif",
        title: "Front End Developer (Android)",
        image: "Technology/IV- Technology/Alif (FEDA).jpeg",
      },
      {
        name: "Yatin",
        title: "Front End Developer (iOS)",
        image: "Technology/IV- Technology/Yatin (FEDI).jpeg",
      },
      {
        name: "Kristijan",
        title: "Back End Manager",
        image: "Technology/IV- Technology/Kristijan (BEM).jpg",
      },
      {
        name: "Mohammed",
        title: "Back End Developer",
        image: "Technology/IV- Technology/Mohammed (BED).jpg",
      },
    ],
  },
];

const MemberCard = ({ member, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.35, delay: index * 0.07 }}
    className="bg-white rounded-2xl shadow-md p-6 flex flex-col items-center text-center hover:shadow-lg transition-shadow duration-200"
  >
    <div className="w-full aspect-square rounded-xl overflow-hidden bg-gray-100 mb-4">
      <img
        src={`/team_member/${member.image}`}
        alt={member.name}
        className="w-full h-full object-cover object-center"
        onError={(e) => {
          e.target.style.display = "none";
        }}
      />
    </div>
    <h3 className="text-base font-bold text-gray-900 leading-tight">
      {member.name}
    </h3>
    <p className="text-sm font-semibold text-[#6D28B2] mt-1 leading-snug">
      {member.title}
    </p>
    {member.description ? (
      <p className="text-sm text-gray-500 mt-1.5 leading-snug">
        {member.description}
      </p>
    ) : null}
  </motion.div>
);

const DepartmentCarousel = ({ department }) => {
  const [page, setPage] = useState(0);
  const perPage = 3;
  const totalPages = Math.ceil(department.members.length / perPage);

  const handleNext = () => setPage((p) => (p + 1) % totalPages);
  const handlePrev = () => setPage((p) => (p - 1 + totalPages) % totalPages);

  const visible = department.members.slice(page * perPage, (page + 1) * perPage);

  const showArrows = department.members.length > perPage;

  return (
    <div className="mb-14">
      <h3 className="text-xl font-bold text-[#6D28B2] text-center mb-6">
        {department.name}
      </h3>

      <div className="flex items-center gap-4">
        {/* Left Arrow */}
        <button
          onClick={handlePrev}
          disabled={!showArrows}
          className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-white text-lg font-bold transition-all duration-200 ${
            showArrows
              ? "bg-gray-900 hover:bg-gray-700 cursor-pointer"
              : "bg-gray-200 cursor-default"
          }`}
          aria-label="Previous"
        >
          &#8249;
        </button>

        {/* Cards */}
        <div className="flex-1 overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={page}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-3 gap-6"
            >
              {visible.map((member, i) => (
                <MemberCard key={`${member.name}-${i}`} member={member} index={i} />
              ))}
              {/* Fill empty slots so grid stays stable */}
              {visible.length < perPage &&
                Array.from({ length: perPage - visible.length }).map((_, i) => (
                  <div key={`empty-${i}`} />
                ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Right Arrow */}
        <button
          onClick={handleNext}
          disabled={!showArrows}
          className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-white text-lg font-bold transition-all duration-200 ${
            showArrows
              ? "bg-gray-900 hover:bg-gray-700 cursor-pointer"
              : "bg-gray-200 cursor-default"
          }`}
          aria-label="Next"
        >
          &#8250;
        </button>
      </div>

      {/* Page dots */}
      {showArrows && (
        <div className="flex justify-center gap-1.5 mt-4">
          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={i}
              onClick={() => setPage(i)}
              className={`w-2 h-2 rounded-full transition-all duration-200 ${
                i === page ? "bg-[#6D28B2] w-4" : "bg-gray-300"
              }`}
              aria-label={`Go to page ${i + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

const OurTeam = () => {
  return (
    <div className="relative overflow-hidden">
      {/* Background purple blob */}
      <div
        className="absolute -left-32 top-20 w-96 h-96 rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(109,40,178,0.12) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />

      <div className="max-w-4xl mx-auto px-8 py-16 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <h2 className="text-5xl font-extrabold text-[#6D28B2] mb-4">
            Our Team
          </h2>
          <p className="text-base font-semibold text-gray-800 mb-1">
            Meet the members who make it possible
          </p>
          <p className="text-sm text-gray-500">
            Look through the members of each department
          </p>
        </motion.div>

        {/* Department Carousels */}
        {departments.map((dept) => (
          <DepartmentCarousel key={dept.name} department={dept} />
        ))}
      </div>

      {/* Apply Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative w-full overflow-hidden"
        style={{ minHeight: "520px" }}
      >
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/apply-bg.jpg')" }}
        />
        {/* Purple tint over image */}
        <div
          className="absolute inset-0"
          style={{ background: "rgba(150, 90, 210, 0.55)" }}
        />
        {/* White gradient fading in from top and back out at bottom */}
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(to bottom, white 0%, white 35%, rgba(255,255,255,0.6) 55%, transparent 75%, rgba(255,255,255,0.5) 88%, white 100%)",
          }}
        />

        {/* Content */}
        <div className="relative z-10 px-16 py-14 max-w-2xl">
          <h2 className="text-4xl font-extrabold text-[#6D28B2] leading-tight mb-1">
            Apply today
          </h2>
          <h2 className="text-4xl font-extrabold text-[#6D28B2] leading-tight mb-4">
            Let's Innovate Together
          </h2>
          <p className="text-gray-600 text-base mb-8">
            We love it here, you will too
          </p>
          <a
            href="https://www.linkedin.com/company/peaktew/jobs/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gray-900 text-white text-sm font-semibold px-6 py-3 rounded-full hover:bg-gray-700 transition-colors duration-200 w-fit"
          >
            Apply Now
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default OurTeam;
