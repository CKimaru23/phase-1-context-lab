//In this lab, I have used .map(), .reduce() and .bind() methods, and this keyword

//creating employee record function that has a single employee's details in an array
function createEmployeeRecord(employeeArray) {
    //creating employee array
    const employee = {
      firstName: employeeArray[0],
      familyName: employeeArray[1],
      title: employeeArray[2],
      payPerHour: employeeArray[3],
      timeInEvents: [],
      timeOutEvents: [],
    };
  
    return employee;
}


//creating employees record that has an array of individual employee
function createEmployeeRecords(employeesArray) {
    // Converts each nested array into an employee record using createEmployeeRecord
   
      const employeeRecord = employeesArray.map(rec => createEmployeeRecord(rec));

    return employeeRecord;
}


//creating time in Event function
function createTimeInEvent(dateStamp){
    //splitting the date into arrays
    let [date, hour] = dateStamp.split(" ");

    this.timeInEvents.push({
        type: 'TimeIn',
        hour: parseInt(hour, 10),
        date,
    })
    return this
}

//creating time out function
function createTimeOutEvent(dateStamp){
    //splitting the date into arrays
    let [date, hour] = dateStamp.split(" ")
    this.timeOutEvents.push({
        type: 'TimeOut',
        hour: parseInt(hour, 10),
        date: date,
    })
    return this
}
//function that gets time out and subtracts time in to know the hours worked on a single day 
//Keeping in mind that we have assumptions that the employee works during the working days, not across days,
//They always check in and out without forgetting, time is in 24hr-clock-system and that
//they always check in and out on the hour

function hoursWorkedOnDate(date){
    let timeInEvent = this.timeInEvents.find(event => event.date === date);
    let timeOutEvent = this.timeOutEvents.find(event => event.date === date);
      let totalTimeWorked = (timeOutEvent.hour - timeInEvent.hour) / 100;
      return parseInt(totalTimeWorked, 10);
}


//Function to calculate the wages earned based on the hrs worked and rate of pay per hour
function wagesEarnedOnDate(date) {
    return parseInt(hoursWorkedOnDate.apply(this, [date]) * this.payPerHour.toString());
}

//function to find employees by first name
function findEmployeeByFirstName(sourceArray, firstName) {
    return sourceArray.find(findFirst=>findFirst.firstName === firstName)
}

//calculating the payroll
function calculatePayroll (employeeRecord) {
    let records = employeeRecord.reduce((allInfo, datesRecords)=>{
        return allInfo + allWagesFor.apply(datesRecords);
    }, 0)
    return parseInt(records);
}

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

