class CustomFooter extends HTMLElement {
    connectedCallback() {
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <style>
                * {
                    margin: 0;
                    padding: 0;
                    box-sizing: border-box;
                }
                
                .footer {
                    background: #1f2937;
                    color: white;
                    padding: 3rem 0;
                }
                
                .footer-container {
                    max-width: 1200px;
                    margin: 0 auto;
                    padding: 0 1rem;
                }
                
                .footer-content {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 3rem;
                    margin-bottom: 2rem;
                }
                
                .footer-brand h3 {
                    font-size: 1.5rem;
                    font-weight: bold;
                    color: #2563eb;
                    margin-bottom: 1rem;
                }
                
                .footer-links {
                    display: flex;
                    flex-direction: column;
                    gap: 0.5rem;
                }
                
                .footer-link {
                    color: #d1d5db;
                    text-decoration: none;
                    transition: color 0.3s ease;
                }
                
                .footer-link:hover {
                    color: #2563eb;
                }
                
                .footer-bottom {
                    border-top: 1px solid #374151;
                    padding-top: 2rem;
                    text-align: center;
                    color: #9ca3af;
                }
                
                .email-link {
                    color: #2563eb;
                    text-decoration: none;
                    font-weight: 500;
                }
                
                .email-link:hover {
                    text-decoration: underline;
                }
                
                @media (max-width: 768px) {
                    .footer-content {
                        grid-template-columns: 1fr;
                        gap: 2rem;
                    }
                }
            </style>
            
            <footer class="footer">
                <div class="footer-container">
                    <div class="footer-content">
                        <div class="footer-brand">
                            <h3>Nexa Creative</h3>
                            <p>Création de sites web professionnels</p>
                    </div>
                    
                    <div class="footer-links">
                        <a href="#" class="footer-link">Accueil</a>
                        <a href="#services" class="footer-link">Nos Services</a>
                        <a href="#tarifs" class="footer-link">Tarifs</a>
                        <a href="#contact" class="footer-link">Contact</a>
                        <a href="#" class="footer-link">Mentions légales</a>
                    </div>
                </div>
                
                <div class="footer-container">
                    <div class="footer-bottom">
                        <p>&copy; 2024 Nexa Creative. Tous droits réservés.</p>
                        <p>
                            <a href="mailto:nexa.creativee@gmail.com" class="email-link">
                                nexa.creativee@gmail.com
                            </a>
                        </p>
                    </div>
                </div>
            </footer>
        `;
    }
}

customElements.define('custom-footer', CustomFooter);