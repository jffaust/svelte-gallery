# Svelte Gallery

[![NPM](https://img.shields.io/npm/v/svelte-gallery)](https://www.npmjs.com/package/svelte-gallery) [![License](https://img.shields.io/npm/l/svelte-gallery)](https://github.com/peppercornstudio/svelte-gallery/blob/master/LICENSE)

Intelligent masonry-style photo gallery that maintains image aspect ratios in perfect rows. Svelte gallery analyses a graph of all possible row combinations to find the ideal gallery layout based on a target row height.

Originally forked from [fergaldoyle/image-masonry](https://github.com/fergaldoyle/image-masonry), `svelte-gallery` is a full rewrite taking the core layout logic and focussing on an updated, maintained svelte implementation.

![](https://raw.githubusercontent.com/fergaldoyle/image-masonry/master/docs/masonry.jpg)

### Usage

```sh
npm i svelte-gallery
```

```svelte
<script>
  import Gallery from 'svelte-gallery';
  import CustomImg from '$lib/CustomImg.svelte';

  const images = [
    { src: 'https://loremflickr.com/600/400', width: 600, height: 400 },
    { src: 'https://loremflickr.com/400/600', width: 400, height: 600 },
    { src: 'https://loremflickr.com/800/1200', width: 800, height: 1200 },
    { src: 'https://loremflickr.com/300/200', width: 300, height: 200 },
  ];
</script>

<p>Default Gallery</p>
<Gallery {images} />

<p>Gallery with children snippet</p>
<Gallery {images}>
	{#snippet children(index, image)}
		<img {...image} />
	{/snippet}
</Gallery>

<p>Gallery with custom component</p>
<Gallery {images} ImageComponent={CustomImg} />
```

### Properties

| Property         | Description                                                         | Type                 | Default |
| ---------------- | ------------------------------------------------------------------- | -------------------- | ------- |
| `images`         | Images to display. Must (native) `width` and `height` values        | `HTMLImageElement[]` | `[]`    |
| `rowHeight`      | Ideal row height to aim for in px                                   | `number`             | `220`   |
| `gutter`         | Gap between images in the gallery in px                             | `number`             | `8`     |
| `imageComponent` | Optional custom image component, passed all props in `images` array | `SvelteComponent`    | `img`   |
