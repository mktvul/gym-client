import React, { useEffect } from 'react';
import { GridComponent, ColumnsDirective, ColumnDirective, Page, Selection, Inject, Edit, Toolbar, Sort, Filter } from '@syncfusion/ej2-react-grids';
import { useStateContext } from "../contexts/ContextProvider";

import { customersGrid } from '../data/dummy';
import { Header } from '../components';

const Customers = () => {
  const selectionsettings = { persistSelection: true };
  
  const { getResults, results } = useStateContext();

  useEffect(() => {
    getResults();
  }, []);
  
  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="Página" title="Clientes" />
      <GridComponent
        dataSource={results.resultado}
        enableHover={false}
        allowPaging
        pageSettings={{ pageSize: 50, pageCount: 5 }}
        selectionSettings={selectionsettings}
        allowSorting
      >
        <ColumnsDirective>
          {customersGrid.map((item, index) => <ColumnDirective key={index} {...item} />)}
        </ColumnsDirective>
        <Inject services={[Page, Selection, Toolbar, Edit, Sort, Filter]} />
      </GridComponent>
    </div>
  );
};

export default Customers;
