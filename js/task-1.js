const allCategories = document.querySelectorAll(".item");
console.log(`Number of categories: ${allCategories.length}`);

allCategories.forEach((element) => {
  const titleEl = element.querySelector("h2").textContent;
  console.log(`Category: ${titleEl}`);
  const numberEl = element.querySelectorAll("li").length;
  console.log(`Elements: ${numberEl}`);
});
