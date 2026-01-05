import { PROJECTS } from '../lib/data';
import ProjectDetails from '../data-display/project-details';
import Tag from '../data-display/tag';
import Typography from '../general/typography';
import Container from '..//layout/container';

const WorkSection = () => {
  return (
    <Container id="work" className="bg-gray-50 dark:bg-gray-900">
      <div className="flex flex-col items-center gap-4">
        <div className="self-center">
          <Tag label="Work" />
        </div>
        <Typography variant="subtitle" className="max-w-xl text-center">
          Some of the noteworthy projects I have built:
        </Typography>
      </div>

      {PROJECTS?.map((project, index) => (
        <ProjectDetails
          key={index}
          {...project}
          layoutType={index % 2 === 0 ? 'default' : 'reverse'}
        />
      ))}
    </Container>
  );
};

export default WorkSection;
