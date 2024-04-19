import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavbarLink from "./navbarLink.js";

export default function Navigation(props) {
	return (
		<Navbar
			bg="dark"
			variant="dark"
			expand="lg"
		>
			<Container>
				<div>
					<NavbarLink to="/aboutMe">
						<h1 className="text-light">James Perry</h1>
					</NavbarLink>
				</div>
				<div>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="navbar-nav">
						<Nav className="me-auto">
							<NavbarLink to="/">Featured</NavbarLink>
							<NavbarLink to="/portfolio">Portfolio</NavbarLink>
							<NavbarLink to="/Resume">Resume</NavbarLink>
							<NavbarLink to="/contactMe">Contact Me</NavbarLink>
							<NavbarLink to="/aboutMe">About Me</NavbarLink>
							{/* //TODO: Uncomment the Blog and Vault sections once the primary tabs are complete and these can be implemented */}
							{/* <NavbarLink to="/blog">Blog</NavbarLink> */}
							{/* <NavbarLink to="/vault">Vault</NavbarLink> */}
						</Nav>
					</Navbar.Collapse>
				</div>
			</Container>
		</Navbar>
	);
}
