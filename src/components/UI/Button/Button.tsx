import React from 'react'
import s from './Button.module.scss'


interface ClickableButtonProps {
   children: React.ReactNode;
   className?: string;
   type?: 'empty'
   onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const Button = ({ children, className, type, onClick, ...props }: ClickableButtonProps) => {
   return (
      <button {...props}
         onClick={onClick}
         className={[s.btn, className, !!type?s[type]:s.btn_fill].join(" ")}>
         {children}
      </button>
   );
};
export default Button