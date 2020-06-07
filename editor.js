tinymce.init({
  selector: "textarea",  // change this value according to your HTML.
  plugins: "save",
  menubar: "file",
  menu: {
    file: { title: "File", items: "save" },
  },
  toolbar: "save",

  setup: (editor) => {
    
    editor.ui.registry.addMenuItem("save", {
      text: "Save",
      icon: "save",
      disabled: true,
      onSetup: function(api) {
        if (tinymce.activeEditor.isDirty()==true) {
          api.setDisabled(false);
        }
      },
      onAction: function() {
        tinymce.activeEditor.execCommand('mceSave');
      }
    
  },
});
