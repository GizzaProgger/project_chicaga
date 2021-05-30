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
const modalsFactory = () => {
  let object = {
    closeSelector: "",
    observers: [],
    init(config) {
      console.log(self)
      this.closeSelector = config.closeSelector;
      document.querySelectorAll("[data-open-modal]").forEach(this.initHandlerOpen);
      document.querySelectorAll(this.closeSelector).forEach(element => {
        let parentModal = this.getParentModal(element);
        if (parentModal) {
          element.addEventListener("click", () => this.closeModal(parentModal));
        }
      });
    },
    initHandlerOpen(node) {
      node.addEventListener("click", e => {
        e.preventDefault();
        this.openModal(node.dataset.openModal);
      })
    },
    openModal(selector) {
      let modal = document.querySelector([`[data-modal-name=${selector}`]) || document.querySelector(selector);
      modal.classList.add("modal--open");
      document.body.style.overflow = "hidden";
    },
    onMutation(mutationsList) {
      for (let mutation of mutationsList) {
        if (mutation.type === "attributes" && mutation.attributeName === "data-open-modal") {
          self.initHandlerOpen(mutation.target);
        }
      }
    },
    closeModal(modal) {
      modal.classList.remove("modal--open");
      document.body.style.overflow = "auto";
    },
    getParentModal(children) {
      if (!children) return;
      if (children.classList.contains("modal")) return children;
      return this.getParentModal(children.parentElement)
    },
  }
  let self = object;
  return object;
};
let modals = modalsFactory();
modals.init({
  closeSelector: ".closure_link"
});

// Данный объект нужен, чтобы каждый модуль не следил в отдельности за Dom
// Он помогает уменьшить нагрузку
const observer = {
  observer: "",
  callbacks: [],
  config: {
    attributes: true,
    childList: true,
    subtree: true
  },
  init(callbacks) {
    this.callbacks = callbacks;
    this.setObserver();
    document.querySelectorAll("*").forEach(e => {
      this.observer.observe(e, this.config);
    });
  },
  setObserver() {
    this.observer = new MutationObserver((mutationsList, observer) => {
      this.callbacks.forEach(callback => callback(mutationsList, observer));
    });
  }
}

observer.init([modals.onMutation])