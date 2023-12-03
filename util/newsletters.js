import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";

// Newsletters directory
const newslettersDirectory = `${process.cwd()}/data/newsletters`;

export function getSortedNewslettersData() {
  // Get filenames under /data/articles
  const fileNames = fs.readdirSync(newslettersDirectory);

  const allNewslettersData = fileNames.map((fileName) => {
    // Remove .md extension from filename to get slug
    const slug = fileName.replace(/\.md$/, "");

    // Read markdown file as string
    const fullPath = path.join(newslettersDirectory, fileName);
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
  return allNewslettersData.sort(({ date: a }, { date: b }) => {
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
export function getAllNewslettersSlugs() {
  const fileNames = fs.readdirSync(newslettersDirectory);

  return fileNames.map((fileName) => {
    return {
      params: {
        slug: fileName.replace(/\.md$/, ""),
      },
    };
  });
}

// Return a single post
export async function getSingleNewsletter(slug) {
  const fullPath = path.join(newslettersDirectory, `${slug}.md`);
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

// Return other articles by the same author
export function getOtherNewslettersByAuthor(author, title) {
  return getSortedNewslettersData()
    .filter((article) => article.author === author)
    .filter(
      (article) => article.title.split(" ").join("-").toLowerCase() !== title
    )
    .slice(0, 3);
}

// Return articles by particular author
export function getAuthorNewsletters(author) {
  return getSortedNewslettersData().filter(
    (article) => article.author.split(" ").join("-").toLowerCase() === author
  );
}

// Return a list of all authors
export function getAllAuthorsNames() {
  return authors.map((writer) => {
    return {
      params: {
        author: writer.name.split(" ").join("-").toLowerCase(),
      },
    };
  });
}
