const cards = [
    {
        imgUrl: 'https://cms.hostelworld.com/hwblog/wp-content/uploads/sites/2/2018/12/kirkjufell.jpg',
        imgAlt: 'Kirkjufell',
        header: 'Kirkjufell',
        description: 'Park up in the little seaside town of Grundarfjörður and follow the hour-and-a-half hiking trail to Kirkjufell’s summit.',
    },
    {
        imgUrl: 'https://cms.hostelworld.com/hwblog/wp-content/uploads/sites/2/2018/12/table-mountain-1170x731.jpg',
        imgAlt: 'Table Mountain',
        header: 'Table Mountain',
        description: 'One of the world’s most famous pinnacles, Table Mountain watches over the South African city of Cape Town from 1,085 metres at its highest point.',
    },
    {
        imgUrl: 'https://cms.hostelworld.com/hwblog/wp-content/uploads/sites/2/2019/01/mount-huangshan-1170x780.jpg',
        imgAlt: 'Mount Huangshan (Yellow Mountain)',
        header: 'Mount Huangshan',
        description: 'The mountain resembles a turreted fortress, perched ominously above the spruce and fir trees in the Canadian Rockies.',
    },
    {
        imgUrl: 'https://cms.hostelworld.com/hwblog/wp-content/uploads/sites/2/2018/12/matterhorn-1170x780.jpg',
        imgAlt: 'Matterhorn',
        header: 'Matterhorn',
        description: 'This Alpine peak spans the border between Switzerland and Italy. At 4,478 metres it’s smaller than the famed Mont Blanc (4,810 metres).',
    },
    {
        imgUrl: 'https://cms.hostelworld.com/hwblog/wp-content/uploads/sites/2/2019/01/mount-fuji-1170x780.jpg',
        imgAlt: 'Mount Fuji',
        header: 'Mount Fuji',
        description: 'If you’re down for the hike, choose between one of the four trails that lace the mountain. The Yoshida trail is most popular choice and buses whisk you right from Tokyo to the trailhead.',
    },
    {
        imgUrl: 'https://cms.hostelworld.com/hwblog/wp-content/uploads/sites/2/2019/01/mount-cook-1170x778.jpg',
        imgAlt: 'Aoraki/Mount Cook',
        header: 'Aoraki/Mount Cook',
        description: 'The name Mount Cook was given to the peak by European settlers. But native peoples had always known it as Aoraki.',
    },
    {
        imgUrl: 'https://cms.hostelworld.com/hwblog/wp-content/uploads/sites/2/2019/01/mount-everest-1170x780.jpg',
        imgAlt: 'Mount Everest',
        header: 'Mount Everest',
        description: 'The mother of all mountains, she rises to more than 8,848 metres, jutting out of the Himalayas, on the Nepal-Tibet border.',
    },
    {
        imgUrl: 'https://cms.hostelworld.com/hwblog/wp-content/uploads/sites/2/2019/01/kilimanjaro-1170x783.jpg',
        imgAlt: 'Kilimanjaro',
        header: 'Kilimanjaro',
        description: 'Kilimanjaro is actually a volcano made up of a trio of peaks. Though if you’re planning a trip, you’ll be glad to hear it’s dormant – the last eruption happened some 360,000 years ago.',
    },
    {
        imgUrl: 'https://cms.hostelworld.com/hwblog/wp-content/uploads/sites/2/2019/01/cradle-1170x720.jpg',
        imgAlt: 'Cradle Mountain',
        header: 'Cradle Mountain',
        description: 'It’s one of Tasmania’s most popular tourist attractions and is around an hour-and-a-half drive from the busy city of Devonport.',
    },
]






/* <div class="gridItem">
<div class="card">
    <img class="cardImg"
        src="https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=2250&amp;q=80"
        alt="Snowy Mountains"></img>
    
    <div class="cardContent">
        <h1 class="cardHeader">A starry night</h1>
        <p class="cardText">Look up at the night sky, and find yourself <strong>immersed</strong> in the amazing mountain range of Aspen. </p>
    </div>
</div>
</div> */



//accesing main grid
var mainGrid = document.getElementById('grid');



function createVideoCard(image,aboutImage, mainHeading, about ){

var itemDiv = document.createElement('div');
itemDiv.classList.add('gridItem');

var cardDiv = document.createElement('div');
cardDiv.classList.add('card');

var thumbnail = document.createElement('img');
thumbnail.classList.add('cardImg');
thumbnail.src =image;//cards[i].imgUrl
thumbnail.alt = aboutImage;//cards[i].imgAlt
//adding thumbnail to its division
cardDiv.appendChild(thumbnail);

//creating division cardContent

var cardDataDiv = document.createElement('div');
cardDataDiv.classList.add('cardContent');

//creating h1 tag
var title = document.createElement('h1');
title.classList.add('cardHeader');
title.innerText =mainHeading;//cards[i].header
//creating para tag
var paraText = document.createElement('p');
paraText.classList.add('cardText');
paraText.innerText =about //cards[i].description
//adding title to its division
cardDataDiv.appendChild(title);
//adding paragraph to its division
cardDataDiv.appendChild(paraText);
//dding to its above division
cardDiv.appendChild(cardDataDiv);
//aa\dding to its above division
itemDiv.appendChild(cardDiv);

return itemDiv;

}



//iterating list
for (var i = 0; i < cards.length; i++){
   var videoCard = createVideoCard(cards[i].imgUrl, cards[i].imgAlt, cards[i].header, cards[i].description)    
//adding to main grid
mainGrid.appendChild(videoCard);

}


