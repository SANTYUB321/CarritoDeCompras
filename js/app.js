let products=[
  {
    image:'../sources/DUKE 125.jpg',
    title :'DUKY 125',
    price:'9000000',
    carr:'agregar al carrito',
  },
  // 2
  {
    image:'../sources/DUKE 200.jpg',
    title :'DUKY 200 (GEN 1) 2023',
    price:'14550000',
    carr:'agregar al carrito',
  },
  // 3
  {
    image:'../sources/duke-200.jpg',
    title :'DUKY 200 2023',
    price:'14990000',
    carr:'agregar al carrito',
  },

      // 4
  {
    image:'../sources/DUK_200_NGG.jpg',
    title :'DUKY 200 NG 2024',
    price:'17590000',
    carr:'agregar al carrito',
  },
    // 5
    {
      image:'../sources/390_NG.jpg',
      title :'DUKY 390 NG 2023',
      price:'24990000',
      carr:'agregar al carrito',
    },
      // 6
  {
    image:'../sources/390_NG.jpg',
    title :'DUKY 390 NG 2024',
    price:'29990000',
    carr:'agregar al carrito',
  },
    // 7
    {
      image:'../sources/890-duk.jpg',
      title :'DUKY 890 2023',
      price:'59990000',
      carr:'agregar al carrito',
    },
      // 8
  {
    image:'../sources/890-duke-gp.jpg',
    title :'DUKY 890 GP 2023',
    price:'62990000',
    carr:'agregar al carrito',
  },
    // 9
    {
      image:'../sources/890_R.png',
      title :'DUKY 890 R 2023',
      price:'68990000',
      carr:'agregar al carrito',
    },
    // 10
    {
      image:'../sources/super_duke.jpg',
      title :'HYPER DUKY 1290 R 2023',
      price:'117000000',
      carr:'agregar al carrito',
    },
      // 11
  {
    image:'../sources/super_duke.jpg',
    title :'HYPER DUKY 1290 R EVO 2023',
    price:'128000000',
    carr:'agregar al carrito',
  },
    // 12
    {
    image:'../sources/250ad.png',
    title :'250 AVENTURA 2023',
    price:'27990000',
    carr:'agregar al carrito',
  },
      // 13
      {
        image:'../sources/390ad23.png',
        title :'390 AVENTURA 2023',
        price:'35990000',
        carr:'agregar al carrito',
      },

      // 14
      {
        image:'../sources/390ad23.png',
        title :'390 AVENTURA 2024',
        price:'35990000',
        carr:'agregar al carrito',
      },
    // 15
    {
      image:'../sources/890AD.png',
      title :'890 ADVENTURE 2022',
      price:'68990000',
      carr:'agregar al carrito',
    },
    // 16
    {
      image:'../sources/890AD_R.png',
      title :'890 AVENTURA R 2022',
      price:'72990000',
      carr:'agregar al carrito',
    },
    // 17
    {
      image:'../sources/890AD23.png',
      title :'890 AVENTURA 2023',
      price:'75990000',
      carr:'agregar al carrito',
    },
    // 18
    {
      image:'../sources/890ADR23.png',
      title :'890 AVENTURA XL 2023',
      price:'85990000',
      carr:'agregar al carrito',
    },
    // 19
    {
      image:'../sources/1290SAD.png',
      title :'1290 SUPER AVENTURERA XXL 2023',
      price:'123000000',
      carr:'agregar al carrito',
    },
    // 20
    {
      image:'../sources/1290SU_AD_R.png',
      title :'1290 SUPER AVENTURERA XXR 2023',
      price:'125000000',
      carr:'agregar al carrito',
    },
    // 21
    {
      image:'../sources/350_EXE_EF_D.png',
      title :'350 EXC-EFE DAYS 2023',
      price:'53990000',
      carr:'agregar al carrito',
    },
    // 22
    {
      image:'../sources/350_EXC_EF_23.png',
      title :'350 EXC-EFE 2023',
      price:'49990000',
      carr:'agregar al carrito',
    },
    // 23
    {
      image:'../sources/250_EX_TPI_23.png',
      title :'350 EXC-TPI 2023',
      price:'50990000',
      carr:'agregar al carrito',
    },
    // 24
    {
      image:'../sources/350_EXC_EF_23.png',
      title :'250 EXC-EFE 2023',
      price:'54990000',
      carr:'agregar al carrito',
    },
    // 25
    {
      image:'../sources/250_EXC_S_D_23.png',
      title :'250 EXC-SIX DAT TPY 2023',
      price:'54990000',
      carr:'agregar al carrito',
    },
    // 26
    {
      image:'../sources/250_EX_TPI_23.png',
      title :'300 EXC-TPY 2023',
      price:'54990000',
      carr:'agregar al carrito',
    },
    // 27
    {
      image:'../sources/250_EXC_S_D_23.png',
      title :'300 EXC-TPY SIX DATS 2023',
      price:'58990000',
      carr:'agregar al carrito',
    },
    // 28
    {
      image:'../sources/250_EXC_F_S_23.png',
      title :'250 EXC-F SIX DATS 2023',
      price:'59990000',
      carr:'agregar al carrito',
    },
    // 29
    {
      image:'../sources/350_FACTOR_23.png',
      title :'350 EXC-F FACTOR EDITION 2023',
      price:'63990000',
      carr:'agregar al carrito',
    },
    // 30
    {
      image:'../sources/450_EXC_F.png',
      title :'450 EXC-F 2023',
      price:'66990000',
      carr:'agregar al carrito',
    },
];
////-----------------------------------------
const container = document.getElementById('div1')
const selectProducts =document.querySelector('#select-products')
////-----------------------------------------
btnCreate = document.getElementById('btn-create');
let imgSelected = "";
let idProduct = 0;

