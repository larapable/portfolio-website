"use client";
import React, { useRef } from "react";
import ProjectCard from "./ProjectCard";
import { motion, useInView } from "framer-motion";


const projectsData = [
  {
    id: 1,
    title: "iCare",
    description: "iCare is a digital health platform prototype designed to provide users with easy and secure access to their personal health information online. This includes medical history, medication details, lab results, and more.",
    image: "/images/iCare.png",
    tag: ["All", "Web"],
    gitUrl: "https://www.figma.com/design/HFglcJ60YX2O0GrM8thwLi/iCARE?node-id=0-1&m=dev&t=rl19Ctr8ZaOGi9l0-1",
  },
  {
    id: 2,
    title: "AmlShop",
    description: "A comprehensive clothing shopping system with full-stack CRUD operations using Flask",
    image: "/images/amlshop.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/JBiong/IM2Project.git",
  },
  {
    id: 3,
    title: "BarangayConnect",
    description: "A web application designed to enhance barangay governance by streamlining communication and services between officials and residents",
    image: "/images/bc.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/larapable/BarangayConnect_Project.git",
  },
  {
    id: 4,
    title: "Atlas",
    description: "Streamlined the University Excel-based Balanced Scorecard System by developing an AI integrated solution using Spring Boot and NextJ.This system provides a comprehensive departmental Balanced Scorecard platform for efficient performance tracking and management.",
    image: "/images/atlas.png",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/larapable/frontend-updated.git",
  },

];

const ProjectsSection = () => {
  // const [, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  // const handleTagChange = (newTag:any) => {
  //   setTag(newTag);
  // };

  // const filteredProjects = projectsData.filter((project) =>
  //   project.tag.includes(tag)
  // );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };
   
  
  
  return (
    <section id="projects">
      <h2 className=" text-4xl font-bold text-[#118B50] mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      {/* <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div> */}
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {projectsData.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
          
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;