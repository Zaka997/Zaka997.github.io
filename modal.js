  const modal = document.getElementById("modalCard");
  const card = document.getElementById("openCard");
  const closeBtn = document.querySelector(".close");

  card.onclick = function () {
    modal.style.display = "block";
  }

  closeBtn.onclick = function () {
    modal.style.display = "none";
  }

  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
