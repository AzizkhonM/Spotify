<template>
  <div class="wrapped">
    <div class="albumheader"
      :style="{ backgroundImage: `linear-gradient(${main.upcolorcode}, ${main.downcolorcode})` }">
      <div><img id="maincover" :src="main.coverpath" width="232px"
          class="hover:scale-[1.02] duration-200 hover:cursor-pointer rounded" :alt="main.albumname" /></div>
      <div class="grid grid-cols-1 justify-items-start items-end px-6">
        <p class="text-[0.875rem] mb-[-40px]">Playlist</p>
        <div style="white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">
          <p class="text-[6rem] font-bold mb-[-35px] overflow-x-hidden" style="font-family: SpotifyMixBold">
            {{ main.playlistname }}</p>
        </div>
        <div class="flex gap-1 items-end">
          <img :src="main.playlistownerimagepath" class="rounded-full" width="24px">
          <p style="font-family: SpotifyMixBold; font-size: 0.875rem">{{ main.playlistowner }}</p>
          <p class="color-texts">•</p>
          <p class="color-texts">{{ main.tracksnumber }} songs</p>
          <p class="color-texts">•</p>
          <p v-if="main.timehour !== 0" class="color-texts">about {{ main.timehour }} hour</p>
          <p class="color-texts">{{ main.timeminute }} min</p>
          <p v-if="main.timehour === 0" class="color-texts">{{ main.timesecond }} sec</p>
        </div>
      </div>
    </div>
    <!-- Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt commodi, sint sit similique voluptatum hic, repudiandae voluptatem quas perspiciatis necessitatibus, provident minima corrupti odio officiis labore ratione obcaecati vitae facilis! Dolore quisquam, mollitia eos, aspernatur vitae in unde adipisci veniam ullam inventore saepe facere iste beatae sint eaque officiis! Blanditiis dolorum iste optio dolores placeat possimus dolore, laborum dicta eum error dolorem officia mollitia nam minus quaerat similique harum quas! Officia quos velit tempore magnam ab accusamus nesciunt reiciendis, neque maiores, quidem ut, deserunt quam aspernatur et eaque nulla a minus dignissimos officiis? Commodi distinctio ea enim possimus perspiciatis numquam ipsum quasi? Alias ea ullam id ut quo, esse vel blanditiis corporis, doloribus error accusamus aperiam reprehenderit enim dolorum tenetur cum quisquam eius, quidem et odio maiores? Mollitia iure consequuntur vitae similique sed dolorum officiis. Nam, dolorum. Est corrupti consequuntur incidunt ad ullam aspernatur necessitatibus soluta. Quidem excepturi voluptate explicabo totam unde ipsa atque aliquam ratione magnam consequatur. Magni, ea dolore doloremque nam perferendis, nostrum omnis in saepe assumenda doloribus fuga eum amet itaque dolorum laboriosam, ullam ad cupiditate id harum molestiae distinctio similique nesciunt. A sapiente animi numquam quod possimus consectetur, cumque reiciendis explicabo aspernatur at temporibus amet quae veniam, dolore sequi ea facilis ex maxime molestiae, accusamus repellat voluptatum? Tempore, accusamus sit porro aut assumenda recusandae qui, iste accusantium, eum asperiores quidem rerum delectus nulla quae facilis error numquam. Unde totam numquam repellat quis sequi beatae ut officia tempore error esse voluptate repudiandae ducimus saepe corrupti corporis vel dignissimos rerum, labore excepturi voluptatibus architecto veniam quos atque? Perferendis, molestiae beatae quia sapiente veritatis libero mollitia ad odio corrupti deleniti eveniet quibusdam vero, atque ratione? Illum voluptatem hic debitis nostrum voluptatum natus expedita harum laudantium vel ut, minus facere dicta, repellendus distinctio magnam commodi aliquid atque et. Doloremque quaerat consectetur accusamus saepe. Iusto, error! Repellat aliquam perferendis quod, quibusdam, explicabo similique necessitatibus ratione vero fugiat minima vel qui illo assumenda nesciunt ut ab laborum ad. Voluptas quae at, assumenda expedita ad eligendi corporis inventore harum deserunt possimus eius dolor impedit minima, nihil dicta cumque doloribus aperiam sint explicabo illo quaerat soluta commodi necessitatibus ducimus. Ex a modi aliquam dicta voluptate molestias? Consequatur alias fugiat similique ullam minima voluptatibus at optio fugit, unde illo ipsam velit numquam odit totam, ducimus vitae reiciendis? Tempora deserunt repellendus eius nam exercitationem, dolorem architecto esse, nihil sunt amet numquam a corporis cumque! Facere impedit amet recusandae molestias, labore blanditiis minima, voluptates iusto voluptas aliquid, aperiam excepturi facilis iure molestiae nam quia porro. Temporibus sapiente possimus ullam consectetur ut vel voluptatum, nulla ex laboriosam dolores ipsum cum voluptatem voluptas! Porro totam laboriosam doloribus amet, itaque saepe quia ab. Quia totam corporis quod sed voluptatibus officia quis doloribus, voluptates eaque aliquid at adipisci beatae iusto omnis quaerat exercitationem commodi veniam enim dolor atque eos? Dicta, eum culpa accusantium asperiores illum fuga, sunt nostrum exercitationem ullam quam quibusdam ea, rem quaerat eius. Consectetur esse repellendus vitae quibusdam beatae tenetur, doloremque et architecto cum incidunt exercitationem reprehenderit commodi, quo rem nesciunt dolor corporis blanditiis error quos! Animi sequi, quidem veniam beatae consequatur nulla harum minima rem dolore ducimus neque eligendi voluptates nemo repudiandae blanditiis modi? Esse alias voluptatem tempore consectetur deleniti animi odio, enim consequuntur nostrum tempora nemo, unde eligendi rem rerum est molestiae voluptas quis nisi odit accusamus laborum. Ducimus nostrum quisquam voluptatem a, sapiente inventore aperiam iusto! Minus eligendi cupiditate, voluptas sequi iusto, recusandae repudiandae cum error enim dolorem saepe alias harum deleniti architecto accusamus. Aliquid, ducimus cupiditate dolore quaerat velit vitae veniam consequatur obcaecati reprehenderit eaque earum sapiente, quas quia accusamus dicta laboriosam magni a distinctio ex asperiores recusandae? Soluta exercitationem natus at praesentium voluptate ipsam deleniti ullam nobis ut recusandae nulla provident, in, veritatis quaerat ab. Expedita illo, iure repudiandae eveniet labore quibusdam rerum quas architecto quisquam aliquid perspiciatis deserunt temporibus adipisci enim dignissimos tenetur officiis cumque praesentium, saepe non repellendus dolorem animi rem. Sequi cum animi facilis. Qui sequi nam ipsum. Voluptatum, accusantium corporis omnis possimus praesentium accusamus sunt iste consequatur inventore. Molestias aliquam, nobis voluptatibus, architecto aliquid enim, quod fuga ut facilis ipsum dignissimos consectetur. Et animi eaque repellat facilis! Id quo odio dignissimos, fugit earum sequi, optio possimus, ea quis est nam unde rem soluta quae repellendus ullam. Dolore alias repellendus facilis cumque voluptate hic dolores quaerat consequatur eligendi incidunt, fugit sapiente. Incidunt totam beatae laboriosam nihil nulla facere quo, exercitationem iste dolorum minima magni adipisci vel quos ab inventore ea quasi ipsam officia dolores. Nobis maxime vel odio! Temporibus placeat deleniti dolorum omnis. Delectus explicabo nemo deleniti ab temporibus odit, molestiae sunt consequuntur nobis veniam recusandae eum distinctio soluta animi iure reprehenderit! Ea sequi expedita aperiam, quos eveniet quia consequatur. Voluptates alias laudantium fugit ipsa, ad sed, illo laborum beatae accusantium repellat, nobis quae iusto omnis assumenda officiis earum soluta laboriosam quis animi quidem ullam maxime. Obcaecati fugiat veritatis, nobis, nisi corrupti vitae ipsum libero ullam, maxime velit dolorem! Qui esse laborum atque cumque adipisci sed tenetur inventore quo placeat et possimus enim minus aut ea ad, blanditiis vero officia, ratione, soluta harum nostrum quidem neque ex! Voluptates, libero aliquam fugit, ut quos cumque quasi voluptas temporibus sint corrupti voluptatibus asperiores labore, eos recusandae consequuntur deserunt aperiam hic illum quis aliquid expedita iure perferendis laborum voluptate! Maiores error fuga accusantium doloremque tenetur iste, aut corrupti amet, natus beatae dolores distinctio sint obcaecati saepe tempora quisquam asperiores nesciunt repudiandae odio dolor. Quos recusandae dicta, assumenda, porro modi adipisci id nihil labore mollitia cupiditate error alias. Officiis impedit ea illum corporis odit, ut sapiente totam sunt necessitatibus, excepturi doloremque, eveniet eos voluptas esse. Atque blanditiis voluptates enim asperiores quasi id molestiae voluptatem, esse, ad porro non aut eos facere accusamus tempore beatae mollitia a quibusdam magnam rem repudiandae autem. Id temporibus eum vero ratione dolor similique voluptate sequi saepe quisquam ea, ut vel delectus, perferendis non iste! Impedit similique nulla minima modi fugiat quis vel repudiandae ut, esse totam sunt corporis. Quos dolor, commodi aliquam molestiae magnam corporis deserunt quo dolorem beatae? -->
    <div class="h-36" :style="{ backgroundColor: `${main.downcolorcode}` }"></div>
    <div class="h-36 mt-[-144px] uptolist" style="background: linear-gradient(rgba(18, 18, 18, 0.3), rgba(18, 18, 18, 1))">
      <div class="flex justify-start items-center gap-8">
        <div class="h-14 w-14 rounded-full bg-[#1ED760] hover:bg-[#20ff6e] hover:scale-[1.01] duration-750 flex justify-center items-center hover:cursor-pointer">
          <svg data-encore-id="icon" role="img" aria-hidden="true" class="Svg-sc-ytk21e-0 bneLcE e-9541-icon w-6 h-6"
            viewBox="0 0 24 24">
            <path
              d="m7.05 3.606 13.49 7.788a.7.7 0 0 1 0 1.212L7.05 20.394A.7.7 0 0 1 6 19.788V4.212a.7.7 0 0 1 1.05-.606z">
            </path>
          </svg>
        </div>
        <svg data-encore-id="icon" role="img" aria-hidden="true"
          class="Svg-sc-ytk21e-0 cqasRA e-9541-icon w-8 h-8 savetolibrary hover:cursor-pointer" viewBox="0 0 24 24">
          <path
            d="M11.999 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18zm-11 9c0-6.075 4.925-11 11-11s11 4.925 11 11-4.925 11-11 11-11-4.925-11-11z"
            fill="#9f9f9f">
          </path>
          <path d="M17.999 12a1 1 0 0 1-1 1h-4v4a1 1 0 1 1-2 0v-4h-4a1 1 0 1 1 0-2h4V7a1 1 0 1 1 2 0v4h4a1 1 0 0 1 1 1z"
            fill="#9f9f9f">
          </path>
        </svg>
        <svg data-encore-id="icon" role="img" aria-hidden="true" class="Svg-sc-ytk21e-0 cqasRA e-9541-icon w-8 h-8 savetolibrary hover:cursor-pointer"
          viewBox="0 0 24 24">
          <path
            d="M4.5 13.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm15 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm-7.5 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" fill="#9f9f9f">
          </path>
        </svg>
      </div>
      <div class="flex items-end h-16 px-4 pb-2 gap-4 updata text-[#9f9f9f]">
        <div class="flex justify-center">#</div>
        <div class="">Title</div>
        <div class="">Album</div>
        <div class="">Date added</div>
        <div class="flex justify-center">
          <svg data-encore-id="icon" role="img" aria-hidden="true" class="Svg-sc-ytk21e-0 dYnaPI e-9541-icon w-4 h-4" viewBox="0 0 16 16"><path d="M8 1.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13zM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8z" fill="#9f9f9f"></path><path d="M8 3.25a.75.75 0 0 1 .75.75v3.25H11a.75.75 0 0 1 0 1.5H7.25V4A.75.75 0 0 1 8 3.25z" fill="#9f9f9f"></path></svg>
        </div>
      </div>
    </div>
    <div class="modal" id="imageModal">
      <div class="modal-wrapper">
        <div class="modal-content" id="modalContent"></div>
        <h1 id="closeButton">Close</h1>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import albums from "../../data/playlists.json";

