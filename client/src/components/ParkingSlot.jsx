import axios from "axios";
import React, { useState, useEffect } from "react";

function ParkingSlot(props) {
  const [parkingSlot, setParkingSlot] = useState([]);

  const slots = async () => {
    try {
      const res = await axios.post(`${process.env.REACT_APP_SERVER}/viewparking`, {
        userId: JSON.parse(localStorage.getItem("whom")).username,
      });
      setParkingSlot(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    slots();
  }, []);
  return (
    <div className="w-screen h-screen  flex justify-center items-center">
      <div className="card p-5 justify-center items-center flex-wrap">
        <div>
          <h1 className="ml-2 text-lg my-2 font-bold">Parking Slot</h1>
        </div>
        <div className="flex">
          {parkingSlot.map((ele, index) => {
            if (ele.parking_slot === null) {
              return (
                <div
                  key={index + 1}
                  className="w-full h-full flex justify-center items-center"
                >
                  <h1 className="font-medium text-lg">No parking slot alloted</h1>
                </div>
              );
            } else {
              return (
                <div key={index + 1} className="p-5 border-2 m-2 rounded-md">
                  <p className="font-semibold text-xl">{ele.parking_slot}</p>
                  <h1 className="text-gray-500">Slot no</h1>
                </div>
              );
            }
            // console.log(ele);
          })}
        </div>
      </div>
    </div>

  );
}

export default ParkingSlot;
