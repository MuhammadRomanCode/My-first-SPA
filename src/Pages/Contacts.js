 import React from 'react'
 import { useState } from 'react'

function Contacts(props) {
      
    const [select, setSelect] = useState ('solo')

    return (
        <div style={{ background: `${props.mode}` }}>
            <div className="container-lg  mt-5 py-5">
                <div className="d-flex justify-content-center align-items-center ">
                    <div className="box border w-100 row bg-light rounded-3 h-auto">
                        <div className="col-12 col-md-6 p-5">
                            <h2 className='fw-semibold mt-4 mx-3'>Chat With Our Team</h2>
                            <p className='mt-3 mx-3 lh-lg text-secondary'>Need Help with something? What a demo? Get in touch with our friendly team and we'll get in touch within 2 hours.</p>
                            <div className="row mt-5">
                                <div className="col-sm-6 mb-3">
                                    <input className="form-control p2 border-0 border-bottom bg-light" placeholder='Name :' />
                                </div>
                                <div className="col-sm-6 mb-3">
                                    <input className="form-control p-2 border-0 border-bottom bg-light" placeholder='Last Name :' />
                                </div>
                                <div className="col-12">
                                    <input className='form-control mt-2 p-2 border-0 border-bottom bg-light' placeholder='Job Title :'/>
                                </div>
                                <div className="col-12 mt-3">
                                    <input className='form-control mt-2 p-2 border-0 border-bottom bg-light' placeholder='Email :'/>
                                </div>
                                 <div className="col-12 mt-3">
                                    <input className='form-control mt-2 p-2 border-0 border-bottom bg-light' placeholder='Phone :'/>
                                </div>
                            </div>
                            <p className='mt-5 fw-semibold'>Number of Employees</p>
                            <div className="solo d-flex p-3 rounded-2" onClick={()=> setSelect("solo")} style={{border: select === "solo"?"2px solid blue":"2px solid transparent", cursor: "pointer",transition: "0.3s"}}>
                                <div className="user p-3 mt-1 mb-3 border rounded-3"><i className='fa-solid fa-user'></i></div>
                                <div className="texts">
                                    <h6 className='mx-3 mt-2 fw-bold'>I am A solo Creator</h6>
                                    <p className='mt-1 mx-3 text-secondary'>I need to Set Up an Account for myself</p>
                                </div>
                            </div>
                            <div className="team d-flex p-3 rounded-2" onClick={()=>setSelect("team")} style={{border: select === "team"?"2px solid blue":"2px solid transparent", cursor: "pointer",transition: "0.3s"}}>
                                <div className="user p-3 mt-1 mb-3 border rounded-3"><i className='fa-solid fa-users'></i></div>
                                <div className="texts">
                                    <h6 className='mx-3 mt-2 fw-bold'>I am part of a Team</h6>
                                    <p className='mt-1 mx-3 text-secondary'>I need to set up an account for a Team</p>
                                </div>
                            </div>
                            <button className="btn btn-primary w-100 mt-4 p-2">Get in Touch</button>


                        </div>
                        <div className="col-0 col-md-6 align-items-center d-none d-md-flex"><img src="/Assets/Employee.png" className='img-fluid rounded-2' alt="Employee img" /></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contacts
