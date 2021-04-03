import { useState } from "react";
import { Row, Col } from "react-bootstrap";

const EmailSVG = () => {
  const [email, setEmail] = useState(false);

  return (
    <>
      {!email && (
        <p onMouseEnter={() => setEmail(true)}>
          <svg
            className="contact-media-image contact-image-email"
            width="142"
            height="144"
            viewBox="0 0 142 144"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="email" clip-path="url(#clip0)">
              <rect
                id="email-logo"
                x="9"
                y="13"
                width="125"
                height="110"
                fill="white"
              />
              <path
                id="email-background"
                d="M10.0542 143.588C7.83974 143.105 5.18007 141.724 3.78779 140.335C2.27896 138.829 1.28557 137.043 0.573891 134.554L0 132.547V72.3678C0 16.1129 0.0280355 12.0779 0.429936 10.4962C1.4939 6.30895 3.75328 3.31353 7.07517 1.68614C10.7518 -0.115062 6.32112 0.00153185 71.0918 0.00153185C135.608 0.00153185 131.607 -0.0999095 135.068 1.62356C138.359 3.26254 140.576 6.29711 141.548 10.4912C141.978 12.3463 142 15.3129 142 72.4935C142 128.679 141.972 132.657 141.569 134.244C140.278 139.327 136.996 142.542 132.007 143.612C129.526 144.145 12.4979 144.121 10.0542 143.588ZM125.739 69.3526V27.6414H71.1241H16.5087V69.3526V111.064H71.1241H125.739V69.3526ZM35.3272 97.3065C38.4733 94.0243 44.6775 87.6075 49.1142 83.0469L57.1809 74.7549L60.4908 78.151C63.9719 81.7228 65.2004 82.5748 67.9295 83.31C69.6795 83.7815 72.8865 83.772 74.7151 83.2899C77.1655 82.6439 78.5274 81.7052 82.0472 78.2364L85.3986 74.9336L96.3217 86.2403C102.329 92.459 108.455 98.8357 109.934 100.411L112.623 103.274H71.115H29.607L35.3272 97.3065ZM24.2306 69.3526L24.2316 41.0845L37.9798 55.1407L51.7281 69.1969L44.3234 76.8757C40.2507 81.0991 34.0636 87.4944 30.5741 91.0876L24.2296 97.6206L24.2306 69.3526ZM113.688 93.1606C111.393 90.7766 105.275 84.4423 100.091 79.0842L90.6658 69.3423L104.351 55.4646L118.037 41.587L118.04 69.541C118.042 84.9157 118.002 97.495 117.952 97.495C117.901 97.495 115.982 95.5445 113.688 93.1606ZM68.9199 75.4122C68.4585 75.1633 59.4504 66.094 48.9019 55.2581L29.7228 35.5565L50.5476 35.4923C62.0012 35.4569 80.7651 35.4569 92.2451 35.4923L113.118 35.5565L93.6746 55.3823C81.8263 67.4639 73.9187 75.3405 73.4306 75.5469C72.2879 76.0301 69.9355 75.9599 68.9199 75.4122Z"
                fill="black"
              />
            </g>
            <defs>
              <clipPath id="clip0">
                <rect width="142" height="144" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </p>
      )}
      {email && (
        <p onMouseLeave={() => setEmail(false)}>
          <svg
            className="contact-media-image contact-image-email"
            width="142"
            height="144"
            viewBox="0 0 142 144"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="email" clip-path="url(#clip0)">
              <rect
                id="email-logo"
                x="9"
                y="13"
                width="125"
                height="110"
                fill="black"
              />
              <path
                id="email-background"
                d="M10.0542 143.588C7.83974 143.105 5.18007 141.724 3.78779 140.335C2.27896 138.829 1.28557 137.043 0.573891 134.554L0 132.547V72.3678C0 16.1129 0.0280355 12.0779 0.429936 10.4962C1.4939 6.30895 3.75328 3.31353 7.07517 1.68614C10.7518 -0.115062 6.32112 0.00153185 71.0918 0.00153185C135.608 0.00153185 131.607 -0.0999095 135.068 1.62356C138.359 3.26254 140.576 6.29711 141.548 10.4912C141.978 12.3463 142 15.3129 142 72.4935C142 128.679 141.972 132.657 141.569 134.244C140.278 139.327 136.996 142.542 132.007 143.612C129.526 144.145 12.4979 144.121 10.0542 143.588ZM125.739 69.3526V27.6414H71.1241H16.5087V69.3526V111.064H71.1241H125.739V69.3526ZM35.3272 97.3065C38.4733 94.0243 44.6775 87.6075 49.1142 83.0469L57.1809 74.7549L60.4908 78.151C63.9719 81.7228 65.2004 82.5748 67.9295 83.31C69.6795 83.7815 72.8865 83.772 74.7151 83.2899C77.1655 82.6439 78.5274 81.7052 82.0472 78.2364L85.3986 74.9336L96.3217 86.2403C102.329 92.459 108.455 98.8357 109.934 100.411L112.623 103.274H71.115H29.607L35.3272 97.3065ZM24.2306 69.3526L24.2316 41.0845L37.9798 55.1407L51.7281 69.1969L44.3234 76.8757C40.2507 81.0991 34.0636 87.4944 30.5741 91.0876L24.2296 97.6206L24.2306 69.3526ZM113.688 93.1606C111.393 90.7766 105.275 84.4423 100.091 79.0842L90.6658 69.3423L104.351 55.4646L118.037 41.587L118.04 69.541C118.042 84.9157 118.002 97.495 117.952 97.495C117.901 97.495 115.982 95.5445 113.688 93.1606ZM68.9199 75.4122C68.4585 75.1633 59.4504 66.094 48.9019 55.2581L29.7228 35.5565L50.5476 35.4923C62.0012 35.4569 80.7651 35.4569 92.2451 35.4923L113.118 35.5565L93.6746 55.3823C81.8263 67.4639 73.9187 75.3405 73.4306 75.5469C72.2879 76.0301 69.9355 75.9599 68.9199 75.4122Z"
                fill="white"
              />
            </g>
            <defs>
              <clipPath id="clip0">
                <rect width="142" height="144" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </p>
      )}
      <p>Email</p>
    </>
  );
};

export default EmailSVG;
