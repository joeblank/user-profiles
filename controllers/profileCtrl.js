var profiles = [
  {
    name: 'Preston McNeil',
    pic: 'https://i.ytimg.com/vi/nomNd-1zBl8/maxresdefault.jpg',
    status: 'Everything is bigger in Texas'
  },
  {
    name: 'Ryan Rasmussen',
    pic: 'http://www.funchap.com/wp-content/uploads/2014/05/help-dog-picture.jpg',
    status: 'RR Rules'
  },
  {
    name: 'Terri Ruff',
    pic: 'http://www.cdc.gov/features/dog-bite-prevention/dog-bite-prevention_456px.jpg',
    status: 'Wow, I typed out hunter2 and all you saw was ******?!?!??'
  },
  {
    name: 'Lindsey Mayer',
    pic: 'http://r.ddmcdn.com/s_f/o_1/cx_633/cy_0/cw_1725/ch_1725/w_720/APL/uploads/2014/11/too-cute-doggone-it-video-playlist.jpg',
    status: 'OMG MITTENS DID THE CUTEST THING TODAY'
  }
];

module.exports = {
  pushProfiles: function(req,res,next) {
    var userFriends = [];
    var user = req.session.currentUser;
    for (var i = 0; i < user.friends.length; i++) {
     for (var j = 0; j < profiles.length; j++) {
       if (profiles[j].name === user.friends[i]) {
         userFriends.push(profiles[j]);
       }
     }
    }
    var userObj = {
      nono: req.session.currentUser,
      friends: userFriends
    };
    res.status(200).send(userObj);
  }
};
