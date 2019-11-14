import * as React from 'react';
import classNames from 'classnames/bind';
import styles from './Button.css';

interface ButtonProps {
  inverted: boolean, 
  onClick: any
}

let cx = classNames.bind(styles);

export const Button: React.FunctionComponent<ButtonProps> = ({children, inverted, onClick}) => {

  let className = cx({
    button: true,
    inverted: inverted 
  });

  return <button 
      className ={className} 
      onClick={onClick}
      >  
        {children}
      </button>;
};