import '@testing-library/jest-dom';

jest.mock('next/image', () => ({
  __esModule: true,
  default: (props: React.ComponentProps<'img'>) => {
    return <img {...props} />;
  },
}));

jest.mock('next/link', () => {
  return {
    __esModule: true,
    default: ({
      href,
      children,
      ...rest
    }: {
      href: string;
      children: React.ReactNode;
    }) => {
      return (
        <a href={href} {...rest}>
          {children}
        </a>
      );
    },
  };
});
