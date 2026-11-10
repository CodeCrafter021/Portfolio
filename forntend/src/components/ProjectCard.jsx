const ProjectCard = ({ title, description, image, link }) => {
  return (
    <div className="bg-white dark:bg-gray-900 rounded-2xl overflow-hidden border border-gray-100 dark:border-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
      <div className="h-48 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm">{description}</p>
        <a href={link} className="text-blue-600 dark:text-blue-400 font-medium hover:underline inline-flex items-center">
          View Project &rarr;
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;