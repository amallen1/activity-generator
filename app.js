const boxes = Array.from(document.getElementsByClassName("box"));
const paragraphs = Array.from(document.getElementsByClassName("thing"));

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    activity(box.id, box.dataset.category);
  });
});

let activity = (type, num) => {
  fetch(`https://www.boredapi.com/api/activity?type=${type}`)
    .then((response) => response.json())
    .then((data) => {
      paragraphs[num].textContent = `${data.activity}`;
    });
};
