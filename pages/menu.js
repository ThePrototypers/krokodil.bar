import React from "react";
import importFood from "utils/food";

import Layout from "pages/components/layout.js";
import Headline from "pages/components/headline";

import { Disclosure } from "@headlessui/react";
import { ChevronRightIcon } from "@heroicons/react/solid";

export async function getStaticProps() {
  const foods = await importFood();

  let foodsByCategories = {};

  foods.forEach((food) => {
    const key = food.attributes.category;

    if (!(key in foodsByCategories)) {
      foodsByCategories[food.attributes.category] = [];
    }

    foodsByCategories[food.attributes.category].push(food.attributes);
  });

  return {
    props: {
      foodsByCategories,
    },
  };
}

function compare(a, b) {
  // define the order once and sort according to index in order array
  const order = [
    "Bier",
    "Wein",
    "Aperitif",
    "Longdrinks",
    "Cocktails",
    "Schnaps & Likör",
    "Limo, Mate & Wasser",
    "Kaffee & Tee",
    "Zusatzstoffe",
  ];
  let x = order.indexOf(a[0]);
  let y = order.indexOf(b[0]);
  if (x < y) {
    return -1;
  }
  if (x > y) {
    return 1;
  }
  return 0;
}

export default function Menu({ foodsByCategories }) {
  return (
    <Layout>
      <Headline title="Karte" />
      <div className="space-y-20 mt-8 desktop:mt-14">
        <div
          className="bg-white p-3 desktop:p-16 desktop:rounded-3xl"
          style={{
            backgroundImage: "url('/img/tile.png')",
            backgroundSize: "25%",
          }}
        >
          <div className="mt-8 desktop:mt-0 space-y-12">
            {foodsByCategories &&
              Object.entries(foodsByCategories)
                .sort(compare)
                .map(([categoryName, foods]) => {
                  return (
                    <div key={categoryName}>
                      <Disclosure
                        defaultOpen={categoryName == "Bier" ? true : false}
                      >
                        {({ open }) => (
                          <>
                            <div className="flex justify-center">
                              <Disclosure.Button>
                                <div
                                  className={
                                    categoryName == "Zusatzstoffe"
                                      ? "flex uppercase font-yanone text-[#8B8B8B] text-[20px] mb-8 desktop:mb-0"
                                      : "flex uppercase text-krokodil-yellow-dark s2"
                                  }
                                >
                                  <span>{categoryName}</span>
                                  <ChevronRightIcon
                                    className={`${
                                      open
                                        ? "rotate-[90deg]"
                                        : "rotate-[270deg]"
                                    } ${
                                      categoryName == "Zusatzstoffe"
                                        ? "h-7 desktop:h-7"
                                        : "h-7 desktop:h-14"
                                    }  `}
                                  />
                                </div>
                              </Disclosure.Button>
                            </div>
                            <Disclosure.Panel>
                              {categoryName === "Wein"
                                ? handleWein(foods)
                                : categoryName === "Bier"
                                ? handleBeer(foods)
                                : categoryName === "Schnaps & Likör"
                                ? handleSchnapsLikor(foods)
                                : categoryName == "Zusatzstoffe"
                                ? handleSupplement(foods)
                                : categoryName == "Cocktails"
                                ? handleCocktail(foods)
                                : categoryName == "Aperitif"
                                ? handleAperitif(foods)
                                : categoryName == "Longdrinks"
                                ? handleLongdrinks(foods)
                                : foods.sort(compareOrder).map((food) => (
                                    <div
                                      key={food.title}
                                      className="grid grid-cols-4 space-y-4"
                                    >
                                      <div className="col-span-3 mt-2 font-medium font-yanone uppercase desktop:text-[30px] text-[19px]">
                                        <div>
                                          {food.title}
                                          <sup className="ml-1 font-medium uppercase desktop:text-[20px] text-[16px] text-[#8B8B8B]">
                                            {food.superscript}
                                          </sup>
                                        </div>
                                        <div
                                          className={`${
                                            food.description == "" ? "" : "mb-1"
                                          } -mt-[0.25em] font-medium uppercase leading-[1em] desktop:text-[20px] text-[16px] text-[#8B8B8B]`}
                                        >
                                          {food.description}
                                        </div>
                                      </div>
                                      <div className="text-right font-yanone font-light desktop:text-[26px] text-[16px]">
                                        {food.price1}
                                      </div>
                                    </div>
                                  ))}
                            </Disclosure.Panel>
                          </>
                        )}
                      </Disclosure>
                    </div>
                  );
                })}
          </div>
        </div>
        <div className="uppercase flex justify-center text-krokodil-yellow font-yanone desktop:mt-[6px] desktop:text-[65px] text-[40px]">
          ... und vieles mehr
        </div>
      </div>
    </Layout>
  );
}

