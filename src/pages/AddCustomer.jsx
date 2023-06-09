import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

import { Button } from "../components";
import { useStateContext } from "../contexts/ContextProvider";

const AddCustomer = () => {
  const { getResults, currentColor } = useStateContext();
  const [formSubmit, setFormSubmit] = useState(false);
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();

  useEffect(() => {
    getResults();
  }, []);

  const handleSubmit = () => {
    setFormSubmit(true);
  };

  return (
    <div className="mt-24">
      <div className="flex flex-wrap lg:flex-nowrap justify-center ">
        <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg h-[500px] rounded-xl w-full lg:w-[1024px] p-8 pt-9 m-3 bg-hero-pattern bg-no-repeat bg-cover bg-center flex flex-col items-center">
          <div className="flex justify-between items-center">
            <div
              className={
                formSubmit
                  ? "w-[650px] h-[265px] flex justify-center items-center"
                  : "hidden"
              }
            >
              Usuario agregado con éxito
            </div>

            <div className={formSubmit ? "hidden" : "block"}>
              <div className="font-semibold text-xl w-full mb-[10px]">
                Agregar cliente
              </div>

              <form
                action="https://gym-proficient-server-production.up.railway.app/users/create"
                method="post"
                className="w-[650px] h-[400px] flex flex-col"
                onSubmit={handleSubmit}
              >
                <div>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Nombre completo"
                    required
                    className="bg-[#fbfbfb] border-[#e5e7eb] border-solid border-[1px] rounded-[8px] w-[300px] h-[45px] outline-none p-[5px] m-[5px]"
                  />
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Email"
                    required
                    className="bg-[#fbfbfb] border-[#e5e7eb] border-solid border-[1px] rounded-[8px] w-[300px] h-[45px] outline-none p-[5px] m-[5px]"
                  />
                </div>
                <div className="flex">
                  <input
                    type="text"
                    id="dni"
                    name="dni"
                    placeholder="DNI"
                    required
                    className="bg-[#fbfbfb] border-[#e5e7eb] border-solid border-[1px] rounded-[8px] w-[300px] h-[45px] outline-none p-[5px] m-[5px]"
                  />
                  <div className="flex items-center border-transparent border-solid border-[1px] rounded-[8px] w-[300px] h-[45px] outline-none p-[5px] m-[5px]">
                    <label htmlFor="gender" className="text-gray-400">
                      Género:
                    </label>
                    <select
                      name="gender"
                      id="gender"
                      className="cursor-pointer outline-none"
                    >
                      <option value="">- Seleccionar -</option>
                      <option value="Femenino">Femenino</option>
                      <option value="Masculino">Masculino</option>
                    </select>
                  </div>
                </div>
                <div className="flex">
                <input
                    type="text"
                    id="classes"
                    name="classes"
                    placeholder="Clases"
                    required
                    className="bg-[#fbfbfb] border-[#e5e7eb] border-solid border-[1px] rounded-[8px] w-[300px] h-[45px] outline-none p-[5px] m-[5px]"
                  />
                  <div className="flex items-center border-transparent border-solid border-[1px] rounded-[8px] w-[300px] h-[45px] outline-none p-[5px] m-[5px]">
                    <label htmlFor="plan" className="text-gray-400">
                      Plan:
                    </label>
                    <select
                      name="plan"
                      id="plan"
                      className="cursor-pointer outline-none"
                    >
                      <option value="">- Seleccionar -</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                      <option value="6">6</option>
                      <option value="7">7</option>
                      <option value="8">8</option>
                      <option value="9">9</option>
                      <option value="10">10</option>
                      <option value="11">11</option>
                      <option value="12">12</option>
                      <option value="13">13</option>
                      <option value="14">14</option>
                      <option value="15">15</option>
                    </select>
                  </div>
                </div>
                <div className="flex">
                  <div className="border-transparent border-solid border-[1px] rounded-[8px] w-[300px] h-[90px] outline-none p-[5px] m-[5px]">
                    <label htmlFor="startDate">Fecha de inicio:</label>
                    <DatePicker
                      id="startDate"
                      name="startDate"
                      dateFormat="yyyy-MM-dd"
                      selected={startDate}
                      onChange={(date) => setStartDate(date)}
                      className="bg-[#fbfbfb] border-[#e5e7eb] border-solid border-[1px] rounded-[8px] w-[300px] h-[45px] outline-none p-[5px] cursor-pointer"
                    />
                  </div>
                  <div className="border-transparent border-solid border-[1px] rounded-[8px] w-[300px] h-[90px] outline-none p-[5px] m-[5px]">
                    <label htmlFor="endDate">Fecha de finalización:</label>
                    <DatePicker
                      id="endDate"
                      name="endDate"
                      dateFormat="yyyy-MM-dd"
                      selected={endDate}
                      onChange={(date) => setEndDate(date)}
                      className="bg-[#fbfbfb] border-[#e5e7eb] border-solid border-[1px] rounded-[8px] w-[300px] h-[45px] outline-none p-[5px] cursor-pointer"
                    />
                  </div>
                </div>
                <div className="flex">
                  <input
                    type="text"
                    id="payment"
                    name="payment"
                    placeholder="Ingrese el monto abonado"
                    required
                    className="bg-[#fbfbfb] border-[#e5e7eb] border-solid border-[1px] rounded-[8px] w-[615px] h-[45px] outline-none p-[5px] m-[5px]"
                  />
                </div>
                <div className="flex justify-center mt-8">
                  <Button
                    type="submit"
                    color="white"
                    bgColor={currentColor}
                    text="Agregar"
                    borderRadius="10px"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddCustomer;
