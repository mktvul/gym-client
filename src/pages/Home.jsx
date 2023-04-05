import React from "react";

import { Button } from "../components";
import { useStateContext } from "../contexts/ContextProvider";

const Home = () => {
  const { currentColor, currentMode } = useStateContext();

  return (
    <div className="mt-24">
      <div className="flex flex-wrap lg:flex-nowrap justify-center ">
        <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg h-500 rounded-xl w-full lg:w-[1024px] p-8 pt-9 m-3 bg-hero-pattern bg-no-repeat bg-cover bg-center flex flex-col items-center">
          <div className="flex justify-between items-center">
            <div>
              <div className="font-semibold text-xl w-full">
                ¡Bienvenido a Impacto Gym!
              </div>
              <div className="font-bold text-gray-400 mt-[24px]">
                Ingrese su DNI
              </div>
              <form>
                <input className="bg-[#fbfbfb] border-[#e5e7eb] border-solid border-[1px] rounded-[8px] w-[300px] h-[45px] outline-none p-[5px]" />
              </form>
            </div>
          </div>
          <div className="mt-6">
            <Button
              color="white"
              bgColor={currentColor}
              text="Confirmar"
              borderRadius="10px"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
