class Employee{
	empName:string;
	age: number;
	empJob:string;
	printEmp=():void=>{
		console.log(` ${this.empName}의 나이는 ${this.age}이고 직업은 ${this.empJob}입니다.`);
}

}
let employee1=new Employee()
employee1.empName="John";
employee1.age=7;
employee1.empJob="Doctor";

employee1.printEmp()