var ip1, ip2, ip3, ip4;

function in_range(n) {
  if (n >= 0 && n <= 255) {
    return true;
  }

  return false;
}

function has_leading_zero(n) {
  if (n.length > 1) {
    if (n[0] === "0") {
      return true;
    }
  }

  return false;
}

function isValid(s) {
  var n;
  s = s.split(".");

  if (s.length !== 4) {
    return "not valid";
  }

  for (var n, _pj_c = 0, _pj_a = s, _pj_b = _pj_a.length; _pj_c < _pj_b; _pj_c += 1) {
    n = _pj_a[_pj_c];

    if (has_leading_zero(n)) {
      return "not valid";
    }

    if (n.length === 0) {
      return "not valid";
    }

    try {
      n = Number.parseInt(n);

      if (!in_range(n)) {
        return "not valid";
      }
    } catch (e) {
      return "not valid";
    }
  }

  return "valid ip";
}


  var ip = prompt("enter ip to be checked")
  document.write(isValid(ip))

