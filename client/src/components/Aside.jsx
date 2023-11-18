import React from "react";
import { NavLink } from "react-router-dom";

function Aside(props) {
  return (
    <div className="hidden md:block h-[calc(100vh-56px)] transition translate-all duration-300 text-sm bg-[#061025] text-white p-3 sticky z-50 top-14 l-0 ">
      <ul className="font-medium">
        {props.forHam &&
          props.forHam.map((ele, index) => {
            if (ele === "Home") {
              return (
                <li key={index + 1} className="mt-6 px-8 text-left">
                  <NavLink to={`/${props.base}`}>
                    <span className=" border-2 border-transparent hover:border-b-black">
                      {ele}
                    </span>
                  </NavLink>
                </li>
              );
            }
            return (
              <li key={index + 1} className="mt-6 px-8 text-left">
                <NavLink to={`/${props.base}/${ele.replace(/\s/g, "").toLowerCase()}`}>
                  <span className=" border-2 border-transparent hover:border-b-black">
                    {ele}
                  </span>
                </NavLink>
              </li>
            );
          })}
      </ul>
    </div>
  );
}

export default Aside;
