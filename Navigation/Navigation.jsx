import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import Categorie from "../Screens/Categorie";
import Categories from "../Screens/Categories";
import Detail from "../Screens/Detail";
import Favorites from "../Screens/Favorites";


const AppNavigator = createStackNavigator(
    {
        CategoriesScreen : Categories,
        CategorieScreen : Categorie,
        DetailScreen : Detail,
        FavoritesScreen : Favorites,
    },
  );

  export default createAppContainer(AppNavigator);