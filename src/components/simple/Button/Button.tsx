import { ReactNode } from 'react';
import { Slot } from '@radix-ui/react-slot';
import { clsx } from 'clsx';

export type ButtonProps = {
  children: ReactNode;
  asChild?: boolean;
};

export const Button = ({ children, asChild }: ButtonProps) => {
  const Comp = asChild ? Slot : 'button';
  return (
    <Comp
      className={clsx(
        'py-4 px-3 bg-cyan-500 rounded font-semibold text-black text-sm hover:bg-cyan-300 w-full transition-colors focus:ring-2 ring-white',
        {}
      )}
    >
      {children}
    </Comp>
  );
};