const isOpen = ref(false)
const route = useRoute();
let main = {};
console.log(route.params.id);
for (let i of albums) {
  if ((i.path = route.params.id)) {
    main = i;
  }
}

onMounted(() => {
  const colorchanging = document.querySelectorAll('.color-texts');

  colorchanging.forEach(element => {
    element.style.color = main.textcolorcode
    console.log(main.textcolorcode);
  });
})

console.log(main.coverpath);

setTimeout(() => {
  const cover = document.querySelector("#maincover")
  const modal = document.getElementById('imageModal');
  const modalContent = document.getElementById('modalContent');
  const closeButton = document.getElementById('closeButton');

  console.log(cover);

  cover.addEventListener('click', () => {

    const imageSrc = cover.src;
    modalContent.style.backgroundImage = `url(${imageSrc})`;
    modal.classList.add('active');
  });

  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.classList.remove('active');
    }
  });

  closeButton.addEventListener('click', () => {
    modal.classList.remove('active');
  });
}, 100)

</script>
ffbdb4

<style scoped>
@font-face {
  font-family: SpotifyMixBold;
  src: url(../../public/SpotifyMix-Bold.ttf);
}

.color-texts {
  font-size: 0.875rem;
}

.wrapped {
  color: white;
  border-radius: 10px;
  overflow-y: scroll;
  height: calc(100vh - 180px);
}

