import React from "react";

export default function Ninjas(props) {
  const { ninjas } = props;

  //   const ninjaList = ninjas.map((ninja) => {
  // if (ninja.age > 30) {
  //   return (
  //     <div className="ninja" key={ninja.id}>
  //       <div>Name: {ninja.name}</div>
  //       <div>Age: {ninja.age}</div>
  //       <div>Belt: {ninja.belt}</div>
  //     </div>
  //   );
  // } else {
  //   return null;
  // }
  //   });

  const ninjaList = ninjas.map((ninja) => {
    return ninja.age > 30 ? (
      <div className="ninja" key={ninja.id}>
        <div>Name: {ninja.name}</div>
        <div>Age: {ninja.age}</div>
        <div>Belt: {ninja.belt}</div>
      </div>
    ) : null;
  });
  return <div className="ninja-list">{ninjaList}</div>;
}
