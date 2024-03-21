const React = require("react");

function NavBar(){
return (
    <div className="navbar navbar-expand-lg border-bottom border-body ">
        <a className="navbar-brand" href="/">
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
        <a className="navbar-brand"  href="/">
            Зарегистрируйся
        </a>
    </div>
)
}

module.exports = NavBar;