class AppHeader extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({"mode: open"});
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowDOM.innerHTML = `
    <style>
    :host {
      display: inline;
    }
    </style>
    <nav class="navbar navbar-expand-lg navbar-light bg-warning sticky-top">
      <div class="right-header">
        <h3>My Portfolio</h3>
      </div>
      <div class="collapse navbar-collapse d-flex flex-row-reverse bd-highlight" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item active">
            <a class="nav-link" href="#aboutme">Tentang Saya<span class="sr-only">(current)</span></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#profile">Profil</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#contact">Kontak</a>
          </li>
        </ul>
      </div>
    </nav>
    `
  }
}

customElements.define("app-header", AppHeader);
