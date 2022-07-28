import React, { useState } from 'react';
import './Home.css';

const Home = () => {
    const [userReciept, setUserReciept] = useState({
        date: "",
        amount: "",
        paymentmode: "",
        remark: ""



    });
    const handleInput = () => {

    }
    return (
        <div>
            <h1 class="heading-one">Reciept Detail</h1>
            <>
                <form >
                    <div >
                        <label class="form-input" htmlFor="date">Date</label>
                        <input placeholder="Enter Date" type="text"
                            value={userReciept.date} onChange={handleInput} name="date" id="date" />
                    </div>
                    <div >
                        <label class="form-input" htmlFor="amount">Amount</label>
                        <input placeholder="Enter Amount (in INR)"
                            type="text" value={userReciept.amount} onChange={handleInput} name="amount" id="amount" />
                    </div>
                    <div >
                        <label class="form-input" htmlFor="paymentmode">PaymentMode</label>
                        <input placeholder="Enter payment" type="text"
                            value={userReciept.paymentmode} onChange={handleInput} name="paymentmode" id="paymentmode" />
                    </div>
                    <div >
                        <label class="form-input" htmlFor="remark">Remark</label>
                        <input placeholder="Enter Remark" value={userReciept.remark} onChange={handleInput} type="text" name="remark" id="remark" />
                    </div>
                    <div>
                        <button>Cancel</button>
                        <button>Submit</button>
                    </div>

                </form>
            </>

        </div>
    );
};

export default Home;