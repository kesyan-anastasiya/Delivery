const React = require('react')
const Layout = require('./../Layout')
const Form = require('../ui/Form')

function UpdatePage({ district, title, order, user }) {
    return (
        <Layout user={user}>
            <div className="input-group mb-3 ">
                <form
                    action={`/api/orders/${order.id}`}
                    method="Post"
                    className="form-container"
                    enctype="multipart/form-data"
                >
                    <label className="input-group-text">Название</label>
                    <input
                        type="text"
                        name="name"
                        className="form-control"
                        value={order.name}
                    />
                    <label className="input-group-text">Цена</label>
                    <input
                        type="text"
                        name="price"
                        className="form-control"
                        value={order.price}
                    />
                    <label className="input-group-text">Изображение</label>
                    <input
                        type="file"
                        name="img"
                        className="form-control"
                        value={order.img}
                    />
                    <label className="input-group-text">Район</label>
                    <input
                        type="text"
                        name="distrit"
                        className="form-control"
                        value={order.districtId}
                    />
                    <label className="input-group-text">Скидка</label>
                    <input
                        type="text"
                        name="discount"
                        className="form-control"
                        value={order.discount}
                    />
                    <label className="input-group-text">Состав заказа</label>
                    <textarea
                        type="text"
                        name="description"
                        className="form-control"
                        value={order.description}
                    ></textarea>
                    <button className="btn btn-success" type="submit">
                        Изменить
                    </button>
                </form>
            </div>
        </Layout>
    )
}

module.exports = UpdatePage
