# Website Performance Guide

This guide is the practical standard we should follow when adding new pages, images, animation, audio, or video to the PeakTew website. It is based on the performance work already done on the landing page and, just as importantly, the things that did not work well in practice.

The goal is not to chase a perfect Lighthouse score at the expense of the experience. A page that scores well but shows blank images while someone scrolls is not fast. A fast page should appear quickly, remain stable, and have content ready by the time the visitor reaches it.

## Choosing the right file format

### Images

Use the format that matches the content instead of using PNG for everything.

| Type of image | Preferred format | Notes |
| --- | --- | --- |
| Photographs and detailed artwork | AVIF or WebP | AVIF is usually smallest; provide WebP when compatibility or tooling is a concern. |
| Illustrations with transparency | WebP | Usually much smaller than PNG while retaining transparency. |
| Logos and simple icons | SVG | Best for shapes that need to remain sharp at every size. |
| Small images requiring lossless transparency | PNG | Use only when WebP or SVG is unsuitable. |
| Decorative gradients and simple glows | CSS | Prefer CSS when it can reproduce the design accurately. Keep the image when CSS noticeably changes the artwork. |

Do not convert an image simply because another format is fashionable. Compare the visual result and file size. A poorly compressed AVIF is not automatically better than a well-compressed WebP.

### Image dimensions

An image should be close to the size at which it is displayed.

If a card is displayed at a maximum width of 300px, it does not need a 3,000px source. A good high-density desktop version would be around 600–640px wide. A mobile version displayed at 180px can be around 360–400px wide.

As a general rule:

- Export at approximately twice the largest displayed CSS size for sharp high-density screens.
- Create separate mobile and desktop versions when their required dimensions are substantially different.
- Avoid serving the desktop file and shrinking it with CSS on mobile.
- Preserve the original source file outside the production path when future design edits may need it.

Use `<picture>` when different screen sizes need different files:

```jsx
<picture>
  <source media="(max-width: 767px)" srcSet={cardMobile} />
  <source media="(min-width: 768px)" srcSet={cardDesktop} />
  <img
    src={cardDesktop}
    alt="Notification preview"
    width="640"
    height="190"
    decoding="async"
  />
</picture>
```

### Practical image budgets

| Image role | Suggested maximum |
| --- | ---: |
| Logo or icon | 5–30 KB |
| Small card or thumbnail | 20–80 KB |
| Normal content image | 80–200 KB |
| Large hero image | 150–300 KB |
| Full-width decorative artwork | Preferably below 300 KB |

These limits are per responsive version, not the sum of every source file. A browser should download only the version it needs.

## Video

Use MP4 with H.264 as the safe baseline. WebM can be supplied first when it provides a meaningful size reduction, with MP4 as the fallback.

Before adding a video:

- Remove audio if the video is always muted.
- Reduce the resolution to the largest size actually shown.
- Lower the frame rate when 60 fps is unnecessary.
- Compress it before committing it to the project.
- Provide a small poster image so the section does not appear empty while the video buffers.

For a decorative landing-page video, aim for roughly 1–3 MB or less. Longer editorial videos should normally be streamed from a video service instead of bundled with the website.

A below-the-fold video should not compete with the hero:

```jsx
<video
  src={isNearViewport ? videoSource : undefined}
  poster={videoPoster}
  preload={isNearViewport ? "auto" : "none"}
  autoPlay
  muted
  loop
  playsInline
/>
```

Start loading it before it enters the viewport, usually with an `IntersectionObserver` margin of around 1,000–1,600px. Loading only when the video is already visible often creates the blank or janky experience we want to avoid.

Always reserve the video's space with a fixed aspect ratio or section height. Loading the media must not push the rest of the page around.

## Audio

Use MP3 or AAC for broad compatibility. Background music normally does not need a high bitrate; 96–128 kbps is usually enough. Keep short looping tracks below roughly 500 KB–1 MB when possible.

Background audio should not download or attempt to play during the initial page load. Browsers commonly block autoplay with sound anyway. Initialize it after a real interaction such as a pointer press, key press, touch, or scroll.

Also remember:

- Respect the visitor's saved mute preference.
- Do not restart the track during route changes.
- Pause and release the player when the provider unmounts.
- Keep the sound control accessible and clearly labelled.

## Fonts

Fonts can delay text rendering and can become the LCP bottleneck even when the images are optimized.

- Prefer WOFF2 for web delivery instead of TTF or OTF.
- Include only the weights actually used by the website.
- Subset fonts when the full character set is unnecessary.
- Use `font-display: swap` so text is visible immediately.
- Preload only the font needed for above-the-fold content.
- Avoid preloading every weight; that makes them all high-priority downloads.

