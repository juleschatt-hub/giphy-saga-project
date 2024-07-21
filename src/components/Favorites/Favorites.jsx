function FavoriteView() {
    const favorites = [{
        url: "https://upload.wikimedia.org/wikipedia/commons/7/7d/Wildlife_at_Maasai_Mara_%28Lion%29.jpg",
        title: "sample",
        category: "wild"
    }, {
        url: "https://upload.wikimedia.org/wikipedia/commons/7/7d/Wildlife_at_Maasai_Mara_%28Lion%29.jpg",
        title: "sample 2",
        category: "wild"
    }, {
        url: "https://upload.wikimedia.org/wikipedia/commons/7/7d/Wildlife_at_Maasai_Mara_%28Lion%29.jpg",
        title: "sample 3",
        category: "wild"
    }]
    const categories = [
        'wild',
        'uproarious',
        'poignant',
        'felicitous',
        'whimsical'

    ]
    return <div className="favorites">
        {favorites.map((favorite) => (
            <div className="favorite">
                <img src={favorite.url} alt="" width={200} height={200} />
                <select name="categories" id="categories">
                    <option value="">Select Category</option>
                    {categories.map((category) => (
                        <option value="">{category}</option>
                    ))}
                </select>
            </div>
        ))}
    </div>
}
export default FavoriteView