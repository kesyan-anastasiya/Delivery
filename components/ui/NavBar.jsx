const React = require("react");

function NavBar({user}){
return (
    <div className="navbar navbar-expand-lg border-bottom border-body ">
      {user && <div>{user.name}</div>}
        <a className="navbar-brand" href="/auth/sign-in">
            Вход
        </a>
        <a className="navbar-brand" href="/">
            Заказы
        </a>
        <a className="navbar-brand" href="/">
            Корзина
        </a>
        <a className="navbar-brand" href="/orders">
            Cоздать заказ
        </a>
        <a className="navbar-brand"  href="/auth/sign-up">
            Зарегистрируйся
        </a>
    </div>
)
}

module.exports = NavBar;