import { useState, useEffect } from "react";
import "./App.css";

function App() {
    const [data, setData] = useState({
        name: "",
        age: 0,
        date: "",
        programming: "",
    });

    useEffect(() => {
        fetch("/data")
            .then((res) => res.json())
            .then((data) => {
                setData({
                    name: data.Name,
                    age: data.Age,
                    date: data.Date,
                    programming: data.programming,
                });
            });
    }, []);

    return <div className="App">
      <h1>React and Flask</h1>
      <p>{data.name}</p>
      <p>{data.age}</p>
      <p>{data.date}</p>
      <p>{data.programming}</p>
    </div>;
}

export default App;
