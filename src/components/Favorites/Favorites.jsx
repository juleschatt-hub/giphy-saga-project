import React, { useEffect } from 'react';
import { useDispatch, useSelector} from 'react-redux';


function Favorites() {
    const dispatch = useDispatch();
    const categoriesList = useSelector(store => store.categoriesList);
    useEffect(() => {
        dispatch({type: 'FETCH_CATEGORIES'});

    }, []);

    const favorites = useSelector(store => store.favorites);

    useEffect(() => {
        dispatch({type: 'FETCH_FAVORITES'});
    }, []);

    return (
    <>
      <div className="favorites">
         {favorites.map((favorite) => (
             <div className="favorite" > 
                 <img key={favorites.id} src={favorite.gif_url} alt="" width={200} height={200} />
                  <select name="categories" id="categories">
                     <option value="">Select Category</option>
                     {categoriesList.map((category) => (
                         <option value="{category.name}" key={category.id}>{category.name}</option>
                     ))}
                 </select>
             </div>
         ))}
     </div> 
    </>
)

}

export default Favorites