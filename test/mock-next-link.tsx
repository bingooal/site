import { cloneElement, PropsWithChildren, ReactElement } from 'react';
import { useRouter } from 'next/router';
import { UrlObject } from 'url';

type Url = string | UrlObject;
type LinkProps = {
  href: Url;
  as?: Url;
};

const MockNextLink = ({ children, href, as: asHref }: PropsWithChildren<LinkProps>): ReactElement => {
  const router = useRouter();
  
  const onClick = (e): void => {
    e.preventDefault();
    router.push(href, asHref ?? href);
  };
  
  return cloneElement(children as ReactElement, { href: asHref ?? href, onClick });
};

jest.mock('next/link', () => MockNextLink);
