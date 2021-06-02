// Если хочешь, чтобы при наведении на элемент появлялась подсказка,
// то на него вешай data-tip="Какой-то html"
const tip = {
  init() {
    this.appendTipToPage();
    document.querySelectorAll("[data-tip]").forEach(el => {
      el.addEventListener("mouseover", e => this.showTip(e, el.dataset.tip));
      el.addEventListener("mouseout", this.hiddenTip)
    }) 
  },
  showTip(e, text) {
    let tip = document.querySelector(".div-hint");
    tip.querySelector(".text-hint").innerHTML = text;
    let box = e.target.getBoundingClientRect();
    tip.style.left = box.left - tip.getBoundingClientRect().width / 2 + 10 + "px";
    tip.style.top = box.bottom + "px";
    tip.classList.add("div-hint--active");
  },
  hiddenTip() {
    document.querySelector(".div-hint").classList.remove("div-hint--active")
  },
  appendTipToPage() {
    let tip = `
    <div class="div-hint">
      <div class="text-hint"></div>
      <div class="point-block-hint"></div>
    </div>
    `;
    document.body.insertAdjacentHTML("beforeend", tip);
  }
}

setTimeout(() => tip.init(), 10000)