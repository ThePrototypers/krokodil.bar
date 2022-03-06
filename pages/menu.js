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
    "Fassbier",
    "Wein",
    "Aperitif",
    "Spritz",
    "Gin Tonic",
    "Cocktails",
    "Digestif",
    "Alkoholfrei",
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
                        defaultOpen={categoryName == "Fassbier" ? true : false}
                      >
                        {({ open }) => (
                          <>
                            <div className="flex justify-center">
                              <Disclosure.Button>
                                <div
                                  className={
                                    categoryName == "Zusatzstoffe"
                                      ? "flex uppercase font-yanone text-[#8B8B8B] text-[20px]"
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
                                : categoryName === "Fassbier"
                                ? handleBeer(foods)
                                : categoryName === "Digestif"
                                ? handleDigestif(foods)
                                : categoryName === "Alkoholfrei"
                                ? handleSoda(foods)
                                : categoryName == "Zusatzstoffe"
                                ? handleSupplement(foods)
                                : foods.sort().map((food) => (
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

const handleDigestif = (foods) => {
  return (
    <div>
      {foods
        .filter((food) => food.subcategory !== "shot")
        .sort()
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
          <div className="col-span-2 text-xl uppercase font-bold"></div>
          <div className="text-krokodil-yellow-dark text-right font-semibold font-yanone desktop:text-[20px] text-[18px]">
            <div></div>
            <div>2CL</div>
          </div>
          <div className="text-krokodil-yellow-dark text-right font-semibold font-yanone desktop:text-[20px] text-[18px]">
            <div></div>
            <div>4CL</div>
          </div>

          {foods
            .filter((food) => food.subcategory === "shot")
            .sort()
            .map((w) => {
              return (
                <React.Fragment key={w.title}>
                  <div className="col-span-2 font-medium font-yanone uppercase desktop:text-[30px] text-[19px]">
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

const handleBeer = (foods) => {
  return (
    <div className="flex flex-col mt-2">
      <div className="mt-5 grid grid-cols-5">
        <div className="col-span-2 text-xl uppercase text-yellow-700 font-bold"></div>
        <div className="text-krokodil-yellow-dark text-right font-semibold font-yanone desktop:text-[20px] text-[18px]">
          <div></div>
          <div>0,3L</div>
        </div>
        <div className="text-krokodil-yellow-dark text-right font-semibold font-yanone desktop:text-[20px] text-[18px]">
          <div></div>
          <div>0,4L</div>
        </div>
        <div className="text-krokodil-yellow-dark text-right font-semibold font-yanone desktop:text-[20px] text-[18px]">
          <div>1,5L</div>
        </div>

        {foods.sort().map((w) => {
          return (
            <React.Fragment key={w.title}>
              <div className="col-span-2 font-medium font-yanone uppercase desktop:text-[30px] text-[19px]">
                {w.title}
              </div>
              <div className="text-right font-light font-yanone desktop:text-[26px] text-[16px]">
                {w.price1}
              </div>
              <div className="text-right font-light font-yanone desktop:text-[26px] text-[16px]">
                {w.price2}
              </div>
              <div className="text-right font-light font-yanone desktop:text-[26px] text-[16px]">
                {w.price3}
              </div>
            </React.Fragment>
          );
        })}
      </div>
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
        "Weißwein/Rose",
        foods.filter((f) => f.subcategory === "Weisswein/Rose")
      )}

      {handleWinePrices(
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
        <div>0,7L/1L</div>
      </div>

      {wines.map((w) => {
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

const handleSoda = (foods) => {
  return (
    <div className="flex flex-col mt-2">
      {handleSodaPrices(
        "Cocktails",
        foods.filter((f) => f.subcategory === "Cocktails")
      )}

      {handleSodaPrices(
        "Limos",
        foods.filter((f) => f.subcategory === "Limos")
      )}

      {handleSodaPrices(
        "Warmes",
        foods.filter((f) => f.subcategory === "Warmes")
      )}
    </div>
  );
};

const handleSodaPrices = (title, sodas) => {
  return (
    <div className="mt-6 grid grid-cols-4 space-y-4">
      <div className="mt-6 col-span-4 text-krokodil-yellow-dark uppercase font-yanone desktop:text-3xl text-lg">
        {title}
      </div>

      {sodas.map((w) => {
        return (
          <React.Fragment key={w.title}>
            <div
              key={w.title}
              className="col-span-3 mt-2 font-medium font-yanone uppercase desktop:text-[30px] text-[19px]"
            >
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
            <div className="text-right font-yanone font-light desktop:text-[26px] text-[16px]">
              {w.price1}
            </div>
          </React.Fragment>
        );
      })}
    </div>
  );
};

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

const handleSupplement = (foods) => {
  return (
    <div className="mt-4">
      {foods.sort(comparePrice).map((food) => (
        <span key={food.title} className="font-yanone font-normal p-1 uppercase text-[#8B8B8B] text-[20px] leading-[1em]">
          {food.title}
        </span>
      ))}
    </div>
  );
};
