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

        // 'chattanooga/events/tap-house/2024/trivia.md'
      // chattanooga/events/tap-house/2024/trivia/2024-05-15
  const getSlugFromPathname = (pathname, date = null) => {
    if (date) {
      // console.log(pathname);
      pathname = pathname.replace(".md", `/${date}`)
      console.log(pathname);
      console.log(date);
      path.basename(pathname, path.extname(pathname));
    } else {
      path.basename(pathname, path.extname(pathname));
    }
  }
    

  // console.log("CFPs")
  // console.log(contentFilePaths);
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
    await fs.writeFile(indexFile, JSON.stringify(index));
    console.log(
      `Indexed ${index.length} documents from ${contentDir} to ${indexFile}`
    );
  }
})();
