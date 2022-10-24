import CalendarJs from "calendar-js";
const dynamicMonth = new Date().getMonth();
// const calendarObject = CalendarJs().of(2022, month);
console.log(dynamicMonth);

const { year, month, weekdays, calendar } = CalendarJs().of(2022, dynamicMonth);

const week = calendar;
// week.map((calendarDay,index)=>{
//   console.log(calendarDay,index);
//   calendarDay.map((date,index)=>{
//     console.log(date,index);
//   })
// })
function App() {
  return (
    <>
      <div className="container-fluid text-center">
        <h1 className="calendar-title">
          {month} {year}
        </h1>
        <div className="d-flex justify-content-evenly">
          {weekdays.map((dayName) => {
            return (
              <h2 key={dayName} className="dayName">
                {dayName}
              </h2>
            );
          })}
        </div>
        <div className="container-fluid mb-3">
          {
            week.map((calendarDay,index)=>{
              return <div key={index} className="row text-end">{
                calendarDay.map((date,index)=>{
                  console.log(date);
                  return <h4 key={index} className={`col date border border-dark ${date?"0":"zero-date"}`}>{date}</h4>
                })
              }</div>
            })
          }
        </div>
      </div>
    </>
  );
}

export default App;
