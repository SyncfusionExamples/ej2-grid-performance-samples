import '../data';
import { DropDownList, ChangeEventArgs } from '@syncfusion/ej2-dropdowns';
import {
    DomVirtualization,
    Filter,
    Grid,
    Page,
    Sort,
    Toolbar,
    VirtualScroll
} from '@syncfusion/ej2-grids';

const data = (window as any).getTradeData(100000);

Grid.Inject(Sort, Toolbar, Page, Filter, VirtualScroll, DomVirtualization);

const renderButton = document.getElementById('render') as HTMLButtonElement;
const destroyButton = document.getElementById('destroy') as HTMLButtonElement;
const gridElement = document.getElementById('Grid') as HTMLDivElement;
const performanceElement = document.getElementById('performanceTime') as HTMLParagraphElement;

let grid: Grid | null = null;
let selectedPageSize = 100;
let startTime = 0;

const pageSizeDropdown: DropDownList = new DropDownList({
    dataSource: [
        { value: 100, text: '100 Rows' },
        { value: 1000, text: '1000 Rows' },
        { value: 2000, text: '2000 Rows' }
    ],
    fields: { text: 'text', value: 'value' },
    width: 200,
    value: selectedPageSize,
    placeholder: 'Select a pageSize',
    popupHeight: '200px',
    change: (e: ChangeEventArgs) => {
        const pageSize = Number(e.value);
        if (!Number.isFinite(pageSize) || pageSize <= 0) {
            return;
        }

        selectedPageSize = pageSize;
        if (grid) {
            grid.setProperties({ pageSettings: { pageSize } });
        }
    }
});
pageSizeDropdown.appendTo('#ddl');

const updatePerformanceTime = (requestType: string): void => {
        const elapsed = (performance.now() - startTime).toFixed(0);
        const action = requestType.charAt(0).toUpperCase() + requestType.slice(1);
        performanceElement.innerHTML = `Time Taken for ${action}: <b>${elapsed}ms</b>`;
};

renderButton.addEventListener('click', () => {
    if (grid) {
        return;
    }

    startTime = performance.now();
    performanceElement.textContent = '';
    grid = new Grid({
        dataSource: data,
        allowSorting: true,
        allowFiltering: true,
        filterSettings: { type: 'CheckBox' },
        allowPaging: true,
        enableDomVirtualization: true,
        pageSettings: { pageSize: selectedPageSize, pageSizes: [100, 1000, 2000] },
        height: 350,
        columns: [
            { field: 'EmployeeID', headerText: 'Employee ID', width: '130px' },
            { field: 'Employees', headerText: 'Employee Name', width: '130px' },
            { field: 'Designation', headerText: 'Designation', width: '130px' },
            { field: 'Mail', headerText: 'Mail', width: '150px' },
            { field: 'Location', headerText: 'Location', width: '100px' },
            { field: 'Status', headerText: 'Status', width: '90px' },
            { field: 'Trustworthiness', headerText: 'Trustworthiness', width: '150px' },
            { field: 'Rating', headerText: 'Rating', width: '80px' },
            { field: 'Software', headerText: 'Software Proficiency', width: '160px' },
            { field: 'CurrentSalary', headerText: 'Current Salary', format: 'C0', width: '150px' },
            { field: 'Address', headerText: 'Address', width: '200px' },
            { field: 'Category', headerText: 'Category', width: '100px' },
            { field: 'check', headerText: 'Check', width: '80px', type: 'boolean' },
            { field: 'Department', headerText: 'Department', width: '140px' },
            { field: 'HireDate', headerText: 'Hire Date', type: 'date', format: 'yMd', width: '120px' },
            { field: 'Experience', headerText: 'Experience (Yrs)', width: '100px', type: 'number' },
            { field: 'Skills', headerText: 'Skills', width: '150px' },
            { field: 'Projects', headerText: 'Projects', width: '110px' },
            { field: 'Languages', headerText: 'Languages', width: '120px' },
            { field: 'Manager', headerText: 'Manager', width: '130px' }
        ],
        actionBegin: () => {
            startTime = performance.now();
        },
        actionComplete: (args) => {
            updatePerformanceTime(args.requestType || 'action');
        },
        created: () => {
            updatePerformanceTime('initialLoad');
        }
    });
    grid.appendTo(gridElement);
});

destroyButton.addEventListener('click', () => {
    if (grid) {
        grid.destroy();
        grid = null;
    }
    gridElement.innerHTML = '';
    performanceElement.textContent = '';
});
