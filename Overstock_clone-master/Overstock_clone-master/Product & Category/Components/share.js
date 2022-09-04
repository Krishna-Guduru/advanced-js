let shareOnFb = () => {
  return `
    <section>
    <div
    class="fb-share-button"
    data-href="https://developers.facebook.com/docs/plugins/http://127.0.0.1:5500/Product%20Page/productpage.html"
    data-layout="button"
    data-size="large"
  >
    <a
      target="_blank"
      href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fdevelopers.facebook.com%2Fdocs%2Fplugins%2Fhttp%3A%2F%2F127.0.0.1%3A5500%2FProduct%2520Page%2Fproductpage.html&amp;src=sdkpreparse"
      class="fb-xfbml-parse-ignore"
      >Share</a
    >
  </div>
</section>
    `;
};

export default shareOnFb;
