import path from "path";
import { promises as fs } from "fs";
import { globby } from "globby";
import os from "os";
import grayMatter from "gray-matter";

(async function () {
  // prepare the dirs
  console.log("preparing index....")
  const srcDir = path.join(process.cwd(), "src");
  const publicDir = path.join(process.cwd(), "public");
  const contentDir = path.join(srcDir, "pages");
  let contentFilePattern = path.join(contentDir, "**", "*.md");

  if(os.platform().includes("win")) {
    contentFilePattern = contentFilePattern.replaceAll("\\", "/");
  }
  const indexFile = path.join(publicDir, "search-index.json");

  const contentFilePaths = await globby([contentFilePattern]);

  const getSlugFromPathname = (pathname, date = null) => {
    if (date) {
      pathname = pathname.replace(".md", `/${date}`)
      return path.basename(pathname, path.extname(pathname));
    } else {
      return path.basename(pathname, path.extname(pathname));
    }
  }
    

  if (contentFilePaths.length) {
    const files = contentFilePaths.map(
      async (filePath) => await fs.readFile(filePath, "utf8")
    );
    const index = [];
    let i = 0;
    for await (let file of files) {
      const {
        data: { title, description, tags, eventDates },
        content,
      } = grayMatter(file);

      // I think this is where the magic needs to happen
      // 'chattanooga/events/tap-house/2024/trivia.md'
      // chattanooga/events/tap-house/2024/trivia/2024-05-15
      if(eventDates) {
        eventDates.forEach((date) => {
          console.log(getSlugFromPathname(contentFilePaths[i], date));
          index.push({
            slug: getSlugFromPathname(contentFilePaths[i], date),
            category: "blog",
            title,
            description,
            tags,
            body: content,
          });
        })
      } else {
        console.log("else")
        index.push({
          slug: getSlugFromPathname(contentFilePaths[i]),
          category: "blog",
          title,
          description,
          tags,
          body: content,
        });
      }

      i++;
    }
            // 'chattanooga/events/tap-house/2024/trivia.md'
      // chattanooga/events/tap-house/2024/trivia/2024-05-15
    console.log(index);
    await fs.writeFile(indexFile, JSON.stringify(index));
    console.log(
      `Indexed ${index.length} documents from ${contentDir} to ${indexFile}`
    );
  }
})();
