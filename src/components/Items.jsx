import React from "react";
import { Tabs, Tab } from "./CreateTabs";

const Items = () => {
  return (
    <div>
      <h1>Tabs</h1>
      <Tabs>
        <Tab label="one">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
          inventore similique aliquid odio at cupiditate est, ad ipsum, pariatur
          vero tempora vitae? Inventore magnam sint, recusandae libero aliquam
          repellendus quos!
        </Tab>
        <Tab label="two">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos qui
          voluptatem cupiditate maiores numquam itaque voluptate sunt explicabo.
          Autem quam ut reiciendis cum modi, doloribus aperiam eaque id numquam
          sapiente.
        </Tab>
        <Tab label="three">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
          in, accusantium deleniti, itaque molestias, incidunt ex molestiae
          praesentium distinctio hic non porro nulla! Ea totam nostrum ad
          voluptas distinctio. Illo.
        </Tab>
      </Tabs>
    </div>
  );
};

export default Items;
