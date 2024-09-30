import { TESTIMONIALS } from '../lib/data';
import Tag from '../data-display/tag';
import TestimonialDetails from '../data-display/testimonial-details';
import Typography from '../general/typography';
import Container from '../layout/container';

const TestimonialsSection = () => {
  return (
    <Container id="testimonials" className="bg-gray-50 dark:bg-gray-900 dark:text-gray-500">
      <div className="flex flex-col items-center gap-4">
        <div className="self-center">
          <Tag label="Testimonials" />
        </div>
        <Typography variant="subtitle" className="max-w-xl text-center">
          Nice things people have said about me:
        </Typography>
      </div>

      <div className="flex gap-12 max-md:flex-col md:max-lg:flex-wrap">
        {TESTIMONIALS?.map((testimonial, index) => (
          <TestimonialDetails key={index} {...testimonial} />
        ))}
      </div>
    </Container>
  );
};

export default TestimonialsSection;
