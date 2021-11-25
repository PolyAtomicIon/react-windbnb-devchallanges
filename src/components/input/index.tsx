import React from 'react';
import './input.scss';
import TextareaAutosize from 'react-textarea-autosize';

interface InputProps {
    className?: string,
    disabeShadow?: boolean,
    startIcon?: string,
    endIcon?: string,
    size?: 'sm' | 'md',
    disabled?: boolean,
    error?: boolean,
    placeholder?: string, 
    label?: string, 
    helperText?: string,
    fullWidth?: boolean, 
    multiline?: boolean, 
    row?: number, 
    onClick?: (e: React.SyntheticEvent) => void;
  };

export const Input: React.FC<InputProps> = ({
    children,
    className,
    error, 
    size, 
    startIcon, 
    endIcon, 
    placeholder, 
    label, 
    helperText, 
    fullWidth, 
    multiline, 
    row, 
    disabeShadow, 
    disabled, 
    ...props 
}) => {

  const isFullWidth = fullWidth ? 'input-group--fullwidth' : '';
  const isDisabled = disabled ? 'input-group--disabled' : '';
  const isInputDisabled = disabled ? 'input-group__input--disabled' : '';
  const shadow = disabeShadow ? '' : 'input-group__input--shadow';
  const inputSize = multiline ? '' : `input-group__input--${size}`;

  const color = error ? 'error' : 'default';

  const StartIconComponent = startIcon && require(`@material-ui/icons/${startIcon}`).default
  const EndIconComponent = endIcon && require(`@material-ui/icons/${endIcon}`).default

  const inputClassNames = [
    'input-group__input__field',
    `input-group__input__field--${color}`, 
  ].join(' ');
  const inputProps = {
    type: multiline ? 'textarea' : 'text',
    minRows: row,
    disabled: disabled,
    placeholder: placeholder,
    className: inputClassNames,
    ...props
  }

  return (
    <div
    //   tabIndex={0}
    //   disabled={disabled}
      className={[
        isDisabled,
        isFullWidth,
        'input-group',
        `input-group--${color}`, 
      ].join(' ')}
    >
      <p className="input-group__label">
        {label}
      </p>
      <div 
        className={[
          isInputDisabled,
          shadow, 
          "input-group__input",
          `input-group__input--${color}`,
          inputSize 
        ].join(' ')}
      >
        {startIcon && <StartIconComponent className={`input-group__icon input-group__icon--${size} input-group__icon--left`} />}

        {
          multiline 
          ? <TextareaAutosize {...inputProps} />
          : <input {...inputProps} />
        }

        {endIcon && <EndIconComponent className={`input-group__icon input-group__icon--${size} input-group__icon--right`} />}
      </div>

      <p className="input-group__label">
        {helperText}
      </p>
        
    </div>
  );
};

Input.defaultProps = {
  disabled: false,
  error: false,
  startIcon: '',
  placeholder: 'Placeholder',
  label: 'Label', 
  helperText: 'Helper', 
  fullWidth: false, 
  multiline: false, 
  row: 1, 
  endIcon: '',
  size: 'sm',
  onClick: undefined,
  disabeShadow: false
};