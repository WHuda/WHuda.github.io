// Burger
const burgerIcon = document.querySelector("#burger");
const navbarMenu = document.querySelector("#nav-links");

burgerIcon.addEventListener("click", () => {
  navbarMenu.classList.toggle("is-active");
});

// Navbar-modal
const contactsButton = document.querySelector("#contacts");
const modalContacts = document.querySelector("#modal-1");
const contactsBg = document.querySelector("#contact-bg");

const aboutButton = document.querySelector("#about");
const modalAbout = document.querySelector("#modal-2");
const aboutBg = document.querySelector("#about-bg");

function openModal(modal) {
  modal.classList.add("is-active");
}

function closeModal(modal) {
  modal.classList.remove("is-active");
}

contactsButton.addEventListener("click", () => {
  openModal(modalContacts);
});

aboutButton.addEventListener("click", () => {
  openModal(modalAbout);
});

contactsBg.addEventListener("click", () => {
  closeModal(modalContacts);
});

aboutBg.addEventListener("click", () => {
  closeModal(modalAbout);
});

// // sidebars
window.onscroll = function () {
  var sidebar = document.querySelector("#menu");

  if (
    document.documentElement.scrollTop > 980 ||
    document.body.scrollTop > 980
  ) {
    sidebar.style.opacity = "1";
  } else {
    sidebar.style.opacity = "0";
  }
};

//share
const shareButton = document.getElementById("share");

shareButton.addEventListener("click", function () {
  const currentURL = window.location.href;
  navigator.clipboard
    .writeText(currentURL)
    .then(() => {
      alert("URL скопирован успешно!");
    })
    .catch((error) => {
      console.error("Ошибка копирования URL: ", error);
    });
});

//Adaptive sidebar
const callToActionBtns = document.querySelectorAll(".menu-list a");

callToActionBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    callToActionBtns.forEach(f => f.classList.remove("is-active"));
    e.target.classList.add("is-active");
  });
});



