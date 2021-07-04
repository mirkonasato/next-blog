import { readFile } from 'fs/promises';
import marked from 'marked';

export async function getPost(slug) {
  const source = await readFile(`content/posts/${slug}.md`, 'utf8');
  const html = marked(source);
  return {
    body: html,
  };
}
