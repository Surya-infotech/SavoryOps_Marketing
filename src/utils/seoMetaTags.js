// Default SEO meta tags from index.html
const DEFAULT_META_TAGS = {
  title: 'SavoryOps - Complete Restaurant Management System | Streamline Your Operations',
  description:
    'Transform your restaurant operations with SavoryOps. Complete restaurant management system with inventory, staff scheduling, analytics, and more. Start your free trial today!',
  keywords:
    'restaurant management, POS system, inventory management, staff scheduling, restaurant analytics, restaurant software, food service management',
};

/**
 * Restores default SEO meta tags from index.html
 */
export const restoreDefaultMetaTags = () => {
  document.title = DEFAULT_META_TAGS.title;

  let metaDescription = document.querySelector('meta[name="description"]');
  if (!metaDescription) {
    metaDescription = document.createElement('meta');
    metaDescription.setAttribute('name', 'description');
    document.head.appendChild(metaDescription);
  }
  metaDescription.setAttribute('content', DEFAULT_META_TAGS.description);

  let metaKeywords = document.querySelector('meta[name="keywords"]');
  if (!metaKeywords) {
    metaKeywords = document.createElement('meta');
    metaKeywords.setAttribute('name', 'keywords');
    document.head.appendChild(metaKeywords);
  }
  metaKeywords.setAttribute('content', DEFAULT_META_TAGS.keywords);
};

/**
 * Sets custom SEO meta tags for a page
 * @param {string} title - Page title
 * @param {string} description - Page description
 * @param {string} keywords - Page keywords
 */
export const setPageMetaTags = (title, description, keywords) => {
  document.title = title;

  let metaDescription = document.querySelector('meta[name="description"]');
  if (!metaDescription) {
    metaDescription = document.createElement('meta');
    metaDescription.setAttribute('name', 'description');
    document.head.appendChild(metaDescription);
  }
  metaDescription.setAttribute('content', description);

  let metaKeywords = document.querySelector('meta[name="keywords"]');
  if (!metaKeywords) {
    metaKeywords = document.createElement('meta');
    metaKeywords.setAttribute('name', 'keywords');
    document.head.appendChild(metaKeywords);
  }
  metaKeywords.setAttribute('content', keywords);
};
