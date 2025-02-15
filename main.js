const { Plugin } = require('obsidian');

class AutoResizeNotePlugin extends Plugin {
  onload() {
    this.registerEvent(this.app.workspace.on('editor-ready', () => {
      this.adjustNoteSize();
    }));
  }

  adjustNoteSize() {
    const editor = this.app.workspace.activeLeaf.view.sourceMode;
    const noteContent = editor ? editor.getValue() : '';

    // Example condition for adjusting note size based on content length
    const contentLength = noteContent.length;
    const note = document.querySelector('.markdown-preview-view');
    
    if (contentLength > 1000) {
      note.style.height = 'auto';  // Adjust height based on content length
      note.style.maxHeight = '80vh'; // Limit the max height
    } else {
      note.style.height = '80vh';  // Default size
    }
  }
}

module.exports = AutoResizeNotePlugin;