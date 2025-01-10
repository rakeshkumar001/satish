## Next.js App Router Course - Starter

This is the starter template for the Next.js App Router Course. It contains the starting code for the dashboard application.

For more information, see the [course curriculum](https://nextjs.org/learn) on the Next.js Website.


<!-- NOTES FROM NEXT.KS DOCS -->
>>> **FOLDER-STRUCTURE**
/app: Contains all the routes, components, and logic for your application, this is where you'll be mostly working from.
/app/lib: Contains functions used in your application, such as reusable utility functions and data fetching functions.
/app/ui: Contains all the UI components for your application, such as cards, tables, and forms. To save time, we've pre-styled these components for you.
/public: Contains all the static assets for your application, such as images.
/scripts: Contains a seeding script that you'll use to populate your database in a later chapter.
Config Files: You'll also notice config files such as next.config.js at the root of your application. Most of these files are created and pre-configured when you start a new project using create-next-app. You will not need to modify them in this course.

>>> Tailwind and CSS modules are the two most common ways of styling Next.js applications

>>> **CLSX**
*clsx is a library that lets you toggle class names easily*. We recommend taking a look at documentation for more details, but here's the basic usage:
Suppose that you want to create an InvoiceStatus component which accepts status. The status can be 'pending' or 'paid'.
If it's 'paid', you want the color to be green. If it's 'pending', you want the color to be gray.

ex:- className={clsx(
        'inline-flex items-center rounded-full px-2 py-1 text-sm',
        {
          'bg-gray-100 text-gray-500': status === 'pending',
          'bg-green-500 text-white': status === 'paid',
        },
      )}

>>>  **CSS**
 Next.js supports different ways of styling your application, including:

*Global CSS*: Simple to use and familiar for those experienced with traditional CSS, but can lead to larger CSS bundles and difficulty managing styles as the application grows.
*CSS Modules*: Create locally scoped CSS classes to avoid naming conflicts and improve maintainability.
*Tailwind CSS*: A utility-first CSS framework that allows for rapid custom designs by composing utility classes.
*Sass*: A popular CSS preprocessor that extends CSS with features like variables, nested rules, and mixins.
*CSS-in-JS*: Embed CSS directly in your JavaScript components, enabling dynamic and scoped styling.

>>>  ⚡ **FONT**
*Next.js automatically optimizes fonts* in the application when you use the next/font module. It downloads font files at build time and hosts them with your other static assets. This means when a user visits your application, there are no additional network requests for fonts which would impact performance.
*next/font*includes built-in automatic self-hosting for any font file. This means you can optimally load web fonts with zero layout shift, thanks to the underlying CSS *size-adjust* property used.

>>> ⚡**IMAGE**
Instead of manually implementing these optimizations, you can use the next/image component to automatically optimize your images.

The <Image> Component is an extension of the HTML <img> tag, and comes with automatic image optimization, such as:

*Preventing layout shift* automatically when images are loading.Images without dimensions and web fonts are common causes of layout shift due to the browser having to download additional resources.
*Resizing images* to avoid shipping large images to devices with a smaller viewport.
*Lazy loading images* by default (images load as they enter the viewport).
*Serving images in modern formats, like WebP and AVIF*, when the browser supports it.

>>> 🚀 **Nested-routing**
You can create separate UIs for each route using layout.tsx and page.tsx files.

*page.tsx* is a special Next.js file that exports a React component, and it's required for the route to be accessible. In your application, you already have a page file: */app/page.tsx* - this is the home page associated with the route /.

To create a nested route, you can nest folders inside each other and add page.tsx

The <Layout /> component receives a children prop. This child can either be a page or another layout. In your case, the pages inside /dashboard will automatically be nested inside a <Layout /> like so

One benefit of using *layouts in Next.js* is that on navigation, only the page components update while the layout won't re-render. This is called *partial rendering:*

you imported the *Inter* font using *import { inter } from '@/app/ui/fonts';* into another layout: /app/layout.tsx
C:\REACT\NEXT JS\nextjs-dashboard\app\layout.tsx
You can use the *root layout* to modify your <html> and <body> tags, and add metadata.
Since the new layout you've just created (/app/dashboard/layout.tsx) is unique to the dashboard pages, you don't need to add any UI to the root layout above.
the *layout file* is the best way to create a shared layout that all pages in your application can use.

>>>🚀 **Navigating-Between-Pages**

<Link /> :- <Link> allows you to do client-side navigation with JavaScript.

**Automatic code splitting and prefetching**
To improve the navigation experience, *Next.js automatically code splits your application by route segments*. This is different from a traditional React SPA, where the browser loads all your application code on initial load.
*Splitting code by routes means that pages become isolated*. If a certain page throws an error, the rest of the application will still work.
Furthermore, in production, whenever <Link> components appear in the browser's viewport, *Next.js automatically prefetches the code for the linked route in the background*. By the time the user clicks the link, the code for the destination page will already be loaded in the background, and this is what makes the page transition near-instant!

**Pattern: Showing active links**
A common UI pattern is to show an active link *to indicate to the user what page they are currently on*.
To do this, you need to get the user's current path from the URL. Next.js provides a hook called *usePathname()* that you can use to check the path and implement this pattern.
Since *usePathname() is a hook*, you'll need to turn nav-links.tsx into a Client Component. Add React's "*use client*" directive to the top of the file, then import usePathname() from next/navigation.


>>> **Setting Up Your Database**
you'll be setting up a PostgreSQL database using *@vercel/postgres*
link:- *https://nextjs.org/learn/dashboard-app/setting-up-your-database*
That's right! Seeding is useful when you want to have some data to work with as you build your application.

>>>**Fetching Data**
In Next.js, you can create API endpoints using *Route Handlers*.
**Database queries**
When you're creating a full-stack application, you'll also need to write logic to interact with your database. _For relational databases like Postgres, you can do this with SQL, or an ORM like Prisma_.

*_There are a few cases where you have to write database queries:_*

When creating your API endpoints, you need to write logic to interact with your database.
If you are using React Server Components (fetching data on the server), you can skip the API layer, and query your database directly without risking exposing your database secrets to the client.

**Using Server Components to fetch data**
By default, Next.js applications use *_React Server Components_*. Fetching data with Server Components is a relatively new approach and there are a few benefits of using them:

Server Components (_https://react.dev/reference/rsc/server-components_)
support promises, providing a simpler solution for asynchronous tasks like data fetching. You can use async/await syntax without reaching out for useEffect, useState or data fetching libraries.
Server Components execute on the server, so you can keep expensive data fetches and logic on the server and only send the result to the client.
As mentioned before, since Server Components execute on the server, you can query the database directly without an additional API layer.

Root Page is an _async component_. This allows you to use await to fetch data.
eg:- _const latestInvoices = await fetchLatestInvoices();_

However... there are two things you need to be aware of:

The data requests are unintentionally blocking each other, creating a _request waterfall_.
By default, Next.js prerenders routes to improve performance, this is called _Static Rendering_. So if your data changes, it won't be reflected in your dashboard.

What are **request waterfalls**?
A "waterfall" refers to a sequence of network requests that depend on the completion of previous requests. In the case of data fetching, each request can only begin once the previous request has returned data.
eg:- 
_export default async function Page() {_
 _const revenue = await fetchRevenue();_
  _const latestInvoices = await fetchLatestInvoices(); // wait for fetchRevenue() to finish_

**Parallel data fetching**
A common way to avoid waterfalls is to initiate all data requests at the same time - in parallel.

In JavaScript, you can use the _Promise.all() or Promise.allSettled()_ functions to initiate all promises at the same time
ex:- 
const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, 'foo');
});

