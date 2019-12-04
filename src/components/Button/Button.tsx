import * as React from 'react';
import classNames from 'classnames/bind';
import styles from './Button.scss';

interface ButtonProps {
  inverted?: boolean, 
  onClick: any
}

export const Button: React.FunctionComponent<ButtonProps> = ({children, inverted, onClick}) => {

  let className = classNames({
    [styles.button]: true,
    [styles.inverted]: inverted 
  });

  return <button className={className} onClick={onClick}> {children}</button>
};