function comparePrice(a, b) {
  if (parseInt(a.price1) < parseInt(b.price1)) {
    return -1;
  }
  if (parseInt(a.price1) > parseInt(b.price1)) {
    return 1;
  }
  // a must be equal to b
  return 0;
}

function compareOrder(a, b) {
  if (parseInt(a.order) > parseInt(b.order)) {
    return -1;
  }
  if (parseInt(a.order) < parseInt(b.order)) {
    return 1;
  }
  // a must be equal to b
  return 0;
}

const handleSupplement = (foods) => {
  return (
    <div className="mt-4 mb-4">
      {foods.sort(comparePrice).map((food) => (
        <span
          key={food.title}
          className="font-yanone font-normal p-1 uppercase text-[#8B8B8B] text-[20px] leading-[1em]"
        >
          {food.title}
        </span>
      ))}
    </div>
  );
};

const handleBeer = (foods) => {
  return (
    <div className="flex flex-col mt-2">
      {handleBeerPrices(
        "Fassbier",
        foods.filter((f) => f.subcategory === "Fassbier")
      )}

      {handleBottleBeerPrices(
        "Flaschenbier",
        foods.filter((f) => f.subcategory === "Flaschenbier")
      )}
    </div>
  );
};

const handleBeerPrices = (title, beers) => {
  return (
    <div className="mt-6 grid grid-cols-5 space-y-4">
      <div className="mt-6 col-span-2 text-krokodil-yellow-dark uppercase font-yanone desktop:text-3xl text-lg">
        {title}
      </div>
      <div className="text-krokodil-yellow-dark leading-[1em] uppercase text-right font-semibold font-yanone desktop:text-[20px] text-[18px]">
        <div>0,3L</div>
      </div>
      <div className="text-krokodil-yellow-dark leading-[1em] uppercase text-right font-semibold font-yanone desktop:text-[20px] text-[18px]">
        <div>0,4L</div>
      </div>
      <div className="text-krokodil-yellow-dark leading-[1em] uppercase text-right font-semibold font-yanone desktop:text-[20px] text-[18px]">
        <div>Pitcher</div>
      </div>

      {beers.sort(compareOrder).map((w) => {
        return (
          <React.Fragment key={w.title}>
            <div className="col-span-2 leading-[1.35em] font-medium font-yanone uppercase desktop:text-[30px] text-[19px]">
              {w.title}
              <sup className="ml-1 font-medium uppercase desktop:text-[20px] text-[16px] text-[#8B8B8B]">
                {w.superscript}
              </sup>
            </div>
            <div className="text-right font-yanone font-light desktop:text-[26px] text-[16px]">
              {w.price1}
            </div>
            <div className="text-right font-yanone font-light desktop:text-[26px] text-[16px]">
              {w.price2}
            </div>
            <div className="text-right font-yanone font-light desktop:text-[26px] text-[16px]">
              {w.price3}
            </div>
          </React.Fragment>
        );
      })}
    </div>
  );
};

const handleBottleBeerPrices = (title, beers) => {
  return (
    <div className="mt-6 grid grid-cols-5 space-y-4">
      <div className="mt-6 col-span-2 text-krokodil-yellow-dark uppercase font-yanone desktop:text-3xl text-lg">
        {title}
      </div>
      <div className="text-krokodil-yellow-dark leading-[1em] uppercase text-right font-semibold font-yanone desktop:text-[20px] text-[18px]">
        <div>0,33L</div>
      </div>
      <div className="text-krokodil-yellow-dark leading-[1em] uppercase text-right font-semibold font-yanone desktop:text-[20px] text-[18px]">
        <div>0,5L</div>
      </div>

      {beers.sort(compareOrder).map((w) => {
        return (
          <React.Fragment key={w.title}>
            <div className="col-span-2 leading-[1.35em] font-medium font-yanone uppercase desktop:text-[30px] text-[19px]">
              {w.title}
              <sup className="ml-1 font-medium uppercase desktop:text-[20px] text-[16px] text-[#8B8B8B]">
                {w.superscript}
              </sup>
            </div>
            <div className="text-right font-yanone font-light desktop:text-[26px] text-[16px]">
              {w.price1}
            </div>
            <div className="text-right font-yanone font-light desktop:text-[26px] text-[16px]">
              {w.price2}
            </div>
            <div className="text-right font-yanone font-light desktop:text-[26px] text-[16px]">
              {w.price3}
            </div>
          </React.Fragment>
        );
      })}
    </div>
  );
};

