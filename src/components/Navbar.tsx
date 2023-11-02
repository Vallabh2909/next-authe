import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-slate-800 py-5">
      <ul className="flex flex-row p-2">
        <li>
          <Link href="/" className="mr-6 hover:text-blue-500 p-2">
            Home
          </Link>
        </li>
        <li>
          <Link href="/login" className="mr-6 hover:text-blue-500 p-2">
            Login
          </Link>
        </li>
        <li>
          <Link href="/signup" className="mr-6 hover:text-blue-500 p-2">
            SignUp
          </Link>
        </li>
      </ul>
    </nav>
  );
};
export const Anavbar = () => {
  return (
    <nav className="bg-slate-800 py-5">
      <ul className="flex flex-row p-2">
        <li>
          <Link href="/" className="mr-6 hover:text-blue-500 p-2">
            Home
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
