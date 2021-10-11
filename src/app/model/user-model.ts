export class userEntity
{
    public id: number;
    name : string;
    profile : string;
    gender : string;
    department : string;
    salary : number;
    Day : string;
    Month : string;
    Year : string;
    dateObject : Date; 
    Notes : string;


    constructor(userObject)
    {
        this.id = userObject.id;
        this.name = userObject.employeeName;
        this.profile = userObject.profilePic;
        this.gender = userObject.employeeGender;
        this.department = userObject.employeeDepartment;
        this.salary = userObject.employeeSalary;
        // this.Day = userObject.employeeStartDate;
        // this.Month = userObject.Month;
        // this.Year = userObject.Year;
        this.Notes = userObject.employeeNotes;
        this.dateObject = userObject.employeeStartDate;
    }
}