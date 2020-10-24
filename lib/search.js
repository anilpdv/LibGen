const request = require("request-promise");
const { dlUrl ,dataUrl} = require("./data");
const infoData = require("./data");
const getBookData = require("./getData");

function searchQuery(options) {
  let niceQuery = options.query.split(" ").join("+");
  let finalLink = `${infoData.url}${niceQuery}&page=${options.page}`;
  let refinedData = [];
  return new Promise((resolve, reject) => {
    request(finalLink)
      .then((data) => {
        let fetchedData = infoData.regex.exec(data);
        while (fetchedData != null) {
          refinedData.push(fetchedData[1]);
          fetchedData = infoData.regex.exec(data);
        }

        console.log(refinedData);
        //getBookData(refinedData)
          //.then((res) => resolve(res))
          //.catch((err) => reject(err));
          let niceIds = refinedData.join(",");
          let finalLink = `${dataUrl}${niceIds}`;
          let response = {
            durl :dlUrl,
            reqUrl : finalLink,
          }
          resolve(response)
      })
      .catch((err) => {
        console.log('first request error');
        reject(err);
      });
  });
}

module.exports = searchQuery;
