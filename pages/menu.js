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
                  foods.map(food =>
                    <div className="grid grid-cols-2 font-semibold">
                      <div>{food.title}</div>
                      <div className="text-right">{food.price1}</div>
                    </div>
                  )
                }

              </div>
            )
          })
        }
      </div>
    </Layout>
  )
}

const handleWein = (foods) => {
  return (
    <div className="flex flex-col space-y-5">
      {handleWinePrices("Rotwein", foods.filter(f => f.subcategory === 'Rotwein'))}

      {handleWinePrices("Weißwein", foods.filter(f => f.subcategory === 'Weißwein'))}
    </div>
  )
}

const handleWinePrices = (title, wines) => {
  return (
    <div class="mt-5 grid grid-cols-5 gap-3">
      <div className="col-span-2 text-xl uppercase text-yellow-700 font-bold">{title}</div>
      <div className="text-lg font-semibold text-yellow-700 text-center">0.2L</div>
      <div className="text-lg font-semibold text-yellow-700 text-center">0.5L</div>
      <div className="text-lg font-semibold text-yellow-700 text-center">0.7L</div>

      {wines.map(w => {
        return (
          <>
            <div className="col-span-2 font-semibold">{w.title}</div>
            <div className="text-center font-semibold">{w.price1}</div>
            <div className="text-center font-semibold">{w.price2}</div>
            <div className="text-center font-semibold">{w.price3}</div>
          </>
        )
      })}
    </div>
  )
}
