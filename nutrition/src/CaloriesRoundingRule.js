import { MidpointRounding } from "./MidPointRounding";
export function caloriesRoundingRules(caloriesRoundingRules, valueToRound) {
// console.log(caloriesRoundingRules, valueToRound,"caloriesRoundingRules, valueToRound")
    const keys = caloriesRoundingRules !== undefined && Object.keys(caloriesRoundingRules);
  
   
  
    if (keys.length > 0) {
  
      for (let i = 0; i < caloriesRoundingRules.length; i++) {
  
        var rule = caloriesRoundingRules[i];
  
        if (
  
          (valueToRound > rule.lowerLimit || (rule.lowerLimitInclusive && valueToRound == rule.lowerLimit)) &&
  
          (valueToRound < rule.upperLimit || (rule.upperLimitInclusive && valueToRound == rule.upperLimit))
  
        ) {
  
          if (rule.roundToValue == 0) {
  
            return rule.roundToInt;
  
          } else {
  
            var roundingMode = rule.midpointRoundingAwayFromZero ? MidpointRounding.AwayFromZero : MidpointRounding.ToEven;
  
            return Math.round(valueToRound / rule.roundToInt, roundingMode) * rule.roundToInt;
  
          }
  
        }
  
      }
  
      return Math.round(valueToRound, 0);
  
    }
  
  }