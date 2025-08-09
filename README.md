<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://moderntirehouse.com">
    <img src="logos/logo.png" alt="Logo" width="120" height="120">
  </a>

  <h1 align="center">Modern Tire House SPC</h1>
  <p align="center">
    Your Trusted Tire Traders in Oman
    <br />
    <br />
    <a href="https://moderntirehouse.com"><strong>🌐 Visit Website »</strong></a>
    <br />
    <br />
    <a href="#-deployment">Deployment</a>
    ·
    <a href="#-technologies">Technologies</a>
    ·
    <a href="#-development">Development</a>
  </p>
</div>

<!-- BADGES -->
<div align="center">

[![Website Status](https://img.shields.io/website?url=https%3A%2F%2Fmoderntirehouse.com&label=Website)](https://moderntirehouse.com)
[![GitHub last commit](https://img.shields.io/github/last-commit/aarshps/modern-tire-house/main)](https://github.com/aarshps/modern-tire-house/commits/main)
[![GitHub repo size](https://img.shields.io/github/repo-size/aarshps/modern-tire-house)](https://github.com/aarshps/modern-tire-house)

</div>

## 🚀 About The Project

[![Modern Tire House Screen Shot][product-screenshot]](https://moderntirehouse.com)

**Modern Tire House SPC** is a premier tire trading company based in Oman with over 3 decades of excellence in the tire industry. We specialize in providing comprehensive solutions for:

* 🚚 **Truck & Bus Tires**
* 🏭 **Industrial Tires**
* 🚜 **OTR (Off-The-Road) Tires**
* 🛞 **Commercial Vehicle Tires**

Our extensive product range includes premium brands and our services cover everything from supply to maintenance solutions.

### ✨ Key Features

* **🌐 Fully Responsive Design** - Works on all devices
* **⚡ High Performance** - Optimized for speed and SEO
* **🎨 Modern UI/UX** - Clean and professional interface
* **📱 Mobile-First Approach** - Enhanced mobile experience
* **🛠️ Service Showcase** - Detailed service offerings
* **🏷️ Product Categories** - Organized product listings
* **🏆 Brand Partnerships** - Featured premium brands

## 🔧 Technologies

This project is built with modern web technologies for optimal performance and user experience:

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

</details>

## 🚀 Deployment

We use **GitHub Actions** for automated deployment to our cPanel hosting environment.

### Workflows

1. **[Full Process: Deploy and Clear Cache](.github/workflows/deploy-and-clear.yml)** - Master workflow
   ```mermaid
   graph LR
     A[Manual Trigger] --> B[Deploy Website]
     B --> C[Clear Sucuri Cache]
   ```

2. **[Module] Deploy Website via FTP** ([deploy.yml](.github/workflows/deploy.yml))
   * Uses [SamKirkland/FTP-Deploy-Action](https://github.com/SamKirkland/FTP-Deploy-Action)
   * Deploys files to `public_html/` directory
   * Requires FTP credentials as GitHub Secrets

3. **[Module] Clear Sucuri Cache** ([clear-cache.yml](.github/workflows/clear-cache.yml))
   * Sends cache clear request to Sucuri WAF API
   * Uses `curl` to POST to Sucuri API endpoint
   * Requires API Key and Secret as GitHub Secrets

### Manual Deployment

To manually trigger deployment:

1. Go to [Actions tab](../../actions)
2. Select **"Full Process: Deploy and Clear Cache"**
3. Click **"Run workflow"**

### Secrets Required

| Secret Name | Purpose |
|-------------|---------|
| `FTP_SERVER` | FTP server address |
| `FTP_USERNAME` | FTP username |
| `FTP_PASSWORD` | FTP password |
| `SUCURI_API_KEY` | Sucuri API key |
| `SUCURI_API_SECRET` | Sucuri API secret |

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

### Project Structure

```
modern-tire-house/
├── home.html          # Main HTML file
├── favicon.ico        # Website favicon
├── README.md          # This file
├── .github/
│   └── workflows/     # GitHub Actions workflows
│       ├── deploy.yml
│       ├── clear-cache.yml
│       └── deploy-and-clear.yml
├── images/            # Background and content images
│   ├── hero.jpeg
│   ├── services.jpg
│   └── ... (various section images)
├── logos/             # Logo files
│   └── logo.png
├── products/          # Product category pages (if any)
└── services/          # Service detail pages (if any)
```

### Code Standards

* **CSS Variables**: Used for consistent theming
* **Responsive Design**: Mobile-first approach with media queries
* **Accessibility**: Semantic HTML and ARIA attributes
* **Performance**: Optimized images and efficient code
* **SEO**: Proper meta tags and structured content

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

Website: [https://moderntirehouse.com](https://moderntirehouse.com)

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
  Made with ❤️ in Oman
</p>

<!-- MARKDOWN LINKS & IMAGES -->
[product-screenshot]: images/hero.jpeg