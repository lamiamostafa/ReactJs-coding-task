import React, { useState } from 'react';
import './Home.css';

const Home = () => {
    const [userReciept, setUserReciept] = useState({
        date: "",
        amount: "",
        paymentmode: "",
        remark: ""



    });
    const [records, setRecords] = useState([]);
    const handleInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setUserReciept({ ...userReciept, [name]: value })

    }
    const handleSubmit = (e) => {
        e.preventDefault();
        const newRecieptRecord = { ...userReciept, id: new Date().getTime().toString() }
        setRecords([...records, newRecieptRecord]);
        setUserReciept({
            date: "",
            amount: "",
            paymentmode: "",
            remark: ""
        });

    };
    return (
        <div>
            <h1 class="heading-one">Reciept Detail</h1>
            <>
                <form onSubmit={handleSubmit}>
                    <div class="form-div" >
                        <label class="form-input" htmlFor="date">Date</label>
                        <input placeholder="Enter Date" type="text"
                            value={userReciept.date} onChange={handleInput} name="date" id="date" />
                    </div>
                    <div class="form-div" >
                        <label class="form-input" htmlFor="amount">Amount</label>
                        <input placeholder="Enter Amount (in INR)"
                            type="text" value={userReciept.amount} onChange={handleInput} name="amount" id="amount" />
                    </div>
                    <div class="form-div">
                        <label class="form-input" htmlFor="paymentmode">PaymentMode</label>
                        <input placeholder="Enter payment" type="text"
                            value={userReciept.paymentmode} onChange={handleInput} name="paymentmode" id="paymentmode" />
                    </div>
                    <div class="form-div">
                        <label class="form-input" htmlFor="remark">Remark</label>
                        <input placeholder="Enter Remark" value={userReciept.remark} onChange={handleInput} type="text" name="remark" id="remark" />
                    </div>
                    <div >
                        <button class="button">Cancel</button>
                        <button class="button" type="submit">Submit</button>
                    </div>

                </form>
                <div>
                    {
                        records.map((currEle) => {
                            return (
                                <div key={currEle.id}>
                                    <p>{currEle.date}</p>
                                    <p>{currEle.amount}</p>
                                    <p>{currEle.paymentmode}</p>
                                    <p>{currEle.remark}</p>
                                </div>
                            )
                        })
                    }
                </div>
            </>

        </div>
    );
};

export default Home;