const handleWein = (foods) => {
  return (
    <div className="flex flex-col mt-2">
      {handleWinePrices(
        "Rotwein",
        foods.filter((f) => f.subcategory === "Rotwein")
      )}

      {handleWinePrices(
        "Weißwein",
        foods.filter((f) => f.subcategory === "Weisswein")
      )}

      {handleWinePrices(
        "Rosé",
        foods.filter((f) => f.subcategory === "Rosé")
      )}

      {handleWinePrices(
        "Schorlen",
        foods.filter((f) => f.subcategory === "Schorlen")
      )}

      {handleBubblyWinePrices(
        "Schaumwein",
        foods.filter((f) => f.subcategory === "Schaumwein")
      )}
    </div>
  );
};

const handleWinePrices = (title, wines) => {
  return (
    <div className="mt-6 grid grid-cols-5 space-y-4">
      <div className="mt-6 col-span-2 text-krokodil-yellow-dark uppercase font-yanone desktop:text-3xl text-lg">
        {title}
      </div>
      <div className="text-krokodil-yellow-dark leading-[1em] uppercase text-right font-semibold font-yanone desktop:text-[20px] text-[18px]">
        <div>Glas</div>
        <div>0,2L</div>
      </div>
      <div className="text-krokodil-yellow-dark leading-[1em] uppercase text-right font-semibold font-yanone desktop:text-[20px] text-[18px]">
        <div>Karaffe</div>
        <div>0,5L</div>
      </div>
      <div className="text-krokodil-yellow-dark leading-[1em] uppercase text-right font-semibold font-yanone desktop:text-[20px] text-[18px]">
        <div>Flasche</div>
        <div>0,7L</div>
      </div>

      {wines.sort(compareOrder).map((w) => {
        return (
          <React.Fragment key={w.title}>
            <div className="col-span-2 leading-[1.35em] font-medium font-yanone uppercase desktop:text-[30px] text-[19px]">
              {w.title}
              <sup className="ml-1 font-medium uppercase desktop:text-[20px] text-[16px] text-[#8B8B8B]">
                {w.superscript}
              </sup>
            </div>
            <div className="text-right font-yanone font-light desktop:text-[26px] text-[16px]">
              {w.price1}
            </div>
            <div className="text-right font-yanone font-light desktop:text-[26px] text-[16px]">
              {w.price2}
            </div>
            <div className="text-right font-yanone font-light desktop:text-[26px] text-[16px]">
              {w.price3}
            </div>
          </React.Fragment>
        );
      })}
    </div>
  );
};

const handleBubblyWinePrices = (title, wines) => {
  return (
    <div className="mt-6 grid grid-cols-5 space-y-4">
      <div className="mt-6 col-span-2 text-krokodil-yellow-dark uppercase font-yanone desktop:text-3xl text-lg">
        {title}
      </div>
      <div className="text-krokodil-yellow-dark leading-[1em] uppercase text-right font-semibold font-yanone desktop:text-[20px] text-[18px]">
        <div>Glas</div>
        <div>0,1L</div>
      </div>
      <div className="text-krokodil-yellow-dark leading-[1em] uppercase text-right font-semibold font-yanone desktop:text-[20px] text-[18px]">
        <div>Flasche</div>
        <div>0,75L</div>
      </div>

      {wines.sort(compareOrder).map((w) => {
        return (
          <React.Fragment key={w.title}>
            <div className="col-span-2 leading-[1.35em] font-medium font-yanone uppercase desktop:text-[30px] text-[19px]">
              {w.title}
              <sup className="ml-1 font-medium uppercase desktop:text-[20px] text-[16px] text-[#8B8B8B]">
                {w.superscript}
              </sup>
            </div>
            <div className="text-right font-yanone font-light desktop:text-[26px] text-[16px]">
              {w.price1}
            </div>
            <div className="text-right font-yanone font-light desktop:text-[26px] text-[16px]">
              {w.price3}
            </div>
          </React.Fragment>
        );
      })}
    </div>
  );
};

