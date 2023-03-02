import { allBlogPosts } from "contentlayer/generated";

export function getAllBlogPosts() {
  return allBlogPosts.sort((a, b) => {
    return a.date < b.date ? 1 : -1;
  });
}

export function getBlogPostByUrl(url: string) {
  return allBlogPosts.find((blogPost) => {
    return blogPost.slug == `/blog/${url}`;
  });
}
