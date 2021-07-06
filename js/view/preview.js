import View from './view.js';

// class for recipe preview
class Preview extends View {
  createPreviewHtml(clickedId, id, title) {
    const html = `
    <div class="row preview-container" data-recipe-id="${id}">
      <div class="col">
        <li class="preview text-dark">
          <a class="${
            clickedId === id ? 'preview-link-active' : ''
          } text-dark preview-link d-flex" href="#">
          <i class=" ms-2 pe-1 bi bi-caret-right-fill me-1"></i>
            <div class="preview-data">
              <h5 class="preview-title mb-0">${title}</h5>
            </div>
          </a>    
        </li>    
      </div>
      <div class="col-1 d-flex align-items-center">
        <span><i class="bi bi-x-lg icon-btn delete-button"></i></span>
      </div>
    </div>    
    `;
    return html;
  }
}

export default new Preview();
