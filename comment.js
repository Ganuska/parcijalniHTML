const id = document.title;

const show = () => {
  comment.innerHTML = JSON.parse(localStorage.getItem("comments" + id))
    .map((item) => {
      return `
        <h2>komentar</h2>
        <p>${item}</p>
        <br><br/>
        <hr></hr>
        `;
    })
    .join("  ");
};
const comment = document.getElementById("comment");
const handleSubmit = (e) => {
  if (!localStorage.getItem("comments" + id) === true) {
    localStorage.setItem("comments" + id, JSON.stringify([]));
  }
  const coments = [...JSON.parse(localStorage.getItem("comments" + id))];
  e.preventDefault();
  const comForm = document.getElementById("comForm");
  coments.push(comForm.value);
  localStorage.setItem("comments" + id, JSON.stringify(coments));
  show();
  comForm.value = "";
};
show();
