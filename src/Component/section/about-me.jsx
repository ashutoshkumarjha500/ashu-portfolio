import React from 'react'; // Don't forget to import React
// import SagarFullPose from '/public/images/sagar-full-pose.jpg';
import Link from '../navigation-nn/link.jsx';
import SagarFullPose from '../images/DSC_0625.jpg'
import Tag from '../data-display/tag';
import Container from '../layout/container';
import Typography from '../general/typography';
// import Link from '../navigation/link';
import { EXTERNAL_LINKS } from '../lib/data';

// If you're not using Next.js, you can use a standard img tag.
const AboutMeSection = () => {
  return (
    <Container className="bg-gray-50 dark:bg-gray-900 dark:text-gray-500" id="about">
      <div className="self-center">
        <Tag label="About me" />
      </div>

      <div className="flex w-full flex-col justify-between gap-12 md:flex-row">
        {/* Image */}
        <div className="flex justify-center md:order-first md:justify-end">
          <div className="relative h-[380px] w-[320px] md:h-[460px] md:w-[380px] lg:h-[570px] lg:w-[440px]">
            <img
              src={SagarFullPose}
              alt="Fullpose of Sagar"
              className="absolute dark:border-gray-900 z-10 h-[380px] w-[280px] border-8 border-gray-50 max-md:left-5 md:right-0 md:top-0 md:h-[420px] md:w-[340px] lg:h-[530px] lg:w-[400px]"
              style={{ objectFit: 'cover' }}
            />
            <div className="absolute dark:bg-gray-700 h-[30px] w-[320px] border-8 border-transparent bg-gray-200 max-md:top-5 md:bottom-0 md:left-0 md:h-[420px] md:w-[340px] lg:h-[520px] lg:w-[400px]"></div>
          </div>
        </div>

        {/* Content */}
       <div className="flex max-w-xl flex-col gap-6">
  <Typography variant="h3">
    Curious about me? Here you have it:
  </Typography>

  <Typography>
    I&apos;m a passionate and detail-oriented{' '}
    <span className="font-medium text-gray-900 dark:text-gray-200">
      Full-Stack Developer
    </span>{' '}
    specializing in MERN stack development (React.js, Node.js, Express.js, and
    MongoDB). I enjoy building dynamic, responsive, and scalable web
    applications that focus on clean UI, smooth user experience, and efficient
    performance.
  </Typography>

  <Typography>
    I have hands-on experience developing real-world projects such as a clinic
    management system, a hotel search and booking platform, a blogging
    application, and a personal portfolio website. My work includes
    implementing secure authentication, role-based access control, RESTful API
    integration, and responsive layouts using Tailwind CSS.
  </Typography>

  <Typography>
    I strongly believe in writing clean, readable, and maintainable code.
    Performance optimization, reusable components, and user-centric design are
    important aspects of my development approach.
  </Typography>

  <Typography>
    I am a quick learner who enjoys exploring new technologies, improving
    problem-solving skills, and working end-to-end on projects—from planning
    and development to deployment.
  </Typography>

  <Typography>
    When I&apos;m not coding, I spend time learning new concepts, improving my
    technical skills, and exploring modern web development trends. You can find
    my work and projects on{' '}
    <Link
      noCustomization
      externalLink
      withUnderline
      href={EXTERNAL_LINKS.GITHUB}
      className="dark:hover:text-gray-600"
    >
      GitHub
    </Link>
    .
  </Typography>

  <Typography>Some quick highlights about me:</Typography>

  <div className="flex flex-col gap-2 md:flex-row md:gap-6">
    <ul className="flex list-inside list-disc flex-col gap-2">
      <Typography component="li">
        B.Tech in Computer Science & Engineering
      </Typography>
      <Typography component="li">
        MERN Stack Developer
      </Typography>
    </ul>
    <ul className="flex list-inside list-disc flex-col gap-2">
      <Typography component="li">
        Strong problem-solving skills
      </Typography>
      <Typography component="li">
        Continuous learner
      </Typography>
    </ul>
  </div>

  <Typography>
    I&apos;m currently looking for opportunities where I can grow as a
    developer, contribute to meaningful projects, and learn from experienced
    teams. Feel free to connect with me—I&apos;d love to collaborate and grow
    together 🙂
  </Typography>
</div>

      </div>
    </Container>
  );
};

export default AboutMeSection;

