import { Image } from "../../atoms";
import classes from "./faqCard.module.css";
export default function FaqCard() {
  return (
    <div className={`p-4 ${classes.faqCardWrap}`}>
      <div className="flex">
        <div className="w-1/4"></div>
        <div className="w-3/4">
          <div className="text-smmd">The basics</div>
          <div className="text-sxm text-midblack py-1 leading-5">
            What you need to buy with our help and things you should know before
            you start your journey with us.
          </div>
          <div className="flex space-x-4">
            <div className="flex py-1">
              <div className="-mr-2">
                <Image
                  src={
                    "	https://static.intercomassets.com/avatars/5278240/square_128/nacho_circle-1637093273.png"
                  }
                  width={"40px"}
                  height={""}
                />
              </div>
              <div className="">
                <Image
                  src={
                    "	https://static.intercomassets.com/avatars/5278240/square_128/nacho_circle-1637093273.png"
                  }
                  width={"40px"}
                  height={""}
                />
              </div>
            </div>
            <div className="text-xsm text-lowblack">
              <div>15 articles in this collection</div>
              <div>Written by Nacho Campomanes and Bryony Shelton</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
