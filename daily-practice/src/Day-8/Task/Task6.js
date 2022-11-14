

const Task6 = () => {
    const image1 = "https://cdn.pixabay.com/photo/2016/11/29/05/07/breads-1867459__480.jpg";
    const image2 = "https://cdn.pixabay.com/photo/2014/05/18/11/25/pizza-346985__480.jpg";
    const image3 = "https://cdn.pixabay.com/photo/2016/11/29/05/07/breads-1867459__480.jpg";


    return (
        <div>
            <img className="w-25 h-25 m-3 rounded-2 " src={image1} alt="randm" />
            <img className="w-25 h-25 m-3 rounded-2 " src={image2} alt="randm" />
            <img className="w-25 h-25 m-3 rounded-2 " src={image3} alt="randm" />

        </div>
    )
}

export default Task6