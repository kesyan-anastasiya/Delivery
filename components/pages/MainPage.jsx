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

// <div class="card" style="width: 18rem;">
//   <img src="..." class="card-img-top" alt="...">
//   <div class="card-body">
//     <h5 class="card-title">Card title</h5>
//     <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//     <a href="#" class="btn btn-primary">Go somewhere</a>
//   </div>
// </div>
