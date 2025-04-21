import {styled} from "styled-components";
import logo from "../../assets/images/vecteezy_black-and-white-open-book-vector-logo-illustration-on-white_6115725.jpg";
import {FaSignInAlt, FaRegUser} from "react-icons/fa";
import {Link} from "react-router-dom";
import {useEffect, useState} from "react";
import {Category} from "../../models/category.model";
import {fetchCategory} from "../../api/category.api";
import {useCategory} from "../../hooks/useCategory";

// const CATEGORY = [
// 	{
// 		id: null,
// 		name: "전체",
// 	},
// 	{
// 		id: 0,
// 		name: "동화",
// 	},
// 	{
// 		id: 1,
// 		name: "소설",
// 	},
// 	{
// 		id: 2,
// 		name: "사회",
// 	},
// ];


function Header() {
	const {category} = useCategory();
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
							<li key={item.id}>
								<Link to={item.id === null ? "/books" : `/books?category_id=${item.id}`}>
									{item.name}
								</Link>
							</li>
						))
					}
				</ul>
			</nav>
			<nav className="auth">
				<ul>
					<li>
						<a href={"/login"}>
							{FaSignInAlt({})} 로그인</a>
					</li>
					<li>
						<a href={"/register"}> {FaRegUser({})} 회원가입</a>
					</li>

				</ul>

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

    .category, .auth {
        ul {
            display: flex;
            gap: 24px;

            li {
                a {
                    font-size: 1.2rem;
                    font-weight: 600;
                    text-decoration: none;
                    color: ${({theme}) => theme.color.text};
                    display: flex;
                    align-items: center;
                    line-height: 1;


                    svg {
                        margin-right: 6px;
                    }

                    &:hover {
                        color: ${({theme}) => theme.color.secondary};
                    }
                }
            }
        }
    }
`;
export default Header;