import Image from "next/image";

const footerLinks = [
  {
    heading: "Plan a Visit",
    links: [
      { href: "/what-to-expect", label: "What to Expect" },
      { href: "/#services", label: "Service Times" },
      { href: "/#events", label: "Upcoming Events" },
      { href: "/calendar", label: "Calendar" },
      { href: "/#location", label: "Directions" },
    ],
  },
  {
    heading: "About Us",
    links: [
      { href: "/what-we-believe", label: "What We Believe" },
      { href: "/#pastor", label: "Our Pastor" },
      { href: "/salvation", label: "Salvation" },
      { href: "/serving-highland-mi", label: "Our Community" },
    ],
  },
  {
    heading: "Get Involved",
    links: [
      { href: "/ministries", label: "Ministries" },
      { href: "/vbs", label: "Vacation Bible School" },
      { href: "/sermons", label: "Sermons" },
      { href: "/give", label: "Give" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-sky-100 bg-white-soft py-14 text-navy-950">
      <div className="section-shell">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_2fr]">
          <div>
            <Image
              src="/highland-hills-baptist-logo-dark.svg"
              alt="Highland Hills Baptist Church"
              width={300}
              height={85}
              className="h-auto w-56"
            />
            <p className="mt-4 max-w-sm leading-7 text-muted">
              An independent Baptist church in Highland, Michigan, preaching the
              Gospel and welcoming families from across the community.
            </p>
            <p className="mt-4 text-sm font-semibold text-navy-950">
              179 Woodruff Lake Rd, Highland, MI 48357
              <br />
              <a href="tel:+12488870698" className="hover:text-blue-700">
                (248) 887-0698
              </a>
            </p>
            <div className="mt-5 flex gap-3">
              <a
                href="https://www.facebook.com/HHBC1611/"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-md border border-navy-900/20 px-4 py-2 text-sm font-bold hover:bg-sky-100"
              >
                Facebook
              </a>
              <a
                href="https://www.youtube.com/@highlandhillsbaptistchurch4533"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-md border border-navy-900/20 px-4 py-2 text-sm font-bold hover:bg-sky-100"
              >
                YouTube
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            {footerLinks.map((column) => (
              <div key={column.heading}>
                <p className="fine-label mb-4 text-blue-700">{column.heading}</p>
                <ul className="space-y-3">
                  {column.links.map((link) => {
                    const isExternal = link.href.startsWith("http");

                    return (
                      <li key={link.label}>
                        <a
                          href={link.href}
                          target={isExternal ? "_blank" : undefined}
                          rel={isExternal ? "noopener noreferrer" : undefined}
                          className="text-sm font-semibold text-muted transition-colors hover:text-navy-950"
                        >
                          {link.label}
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 border-t border-sky-100 pt-6 text-center text-sm text-muted">
          &copy; {new Date().getFullYear()} Highland Hills Baptist Church &middot;
          Highland, Michigan
        </div>
      </div>
    </footer>
  );
}
