function createEmployeeTree(data: any) {
    const employeeMap: any = {};

    for (const employee of data) {
      const { id, supervisorId, ...rest } = employee;
      const employeeData = { id, ...rest, children: [] };
      employeeMap[id] = employeeData;
    }
  
    const rootEmployees = [];
  
    for (const employee of data) {
      const { id, supervisorId } = employee;
      const employeeData = employeeMap[id];
  
      if (employeeData.currentLevel === "Level 0") { // Check if the employee is at Level 0
        rootEmployees.push(employeeData);
      } else {
        const parentEmployee = employeeMap[supervisorId];
        if (parentEmployee) {
          parentEmployee.children.push(employeeData);
        }
      }
    }
    console.log('treeData: ', rootEmployees)  
    return rootEmployees;
  }

  export {
    
  }