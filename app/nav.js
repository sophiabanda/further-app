import Link from "next/link";

export default function Nav() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Link className="navbar-brand" href="/">SHOP TULO</Link>
        <Link className="navbar-brand" href="/stores">Find a Store</Link>
      </div>
    </nav>
  );
}

