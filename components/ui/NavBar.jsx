const React = require("react");

function NavBar(){
return (
<div> 
    <a href = '/auth/sign-in'>Вход</a>
    <a href = '/'>Заказы</a>
    <a href = '/'>Корзина</a>
    <a href = '/auth/sign-up'>Зарегистрируйся</a>
</div>
)
}

module.exports = NavBar;