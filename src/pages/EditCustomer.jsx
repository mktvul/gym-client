import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { Button } from "../components";
import { useStateContext } from "../contexts/ContextProvider";

const EditCustomer = () => {
  const [customer, setCustomer] = useState({});
  const [formSubmit, setFormSubmit] = useState(false);

  const params = useParams();

  const { currentColor, getResults, results } = useStateContext();

  useEffect(() => {
    getResults();

    results.resultado?.map((result) =>
      result.id == params.id ? setCustomer(result) : null
    );
    console.log(customer);
  }, []);

  const handleSubmit = () => {
    setFormSubmit(true);
  };

  console.log();

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
              Usuario actualizado con éxito
            </div>

            <div className={formSubmit ? "hidden" : "block"}>
              <div className="font-semibold text-xl w-full mb-[10px]">
                Editar cliente
              </div>

              <form
                action={`https://gym-proficient-server-production.up.railway.app/users/update/${params.id}`}
                method="post"
                onSubmit={handleSubmit}
                className="w-[650px] flex flex-col"
              >
                <div>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Nombre completo"
                    value={customer.name}
                    onChange={(e) =>
                      setCustomer({ ...customer, name: e.target.value })
                    }
                    required
                    className="bg-[#fbfbfb] border-[#e5e7eb] border-solid border-[1px] rounded-[8px] w-[300px] h-[45px] outline-none p-[5px] m-[5px]"
                  />
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Email"
                    value={customer.email}
                    onChange={(e) =>
                      setCustomer({ ...customer, email: e.target.value })
                    }
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
                    value={customer.dni}
                    onChange={(e) =>
                      setCustomer({ ...customer, dni: e.target.value })
                    }
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
                      onChange={(e) =>
                        setCustomer({ ...customer, plan: e.target.value })
                      }
                      className="cursor-pointer outline-none"
                    >
                      <option value={customer.plan}>{customer.plan}</option>
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
                      <option value={customer.routine}>
                        {customer.routine}
                      </option>
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
                    text="Editar"
                    borderRadius="10px"
                  />
                </div>
              </form>
              <form
                action={`https://gym-proficient-server-production.up.railway.app/users/delete/${params.id}`}
                method="post"
                onSubmit={handleSubmit}
                className="w-[650px] h-[50px] flex justify-center items-end mt-[10px]"
              >
              <Button
                    type="submit"
                    color="red"
                    text="Borrar"
                    borderRadius="10px"
                  />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditCustomer;
