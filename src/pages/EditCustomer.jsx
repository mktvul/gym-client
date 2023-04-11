import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import DatePicker from "react-datepicker";

import { Button } from "../components";
import { useStateContext } from "../contexts/ContextProvider";

const EditCustomer = () => {
  const [customer, setCustomer] = useState({});
  const [formSubmit, setFormSubmit] = useState(false);

  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();

  const params = useParams();

  const { currentColor, getResults, results } = useStateContext();

  useEffect(() => {
    getResults();

    results.resultado?.map((result) =>
      result.id == params.id ? setCustomer(result) : null
    );
  }, []);

  const handleSubmit = () => {
    setFormSubmit(true);
  };

  return (
    <div className="mt-24">
      <div className="flex flex-wrap lg:flex-nowrap justify-center ">
        <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg h-[550px] rounded-xl w-full lg:w-[1024px] p-8 pt-9 m-3 bg-hero-pattern bg-no-repeat bg-cover bg-center flex flex-col items-center">
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
                className="w-[650px] h-[400px] flex flex-col"
                onSubmit={handleSubmit}
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
                  <div className="flex items-center border-transparent border-solid border-[1px] rounded-[8px] w-[300px] h-[45px] outline-none p-[5px] m-[5px]">
                    <label htmlFor="gender" className="text-gray-400">
                      Género:
                    </label>
                    <select
                      name="gender"
                      id="gender"
                      onChange={(e) =>
                        setCustomer({ ...customer, gender: e.target.value })
                      }
                      className="cursor-pointer outline-none"
                    >
                      <option value={customer.gender}>{customer.gender}</option>
                      <option value="Femenino">Femenino</option>
                      <option value="Masculino">Masculino</option>
                    </select>
                  </div>
                </div>
                <div className="flex">
                  <div className="flex items-center border-transparent border-solid border-[1px] rounded-[8px] w-[300px] h-[45px] outline-none p-[5px] m-[5px]">
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
                  </div>
                  <div className="flex items-center border-transparent border-solid border-[1px] rounded-[8px] w-[300px] h-[45px] outline-none p-[5px] m-[5px]">
                    <label htmlFor="routine" className="text-gray-400">
                      Rutina:
                    </label>
                    <select
                      name="routine"
                      id="routine"
                      onChange={(e) =>
                        setCustomer({ ...customer, routine: e.target.value })
                      }
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
                <div className="flex">
                  <div className="border-transparent border-solid border-[1px] rounded-[8px] w-[300px] h-[90px] outline-none p-[5px] m-[5px]">
                    <label htmlFor="startDate">Fecha de inicio:</label>
                    <DatePicker
                      id="startDate"
                      name="startDate"
                      dateFormat="yyyy/MM/dd"
                      selected={customer.startDate}
                      onChange={(e) =>
                        setCustomer({ ...customer, startDate: e })
                      }
                      className="bg-[#fbfbfb] border-[#e5e7eb] border-solid border-[1px] rounded-[8px] w-[300px] h-[45px] outline-none p-[5px] cursor-pointer"
                    />
                  </div>
                  <div className="border-transparent border-solid border-[1px] rounded-[8px] w-[300px] h-[90px] outline-none p-[5px] m-[5px]">
                    <label htmlFor="endDate">Fecha de finalización:</label>
                    <DatePicker
                      id="endDate"
                      name="endDate"
                      dateFormat="yyyy/MM/dd"
                      selected={customer.endDate}
                      onChange={(e) =>
                        setCustomer({ ...customer, endDate: e })
                      }
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
                    value={customer.payment}
                    onChange={(e) =>
                      setCustomer({ ...customer, payment: e.target.value })
                    }
                    required
                    className="bg-[#fbfbfb] border-[#e5e7eb] border-solid border-[1px] rounded-[8px] w-[615px] h-[45px] outline-none p-[5px] m-[5px]"
                  />
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
