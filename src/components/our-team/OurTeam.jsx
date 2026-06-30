import React, { useState } from "react";
import { motion } from "framer-motion";
import { useDarkMode } from "../DarkModeContext";

const departments = [
  {
    name: "Senior Management",
    members: [
      {
        name: "Lucas",
        title: "Chief Executive Officer",
        image: "Business/I- Business/Lucas (CEO).png",
        country: "France",
      },
      {
        name: "Khin",
        title: "Chief Finance Officer",
        image: "Finance/II- Finance/Khin (CFO).JPG",
        country: "Myanmar",
      },
      {
        name: "Jack",
        title: "Chief Design Officer",
        image: "Design/III- Design/Jack (CDO).jpg",
        country: "Malaysia",
      },
      {
        name: "Andi",
        title: "Chief Technology Officer",
        image: "Technology/IV- Technology/Andi (CTO).jpeg",
        country: "Indonesia",
      },
    ],
  },
  {
    name: "General Office",
    members: [
      {
        name: "Amanda",
        title: "General Counsel",
        image: "General Office/0- General Office/Amanda (GC).jpg",
        country: "Hong Kong",
      },
      {
        name: "Vivian",
        title: "HR Manager",
        image: "General Office/0- General Office/Vivian (HRM).jpg",
        country: "Poland",
      },
      {
        name: "Aljun",
        title: "Talent Acquisition Manager",
        image: "General Office/0- General Office/Aljun (TAM).jpg",
        country: "Philippines",
      },
      {
        name: "Stefaniya",
        title: "HR Coordinator",
        image: "General Office/0- General Office/Stefaniya (HRC).jpg",
        country: "Russia",
      },
      {
        name: "Hayden",
        title: "Talent Acquisition Specialist",
        image: "General Office/0- General Office/Hayden (TAS).JPG", // TODO: update image when we have it
        country: "Myanmar",
      },
    ],
  },
  {
    name: "Business",
    members: [
      {
        name: "Ivan",
        title: "Business Analyst",
        image: "Business/I- Business/Ivan (BA).jpg", // TODO: update image when we have it
        country: "Russia",
      },
      {
        name: "Melissa",
        title: "Business Analyst",
        image: "Business/I- Business/Melissa (BA).jpeg", // TODO: update image when we have it
        country: "Canada",
      },
      {
        name: "Felissha",
        title: "Community Manager",
        image: "Business/I- Business/Felissha (CM).JPG",
        country: "Singapore",
      },
      {
        name: "Renee",
        title: "Community Manager",
        image: "Business/I- Business/Renee (CM).JPG",
        country: "Hong Kong",
      },
      {
        name: "Sinem",
        title: "Digital Content Producer",
        image: "Business/I- Business/Sinem (DCP).jpg",
        country: "Netherlands",
      },
      {
        name: "Andrea D",
        title: "Digital Content Producer",
        image: "Business/I- Business/Andrea D (DCP).JPG", // TODO: update image when we have it
        country: "South Africa",
      },
      {
        name: "Rachael",
        title: "Business Development Engagement Specialist",
        image: "Business/I- Business/Rachael (BDES).jpg",
        country: "Lebanon",
      },
    ],
  },
  // {
  //   name: "Finance",
  //   members: [
  //     {
  //       name: "Khin",
  //       title: "Assistant Finance Officer",
  //       image: "Finance/II- Finance/Khin (AFO).JPG",
  //       country: "Myanmar",
  //     },
  //   ],
  // },
  {
    name: "Design",
    members: [
      {
        name: "Luana",
        title: "UX Designer",
        image: "Design/III- Design/Luana (UX).jpeg",
        country: "Brazil",
      },
      {
        name: "Anna",
        title: "UX Designer",
        image: "Design/III- Design/Anna (UX).jpg",
        country: "Poland",
      },
      {
        name: "Hamida",
        title: "Senior UI Designer",
        image: "Design/III- Design/Hamida (SUI).png",
        country: "Tanzania",
      },
      {
        name: "Yuting",
        title: "Senior UI Designer",
        image: "Design/III- Design/Yuting (SUI). jpeg",
        country: "Taiwan",
      },
      {
        name: "Kian",
        title: "Brand Design Director",
        image: "Design/III- Design/Kian (BDD).png",
        country: "UK",
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
        country: "Palestine",
      },
      {
        name: "Kristijan",
        title: "Back End Manager",
        image: "Technology/IV- Technology/Kristijan (BEM).jpg",
        country: "Croatia",
      },
      {
        name: "Mohammed",
        title: "Back End Developer",
        image: "Technology/IV- Technology/Mohammed (BED).jpg",
        country: "Ethiopia",
      },
    ],
  },
];

