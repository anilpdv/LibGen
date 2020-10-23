const host = `http://libgen.is`;

module.exports = {
  url: `${host}/search.php?req=`,
  regex: /bgcolor.+<td>(\d+)<\/td>/gm,
  dataUrl: `${host}/json.php?fields=id,Title,Author,MD5,coverurl,language,filesize,extension,year,identifier,descr,publisher&ids=`,
  dlUrl: `http://31.42.184.140/main`, 
  coversUrl: `${host}/covers/`,
};
