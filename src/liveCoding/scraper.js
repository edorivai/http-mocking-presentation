import scrapeIt from "scrape-it";

export async function getTechnologies() {
  const { data } = await scrapeIt("https://null.house/en/", {
    technologies: {
      listItem: ".home-module--techItem--2sg0N h4"
    }
  });

  return data.technologies;
}