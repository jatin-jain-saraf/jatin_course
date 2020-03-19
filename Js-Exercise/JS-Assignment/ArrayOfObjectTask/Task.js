let obj = [
  {
    id: 'a',
    child: [
      {
        id: 'aa',
        child: [
          {
            id: 'aaa',
            child: [
              {
                id:'aaab',
                child:[]
              }
            ]
          },
          {
            id: 'aab',
            child: [{
              id: 'aaba',
              child: []
            }]
          },
          {
            id: 113,
            child: [{
              id: 1131,
              child: []
            }]
          },
          {
            id: 114,
            child: [{
              id: 1141,
              child: []
            }]
          },
        ]
      },
      {
        id: 12,
        child: [
          {
            id: 121,
            child: []
          },
          {
            id: 122,
            child: [{
              id: 1221,
              child: []
            }]
          },
          {
            id: 123,
            child: [{
              id: 1231,
              child: []
            }]
          },
          {
            id: 124,
            child: [{
              id: 1241,
              child: []
            }]
          }
        ]
      },
      {
        id: 13,
        child: [
          {
            id: 131,
            child: [{
              id: 1311,
              child: []
            }]
          },
          {
            id: 132,
            child: [{
              id: 1321,
              child: []
            }]
          },
          {
            id: 133,
            child: [{
              id: 1331,
              child: []
            }]
          },
          {
            id: 134,
            child: {
              id: 1341,
              child: []
            }
          }
        ]
      }
    ]
  }
]
let flag = 0;
let ser = prompt("Enter id", "112")




// ++++++++++++++++++++++++function
let n = (o) => {




// ++++++++++++++++++++++++++++++===+++==Logic 1
  // try {
  //   if (o[0] === undefined) {11
  //         console.log(item);
  //       } else {)
  //   }
  // } catch{

  // }



  //================================== logic 2
  o.forEach(item => {
    if (item.id === ser) {
      console.log(item);
      flag = 1

    } else if (item.child.length) {
      n(item.child)
    }
  });
 


}


n(obj)
if (flag === 0)
console.log("Does Not Exist");
