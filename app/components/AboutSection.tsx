"use client";
import React, { useTransition, useState } from "react";
import TabButton from './TabButton'


// Type for Tab Data
interface TabData {
  title: string;
  id: string;
  content: React.ReactNode;
}

const TAB_DATA: TabData[] = [
  {
    title: "Techstack",
    id: "techstack",
    content: (
      <ul className="list-disc pl-2">
        <li>Python, Java, C</li>
        <li>Springboot</li>
        <li>MySQL / MySQLWorkbench</li>
        <li>NextJS</li>
        <li>ReactJS</li>
        <li>Javascript</li>
        <li>Typescript</li>
        <li>HTML, CSS</li>
        
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Cebu Institute of Technonology - University</li>
        <li>DOST Scholar</li>
        <li>Science, Technology, Engineering, and Mathematics - STEM</li>
        <li>High Honor</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>PhilNITS FE Examination Taker, 2024</li>
        <li>10th TOPCIT Philippines Examination, Level 2 Certification</li>
        <li>Java Codechum Certification</li>
        <li>Kaggle Data Analytics Certification</li>
        <li>Solo Learn PHP & SQL Certification</li>
        <li>Huawei HCIA Storage & IRO Certification</li>
      </ul>
    ),
  },
  {
    title: "Achievements",
    id: "achievements",
    content: (
      <ul className="list-disc pl-2">
        <li>Rank 5 FlexHibiT AY 2021-2022</li>
        <li>Rank 4 FlexHibiT AY 2022-2023</li>
        <li>Rank 10 FlexHibiT AY 2023-2024</li>
        <li>Academic Awardee</li>
        <li>2nd Place in PACUCOA&apos;s Search for the Best Research Paper 2024</li>
      </ul>
    ),
  },
];

const AboutSection: React.FC = () => {
  const [tab, setTab] = useState<string>("techstack");
  const [, startTransition] = useTransition();

  // Explicitly typing 'id' as a string
  const handleTabChange = (id: string) => {
    startTransition(() => {
      setTab(id);
    });
  };

  // Ensures TAB_DATA.find result is typed correctly and avoids 'undefined'
  const activeTab = TAB_DATA.find((t) => t.id === tab);

  return (
    <section className="text-white" id="about">
  <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16">
    {/* Left Side */}
    <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
      <h2 className="text-4xl font-bold text-[#118B50] mb-4">About Me</h2>
      <p className="text-base lg:text-lg text-justify">
        I am currently a 4th year BSIT student at CIT-University,
        where I&apos;ve gained a solid foundation in topics like programming , software development,
        project management. Currently, I am the project lead of our Capstone Project and Research,
        where I have strengthened my ability to collaborate, problem-solve, and adapt to new challenges.
        I am interested in applying as a full stack web developer
        and I am eager to apply my skills in a real-world environment
        while also growing professionally.
      </p>
    </div>

    {/* Right Side: Tabs with right margin */}
    <div className="flex flex-col justify-start mt-8 md:mt-0 mr-8 h-full">
      <div className="flex flex-row justify-start mb-4">
        <TabButton
          selectTab={() => handleTabChange("techstack")}
          active={tab === "techstack"}
          
        >
          Techstack
        </TabButton>
        <TabButton
          selectTab={() => handleTabChange("education")}
          active={tab === "education"}
        >
          Education
        </TabButton>
        <TabButton
          selectTab={() => handleTabChange("certifications")}
          active={tab === "certifications"}
        >
          Certifications
        </TabButton>
        <TabButton
          selectTab={() => handleTabChange("achievements")}
          active={tab === "achievements"}
        >
          Achievements
        </TabButton>
      </div>
      <div className="mt-8">
        {activeTab ? activeTab.content : <p>Tab content not found</p>}
      </div>
    </div>
  </div>
</section>

  );
};

export default AboutSection;
