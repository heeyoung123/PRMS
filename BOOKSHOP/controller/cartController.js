const ensureAuthorization = require("../auth");
const conn = require("../mariadb");
const {StatusCodes} = require("http-status-codes");
const jwt = require("jsonwebtoken");

const addToCart = (req, res) => {
  const {book_id, quantity} = req.body;
  let authorization = ensureAuthorization(req, res);
  if (authorization instanceof jwt.TokenExpiredError) {
    return res.status(StatusCodes.UNAUTHORIZED).json({
      "message": "로그인 세션이 만료되었습니다.",
    });
  } else if (authorization instanceof jwt.JsonWebTokenError) {
    return res.status(StatusCodes.UNAUTHORIZED).json({
      "message": "잘못된 토큰입니다..",
    });
  } else {
    let sql = "INSERT INTO cartItems (book_id, quantity, user_id) VALUES (?,?,?)";
    let values = [book_id, quantity, authorization.id];
    conn.query(sql, values, (err, result) => {
      if (err) {
        return res.status(StatusCodes.BAD_REQUEST).end();
      }
      return res.status(StatusCodes.OK).end();
    });
  }
};


const removeCartItem = (req, res) => {
  let authorization = ensureAuthorization(req, res);
  if (authorization instanceof jwt.TokenExpiredError) {
    return res.status(StatusCodes.UNAUTHORIZED).json({
      "message": "로그인 세션이 만료되었습니다.",
    });
  } else if (authorization instanceof jwt.JsonWebTokenError) {
    return res.status(StatusCodes.UNAUTHORIZED).json({
      "message": "잘못된 토큰입니다..",
    });
  } else {
    const cartItemId = req.params.id;

    let sql = "DELETE FROM cartItems WHERE id = ?";
    conn.query(sql, cartItemId, (err, result) => {
      if (err) {
        return res.status(StatusCodes.BAD_REQUEST).end();
      }
      return res.status(StatusCodes.OK).json(result);
    });
  }
};

const getCartItems = (req, res) => {
  const {selected} = req.body;

  let authorization = ensureAuthorization(req, res);
  if (authorization instanceof jwt.TokenExpiredError) {
    return res.status(StatusCodes.UNAUTHORIZED).json({message: "로그인 세션이 만료되었습니다."});
  } else if (authorization instanceof jwt.JsonWebTokenError) {
    return res.status(StatusCodes.BAD_REQUEST).json({message: "잘못된 토큰입니다."});
  } else if (!authorization.id) {
    return res.status(StatusCodes.BAD_REQUEST).json({message: "유효하지 않은 사용자 정보입니다."});
  }
  //이부분 조금?
  else {
    let sql = `
        SELECT cartItems.id, book_id, title, summary, quantity, price
        FROM cartItems
                 LEFT JOIN books ON cartItems.book_id = books.id
        WHERE user_id = ?
    `;
    let values = [authorization.id];

    if (selected.length > 0) {
      sql += " AND cartItems.id IN (?)";
      values.push(selected);
    }

    conn.query(sql, values, (err, result) => {
      if (err) {
        return res.status(StatusCodes.BAD_REQUEST).json({message: "DB 오류 발생", error: err});
      }
      return res.status(StatusCodes.OK).json(result);
    });
  }

};
module.exports = {addToCart, removeCartItem, getCartItems};

