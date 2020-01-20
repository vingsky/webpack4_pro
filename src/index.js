import _ from "lodash";
import './style/style01.scss';

function createElement() {
  require('./log');
  let div = document.createElement("div");
  div.innerHTML = _.join(["my", "name", "is", "leo"], "------");
  return div;
}
document.body.appendChild(createElement());
