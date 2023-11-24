import axios from "axios";
import React, { useContext, useState, useEffect } from "react";
import { HamContext } from "../HamContextProvider";

function Dashboard(props) {
  const { hamActive, hamHandler } = useContext(HamContext);
  const [forBox, setForBox] = useState();

  const getBoxInfo = async () => {
    const whom = JSON.parse(window.localStorage.getItem("whom")).userType;
    try {
      const res = await axios.post(`http://localhost:5000/dashboard/${whom}`, {
        userId: JSON.parse(window.localStorage.getItem("whom")).username,
      });
      if (whom === "admin") {
        const forAdminBox = [
          { "Total Owner": 59 },
          { "Total Tenant": 39 },
          { "Total Employee": 20 },
        ];
        forAdminBox[0]["Total Owner"] = res.data.totalowner;
        forAdminBox[2]["Total Employee"] = res.data.totalemployee;
        forAdminBox[1]["Total Tenant"] = res.data.totaltenant;
        setForBox(forAdminBox);
      }
      if (whom === "owner") {
        const forOwnerBox = [
          { "No of Emloyees": 5 },
          // { "Total Tenant": 4 },
          { "Total complaints": 2 },
        ];
        forOwnerBox[0]["No of Emloyees"] = res.data.totalemployee;
        // forOwnerBox[1]["Total Tenant"] = res.data.totaltenant;
        forOwnerBox[1]["Total complaints"] = res.data.totalcomplaint;
        setForBox(forOwnerBox);
      }
      if (whom === "employee") {
        const forEmployeeBox = [
          { "Total complaints": 31 },
          { Salary: "Rs. 20,0000" },
        ];
        forEmployeeBox[0]["Total complaints"] = res.data.totalcomplaint;
        forEmployeeBox[1].Salary = "Rs. " + res.data.salary;
        setForBox(forEmployeeBox);
      }
      if (whom === "tenant") {
        const forTenantBox = [
          { "tenant id": 12132 },
          { "Tenant Name": "Tharun" },
          { "Tenant age": 20 },
          { dob: "12-1-2002" },
          { "Room no": 123456 },
        ];
        forTenantBox[0]["tenant id"] = res.data[0].tenant_id;
        forTenantBox[1]["Tenant Name"] = res.data[0].name;
        forTenantBox[2]["Tenant age"] = res.data[0].age;
        forTenantBox[3].dob = res.data[0].dob;
        forTenantBox[4]["Room no"] = res.data[0].room_no;
        setForBox(forTenantBox);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getBoxInfo();
  }, []);

  return (
    <div
      onClick={() => {
        if (hamActive === true) {
          hamHandler();
        }
      }}
      style={{
        filter: hamActive ? "blur(2px)" : "blur(0px)",
      }}
      className="w-screen background"
    >
      <div className="grid grid-cols-2 md:grid-cols-4 grid-rows-2 md:grid-rows-2 gap-5 p-10">
        {forBox &&
          forBox.map((ele, index) => {
            return (
              <div key={index + 1} className=" p-3 card pl-10">
                <h1 className="font-bold text-2xl ">
                  {Object.values(forBox[index])}
                </h1>
                <p className="font-bold text-sm capitalize text-gray-500">
                  {Object.keys(forBox[index])}
                </p>
              </div>
            );
          })}
      </div>
      <div className="p-10 -mt-14">
        <div className=" card p-5 ">
          <div>
            <h1 className="text-center font-semibold text-2xl">
              Apartment Rules and Regulation
            </h1>
          </div>
          <ol className="list-[inherit] px-6 py-2 text-gray-500">
            <li>Residents are encouraged to maintain the premises with care and report any issues promptly.</li>
            <li>Respect for neighbors' privacy and peaceful enjoyment of their space is paramount.</li>
            <li>Rent payments are due on the specified date to ensure a harmonious living environment for all.</li>
            <li>Any alterations to the apartment require written approval from the administration.</li>
            <li>Residents are advised to have proper insurance coverage for personal belongings.</li>
            <li>Damage deposits will be refunded promptly upon verifying the premises are damage-free upon departure.</li>
            <li>Residents are expected to refrain from tampering with heating, lighting, or other building systems.</li>
            <li>Parking is limited to designated areas outlined by yellow lines for the convenience of all residents.</li>
            <li>Sanitary items should be disposed of properly, wrapped and placed with other waste.</li>
            <li>Residents are responsible for securing windows during inclement weather for their safety.</li>
            <li>Women's security is a priority, and measures are in place to ensure a safe and comfortable living environment for all.</li>
            <li>The administration is committed to fostering a home away from home atmosphere, prioritizing the well-being and satisfaction of all residents.</li>
          </ol>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
