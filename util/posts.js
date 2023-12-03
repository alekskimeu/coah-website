import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";

// Posts directory
const postsDirectory = `${process.cwd()}/data/posts`;

export function getSortedPostsData() {
  // Get filenames under /data/articles
  const fileNames = fs.readdirSync(postsDirectory);

  const allPostsData = fileNames.map((fileName) => {
    // Remove .md extension from filename to get slug
    const slug = fileName.replace(/\.md$/, "");

    // Read markdown file as string
    const fullPath = path.join(postsDirectory, fileName);
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
  return allPostsData.sort(({ date: a }, { date: b }) => {
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
export function getAllPostsSlugs() {
  const fileNames = fs.readdirSync(postsDirectory);

  return fileNames.map((fileName) => {
    return {
      params: {
        slug: fileName.replace(/\.md$/, ""),
      },
    };
  });
}

// Return a single post
export async function getSinglePost(slug) {
  const fullPath = path.join(postsDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");

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
export function getOtherPostsByAuthor(author, title) {
  return getSortedPostsData()
    .filter((article) => article.author === author)
    .filter(
      (article) => article.title.split(" ").join("-").toLowerCase() !== title
    )
    .slice(0, 3);
}

// Return articles by particular author
export function getAuthorPosts(author) {
  return getSortedPostsData().filter(
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
