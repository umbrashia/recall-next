import { readdirSync, readFileSync } from "fs";
import matter from "gray-matter";
import path from "path";

const postDirectory = path.join(process.cwd(), "posts");

export const getSortedPostData = (): any[] => {
  const fileNames = readdirSync(postDirectory);
  const allPostData: any[] = fileNames.map((tempFileName) => {
    const id = tempFileName.replace(/\.md$/, "");
    const fullPath = path.join(postDirectory, tempFileName);
    const fileContent = readFileSync(fullPath, "utf8");

    const matterResult = matter(fileContent);

    return {
      id: id,
      ...matterResult.data,
    };
  });
  return allPostData.sort(({ date: a }, { date: b }) => {
    if (a < b) {
      return 1;
    } else if (a > b) {
      return -1;
    } else {
      return 0;
    }
  });
};
