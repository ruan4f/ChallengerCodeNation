import React from 'react'

const matchCase = (text, pattern) => {
    let result = "";

    for (let i = 0; i < text.length; i++) {
        const c = text.charAt(i);
        const p = pattern.charCodeAt(i);

        if (p >= 65 && p < 65 + 26) {
            result += c.toUpperCase();
        } else {
            result += c.toLowerCase();
        }
    }

    return result;
};

const RecipeItem = ({ recipe, searchString }) => {
    if (!recipe) return null;

    const { thumbnail, title, ingredients } = recipe;

    const searchRegEx = new RegExp(searchString, "gi");
    const mark = match => `<mark>${matchCase(searchString, match)}</mark>`;

    return (
        <div className="col-sm-3 mt-4">
            <div className="card">
                <img className="card-img-top img-fluid" src={thumbnail} alt="" />
                <div className="card-body">
                    <h5
                        className="card-title"
                        dangerouslySetInnerHTML={{
                            __html: title.replace(searchRegEx, mark)
                        }}
                    />
                    <p
                        className="card-text"
                        dangerouslySetInnerHTML={{
                            __html: `<strong>Ingredients: </strong>${ingredients.replace(
                                searchRegEx,
                                mark
                            )}`
                        }}
                    />
                </div>
            </div>
        </div>
    );
};

export default RecipeItem;