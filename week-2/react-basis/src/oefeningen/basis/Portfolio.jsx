import ProjectListItem from "./ProjectListItem";

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: "Gentse Feesten",
      course: { teacher: "Mathieu, Wachem", name: "@Work1" },
    },
    {
      id: 2,
      title: "Lighttopia",
      course: { teacher: "Mathieu, Wachem", name: "@Work1" },
    },
    {
      id: 3,
      title: "Clar Development",
      course: { teacher: "Adriaan", name: "Webdesign" },
    },
    {
      id: 4,
      title: "Rock Werchter",
      course: { teacher: "Michael", name: "Programming 1" },
    },
    {
      id: 5,
      title: "Portfolio",
      course: { teacher: "Claire, Isabelle", name: "IT business" },
    },
  ];

  return (
    <ul>
      {projects.map((project) => (
        <ProjectListItem key={project.id} project={project} />
      ))}
    </ul>
  );
};

export default Portfolio;
