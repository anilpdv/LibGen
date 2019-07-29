const baseUrl = 'http://gen.lib.rus.ec';
module.exports = {
  url: `${baseUrl}/?req=`,
  regex: /bgcolor.+<td>(\d+)<\/td>/gm,
  dataUrl: `${baseUrl}/json.php?fields=id,Title,Author,MD5,coverurl,language,filesize,extension,year,identifier,publisher&ids=`,
  dlUrl: `http://download.library1.org/main`, // id(rounded)/md5(lower)/Author - Title-Publisher (Year).extension
  coversUrl: `http://booksdescr.org/covers/`,
};
