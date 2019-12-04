import * as React from 'react';
import classNames from 'classnames';
import styles from './Card.scss';
import { Button } from '../Button/Button';

interface CardProps {
  category: string,
  image: string,
  id: string,
  name: string,
  rating: number,
  price: number,
  status: boolean
}

export const Card = (props: CardProps) => (
  <div className={classNames(styles["card-wrapper"])}>
    <div className={classNames(styles["card-metadata--wrapper"])}>

    </div>
    <div className={classNames(styles["card-metadata--image"])}> 
      <img
        src={props.image} 
        alt={props.name}
      />
    </div>

    <h3 className={classNames(styles["card-metadata--name"])}>
      {props.name}
    </h3>

    <div className={classNames(styles["card-metadata--rating"])}>
      {props.rating}
    </div>

    <div className={classNames(styles["card-metadata--info"])}>
      {/* 
          This section will include the Category, price, and status (open/closed)
       */}
      <div>
        {props.category}
        {props.price}
      </div>

      <div className={classNames(styles["card-metadata--status"])}>
        {props.status ? 
          <>
            <span style={{backgroundColor: "green"}} />
            <p>Open Now</p>
          </>
          : 
          <>
            <span style={{backgroundColor: "red"}} />
            <p>Closed</p>
          </>
        }
      </div>

       
    </div>

    <div className={classNames(styles["card-metadata--link"])}>
       <Button onClick={null}>Learn More</Button>
    </div>

  </div>
);