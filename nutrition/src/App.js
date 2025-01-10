import './App.css';
import Ingredients from "./PDPCode.json";
import RangeValue from "./GetIngridient.json"
import { nutritionData } from './NutritionData';

function App() {
  return (
    <div className="App">
      {
        nutritionData(Ingredients,RangeValue)
      }
    </div>
  );
}

export default App;
