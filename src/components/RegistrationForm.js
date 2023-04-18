import React from 'react'
import { useState } from "react";
import URL from '../helpers/url'

const RegistrationForm = () => {
    const [datePicker] = useState(["9:00 AM", "9:30 AM", "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM", "12:00 PM", "12:30 PM", "1:00 PM", "1:30 PM", "2:00 PM", "2:30 PM", "3:00 PM", "3:30 PM", "4:00 PM", "4:30 PM", "5:00 PM", "5:30 PM", "6:00 PM", "6:30 PM", "7:00 PM", "7:30 PM", "8:00 PM", "8:30 PM", "9:00 PM"]);

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [contact, setContact] = useState("");
    const [pickup_point, setPickUpPoint] = useState("");
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [service_type, setServiceType] = useState("");
    const [package1, setPackage1] = useState("");
    
    const handleSubmit = (e) =>{
        e.preventDefault();
        let payload = {
            name,
            email,
            contact,
            pickup_point,
            date,
            time,
            service_type,
            package : package1
        }

        try {
            fetch(`${URL}order/register`,{
                method: 'POST',
                headers: {
                    'Accept': 'application/json, text/plain, */*',
                    'Content-Type': 'application/json'
                  },
                body: JSON.stringify(payload)
            })
            .then(response => response.json())
            .then(data => { console.log(data); if(data.success){alert("Order placed Successfully!"); setName(""); setEmail(""); setContact(""); setPickUpPoint(""); setDate(""); setTime(""); setServiceType(""); setPackage1("") } else{alert("Please Try Again!")} });
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className='container  mx-auto'>
            <h1 className='text-center mt-5 mb-3'>Book A Bike/ Scooty/ Chander-Gari</h1>
            <form className='d-flex justify-content-center' onSubmit={handleSubmit}>
                <div className="shadow" style={{ width: "50%" }}>
                    <div className="row g-3 m-2 align-items-center">
                        <div className="col-3">
                            <label htmlFor="name" className="col-form-label">Name:</label>
                        </div>
                        <div className="col-9">
                            <input type="text" id="name" className="form-control" aria-labelledby="name" value={`${name}`} onChange={(e) => setName(e.target.value)} />
                        </div>
                    </div>
                    <div className='row g-3 m-2 align-items-center'>
                        <div className="col-3">
                            <label htmlFor="email" className="col-form-label">Email:</label>
                        </div>
                        <div className="col-9">
                            <input type="email" id="email" className="form-control" aria-labelledby="email" value={`${email}`} onChange={(e) => setEmail(e.target.value)}/>
                        </div>
                    </div>
                    <div className='row g-3 m-2 align-items-center'>
                        <div className="col-3">
                            <label htmlFor="contact" className="col-form-label">Contact:</label>
                        </div>
                        <div className="col-9">
                            <input type="text" id="contact" className="form-control" aria-labelledby="contact" value={`${contact}`} onChange={(e) => setContact(e.target.value)} />
                        </div>
                    </div>
                    <div className='row g-3 m-2 align-items-center'>
                        <div className="col-3">
                            <label htmlFor="pickup point" className="col-form-label">Pickup Point:</label>
                        </div>
                        <div className="col-9">
                            <input type="text" id="pickup-point" className="form-control" aria-labelledby="pickup-point" value={`${pickup_point}`} onChange={(e) => setPickUpPoint(e.target.value)} />
                        </div>
                    </div>
                    <div className='row g-3 m-2 align-items-center'>
                        <div className="col-3">
                            <label htmlFor="date" className="col-form-label">Date:</label>
                        </div>
                        <div className="col-5">
                            <input type="date" id="date" className="form-control" aria-labelledby="date" value={`${date}`} onChange={(e) => setDate(e.target.value)} />
                        </div>
                    </div>

                    <div className='row g-3 m-2 align-items-center'>
                        <div className="col-3">
                            <label htmlFor="time" className="col-form-label">Time:</label>
                        </div>
                        <div className="col-5">
                            <select className="form-select" aria-label="Package" value={`${time}`} onChange={(e) => setTime(e.target.value)}>
                                <option value="-1" defaultValue={"Select"}>Select</option>
                                {
                                    datePicker.map((date, index) =>{
                                        return <option key={index} value={index}>{date}</option>
                                    })
                                }
                            </select>
                        </div>
                    </div>

                    <div className='row g-3 m-2 align-items-center'>
                        <div className="col-3">
                            <label htmlFor="package" className="col-form-label">Package:</label>
                        </div>
                        <div className="col-5">
                            <select className="form-select" aria-label="Package" value={`${package1}`} onChange={(e) => setPackage1(e.target.value)}>
                                <option value="0"defaultValue={"Select"}>Select</option>
                                <option value="1">6hr : 800TK</option>
                                <option value="2">8hr : 1000TK</option>
                                <option value="3">12hr : 1200TK</option>
                                <option value="4">24hr : 2000TK</option>
                            </select>
                        </div>
                    </div>

                    <div className='row g-3 m-2 align-items-center'>
                        <div className="col-3">
                            <label htmlFor="service-type" className="col-form-label">Service Type:</label>
                        </div>
                        <div className="col-5">
                            <select className="form-select" aria-label="service type" value={`${service_type}`} onChange={(e) => setServiceType(e.target.value)}>
                                <option value="0" defaultValue={"Select"}>Select</option>
                                <option value="1">Bike</option>
                                <option value="2">Scooty</option>
                                <option value="3">Chander Gaari</option>
                            </select>
                        </div>
                    </div>

                    <div className='row g-3 m-2 align-items-center justify-content-center'>
                        <div className="">
                            <input type="submit" id="submit" className="form-control bg-primary text-white" aria-labelledby="submit" />
                        </div>
                    </div>

                </div>
            </form>
        </div>
    )
}

export default RegistrationForm