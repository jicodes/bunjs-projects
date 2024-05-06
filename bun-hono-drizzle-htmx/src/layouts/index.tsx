export default function Layout({ children }: { children: JSX.Element }) {
  return (
    <html>
      <head>
        <script
          src="https://unpkg.com/htmx.org@1.9.12/dist/htmx.js"
          integrity="sha384-qbtR4rS9RrUMECUWDWM2+YGgN3U4V4ZncZ0BvUcg9FGct0jqXz3PUdVpU1p0yrXS"
          crossorigin="anonymous"
        ></script>
        <script src="https://unpkg.com/htmx.org@1.9.12/dist/ext/json-enc.js"></script>
        <script src="https://cdn.tailwindcss.com"></script>
      </head>
      <body class="bg-gray-800">{children}</body>
    </html>
  );
}
