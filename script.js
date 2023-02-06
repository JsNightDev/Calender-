/*
Create a calendar

Write a function createCalendar(elem, year, month).

The call should create a calendar for the given year / month and put it inside elem.

The calendar should be a table, where a week is < tr >, and a day is < td >.The table top should be < th > with weekday names: the first day should be Monday, and so on till Sunday.

For instance, createCalendar(cal, 2012, 9) should generate in element cal the following calendar:
*/

function createCalendar(elem, year, month) {

    let doc = elem
    let yr = year;
    month--;
    let table = document.createElement('table');
    let today = new Date()
    console.log(today);
    doc.append(table)



    // creating the days
    const days = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"]
    let tr = document.createElement('tr');
    days.forEach(element => {
        let day = element;
        // console.log(day);
        const th = document.createElement('th')
        th.innerText = day
        tr.appendChild(th)
        // console.log(document)
        table.append(tr)
    });


    // creating the full dates

    let date = new Date(year, month + 1, 0)
    let last_date_month = date.getDate()

    let date_time = new Date(year, month, 1);
    console.log(date_time);
    // date_time.setDate(1);
    let month_start_day = date_time.getDay()
    console.log(month_start_day);

    let row = table.insertRow()
    let td
    for (i = 0; i < month_start_day; i++) {
        td = document.createElement('td')
        // td.innerText = "hy"
        row.appendChild(td)
    }
    table.append(row)

    for (let i = 1; i <= last_date_month; i++) {

        let now_i_date = new Date(year, month, i);
        let day = now_i_date.getDay()


        if (day == 0) {
            // alert("hey")
            row = table.insertRow()
        }
        let Td = document.createElement('td')
        Td.innerHTML = i
        row.appendChild(Td)
        table.append(row)

    }


    let last_day_of_month = date.getDay()
    // alert(last_day_of_month)
    let end_row_calender = (days.length - 1) - last_day_of_month
    // alert(end_row_calender)
    for (i = 0; i < end_row_calender; i++) {
        td = document.createElement('td')
        // td.innerText = "hy"
        row.appendChild(td)
    }
    table.append(row)

}

let year = +prompt("Year?")
let month = +prompt("Month?")

createCalendar(document.getElementById('calendar'), year, month);
let domYear = document.getElementById('Year')
domYear.innerHTML = year

let domMonth = document.getElementById('Month')

if (month == 1) {
    month = "January"
    domMonth.innerHTML = month
}
if (month == 2) {
    month = "February"
    domMonth.innerHTML = month

}

if (month == 3) {
    month = "March"
    domMonth.innerHTML = month
}
if (month == 4) {
    month = "April"
    domMonth.innerHTML = month
}
if (month == 5) {
    month = "May"
    domMonth.innerHTML = month

}

if (month == 6) {
    month = "June"
    domMonth.innerHTML = month
}
if (month == 7) {
    month = "July"
    domMonth.innerHTML = month
}
if (month == 8) {
    month = "August"
    domMonth.innerHTML = month

}

if (month == 9) {
    month = "September"
    domMonth.innerHTML = month
}
if (month == 10) {
    month = "October"
    domMonth.innerHTML = month
}
if (month == 11) {
    month = "November"
    domMonth.innerHTML = month

}

if (month == 12) {
    month = "December"
    domMonth.innerHTML = month
}


