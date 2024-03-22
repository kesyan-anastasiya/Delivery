const React = require('react')


function Form({districts}) {
    return (
        <div className="input-group mb-3 ">
            <form
                action="/api/orders"
                method="Post"
                enctype="multipart/form-data"
                className="form-container"
            >
                <label className="input-group-text">Название</label>
                <input
                    type="text"
                    name="name"
                    className="form-control"
                    required
                />
                <label className="input-group-text">Цена</label>
                <input
                    type="text"
                    name="price"
                    className="form-control"
                    required
                />
                <label className="input-group-text">Изображение</label>
                <input
                    type="file"
                    name="img"
                    className="form-control"
                    required
                />
                <label className="input-group-text">Район</label>
                <select className="form-select" name="districtId" id="">
                    {districts.map((district) => (
                        <option key={district.id} value={district.id}>
                            {district.name}
                        </option>
                    ))}
                </select>

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
