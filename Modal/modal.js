const backDrop = document.querySelector(".backdrop");
const Modal = document.querySelector(".modal");
const closeModal = document.querySelector(".close-modal");
const comfirmModal = document.querySelector(".comfirm-modal");
const showModal = document.querySelector(".show-modal");
showModal.addEventListener("click", () => {
  Modal.style.opacity = "1";
  Modal.style.transform = "translateY(7vh)";
  backDrop.style.display = "block";
});
function closemodalfunc() {
  Modal.style.opacity = "0";
  Modal.style.transform = "translateY(-200px)";
  backDrop.style.display = "none";
}
closeModal.addEventListener("click", closemodalfunc);
backDrop.addEventListener("click", closemodalfunc);
comfirmModal.addEventListener("click", () => {
  Modal.style.opacity = "0";
  Modal.style.transform = "translateY(-200px)";
  backDrop.style.display = "none";
  alert("comfirm modal")
});
