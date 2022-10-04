import Link from "next/link";

export const Header = () => {
  return (
    <header>
      <h1>
        <Link href="/">
          <a>Home</a>
        </Link>
      </h1>

      <ul>
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/login">
            <a>Login</a>
          </Link>
        </li>
        <li>
          <Link href="/dashboard">
            <a>Dashboard</a>
          </Link>
        </li>
      </ul>
    </header>
  );
};
