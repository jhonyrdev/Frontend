const categories = [
  {
    name: "Cervezas",
    img: "https://tse4.mm.bing.net/th/id/OIP.4W6MVoZ6f5LevIFdrYFWdwHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
  },
  {
    name: "RTDs",
    img: "https://tse4.mm.bing.net/th/id/OIP.dpoZXfabJt1XOYZBHycKFgHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
  },
  {
    name: "Licores",
    img: "https://th.bing.com/th/id/R.f247559cb35123f1aa8917b2d08fa2c1?rik=zNZLKgZXcBlODw&riu=http%3a%2f%2fkasabeeston.com%2fcdn%2fshop%2ffiles%2fSmirnoff35cl_1200x1200.jpg%3fv%3d1699377688&ehk=dQuiUMstRiXnd5HKLYf0sAg3%2bXVpXQdkk9zrYnx%2bKro%3d&risl=&pid=ImgRaw&r=0",
  },
  {
    name: "Comidas",
    img: "https://img.freepik.com/fotos-premium/imagen-hamburguesa-fondo-blanco_349893-2922.jpg",
  },
  {
    name: "Bebidas",
    img: "https://th.bing.com/th/id/R.b467ec9ba22d4f85fbe91f9ebac61040?rik=dwhnf%2bJ7dAplGQ&riu=http%3a%2f%2f3.bp.blogspot.com%2f-DaVXB7Jubz8%2fUcf00smzrjI%2fAAAAAAAAABI%2fwPUqRKGgh0A%2fs1600%2fcoca%2bcola.jpg%2b1.jpg&ehk=Lw5%2b3AcTK37Dgt6mGbLVGkpXG8CD5Sb%2fa4ayZvwgSEo%3d&risl=&pid=ImgRaw&r=0",
  },
  {
    name: "Antojos",
    img: "https://realplaza.vtexassets.com/arquivos/ids/34814632/image-677e5f90e1f9496e9df4f06b021bd5e9.jpg?v=638387932279470000",
  },
  {
    name: "Helados",
    img: "https://tse2.mm.bing.net/th/id/OIP.nQPAuAHJh2ku7iVDB9_31wHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
  },
  {
    name: "Despensa",
    img: "https://mundoabarrotes.com/wp-content/uploads/2019/04/Arroz-Costeno-20-bolsas-750-gramos-500x500-1.png",
  },
];

const CategoriaCarousel = () => {
  return (
    <div className="container my-4">
      <h5 className="text-center text-danger mb-3">NUESTRAS CATEGORIAS</h5>

      {/* Carrusel para tablets y móviles */}
      <div className="category-scroll-outer">
        <div className="category-scroll-inner">
          {categories.map((category, index) => (
            <div className="category-item" key={index}>
              <img
                src={category.img}
                alt={category.name}
                className="category-img"
              />
              <div className="category-label">{category.name}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoriaCarousel;
