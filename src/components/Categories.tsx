import React from 'react';

type CategoriesProps = {
  categories: string[];
}

function Categories({ categories }: CategoriesProps) {
  console.log(categories);
  // return (
  //   <div>
  //     {['전체', ...categories].map((category) => (
  //       <button type="button" key={category}>
  //         {category}
  //       </button>
  //     ))}
  //   </div>
  // );
}

export default Categories;