const handleSchnapsLikor = (foods) => {
  return (
    <div className="flex flex-col">
      {handleSchnapsLikorPrices(
        "Whisky",
        foods.filter((f) => f.subcategory === "Whisky")
      )}

      {handleSchnapsLikorPrices(
        "Rum",
        foods.filter((f) => f.subcategory === "Rum")
      )}

      {handleSchnapsLikorPrices(
        "Wodka & Korn",
        foods.filter((f) => f.subcategory === "Wodka & Korn")
      )}

      {handleSchnapsLikorPrices(
        "Obstbranntwein",
        foods.filter((f) => f.subcategory === "Obstbranntwein")
      )}

      {handleSchnapsLikorPrices(
        "Gin",
        foods.filter((f) => f.subcategory === "Gin")
      )}

      {handleSchnapsLikorPrices(
        "Mezcal & Tequila",
        foods.filter((f) => f.subcategory === "Mezcal & Tequila")
      )}

      {handleSchnapsLikorPrices(
        "Kräuter",
        foods.filter((f) => f.subcategory === "Kräuter")
      )}

      {handleSchnapsLikorPrices(
        "Wermut & Likör",
        foods.filter((f) => f.subcategory === "Wermut & Likör")
      )}
    </div>
  );
};

const handleSchnapsLikorPrices = (title, likors) => {
  return (
    <div>
      <div className="flex flex-col">
        <div className="grid grid-cols-5 mt-6">
          <div className="col-span-2 text-krokodil-yellow-dark uppercase font-yanone desktop:text-3xl text-lg">
            {title}
          </div>
          <div className="text-krokodil-yellow-dark leading-[1em] uppercase self-center text-right font-semibold font-yanone desktop:text-[20px] text-[18px]">
            <div></div>
          </div>
          <div className="text-krokodil-yellow-dark leading-[1em] uppercase self-center text-right font-semibold font-yanone desktop:text-[20px] text-[18px]">
            <div>2CL</div>
          </div>
          <div className="text-krokodil-yellow-dark leading-[1em] uppercase self-center text-right font-semibold font-yanone desktop:text-[20px] text-[18px]">
            <div>4CL</div>
          </div>

          {likors.sort(compareOrder).map((w) => {
            return (
              <React.Fragment key={w.title}>
                <div className="col-span-3 font-medium font-yanone uppercase desktop:text-[30px] text-[19px]">
                  {w.title}
                </div>
                <div className="text-right font-light font-yanone desktop:text-[26px] text-[16px]">
                  {w.price1}
                </div>
                <div className="text-right font-light font-yanone desktop:text-[26px] text-[16px]">
                  {w.price2}
                </div>
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </div>
  );
};

const handleCocktail = (foods) => {
  return (
    <div className="flex flex-col">
      {handleCocktailPrices(
        "Sauer & Cremig",
        foods.filter((f) => f.subcategory === "Sauer & Cremig")
      )}

      {handleCocktailPrices(
        "Vollmundig & Kräftig",
        foods.filter((f) => f.subcategory === "Vollmundig & Kräftig")
      )}

      {handleCocktailPrices(
        "Frisch & Prickelnd",
        foods.filter((f) => f.subcategory === "Frisch & Prickelnd")
      )}

      {handleCocktailPrices(
        "Elegant & Trocken",
        foods.filter((f) => f.subcategory === "Elegant & Trocken")
      )}

      {handleCocktailPrices(
        "Alkoholfrei & Trotzdem gut",
        foods.filter((f) => f.subcategory === "Alkoholfrei & Trotzdem gut")
      )}
    </div>
  );
};

const handleCocktailPrices = (title, likors) => {
  return (
    <div>
      <div className="flex flex-col">
        <div className="mt-6">
          <div className="col-span-5 text-krokodil-yellow-dark uppercase font-yanone desktop:text-3xl text-lg">
            {title}
          </div>

          {likors.sort(compareOrder).map((w) => {
            return (
              <React.Fragment key={w.title}>
                <div key={w.title} className="grid grid-cols-5">
                  <div className="col-span-3 mt-2 font-medium font-yanone uppercase desktop:text-[30px] text-[19px]">
                    <div>
                      {w.title}
                      <sup className="ml-1 font-medium uppercase desktop:text-[20px] text-[16px] text-[#8B8B8B]">
                        {w.superscript}
                      </sup>
                    </div>
                    <div
                      className={`${
                        w.description == "" ? "" : "mb-1"
                      } -mt-[0.25em] font-medium uppercase leading-[1em] desktop:text-[20px] text-[16px] text-[#8B8B8B]`}
                    >
                      {w.description}
                    </div>
                  </div>
                  <div className="col-span-2 text-right font-yanone font-light desktop:text-[26px] text-[16px]">
                    {w.price1}
                  </div>
                </div>
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </div>
  );
};

const handleAperitif = (foods) => {
  return (
    <div>
      {foods
        .filter((food) => food.subcategory !== "Spritz")
        .sort(compareOrder)
        .map((food) => {
          return (
            <div key={food.title} className="grid grid-cols-4 mt-2">
              <div className="col-span-3 font-yanone uppercase desktop:text-[30px] text-[19px]">
                <div>
                  {food.title}
                  <sup className="ml-1 font-medium uppercase desktop:text-[20px] text-[16px] text-[#8B8B8B]">
                    {food.superscript}
                  </sup>
                </div>
                <div className="-mt-[0.25em] font-medium uppercase leading-[1em] desktop:text-[20px] text-[16px] text-[#8B8B8B]">
                  {food.description}
                </div>
              </div>
              <div className="text-right font-light font-yanone desktop:text-[26px] text-[16px]">
                {food.price1}
              </div>
            </div>
          );
        })}

      <div className="flex flex-col">
        <div className="grid grid-cols-4 mt-2">
          <div className="mt-6 mb-2 col-span-4 text-krokodil-yellow-dark uppercase font-yanone desktop:text-3xl text-lg">
            Spritz
          </div>

          {foods
            .filter((food) => food.subcategory === "Spritz")
            .sort(compareOrder)
            .map((w) => {
              return (
                <React.Fragment key={w.title}>
                  <div className="col-span-2 font-medium font-yanone uppercase desktop:text-[30px] text-[19px]">
                    {w.title}
                    <sup className="ml-1 font-medium uppercase desktop:text-[20px] text-[16px] text-[#8B8B8B]">
                      {w.superscript}
                    </sup>
                  </div>
                  <div className="col-span-2 text-right font-light font-yanone desktop:text-[26px] text-[16px]">
                    {w.price1}
                  </div>
                </React.Fragment>
              );
            })}
        </div>
      </div>
    </div>
  );
};

const handleLongdrinks = (foods) => {
  return (
    <div>
      <div className="flex flex-col">
        <div className="grid grid-cols-4 mt-2">
          <div className="mt-6 mb-2 col-span-4 text-krokodil-yellow-dark uppercase font-yanone desktop:text-3xl text-lg">
            Gin-Tonic
          </div>

          {foods
            .filter((food) => food.subcategory === "Gin-Tonic")
            .sort(compareOrder)
            .map((w) => {
              return (
                <React.Fragment key={w.title}>
                  <div className="col-span-2 font-medium font-yanone uppercase desktop:text-[30px] text-[19px]">
                    {w.title}
                    <sup className="ml-1 font-medium uppercase desktop:text-[20px] text-[16px] text-[#8B8B8B]">
                      {w.superscript}
                    </sup>
                  </div>
                  <div className="col-span-2 text-right font-light font-yanone desktop:text-[26px] text-[16px]">
                    {w.price1}
                  </div>
                </React.Fragment>
              );
            })}
        </div>
      </div>

      {foods
        .filter((food) => food.subcategory !== "Gin-Tonic")
        .sort(compareOrder)
        .map((food) => {
          return (
            <div key={food.title} className="grid grid-cols-4 mt-2">
              <div className="col-span-3 font-yanone uppercase desktop:text-[30px] text-[19px]">
                <div>
                  {food.title}
                  <sup className="ml-1 font-medium uppercase desktop:text-[20px] text-[16px] text-[#8B8B8B]">
                    {food.superscript}
                  </sup>
                </div>
                <div className="-mt-[0.25em] font-medium uppercase leading-[1em] desktop:text-[20px] text-[16px] text-[#8B8B8B]">
                  {food.description}
                </div>
              </div>
              <div className="text-right font-light font-yanone desktop:text-[26px] text-[16px]">
                {food.price1}
              </div>
            </div>
          );
        })}
    </div>
  );
};
