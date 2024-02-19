
import { ArrowLeftIcon } from "@heroicons/react/24/solid";
import React, { useState, ChangeEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import Layout from '../../components/layout/Layout'


const HouseDetails = () => {

    const navigate = useNavigate();
    const handleGoBack = () => {
      navigate(-1); // Navigates back one step in the history
    };
    return (
      <Layout>
            
    <div className="my-5 grid grid-cols-1 gap-4">
    <head className="grid lg:grid-cols-3 gap-4 mb-5">
              <div className="">
                <button
                  onClick={handleGoBack}
                  className="flex gap-2 text-slate-800"
                >
                  <ArrowLeftIcon className="0" width={24} height={24} />{" "}
                  <span>Back</span>
                </button>
              </div>

              <div className="col-span-2 justify-center ">
                <h1 className="text-2xl font-bold text-blue  ">
                  House Details
                </h1>
              </div>
                </head>
                
                <div className="flex justify-center gap-x-[130px] w-[85%]  ">
                <Link to="/data-collection">
        <button className="bg-blue text-slate-100 px-3 py-1 rounded-md">Add Person</button>
                    </Link>
                    
                    <Link to="/sanitationlist">
        <button className="bg-blue text-slate-100 px-3 py-1 rounded-md">Sanitation</button>
      </Link>
                </div>

                <section className="mt-12">
                <div className="overflow-x-auto">
          <table className="min-w-full text-center text-sm font-light mt-8 overflow-x-auto table-auto">
            <thead className="font-medium bg-blue text-slate-100 ">
              <tr>
                <th scope="col" className="px-6 py-4">
                  #
                </th>
                <th scope="col" className="px-6 py-4">
                  Name
                </th>
                <th scope="col" className="px-6 py-4">
                  Gender
                </th>
                <th scope="col" className="px-6 py-4">
                  Age
                </th>
                {/* <th scope="col" className="px-6 py-4">
                  Street
                </th>

                <th scope="col" className="px-6 py-4">
                  Number
                </th>
                <th scope="col" className="px-6 py-4">
                  Action
                </th> */}
                
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="whitespace-nowrap px-6 py-4 font-medium">1</td>
                <td className="whitespace-nowrap px-6 py-4">Essien Mike</td>
                <td className="whitespace-nowrap px-6 py-4">Male</td>
                <td className="whitespace-nowrap px-6 py-4">7</td>

     
              </tr>

              <tr>
                <td className="whitespace-nowrap px-6 py-4 font-medium">2</td>
                <td className="whitespace-nowrap px-6 py-4"> Ekiti</td>
                <td className="whitespace-nowrap px-6 py-4">mitaima</td>
                <td className="whitespace-nowrap px-6 py-4">12</td>
                
              </tr>
            </tbody>
          </table>
        </div>

                </section>
    </div>
    </Layout>

            )
}

export default HouseDetails





