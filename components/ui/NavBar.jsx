const React = require("react");

function NavBar({user}){
return (
    <div className="navbar navbar-expand-lg border-bottom border-body nav-conteiner">
        <div className="nav-el">
            <a className="navbar-brand" href="/">
                Главная
            </a>
        </div>
        <div className="nav-el">
            <a className="navbar-brand" href="/orders">
                Cоздать заказ
            </a>
            <a className="navbar-brand" href="/history">
                История заказов
            </a>
            <a className="navbar-brand" href="/my-orders">
                Мои заказы
            </a>
            <a className="navbar-brand" href="/auth/sign-in">
                Вход
            </a>
            <a className="navbar-brand" href="/auth/sign-up">
                Регистрация
            </a>
            {user && <div>{user.name}</div>}
        </div>
    </div>
)
}

module.exports = NavBar;