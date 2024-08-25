import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faHouse,
  faUserSecret,
  faUtensils,
  faUtensilSpoon,
} from "@fortawesome/free-solid-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faClipboard, faUser } from "@fortawesome/free-regular-svg-icons";

library.add(
  faUserSecret,
  faTwitter,
  faUser,
  faHouse,
  faClipboard,
  faUtensils,
  faUtensilSpoon
);

export default FontAwesomeIcon;
