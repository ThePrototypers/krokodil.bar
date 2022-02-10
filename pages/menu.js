import React from 'react';
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

function compare( a, b ) {
  // define the order once and sort according to index in order array
  const order = ["Fassbier", "Wein", "Aperitif", "Spritz", "Gin Tonic", "Cocktails", "Digestif", "Alkoholfrei"]
  let x = order.indexOf(a[0]);
  let y = order.indexOf(b[0]);
  if ( x < y ){
    return -1;
  }
  if ( x > y ){
    return 1;
  }
  return 0;
}

export default function Menu({ foodsByCategories }) {
  return (
    <Layout>
      <h1 className="text-center uppercase mt-8 s1 desktop:mt-28">Karte</h1>
      <div className="space-y-20 mt-8 desktop:mt-14">
        <div className="bg-white p-3 desktop:p-16 desktop:rounded-3xl space-y-12 desktop:space-y-8" style={{ backgroundImage: "url('/img/tile.png')"}}>
			{foodsByCategories &&
			  Object.entries(foodsByCategories).sort(compare).map(([categoryName, foods]) => {
				return (
				  <div key={categoryName} className="mt-12 desktop:mt-0">
					<div className="uppercase text-[#C58116] flex justify-center s2 desktop:mt-[6px]">{categoryName}</div>

					{categoryName === 'Wein' ? handleWein(foods) :
					  categoryName === 'Fassbier' ? handleBeer(foods) :
						categoryName === 'Digestif' ? handleDigestif(foods) :
						  foods.sort().map(food =>
							<div key={food.title} className="grid grid-cols-2">
							  <div className="font-medium font-yanone uppercase desktop:text-[30px] text-[19px]">
								<div>{food.title}
								  <sup className="ml-1 font-medium uppercase desktop:text-[20px] text-[16px] text-[#8B8B8B]">{food.superscript}</sup>
								</div>
								<div className="-mt-[0.25em] font-medium uppercase leading-[1em] desktop:text-[20px] text-[16px] text-[#8B8B8B]">{food.description}</div>
							  </div>
							  <div className="text-right font-yanone font-light desktop:text-[26px] text-[16px]">{food.price1}</div>
							</div>
						  )
					}

				  </div>
				)
			  })
			}
	  	</div>
        <div className="uppercase flex justify-center text-[#C58116] font-yanone desktop:mt-[6px] desktop:text-[65px] text-[40px]">... und vieles mehr</div>
      </div>
    </Layout >
  )
}

const handleDigestif = (foods) => {
  return (
    <div>
      {foods.filter(food => food.subcategory !== 'shot').sort().map(food => {
        return (
          <div key={food.title} className="grid grid-cols-2">
            <div className="font-yanone uppercase desktop:text-[30px] text-[19px]">
              <div>{food.title}
                <sup className="ml-1 font-medium uppercase desktop:text-[20px] text-[16px] text-[#8B8B8B]">{food.superscript}</sup>
              </div>
              <div className="-mt-[0.25em] font-medium uppercase leading-[1em] desktop:text-[20px] text-[16px] text-[#8B8B8B]">{food.description}</div>
            </div>
            <div className="text-right font-light font-yanone desktop:text-[26px] text-[16px]">{food.price1}</div>
          </div>
        )
      })}


      <div className="flex flex-col">
        <div className="grid grid-cols-4">
          <div className="col-span-2 text-xl uppercase font-bold"></div>
          <div className="text-[#C58116] text-right font-semibold font-yanone desktop:text-[20px] text-[18px]">
            <div></div>
            <div>2CL</div>
          </div>
          <div className="text-[#C58116] text-right font-semibold font-yanone desktop:text-[20px] text-[18px]">
            <div></div>
            <div>4CL</div>
          </div>

          {foods.filter(food => food.subcategory === 'shot').sort().map(w => {
            return (
              <React.Fragment key={w.title}>
                <div className="col-span-2 font-medium font-yanone uppercase desktop:text-[30px] text-[19px]">{w.title}</div>
                <div className="text-right font-light font-yanone desktop:text-[26px] text-[16px]">{w.price1}</div>
                <div className="text-right font-light font-yanone desktop:text-[26px] text-[16px]">{w.price2}</div>
              </React.Fragment>
            )
          })}
        </div>
      </div>

    </div>
  )
}

