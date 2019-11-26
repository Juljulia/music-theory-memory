const memorycards = [
    { name:"Test", image:"/img/treble.clef", backImage:"/img/backface.jpg" },
    { name:"Test", image:"/img/treble.clef", backImage:"/img/backface.jpg" },
    { name:"Test", image:"/img/treble.clef", backImage:"/img/backface.jpg" },
    { name:"Test", image:"/img/treble.clef", backImage:"/img/backface.jpg" },
    { name:"Test", image:"/img/treble.clef", backImage:"/img/backface.jpg" },
    { name:"Test", image:"/img/treble.clef", backImage:"/img/backface.jpg" },
    { name:"Test", image:"/img/treble.clef", backImage:"/img/backface.jpg" },
    { name:"Test", image:"/img/treble.clef", backImage:"/img/backface.jpg" },
    { name:"Test", image:"/img/treble.clef", backImage:"/img/backface.jpg" },
    { name:"Test", image:"/img/treble.clef", backImage:"/img/backface.jpg" },
    { name:"Test", image:"/img/treble.clef", backImage:"/img/backface.jpg" }
];

const memorycardsContainer = document.querySelector(".memorycards-container");

const stringToHTML = str => {
  const div = document.createElement("div");
  div.innerHTML = str;
  return div.firstChild;
};

// Create memorycard template with a template literal
const createMemorycard = (name, image, backImage) => {
    return `<div class="memory-item" data-title=${name}>
        <img src="${image}">
        <img src="${backImage}">
      </div>
    `;
  };

// Render the memorycard element to the DOM
const generateMemorycard = () => {
  memorycards.forEach(item => {
    const element = createMemorycard(item.name, item.image, item.backImage);
    memorycardsContainer.appendChild(stringToHTML(element));
  });
};