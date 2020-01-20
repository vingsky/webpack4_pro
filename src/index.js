import _ from "lodash";
import './style/style.scss';

function createElement() {
  let div = document.createElement("div");
  div.innerHTML = _.join(["my", "name", "is", "leo"], "-");
  return div;
}
document.body.appendChild(createElement());
