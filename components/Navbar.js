import Link from "next/link";
const Navbar = () => (
	<nav className="navbar navbar-expand-lg navbar-dark bg-primary mb-4">
		<div className="container">
			<a className="navbar-brand" href="/">
				MyTodo
			</a>
			<div className="collapse navbar-collapse" id="navbarSupportedContent">
				<ul className="navbar-nav ml-auto">
					<li className="nav-item">
						<Link>
							<a className="nav-link" href="/">
								Home
							</a>
						</Link>
					</li>
					<li className="nav-item">
						<Link>
							<a className="nav-link" href="/about">
								About
							</a>
						</Link>
					</li>
				</ul>
			</div>
		</div>
	</nav>
);
export default Navbar;
