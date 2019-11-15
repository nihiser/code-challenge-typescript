import * as React from 'react';
import { Button } from './components/Button/Button';
import { Hero } from './components/Hero/Hero';


export const App = () => (
  <>
    <Hero text="Hero Text" subtext="Hero Subtext" />

    <Button onClick={null} inverted >Button Test</Button>
  </>
);