import Link from "next/link";

export const Header = () => {
  return (
    <div className="py-4  border-b-2 border-gray-900">
      <header className="container mx-auto flex flex-row items-center justify-between">
        <h1>
          <Link href="/">
            <a>Home</a>
          </Link>
        </h1>

        <ul className="flex flex-row items-center justify-between">
          <li className="px-4">
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li className="px-4">
            <Link href="/login">
              <a>Login</a>
            </Link>
          </li>
          <li className="px-4 border-l-2 border-gray-900">
            <Link href="/dashboard">
              <a>Dashboard</a>
            </Link>
          </li>
        </ul>
      </header>
    </div>
  );
};
