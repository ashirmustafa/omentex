import Image from 'next/image';
import Link from 'next/link';

interface ProjectCardProps {
  title: string;
  imgSrc: string;
  link: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, imgSrc, link }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105">
      <Image 
        src={imgSrc} 
        alt={title} 
        width={600} 
        height={600} 
        className="w-full h-72 object-cover"
      />
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2">{title}</h2>
        {/* <Link href={link}>
          <div className="text-primary hover:underline">View Project</div>
        </Link> */}
      </div>
    </div>
  );
};

export default ProjectCard;
