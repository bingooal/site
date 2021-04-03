type Props = {
  title: string;
};

const Header: React.VFC<Props> = ({ title }: Props) => (
  <header className="sticky top-0 z-50 flex flex-row items-center w-full h-16 px-8 text-black bg-white border-b border-gray-200 md:h-20 sm:px-16 md:px-36 lg:px-52 xl:px-80 2xl:px-96 dark:bg-gray-800 dark:border-gray-600 dark:text-white">
    <h1 className="flex flex-row items-center text-2xl font-semibold">
      {title}
    </h1>
  </header>
);

export default Header;
