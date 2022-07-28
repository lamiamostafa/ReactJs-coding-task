import React from 'react';
import './Home.css';

const Home = () => {
    return (
        <div>
            <h1 class="heading-one">Reciept Detail</h1>
            <>
                <form >
                    <div >
                        <label class="form-input" htmlFor="date">Date</label>
                        <input placeholder="Enter Date" type="text" name="date" id="date" />
                    </div>
                    <div >
                        <label class="form-input" htmlFor="amount">Amount</label>
                        <input placeholder="Enter Amount (in INR)" type="text" name="amount" id="amount" />
                    </div>
                    <div >
                        <label class="form-input" htmlFor="paymentmode">PaymentMode</label>
                        <input placeholder="Enter Date" type="text" name="paymentmode" id="paymentmode" />
                    </div>
                    <div >
                        <label class="form-input" htmlFor="remark">Remark</label>
                        <input placeholder="Enter Remark" type="text" name="reamrk" id="remark" />
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