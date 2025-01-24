const images = [
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820__480.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820_1280.jpg",
    description: "Hokkaido Flower",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg",
    description: "Container Haulage Freight",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg",
    description: "Aerial Beach View",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg",
    description: "Flower Blooms",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg",
    description: "Alpine Mountains",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg",
    description: "Mountain Lake Sailing",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg",
    description: "Alpine Spring Meadows",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg",
    description: "Nature Landscape",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg",
    description: "Lighthouse Coast Sea",
  },
];
const galleryStyle = {
  main: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
    margin: "24px 0 24px",
  },
  gallery: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    gap: "24px",
    listStyle: "none",
  },
  galleryImage: {
    width: "100%",
    heigth: "100%",
  },
};

const main = document.querySelector(".main");
const gallery = document.querySelector(".gallery");

const createGallery = (images) => {
  return images
    .map(({ preview, original, description }) => {
      return `<li class="gallery__item">
        <a class="gallery__link" href="${original}">
        <img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}" height="200" width="360"/>
        </a>
      </li>`;
    })
    .join("");
};

gallery.insertAdjacentHTML("beforeend", createGallery(images));

function initializeStyle() {
  const galleryItems = document.querySelectorAll(".gallery__item");
  //   console.log(galleryItems);
  if (!main) return;
  if (!gallery) return;
  galleryItems.forEach((item) => {
    const firstChild = item.firstElementChild;
    const imgChild = firstChild.firstElementChild;

    Object.assign(item.style, galleryStyle.galleryItem);
    Object.assign(firstChild.style, galleryStyle.galleryLink);
    Object.assign(imgChild.style, galleryStyle.galleryImage);
    item.addEventListener("mouseover", () => {
      item.style.transform = "scale(1.05)";
    });

    item.addEventListener("mouseout", () => {
      item.style.transform = "scale(1)";
    });
  });

  Object.assign(main.style, galleryStyle.main);
  Object.assign(gallery.style, galleryStyle.gallery);
}
initializeStyle();
gallery.addEventListener("click", modalImage);

function modalImage(event) {
  event.preventDefault();
  const selectImage = event.target.dataset.source;
  return basicLightbox
    .create(
      `
		<img width="1112" height="640" src="${selectImage}">	`
    )
    .show();
}
