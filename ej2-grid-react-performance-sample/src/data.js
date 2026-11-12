/* eslint-disable */
window.getTradeData = function(dataCount) {
    var check = [true, false];
    var Employees = [
        'Michael', 'Kathryn', 'Tamer', 'Martin', 'Davolio', 'Nancy', 'Fuller', 'Leverling', 'Peacock',
        'Margaret', 'Buchanan', 'Janet', 'Andrew', 'Callahan', 'Laura', 'Dodsworth', 'Anne',
        'Bergs', 'Vinet', 'Anton', 'Fleet', 'Zachery', 'Van', 'King', 'Jack', 'Rose'
    ];
    var Designation = ['Manager', 'CFO', 'Designer', 'Developer', 'Program Directory', 'System Analyst', 'Project Lead'];
    var Mail = ['sample.com', 'arpy.com', 'rpy.com', 'mail.com', 'jourrapide.com'];
    var Category = ['Energy', 'Financial', 'Technology', 'Industrial'];
    var Location = ['UK', 'USA', 'Sweden', 'France', 'Canada', 'Argentina', 'Austria', 'Germany', 'Mexico'];
    var Status = ['Active', 'Inactive'];
    var Trustworthiness = ['Perfect', 'Sufficient', 'Insufficient'];
    var Department = ['HR', 'Engineering', 'Marketing', 'Sales', 'Finance'];
    var Skills = ['Leadership', 'Communication', 'Problem Solving', 'Time Management'];
    var Languages = ['English', 'Spanish', 'French', 'German', 'Mandarin'];
    var Managers = ['John Doe', 'Jane Smith', 'Robert Brown', 'Emily Davis'];
    var tradeData = [];
    var Address = ["59 rue de l'Abbaye", "Luisenstr. 48", "Rua do PaÃ§o, 67", "2, rue du Commerce", "Boulevard Tirou, 255",
        "Rua do PaÃ§o, 67", "Hauptstr. 31", "Starenweg 5", "Rua do Mercado, 12", "Carrera 22 con Ave. Carlos Soublette #8-35", "Kirchgasse 6",
        "Sierras de Granada 9993", "Mehrheimerstr. 369", "Rua da Panificadora, 12", "2817 Milton Dr.", "Kirchgasse 6", "Ã…kergatan 24", "24, place KlÃ©ber",
        "Torikatu 38", "Berliner Platz 43", "5Âª Ave. Los Palos Grandes", "1029 - 12th Ave. S.",
        "Torikatu 38", "P.O. Box 555", "2817 Milton Dr.", "TaucherstraÃŸe 10", "59 rue de l'Abbaye", "Via Ludovico il Moro 22",
        "Avda. Azteca 123", "Heerstr. 22", "BerguvsvÃ¤gen  8", "Magazinweg 7", "BerguvsvÃ¤gen  8", "Gran VÃ­a, 1", "Gran VÃ­a, 1",
        "Carrera 52 con Ave. BolÃ­var #65-98 Llano Largo", "Magazinweg 7", "TaucherstraÃŸe 10", "TaucherstraÃŸe 10",
        "Av. Copacabana, 267", "Strada Provinciale 124", "Fauntleroy Circus", "Av. dos LusÃ­adas, 23",
        "Rua da Panificadora, 12", "Av. InÃªs de Castro, 414", "Avda. Azteca 123", "2817 Milton Dr."];
    var EmployeeImg = ['usermale', 'userfemale'];

    if (typeof dataCount === 'string') {
        dataCount = parseInt(dataCount);
    }

    for (var i = 1; i <= dataCount; i++) {
        var code = 10000;
        var hireYear = 2010 + (i % 10); // Random hire year between 2010 and 2019
        var hireMonth = 1 + (i % 12); // Random hire month
        var hireDay = 1 + (i % 28); // Random hire day to avoid complexities with month lengths
        
        tradeData.push({
            'check': check[i % 2],
            'EmployeeID': code + i,
            'Employees': Employees[(i % Employees.length)] + ' ' + Employees[((i + 5) % Employees.length)],
            'Designation': Designation[(i % Designation.length)],
            'Mail': Employees[i % Employees.length].toLowerCase() + ((i % 100) + 10) + '@' + Mail[(i % Mail.length)],
            'Location': Location[(i % Location.length)],
            'Status': Status[(i % Status.length)],
            'Trustworthiness': Trustworthiness[(i % Trustworthiness.length)],
            'Rating': (i % 5),
            'Software': (i % 100),
            'EmployeeImg': EmployeeImg[(i % EmployeeImg.length)],
            'CurrentSalary': (50000 + i * 1000) + ((i % 100)), // Salaries between 50k and 150k
            'Address': Address[(i % Address.length)],
            'Category': Category[(i % Category.length)],
            'Department': Department[(i % Department.length)],
            'HireDate': new Date(hireYear, hireMonth, hireDay).toISOString().split('T')[0],
            'Experience': (2023 - hireYear), // Experience is the number of years since hire
            'Skills': Skills[(i % Skills.length)],
            'Projects': (i % 50), // Arbitrary number of projects between 0 and 49
            'Languages': Languages[(i % Languages.length)],
            'Manager': Managers[(i % Managers.length)]
        });
    }

    return tradeData;
};