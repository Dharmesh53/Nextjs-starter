const site_url = process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3000";

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
