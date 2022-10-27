import NavBar from '../components/NavBar';

function AboutPage() {
  console.log('[AboutPage] render');
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>About</h1>
      </main>
    </>
  );
}

export default AboutPage;
