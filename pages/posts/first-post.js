import Head from 'next/head';

function FirstPostPage() {
  console.log('[FirstPostPage] render');
  return (
    <>
      <Head>
        <title>First Post - My Blog</title>
      </Head>
      <main>
        <h1>First Post</h1>
        <p>
          This is my first ever blog post!
        </p>
      </main>
    </>
  );
}

export default FirstPostPage;
