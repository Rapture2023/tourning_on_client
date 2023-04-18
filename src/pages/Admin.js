import React from 'react'
import { useState, useEffect } from 'react';
import URL from '../helpers/url'
import { useNavigate, Link } from 'react-router-dom';
const Admin = () => {
    const navigate = useNavigate();

    useEffect(() => {
       if(!window.id){
        navigate('/login')
       }
    }, []);


    useEffect(() => {
        const headers = { Authorization: `Bearer ${window.id}` };
        fetch(`${URL}order/orders_all`, { headers })
            .then(response => response.json())
            .then(data => {setData(data.orders); setLoading(false)});
    }, []);


    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const handleChange = (e) =>{
        console.log(e.target.defaultChecked)
        console.log(e.target.value)
        if(!e.target.defaultChecked){
            let payload = {
                "completed" : true
            }
            try {
                fetch(`${URL}order/update_order/${e.target.value}`,{
                    method: 'PUT',
                    headers: {
                        'Accept': 'application/json, text/plain, */*',
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${window.id}`
                      },
                    body: JSON.stringify(payload)
                })
                .then(response => response.json())
                .then(data => {console.log(data); console.log("successfully changed the completed")});
            } catch (error) {
                console.log(error)
            }
        }

        else{
            let payload = {
                "completed" : false
            }
            try {
                fetch(`${URL}order/update_order/${e.target.value}`,{
                    method: 'PUT',
                    headers: {
                        'Accept': 'application/json, text/plain, */*',
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${window.id}`

                      },
                    body: JSON.stringify(payload)
                })
                .then(response => response.json())
                .then(data => {console.log("successfully changed the completed")});
            } catch (error) {
                console.log(error)
            }
        }
    }

    useEffect(() => {
        const headers = { Authorization: `Bearer ${window.id}` };
        fetch(`${URL}order/orders_all`, { headers })
            .then(response => response.json())
            .then(data => {setData(data.orders); setLoading(false)});
    }, [handleChange]);
    return (
        <div className='container mt-5'>
            <h1>Admin page</h1>
            <div> <Link to={'/'}>Go to Main Page</Link></div>
            {loading ? "Loading........." : <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Contact</th>
                        <th scope="col">Pickup Point</th>
                        <th scope="col">Date</th>
                        <th scope="col">Time</th>
                        <th scope="col">Package</th>
                        <th scope="col">Service Type</th>
                        <th scope="col">Completion</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((x, index) => {
                        return <tr key={x._id} className={x.completed === true ? 'bg-success text-white' : 'bg-secondary text-warning'}>
                            <th scope="row">{x.name}</th>
                            <td>{x.email}</td>
                            <td>{x.contact}</td>
                            <td>{x.pickup_point}</td>
                            <td>{x.date}</td>
                            <td>{x.time}</td>
                            <td>{x.package}</td>
                            <td>{x.service_type}</td>
                            <td><div className="form-check form-switch">
                                <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" value={x._id} defaultChecked={x.completed ? true: false} onChange={handleChange}/>
                                <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{x.completed.toString()}</label>
                            </div></td>
                        </tr>
                    })}
                </tbody>
            </table>}
            
        </div>
    )
}

export default Admin