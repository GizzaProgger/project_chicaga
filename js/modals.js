// Отвечает за открытие модальных окон
const modals = {
  closeSelector: "",
  init(config) {
    this.closeSelector = config.closeSelector;
    document.querySelectorAll("[data-open-modal]").forEach(node => {
      node.addEventListener("click", e => {
        e.preventDefault();
        this.openModal(node.dataset.openModal);
      })
    });
    document.querySelectorAll(this.closeSelector).forEach(element => {
      let parentModal = this.getParentModal(element);
      if (parentModal) {
        element.addEventListener("click", () => this.closeModal(parentModal));
      }
    });
  },
  openModal(selector) {
    let modal = document.querySelector([`[data-modal-name=${selector}`]) || document.querySelector(selector);
    modal.classList.add("modal--open");
    document.body.style.overflow = "hidden";
  },
  closeModal(modal) {
    modal.classList.remove("modal--open");
    document.body.style.overflow = "auto";
  },
  getParentModal(children) {
    if (!children) return;
    if (children.classList.contains("modal")) return children;
    return this.getParentModal(children.parentElement)
  }
}
modals.init({
  closeSelector: ".closure_link"
});