import logo from "../../assets/images/vecteezy_black-and-white-open-book-vector-logo-illustration-on-white_6115725.jpg";
import {styled} from "styled-components";

const Footer = () => {
	return (
		<FooterStyle>
			<h1 className="logo">
				<img src={logo} alt="bookstore"/>
			</h1>
			<div className="copyright">
				<p>copyright(c), 2024, book store.</p>
			</div>

		</FooterStyle>
	);
};

const FooterStyle = styled.footer`
    width: 100%;
    margin: 0 auto;
    max-width: ${({theme}) => theme.layout.width.large};
    border-top: 1px solid ${({theme}) => theme.color.background};
    padding: 20px 0;
    display: flex;
    justify-content: space-between;

    .logo {
        img {
            width: 150px;
        }
    }

    .copyright {
        p {
            font-size: 0.75rem;
            color: ${({theme}) => theme.color.background};
        }
    }
`;

export default Footer;