const countryFlagEmoji = (country) => {
  const codes = {
    France: "FR", Malaysia: "MY", Indonesia: "ID", Poland: "PL",
    Philippines: "PH", Russia: "RU", Colombia: "CO", Germany: "DE",
    Singapore: "SG", "Hong Kong": "HK", Netherlands: "NL",
    "South Africa": "ZA", Lebanon: "LB", Romania: "RO", Myanmar: "MM",
    Brazil: "BR", Tanzania: "TZ", Taiwan: "TW", UK: "GB",
    Palestine: "PS", Croatia: "HR", Ethiopia: "ET", Canada: "CA",
  };
  const code = codes[country];
  if (!code) return "";
  return code
    .toUpperCase()
    .split("")
    .map((c) => String.fromCodePoint(0x1f1e6 + c.charCodeAt(0) - 65))
    .join("");
};

const MemberCard = ({ member, index, isDarkMode }) => (
  
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.35, delay: index * 0.07 }}
    className="bg-white rounded-2xl shadow-md p-4 flex flex-col items-start text-left hover:shadow-lg transition-shadow duration-200 h-full"
  >
    <div className={`w-full aspect-square rounded-xl overflow-hidden mb-3 relative`}>
      <img
        src={`/team_member/${member.image}`}
        alt={member.name}
        className="w-full h-full object-cover object-center"
        onError={(e) => {
          e.target.style.display = "none";
        }}
      />
      {member.country && (
        <div className={`absolute bottom-2 right-2  backdrop-blur-sm rounded-full px-2 py-0.5 flex items-center gap-1 shadow-sm ${isDarkMode ? "bg-gray-800 text-white" : "bg-white text-gray-900"}`}>
          <span className="text-sm leading-none">{countryFlagEmoji(member.country)}</span>
          <span className="text-xs font-medium leading-none">{member.country}</span>
        </div>
      )}
    </div>
    <h3 className="text-base font-bold text-gray-900 leading-tight te">
      {member.name}
    </h3>
    <p className="text-xs mt-1 leading-snug">
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
  const [startIndex, setStartIndex] = useState(0);
  const [activeDot, setActiveDot] = useState(0);
  const [direction, setDirection] = useState(1);
  const perPage = 4;
  const totalMembers = department.members.length;
  const visibleCount = Math.min(perPage, totalMembers);
  const showArrows = totalMembers > perPage;

  const handleNext = () => {
    if (!showArrows) return;
    setDirection(1);
    setStartIndex((i) => {
      const next = (i + 1) % totalMembers;
      setActiveDot(next);
      return next;
    });
  };

  const handlePrev = () => {
    if (!showArrows) return;
    setDirection(-1);
    setStartIndex((i) => {
      const next = (i - 1 + totalMembers) % totalMembers;
      setActiveDot(next);
      return next;
    });
  };

  const visible = showArrows
    ? Array.from({ length: visibleCount }, (_, i) => {
      const memberIndex = (startIndex + i) % totalMembers;
      return department.members[memberIndex];
    })
    : department.members.slice(0, visibleCount);

  const { isDarkMode } = useDarkMode();

  return (
    <div className="mb-14 center">
      <h3 className="text-xl font-bold text-[#6D28B2] text-center mb-6">
        {department.name}
      </h3>

      <div className="flex items-center gap-4">
        {/* Left Arrow */}
        <button
          onClick={handlePrev}
          disabled={!showArrows}
          className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-white text-lg font-bold transition-all duration-200 bg-gray-900 ${showArrows ? "hover:bg-gray-700 cursor-pointer" : "invisible pointer-events-none"}`}
          aria-label="Previous"
        >
          &#8249;
        </button>

        {/* Cards */}
        <div className="flex-1 pb-4 -mb-4">
          <motion.div
            key={startIndex}
            initial={{ x: direction > 0 ? 18 : -18, opacity: 0.9 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.2 }}
            className={
              visible.length < perPage
                ? "flex flex-wrap justify-center gap-6"
                : "grid grid-cols-4 gap-6"
            }
          >
            {visible.map((member, i) => (
              <div
                key={`${member.name}-${i}`}
                className={visible.length < perPage ? "w-[calc(25%-18px)] flex flex-col" : "flex flex-col"}
              >
                <MemberCard member={member} index={i} isDarkMode={isDarkMode} />
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right Arrow */}
        <button
          onClick={handleNext}
          disabled={!showArrows}
          className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-white text-lg font-bold transition-all duration-200 bg-gray-900 ${showArrows ? "hover:bg-gray-700 cursor-pointer" : "invisible pointer-events-none"}`}
          aria-label="Next"
        >
          &#8250;
        </button>
      </div>

      {/* Page dots
      {showArrows && (
        <div className="flex justify-center gap-1.5 mt-4">
          {Array.from({ length: totalMembers }).map((_, i) => (
            <button
              key={i}
              onClick={() => {
                setDirection(i >= activeDot ? 1 : -1);
                setStartIndex(i);
                setActiveDot(i);
              }}
              className={`w-2 h-2 rounded-full transition-all duration-200 ${i === activeDot ? "bg-[#6D28B2] w-4" : "bg-gray-300"
                }`}
              aria-label={`Go to position ${i + 1}`}
            />
          ))}
        </div>
      )} */}
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
