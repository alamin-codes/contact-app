import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'


const AddContact = ({ onAddContact, onAddNewContact }) => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        address: ""
    });

    

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        fetch("http://localhost:3001/contacts", {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(formData)
        })
            .then(res => res.json())
            .then(data => {
                // onAddContact(data)
                onAddNewContact(data)
                alert("Contact added successfully");
                navigate("/")
            })
    }



    return (
        <div>

            <Link to="/">
                <button className='border rounded px-1'>Contact app</button>
            </Link>
            <h2 className='text-2xl font-bold'>Add New Contact</h2>
            <form onSubmit={handleSubmit}>

                <div>
                    <label htmlFor="fname">First Name</label><br />
                    <input
                        id='fname'
                        name='firstName'
                        value={formData.firstName}
                        onChange={handleChange}
                        type='text'
                        className='border rounded outline-0'
                        required
                    />
                </div>
                <div>
                    <label htmlFor="lname">Last Name</label><br />
                    <input
                        id='lname'
                        name='lastName'
                        value={formData.lastName}
                        onChange={handleChange}
                        type='text'
                        className='border rounded outline-0'
                        required
                    />
                </div>
                <div>
                    <label htmlFor="email">Email</label><br />
                    <input
                        id='email'
                        name='email'
                        value={formData.email}
                        onChange={handleChange}
                        type='email'
                        className='border rounded outline-0'
                        required
                    />
                </div>
                <div>
                    <label htmlFor="phone">Phone</label><br />
                    <input
                        id='phone'
                        name='phone'
                        value={formData.phone}
                        onChange={handleChange}
                        type='tel'
                        className='border rounded outline-0'
                        required
                    />
                </div>
                <div>
                    <label htmlFor="text">Address</label><br />
                    <textarea
                        id='text'
                        name='address'
                        value={formData.address}
                        onChange={handleChange}
                        cols="23"
                        className='border rounded outline-0'
                    />
                </div>


                <hr className='mb-3' />
                <button className='border rounded px-1 me-3'>Save</button>
                <Link to="/">
                    <button className='border rounded px-1'>Cancel</button>
                </Link>
            </form>
        </div>
    )
}

export default AddContact