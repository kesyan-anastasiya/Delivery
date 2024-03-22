const React = require('react')
const Layout = require('../Layout')
const Cards = require('../ui/Cards')

function MainPage({ districts, carts, title, user }) {
    return (
        <Layout title={title} user={user}>
            <div>
                <form className="select-district">
                    <label for="districtId">
                        <select
                            className="form-select"
                            name="districtId"
                            id="districtId"
                        >
                            <option key={30} value={30}>Все районы</option>
                            {districts.map((district) => (
                                <option key={district.id} value={district.id}>
                                    {district.name}
                                </option>
                            ))}
                        </select>
                    </label>

                  
                </form>
            </div>
            <Cards carts={carts} />
        </Layout>
    )
}
module.exports = MainPage
