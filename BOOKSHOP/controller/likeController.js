const ensureAuthorization = require("../auth");
const jwt = require("jsonwebtoken");
const conn = require("../mariadb");
const {StatusCodes} = require("http-status-codes");

const addLike = (req, res) => {
  const book_id = req.params.id;
  let authorization = ensureAuthorization(req, res);
  if (authorization instanceof jwt.TokenExpiredError) {
    return res.status(StatusCodes.UNAUTHORIZED).json({
      "message": "로그인 세션이 만료되었습니다.",
    });
  } else if (authorization instanceof jwt.JsonWebTokenError) {
    return res.status(StatusCodes.BAD_REQUEST).json({
      "message": "잘못된 토큰입니다.",
    });
  } else {
    let sql = "INSERT INTO likes (user_id, liked_book_id) VALUES (?,?);";
    let values = [authorization.id, book_id];
    conn.query(sql, values, (err, results) => {
      if (err) {
        return res.status(StatusCodes.BAD_REQUEST).end();
      } else return res.status(StatusCodes.OK).end();

    });
  }

};

const removeLike = (req, res) => {
  const book_id = req.params.id;

  let authorization = ensureAuthorization(req, res);
  if (authorization instanceof jwt.TokenExpiredError) {
    return res.status(StatusCodes.UNAUTHORIZED).json({
      "message": "로그인 세션이 만료되었습니다.",
    });
  } else if (authorization instanceof jwt.JsonWebTokenError) {
    return res.status(StatusCodes.UNAUTHORIZED).json({
      "message": "로그인 세션이 만료되었습니다.",
    });
  } else {

    let sql = "DELETE FROM likes WHERE user_id = ? AND liked_book_id =?";
    let values = [authorization.id, book_id];
    conn.query(sql, values, (err, results) => {
      if (err) {
        return res.status(StatusCodes.BAD_REQUEST).end();
      } else return res.status(StatusCodes.OK).end();
    });
  }
};


module.exports = {addLike, removeLike};

