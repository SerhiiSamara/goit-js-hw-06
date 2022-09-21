const listWithId = document.querySelector("#categories");
const listWithClass = listWithId.querySelectorAll(".item");

console.log(`Number of categories: ${listWithClass.length}`);

listWithClass.forEach(function (value) {
  const tagWithH2 = value.firstElementChild;
  const listWithTag = value.lastElementChild.children;

  console.log(`Category: ${tagWithH2.textContent}`);
  console.log(`Elements: ${listWithTag.length}`);
});
