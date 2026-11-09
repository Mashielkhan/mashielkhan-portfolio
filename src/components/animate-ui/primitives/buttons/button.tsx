'use client';

import * as React from 'react';
import { m, type HTMLMotionProps } from 'motion/react';

import {
  Slot,
  type WithAsChild,
} from '@/components/animate-ui/primitives/animate/slot';

type ButtonProps = WithAsChild<
  Omit<HTMLMotionProps<'button'>, 'whileHover' | 'whileTap'> & {
    hoverScale?: number;
    tapScale?: number;
  }
>;

function Button({
  hoverScale = 1.05,
  tapScale = 0.95,
  asChild = false,
  className,
  ...props
}: ButtonProps) {
  const buttonClassName = ['rounded-xl', className]
    .filter(Boolean)
    .join(' ');

  if (asChild) {
    const { children, ...slotProps } = props;

    return (
      <Slot
        {...slotProps}
        className={buttonClassName}
        whileTap={{ scale: tapScale }}
        whileHover={{ scale: hoverScale }}
      >
        {children as React.ReactElement}
      </Slot>
    );
  }

  return (
    <m.button
      {...props}
      className={buttonClassName}
      whileTap={{ scale: tapScale }}
      whileHover={{ scale: hoverScale }}
    />
  );
}

export { Button, type ButtonProps };