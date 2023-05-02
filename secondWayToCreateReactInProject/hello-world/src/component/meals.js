import './meals.css';

function MyMeals() {
    var date = new Date().getHours();
    console.log(date);
    date = 23
    return (
      <div className="my-meals">
        {/* {date >= 12 && date < 18 ? <h1> Lunch Time</h1>: date >= 18 ? <h1>Dinner Time</h1> : date < 12 ? <h1>Break Fast Time</h1>: 'rrrrr'} */}
        {date >= 12 && date < 18 && <h1 className = "lunch-time"> Lunch Time</h1>}
        {date >= 18 && date < 24 && <h1 className = "dinner-time"> Dinner Time</h1>}
        {date < 12 && <h1 className = "break-fast-time"> Break-Fast Time</h1>}
        
  
      </div>
  
    );
  }

  export default MyMeals;