import React, { useEffect, useState } from 'react';
import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

function State() {


    const [dta, updDta] = useState([]);

    const getCoviddta = (async () => {

        const res = await fetch('https://api.covid19india.org/data.json');
        const data = await res.json();
        updDta(data.statewise);
    });

    useEffect(() => {
        getCoviddta();
    }, []);

    console.log(dta);

    return (
        <>
            <div className='tab'>
                <table class="table table-striped">
                    <thead id='head'>
                        <tr>
                            <th scope="col">Sr.no.</th>
                            <th scope="col">State</th>
                            <th scope="col">Total Case</th>
                            <th scope="col">Recovered</th>
                            <th scope="col">Deaths</th>
                            <th scope="col">Active</th>
                        </tr>
                    </thead>
                    {dta.map((value, index) => {
                        
                        if(index===0||index===31){
                            return <span></span>;
                        }
                        else if(index<31){
                            return <tbody>
                                <tr>
                                    <th scope="row">{index}</th>
                                    <td className='data'>{value.state}</td>
                                    <td className='data'>{value.confirmed}</td>
                                    <td className='data-recover'>{value.recovered}</td>
                                    <td className='death'>{value.deaths}</td>
                                    <td className='data'>{value.active}</td>
                                </tr>
                            </tbody>}
                        else if(index>31){
                        return <tbody>
                            <tr>
                                <th scope="row">{index-1}</th>
                                <td className='data'>{value.state}</td>
                                <td className='data'>{value.confirmed}</td>
                                <td className='data-recover'>{value.recovered}</td>
                                <td className='death'>{value.deaths}</td>
                                <td className='data'>{value.active}</td>
                            </tr>
                        </tbody>}
                    }
                    )}
                </table>
            </div>
        </>
    );
}

export default State;