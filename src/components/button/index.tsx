import React from 'react';
import './button.scss';

interface ButtonProps {
  className?: string,
  color?: 'default' | 'primary' |  'secondary',
  variant?:'classic' | 'text' | 'outline',
  disabeShadow?: boolean,
  startIcon?: string,
  endIcon?: string,
  size?: 'sm' | 'md' | 'lg',
  disabled?: boolean,
  onClick?: (e: React.SyntheticEvent) => void;
};

export const Button: React.FC<ButtonProps> = ({
  children,
  className,
  color, 
  size,
  variant, 
  startIcon, 
  endIcon, 
  disabeShadow, 
  disabled, 
  ...props
}) => {

  const shadow = disabeShadow ? '' : 'btn--shadow';
  const StartIconComponent = startIcon && require(`@material-ui/icons/${startIcon}`).default
  const EndIconComponent = endIcon && require(`@material-ui/icons/${endIcon}`).default

  return (
    <button
      type="button"
      disabled={disabled}
      className={[
        'btn',
        `btn--${size}`, 
        `btn--${color}`, 
        `btn--${color}--${variant}`, 
        `btn--${variant}`,
        shadow, 
      ].join(' ')}
      {...props}
    >
       {startIcon && <StartIconComponent className={`icon--${size}`} />}
       {children}
       {endIcon && <EndIconComponent className={`icon--${size}`} />}
    </button>
  );
};

Button.defaultProps = {
  disabled: false,
  color: 'default',
  variant: 'classic',
  startIcon: '',
  endIcon: '',
  size: 'sm',
  onClick: undefined,
  disabeShadow: false
};