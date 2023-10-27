import Head from 'next/head';
import { getPost } from '../../lib/posts';

export async function getStaticProps() {
  console.log('[FirstPostPage] getStaticProps()');
  const post = await getPost('first-post');
  return {
    props: { post },
  };
}

function FirstPostPage({ post }) {
  console.log('[FirstPostPage] render:', post);
  return (
    <>
      <Head>
        <title>{`${post.title} - My Blog`}</title>
      </Head>
      <main>
        <p>{post.date}</p>
        <h1>{post.title}</h1>
        <article dangerouslySetInnerHTML={{ __html: post.body }} />
      </main>
    </>
  );
}

export default FirstPostPage;
