export interface EmployeeRecord {
  check: boolean;
  EmployeeID: number;
  Employees: string;
  Designation: string;
  Mail: string;
  Location: string;
  Status: string;
  Trustworthiness: string;
  Rating: number;
  Software: number;
  EmployeeImg: string;
  CurrentSalary: number;
  Address: string;
  Category: string;
  Department: string;
  HireDate: string;
  Experience: number;
  Skills: string;
  Projects: number;
  Languages: string;
  Manager: string;
}

const employees = [
  'Michael', 'Kathryn', 'Tamer', 'Martin', 'Davolio', 'Nancy', 'Fuller',
  'Leverling', 'Peacock', 'Margaret', 'Buchanan', 'Janet', 'Andrew',
  'Callahan', 'Laura', 'Dodsworth', 'Anne', 'Bergs', 'Vinet', 'Anton',
  'Fleet', 'Zachery', 'Van', 'King', 'Jack', 'Rose',
];
const designations = [
  'Manager', 'CFO', 'Designer', 'Developer', 'Program Directory',
  'System Analyst', 'Project Lead',
];
const mailDomains = ['sample.com', 'arpy.com', 'rpy.com', 'mail.com', 'jourrapide.com'];
const categories = ['Energy', 'Financial', 'Technology', 'Industrial'];
const locations = [
  'UK', 'USA', 'Sweden', 'France', 'Canada', 'Argentina', 'Austria',
  'Germany', 'Mexico',
];
const statuses = ['Active', 'Inactive'];
const trustworthiness = ['Perfect', 'Sufficient', 'Insufficient'];
const departments = ['HR', 'Engineering', 'Marketing', 'Sales', 'Finance'];
const skills = ['Leadership', 'Communication', 'Problem Solving', 'Time Management'];
const languages = ['English', 'Spanish', 'French', 'German', 'Mandarin'];
const managers = ['John Doe', 'Jane Smith', 'Robert Brown', 'Emily Davis'];
const addresses = [
  "59 rue de l'Abbaye", 'Luisenstr. 48', 'Rua do Paço, 67',
  '2, rue du Commerce', 'Boulevard Tirou, 255', 'Rua do Paço, 67',
  'Hauptstr. 31', 'Starenweg 5', 'Rua do Mercado, 12',
  'Carrera 22 con Ave. Carlos Soublette #8-35', 'Kirchgasse 6',
  'Sierras de Granada 9993', 'Mehrheimerstr. 369',
  'Rua da Panificadora, 12', '2817 Milton Dr.', 'Kirchgasse 6',
  'Åkergatan 24', '24, place Kléber', 'Torikatu 38', 'Berliner Platz 43',
  '5ª Ave. Los Palos Grandes', '1029 - 12th Ave. S.', 'Torikatu 38',
  'P.O. Box 555', '2817 Milton Dr.', 'Taucherstraße 10',
  "59 rue de l'Abbaye", 'Via Ludovico il Moro 22', 'Avda. Azteca 123',
  'Heerstr. 22', 'Berguvsvägen  8', 'Magazinweg 7', 'Berguvsvägen  8',
  'Gran Vía, 1', 'Gran Vía, 1',
  'Carrera 52 con Ave. Bolívar #65-98 Llano Largo', 'Magazinweg 7',
  'Taucherstraße 10', 'Taucherstraße 10', 'Av. Copacabana, 267',
  'Strada Provinciale 124', 'Fauntleroy Circus', 'Av. dos Lusíadas, 23',
  'Rua da Panificadora, 12', 'Av. Inês de Castro, 414',
  'Avda. Azteca 123', '2817 Milton Dr.',
];

export function getTradeData(dataCount: number): EmployeeRecord[] {
  const tradeData: EmployeeRecord[] = [];

  for (let i = 1; i <= dataCount; i++) {
    const hireYear = 2010 + (i % 10);
    const hireMonth = 1 + (i % 12);
    const hireDay = 1 + (i % 28);

    tradeData.push({
      check: i % 2 === 0,
      EmployeeID: 10000 + i,
      Employees: `${employees[i % employees.length]} ${employees[(i + 5) % employees.length]}`,
      Designation: designations[i % designations.length],
      Mail: `${employees[i % employees.length].toLowerCase()}${(i % 100) + 10}@${mailDomains[i % mailDomains.length]}`,
      Location: locations[i % locations.length],
      Status: statuses[i % statuses.length],
      Trustworthiness: trustworthiness[i % trustworthiness.length],
      Rating: i % 5,
      Software: i % 100,
      EmployeeImg: i % 2 === 0 ? 'usermale' : 'userfemale',
      CurrentSalary: 50000 + i * 1000 + (i % 100),
      Address: addresses[i % addresses.length],
      Category: categories[i % categories.length],
      Department: departments[i % departments.length],
      HireDate: new Date(hireYear, hireMonth, hireDay).toISOString().split('T')[0],
      Experience: 2023 - hireYear,
      Skills: skills[i % skills.length],
      Projects: i % 50,
      Languages: languages[i % languages.length],
      Manager: managers[i % managers.length],
    });
  }

  return tradeData;
}
