"use cielnt";
import React, { useState } from "react";
import { CiClock2 } from "react-icons/ci";
import { PiPhoneCallLight } from "react-icons/pi";
import { CiLocationOn } from "react-icons/ci";
import { MdOutlineDone } from "react-icons/md";

function BranchReceipt({ setShowModal }) {
  let currentTime = new Date().toLocaleString({ timeZone: "Egypt/Alexandria" });
  let time = new Date(currentTime);
  let now = time.getHours();

  const branches = [
    {
      branchName: "فرع الإسكندرية شارع الإقبال",
      openTime: 9,
      closeTime: 2,
      branchNumber: "01200084002",
      location: "https://goo.gl/maps/zEdTyPfsbmWTR6g36",
    },
  ];
  const [selectedBranch, setSelectedBranch] = useState(branches[0].branchName);

  return (
    <div className="mt-[7rem]" style={{ height: "63vh" }}>
      {branches.map((branch, index) => (
        <div
          onClick={() => setSelectedBranch(branch.branchName)}
          key={branch.branchName + index}
          className="border mb-2 mx-4 px-3 py-6 rounded-md   flex justify-between items-center cursor-pointer"
        >
          <div>
            <div className="font-bold flex gap-1 items-center">
              {selectedBranch === branch.branchName && (
                <MdOutlineDone className="bg-[#592F15] p-1 text-white rounded-full text-xl" />
              )}
              <spna>{branch.branchName}</spna>
            </div>
            {branch.openTime > now ? (
              <div className="flex gap-2 items-end ">
                <div className="bg-[#f9e6e8] w-[60px] text-center text-[#eb5455] mt-2  rounded-sm py-0.5 px-3 text-xs ">
                  مغلق
                </div>
                <div className="text-sm">
                  سيفتح الساعة {branch.openTime} صباحاَ
                </div>
              </div>
            ) : (
              <div className="flex gap-2 items-end">
                <div className="bg-[#57b66d] w-[60px] text-center text-white mt-2  rounded-sm py-0.5 px-3 text-xs ">
                  مفتوح
                </div>
                <div className="text-sm">
                  سيغلق الساعة {branch.closeTime} صباحاَ
                </div>
              </div>
            )}
          </div>
          <div className="flex gap-2 text-4xl font-light">
            <div data-title={"موقع الفرع"} className="pseudo-tooltip-wrapper">
              <a target="_blank" href={branch.location}>
                <CiLocationOn />
              </a>
            </div>
            <div data-title={"رقم الفرع"} className="pseudo-tooltip-wrapper">
              <a target="_blank" href={`tel:${branch.branchNumber}`}>
                <PiPhoneCallLight />
              </a>
            </div>
          </div>
        </div>
      ))}
      <div
        onClick={() => setShowModal(false)}
        className="bg-[#191919] absolute bottom-0 w-[100%]  hover:bg-[#2e2e2e] p-3 text-white text-xl flex items-center justify-center pb-4 font-bold  cursor-pointer "
      >
        إستلام من هذا الفرع
      </div>
    </div>
  );
}

export default BranchReceipt;
