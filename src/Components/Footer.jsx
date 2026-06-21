import React from "react";

export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "#263238",
        color: "#F8FAFC",
        padding: "40px 50px",
        fontFamily: "Times New Roman, serif",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "30px",
        }}
      >
        <div>
          <h3>NovaMart</h3>
          <p>
            Delivering groceries, essentials,
            <br />
            and daily needs to your doorstep.
          </p>
        </div>

        <div>
          <h4>Quick Links</h4>
          <p>Home</p>
          <p>Categories</p>
          <p>Offers</p>
          <p>Orders</p>
        </div>

        <div>
          <h4>Customer Support</h4>
          <p>Help Center</p>
          <p>Track Order</p>
          <p>Returns</p>
          <p>Contact Us</p>
        </div>

        <div>
          <h4>Contact</h4>
          <p>Email: support@novamart.com</p>
          <p>Phone: +91 98765 43210</p>
        </div>
      </div>

      <hr
        style={{
          margin: "25px 0",
          border: "1px solid #F8FAFC",
        }}
      />

      <p style={{ textAlign: "center", margin: 0 }}>
        © 2026 NovaMart. All Rights Reserved.
      </p>
    </footer>
  );
}