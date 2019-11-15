import * as React from 'react';
import classNames from 'classnames';
import styles from "./Hero.scss";
import cssExports from './Hero.scss';

interface HeroProps {
  text: string,
  subtext: string,
  subcomponent?: Node,
}

export const Hero = (props:HeroProps) => (
  <>
    <h1 className={classNames(styles["hero--text"])}>{props.text}</h1>
    <h3 className={classNames(styles["hero--subtext"])}>{props.subtext}</h3>
  </>
);