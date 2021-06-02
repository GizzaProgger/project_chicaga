function runEditor() {
  return grapesjs.init({
    // Indicate where to init the editor. You can also pass an HTMLElement
    container: '.editor',
    // Get the content for the canvas directly from the element
    // As an alternative we could use: `components: '<h1>Hello World Component!</h1>'`,
    fromElement: true,
    // Size of the editor
    width: 'auto',
    // Disable the storage manager for the moment
    storageManager: false,
    // Avoid any default panel
    panels: { defaults: [] },
  });
}

let urlParams = new URLSearchParams(window.location.search);
let editor;
if (urlParams.get('editor')) editor = runEditor();
if (editor) {
  editor.Commands.add('set-device-desktop', {
    run: editor => editor.setDevice('Desktop')
  });
  editor.Commands.add('set-device-mobile', {
    run: editor => editor.setDevice('Mobile')
  });
  
  // document.querySelector("iframe").src = "/include.html";
  // editor.on("load", () => {
  //   let frame = editor.Canvas.getBody()
  //   let script = `<script src="js/tip.js"></script>`;
  //   console.log("load")
  //   frame.insertAdjacentHTML("beforeend", script)
  // })
}