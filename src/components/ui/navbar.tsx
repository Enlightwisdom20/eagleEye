import Link from "next/link";

export default function Navbar() {
  return (
    <div className="bg-[#f1f1f1] fixed top-2 right-0 rounded-4xl m-4 flex gap-3">
      <Link className="hover:bg-gray-400 py-3 rounded-4xl px-5" href="#">
        About
      </Link>
      <Link className="hover:bg-gray-400 py-3 rounded-4xl px-5" href="#">
        Services
      </Link>
      <Link className="hover:bg-gray-400 py-3 rounded-4xl px-5" href="#">
        Contact
      </Link>
    </div>
  );
}
