import React from 'react';
import 'isomorphic-fetch';
import Link from 'next/link';

const Home = ({ repositories }) => (
  <div>
    <Link href='/site'>
      <a>Site</a>
    </Link>
    {repositories.map(repo => (
      <h1 key={repo.id}>{repo.name}</h1>
    ))}
  </div>
);

Home.getInitialProps = async () => {
  const response = await fetch('https://api.github.com/orgs/rocketseat/repos');
  const repositories = await response.json();
  console.log('repos', repositories);

  return {repositories};
};

export default Home;