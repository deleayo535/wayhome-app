import { Image } from "../../atoms/Image";
import classes from "./benefit.module.css";

export function Benefit() {
  return (
    <div className={`${classes.benefitWrap}`}>
      <div className="m-">
        <div className="py-20 px-10">
          <div className={`pb-8 ${classes.benefitH1}`}>key benefits</div>
          <div className="flex justify-between gap-20">
            <div className="w-1/4">
              <div className="pb-4">
                <Image
                  src="	https://www.wayhome.co.uk/static/media/icon-house.b1849fc9.svg"
                  width="80px"
                  height=""
                />
              </div>
              <h2 className={`pb-2 ${classes.benefitH2}`}>Make it your own</h2>
              <p className={`${classes.benefitP}`}>
                You have the freedom to paint the walls, change the carpet or
                get a pet. After all, it’s your home.
              </p>
            </div>
            <div className="w-1/4">
              <div className="pb-4">
                <Image
                  src="https://www.wayhome.co.uk/static/media/icon-keys.e2b86e52.svg"
                  width="80px"
                  height=""
                />
              </div>
              <h2 className={`pb-2 ${classes.benefitH2}`}>
                Stay as long as you like
              </h2>
              <p className={`${classes.benefitP}`}>
                It’s up to you if, or when, you leave. Nobody can ask you to
                leave as long as you pay rent.
              </p>
            </div>
            <div className="w-1/4">
              <div className="pb-4">
                <Image
                  src="	https://www.wayhome.co.uk/static/media/icon-scale.e960972a.svg"
                  width="80px"
                  height=""
                />
              </div>
              <h2 className={`pb-2 ${classes.benefitH2}`}>Fair buying costs</h2>
              <p className={`${classes.benefitP}`}>
                Normal costs like stamp duty are shared fairly. If you’re
                starting with the minimum 5% deposit, you only pay 5% of costs
                like stamp duty.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
