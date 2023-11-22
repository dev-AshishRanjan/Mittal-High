import axios from "axios";
import React, { useState, useRef } from "react";
import { toast } from "react-toastify";

function RaisingComplaints() {
  const blockEl = useRef(null);
  const roomEl = useRef(null);
  const descpEl = useRef(null);
  const tenantEl = useRef(null);

  const [blockno, setBlockno] = useState("");
  const [roomno, setRoomno] = useState("");
  const [tenantId, setTenantId] = useState("");
  const [descp, setDescp] = useState("");

  const raiseComplaint = async () => {
    try {
      const res = await axios.post(`${process.env.REACT_APP_SERVER}/raisingcomplaint`, {
        blockno: blockno,
        roomno: roomno,
        tenantId: tenantId,
        descp: descp,
      });
      if (res.status === 200) {
        toast.success("Complaint Raised");
        blockEl.current.value = "";
        roomEl.current.value = "";
        descpEl.current.value = "";
        tenantEl.current.value = "";
      } else {
        toast.info("Error : " + res.message);
      }
    } catch (err) {
      console.log(err);
      toast.error("Error : " + err.message);
    }
  };

  const submitHandler = function (e) {
    e.preventDefault();
    raiseComplaint();
  };

  return (
    <form onSubmit={submitHandler} className="h-screen w-screen flex flex-wrap justify-center items-center">
      <div className="h-screen flex flex-wrap justify-center items-center md:px-20">
        <div className=" card overflow-hidden px-6 py-10 max-w-2xl mx-auto">
          <h1 className="text-center text-2xl font-bold text-gray-500 mb-10">
            Add Complaint
          </h1>
          <div>
            <label
              htmlFor="room-no"
              className="my-2  font-semibold text-gray-500 text-lx font-serif"
            >
              Room no:
            </label>
            <input
              ref={roomEl}
              type="text"
              value={roomno}
              onChange={() => {
                setRoomno(roomEl.current.value);
              }}
              placeholder="Room no"
              id="room-no"
              className="ml-5 outline-none py-1 px-2 mb-3 text-md border-2 rounded-md bg-[#eeeff1]"
            />
            <div>
              <label
                htmlFor="block-no"
                className="text-base text-gray-500 font-semibold font-serif"
              >
                Block no:
              </label>
              <input
                ref={blockEl}
                type="text"
                value={blockno}
                onChange={() => {
                  setBlockno(blockEl.current.value);
                }}
                placeholder="Block no"
                id="block-no"
                className="ml-6 outline-none py-1 px-2  text-md border-2 rounded-md bg-[#eeeff1]"
              />
            </div>
            <div>
              <label
                htmlFor="tenant-id"
                className="my-2 font-semibold text-gray-500 text-lx font-serif"
              >
                Tenant Id:
              </label>
              <input
                ref={tenantEl}
                type="text"
                value={tenantId}
                onChange={() => {
                  setTenantId(tenantEl.current.value);
                }}
                placeholder="Tenant id"
                id="tenant-no"
                className="ml-5 outline-none py-1 my-3 px-2 text-md border-2 rounded-md bg-[#eeeff1]"
              />
            </div>
          </div>
          <div className="space-y-4">
            <label
              htmlFor="description"
              className="block text-base text-gray-500 font-semibold my-2 font-serif"
            >
              Description:
            </label>
            <textarea
              ref={descpEl}
              id="description"
              onChange={() => {
                setDescp(descpEl.current.value);
              }}
              cols="20"
              rows="3"
              value={descp}
              placeholder="Write here.."
              className="w-full font-serif  border-2 p-4  outline-none rounded-md bg-[#eeeff1]"
            ></textarea>
          </div>
          <button className="my-2 px-6 py-2 mx-auto block rounded-md text-lg font-semibold text-white hover:bg-white hover:text-blue-500 border-2 border-blue-500 transition-all duration-200 bg-blue-500">
            Add Complaint
          </button>
        </div>
      </div>
    </form>
  );
}

export default RaisingComplaints;
