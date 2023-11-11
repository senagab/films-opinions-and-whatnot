document.addEventListener("DOMContentLoaded", function () {

    // setup: loadup de conteúdo das reviews em mural
    const modal = document.querySelector('#modal-review');
    const modalTitle = modal.querySelector('#titulo-review');
    const modalParagraph = modal.querySelector('#texto-review');
    const modalImage = modal.querySelector('#img-review');
    const authorSpan = modal.querySelector('span#author');
    const statsSpans = modal.querySelectorAll('.stats-container span');

    // array de titulos dos filmes
    const titles = [
        'Ichiko (2023)',
        'La Règle de Trois (2012)',
        'Dancer in the Dark (2000)',
        'Cries and Whispers (1972)',
        'Lady Vengeance (2005)',
        'Freaks (1932)',
        'Beau Travail (1999)',
        'Cure (1997)',
        'Possessor (2020)',
        'Love Streams (1984)',
        'On the Beach at Night Alone (2017)',
        'The Birds (1963)',
        'Lightningface (2016)',
        'I Am Not Your Negro (2016)',
        'Irreversible (2002)',
        'All the President’s Men (1976)',
        'Happy as Lazzaro (2018)',
        'The Kiss of Death (1977)',
        'Close-Up (1990)',
        'O Beijo no Asfalto (2018)',
        'Camera Buff (1979)',
        'The Tribe (2014)',
        'Yi Yi (2000)',
        'House (1977)',
    ];

    const paragraphs = [
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque labore officia voluptatem ullam corrupti repellat quidem dolore harum consectetur deleniti, placeat error ipsam eos reiciendis, consequuntur id molestiae aut ab. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo distinctio, ab omnis possimus aliquam ipsum reiciendis aspernatur et libero labore est at cum vero illum cupiditate laboriosam eos, nisi eum.',
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse tenetur, nulla debitis soluta eveniet reprehenderit temporibus ad quod velit dolorem corporis qui voluptatem labore deserunt quidem voluptatum rerum. Quia, blanditiis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde laboriosam recusandae iure ipsum corrupti eaque voluptates, quasi itaque corporis fuga molestiae impedit quo dolores quod error! Totam aspernatur tempore delectus? Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi aut assumenda atque in facere! Aspernatur sit ab rerum eius quasi sapiente temporibus iste obcaecati possimus laudantium non, culpa alias qui!',
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum qui at odit veritatis architecto libero dolorem commodi sapiente recusandae? Error harum cum eum eaque excepturi distinctio exercitationem magni culpa sint!',
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt explicabo, rem harum omnis aliquid, hic porro, quisquam sit eaque ad fugit nihil alias non ab doloribus consequuntur nobis placeat. Ex. Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum inventore illo quidem perspiciatis non quasi, corrupti hic nihil consectetur sint animi quae harum doloribus dignissimos voluptate quo iste a molestiae.',
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque labore officia voluptatem ullam corrupti repellat quidem dolore harum consectetur deleniti, placeat error ipsam eos reiciendis, consequuntur id molestiae aut ab. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo distinctio, ab omnis possimus aliquam ipsum reiciendis aspernatur et libero labore est at cum vero illum cupiditate laboriosam eos, nisi eum.',
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt explicabo, rem harum omnis aliquid, hic porro, quisquam sit eaque ad fugit nihil alias non ab doloribus consequuntur nobis placeat. Ex. Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum inventore illo quidem perspiciatis non quasi, corrupti hic nihil consectetur sint animi quae harum doloribus dignissimos voluptate quo iste a molestiae.',
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum qui at odit veritatis architecto libero dolorem commodi sapiente recusandae? Error harum cum eum eaque excepturi distinctio exercitationem magni culpa sint!',
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse tenetur, nulla debitis soluta eveniet reprehenderit temporibus ad quod velit dolorem corporis qui voluptatem labore deserunt quidem voluptatum rerum. Quia, blanditiis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde laboriosam recusandae iure ipsum corrupti eaque voluptates, quasi itaque corporis fuga molestiae impedit quo dolores quod error! Totam aspernatur tempore delectus? Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi aut assumenda atque in facere! Aspernatur sit ab rerum eius quasi sapiente temporibus iste obcaecati possimus laudantium non, culpa alias qui!',
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque labore officia voluptatem ullam corrupti repellat quidem dolore harum consectetur deleniti, placeat error ipsam eos reiciendis, consequuntur id molestiae aut ab. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo distinctio, ab omnis possimus aliquam ipsum reiciendis aspernatur et libero labore est at cum vero illum cupiditate laboriosam eos, nisi eum.',
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum qui at odit veritatis architecto libero dolorem commodi sapiente recusandae? Error harum cum eum eaque excepturi distinctio exercitationem magni culpa sint!',
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt explicabo, rem harum omnis aliquid, hic porro, quisquam sit eaque ad fugit nihil alias non ab doloribus consequuntur nobis placeat. Ex. Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum inventore illo quidem perspiciatis non quasi, corrupti hic nihil consectetur sint animi quae harum doloribus dignissimos voluptate quo iste a molestiae.',
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum qui at odit veritatis architecto libero dolorem commodi sapiente recusandae? Error harum cum eum eaque excepturi distinctio exercitationem magni culpa sint!',
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque labore officia voluptatem ullam corrupti repellat quidem dolore harum consectetur deleniti, placeat error ipsam eos reiciendis, consequuntur id molestiae aut ab. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo distinctio, ab omnis possimus aliquam ipsum reiciendis aspernatur et libero labore est at cum vero illum cupiditate laboriosam eos, nisi eum.',
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt explicabo, rem harum omnis aliquid, hic porro, quisquam sit eaque ad fugit nihil alias non ab doloribus consequuntur nobis placeat. Ex. Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum inventore illo quidem perspiciatis non quasi, corrupti hic nihil consectetur sint animi quae harum doloribus dignissimos voluptate quo iste a molestiae.',
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum qui at odit veritatis architecto libero dolorem commodi sapiente recusandae? Error harum cum eum eaque excepturi distinctio exercitationem magni culpa sint!',
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse tenetur, nulla debitis soluta eveniet reprehenderit temporibus ad quod velit dolorem corporis qui voluptatem labore deserunt quidem voluptatum rerum. Quia, blanditiis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde laboriosam recusandae iure ipsum corrupti eaque voluptates, quasi itaque corporis fuga molestiae impedit quo dolores quod error! Totam aspernatur tempore delectus? Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi aut assumenda atque in facere! Aspernatur sit ab rerum eius quasi sapiente temporibus iste obcaecati possimus laudantium non, culpa alias qui!',
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque labore officia voluptatem ullam corrupti repellat quidem dolore harum consectetur deleniti, placeat error ipsam eos reiciendis, consequuntur id molestiae aut ab. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo distinctio, ab omnis possimus aliquam ipsum reiciendis aspernatur et libero labore est at cum vero illum cupiditate laboriosam eos, nisi eum.',
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt explicabo, rem harum omnis aliquid, hic porro, quisquam sit eaque ad fugit nihil alias non ab doloribus consequuntur nobis placeat. Ex. Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum inventore illo quidem perspiciatis non quasi, corrupti hic nihil consectetur sint animi quae harum doloribus dignissimos voluptate quo iste a molestiae.',
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque labore officia voluptatem ullam corrupti repellat quidem dolore harum consectetur deleniti, placeat error ipsam eos reiciendis, consequuntur id molestiae aut ab. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo distinctio, ab omnis possimus aliquam ipsum reiciendis aspernatur et libero labore est at cum vero illum cupiditate laboriosam eos, nisi eum.',
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt explicabo, rem harum omnis aliquid, hic porro, quisquam sit eaque ad fugit nihil alias non ab doloribus consequuntur nobis placeat. Ex. Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum inventore illo quidem perspiciatis non quasi, corrupti hic nihil consectetur sint animi quae harum doloribus dignissimos voluptate quo iste a molestiae.',
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque labore officia voluptatem ullam corrupti repellat quidem dolore harum consectetur deleniti, placeat error ipsam eos reiciendis, consequuntur id molestiae aut ab. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo distinctio, ab omnis possimus aliquam ipsum reiciendis aspernatur et libero labore est at cum vero illum cupiditate laboriosam eos, nisi eum.',
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum qui at odit veritatis architecto libero dolorem commodi sapiente recusandae? Error harum cum eum eaque excepturi distinctio exercitationem magni culpa sint!',
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse tenetur, nulla debitis soluta eveniet reprehenderit temporibus ad quod velit dolorem corporis qui voluptatem labore deserunt quidem voluptatum rerum. Quia, blanditiis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde laboriosam recusandae iure ipsum corrupti eaque voluptates, quasi itaque corporis fuga molestiae impedit quo dolores quod error! Totam aspernatur tempore delectus? Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi aut assumenda atque in facere! Aspernatur sit ab rerum eius quasi sapiente temporibus iste obcaecati possimus laudantium non, culpa alias qui!',
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum qui at odit veritatis architecto libero dolorem commodi sapiente recusandae? Error harum cum eum eaque excepturi distinctio exercitationem magni culpa sint!',
    ];

    // popula utilizando o array de imagens
    const images = [];
    for (let i = 1; i <= 24; i++) {
        images.push(`./img/film-${i}.jpg`);
    }

    // const images = Array.from({ length: 24 }, (_, i) => `./img/film-${i + 1}.jpg`);


    // array com nome de autores das reviews
    const authorNames = [
            "Gregory",
            "Célia",
            "Antônio",
            "Greta",
            "Juliette",
            "Mônica",
            "Neil",
            "Nellie",
            "Curtis",
            "Adam",
            "Mista GG",
            "Alfred",
            "Alexander",
            "Anthony",
            "Agnès",
            "Kogonada",
            "Friedkin",
            "Saulnier",
            "Edgar",
            "Alan",
            "Brian de Palma",
            "Martin",
            "Terrence",
            "Salma",
    ];

    // randomyzer
    function getRandomNumber() {
        return Math.floor(Math.random() * 99) + 1;
    }

    // jeito porco de puxar os dados (em minha defesa, usar uma api seria mais facil)
    for (let i = 1; i <= 24; i++) {
        const image = document.getElementById(`img-${i}`);

        image.addEventListener('click', () => {
            modalTitle.textContent = titles[i - 1];
            modalParagraph.textContent = paragraphs[i - 1];
            modalImage.src = images[i - 1];
            authorSpan.textContent = authorNames[i - 1];

            // randomiza numeros de stats
            statsSpans.forEach((span, index) => {
                span.textContent = getRandomNumber();
            });

            // mostra modal
            const modalInstance = new bootstrap.Modal(modal);
            modalInstance.show();
        });
    }

    // prevent backdrops duplication
    modal.addEventListener('hidden.bs.modal', function () {
        const backdrops = document.querySelectorAll('.modal-backdrop');
        backdrops.forEach((backdrop) => {
            backdrop.parentNode.removeChild(backdrop);
        });

        
    });

});