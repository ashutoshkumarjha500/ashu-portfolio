// 'use client';

import Button from './button';

const DownloadCV = () => {
  return (
    <Button onClick={() => window?.open('/files/Ashu-resume.pdf', '_blank')}>
      Download CV
    </Button>
  );
};

export default DownloadCV;
