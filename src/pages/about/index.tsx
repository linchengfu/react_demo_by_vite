import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { ColorPoint } from './utils';
import Other from './Other';
import Top from './Input';
import Super from './Super';
import Animal from './Imperative';

function About() {
  const color = new ColorPoint({ color: 'yellow' });
  color.onPrint();
  return (
    <>
      <main>
        <h2>Refs use</h2>
        <Other />
        <Top />
        <Super />
        <Animal />
      </main>
      <nav>
        <Link to="/">Home</Link>
      </nav>
    </>
  );
}

export default About;
