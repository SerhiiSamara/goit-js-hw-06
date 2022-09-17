const listWithId = document.querySelector("#categories");
const listWithClass = listWithId.querySelectorAll(".item");

console.log(`Number of categories: ${listWithClass.length}`);

listWithClass.forEach(function (value) {
  const tagWithH2 = value.querySelector("h2");
  const listWithTag = value.querySelectorAll("li");

  console.log(`Category: ${tagWithH2.textContent}`);
  console.log(`Elements: ${listWithTag.length}`);
});
