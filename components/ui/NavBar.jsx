const React = require('react')

function NavBar({ user }) {
    console.log(user)
    return (
        <div className="navbar navbar-expand-lg border-bottom border-body nav-conteiner">
            <div className="nav-el">
                <a className="navbar-brand" href="/">
                    Главная
                </a>
            </div>
            {user?.status === 'Admin' && (
                <>
                    <h1>Привет {user.name}! Пора кормить людей! </h1>
                    <a className="navbar-brand" href="/my-orders">
                        Мои заказы
                    </a>

                    <a className="navbar-brand" href="/orders">
                        Cоздать заказ
                    </a>

                    <a className="navbar-brand" href="/api/auth/logout">
                        Выход
                    </a>
                </>
            )}
            {user?.status === undefined && (
                <>
                    <>
                        <a className="navbar-brand" href="/auth/sign-in">
                            Вход
                        </a>
                        <a className="navbar-brand" href="/auth/sign-up">
                            Регистрация
                        </a>
                    </>
                </>
            )}

            {user?.status === 'lox' && (
                <>
                    <a className="navbar-brand" href="/my-orders">
                        Мои заказы
                    </a>
                    <h1>Привет {user.name}! Пора сделать сочный заказ! </h1>
                    <a className="navbar-brand" href="/api/auth/logout">
                        Выход
                    </a>
                </>
            )}
        </div>
    )
}

module.exports = NavBar
