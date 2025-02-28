/// <reference types="svelte" />
import { SvelteComponent } from 'svelte';

export interface GalleryProps {
  images: Partial<HTMLImageElement>[];
  rowHeight?: number;
  gutter?: number;
  imageComponent?: typeof SvelteComponent;
}

export default class Gallery extends SvelteComponent<GalleryProps> {}
