import Link from "next/link";

export default function Navbar() {
  return (
    <div className="navbar shadow-sm px-40 py-4">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <Link href="/" className="underline underline-offset-4">
              Home
            </Link>
            <Link href="/lawyers">Browse Lawyers</Link>
            <Link href="/dashboard">Dashboard</Link>
          </ul>
        </div>
        <Link href="/" className="btn btn-ghost text-2xl font-extrabold">
            Legal Ease
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 flex gap-6">
          <Link href="/" className="underline underline-offset-4">
            Home
          </Link>
          <Link href="/lawyers">Browse Lawyers</Link>
          <Link href="/dashboard">Dashboard</Link>
        </ul>
      </div>
      <div className="navbar-end flex flex-row gap-4">
        <label className="input">
          <svg
            className="h-[1em] opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </g>
          </svg>
          <input type="search" required placeholder="Search" />
        </label>
        <a className="btn bg-[#442c05] text-white">Login</a>
      </div>
    </div>
  );
}
