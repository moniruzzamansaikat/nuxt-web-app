export function setTitle(title, description = "My amazing site.") {
  useSeoMeta({
    title: "My Site - " + title,
    ogTitle: title,
    description,
    ogDescription: 'This is my amazing site, let me tell you all about it.',
    ogImage: 'https://example.com/image.png',
    twitterCard: 'summary_large_image',
  });
}