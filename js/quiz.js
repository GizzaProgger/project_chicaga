let quiz = {
  currentStep: 1,
  block: null,
  numberSteps: 1,
  init(selector) {
    this.block = document.querySelector(`${selector}`);
    this.setNumberSteps();
    document.querySelector(`${selector} .block-button .button`)
      .addEventListener("click", e => {
        this.goToNextStep();
      })
  },
  goToNextStep() {
    if (this.currentStep >= this.numberSteps) return;
    this.currentStep++;
    this.updateBlock();
    this.updateProgressbar();
    if (this.getPercentCompleted() > 45) this.changeProgressBarColor("#fff");
    if (this.currentStep == this.numberSteps - 1) this.setBeforeFinalView();
    if (this.currentStep == this.numberSteps) this.finish();
  },
  updateBlock() {
    this.block.querySelectorAll(".form-block-choice-block").forEach(e => {
      e.classList.remove("form-block-choice-block--active")
    });
    this.block.querySelector(`.form-block-choice-block:nth-child(${this.currentStep})`)
      .classList.add("form-block-choice-block--active");
  },
  updateProgressbar() {
    this.block.querySelector(".bar-choice").style.width = this.getPercentCompleted() + "%";
    this.block.querySelector(".current_step").innerHTML = `${this.currentStep} из ${this.numberSteps}`
  },
  finish() {

  },
  getPercentCompleted() {
    let percent;
    if (this.currentStep === 1) percent = 21;
    else if (this.currentStep === 2) percent = 36;
    else percent = (100 / this.numberSteps) * this.currentStep;
    return percent; 
  },
  setBeforeFinalView() {
    document.querySelector(".block-button .button").innerHTML = `
      Узнать свой идеальный формат
      <br>
      и получить подарок
    `
  },
  changeProgressBarColor(color) {
    this.block.querySelector(".current_step").style.color = color;
  },
  setNumberSteps() {
    this.numberSteps = this.block.querySelector(".quiz-steps").children.length;
  }
}
quiz.init("#email-form-3");