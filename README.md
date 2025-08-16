<h1 align="center">Modern Tire House</h1>
<p align="center">
  Static Website Repository
  <br />
  <br />
  <a href="#-deployment">Deployment</a>
  ·
  <a href="#-technologies">Technologies</a>
  ·
  <a href="#-development">Development</a>
</p>

<!-- BADGES -->
<div align="center">

[![Website Status](https://img.shields.io/website?url=https%3A%2F%2Fmoderntirehouse.com&label=Website)](https://moderntirehouse.com)
[![GitHub last commit](https://img.shields.io/github/last-commit/aarshps/modern-tire-house/main)](https://github.com/aarshps/modern-tire-house/commits/main)
[![GitHub repo size](https://img.shields.io/github/repo-size/aarshps/modern-tire-house)](https://github.com/aarshps/modern-tire-house)

</div>

## 📁 Project Overview

This repository contains the source code for the Modern Tire House website, a static HTML/CSS/JavaScript project deployed to https://moderntirehouse.com.

### 📁 Repository Structure

```
modern-tire-house/
├── home.html          # Main HTML file
├── favicon.ico        # Website favicon
├── README.md          # This file
├── .github/
│   └── workflows/     # GitHub Actions workflows
│       ├── deploy.yml
│       ├── clear-cache.yml
│       └── release.yml
├── docs/              # Documentation files
├── images/            # Background and content images
│   ├── hero.jpeg
│   ├── services.jpg
│   └── ... (various section images)
├── logos/             # Logo files
│   └── logo.png
├── products/          # Product category images
│   ├── truck-and-bus-tyres.jpeg
│   ├── industrial-tyres.jpeg
│   ├── otr-tyres.jpeg
│   ├── forklift-solid-tyres.jpeg
│   ├── agri-tyres.jpeg
│   ├── accessories.jpeg
│   ├── specialized-rubber-parts.jpeg
│   └── vane-pumps.jpeg
├── scripts/           # JavaScript files
├── services/          # Service images
│   ├── truck-bus-tyres.jpeg
│   ├── industrial-otr-tyres.jpeg
│   ├── agriculture-tyres.jpeg
│   ├── tyre-repair-service.jpeg
│   ├── express-service.jpeg
│   └── expert-consultation.jpeg
└── ...                # Other assets
```

## 🔧 Technologies

This project uses modern web technologies:

```mermaid
graph TD
    A[Modern Tire House] --> B[HTML5]
    A --> C[CSS3]
    A --> D[JavaScript]
    A --> E[Font Awesome]
    A --> F[Google Fonts]
    A --> G[AOS Library]
    A --> H[Responsive Design]
```

* **Frontend**: Pure HTML, CSS, JavaScript (No frameworks)
* **Styling**: Custom CSS with modern design principles
* **Fonts**: Google Fonts (Inter, Space Grotesk, Playfair Display)
* **Icons**: Font Awesome 6.4.0
* **Animations**: AOS (Animate On Scroll) Library
* **Images**: Optimized JPEG format
* **Hosting**: cPanel Shared Hosting via FTP Deployment
* **Versioning**: Semantic versioning with automated releases

## 🎨 Visual Assets

<details>
<summary>Click to view image gallery</summary>

| Section | Preview |
|--------|---------|
| Hero | ![Hero](images/hero.jpeg) |
| Services | ![Services](images/services.jpg) |
| Products | ![Products](images/products.jpg) |
| Brands | ![Brands](images/brands.jpg) |
| Stats | ![Stats](images/stats.jpg) |
| About | ![About](images/about.jpg) |
| Contact | ![Contact](images/contact.jpg) |
| Location | ![Location](images/maps.jpg) |
| About Service | ![About Service](images/about-service.jpg) |

</details>

## 🚀 Deployment

We use **GitHub Actions** for automated deployment to our cPanel hosting environment with semantic versioning.

### Workflows

1. **[Create Release](.github/workflows/release.yml)** - Creates a new release with auto-incremented version number
   * Automatically increments patch version (e.g., v1.2.3 → v1.2.4)
   * Generates release notes automatically
   * Can be manually triggered with custom tag/name

2. **[Deploy Website via FTP](.github/workflows/deploy.yml)**
   * Uses [SamKirkland/FTP-Deploy-Action](https://github.com/SamKirkland/FTP-Deploy-Action)
   * Can deploy latest release or specific version
   * Deploys files to `public_html/` directory
   * Requires FTP credentials as GitHub Secrets

3. **[Clear Sucuri Cache](.github/workflows/clear-cache.yml)**
   * Sends cache clear request to Sucuri WAF API
   * Uses `curl` to POST to Sucuri API endpoint
   * Requires API Key and Secret as GitHub Secrets

### Manual Deployment

To manually trigger deployment:

1. Go to [Actions tab](../../actions)
2. Select the desired workflow:
   * **Create Release** - To create a new versioned release
   * **Deploy Website via FTP** - To deploy the latest release or specific version
   * **Clear Sucuri Cache** - To clear the website cache

### Secrets Required

| Secret Name | Purpose |
|-------------|---------|
| `FTP_SERVER` | FTP server address |
| `FTP_USERNAME` | FTP username |
| `FTP_PASSWORD` | FTP password |
| `SUCURI_API_KEY` | Sucuri API key |
| `SUCURI_API_SECRET` | Sucuri API secret |
| `GITHUB_TOKEN` | GitHub token for release creation |

## 🛠️ Development

### Prerequisites

* A modern web browser
* A code editor (VS Code recommended)
* Basic knowledge of HTML, CSS, and JavaScript

### Getting Started

1. Clone the repo:
   ```sh
   git clone https://github.com/aarshps/modern-tire-house.git
   ```

2. Open `home.html` in your browser or editor

3. Make your changes

4. Test locally by opening in browser

### Code Standards

* **CSS Variables**: Used for consistent theming
* **Responsive Design**: Mobile-first approach with media queries
* **Accessibility**: Semantic HTML and ARIA attributes
* **Performance**: Optimized images and efficient code
* **JavaScript**: Custom scripts in the `scripts/` directory (when added)

## 🌐 Browser Support

| Browser | Support |
|---------|---------|
| Chrome  | ✅ Latest |
| Firefox | ✅ Latest |
| Safari  | ✅ Latest |
| Edge    | ✅ Latest |
| IE      | ❌ Not supported (CSS Grid, ES6+ JavaScript) |

## 📞 Contact

Aarsh - [@aarshps](https://github.com/aarshps)

Project Link: [https://github.com/aarshps/modern-tire-house](https://github.com/aarshps/modern-tire-house)

## 🙏 Acknowledgments

* [Font Awesome](https://fontawesome.com) - Icon library
* [Google Fonts](https://fonts.google.com) - Typography
* [AOS](https://michalsnik.github.io/aos/) - Animate on scroll library
* [Img Shields](https://shields.io) - Badges
* [Mermaid](https://mermaid-js.github.io/) - Diagrams

## 📈 Stats

<div align="center">

![GitHub stars](https://img.shields.io/github/stars/aarshps/modern-tire-house?style=social)
![GitHub forks](https://img.shields.io/github/forks/aarshps/modern-tire-house?style=social)
![GitHub watchers](https://img.shields.io/github/watchers/aarshps/modern-tire-house?style=social)

</div>

---

<p align="center">
  Made with ❤️ 
</p>

<!-- MARKDOWN LINKS & IMAGES -->
[product-screenshot]: images/hero.jpeg