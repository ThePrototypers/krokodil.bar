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
      <div className="space-y-5">
        {foodsByCategories &&
          Object.entries(foodsByCategories).map(([categoryName, foods]) => {
            return (
              <div>
                <div className="text-xl text-bold">{categoryName}</div>

                {categoryName === 'Wein' ? handleWein(foods) :
                  foods.map(food =>
                    <div className="flex">
                      {food.title}
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
      <div>
        {handleWinePrices("Rotwein", foods.filter(f => f.subcategory === 'Rotwein'))}
      </div>

      <div>
        {handleWinePrices("Weißwein", foods.filter(f => f.subcategory === 'Weißwein'))}
      </div>
    </div>
  )
}

const handleWinePrices = (title, wines) => {
  return (
    <div>
      <div>{title}</div>
      <div className="flex space-x-2">
        <div>0,2</div>
        <div>0,5</div>
        <div>0,7</div>
      </div>
      <div className="flex flex-col">
        {wines.map(w => <span>{w.title}</span>)}
      </div>
    </div>
  )
}