Promise.all([promise1, promise2, promise3]).then((values) => {
  console.log(values);
});
// Expected output: Array [3, 42, "foo"]

The *_Promise.all()_* static method takes an iterable of promises as input and returns a single Promise. This returned promise fulfills when all of the input's promises fulfill (including when an empty iterable is passed), with an array of the fulfillment values. It rejects when any of the input's promises rejects, with this first rejection reason.



>>> **Static and Dynamic Rendering**
**What is Static Rendering?**
With static rendering, data fetching and rendering happens on the server at build time (when you deploy) or during revalidation. The result can then be distributed and cached in a Content Delivery Network (CDN).

Whenever a user visits your application, the cached result is served. There are a couple of benefits of static rendering:

Faster Websites - Prerendered content can be cached and globally distributed. This ensures that users around the world can access your website's content more quickly and reliably.
Reduced Server Load - Because the content is cached, your server does not have to dynamically generate content for each user request.
SEO - Prerendered content is easier for search engine crawlers to index, as the content is already available when the page loads. This can lead to improved search engine rankings.
Static rendering is useful for UI with no data or data that is shared across users, such as a static blog post or a product page. It might not be a good fit for a dashboard that has personalized data that is regularly updated.

The opposite of static rendering is dynamic rendering.

**What is Dynamic Rendering?**
With dynamic rendering, content is rendered on the server for each user at request time (when the user visits the page). There are a couple of benefits of dynamic rendering:

Real-Time Data - Dynamic rendering allows your application to display real-time or frequently updated data. This is ideal for applications where data changes often.
User-Specific Content - It's easier to serve personalized content, such as dashboards or user profiles, and update the data based on user interaction.
Request Time Information - Dynamic rendering allows you to access information that can only be known at request time, such as cookies or the URL search parameters.

You can use a Next.js API called **unstable_noStore** inside your Server Components or data fetching functions to opt out of static rendering. 
eg:-
import { unstable_noStore as noStore } from 'next/cache';
export async function fetchRevenue() {
  // Add noStore() here to prevent the response from being cached.
  // This is equivalent to in fetch(..., {cache: 'no-store'}).
  *_noStore()_*;
 
  // ...
}