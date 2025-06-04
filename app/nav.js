import Link from "next/link";

export default function Nav() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <Link className="navbar-brand" href="/">SHOP TULO</Link>
    <div className="collapse navbar-collapse" id="navbarColor04">
      <ul className="navbar-nav me-auto">
        <li className="nav-item">
            <Link className="nav-link active" href="#">Home</Link>
            <span className="visually-hidden">(current)</span>
        </li>
        <li className="nav-item">
          <Link className="nav-link" href="/Features">Features</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" href="#">Features</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" href="#">Features</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
  );
}

