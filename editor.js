tinymce.init({
  selector: "textarea",  // change this value according to your HTML
  plugins: "save",
  menubar: "file",
  menu: {
    file: { title: "File", items: "save" },
  },
  toolbar: "save",

  // Save MenuItem Code:
  setup: (editor) => {
    editor.ui.registry.addMenuItem("save", {
      text: "Save",
      icon: "save",
      disabled: true,
      onSetup: (api) => {
        if (tinymce.activeEditor.isDirty()==true) {
          api.setDisabled(false);
        }
      },
      onAction: () => {
        editor.execCommand("mceSave");
      }
    });
  },
  // ## Code Ends.
  
});
