import axios from "axios";
import React, { useState, useRef } from "react";
import { toast } from "react-toastify";

function CreatingParkingSlot() {
  const roomEl = useRef(null);
  const slotNoEl = useRef(null);
  const [roomNo, setRoomno] = useState("");
  const [slotNo, setSlotNo] = useState("");

  const createSlot = async () => {
    try {
      const res = await axios.post(`${process.env.REACT_APP_SERVER}/bookslot`, {
        roomNo: roomNo,
        slotNo: slotNo,
      });
      if (res.status === 200) {
        roomEl.current.value = "";
        slotNoEl.current.value = "";
        toast.success("Parking slot alloted");
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  const submitHandler = function (e) {
    e.preventDefault();
    createSlot();
  };
  return (
    <div className="flex items-center  justify-center h-screen w-screen">
      <div className="container mx-auto">
        <div className="max-w-md mx-auto my-5 p-5  card">
          <div className="m-7">
            <form onSubmit={submitHandler} action="" method="POST" id="form">
              <div>
                <h1 className="text-center font-bold text-gray-600 my-2">
                  Parking Slot
                </h1>
              </div>
              <div className="mb-6">
                <label
                  htmlFor="roomNo"
                  className="block mb-2  text-base text-gray-600 "
                >
                  Room No
                </label>
                <input
                  type="text"
                  ref={roomEl}
                  value={roomNo}
                  onChange={() => {
                    setRoomno(roomEl.current.value);
                  }}
                  name="Room no"
                  id="Room no"
                  placeholder="Enter your Room no"
                  required
                  className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 bg-[#eeeff1]"
                />
              </div>

              <div className="mb-6">
                <label
                  htmlFor="pno"
                  className="text-base mb-2 block text-gray-600 "
                >
                  Parking Number
                </label>
                <input
                  type="text"
                  ref={slotNoEl}
                  value={slotNo}
                  onChange={() => {
                    setSlotNo(slotNoEl.current.value);
                  }}
                  name="pno"
                  id="pno"
                  placeholder="Enter Parking slot number"
                  required
                  className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 bg-[#eeeff1]"
                />
              </div>

              <div className="mb-6">
                <button
                  type="submit"
                  className="w-full px-3 py-3  text-white bg-blue-500 rounded-md focus:bg-blue-600 focus:outline-none hover:bg-white hover:text-blue-500 transition-all duration-300 hover:border-blue-500 border-transparent border-2"
                >
                  Book slot
                </button>
              </div>
              <p
                className="text-base text-center text-gray-400"
                id="result"
              ></p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreatingParkingSlot;
