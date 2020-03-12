function mapdata() {

  let nodes = [];
  let edges = [];

  // Write your logic here...
  let rows = 3;
  let column = 3;

  let node = () => {
    for (i = 0; i < rows; i++) {
      for (j = 0; j < column; j++) {
        nodes.push({ "data": { "id": `N${i}-${j}` } })

        if ((column - 1 - j) > 0) {
          edges.push({
            "data": {
              "id": `N${i}-${j}E`,
              "source": `N${i}-${j}`,
              "target": `N${i}-${j + 1}`
            }
          })
        }

        if ((rows - 1 - i) > 0) {
          edges.push({
            "data": {
              "id": `N${i}-${j}S`,
              "source": `N${i}-${j}`,
              "target": `N${i + 1}-${j}`
            }
          })
        }
        if (j > 0) {
          edges.push({
            "data": {
              "id": `N${i}-${j}W`,
              "source": `N${i}-${j}`,
              "target": `N${i}-${j - 1}`
            }
          })
        }
        if (i > 0) {
          edges.push({
            "data": {
              "id": `N${i}-${j}N`,
              "source": `N${i}-${j}`,
              "target": `N${i - 1}-${j}`
            }
          })
        }
        if (j + 1 < column && i + 1 < rows) {
          edges.push({
            "data": {
              "id": `N${i}-${j}ES`,
              "source": `N${i}-${j}`,
              "target": `N${i + 1}-${j + 1}`
            }
          })
        }
        if (j - 1 >= 0 && i + 1 < rows) {
          edges.push({
            "data": {
              "id": `N${i}-${j}WS`,
              "source": `N${i}-${j}`,
              "target": `N${i + 1}-${j - 1}`
            }
          })
        }
        if (j - 1 >= 0 && i - 1 >=0) {
          edges.push({
            "data": {
              "id": `N${i}-${j}WN`,
              "source": `N${i}-${j}`,
              "target": `N${i - 1}-${j - 1}`
            }
          })
        }
        if (j + 1 <column && i - 1 >=0) {
          edges.push({
            "data": {
              "id": `N${i}-${j}EN`,
              "source": `N${i}-${j}`,
              "target": `N${i - 1}-${j + 1}`
            }
          })
        }

      }
    }
  }
  node()
  elements = {
    nodes,
    edges
  };

  return elements;

}
module.exports.mapdata = mapdata;


