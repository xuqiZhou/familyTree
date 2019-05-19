var seed = function(Member) {
  Member.find(function(err, member) {
    if (member.length) return;

    var member = new Member({
      name: "Xuqi Zhou",
      gender: "Male",
      birth: new Date(1996)
    }).save();

    var member = new Member({
      name: "Sam Smith",
      gender: "Male",
      birth: 1980
    }).save();

    var member = new Member({
      name: "Tylor Swift",
      gender: "Male",
      birth: 1988
    }).save();

    var member = new Member({
      name: "Michael Jackson",
      gender: "Male",
      birth: 1500
    }).save();

    var member = new Member({
      name: "Boi Ka",
      gender: "Male",
      birth: 1977
    }).save();
  });
};
//
module.exports.seed = seed;
