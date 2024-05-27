import React from "react";
import { useNavigate } from "react-router-dom";

const PlanPayment = () => {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    alert("Your Details has been submitted!");
    navigate("/BmiCal");
    // You can perform further actions here, like sending data to a server
  };

  return (
    <div className="row wrapper">
      <div className="col-10 col-lg-5">
        <form onSubmit={handleSubmit} className="shadow-lg">
          <h1 className="mb-4">Card Info</h1>
          <div className="form-group">
            <label htmlFor="card_num_field">Card Number</label>
            <input
              type="text"
              id="card_num_field"
              class="form-control"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="card_exp_field">Card Expiry</label>
            <input
              type="text"
              id="card_exp_field"
              className="form-control"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="card_cvc_field">Card CVC</label>
            <input
              type="text"
              id="card_exp_field"
              className="form-control"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="name">Name: </label>
            <input required type="text" name="name" className="form-control" />
          </div>

          <button
            type="submit"
            id="shipping_btn"
            // style={{ display: "none" }}
            className="btn btn-block py-3"
          >
            Pay
          </button>
        </form>
      </div>
    </div>
  );
};

export default PlanPayment;
