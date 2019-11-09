<?php get_header(); ?>

<?php get_template_part( 'layout/header-top' ); ?>

<div class="page-content">
  <aside class="side-bar-left">left</aside>
  <section class="main-center">
    <div class="post-list">
      <article class="markdown">
        <h1>HTML that looks like markdown</h1>

        <p>When this section is styled by <code>markdown.css</code> it looks like plain-text, despite being
          HTML.
          Inspect it with firebug or click on &lt;HTML/&gt; to see the markup.</p>

        <p>A <strong>strong tag</strong> and an <em>em tag</em> get styled like so.</p>
        <p>How about a link to <a href="https://2heng.xin">my site</a>?</p>

        <h2>H2 header</h2>

        <h3>Lists</h3>
        <ul>
          <li>they look like this</li>
          <li>it’s how you’d format them in pure markdown, if you took the time to indent when it wrapped to a
            new
            line.</li>
        </ul>

        <h3>Ordered lists</h3>
        <ol>
          <li>here’s one line from a numbered list</li>
          <li>here’s another</li>
          <li>in markdown, the actual numbers don’t matter—you can toggle this with the class <a href="#"
              onclick="$('body').toggleClass('markdown-ones');return false"><code>markdown-ones</code></a>
          </li>
        </ol>

        <h3>Block quotes</h3>
        <blockquote>
          This is a blockquote that extends<br>
          to multiple lines.<br><br>
          With repeating email-style angle brackets.
        </blockquote>

        <h3>Code blocks</h3>
        <pre><code>(function() {
  console.log('code blocks indent four spaces');
})()</code></pre>

        <h3>Different headers</h3>

        <h4>h4 header</h4>
        <h5>h5 header</h5>
        <h6>h6 header</h6>

        <hr>

        <p>That’s an hr above. It just works!</p>

        <p>
          However, images will still look like images. Deal with it.
        </p>

        <p>
          <img alt="kitten" src="https://view.moezx.cc/images/2019/10/21/518j34fw8n6p02epy36nqz8vy.jpg">
        </p>

        <p>
          Made by <a href="https://2heng.xin">Mashiro</a> /<br>
          aka <a href="https://twitter.com/2hengxin">@2hengxin</a> /<br>
          code on <a href="https://github.com/mashirozx/sakura2">github</a>
        </p>
      </article>
    </div>
  </section>
  <aside class="side-bar-right">right</aside>
</div>

<?php get_footer(); ?>