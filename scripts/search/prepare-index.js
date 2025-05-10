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
  let contentFilePattern = path.join(contentDir, "**", "*.mdx");

  if(os.platform().includes("win")) {
    contentFilePattern = contentFilePattern.replaceAll("\\", "/");
  }
  const indexFile = path.join(publicDir, "search-index.json");

  const contentFilePaths = await globby([contentFilePattern]);

  const getSlugFromPathname = (pathname, date = null) => {
    if (date) {
      pathname = pathname.replace(".mdx", `/${date}`)
      pathname = pathname.split(/pages\//).pop();
      return pathname
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

      // TODO: youll continuously need to update this when you add things like:
      // new cities, new content types, etc
      if(eventDates) {
        eventDates.forEach((date) => {
          console.log(getSlugFromPathname(contentFilePaths[i], date));
          index.push({
            slug: getSlugFromPathname(contentFilePaths[i], date),
            category: "blog",
            title: `${title} - ${date}`,
            description,
            tags,
            body: content,
          });
        })
      } else {
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

    console.log(index);
    await fs.writeFile(indexFile, JSON.stringify(index));
    console.log(
      `Indexed ${index.length} documents from ${contentDir} to ${indexFile}`
    );
  }
})();
