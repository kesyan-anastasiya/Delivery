const React = require('react')

function Form(district) {
    return (
        <div className="input-group mb-3 ">
            <form action="/api/orders" method="Post" className="form-container">
                <label className="input-group-text">Название</label>
                <input
                    type="text"
                    name="name"
                    className="form-control"
                    required
                />
                <label className="input-group-text">Цена</label>
                <input
                    type="file"
                    name="price"
                    className="form-control"
                    required
                />
                <label className="input-group-text">Изображение</label>
                <input
                    type="text"
                    name="img"
                    className="form-control"
                    required
                />
                <label className="input-group-text">Район</label>
                <input
                    type="text"
                    name="distrit"
                    className="form-control"
                    required
                />
                <label className="input-group-text">Скидка</label>
                <input
                    type="text"
                    name="discount"
                    className="form-control"
                    required
                />
                <label className="input-group-text">Состав заказа</label>
                <textarea
                    type="text"
                    name="description"
                    className="form-control"
                ></textarea>
                <button className="btn btn-success" type="submit">
                    Создать
                </button>
            </form>
        </div>
    )
}

module.exports = Form
