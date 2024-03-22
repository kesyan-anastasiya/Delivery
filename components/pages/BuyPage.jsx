const React = require('react')
const Layout = require('../Layout')
function BuyPage({ user }) {
    return (
        <Layout>
            Спасибо, что выбрали наш сервис! К сожалению, сейчас мы принимаем
            оплату только на карты бобров!
            <form
                action="/api/orders/buy"
                method="Post"
                className="form-container"
            >
                <label className="input-group-text">Имя</label>
                <input
                    type="text"
                    name="name"
                    className="form-control"
                    required
                />
                <label className="input-group-text">Адрес</label>
                <input
                    type="text"
                    name="adress"
                    className="form-control"
                    required
                />
                <label className="input-group-text">Телефон</label>
                <input
                    type="text"
                    name="phone"
                    className="form-control"
                    required
                />
                <label className="input-group-text">Комментарий к заказу</label>
                <textarea
                    type="text"
                    name="comment"
                    className="form-control"
                ></textarea>
                <button className="btn btn-success" type="submit">
                    Купить
                </button>
            </form>
        </Layout>
    )
}

module.exports = BuyPage
