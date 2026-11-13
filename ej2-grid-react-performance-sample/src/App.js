/* eslint-disable */
import React, { useState, useRef, useEffect } from 'react';
import { GridComponent, ColumnsDirective, ColumnDirective, Sort, Inject, Toolbar, Page, Filter, Edit, Group, VirtualScroll, DomVirtualization } from '@syncfusion/ej2-react-grids';
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import { orderDetails } from './data';
// import './App.css';
const data = window.getTradeData(100000);
const App = () => {
  const [flag, setFlag] = useState(false);
  const dropdownRef = useRef(null);
  const stTime = useRef(0);
  const edTime = useRef(0);
  const diff = useRef(0);
  const gridRef = useRef(null);
 
  const filterSettings = { type: 'CheckBox' };
  const toolbar = ['Search'];
 
  const handlePageSizeChange = (e) => {
    if (gridRef.current) {
      gridRef.current.setProperties({ pageSettings: { pageSize: e.value } });
    }
  };
 
  const actionBegin = (args) => {
    stTime.current = performance.now();
  };
 
  const actionComplete = (args) => {
    // setTimeout(() => {
      edTime.current = performance.now();
      diff.current = (edTime.current - stTime.current).toFixed(0);
      const action = args.requestType.charAt(0).toUpperCase() + args.requestType.slice(1);
      document.getElementById("performanceTime").innerHTML = `Time Taken for ${action}: <b>${diff.current}ms</b>`;
    // }, 0);
  };
 
  // useEffect(() => {
  //   if (flag && gridRef.current) {
  //     actionComplete({requestType: 'initialLoad'});
  //   }
  // }, [flag]);
 
  return (
    <>
      <button id='render' style={{ display: 'inline-flex' }} onClick={() => {
        stTime.current = performance.now();
        setFlag(true);
      }}>Render Grid</button>
      <button id='destroy' style={{ display: 'inline-flex' }} onClick={() => {
        setFlag(false);
      }}>Destroy Grid</button>
      <DropDownListComponent
        ref={dropdownRef}
        id="ddl"
        dataSource={[{ value: 100, text: '100 Rows' }, { value: 1000, text: '1000 Rows' }, { value: 2000, text: '2000 Rows' }]}
        fields={{ value: 'value', text: 'text' }}
        width={200}
        change={handlePageSizeChange}
        placeholder="Select a pageSize"
        index={0}
        popupHeight="200px"
      />
      {
        flag && (
          <>
            <h4 style={{ display: 'inline-flex', margin: 0 }}>Combination of all actions</h4>
            <p id="performanceTime" style={{ display: 'inline-flex', float: 'right', margin: 0 }}></p>
            <div className='control-section' style={{ marginTop: 10 }}>
              <GridComponent
                ref={gridRef}
                dataSource={data}
                allowSorting={true}
                allowFiltering={true}
                allowGrouping={true}
                toolbar={toolbar}
                filterSettings={filterSettings}
                allowPaging={true}
                enableDomVirtualization={true}
                // enableVirtualization={true}
                // enableColumnVirtualization={true}
                pageSettings={{ pageSize: dropdownRef.current ? dropdownRef.current.value : 100, pageSizes: [100, 1000, 2000] }}
                height={350}
                actionBegin={actionBegin}
                actionComplete={actionComplete}
                created={() => {
                  if (flag && gridRef.current) {
                    actionComplete({ requestType: 'initialLoad' });
                  }
                }}
              >
                <ColumnsDirective>
                  <ColumnDirective field="EmployeeID" headerText="Employee ID" width="130px" />
                  <ColumnDirective field="Employees" headerText="Employee Name" width="130px" />
                  <ColumnDirective field="Designation" headerText="Designation" width="130px" />
                  <ColumnDirective field="Mail" headerText="Mail" width="150px" />
                  <ColumnDirective field="Location" headerText="Location" width="100px" />
                  <ColumnDirective field="Status" headerText="Status" width="90px" />
                  <ColumnDirective field="Trustworthiness" headerText="Trustworthiness" width="150px" />
                  <ColumnDirective field="Rating" headerText="Rating" width="80px" />
                  <ColumnDirective field="Software" headerText="Software Proficiency" width="160px" />
                  <ColumnDirective field="CurrentSalary" headerText="Current Salary" format="C0" width="150px" />
                  <ColumnDirective field="Address" headerText="Address" width="200px" />
                  <ColumnDirective field="Category" headerText="Category" width="100px" />
                  <ColumnDirective field="Check" headerText="Check" width="80px" type="boolean" />
                  {/* <ColumnDirective field="EmployeeImg" headerText="Image" width="80px" template="#template" /> */}
                  <ColumnDirective field="Department" headerText="Department" width="140px" />
                  <ColumnDirective field="HireDate" headerText="Hire Date" type="date" format="yMd" width="120px" />
                  <ColumnDirective field="Experience" headerText="Experience (Yrs)" width="100px" type="number" />
                  <ColumnDirective field="Skills" headerText="Skills" width="150px" />
                  <ColumnDirective field="Projects" headerText="Projects" width="110px" />
                  <ColumnDirective field="Languages" headerText="Languages" width="120px" />
                  <ColumnDirective field="Manager" headerText="Manager" width="130px" />
                </ColumnsDirective>
                <Inject services={[Sort, Toolbar, Page, Filter, Group, DomVirtualization]} />
              </GridComponent>
            </div>
          </>
        )
      }
    </>
  );
};
 
export default App;