import { useEffect } from "react";
import customData from '../../owid-covid-data.json';
import C3Chart from 'react-c3js';
import 'c3/c3.css';

function Dashboard() {

    useEffect(() => {
        localStorage.setItem('login',true);
    },[]);

    const items = customData.results;

    const data = {
        columns: [
          [items[0].continent,items[0].new_deaths_per_million, items[0].life_expectancy],
          [items[257].continent,items[257].new_deaths_per_million, items[257].life_expectancy],
          [items[601].continent,items[601].new_deaths_per_million, items[601].life_expectancy],
          [items[1440].continent,items[1440].new_deaths_per_million, items[1440].life_expectancy],
        ]
      };
    
    console.log("customData",customData)

    return (
        <div className="chart-div">
            <h3 className="text-center">Visual Representation of Covid Life Expectancy Per Continent</h3>
            <C3Chart data={data} />
        </div>
    );
}

export default Dashboard;