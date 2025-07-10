import Head from 'next/head';

export default function SEO({
  title = 'YourSiteName',
  description = 'Default site description here.',
  slug = '',
  image = '',
  keywords = '',
  author = 'YourSiteName',
  publishedTime = '',
  updatedTime = '',
  type = 'website',
  siteName = 'YourSiteName',
  twitterHandle = '@YourTwitter',
  children,
}) {
  const siteUrl = 'https://yourdomain.com'; // TODO: Replace with your actual domain
  const pageUrl = slug ? `${siteUrl}${slug.startsWith('/') ? '' : '/'}${slug}` : siteUrl;
  const pageTitle = title ? `${title} | ${siteName}` : siteName;
  const pageDescription = description;
  const pageImage = image || `${siteUrl}/default-image.jpg`;
  const pageKeywords = keywords || 'default, keywords, here';

  return (
    <Head>
      {/* Primary Meta Tags */}
      <title>{pageTitle}</title>
      <meta name="description" content={pageDescription} />
      <meta name="keywords" content={pageKeywords} />
      <meta name="author" content={author} />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={pageUrl} />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDescription} />
      <meta property="og:url" content={pageUrl} />
      <meta property="og:image" content={pageImage} />
      <meta property="og:site_name" content={siteName} />
      {publishedTime && <meta property="article:published_time" content={publishedTime} />}
      {updatedTime && <meta property="article:modified_time" content={updatedTime} />}
      <meta property="og:locale" content="en_US" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={pageDescription} />
      <meta name="twitter:image" content={pageImage} />
      <meta name="twitter:site" content={twitterHandle} />
      <meta name="twitter:creator" content={twitterHandle} />

      {/* Favicon (optional, update paths as needed) */}
      <link rel="icon" href="/favicon-96x96-1.png" />
      {/* <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" /> */}
      <link rel="manifest" href="/site.webmanifest" />

      {/* Extra: Theme color, MS tile color */}
      <meta name="theme-color" content="#ffffff" />
      <meta name="msapplication-TileColor" content="#ffffff" />

      {/* Children for custom meta tags */}
      {children}
    </Head>
  );
} 