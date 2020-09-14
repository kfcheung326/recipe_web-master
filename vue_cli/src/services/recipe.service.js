import axios from 'axios';
const API_URL = 'http://localhost:8080/api/';

class RecipeService {
    getRecipeContent(title) {
        return axios.get(API_URL + "recipeSearch?q="+title);
    }

    getDbRecipe(){
        return axios.get(API_URL + "recipes");
    }

    getRecipe(id){
        return axios.get(API_URL + "recipe?id="+id);
    }

    updateRecipe(id,data){
        return axios.put(API_URL + "recipe?id="+id,data);
    }

    uploadRecipe(recipe) {
        return axios.post(API_URL + "recipe", 
            // recipe
        {
            
            title: recipe.title,
            energy: recipe.energy,
            qty: recipe.qty,
            protein: recipe.protein,
            fat: recipe.fat,
            carbs: recipe.carbs,
            ingredientLines: recipe.ingredientLines,
            username: recipe.username,
        }
        );


    }

    removeRecipe(id){
        return axios.delete(API_URL + "recipe?id="+id);

    }

    
}
export default new RecipeService();
