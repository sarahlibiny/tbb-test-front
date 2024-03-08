import { TitleBeforeLine } from "../TitleBeforeLine";
import Img1 from "../../assets/Img-1.png";
import Arrow from "../../assets/arrow-right.svg";
import { ContentItem } from "../ContentItem";
import Img2 from "../../assets/Img-2.png";
import Img3 from "../../assets/Img-3.png";
import Img4 from "../../assets/Img-4.png";
import Img5 from "../../assets/Img-5.png";
import Img6 from "../../assets/Img-6.png";
import Img7 from "../../assets/Img-7.png";
import Img8 from "../../assets/Img-8.png";
import Img9 from "../../assets/Img-9.png";
import Img10 from "../../assets/Img-10.png";
import Img11 from "../../assets/Img-11.png";
import Img12 from "../../assets/Img-12.png";
import { Line } from "../Line";

//small text imagem
//refatorar

export function Content() {
  return (
    <section>
      <TitleBeforeLine title="GIFTIN" />
      <Line color="orange" />
      <ContentItem
        direction="ltr"
        title="Toys perfect for birthday gift-giving season in Spring"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas scelerisque nulla vitae mi scelerisque vulputate. Aenean ultrices leo eget lacus maximus, vitae feugiat."
        buttonText="View details"
        arrowImg={Arrow}
        imgSrc={Img1}
        imgAlt="A mother and sun playing with legos on the cellphone"
      />
      <ContentItem
        direction="rtl"
        title="Gifts for Mom"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas scelerisque nulla vitae mi scelerisque vulputate. Aenean ultrices leo eget lacus maximus, vitae feugiat."
        buttonText="View details"
        arrowImg={Arrow}
        imgSrc={Img2}
        imgAlt="A woman playing whith legos"
      />

      <TitleBeforeLine title="TRAVEL" />
      <Line color="green" />
      <ContentItem
        direction="ltr"
        title="Travel the world no matter where you are. No Passport needed."
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas scelerisque nulla vitae mi scelerisque vulputate. Aenean ultrices leo eget lacus maximus, vitae feugiat."
        buttonText="View details"
        arrowImg={Arrow}
        imgSrc={Img3}
        imgAlt="An image of a lego"
      />
      <ContentItem
        direction="rtl"
        title="Fun accessories to take with you on your travels or keep kids entertained"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas scelerisque nulla vitae mi scelerisque vulputate. Aenean ultrices leo eget lacus maximus, vitae feugiat."
        buttonText="View details"
        arrowImg={Arrow}
        imgSrc={Img4}
        imgAlt="A smiling boy with his lego"
      />
      <Line color="green" />
      <TitleBeforeLine title="ADULTS WELCOME" />
      <Line color="blue" />
      <ContentItem
        direction="ltr"
        title="For the Kids at Heart who love to unplug, unbox and unwind"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas scelerisque nulla vitae mi scelerisque vulputate. Aenean ultrices leo eget lacus maximus, vitae feugiat."
        buttonText="View details"
        arrowImg={Arrow}
        imgSrc={Img5}
        imgAlt="A woman playing whith a sonic lego"
      />
      <Line color="blue" />
      <TitleBeforeLine title="ART & HOME DÉCOR" />
      <Line color="lightGrey" />
      <ContentItem
        direction="rtl"
        title="Playful ideas for refreshing your space while tapping into your more creative side"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas scelerisque nulla vitae mi scelerisque vulputate. Aenean ultrices leo eget lacus maximus, vitae feugiat."
        buttonText="View details"
        arrowImg={Arrow}
        imgSrc={Img6}
        imgAlt="A bouquet of lego flowers"
      />
      <Line color="lightGrey" />
      <TitleBeforeLine title="SPACE" />
      <Line color="black" />
      <ContentItem
        direction="ltr"
        title="Capture the wonders of space and exploration"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas scelerisque nulla vitae mi scelerisque vulputate. Aenean ultrices leo eget lacus maximus, vitae feugiat."
        buttonText="View details"
        arrowImg={Arrow}
        imgSrc={Img7}
        imgAlt="An image of a lego"
      />
      <Line color="black" />
      <TitleBeforeLine title="POP CULTURE" />
      <Line color="pink" />
      <ContentItem
        direction="rtl"
        title="Recreate scenes from your favorite movies and TV series"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas scelerisque nulla vitae mi scelerisque vulputate. Aenean ultrices leo eget lacus maximus, vitae feugiat."
        buttonText="View details"
        arrowImg={Arrow}
        imgSrc={Img8}
        imgAlt="A lego model"
      />
      <Line color="pink" />
      <TitleBeforeLine title="TODDLERS" />
      <Line color="yellow" />
      <ContentItem
        direction="ltr"
        title="Waterproof toys for toddlers and beyond"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas scelerisque nulla vitae mi scelerisque vulputate. Aenean ultrices leo eget lacus maximus, vitae feugiat."
        buttonText="View details"
        arrowImg={Arrow}
        imgSrc={Img9}
        imgAlt="Father and baby playing in water with lego"
      />
      <ContentItem
        direction="rtl"
        title="xx TBD"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas scelerisque nulla vitae mi scelerisque vulputate. Aenean ultrices leo eget lacus maximus, vitae feugiat."
        buttonText="View details"
        arrowImg={Arrow}
        imgSrc={Img10}
        imgAlt="Kids reading a lego magazine"
      />
      <Line color="yellow" />
      <TitleBeforeLine title="REAL WORLD ROLE PLAYING" />
      <Line color="red" />
      <ContentItem
        direction="ltr"
        title="Celebrating the everyday heroes"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas scelerisque nulla vitae mi scelerisque vulputate. Aenean ultrices leo eget lacus maximus, vitae feugiat."
        buttonText="View details"
        arrowImg={Arrow}
        imgSrc={Img11}
        imgAlt="A boy playing with his legos"
      />
      <ContentItem
        direction="rtl"
        title="xxxxx TBD"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas scelerisque nulla vitae mi scelerisque vulputate. Aenean ultrices leo eget lacus maximus, vitae feugiat."
        buttonText="View details"
        arrowImg={Arrow}
        imgSrc={Img12}
        imgAlt="Lego characters"
      />
    </section>
  );
}
