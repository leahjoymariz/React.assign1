import './admin.css';
import { useState } from 'react';

function Admin() {
    const [product, setProduct] = useState({});


    function handleTextChange(e){
        const value = e.target.value;
        const name = e.target.name;

        product [name] = value;

        let copy = {...product};
        copy [name] = value;
        setProduct(copy);
    }

    function saveProduct(){
        console.log(product);
    }

    return <div className="admin">
        <h1>Manage your store</h1>

        <main>
            <section id="products">
                <h5>Products</h5>

                <form>
                    <div className="mb-3">
                        <label className="form-label">Title</label>
                        <input name="title" onChange={handleTextChange} type="text" className="from-control" />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Category</label>
                        <input name="category" onChange={handleTextChange}type="text" className="from-control" />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Image Name</label>
                        <input name="imag" onChange={handleTextChange}type="text" className="from-control" />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Price</label>
                        <input name="Price" onChange={handleTextChange}type="number" className="from-control" />
                    </div>

                    <div className="mb-3">
                        <button type="button" onClick={saveProduct} className="btn btn-primary">Save Product</button>   
                    </div>
                </form>
            </section>

            <section id="coupons">
                <h5>Coupon Codes</h5>
            </section>
        </main>
    </div>
    
}

export default Admin;