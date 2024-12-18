import React from "react";
import Link from "next/link";

// Define the types for the props
interface ProjectCardProps {
  imgUrl: string;
  title: string;
  description: string;
  gitUrl: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  imgUrl,
  title,
  description,
  gitUrl,
}) => {
  return (
    <div>
      {/* Make the entire image clickable */}
      <Link href={gitUrl} target="_blank" rel="noopener noreferrer">
        <div
          className="h-52 md:h-72 rounded-t-xl relative group cursor-pointer"
          style={{ background: `url(${imgUrl})`, backgroundSize: "cover", backgroundPosition: "center" }}
        >
          <div className="overlay absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-500" />
        </div>
      </Link>
      {/* Project description */}
      <div className="text-white rounded-b-xl mt-3 bg-[#181818] py-6 px-4">
        <h5 className="text-xl font-semibold mb-2">{title}</h5>
        <p className="text-[#ADB7BE]">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
