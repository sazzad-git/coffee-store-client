import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import CoffeeCard from "./CoffeeCard";

const Home = () => {
  const loadedCoffee = useLoaderData();
  const [coffees, setCoffees] = useState(loadedCoffee);
  return (
    <div className="m-20 my-20">
      <h2 className="text-6xl text-center text-purple-600">
        Hot Hot Cold COffee: {loadedCoffee.length}
      </h2>
      <div className="grid gap-5 pt-10 md:grid-cols-2">
        {coffees?.map((coffee) => (
          <CoffeeCard
            key={coffee._id}
            coffee={coffee}
            coffees={coffees}
            setCoffees={setCoffees}
          ></CoffeeCard>
        ))}
      </div>
    </div>
  );
};

export default Home;
