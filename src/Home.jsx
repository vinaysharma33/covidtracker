import React, {useEffect, useState} from 'react';

function Home() {

    const[dta,updDta]=useState([]);

    const getCoviddta =(async() => {
    
        const res = await fetch('https://api.covid19india.org/data.json');
        const data = await res.json();
        updDta(data.statewise[0]);
});

useEffect(() => {
    getCoviddta();
}, []);
return (
    <>
        <div id="container">
            <div id="cards">
                <div id="card">
                    <p>Country</p>
                    <p>India</p>
                </div>
                <div id="card-mid">
                    <p><span className='head'>Total</span> Cases</p>
                    <p>{dta.confirmed}</p>
                </div>
                <div id="card-right">
                    <p><span className='head'>Total</span> Recovered</p>
<p>{dta.recovered}</p>
                </div>
                <div id="card">
                    <p><span className='head'>Total</span> Deaths</p>
                    <p>{dta.deaths}</p>
                </div>
                <div id="card-mid">
                    <p><span className='head'>Total</span> Active</p>
                    <p>{dta.active}</p>
                </div>
                <div id="card-right">
                    <p><span className='head'>Last</span> Updated</p>
                    <p>{dta.lastupdatedtime}</p>
                </div>
            </div>
        </div>
    </>
);
}

export default Home;