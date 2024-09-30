import { Copyright } from 'lucide-react';

// import Typography from './Component/general/typography';
import Typography from '../general/typography';
import Link from '../navigation-nn/link.jsx';
import { EXTERNAL_LINKS } from '../lib/data';

const Footer = () => {
  return (
    <footer className="w-full bg-gray-50 py-6 dark:bg-gray-900 dark:text-gray-200" >
      <div className="flex items-center justify-center gap-1">
        <Typography className="flex items-center" variant="body3">
          <Copyright className="mr-1 inline-block h-4 w-4" />
          {new Date().getFullYear()} |&nbsp;
          <Link
            noCustomization
            externalLink
            withUnderline
            href={EXTERNAL_LINKS.FIGMA_FILE}
            className="dark:hover:text-gray-600"
          >
            Designed
          </Link>
          &nbsp;and&nbsp;
          <Link
            noCustomization
            externalLink
            withUnderline
            href={EXTERNAL_LINKS.GITHUB_REPO}
            className="dark:hover:text-gray-600"

          >
            coded
          </Link>
          &nbsp;with ❤️️ by Ashu Jha
        </Typography>
      </div>
    </footer>
  );
};

export default Footer;