save();
const modal = document.querySelector('.modal');
const closeModal = document.querySelector('.close-modal');
const newProduct = document.getElementById('new-product');
const newPrice = document.getElementById('new-price');
const newImage = document.getElementById('new-image');
const btnNewProduct = document.getElementById('btn-new-create');

const filterXPrice = document.getElementById('filterXPrice');

btnCreate.addEventListener('click', showModal);
btnNewProduct.addEventListener('click', createNewProduct);
newImage.addEventListener('change', importImg);
closeModal.addEventListener('click',()=>modal.style.display ='none');

filterXPrice.addEventListener('change', filterProducts);
function filterProducts(event) {
 const responseFilter = event.target.value === 'menor que 10 millones'
 ? products.filter(moto => moto.price < 10000000)
  : event.target.value === 'Entre 10 y 40 millones'
  ? products.filter(moto => moto.price >= 10000000 && moto.price <= 40000000)
  : event.target.value === 'mayor a 40 millones'
  ? products.filter(moto => moto.price > 40000000)
  : event.target.value === 'Todos los Pruductos'
  ? products.filter(moto => moto.price > 100)
  :null;
  container.innerHTML='';
  responseFilter.map(moto => addCard(moto))
}


function importImg(event) {
  const currentImg = event.target.files[0];
  const objetURL =URL.createObjectURL(currentImg);
  imgSelected = objetURL;
}

function createNewProduct() {
  idProduct++;
  const titleProduct = newProduct.value;
  const priceProduct = newPrice.value;
  // const id = idProduct;

  let newMoto ={ title:titleProduct, price:priceProduct, image:imgSelected, carr:'agregar al carrito',};


  products.push(newMoto);
addCard(newMoto)
 modal.style.display ='none';
 save();

}

//-------------------------------------------------------
//   const imgCard = document.createElement('img')
//   imgCard.src = imgSelected.image
//   imgCard.alt = imgSelected.title


//   const div2 = document.createElement('div')
//   div2.classList.add('info-product')

//   const title = document.createElement("h2")
//   title.textContent= newNewMoto.title
//   title.classList.add('title')

//   const price = document.createElement('p')
//   price.textContent= '$'+newNewMoto.price
//   price.classList.add('price')

//   const carr = document.createElement('button')
//   carr.textContent= 'agregar al carrito';
//   carr.classList.add('btn-car')


//   card.appendChild(imgCard)
//   card.appendChild(div2)
//   div2.appendChild(title)
//   div2.appendChild(price)
//   div2.appendChild(carr)

// // card.innerHTML= container.title +" "+ container.price +" "+ container.image+" " + container.carr ;
//   container.appendChild(card)
//  });
// }

 function showModal() {
  modal.style.display ='flex';
 }


////---------------------------------------------



