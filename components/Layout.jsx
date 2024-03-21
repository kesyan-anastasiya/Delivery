const React = require("react");
const NavBar = require("./ui/NavBar");

//все, что будет оборачивать Layout, его будет оборачивать в children
function Layout({ title, children}) {
  return (
    <html lang="en">
      <head>
        <title>{title}</title>
      </head>
      <body>
        <NavBar/>
        {children}
      </body>
    </html>
  );
};

module.exports=Layout