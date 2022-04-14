<script>
  import '@fontsource/montserrat';
  import '@fontsource/hind';
  import '$lib/styles/styles.scss';
</script>

<svelte:head>
  <title>Stylelint SvelteKit Example Repo</title>
  <meta
    name="description"
    content="Stylelint for SvelteKit: keep you Svelte code consistent and make sure your CSS and SCSS code follows your team's style guide to the letter!"
  />
</svelte:head>

<main class="container">
  <div class="content">
    <h1>stylelint-sveltekit</h1>
    <p>Stylelint SvelteKit Example Repo</p>
  </div>
</main>

<style lang="scss">
  .container {
    display: flex;
    min-height: 100vh;
    background-image: linear-gradient(to top right, $colour-theme-lighter-20, $colour-theme);
  }

  .content {
    background-image: linear-gradient(to bottom left, $colour-dark-lighter-20, $colour-dark);
    margin: 3rem 1.5rem auto;
    padding: 1.5rem 1rem;
    width: 100%;
    text-align: center;
  }

  .content h1 {
    font-family: Montserrat;
    font-size: 1.802rem;
    font-weight: $font-weight-bold;
  }

  .content p {
    font-size: 1.25rem;
  }

  @media (min-width: 768px) {
    .content {
      width: 640px;
      margin-left: auto;
      margin-right: auto;
      padding-top: 0;
    }
  }

  @media (min-width: 1024px) {
    .content {
      width: 768px;
    }
  }

  @media (min-width: 1280px) {
    .content {
      width: 1024px;
    }
  }
</style>
