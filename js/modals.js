// Отвечает за открытие модальных окон
// На элемент-тригер навешиваем data-open-modal="modal-name"
// Пример
// <a href="#" class="link-call" data-open-modal="modal-13">звонок за наш счет</a>
// Блоку с модалкой даем data-modal-name="modal-name"
// <div class="lbock-sertyficate modal-13 modal" data-modal-name="modal-13">
// Внутрь этого блока вставляем блок <div class="modal-wrapper"></div>
// И уже в modal-wrapper вставляем сам блок
// Готовые модалки можно достать из блок .div-block-lbock
// Копируй их, но внутри них содержиться блоки .lbock_bg
// Он не нужен. Его можно удалить
// modal-name давай как в moqups
// Чтобы его посмотреть открой Pages -> Формы -> Название формы
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