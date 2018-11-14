const http = function () {
  return fetch('http://wb-predictivemaintenance-api.prsp7vkew2.eu-central-1.elasticbeanstalk.com/api/TorqueValues').then(function (response) {
    return response.json();
  })
};

const TorqueProfileData = {
  openTorqueProfileData(id){
    return http().then(function (data) {
      return data.filter((i) => i['Profile']===id).filter((i) => i['Direction']==='Open')
    })
  },
  closeTorqueProfileData(id){
    return http().then(function (data) {
      return data.filter((i) => i['Profile']===id).filter((i) => i['Direction']==='Close')
    })
  },
}

export default TorqueProfileData