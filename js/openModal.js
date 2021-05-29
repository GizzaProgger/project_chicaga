// Отвечает за открытие модальных окон
const openModal = ({
  init() {
    document.querySelectorAll("[data-open-modal]").forEach(node => {
      node.addEventListener("click", e => {
        e.preventDefault();
        openModal(e.dataset.open-modal);
      })
    })
  },
  openModal(selector) {
    let modal = $(selector);
    if (!modal) return;
    if (modal.modal) {
      modal.modal();
    } else if (modal.show) {
      modal.show();
    } else if (modal.open) {
      modal.open();
    }
  }
})()
openModal.init();