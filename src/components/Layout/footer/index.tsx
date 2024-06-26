import { Facebook, Instagram, Twitter, Youtube } from 'lucide-react';

const footerData = {
  companyName: "Manage Expenses",
  address: "1st floor, Sector-15 , Noida, Uttar Pradesh",
  addressLink: "http://maps.google.com/?q=Sector-15 , Noida, Uttar Pradesh",
  phoneNumbers: ["+918505921813"],
  weekdayHours: "Monday to Friday: 9am - 8pm",
  weekendHours: "Weekend: 10am - 3pm",
  socialMediaLinks: [
    { label: "Facebook", link: "/", icon: <Facebook className="text-3xl" /> },
    { label: "Instagram", link: "/", icon: <Instagram className="text-3xl" /> },
    { label: "Twitter", link: "/", icon: <Twitter className="text-3xl" /> },
    { label: "YouTube", link: "/", icon: <Youtube className="text-3xl" /> }
  ],
  courseCategory: "Our courses",
  courses: [
    { title: "Course 1", link: "/" },
    { title: "Course 2", link: "/" },
    { title: "Course 3", link: "/" },
    { title: "Course 4", link: "/" },
  ],
  companySectionTitle: "Company",
  companyLinks: [
    { label: "About", url: "/" },
    { label: "Meet the Team", url: "/" },
    { label: "Accounts Review", url: "/" }
  ],
  legalLinks: [
    { label: "Terms & Conditions", url: "/" },
    { label: "Privacy Policy", url: "/" },
    { label: "Cookies", url: "/" }
  ]
};

const App = () => {
  const currentYear = new Date().getFullYear();

  return (
    // <Footer data={footerData} />
    <div className="border-t shadow">
      <footer className="text-gray-600 body-font">
        <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
          <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10 text-white p-2 bg-gray-500 rounded-full" viewBox="0 0 24 24">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            <span className="ml-3 text-xl">{footerData.companyName}</span>
          </a>
          <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">&copy; {currentYear} —
            <a href="https://twitter.com/knyttneve" className="text-gray-600 ml-1" rel="noopener noreferrer" target="_blank">{footerData.companyName}</a>
          </p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
            <a className="text-gray-500">
              <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
              </svg>
            </a>
            <a className="ml-3 text-gray-500">
              <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
              </svg>
            </a>
            <a className="ml-3 text-gray-500">
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
              </svg>
            </a>
            <a className="ml-3 text-gray-500">
              <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0" className="w-5 h-5" viewBox="0 0 24 24">
                <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                <circle cx="4" cy="4" r="2" stroke="none"></circle>
              </svg>
            </a>
          </span>
        </div>
      </footer>
    </div>
  );
};

export default App;
