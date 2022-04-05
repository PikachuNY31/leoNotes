# ID Selector
>**Last Updated:** 2022.01.14
>
>**Note #:** 101b4
>
>**Reference: ** 
>[the-odin-project](https://www.theodinproject.com/paths/foundations/courses/foundations/lessons/css-foundations#practice)
>
>**Links:** 
>[[100a3 ID Attribute 🟪🟦🟩]]
>[[101b Selectors 🟪🟦]]
>
>**Tags:** #CSS
---

**ID selectors** add style to elements with a specific id attribute ([[100a3 ID Attribute 🟪🟦🟩]]). Whilst in class selectors we use a period, for ID selectors we use a hashtag followed immediately by the value of the ID attribute.

## `ris:Flask` a) ID attribute
```html
<!-- index.html -->
<div id="title-one">Obsidian is the best!</div>
```

## `ris:Flask` b) ID selector
```css
/* styles.css*/
#title-one {
  background-color: blue;
}
```