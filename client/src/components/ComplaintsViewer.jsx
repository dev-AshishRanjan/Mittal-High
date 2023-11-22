/* eslint-disable no-multi-str */
import React, { useEffect, useState } from "react";
import axios from "axios";
import { MdDeleteForever } from "react-icons/md";
import { toast } from "react-toastify";

function ComplaintsViewer(props) {
  const [comps, setComps] = useState([]);

  const getComplaints = async () => {
    try {
      const res = await axios.get(`${process.env.REACT_APP_SERVER}/viewcomplaints`);
      setComps(res.data);
      console.log({ res });
    } catch (err) {
      console.log(err);
    }
  };

  const deleteComplaints = async (room_no) => {
    try {
      const res = await axios.post(`${process.env.REACT_APP_SERVER } / deletecomplaint`, {
        roomId: room_no,
      });
    if (res.status === 200) {
      toast.success("Deleted successfully");
      getComplaints();
    }
  } catch (error) {
    console.log(error);
    toast.error(error.message);
  }
};

useEffect(() => {
  getComplaints();
}, []);

return (
  <div className="p-5 background h-screen w-full ">
    {comps.map((ele, index) => {
      return (
        ele.complaints &&
        ele.room_no && (
          <div
            key={index + 1}
            className="border-2 my-3 card p-5 flex  justify-evenly"
          >
            <div className="mx-3">
              <h1 className="text-center font-semibold">{ele.room_no}</h1>
              <h2 className=" capitalize text-center text-gray-500">
                Room No
              </h2>
            </div>
            <div className="mx-3">
              <h2 className="text-center font-semibold"> {ele.complaints}</h2>
              <h1 className=" capitalize text-center text-gray-500">
                Complaints
              </h1>
            </div>
            <div className="mx-3 flex justify-center items-center text-lg text-red-500">
              <MdDeleteForever className="cursor-pointer" onClick={() => {
                deleteComplaints(ele.room_no)
              }} />
            </div>
          </div>
        )
      );
    })}
  </div>
);
}

export default ComplaintsViewer;
