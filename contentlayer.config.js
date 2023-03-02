import { defineDocumentType, makeSource } from "contentlayer/source-files";
import rehypePrettyCode from "rehype-pretty-code";

export const BlogPost = defineDocumentType(() => ({
  name: "BlogPost",
  filePathPattern: `**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      description: "The title of the post",
      required: true,
    },
    date: {
      type: "string",
      description: "The date of the post",
      required: true,
    },
    description: {
      type: "string",
      description: "The description of the post",
      required: true,
    },
    tags: {
      type: "list",
      of: { type: "string" },
      description: "The tags of the post",
      required: true,
    },
  },
  computedFields: {
    slug: {
      type: "string",
      resolve: (blogPost) => `${blogPost._raw.flattenedPath}`,
    },
  },
}));

export default makeSource({
  contentDirPath: "./src/blog-posts/",
  documentTypes: [BlogPost],
  mdx: {
    rehypePlugins: [
      [
        rehypePrettyCode,
        {
          theme: "github-dark-dimmed",
          keepBackground: true,
          onVisitLine(node) {
            if (node.children.length === 0) {
              node.children = [{ type: "text", value: " " }];
            }
          },
          onVisitHighlightedLine(node) {
            node.properties.className.push("line-highlighted");
          },
          onVisitHighlightedWord(node) {
            node.properties.className = ["word-highlighted"];
          },
        },
      ],
    ],
  },
});