Aim for approximately 30–60 KB per subsetted WOFF2 file. Two carefully selected weights are better than loading an entire font family.

## Loading order

The browser should receive files in roughly this priority:

1. HTML and critical CSS.
2. The hero font and the actual LCP image, if there is one.
3. Above-the-fold images and essential JavaScript.
4. Content just below the first viewport.
5. Deeper images, video, audio, analytics, and third-party embeds.

### Above the fold

Do not use `loading="lazy"` on:

- The LCP image.
- A hero mascot or artwork visible immediately.
- A logo visible at the top of the page.
- Any image that overlaps the first viewport.

For an important hero image, use explicit dimensions, `fetchPriority="high"`, and optionally preload it from `index.html`. Only preload confirmed critical assets; too many preloads cancel out the benefit.

### Below the fold

`loading="lazy"` is appropriate for genuinely distant images, but it is not a complete loading strategy. Browser heuristics differ, and content inside a very tall page can still arrive too late.

For sections that visitors reach quickly:

- Use smaller responsive assets first.
- Reserve their dimensions to prevent movement.
- Let the browser load them normally if they are only a short distance below the fold.
- Use an `IntersectionObserver` with a generous lead distance for heavier media.

Use `decoding="async"` on non-critical images so image decoding is less likely to block the main thread. This changes decoding behavior, not download priority.

## Preventing layout shifts and jank

Every image, iframe, and video should have known dimensions before it loads. Use HTML `width` and `height`, CSS `aspect-ratio`, or a fixed-size wrapper.

```jsx
<img
  src={peopleImage}
  alt="People using PeakTew"
  width="1512"
  height="776"
  className="h-auto w-full"
/>
```

For smooth scrolling and animation:

- Use transforms and opacity instead of repeatedly changing layout properties.
- Avoid updating React state on every raw scroll event.
- Throttle scroll work with `requestAnimationFrame` where necessary.
- Make scroll listeners passive when they never call `preventDefault()`.
- Respect `prefers-reduced-motion`.
- Avoid large blurred elements and expensive filters covering the entire screen.

## JavaScript and React

A JavaScript bundle contains the application code, React, imported libraries, and modules needed by that entry point. Media files may appear in the build output, but they are separate network resources rather than JavaScript inside the bundle.

To keep JavaScript under control:

- Lazy-load page routes that are not needed on the landing page.
- Dynamically import large interactive components.
- Do not import a heavy library globally for one small effect.
- Remove unused dependencies and imports.
- Prefer CSS for simple entrance animations.
- Be careful with animation libraries applied to hundreds of elements.
- Check compressed bundle size, not only the uncompressed file.

Moving code into another component does not automatically make the bundle smaller. It improves organization, but code splitting happens only when the component is dynamically imported into a separate chunk.

## Third-party embeds

YouTube players, maps, chat widgets, and analytics can load a surprising amount of JavaScript.

Use a lightweight facade for embeds: show a thumbnail and play button first, then create the real iframe after the visitor clicks. The wrapper should keep the final iframe's aspect ratio so there is no layout shift.

## Testing changes properly

Performance scores naturally vary between runs. Never judge a change from one Lighthouse number.

Use this process:

1. Build the production application with `npm run build`.
2. Serve it with `npm run preview`.
3. Run Lighthouse against the preview URL.
4. Run it at least three times and use the median result.
5. Test with a mobile viewport and throttling.
6. Check the Network panel with the cache disabled.
7. Scroll through the real page and confirm that media is ready before it appears.

When diagnosing a regression, record more than the performance score:

- Which element Lighthouse identified as the LCP.
- FCP, LCP, TBT/INP, and CLS.
- Initial transfer size by resource type.
- The largest network requests.
- Unused JavaScript.
- Whether audio, video, or third-party resources loaded before interaction.

A good optimization should improve both the measurements and the way the page feels.

## Before merging a new page or section

- [ ] Images use an appropriate format and are close to their displayed dimensions.
- [ ] Mobile and desktop variants exist where they produce a meaningful saving.
- [ ] The LCP asset is not lazy-loaded.
- [ ] Distant images and media do not compete with the hero.
- [ ] Videos have a poster and do not download during the initial load unless visible.
- [ ] Background audio waits for interaction.
- [ ] Images, videos, and iframes reserve their layout space.
- [ ] Third-party embeds use a click-to-load facade where practical.
- [ ] New routes and heavy components are code-split.
- [ ] The production build succeeds.
- [ ] Lighthouse is run more than once.
- [ ] The page is manually tested on a slower mobile connection.

## Final principle

Optimize priority before optimizing everything. The browser should spend its first few seconds on what the visitor can actually see and use. Smaller files help, but sending the right file at the right time is what makes the website feel fast.