.albumheader {
  padding: 24px;
  display: grid;
  grid-template-columns: 232px auto;
}

.albumheader img {
  box-shadow: 0 4px 60px rgba(0, 0, 0, .5);
}

.nuxt-ui-modal-overlay {
  background-color: #050505;
}

.modal {
  display: flex;
  /* Use flexbox for centering */
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 1000;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.3s ease, visibility 0.3s ease;
}

.modal.active {
  opacity: 1;
  visibility: visible;
}

.modal-wrapper {
  display: grid;
  grid-template-rows: auto;
  /* Two rows: one for content, one for <h1> */
  justify-items: center;
  /* Center align horizontally */
  text-align: center;
  gap: 24px;
}

.modal-content {
  width: 75vh;
  aspect-ratio: 1 / 1;
  background-size: cover;
  background-position: center;
  border-radius: 8px;
}

#closeButton {
  color: white;
  margin-top: 20px;
  font-size: 1rem;
  margin: 8px 32px;
  cursor: pointer;
  transition: all 0.2s ease;
  font-family: SpotifyMixBold;
}

#closeButton:hover {
  transform: scale(1.10)
}


.uptolist {
  padding: 24px;
  padding-bottom: 0px;
}

.savetolibrary:hover path {
  fill: white;
}

.updata{
  display: grid;
  grid-template-columns: 2% 41% 29% 21% 3%;
  border-bottom: 1px solid #2d2d2d;
}

</style>
