const React = require('react')
const Layout = require('./../Layout')
const Cards = require('../ui/Cards')
function OrderHistory({ carts }) {
    return (
        <html lang="en">
            <head>
                <title></title>
                <link rel="stylesheet" href="/styles/reset.css" />
                <link
                    rel="stylesheet"
                    href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
                    integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN"
                    crossOrigin="anonymous"
                />
                <link rel="stylesheet" href="/styles/style.css" />
                <script defer src="/scripts/add.js" />
                <script defer src="/scripts/delete.js" />
                <script defer src="/scripts/update.js" />
                <script defer src="/scripts/auth.js" />
            </head>
            <body>
                <div className="four">
                    Вам сюда не надо
                    <a href="/">
                        <button className="btn btn-secondary">
                            Вернуться в безопасность
                        </button>
                    </a>
                </div>
            </body>
        </html>
    )
}

module.exports = OrderHistory
