<style>
    .head {
        font-size: 2rem;
        box-shadow: none;
    }

    img {
        height: 1.5em;
    }

    .light-logo {
        display: none;
    }
    .logo {
        display: inline-block;
    }
    @media (prefers-color-scheme: dark) {
        .light-logo {
            display: inline-block;
        }
        .logo {
            display: none;
        }
    }

    span {
        font-size: 0.7em;
    }
</style>
<div class="w-full head px-5 card rounded-none m-0 flex">
    <div class="grow">
        <a href="/" class="hidden-link">
            <img class="logo align-top" src="/kev.webp" alt="Kevin Geiss"/>
            <img class="light-logo align-top" src="/kev-lighter.webp" alt="Kevin Geiss"/>
            Kevin Geiss
        </a>
    </div>
    <span class="self-center">
        <a href="https://blog.astrophoenix.com/" class="hidden-link hoverable" target="_blank">
            Blog
        </a>
    </span>
</div>