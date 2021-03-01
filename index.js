const employee = {
    name: 'Bob',
    streetAddress: '13 Van Ness'
};

function updateEmployeeWithKeyAndValue(employee, key, value) {
    const newEmployee = {...employee};
    newEmployee[key] = value;
    return newEmployee
}
const employeeTwo = updateEmployeeWithKeyAndValue(employee, 'streetAddress', '11 Broadway');

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
}
const employeeThree = destructivelyUpdateEmployeeWithKeyAndValue(employee, 'streetAddress', '12 Broadway');

function deleteFromEmployeeByKey(employee, key) {
    const newEmployee = {...employee};
    delete newEmployee[key];
    return newEmployee;
}
const employeeFour = deleteFromEmployeeByKey(employee, 'name');

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
}
const employeeFive = destructivelyDeleteFromEmployeeByKey(employee, 'name');