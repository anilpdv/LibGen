module.exports = {
  url: `http://libgen.io/search.php?req=`,
  regex: /bgcolor.+<td>(\d+)<\/td>/gm,
  dataUrl: `http://libgen.io/json.php?fields=id,Title,Author,MD5,coverurl,language,filesize,extension,year,isbn,publisher&ids=`,
  dlUrl: `http://download.library1.org/main`, // id(rounded)/md5(lower)/Author - Title-Publisher (Year).extension
  coversUrl: `http://library1.org/covers/`,
};
