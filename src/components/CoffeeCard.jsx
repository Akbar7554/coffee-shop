import React from "react"
import { AiOutlineEye, AiFillDelete } from "react-icons/ai"
import { RiEditLine } from "react-icons/ri"
import { Link } from "react-router-dom"
import Swal from "sweetalert2"
const CoffeeCard = ({ coffee, coffees, setCoffees }) => {
  const { _id, name, chef, supplier, taste, category, details, photo } = coffee
  const handleDelete = (_id) => {
    console.log(_id)
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        console.log("Delete Confirmed")
        fetch(
          `https://coffee-server-2hkhw5ry4-akbar7554.vercel.app/coffee/${_id}`,
          {
            method: "DELETE",
          }
        )
          .then((res) => res.json())
          .then((data) => {
            console.log(data)
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Coffee has been deleted.", "success")
              const remaining = coffees.filter((cof) => cof._id !== _id)
              setCoffees(remaining)
            }
          })
      }
    })
  }
  return (
    <div className="card card-side bg-[#F5F4F1] shadow-lg p-10">
      <figure>
        <img className="h-40 w-38 ml-10 mr-10" src={photo} alt="Movie" />
      </figure>
      <div className="flex gap-40 w-full pr-5">
        <div>
          <h2 className="card-title">Name : {name}</h2>
          <p>{chef}</p>
          <p>{supplier}</p>
          <p>{taste}</p>
        </div>
        <div className="card-actions justify-end">
          <div className="btn-group btn-group-vertical space-y-4">
            <button className="text-xl bg-[#D2B48C] w-10 h-10 rounded-lg flex justify-center items-center">
              <AiOutlineEye className="text-white"></AiOutlineEye>
            </button>
            <Link to={`update-Coffee/${_id}`}>
              <button className="text-xl bg-[#3C393B] w-10 h-10 rounded-lg flex justify-center items-center">
                <RiEditLine className="text-white"></RiEditLine>
              </button>
            </Link>
            <button
              onClick={() => handleDelete(_id)}
              className="text-xl bg-[#EA4744] w-10 h-10 rounded-lg flex justify-center items-center"
            >
              <AiFillDelete className="text-white"></AiFillDelete>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CoffeeCard
