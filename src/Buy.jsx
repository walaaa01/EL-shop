import React from 'react';

function Buy() {
  
  return (
<div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col">
            <div className="text-center">
                <h1 className="text-5xl font-bold mb-4">Paiement Details</h1>
            </div>
            <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={(e)=>{e.preventDefault(); alert("paied successfully! you will recieve your command withing 48 hours!")}} className="card-body">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input type="text" placeholder="name" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Surname</span>
                    </label>
                    <input type="text" placeholder="surname" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Address</span>
                    </label>
                    <input type="text" placeholder="address" className="input input-bordered" required />
                </div>  
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Phone Number</span>
                    </label>
                    <input type="text" placeholder="phone number" className="input input-bordered" required />
                </div>     
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Card Number</span>
                    </label>
                    <input type="text" placeholder="card number" className="input input-bordered" required pattern='[0-9]{16}' title='invalid card'/>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Confidential Code (8 digits)</span>
                    </label>
                    <input type="password" placeholder="confidential code" className="input input-bordered" required  pattern='[0-9]{8}' title='invalid code'/>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Secret Code (4 digits)</span>
                    </label>
                    <input type="password" placeholder="secret code" className="input input-bordered" required pattern='[0-9]{4}' title='invalid code' />
                </div>
                <div className="form-control mt-6">
                    <button className="btn btn-primary mb-2">Submit Command</button>
                    
                </div>
            </form>
        </div>
      </div>
    </div>
  )
}

export default Buy
