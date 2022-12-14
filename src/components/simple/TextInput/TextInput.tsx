import { InputHTMLAttributes, ReactNode } from 'react';
import { Slot } from '@radix-ui/react-slot';

export type TextInputRootProps = {
  children: ReactNode;
};

export type TextInputIconProps = {
  children: ReactNode;
};

export type TextInputInputProps = InputHTMLAttributes<HTMLInputElement> & {};

const TextInputRoot = ({ children }: TextInputRootProps) => {
  return (
    <div className='flex items-center h-12 gap-3 py-4 px-3 rounded bg-gray-800  focus-within:ring-2 ring-cyan-300'>
      {children}
    </div>
  );
};

TextInputRoot.displayName = 'TextInput.Root';

const TextInputIcon = ({ children }: TextInputIconProps) => {
  return <Slot className='w-6 h-6 text-gray-400'>{children}</Slot>;
};

TextInputIcon.displayName = 'TextInput.Icon';

const TextInputInput = (props: TextInputInputProps) => {
  return (
    <input
      className='bg-transparent flex-1  text-gray-100 text-xs placeholder:text-gray-400 outline-none '
      {...props}
    />
  );
};

TextInputInput.displayName = 'TextInput.Input';

export const TextInput = {
  Root: TextInputRoot,
  Input: TextInputInput,
  Icon: TextInputIcon,
};
