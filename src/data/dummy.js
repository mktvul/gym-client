import React, { useState, useEffect } from "react";
import {
  FiShoppingBag,
} from "react-icons/fi";

import { RiContactsLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

export const gridOrderImage = (props) => (
  <div>
    <img
      className="rounded-xl h-20 md:ml-3"
      src={props.ProductImage}
      alt="order-item"
    />
  </div>
);

export const gridOrderStatus = (props) => (
  <button
    type="button"
    style={{ background: props.StatusBg }}
    className="text-white py-1 px-2 capitalize rounded-2xl text-md"
  >
    {props.Status}
  </button>
);

const customerGridImage = (props) => (
  <div className="image flex gap-4">
    {/* <img className="rounded-full w-10 h-10" src={props.image} alt="employee" /> */}
    <div>
      <p>{props.name}</p>
      <p>{props.email}</p>
    </div>
  </div>
);

const customerGridStatus = (props) => {
  const [status, setStatus] = useState();

  const currentDate = new Date().toISOString().split("T")[0];
  const endDate = props.endDate;
  const fiveDaysLater = new Date(new Date().getTime() + (5 * 24 * 60 * 60 * 1000)).toISOString().split("T")[0];

  useEffect(() => {
    if (currentDate > endDate) {
      setStatus("vencido");
    } else if (fiveDaysLater > endDate) {
      setStatus("vence pronto")
    } else {
      setStatus("activo");
    }
  }, []);

  return (
    <div className="flex gap-2 items-center text-gray-700 capitalize">
      <p
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
        className="rounded-full h-3 w-3"
      />
      <p>{status}</p>
    </div>
  );
};
const customerGridPayment = (props) => (
  <div className="flex gap-2 justify-center items-center text-gray-700 capitalize">
    {props.payment && <p>$ {props.payment}</p>}
  </div>
);

const customerButtonProfile = (props) => {
  const navigate = useNavigate();
  return (
    <div className="flex gap-2 justify-center items-center text-gray-700 capitalize">
      <button>
        <span
          className="material-symbols-outlined"
          onClick={() => navigate(`/editar-cliente/${props.id}`)}
        >
          manage_accounts
        </span>
      </button>
    </div>
  );
};

export const customersGrid = [
  {
    headerText: "Nombre",
    width: "160",
    template: customerGridImage,
    textAlign: "left",
  },

  { field: "dni", headerText: "DNI", width: "110", textAlign: "left" },

  {
    headerText: "Status",
    width: "140",
    template: customerGridStatus,
    textAlign: "Center",
  },

  { field: "plan", headerText: "Plan", width: "80", textAlign: "left" },

  {
    field: "payment",
    headerText: "Pago",
    width: "100",
    textAlign: "right",
    template: customerGridPayment,
    // isPrimaryKey: true,
  },

  {
    field: "startDate",
    headerText: "Inicio",
    width: "130",
    format: "C2",
    textAlign: "left",
  },
  {
    field: "endDate",
    headerText: "Vencimiento",
    width: "130",
    format: "yMd",
    textAlign: "left",
  },
  { field: "routine", headerText: "Rutina", width: "100", textAlign: "center" },
  {
    field: "profile",
    headerText: "Perfil",
    width: "100",
    textAlign: "Center",
    template: customerButtonProfile,
  },
];

export const links = [
  {
    title: "Dashboard",
    links: [
      {
        name: "home",
        icon: <FiShoppingBag />,
      },
    ],
  },

  {
    title: "Secciones",
    links: [
      {
        name: "agregar-cliente",
        icon: <RiContactsLine />,
      },
      {
        name: "editar-cliente",
        icon: <RiContactsLine />,
      },
      {
        name: "clientes",
        icon: <RiContactsLine />,
      },
    ],
  },
  // {
  //   title: "Statistics",
  //   links: [
  //     {
  //       name: "pie",
  //       icon: <FiPieChart />,
  //     },
  //   ],
  // },
];
