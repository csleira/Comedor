const CardMenu = (props) => {
  
  // Destructuracion en vez de usar props.menu.dia, se usa menu.dia y lo mismo con isSelected
  const { menu } = props;
  const { isSelected } = props;
  
  if ( ! isSelected ) {
      return (
      <>
        <div className="xl:w-1/3 md:w-1/2 p-4">
          <div className="border border-gray-200 p-6 rounded-lg">
            <h2 className="text-lg text-gray-900 font-medium title-font mb-2">{menu.dia}</h2>
            <lu className="leading-relaxed text-base">
              <li>{menu.menu1}</li>
              <li>{menu.menu2}</li>
              <li>{menu.postre}</li>
            </lu>
          </div>
        </div>
        </>
      )
  } else {
      return (
        <>
          <div className="xl:w-1/3 md:w-1/2 p-4">
            <div className="border border-orange-950 p-6 rounded-lg bg-orange-600">
              <h2 className="text-lg text-white font-medium title-font mb-2">{menu.dia}</h2>
              <lu className="leading-relaxed text-base text-white">
                <li>{menu.menu1}</li>
                <li>{menu.menu2}</li>
                <li>{menu.postre}</li>
              </lu>
            </div>
          </div>
        </>
      )
  }

}

export default CardMenu;
