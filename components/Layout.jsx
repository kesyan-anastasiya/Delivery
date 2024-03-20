const React = require("react");
const NavBar = require("./ui/NavBar");

//все, что будет оборачивать Layout, его будет оборачивать в children
function Layout({ title, children, user }) {
  return (
    <html lang="en">
      <head>
        <title>{title}</title>
        <link rel="stylesheet" href="/styles/reset.css" />
        <link
          href="/styles/bootstrap.css"
          rel="stylesheet"
          crossorigin="anonymous"
        ></link>
        <link rel="stylesheet" href="/styles/style.css" />
        <script defer src="/scripts/add.js" />
        <script defer src="/scripts/delete.js" />
        <script defer src="/scripts/update.js" />
      </head>
      <body>
        <NavBar user={user} />
        {children}
      </body>
    </html>
  );
};

module.exports=Layout