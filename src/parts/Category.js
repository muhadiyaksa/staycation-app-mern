import React from "react";
import CategoryCard from "../elements/category";

export default function Category({ data }) {
  return data.map((category, index1) => {
    return (
      <section className="container" key={`category-${index1}`}>
        <h4 className="mb-4 fw-md">{category.name}</h4>
        <div class="container-grid">
          {category.items.length === 0 ? (
            <div class="row">
              <div class="col-auto align-items-center">There is no property at this Category</div>
            </div>
          ) : (
            category.items.map((item, index) => {
              return (
                <div class="item column-3 row-1" key={`category-${index1}-item-${index}`}>
                  <div class="card">
                    <CategoryCard src={item.imageUrl} name={item.name} city={item.city} isPopular={item.isPopular} href={`/properties/${item._id}`} />
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
