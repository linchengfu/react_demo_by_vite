import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { reduce } from 'lodash';

const people: {
  [key: string]: number | string;
} = {
  name: 'lin',
  age: 18,
};

const P = Object.keys(people);

type Func = () => string;
type Test = ReturnType<Func>;

const Home: React.FC = () => {
  const [obj, setObj] = useState({});

  const res = reduce(
    people,
    (acc, value, key) => {
      console.log(acc, value, key);
      people[key] = 'cheng';
      return { ...acc, [key]: value };
    },
    {},
  );

  console.log('>>>', res);

  console.log(people);
  return (
    <>
      <main>
        <h2>Welcome to the homepage!</h2>
        <p>You can do this, I believe in you.</p>
      </main>
      <nav>
        <Link to="/about">About</Link>
      </nav>
    </>
  );
};

export default Home;
