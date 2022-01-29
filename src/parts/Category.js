import React from "react";
import CategoryCard from "../elements/category";
import numberFormat from "../utils/numberFormat";

export default function Category({ data }) {
  return data.map((category, index1) => {
    return (
      <section className="container" key={`category-${index1}`}>
        <h4 className="mb-4 fw-md">{category.name}</h4>
        <div className="container-grid">
          {category.items.length === 0 ? (
            <div className="row">
              <div className="col-auto align-items-center">There is no property at this Category</div>
            </div>
          ) : (
            category.items.map((item, index) => {
              return (
                <div className="item column-3 row-1" key={`category-${index1}-item-${index}`}>
                  <div className="card">
                    <CategoryCard src={item.imageUrl} name={item.name} city={item.city} isPopular={item.isPopular} href={`/properties/${item._id}`} price={numberFormat(item.price)} />
                  </div>
                </div>
              );
            })
          )}
        </div>
      </section>
    );
  });
}
