import * as React from 'react';
import { Button } from '../../components/Button/Button';
import { Card } from '../../components/Card/Card';
import { Hero } from '../../components/Hero/Hero';

const Home = () => (
  <>
    <Hero text="Hero Text" subtext="Hero Subtext" />

    <section className="test-wrapper">
      <Card 
        category="chinese" 
        image="https://s3-media0.fl.yelpcdn.com/bphoto/fEvzJLOFF-YYMjh6iLDpMA/o.jpg" 
        id="1" 
        name="Testaraunt" 
        rating={4} 
        price={3}
        status={true}
      />
    </section>
  </>
);

export default Home;