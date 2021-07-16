import React from "react";
import "../css/card.css";
import { Container, Navbar, Button } from "react-bootstrap";

export function Card({ props }) {
  return props.map((business, index) => {
    return (
      <div className="Cards" id={business.id} key={business.id}>
        <img className="Cards_image" alt="" href={business.image_url} />
        <h3>
          <a src={business.url}>{business.name}</a>
        </h3>
        <p className="isOpen">{business.is_closed ? "Open" : "Closed"}</p>
        <p>Review Count: {business.review_count}</p>
      </div>
    );
  });
}
