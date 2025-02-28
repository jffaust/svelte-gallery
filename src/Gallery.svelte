<script>
  import Img from './lib/Img.svelte';
  import layout from './lib/layout';

  let { images = [], rowHeight = 220, gutter = 8, imageComponent = Img } = $props();
  let width = $state(0);
  let scaledImages = $derived(layout({
    images,
    containerWidth: width || 1280,
    targetHeight: rowHeight,
    gutter
  }));

  function imgStyle({ scaledWidth, scaledHeight, isLastInRow, isLastRow }) {
    let marginRight = gutter + 'px',
      flex = `0 0 ${scaledWidth}px`,
      marginBottom = isLastRow ? '0' : marginRight;

    if (isLastInRow) {
      marginRight = '0';
      flex = `1 1 ${scaledWidth - 4}px`;
    }

    return `height: ${scaledHeight}px; flex: ${flex}; margin-right: ${marginRight}; margin-bottom: ${marginBottom};`;
  }
</script>

<style>
  .masonry {
    max-width: 100%;
  }

  .container {
    display: flex;
    flex-wrap: wrap;
  }

  .image {
    position: relative;
    height: 100%;
  }

  .image > :global(*) {
    width: 100%;
    height: 100%;
  }

  .hidden {
    visibility: hidden;
  }

</style>

<div class="masonry" bind:clientWidth={width}>
  <div class="container" style="width: {width}px" class:hidden={!width}>
    {#each scaledImages as { index, ratio, scaledHeight, scaledWidth, isLastInRow, isLastRow, scaledWidthPc, ...image }}
      <div
        class="image"
        style={imgStyle({ scaledHeight, scaledWidth, isLastInRow, isLastRow })}
      >
        <slot {index} {image}>
          <svelte:component this={imageComponent} {...image} />
        </slot>
      </div>
    {/each}
  </div>
</div>