const handleBeer = (foods) => {
  return (
    <div className="flex flex-col space-y-8">
      <div className="mt-5 grid grid-cols-5">
        <div className="col-span-2 text-xl uppercase text-yellow-700 font-bold"></div>
        <div className="text-[#C58116] text-right font-semibold font-yanone desktop:text-[20px] text-[18px]">
          <div></div>
          <div>0,3L</div>
        </div>
        <div className="text-[#C58116] text-right font-semibold font-yanone desktop:text-[20px] text-[18px]">
          <div></div>
          <div>0,4L</div>
        </div>
        <div className="text-[#C58116] text-right font-semibold font-yanone desktop:text-[20px] text-[18px]">
          <div>1,5L</div>
        </div>

        {foods.sort().map(w => {
          return (
            <React.Fragment key={w.title}>
              <div className="col-span-2 font-medium font-yanone uppercase desktop:text-[30px] text-[19px]">{w.title}</div>
              <div className="text-right font-light font-yanone desktop:text-[26px] text-[16px]">{w.price1}</div>
              <div className="text-right font-light font-yanone desktop:text-[26px] text-[16px]">{w.price2}</div>
              <div className="text-right font-light font-yanone desktop:text-[26px] text-[16px]">{w.price3}</div>
            </React.Fragment>
          )
        })}
      </div>
    </div>
  )
}

const handleWein = (foods) => {
  return (
    <div className="flex flex-col space-y-8">
      {handleWinePrices("Rotwein", foods.filter(f => f.subcategory === 'Rotwein'))}

      {handleWinePrices("Weißwein/Rose", foods.filter(f => f.subcategory === 'Weisswein/Rose'))}

      {handleWinePrices("Schaumwein", foods.filter(f => f.subcategory === 'Schaumwein'))}
    </div>
  )
}

const handleWinePrices = (title, wines) => {
  return (
    <div className="mt-5 grid grid-cols-5">
      <div className="mt-3 col-span-2 text-[#C58116] uppercase font-yanone desktop:text-3xl text-lg">{title}</div>
      <div className="text-[#C58116] leading-[1em] uppercase text-right font-semibold font-yanone desktop:text-[20px] text-[18px]">
        <div>Glas</div>
        <div>0,2L</div>
      </div>
      <div className="text-[#C58116] leading-[1em] uppercase text-right font-semibold font-yanone desktop:text-[20px] text-[18px]">
        <div>Karaffe</div>
        <div>0,5L</div>
      </div>
      <div className="text-[#C58116] leading-[1em] uppercase text-right font-semibold font-yanone desktop:text-[20px] text-[18px]">
        <div>Flasche</div>
        <div>0,7L/1L</div>
	  </div>

      {wines.map(w => {
        return (
          <React.Fragment key={w.title}>
            <div className="col-span-2 font-medium font-yanone uppercase desktop:text-[30px] text-[19px]">
              {w.title}
              <sup className="ml-1 font-medium uppercase desktop:text-[20px] text-[16px] text-[#8B8B8B]">{w.superscript}</sup>
            </div>
            <div className="text-right font-yanone font-light desktop:text-[26px] text-[16px]">{w.price1}</div>
            <div className="text-right font-yanone font-light desktop:text-[26px] text-[16px]">{w.price2}</div>
            <div className="text-right font-yanone font-light desktop:text-[26px] text-[16px]">{w.price3}</div>
          </React.Fragment>
        )
      })}
    </div>
  )
}
