// {
    /* <script type="module">
    import dateFns from 'https://cdn.skypack.dev/date-fns';
  </script> */
// }

import {
    format,
    add,
    eachDayOfInterval,
    startOfWeek,
    startOfMonth,
    endOfWeek,
    endOfMonth,
    isSameMonth,
    isSameDay

} from 'https://cdn.skypack.dev/date-fns@2.29.3';

//? Selecting UI elements
const UIDatePickerBtn = document.querySelector('.date-picker-button')
const UIDatePicker = document.querySelector('.date-picker')
const UICurrentMonth = document.querySelector('.current-month')
const UIDays = document.querySelectorAll('.date')

//? Setting Global Variables
const today = new Date()
let currentDate = today
let selectedDate;

//? Setting defaults on page load
setBtnDate(currentDate)
UICurrentMonth.innerText = format(currentDate, 'MMMM - yyyy')

//? event listners
UIDatePickerBtn.addEventListener("click", (e) => {
    // TOGGLE THE DATE PICKER MENU
    UIDatePicker.classList.toggle("show")
    showCalenderDays(currentDate)
})
UIDatePicker.addEventListener('click', (e) => {
    if(e.target.matches('.prev-month-button')){
        currentDate = add(currentDate, {months: -1})
        UICurrentMonth.innerText = format(currentDate, 'MMMM - yyyy')
        showCalenderDays(currentDate)
    }
    if(e.target.matches('.next-month-button')){
        currentDate = add(currentDate, {months: 1})
        UICurrentMonth.innerText = format(currentDate, 'MMMM - yyyy')
        showCalenderDays(currentDate)
    }

})

//? Helping Functions
function setBtnDate(date){
    UIDatePickerBtn.innerText = format(date, 'MMMM do, yyyy')
    selectedDate = date;
}
function showCalenderDays(date){
    let days = []

    days = eachDayOfInterval(
        {
            start: startOfWeek(startOfMonth(date)) ,
            end: endOfWeek(endOfMonth(date))
        });
    //! Creating the buttons for each day instead of adding text to the existing HTML is better do it later.
    for(let i = 0; i < days.length; i++){
        if(UIDays[i] == undefined) return

        if(!isSameMonth(days[i], currentDate)){
            UIDays[i].classList.add('date-picker-other-month-date')
        }else{
            UIDays[i].classList.remove('date-picker-other-month-date')
        }
        UIDays[i].innerText = format(days[i], 'd')
        UIDays[i].addEventListener('click', () => {
            setBtnDate(days[i])
            UIDatePicker.classList.remove('show')
        })
        if(isSameDay(days[i], selectedDate)){
            UIDays[i].classList.add('selected')
        }else{
            UIDays[i].classList.remove('selected')
        }

    }
}