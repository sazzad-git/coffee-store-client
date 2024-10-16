import React from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateCoffee = () => {
  const { _id, name, quantity, supplier, taste, category, details, photo } =
    useLoaderData();

  const handleUpdateCoffee = (e) => {
    e.preventDefault();

    const form = e.target;

    const name = form.name.value;
    const quantity = form.quantity.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const photo = form.photo.value;

    const UpdatedCoffee = {
      name,
      quantity,
      supplier,
      taste,
      category,
      details,
      photo,
    };

    // send data to the server
    fetch(`http://localhost:5000/coffee/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(UpdatedCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.matchedCount > 0) {
          Swal.fire({
            title: "Success!",
            text: "Coffee Updated Successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });
  };

  return (
    <div className="bg-[#F4F3F0] p-20">
      <h2 className="text-3xl font-extrabold text-black">
        Update coffee: {name}
      </h2>
      {/* form */}
      <form onSubmit={handleUpdateCoffee} className="mt-4">
        {/* form row */}
        {/* Name and Quantity row*/}
        <div className="mb-8 md:flex">
          <div className="md:w-1/2 form-control">
            <span className="label-text">Coffee Name</span>
            <label className="input-group">
              <input
                type="text"
                name="name"
                defaultValue={name}
                placeholder="Coffee Name"
                className="w-full bg-white input input-bordered"
              />
            </label>
          </div>
          <div className="w-1/2 ml-4 form-control">
            <span className="label-text">Available Quantity</span>
            <label className="input-group">
              <input
                type="text"
                name="quantity"
                defaultValue={quantity}
                placeholder="Available Quantity"
                className="w-full bg-white input input-bordered"
              />
            </label>
          </div>
        </div>
        {/* form supplier and Taste row  */}
        <div className="mb-8 md:flex">
          <div className="md:w-1/2 form-control">
            <span className="label-text">Supplier Name</span>
            <label className="input-group">
              <input
                type="text"
                name="supplier"
                defaultValue={supplier}
                placeholder="Supplier Name"
                className="w-full bg-white input input-bordered"
              />
            </label>
          </div>
          <div className="w-1/2 ml-4 form-control">
            <span className="label-text">Taste</span>
            <label className="input-group">
              <input
                type="text"
                name="taste"
                defaultValue={taste}
                placeholder="Taste"
                className="w-full bg-white input input-bordered"
              />
            </label>
          </div>
        </div>
        {/* form Category and Details row */}
        <div className="mb-8 md:flex">
          <div className="md:w-1/2 form-control">
            <span className="label-text">Category</span>
            <label className="input-group">
              <input
                type="text"
                name="category"
                defaultValue={category}
                placeholder="Category"
                className="w-full bg-white input input-bordered"
              />
            </label>
          </div>
          <div className="w-1/2 ml-4 form-control">
            <span className="label-text">Details</span>
            <label className="input-group">
              <input
                type="text"
                name="details"
                defaultValue={details}
                placeholder="Details"
                className="w-full bg-white input input-bordered"
              />
            </label>
          </div>
        </div>
        {/* form Photo URL row */}
        <div className="mb-8">
          <div className="w-full form-control">
            <span className="label-text">Photo URL</span>
            <label className="input-group">
              <input
                type="text"
                name="photo"
                defaultValue={photo}
                placeholder="Photo URL"
                className="w-full bg-white input input-bordered"
              />
            </label>
          </div>
        </div>
        <input
          type="submit"
          value="Update Coffee"
          className="text-white btn btn-block"
        />
      </form>
    </div>
  );
};

export default UpdateCoffee;
