import { Button } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

export default function AppButton({
  children,
  to,
  href,
  variant = 'contained',
  color = 'primary',
  size = 'large',
  className = '',
  fullWidth = false,
  startIcon,
  endIcon
}) {
  const commonProps = {
    variant,
    color,
    size,
    fullWidth,
    className: `!rounded-full !font-bold ${className}`.trim(),
    startIcon,
    endIcon
  };

  if (to) {
    return (
      <Button component={RouterLink} to={to} {...commonProps}>
        {children}
      </Button>
    );
  }

  if (href) {
    return (
      <Button
        component="a"
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        {...commonProps}
      >
        {children}
      </Button>
    );
  }

  return <Button {...commonProps}>{children}</Button>;
}
