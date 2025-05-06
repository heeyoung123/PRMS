import {styled} from "styled-components";
import logo from "../../assets/images/vecteezy_black-and-white-open-book-vector-logo-illustration-on-white_6115725.jpg";
import {FaSignInAlt, FaRegUser, FaUserCircle} from "react-icons/fa";
import {Link} from "react-router-dom";
import {useCategory} from "../../hooks/useCategory";
import {useAuthStore} from "../../store/authStore";
import Dropdown from "@/components/common/Dropdown";


function Header() {
	const {category} = useCategory();
	const {isLoggedIn, storeLogout} = useAuthStore();
	return (
		<HeaderStyle>
			<h1 className="logo">
				<Link to={"/"}>
					<img src={logo} alt="bookstore"/>
				</Link>
			</h1>
			<nav className="category">
				<ul>
					{
						category.map((item) => (
							<li key={item.category_id}>
								<Link to={item.category_id === null ? "/books" : `/books?category_id=${item.category_id}`}>
									{item.category_name}
								</Link>
							</li>
						))
					}
				</ul>
			</nav>
			<nav className="auth">
				<Dropdown toggleButton={FaUserCircle({})}>
					<>
						{isLoggedIn && (
							<ul>
								<li><Link to={"/cart"}>장바구니</Link></li>
								<li><Link to={"/orderlist"}>주문 내역</Link></li>
								<li>
									<button onClick={storeLogout}>로그아웃</button>
								</li>
							</ul>
						)}
						{!isLoggedIn && (
							<ul>
								<li>
									<a href={"/login"}>
										{FaSignInAlt({})} 로그인</a>
								</li>
								<li>
									<a href={"/register"}> {FaRegUser({})} 회원가입</a>
								</li>
							</ul>
						)
						}
					</>
				</Dropdown>


			</nav>
		</HeaderStyle>
	);
}

const HeaderStyle = styled.header`
    width: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 0;
    max-width: ${({theme}) => theme.layout.width.large};
    border-bottom: 1px solid ${({theme}) => theme.color.background};

    .logo {
        img {
            width: 150px;
        }
    }

    .category {
        ul {
            display: flex;
            gap: 32px;

            li {
                a {
                    font-size: 1.5rem;
                    font-weight: 600;
                    text-decoration: none;
                    color: ${({theme}) => theme.color.text};

                    &:hover {
                        color: ${({theme}) => theme.color.primary};
                    }
                }
            }
        }
    }

    .auth {
        ul {
            display: flex;
            align-items: center;
            flex-direction: column;
            width: 100px;
            gap: 12px;

            li {
                a, button {
                    font-size: 1rem;
                    font-weight: 600;
                    text-decoration: none;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    line-height: 1;
                    background: none;
                    border: 0;
                    cursor: pointer;
                    padding: 0;


                    svg {
                        margin-right: 6px;
                    }
                }
            }
        }

`;
export default Header;