import React from "react";
export default function Output({ list }) {
  
  return (
    <section className="ShowInput">
      {React.Children.toArray(
        list.map((element) => {
          return (
            <DataCard name={element.username} feedback={element.userfeedback} />
          );
        })
      )}
    </section>
  );

  function DataCard({ name, feedback }) {
    return (
      <div className="feedback">
        <p>{name}{feedback}</p>
      </div>
    );
  }
}
