/**
 * Furina Music — Material 3 Organic Shape Morpher (Source: rootscripts/riff)
 * Smoothly morphs shapes and outlines with cubic easing for artwork frames and stage elements.
 */

(function () {
  'use strict';

  const SHAPES = [
    // 0: Rounded Squircle
    'M 20,0 H 80 A 20,20 0 0 1 100,20 V 80 A 20,20 0 0 1 80,100 H 20 A 20,20 0 0 1 0,80 V 20 A 20,20 0 0 1 20,0 Z',
    // 1: Fluid Oval Egg
    'M 50,0 C 80,0 100,20 100,50 C 100,85 75,100 50,100 C 25,100 0,85 0,50 C 0,20 20,0 50,0 Z',
    // 2: 4-Leaf Hydro Clover
    'M 50,15 C 65,0 85,0 92,12 C 100,25 90,45 80,50 C 90,55 100,75 92,88 C 85,100 65,100 50,85 C 35,100 15,100 8,88 C 0,75 10,55 20,50 C 10,45 0,25 8,12 C 15,0 35,0 50,15 Z',
    // 3: Soft Hexagon Pebble
    'M 30,5 L 70,5 C 80,5 95,20 95,30 L 95,70 C 95,80 80,95 70,95 L 30,95 C 20,95 5,80 5,70 L 5,30 C 5,20 20,5 30,5 Z',
    // 4: Fontaine Teardrop Gem
    'M 50,2 C 75,25 96,55 96,75 C 96,90 76,98 50,98 C 24,98 4,90 4,75 C 4,55 25,25 50,2 Z'
  ];

  function easeInOutCubic(t) {
    return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
  }

  window.RiffShapes = {
    shapes: SHAPES,
    ease: easeInOutCubic,
    getRandomShape: function () {
      return SHAPES[Math.floor(Math.random() * SHAPES.length)];
    },
    applyShapeToElement: function (elem, shapeIndex) {
      if (!elem) return;
      const idx = shapeIndex !== undefined ? (shapeIndex % SHAPES.length) : Math.floor(Math.random() * SHAPES.length);
      const clipPath = `path('${SHAPES[idx]}')`;
      elem.style.clipPath = clipPath;
      elem.style.webkitClipPath = clipPath;
    }
  };
})();
