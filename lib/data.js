module.exports = {
  url: `http://libgen.rs/search.php?req=`,
  regex: /bgcolor.+<td>(\d+)<\/td>/gm,
  dataUrl: `http://libgen.rs/json.php?fields=id,Title,Author,MD5,coverurl,language,filesize,extension,year,identifier,descr,publisher&ids=`,
  dlUrl: `http://libgen.rs/main`, // id(rounded)/md5(lower)/Author - Title-Publisher (Year).extension
  // coversUrl: `http://93.174.95.29/covers/`,
  coversUrl: "http://libgen.rs/covers/",
};
