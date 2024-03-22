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
            {/* <body>
            <div class="spinner-border text-primary" role="status">
  <span class="visually-hidden">Загрузка...</span>
</div>
                <div className="four">
                    Вам сюда не надо
                    <a href="/">
                        <button className="btn btn-secondary">
                            Вернуться в безопасность
                        </button>
                    </a>
                </div>
            </body> */}
            <body>
    <div class="error-container">
        <h1 class="error-title">404</h1>
        <p class="error-message">Вам сюда не надо</p>
        <img src="https://arigus.tv/upload/resize_cache/iblock/3b2/680_680_1/yr85idltllgw1hfsgmbqf8dbfhde515n.jpg" alt="Page Not Found" class="error-image"/>
        <a href="/description/14" class="error-button">Вернуться к пельмешкам</a>
    </div>
</body>
            {/* <body>
    <div class="error-container">
        <h1 class="error-title">404</h1>
        <p class="error-message">Page Not Found</p>
        <a href="index.html" class="error-button">Go to Homepage</a>
    </div>
</body> */}

        </html>
    )
}

module.exports = OrderHistory
