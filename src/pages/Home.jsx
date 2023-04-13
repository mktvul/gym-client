import React, { useState, useEffect } from "react";

import { Button } from "../components";
import { useStateContext } from "../contexts/ContextProvider";

const Home = () => {
  const { results, getResults, currentColor } = useStateContext();
  const [text, setText] = useState("");
  const [customer, setCustomer] = useState(null);
  const [formSubmit, setFormSubmit] = useState(false);

  useEffect(() => {
    getResults();
  }, []);

  useEffect(() => {
    results.resultado?.map((result) =>
      result.dni == text ? setCustomer(result) : null
    );
  }, [text]);

  const handleSubmit = (e) => {
    e.preventDefault();
    document.remove.submit();

    if (customer !== null) {
      setFormSubmit(true);
    }
  };

  const HandleStatus = () => {
    const [status, setStatus] = useState();

    const currentDate = new Date().toISOString().split("T")[0];
    const endDate = customer?.endDate;
    const fiveDaysLater = new Date(
      new Date().getTime() + 5 * 24 * 60 * 60 * 1000
    )
      .toISOString()
      .split("T")[0];

    useEffect(() => {
      if (currentDate > endDate || customer?.classes <= 0) {
        setStatus("vencido");
      } else if (fiveDaysLater > endDate || customer?.classes <= 5) {
        setStatus("vence pronto");
      } else {
        setStatus("activo");
      }
    }, []);

    return (
      <div className="text-[18px] flex flex-col w-[230px] h-[130px] shadow-lg p-[15px]">
        <span className="font-bold">Status:</span>
        <span className="flex gap-2 h-[75px] justify-center items-center justify-center text-gray-700 capitalize">
          <span
            style={{
              background:
                status === "activo"
                  ? "#8BE78B"
                  : status === "vence pronto"
                  ? "#FEC90F"
                  : status === "vencido"
                  ? "#C61A09"
                  : "",
            }}
            className="rounded-full w-[30px] h-[30px]"
          />
          {status}
        </span>
      </div>
    );
  };

  const RemoveAClass = () => (
    <form
      name="remove"
      action={`https://gym-proficient-server-production.up.railway.app/users/home/${customer?.id}`}
      method="post"
      className="hidden"
    >
      <input
        type="text"
        id="classes"
        name="classes"
        value={customer?.classes - 1}
        required
      />
      <Button color="white" text="Confirmar" />
    </form>
  );

  return (
    <div className="mt-24">
      <div className="flex flex-wrap lg:flex-nowrap justify-center ">
        <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg h-500 rounded-xl w-full lg:w-[1024px] p-8 pt-9 m-3 bg-hero-pattern bg-no-repeat bg-cover bg-center flex flex-col items-center">
          <div className="flex justify-between items-center">
            <div className={formSubmit ? "hidden" : "block"}>
              <div className="font-semibold text-xl w-full">
                ¡Te damos la bienvenida!
              </div>
              <div className="font-bold text-gray-400 mt-[24px] mb-[8px]">
                Por favor, ingrese DNI
              </div>
              <form method="get" onSubmit={handleSubmit}>
                <input
                  value={text}
                  type="text"
                  autoFocus
                  onChange={(e) => setText(e.target.value)}
                  className="bg-[#fbfbfb] border-[#e5e7eb] border-solid border-[1px] rounded-[8px] w-[300px] h-[45px] outline-none p-[5px]"
                />
                <div className="flex justify-center mt-8">
                  <Button
                    color="white"
                    bgColor={currentColor}
                    text="Confirmar"
                    borderRadius="10px"
                  />
                </div>
              </form>
            </div>
            <div className={formSubmit ? "block" : "hidden"}>
              <div className="flex justify-center mb-[10px]">
                <div className="text-[30px] font-bold">{customer?.name}</div>
              </div>
              <div className="text-[18px] mb-[13px]">
                <span className="font-bold">Email:</span> {customer?.email}
              </div>
              <div className="text-[18px] mb-[13px]">
                <span className="font-bold">DNI:</span> {customer?.dni}
              </div>
              <div className="text-[18px] mb-[13px]">
                <span className="font-bold">Plan:</span> {customer?.plan}
              </div>
              <div className="text-[18px] mb-[13px]">
                <span className="font-bold">Pago:</span> ${customer?.payment}
              </div>
              <div className="text-[18px] mb-[13px]">
                <span className="font-bold">Fecha de inicio:</span>{" "}
                {customer?.startDate}
              </div>
              <div className="text-[18px] mb-[13px]">
                <span className="font-bold">Fecha de finalización:</span>{" "}
                {customer?.endDate}
              </div>
              <div className="flex flex-row w-[550px] justify-between">
                <HandleStatus />
                <div className="text-[18px] flex flex-col w-[230px] h-[130px] shadow-md p-[15px]">
                  <span className="font-bold">Clases:</span>
                  <span className="text-[50px] flex gap-2 items-center justify-center text-gray-700 capitalize">
                    {customer?.classes}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <RemoveAClass />
    </div>
  );
};

export default Home;
