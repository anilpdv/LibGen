const host = `http://libgen.rs`;

module.exports = {
  url: `${host}/search.php?req=`,
  regex: /bgcolor.+<td>(\d+)<\/td>/gm,
  dataUrl: `${host}/json.php?fields=id,Title,Author,MD5,coverurl,language,filesize,extension,year,identifier,descr,publisher&ids=`,
  dlUrl: `${host}/main`, 
  coversUrl: `${host}/covers/`,
};
