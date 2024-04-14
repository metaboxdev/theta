export const hideAlert = () => {
  const el = document.querySelector(".alert");
};

export const showAlert = (type, msg) => {
  hideAlert();
  const markup = `<div class="alert" alert--${type}">${msg}</div>`;
  document.querySelector("body").insertAdjacentHTML("afterbegin", markup);
  window.setTimeout(hideAlert, 5000);
};
