import '@testing-library/jest-dom';

jest.mock('next/image', () => ({
  __esModule: true,
  default: ({
    fill,
    alt,
    ...props
  }: React.ComponentProps<'img'> & { fill?: boolean }) => {
    if (fill) {
      return (
        <div style={{ position: 'relative', width: '100%', height: '100%' }}>
          <img {...props} alt={alt} />
        </div>
      );
    }
    return <img {...props} alt={alt} />;
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
