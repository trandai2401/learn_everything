import React from "react";
import AddItem from "./AddItem";
import ItemCart from "./CardItem";

export default function Section({ section, index, reFresh }) {
  return (
    <>
      <h3>
        Chương {index + 1}: {section.title}
      </h3>
      <p>Nội dung: {section.description}</p>
      {section.items.map((item, index) => (
        <ItemCart key={index} item={item} index={index} />
      ))}

      <AddItem sectionId={section.id} reFresh={reFresh} />
    </>
  );
}
