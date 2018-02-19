
d3.csv("/data/2010-2014/A_university_education_is_more_important_for_a_boy_than_for_a_girl.csv", function(data) {
  console.log("HELLO")
  console.log(data[0])
});

var map = new Datamap({
  element: document.getElementById("mapContainer"),
  fills: {
    defaultFill: "#ABDDA4",
    authorHasTraveledTo: "#fa0fa0"
  },
  data: {
    USA: { fillKey: "authorHasTraveledTo" },
    JPN: { fillKey: "authorHasTraveledTo" },
    ITA: { fillKey: "authorHasTraveledTo" },
    CRI: { fillKey: "authorHasTraveledTo" },
    KOR: { fillKey: "authorHasTraveledTo" },
    DEU: { fillKey: "authorHasTraveledTo" },
  }
});