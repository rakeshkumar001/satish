import { caloriesRoundingRules } from "./CaloriesRoundingRule";

export const nutritionData = (ingredientsList, rules) => {
    let result = [];

    let dataList = [];

    let hashResult = {};

    if (ingredientsList.length > 0) { //Grouping nested array into one array

        Object.values(rules).forEach(val => {
            ingredientsList.forEach((ingredientsData) => {

                if (ingredientsData.length > 0) {

                    ingredientsData.forEach((listNutrition) => {

                        if (listNutrition.id == val.nutritionFactId) {

                            listNutrition.translations.forEach((name) => {

                                return dataList.push({ "value": caloriesRoundingRules(rules, listNutrition.value), "id": listNutrition.id, "name": name.displayName })

                            })
                        }
                    })

                } else {
                    if (ingredientsData.id == val.nutritionFactId) {
                        ingredientsData.translations.forEach((name) => {

                            return dataList.push({ "value": caloriesRoundingRules(rules, ingredientsData.value), "id": ingredientsData.id, "name": name.displayName })

                        })
                    }

                }

            })

        });





    }

    if (dataList.length > 0) { // adding value from the loop based on id

        dataList.forEach((nutrition) => {

            if (!hashResult[nutrition.id]) {

                hashResult[nutrition.id] = { id: nutrition.id, name: nutrition.name, value: 0 };

                result.push(hashResult[nutrition.id]);

            }

            hashResult[nutrition.id].value += nutrition.value;

        });

    }

    console.log(result, "<<<<<< Result")
    return result

}