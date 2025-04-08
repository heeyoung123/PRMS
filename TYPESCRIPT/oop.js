var Employee = /** @class */ (function () {
    function Employee() {
        var _this = this;
        this.printEmp = function () {
            console.log(" ".concat(_this.empName, "\uC758 \uB098\uC774\uB294 ").concat(_this.age, "\uC774\uACE0 \uC9C1\uC5C5\uC740 ").concat(_this.empJob, "\uC785\uB2C8\uB2E4."));
        };
    }
    return Employee;
}());
var employee1 = new Employee();
employee1.empName = "John";
employee1.age = 7;
employee1.empJob = "Doctor";
employee1.printEmp();
