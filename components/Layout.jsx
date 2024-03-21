const React = require('react')
const NavBar = require('./ui/NavBar')

//все, что будет оборачивать Layout, его будет оборачивать в children
function Layout({ title, children, user }) {
    return (
        <html lang="en">
            <head>
                <title>{title}</title>
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
            </head>
            <body>
                <NavBar />
                {children}
            </body>
        </html>
    )
}

module.exports = Layout
