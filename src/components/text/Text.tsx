import { Slot } from '@radix-ui/react-slot';
import clsx from 'clsx';
import { TextProps } from '../../props/TextProps';

function Text({ asChild, size = 'md', children }: TextProps) {
  const Component = asChild ? Slot : 'span';

  return (
    <Component
      className={clsx('text-gray-100 font-sans', {
        'text-xs': size === 'sm',
        'text-sm': size === 'md',
        'text-md': size === 'lg',
      })}
    >
      {children}
    </Component>
  );
}

export default Text;
