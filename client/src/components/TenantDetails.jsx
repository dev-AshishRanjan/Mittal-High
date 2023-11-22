import axios from "axios";
import React, { useEffect, useState } from "react";
import { MdDeleteForever } from "react-icons/md";
import { toast } from "react-toastify";

function TenantDetails(props) {
  const header = ["Tenant no", "Room_no", "Name", "Age", "DOB", "Stat", "Del"];

  const [tenantRows, setTenantRows] = useState([]);

  const getTenantRows = async () => {
    try {
      const res = await axios.get(`${process.env.REACT_APP_SERVER}/tenantDetails`);
      setTenantRows(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  const deleteTenant = async (tenant_id) => {
    try {
      const res = await axios.post(`${ process.env.REACT_APP_SERVER } / deletetenant`, {
        userId: tenant_id,
      });
    if (res.status === 200) {
      toast.success("Deleted successfully");
      getTenantRows();
    }
  } catch (error) {
    console.log(error);
    toast.error(error.message);
  }
};

useEffect(() => {
  getTenantRows();
}, []);

return (
  <section className="w-screen py-20 pl-5 pr-5 flex justify-center items-center">
    <div className="container card overflow-hidden">
      <div className="flex flex-wrap">
        <div className="w-full">
          <div className="max-w-full overflow-x-auto">
            <table className="table-auto w-full">
              <thead>
                <tr className="bg-blue-500 text-center">
                  {header.map((ele, index) => {
                    return (
                      <th
                        key={index + 1}
                        className="
                              w-1/6
                              min-w-[120px]
                              text-lg
                              font-semibold
                              text-white
                              py-4
                              lg:py-7       
                              px-3
                              lg:px-4
                              border-l border-transparent
                              "
                      >
                        {ele}
                      </th>
                    );
                  })}
                </tr>
              </thead>
              <tbody>
                {/* <tr> */}
                {tenantRows.map((ele, index) => {
                  return (
                    <tr key={index + 1}>
                      <td
                        className="
                              text-center text-dark
                              font-medium
                              text-base
                              py-5
                              px-2
                              border-b border-l border-[#E8E8E8]
                              "
                      >
                        {ele.tenant_id}
                      </td>
                      <td
                        className="
                              text-center text-dark
                              font-medium
                              text-base
                              py-5
                              px-2
                              border-b border-l border-[#E8E8E8]
                              "
                      >
                        {ele.room_no}
                      </td>
                      <td
                        className="
                              text-center text-dark
                              font-medium
                              text-base
                              py-5
                              px-2
                              border-b border-l border-[#E8E8E8]
                              "
                      >
                        {ele.name}
                      </td>
                      <td
                        className="
                              text-center text-dark
                              font-medium
                              text-base
                              py-5
                              px-2
                              border-b border-l border-[#E8E8E8]
                              "
                      >
                        {ele.age}
                      </td>
                      <td
                        className="
                              text-center text-dark
                              font-medium
                              text-base
                              py-5
                              px-2
                              border-b border-l border-[#E8E8E8]
                              "
                      >
                        {ele.dob}
                      </td>
                      <td
                        className="
                              text-center text-dark
                              font-medium
                              text-base
                              py-5
                              px-2
                              border-b border-l border-[#E8E8E8]
                              "
                      >
                        {ele.stat}
                      </td>
                      <td
                        className="
                              text-dark
                              font-semibold
                              text-xl
                              py-5
                              px-2
                              text-red-500
                              border-b border-l border-[#E8E8E8]
                              text-center
                              "
                      >
                        <MdDeleteForever className="cursor-pointer" onClick={() => {
                          deleteTenant(ele.tenant_id)
                        }} />
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </section>
);
}

export default TenantDetails;
