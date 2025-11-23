class CustomHeader extends HTMLElement {
    connectedCallback() {
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <style>
                * {
                    margin: 0;
                    padding: 0;
                    box-sizing: border-box;
                }
                
                .header {
                    background: white;
                    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
                    position: sticky;
                    top: 0;
                    z-index: 1000;
                }
                
                .header-container {
                    max-width: 1200px;
                    margin: 0 auto;
                    padding: 0 1rem;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    height: 80px;
                }
                
                .logo {
                    font-size: 1.5rem;
                    font-weight: bold;
                    color: #2563eb;
                    text-decoration: none;
                }
                
                .nav-links {
                    display: flex;
                    align-items: center;
                    gap: 2rem;
                }
                
                .nav-link {
                    color: #374151;
                    text-decoration: none;
                    font-weight: 500;
                    transition: color 0.3s ease;
                }
                
                .nav-link:hover {
                    color: #2563eb;
                }
                
                .cta-button {
                    background: #2563eb;
                    color: white;
                    padding: 0.75rem 1.5rem;
                    border-radius: 0.5rem;
                    text-decoration: none;
                    font-weight: 600;
                    transition: all 0.3s ease;
                }
                
                .cta-button:hover {
                    background: #1d4ed8;
                    transform: translateY(-1px);
                }
                
                .mobile-menu-button {
                    display: none;
                    background: none;
                    border: none;
                    color: #374151;
                    cursor: pointer;
                }
                
                @media (max-width: 768px) {
                    .mobile-menu-button {
                        display: block;
                    }
                    
                    .nav-links {
                        position: fixed;
                        top: 80px;
                        left: 0;
                        width: 100%;
                        background: white;
                        flex-direction: column;
                        padding: 2rem;
                        box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
                        transform: translateY(-100%);
                        opacity: 0;
                        visibility: hidden;
                        transition: all 0.3s ease;
                    }
                    
                    .nav-links.active {
                        transform: translateY(0);
                        opacity: 1;
                        visibility: visible;
                    }
                }
            </style>
            
            <header class="header">
                <div class="header-container">
                    <a href="#" class="logo">Nexa Creative</a>
                    
                    <button class="mobile-menu-button">
                        <i data-feather="menu"></i>
                    </button>
                    
                    <nav class="nav-links">
                        <a href="#" class="nav-link">Accueil</a>
                        <a href="#services" class="nav-link">Nos Services</a>
                        <a href="#tarifs" class="nav-link">Tarifs</a>
                        <a href="#contact" class="nav-link">Contact</a>
                        <a href="#contact" class="cta-button">Demander un site</a>
                    </nav>
                </div>
            </header>
        `;
        
        // Mobile menu functionality
        const mobileMenuButton = this.shadowRoot.querySelector('.mobile-menu-button');
        const navLinks = this.shadowRoot.querySelector('.nav-links');
        
        if (mobileMenuButton && navLinks) {
            mobileMenuButton.addEventListener('click', () => {
                navLinks.classList.toggle('active');
                feather.replace();
            });
            
            // Close mobile menu when clicking on a link
            const links = this.shadowRoot.querySelectorAll('.nav-link, .cta-button');
            links.forEach(link => {
                link.addEventListener('click', () => {
                    navLinks.classList.remove('active');
                });
            });
        }
    }
}

customElements.define('custom-header', CustomHeader);