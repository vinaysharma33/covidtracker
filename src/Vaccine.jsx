import {React, useEffect, useState} from 'react';

let date=new Date();
console.log(date.toLocaleDateString());

function Vaccine() {
    const [dta, updDta] = useState([]);

    const getCoviddta = (async () => {

        const res = await fetch(`https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByDistrict?district_id=488&date=${date.toLocaleDateString()}`);
        const data = await res.json();
        console.log(data.sessions);
        updDta(data.sessions);
    });

    useEffect(() => {
        getCoviddta();
    }, []);

    return (
        <>
    <h2 id='centre-head'>Vaccination centres in Ludhiana on {date.toLocaleDateString()}</h2>
            <div className='tab'>
                <table class="table table-striped">
                    <thead id='head'>
                        <tr>
                            <th scope="col">Sr.no.</th>
                            <th scope="col">Centre ID</th>
                            <th scope="col">Name</th>
                            <th scope="col">Address</th>
                            <th scope="col">Vaccine</th>
                            <th scope="col">Fee</th>
                            <th scope="col">Age Limit</th>
                            <th scope="col">From</th>
                            <th scope="col">To</th>
                        </tr>
                    </thead>
                    {dta.map((value, index) => {

                        if(value.max_age_limit==null){
                            return <tbody>
                            <tr>
                                <th scope="row">{index+1}</th>
                                <td className='data'>{value.center_id}</td>
                                <td className='data'>{value.name}</td>
                                <td className='data'>{value.address}</td>
                                <td className='data'>{value.vaccine}</td>
                                <td className='data'>{value.fee}</td>
                <td className='data'>{value.min_age_limit} to __</td>
                <td className='data'>{value.from}</td>
                <td className='data'>{value.to}</td>
                            </tr>
                        </tbody>
                        }

                            return <tbody>
                                <tr>
                                    <th scope="row">{index+1}</th>
                                    <td className='data'>{value.center_id}</td>
                                    <td className='data'>{value.name}</td>
                                    <td className='data'>{value.address}</td>
                                    <td className='data'>{value.vaccine}</td>
                                    <td className='data'>{value.fee}</td>
                    <td className='data'>{value.min_age_limit} to {value.max_age_limit}</td>
                    <td className='data'>{value.from}</td>
                    <td className='data'>{value.to}</td>
                                </tr>
                            </tbody>})}
                        
                    
                </table>
            </div>
        </>
    );
}

export default Vaccine;