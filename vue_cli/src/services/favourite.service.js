import axios from 'axios';
const API_URL = 'http://localhost:8080/api/';

class RecipeService {
    getFav(){
        return axios.get(API_URL + "favourites");
    }

    addFav(recipe,user) {
        return axios.post(API_URL + "favourites", 
            // recipe
        {
            img: recipe.img,
            title: recipe.title,
            qty: recipe.qty,
            protein: recipe.protein,
            fat: recipe.fat,
            carbs: recipe.carbs,
            ingredientLines: recipe.ingredientLines,
            username: user,
        }
        );


    }

    removeRecipe(id){
        return axios.delete(API_URL + "favourites?id="+id);

    }
}
export default new RecipeService();
