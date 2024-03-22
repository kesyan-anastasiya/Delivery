const React = require('react')

function NavBar({ user }) {
    return (
        <div className="navbar navbar-expand-lg border-bottom border-body nav-conteiner">
            <div className="nav-el"></div>
            {user ? (
                <>
                    <a className="navbar-brand" href="/">
                        Главная
                    </a>

                    <a className="navbar-brand" href="/history">
                        История заказов
                    </a>
                    <h1>Привет, {user.name}! Пора выбрать вкусный заказ </h1>
                    <a className="navbar-brand" href="/my-orders">
                        Мои заказы
                    </a>
                    <a className="navbar-brand" href="/api/auth/logout">
                        Выход
                    </a>
                </>
            ) : (
                <>
                    <a className="navbar-brand" href="/">
                        Главная
                    </a>
                    <div className="nav-el">
                        <a className="navbar-brand" href="/auth/sign-in">
                            Вход
                        </a>
                        <a className="navbar-brand" href="/auth/sign-up">
                            Регистрация
                        </a>
                    </div>
                </>
            )}
        </div>
    )
}

module.exports = NavBar
