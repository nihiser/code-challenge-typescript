import * as React from 'react';
import classNames from 'classnames';
import styles from "./Hero.scss";

interface HeroProps {
  text: string,
  subtext: string,
  subcomponent?: Node,
}

export const Hero = (props:HeroProps) => (
  <section className={classNames(styles["hero--wrapper"])}>
    <h1 className={classNames(styles["hero--text"])}>{props.text}</h1>
    <h3 className={classNames(styles["hero--subtext"])}>{props.subtext}</h3>
  </section>
);