const postcards = [
    {
      imagefront: "front/image1.png",
      imageback: "back/image1.png",
      year: 1652,
      undefined: "wycoff",
    },
    {
      imagefront: "front/image2.png",
      imageback: "back/image2.png",
      year: 1661,
      undefined: "browne",
    },
    {
      imagefront: "front/image3.png",
      imageback: "back/image3.png",
      year: 1690,
      undefined: "alice austen",
    },
    {
      imagefront: "front/image4.png",
      imageback: "back/image4.png",
      year: 1690,
      undefined: "hisotric rismond town",
    },
    {
      imagefront: "front/image5.png",
      imageback: "back/image5.png",
      year: 1699,
      undefined: "old stone",
    },
    {
      imagefront: "front/image6.png",
      imageback: "back/image6.png",
      year: 1720,
      undefined: "hendrik l",
    },
    {
      imagefront: "front/image7.png",
      imageback: "back/image7.png",
      year: 1730,
      undefined: "king manor",
    },
    {
      imagefront: "front/image8.png",
      imageback: "back/image8.png",
      year: 1748,
      undefined: "vancortland",
    },
    {
      imagefront: "front/image9.png",
      imageback: "back/image9.png",
      year: 1758,
      undefined: "Valentine",
    },
    {
      imagefront: "front/image10.png",
      imageback: "back/image10.png",
      year: 1765,
      undefined: "morris jummel",
    },
    {
      imagefront: "front/image11.png",
      imageback: "back/image11.png",
      year: 1772,
      undefined: "queens country farm",
    },
    {
      imagefront: "front/image12.png",
      imageback: "back/image12.png",
      year: 1776,
      undefined: "conference house",
    },
    {
      imagefront: "front/image13.png",
      imageback: "back/image13.png",
      year: 1783,
      undefined: "lefferts",
    },
    {
      imagefront: "front/image14.png",
      imageback: "back/image14.png",
      year: 1784,
      undefined: "dykman",
    },
    {
      imagefront: "front/image15.png",
      imageback: "back/image15.png",
      year: 1785,
      undefined: "kingsland ",
    },
    {
      imagefront: "front/image16.png",
      imageback: "back/image16.png",
      year: 1799,
      undefined: "gracie mantion",
    },
    {
      imagefront: "front/image17.png",
      imageback: "back/image17.png",
      year: 1812,
      undefined: "Edgar Allen",
    },
    {
      imagefront: "front/image18.png",
      imageback: "back/image18.png",
      year: 1832,
      undefined: "merchants house",
    },
    {
      imagefront: "front/image19.png",
      imageback: "back/image19.png",
      year: 1836,
      undefined: " Bartow-Pell Mansion Museum",
    },
    {
      imagefront: "front/image20.png",
      imageback: "back/image20.png",
      year: 1838,
      undefined: "seguine",
    },
    {
      imagefront: "front/image21.png",
      imageback: "back/image21.png",
      year: 1876,
      undefined: "swedish cottage",
    },
    {
      imagefront: "front/image22.png",
      imageback: "back/image22.png",
      year: 1887,
      undefined: "lewis latmir",
    },
    {
      imagefront: "front/image23.png",
      imageback: "back/image23.png",
      year: 1921,
      undefined: "littleredlight",
    },
  ];
  
  window.addEventListener("load", () => {
    const initialEnvelope = document.getElementById("initial-envelope");
    initialEnvelope.addEventListener("click", (e) => {
      displayData(postcards);
    });
  });
  
  // This is looping over the post cards a second time
  // unecessarily. All of your looping code should be inside
  // your displayData function inside the forEach loop that's already set up.
  
  function displayData(postcards) {
    var container = document.getElementById("output-container");
  
    const activatePopUp = function (postcard) {
      var popUp = document.getElementById("popup");
      popUp.style.display = "block";
      var popUpDetails = document.getElementById("pop-up-details");
      popUpDetails.innerHTML = buildPostcardDetailItem(postcard);
    };
  
    const buildPostcardListItem = function (postcard) {
      return `<div class="container">
          <img class="image" src = '${postcard.imagefront}'/>  
          <p class="year">${postcard.year}<p/>  
          </div>`;
    };
  
    const buildPostcardDetailItem = function (postcard) {
      return `<div class=toggle>
            <div class="detail-view">
             <img class="detailimg" src = '${postcard.imagefront}'/> 
            </div>
            <div class="detail-back">
            <img class="detailback" src = '${postcard.imageback}'>
            </div>
            </div>`;
    };
  
    postcards.forEach((postcard) => {
      //  Here in this loop is where we iterate over the array of postcard items 
      //  buildPostCardListItem is no longer undefined because it's under the definition of the function
      
      const itemElement = document.createElement("div");
      itemElement.addEventListener("click", () => {
        activatePopUp(postcard);
      });
      itemElement.innerHTML = buildPostcardListItem(postcard);
  
      container.appendChild(itemElement);
    });
  
    const initialEnvelope = document.getElementById("initial-envelope");
    initialEnvelope.style.display = "none";
  }