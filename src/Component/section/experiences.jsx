import { EXPERIENCES } from '../lib/data.jsx';
import ExperienceDetails from '../data-display/experience-details';
import Tag from '../data-display/tag';
import Typography from '../general/typography';
import Container from '../layout/container';

const ExperienceSection = () => {
  return (
    <Container className="bg-gray-50 dark:bg-gray-900 dark:text-gray-500">
      <div className="flex flex-col items-center gap-4">
        <div className="self-center">
          <Tag label="Experience" />
        </div>
        <Typography variant="subtitle" className="max-w-xl text-center">
          Here is a quick summary of my most recent experiences:
        </Typography>
      </div>

      {EXPERIENCES?.map((experience, index) => (
        <ExperienceDetails {...experience} key={index} />
      ))}
    </Container>
  );
};

export default ExperienceSection;
