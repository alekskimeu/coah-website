import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";

// Posts directory
// const eventsDirectory = `${process.cwd()}/data/events`;

const eventsDirectory = path.join(process.cwd(), "data/events");

export function getSortedEventsData() {
  // Get filenames under /data/events
  const fileNames = fs.readdirSync(eventsDirectory);

  const allEventsData = fileNames.map((fileName) => {
    // Remove .md extension from filename to get slug
    const slug = fileName.replace(/\.md$/, "");

    // Read markdown file as string
    const fullPath = path.join(eventsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf-8");

    // Use gray-matter to pass the article metadata section
    const matterResult = matter(fileContents);

    const content = marked(matterResult.content);

    // Combine the data with the slug
    return {
      slug,
      content,
      ...matterResult.data,
    };
  });

  // Sort posts by date
  return allEventsData.sort(({ date: a }, { date: b }) => {
    if (new Date(a) < new Date(b)) {
      return 1;
    } else if (new Date(a) > new Date(b)) {
      return -1;
    } else {
      return 0;
    }
  });
}

// Return an array of all slugs
export function getAllEventsSlugs() {
  const fileNames = fs.readdirSync(eventsDirectory);

  return fileNames.map((fileName) => {
    return {
      params: {
        slug: fileName.replace(/\.md$/, ""),
      },
    };
  });
}

// Return a single event
export async function getSingleEvent(slug) {
  const fullPath = path.join(eventsDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf-8");

  // Use gray-matter to pass the post's metadata section
  const matterResult = matter(fileContents);

  const content = marked(matterResult.content);

  // Combine the data with the slug & contentHtml
  return {
    slug,
    content,
    ...matterResult.data,
  };
}
