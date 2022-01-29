import importFood from "utils/food";

import Layout from 'pages/components/layout.js'

export async function getStaticProps() {
  const foods = await importFood();

  let foodsByCategories = {};

  foods.forEach(food => {
    const key = food.attributes.category;

    if (!(key in foodsByCategories)) {
      foodsByCategories[food.attributes.category] = []
    }

    foodsByCategories[food.attributes.category].push(food.attributes);
  })

  return {
    props: {
      foodsByCategories
    },
  };
}

export default function Menu({ foodsByCategories }) {
  return (
    <Layout>
      <div className="space-y-5 max-w-xl mx-auto">
        {foodsByCategories &&
          Object.entries(foodsByCategories).map(([categoryName, foods]) => {
            return (
              <div>
                <div className="text-5xl uppercase text-yellow-700 text-center font-bold">{categoryName}</div>

                {categoryName === 'Wein' ? handleWein(foods) :
                  categoryName === 'Fassbier' ? handleBeer(foods) :
                    categoryName === 'Digestif' ? handleDigestif(foods) :
                      foods.map(food =>
                        <div className="grid grid-cols-2">
                          <div className="font-semibold uppercase">
                            <div>{food.title}
                              <sup className="pl-1">{food.superscript}</sup>
                            </div>
                            <div className="text-sm text-teal-700 uppercase">{food.description}</div>
                          </div>
                          <div className="text-right">{food.price1}</div>
                        </div>
                      )
                }

              </div>
            )
          })


        }
        <div className="text-3xl uppercase text-yellow-700 text-center font-bold">... und vieles mehr</div>
      </div>
    </Layout >
  )
}

const handleDigestif = (foods) => {
  return (
    <div>
      {foods.filter(food => food.subcategory !== 'shot').map(food => {
        return (
          <div key={food.title} className="grid grid-cols-2">
            <div className="font-semibold uppercase">
              <div>{food.title}
                <sup className="pl-1">{food.superscript}</sup>
              </div>
              <div className="text-sm text-teal-700 uppercase">{food.description}</div>
            </div>
            <div className="text-right">{food.price1}</div>
          </div>
        )
      })}


      <div className="flex flex-col space-y-5">
        <div className="mt-5 grid grid-cols-4 gap-3">
          <div className="col-span-2 text-xl uppercase text-yellow-700 font-bold"></div>
          <div className="text-xs text-right uppercase font-semibold text-yellow-700">
            <div></div>
            <div>2CL</div>
          </div>
          <div className="text-xs text-right uppercase font-semibold text-yellow-700">
            <div></div>
            <div>4CL</div>
          </div>

          {foods.filter(food => food.subcategory === 'shot').map(w => {
            return (
              <>
                <div className="col-span-2 font-semibold uppercase">{w.title}</div>
                <div className="text-right">{w.price1}</div>
                <div className="text-right">{w.price2}</div>
              </>
            )
          })}
        </div>
      </div>

    </div>
  )
}

const handleBeer = (foods) => {
  return (
    <div className="flex flex-col space-y-5">
      <div className="mt-5 grid grid-cols-5 gap-3">
        <div className="col-span-2 text-xl uppercase text-yellow-700 font-bold"></div>
        <div className="text-xs text-right uppercase font-semibold text-yellow-700">
          <div></div>
          <div>0,3L</div>
        </div>
        <div className="text-xs text-right uppercase font-semibold text-yellow-700">
          <div></div>
          <div>0,4L</div>
        </div>
        <div className="text-xs text-right uppercase font-semibold text-yellow-700">
          <div>Pitcher</div>
          <div>1,5L</div>
        </div>

        {foods.map(w => {
          return (
            <>
              <div className="col-span-2 font-semibold uppercase">{w.title}</div>
              <div className="text-right">{w.price1}</div>
              <div className="text-right">{w.price2}</div>
              <div className="text-right">{w.price3}</div>
            </>
          )
        })}
      </div>
    </div>
  )
}

const handleWein = (foods) => {
  return (
    <div className="flex flex-col space-y-5">
      {handleWinePrices("Rotwein", foods.filter(f => f.subcategory === 'Rotwein'))}

      {handleWinePrices("Weißwein", foods.filter(f => f.subcategory === 'Weisswein/Rose'))}

      {handleWinePrices("Schaumwein", foods.filter(f => f.subcategory === 'Schaumwein'))}
    </div>
  )
}

const handleWinePrices = (title, wines) => {
  return (
    <div className="mt-5 grid grid-cols-5 gap-3">
      <div className="col-span-2 text-xl uppercase text-yellow-700 font-bold">{title}</div>
      <div className="text-xs text-right uppercase font-semibold text-yellow-700">
        <div>Glas</div>
        <div>0,2L</div>
      </div>
      <div className="text-xs text-right uppercase font-semibold text-yellow-700">
        <div>Karaffe</div>
        <div>0,5L</div>
      </div>
      <div className="text-xs text-right uppercase font-semibold text-yellow-700">
        <div>Flasche</div>
        <div>0,7L/1L</div>
      </div>

      {wines.map(w => {
        return (
          <>
            <div className="col-span-2 font-semibold uppercase">
              {w.title}
              <sup className="pl-1">{w.superscript}</sup>
            </div>
            <div className="text-right">{w.price1}</div>
            <div className="text-right">{w.price2}</div>
            <div className="text-right">{w.price3}</div>
          </>
        )
      })}
    </div>
  )
}
