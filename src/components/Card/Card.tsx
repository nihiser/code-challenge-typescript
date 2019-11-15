import * as React from 'react';
import classNames from 'classnames';
import styles from './Card.scss';

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
    <div className={classNames(styles["card-metadata--image"])}>
      <img src="" alt=""/>
    </div>

    <div className={classNames(styles["card-metadata--name"])}>

    </div>

    <div className={classNames(styles["card-metadata--rating"])}>

    </div>

    <div className={classNames(styles["card-metadata--info"])}>
      {/* 
          This section will include the Category, price, and status (open/closed)
       */}
    </div>

    <div className={classNames(styles["card-metadata--link"])}>

    </div>

  </div>
);