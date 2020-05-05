# Kana

A tailwind css based theme for gatsby

## WiP

there is still work needed on this theme its around ~50% completed

### Configuration

```js
module.exports = {
  plugins: [
    {
      resolve: 'gatsby=theme-kana',
      options: {
        contentPath: 'posts', // where your md files are
        basePath: '/posts', // where this theme would be leave
        nav: [
          // an array of objects with [text, path] for the top navigation in the sidebar
          {
            text: 'Home',
            path: '/',
          },
        ],
      },
    },
  ],
};
```

## Screenshots (from Figma)

### Post List

![gatsby-kana-screenshot-home](screenshots/Home.png)

### Single Post

![gatsby-kana-screenshot-post](screenshots/Post.png)
