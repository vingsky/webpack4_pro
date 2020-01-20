import _ from "lodash";

function createElement() {
  let div = document.createElement("div");
  div.innerHTML = _.join(["my", "name", "is", "leo"], "");
  return div;
}
document.body.appendChild(createElement());
