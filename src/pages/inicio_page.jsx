const InicioPage = () => {

  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-12 md:flex-row flex-col items-center bg-orange-400">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="font-arima title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              Cocina auténtica, servicio de corazón.
              <br className="hidden lg:inline-block"readymade gluten/>
            </h1>
            <p className="font-arima mb-8 leading-relaxed text-gray-700">
                Bienvenidos a nuestro comedor, un espacio cálido donde cada plato se prepara con amor,
                ingredientes frescos y el deseo de brindar una experiencia casera y deliciosa.
            </p>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              className="object-cover object-center rounded"
              alt="Imagen de Comida"
              src="./src/assets/images/comida-home.jpg"
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default InicioPage;
