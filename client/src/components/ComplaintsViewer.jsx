/* eslint-disable no-multi-str */
import React, { useEffect, useState } from "react";
import axios from "axios";

function ComplaintsViewer(props) {
  const [comps, setComps] = useState([]);

  const getComplaints = async () => {
    try {
      const res = await axios.get("http://localhost:5000/viewcomplaints");
      setComps(res.data);
    } catch (err) {
      console.log(err);
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
            </div>
          )
        );
      })}
    </div>
  );
}

export default ComplaintsViewer;
