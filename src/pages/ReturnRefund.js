import React from 'react'

import NavBar from '../components/NavBar';
const ReturnRefund = () => {
  return (
    <div>
      <div>
        <NavBar></NavBar>
      </div>

      <div className="post text-center">

        <h1>Return and Refund Policy
        </h1>
        <p>Touring on will provide refunds for following issues.
        </p>
      </div>
      <div>
        <h5 className="my-margin30">Service Delivery Failure:</h5>
        <p className="   my-margin40 ">

          tourning on will fully refund when an order service is undelivered on time due to any issue (deducting the Payment Gateway Charge)
          If you have paid for any service through our platform but did not receive the service at all on the booked time, please raise a return request through the support email with the following information.
        </p>
        <div className=" my-margin40">
          <p className="   my-margin40 ">Full Name:</p>
          <p className="   my-margin40 ">Contact Number:</p>
          <p className="   my-margin40 ">Email Address:</p>
          <p className="   my-margin40 ">Service Package Name:</p>
          <p className="   my-margin40 ">Package Volume (BDT):</p>
          <h6 >Support Email Address :  support@tourningon.com</h6>
          <p>Or, call for a refund request at: 09611- 900 -153</p>

        </div>
        <h5 className="my-margin30">Booking Cancellation:  </h5>
        <div className=" font-weight-normal text-justify my-margin40 ">

          For any kind of booking cancellation, the refund policy will be based on the following model.
          <div className=" my-margin40">
            <p className="   my-margin40 ">A. Cancel before 24 hrs of booking - 100% refund</p>
            <p className="   my-margin40 ">B.Cancel before 12 hrs of booking - 75% refund</p>
            <p className="   my-margin40 ">C.Cancel before 6 hrs of booking - 50% refund</p>
            <p className="   my-margin40 ">D. Cancel before 4 hrs of booking - 25% refund </p>
            <div className="   my-margin20 ">
              <p >*Payment Gateway Settlement fee will be deducted.</p>

            </div>
          </div>
        </div>
        <h6 className="my-margin20 colorRed">Refund requests must be raised within the next 24 hours of the service delivery. No refund for the cancellation less than 4 hours before the service booking time.
        </h6>
        <p className=" font-weight-normal text-justify my-margin40 ">

          For any kind of queries please feel free to write to support@tourningon.com
        </p>

      </div>


    </div>

  );

}
export default ReturnRefund