function addCard(product) {
  
  const card = document.createElement('div')
  card.classList.add('item')

  const imgCard = document.createElement('img')
  imgCard.src = product.image
  imgCard.alt = product.title


  const div2 = document.createElement('div')
  div2.classList.add('info-product')

  const title = document.createElement("h2")
  title.textContent= product.title
  title.classList.add('title')

  const price = document.createElement('p')
  price.textContent= '$'+product.price
  price.classList.add('price')

  const carr = document.createElement('button')
  carr.textContent= product.carr
  carr.classList.add('btn-car')


  card.appendChild(imgCard)
  card.appendChild(div2)
  div2.appendChild(title)
  div2.appendChild(price)
  div2.appendChild(carr)


  container.appendChild(card)
}

window.addEventListener('DOMContentLoaded', () => {
  products.forEach( element => addCard(element) )

})

// Funcionalidades carritos
const btnCart = document.querySelector('.container-cart-icon');
const containerCartProducts = document.querySelector(
	'.container-cart-products'
);

btnCart.addEventListener('click', () => {
	containerCartProducts.classList.toggle('hidden-cart');
});
const cartInfo = document.querySelector('.cart-product');
const rowProduct = document.querySelector('.row-product');

const productsList = document.querySelector('.div1');



let allProducts = [];

const valorTotal = document.querySelector('.total-pagar');

const countProducts = document.querySelector('#contador-productos');

const cartEmpty = document.querySelector('.cart-empty');
const cartTotal = document.querySelector('.cart-total');
let infoProduct = {};
let allProducts2 =[];

productsList.addEventListener('click', e=> {
if (e.target.classList.contains('btn-car'))  {
    const product = e.target.parentElement;
   
     infoProduct = {
        quantity: 1,
        title: product.querySelector('h2').textContent,
        price: product.querySelector('p').textContent,
    }
    
    const exits = allProducts.some(
     product => product.title === infoProduct.title
    );
    
    if (exits) {
      const updateProducts = allProducts.map(product =>{
        
        if (product.title === infoProduct.title) {
          product.quantity++;
          return product;
          
        }else{
          return product;
        }
      });
      allProducts=[...updateProducts]
    } else{
      allProducts = [...allProducts, infoProduct]
     
     
    }
    
    
    showHTML();
    // save2();
}
});


rowProduct.addEventListener('click', e=>{
  if (e.target.classList.contains('icon-close')){
    const product= e.target.parentElement;
    const title= product.querySelector('p').textContent;

    allProducts=allProducts.filter(
      product => product.title !== title
   );

    showHTML();
  
    
  }
});

const showHTML = () => {
	if (!allProducts.length) {
		cartEmpty.classList.remove('hidden');
		rowProduct.classList.add('hidden');
		cartTotal.classList.add('hidden');
	} else {
		cartEmpty.classList.add('hidden');
		rowProduct.classList.remove('hidden');
		cartTotal.classList.remove('hidden');
	}

	// Limpiar HTML
	rowProduct.innerHTML = '';

	let total = 0;
	let totalOfProducts = 0;

	allProducts.forEach(product => {
		const containerProduct = document.createElement('div');
		containerProduct.classList.add('cart-product');

		containerProduct.innerHTML = `
    <div class="info-cart-product">
    <span class="cantidad-producto-carrito">${product.quantity}</span>
    <p class="titulo-producto-carrito">${product.title}</p>
    <span class="precio-producto-carrito">${product.price}</span>
</div>
<svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke-width="1.5"
    stroke="currentColor"
    class="icon-close"
>
    <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M6 18L18 6M6 6l12 12"
    />
</svg>
        `;

		rowProduct.append(containerProduct);

		total = 
     total + parseFloat(product.quantity * parseFloat(product.price.slice(1)));
		totalOfProducts = totalOfProducts + product.quantity;
    
console.log(total);

	});

	valorTotal.innerText = `$${total}`;
	countProducts.innerText = totalOfProducts;
  console.log( `$${total}`);

};
  

function save() {
  localStorage.setItem("card", JSON.stringify(products))
}
loading();
function loading(){
  products= JSON.parse(localStorage.getItem("card"))
  products.forEach(product => console.log(product));
}

// function save2() {
//   localStorage.setItem("infoCard", JSON.stringify(allProducts))
// }
// loading2();
// function loading2(){
//   allProducts= JSON.parse(localStorage.getItem("infoCard"))
//   allProducts.forEach(product => console.log(product));
// }
