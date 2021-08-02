const boxes = Array.from(document.getElementsByClassName("box"));
const paragraphs = Array.from(document.getElementsByClassName("thing"));

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (box.id === "education") {
      activity("education", 0);
    } else if (box.id === "recreational") {
      activity("recreational", 1);
    } else if (box.id === "social") {
      activity("social", 2);
    } else if (box.id === "relaxation") {
      activity("relaxation", 3);
    }
  });
});

let activity = (type, num) => {
  fetch(`https://www.boredapi.com/api/activity?type=${type}`)
    .then((response) => response.json())
    .then((data) => {
      paragraphs[num].textContent = `${data.activity}`;
    });
};
