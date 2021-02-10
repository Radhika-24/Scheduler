import { Container, Navbar, NavbarBrand } from "reactstrap";


const Header = () => {

	return (
		<Navbar color="dark" dark expand="md">
				<Container fluid>
						<NavbarBrand href="/">Schedule</NavbarBrand>
				</Container>
		</Navbar>
	)
} 

export default Header;