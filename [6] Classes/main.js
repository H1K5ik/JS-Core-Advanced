class Employee {
  constructor(name, salary) {
    this.name = name;
    this.salary = salary;
  }

  calculateYearSalary() {
    if(!this.salary) return `${this.name}, соболезную`
    return 'Твоя зп: ' + this.salary * 12;
  }
}

class Manager extends Employee {
  constructor(name, salary, department, bonus) {
    super(name, salary);
    this.department = department;
    this.bonus = bonus;
  }

  calculateYearSalary() {
     if(!this.bonus || !this.salary) return `${this.name}, соболезную`
    if(!this.bonus) return `${this.name}, ты сидишь без бонуса, твоя зп: ` + this.salary * 12
    if(!this.salary) return `${this.name}, ты работаешь за еду!`

    return `${this.name}, твоя зп с бонусами: ` + (this.salary * 12 + this.bonus) + ` и работаешь ты в отделе: ${this.department}`;
  }
}

const manager1 = new Manager('Master');
const manager2 = new Manager('Master', 6000, 'Dangeon', 2000);

console.log(manager1.calculateYearSalary());
console.log(manager2.calculateYearSalary());