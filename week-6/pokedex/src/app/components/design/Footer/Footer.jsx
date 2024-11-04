import "./Footer.css";
import Container from "../Container/Container";

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <p>© Arteveldehogeschool {new Date().getFullYear()}</p>
      </Container>
    </footer>
  );
};

export default Footer;
