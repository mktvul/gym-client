import React, { useEffect, useState } from "react";

import { Button } from "../components";
import { useStateContext } from "../contexts/ContextProvider";

const AddCustomer = () => {
  const { getResults, currentColor, currentMode } = useStateContext();
  const [formSubmit, setFormSubmit] = useState(false);

  useEffect(() => {
    getResults();
  }, []);

  const handleSubmit = () => {
    setFormSubmit(true);
  }

  return (
    <div className="mt-24">
      <div className="flex flex-wrap lg:flex-nowrap justify-center ">
        <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg h-500 rounded-xl w-full lg:w-[1024px] p-8 pt-9 m-3 bg-hero-pattern bg-no-repeat bg-cover bg-center flex flex-col items-center">
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
                className="w-[650px] h-[265px] flex flex-col"
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
                  <div className="flex flex-col w-[300px] mt-[5px] ml-[10px]">
                    <label htmlFor="plan" className="text-gray-400">
                      Plan:
                    </label>
                    <select
                      name="plan"
                      id="plan"
                      className="cursor-pointer outline-none"
                    >
                      <option value="">- Seleccionar -</option>
                      <option value="Anual">Anual</option>
                      <option value="Libre">Libre</option>
                      <option value="2ps">2 p/s</option>
                      <option value="3ps">3 p/s</option>
                    </select>

                    <label
                      htmlFor="routine"
                      className="text-gray-400 mt-[24px] ml-[5px]"
                    >
                      Rutina:
                    </label>
                    <select
                      name="routine"
                      id="routine"
                      className="cursor-pointer outline-none"
                    >
                      <option value="">- Seleccionar -</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                    </select>
                  </div>
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
