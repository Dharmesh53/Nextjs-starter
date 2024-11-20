const site_url = process.env.NEXT_PUBLIC_APP_URL ?? "http://putyourdomain.com";

export const siteConfig = {
  name: "Starter",
  description: "Get your project off to an explosive start.",
  url: site_url,
  ogImage: `${site_url}/_static/og.jpg`,
  links: {
    twitter: "https://x.com/Dharmesh177208",
    github: "https://github.com/dharmesh53/",
  },
  mailSupport: "dharmeshwr@gmail.com",
};

export const footerLinks = [
  {
    title: "Company",
    items: [
      { title: "About", href: "#" },
      { title: "Enterprise", href: "#" },
      { title: "Terms", href: "/terms" },
      { title: "Privacy", href: "/privacy" },
    ],
  },
  {
    title: "Product",
    items: [
      { title: "Security", href: "#" },
      { title: "Customization", href: "#" },
      { title: "Customers", href: "#" },
      { title: "Changelog", href: "#" },
    ],
  },
];
