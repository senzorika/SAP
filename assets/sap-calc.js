/* SAP calculators.
   One self-contained script: it injects its own styles and mounts a widget into
   every <div data-sap-calc="name">, so the same tag works in a chapter page
   and inside a Quarto/reveal.js slide. */
(function () {
  'use strict';
  if (typeof window !== 'undefined' && window.SAPCalc) return;

  // ===================================================================
  // Statistics
  // ===================================================================
  var LN_SQRT_2PI = 0.9189385332046727;

  function lgamma(x) {
    var c = [76.18009172947146, -86.50532032941677, 24.01409824083091,
      -1.231739572450155, 0.1208650973866179e-2, -0.5395239384953e-5];
    var y = x, t = x + 5.5, s = 1.000000000190015;
    t -= (x + 0.5) * Math.log(t);
    for (var j = 0; j < 6; j++) s += c[j] / ++y;
    return -t + Math.log(2.5066282746310005 * s / x);
  }

  function binomPmf(k, n, p) {
    if (p <= 0) return k === 0 ? 1 : 0;
    if (p >= 1) return k === n ? 1 : 0;
    return Math.exp(lgamma(n + 1) - lgamma(k + 1) - lgamma(n - k + 1) +
      k * Math.log(p) + (n - k) * Math.log(1 - p));
  }

  // P(X >= x)
  function binomSf(x, n, p) {
    if (x <= 0) return 1;
    if (x > n) return 0;
    var s = 0;
    for (var k = x; k <= n; k++) s += binomPmf(k, n, p);
    return Math.min(1, s);
  }

  // Smallest x with P(X >= x | p0) <= alpha; n + 1 if no such x exists.
  function binomCrit(n, p0, alpha) {
    var tail = 0;
    for (var x = n; x >= 0; x--) {
      tail += binomPmf(x, n, p0);
      if (tail > alpha) return x + 1;
    }
    return 0;
  }

  function normPdf(x) { return Math.exp(-0.5 * x * x - LN_SQRT_2PI); }

  function normCdf(x) {
    if (x < -8) return 0;
    if (x > 8) return 1;
    var s = x, t = 0, b = x, q = x * x, i = 1;
    while (s !== t) { t = s; i += 2; b *= q / i; s = t + b; }
    return 0.5 + s * Math.exp(-0.5 * q - LN_SQRT_2PI);
  }

  function normInv(p) {
    if (p <= 0) return -Infinity;
    if (p >= 1) return Infinity;
    var a = [-3.969683028665376e+01, 2.209460984245205e+02, -2.759285104469687e+02,
      1.383577518672690e+02, -3.066479806614716e+01, 2.506628277459239e+00];
    var b = [-5.447609879822406e+01, 1.615858368580409e+02, -1.556989798598866e+02,
      6.680131188771972e+01, -1.328068155288572e+01];
    var c = [-7.784894002430293e-03, -3.223964580411365e-01, -2.400758277161838e+00,
      -2.549732539343734e+00, 4.374664141464968e+00, 2.938163982698783e+00];
    var d = [7.784695709041462e-03, 3.224671290700398e-01, 2.445134137142996e+00,
      3.754408661907416e+00];
    var q, r, x;
    if (p < 0.02425) {
      q = Math.sqrt(-2 * Math.log(p));
      x = (((((c[0] * q + c[1]) * q + c[2]) * q + c[3]) * q + c[4]) * q + c[5]) /
        ((((d[0] * q + d[1]) * q + d[2]) * q + d[3]) * q + 1);
    } else if (p > 1 - 0.02425) {
      q = Math.sqrt(-2 * Math.log(1 - p));
      x = -(((((c[0] * q + c[1]) * q + c[2]) * q + c[3]) * q + c[4]) * q + c[5]) /
        ((((d[0] * q + d[1]) * q + d[2]) * q + d[3]) * q + 1);
    } else {
      q = p - 0.5; r = q * q;
      x = (((((a[0] * r + a[1]) * r + a[2]) * r + a[3]) * r + a[4]) * r + a[5]) * q /
        (((((b[0] * r + b[1]) * r + b[2]) * r + b[3]) * r + b[4]) * r + 1);
    }
    var e = normCdf(x) - p, u = e / normPdf(x);
    return x - u / (1 + x * u / 2);
  }

  function betacf(x, a, b) {
    var qab = a + b, qap = a + 1, qam = a - 1, c = 1, d = 1 - qab * x / qap, h, m, m2, aa, del;
    if (Math.abs(d) < 1e-300) d = 1e-300;
    d = 1 / d; h = d;
    for (m = 1; m <= 300; m++) {
      m2 = 2 * m;
      aa = m * (b - m) * x / ((qam + m2) * (a + m2));
      d = 1 + aa * d; if (Math.abs(d) < 1e-300) d = 1e-300;
      c = 1 + aa / c; if (Math.abs(c) < 1e-300) c = 1e-300;
      d = 1 / d; h *= d * c;
      aa = -(a + m) * (qab + m) * x / ((a + m2) * (qap + m2));
      d = 1 + aa * d; if (Math.abs(d) < 1e-300) d = 1e-300;
      c = 1 + aa / c; if (Math.abs(c) < 1e-300) c = 1e-300;
      d = 1 / d; del = d * c; h *= del;
      if (Math.abs(del - 1) < 3e-16) break;
    }
    return h;
  }

  // Regularized incomplete beta I_x(a, b)
  function betaInc(x, a, b) {
    if (x <= 0) return 0;
    if (x >= 1) return 1;
    var bt = Math.exp(lgamma(a + b) - lgamma(a) - lgamma(b) + a * Math.log(x) + b * Math.log(1 - x));
    return x < (a + 1) / (a + b + 2) ? bt * betacf(x, a, b) / a : 1 - bt * betacf(1 - x, b, a) / b;
  }

  // Regularized lower incomplete gamma P(a, x)
  function gammaP(a, x) {
    if (x <= 0) return 0;
    var gln = lgamma(a), n;
    if (x < a + 1) {
      var ap = a, sum = 1 / a, del = sum;
      for (n = 0; n < 500; n++) { ap++; del *= x / ap; sum += del; if (Math.abs(del) < Math.abs(sum) * 3e-16) break; }
      return sum * Math.exp(-x + a * Math.log(x) - gln);
    }
    var b = x + 1 - a, c = 1 / 1e-300, d = 1 / b, h = d, an, de;
    for (n = 1; n < 500; n++) {
      an = -n * (n - a); b += 2;
      d = an * d + b; if (Math.abs(d) < 1e-300) d = 1e-300;
      c = b + an / c; if (Math.abs(c) < 1e-300) c = 1e-300;
      d = 1 / d; de = d * c; h *= de;
      if (Math.abs(de - 1) < 3e-16) break;
    }
    return 1 - Math.exp(-x + a * Math.log(x) - gln) * h;
  }

  function chi2Sf(x, df) { return x <= 0 ? 1 : 1 - gammaP(df / 2, x / 2); }
  function fSf(f, d1, d2) { return f <= 0 ? 1 : betaInc(d2 / (d2 + d1 * f), d2 / 2, d1 / 2); }
  // two-sided p-value of t
  function tP2(t, df) { return betaInc(df / (df + t * t), df / 2, 0.5); }

  function bisect(f, lo, hi, n) {
    for (var i = 0; i < (n || 80); i++) {
      var mid = (lo + hi) / 2;
      if (f(mid) > 0) hi = mid; else lo = mid;
    }
    return (lo + hi) / 2;
  }

  // t quantile with two-sided tail probability alpha (e.g. 0.05 -> t_0.975)
  function tCrit(alpha, df) {
    return bisect(function (t) { return alpha - tP2(t, df); }, 0, 1000, 100);
  }

  // Exact (Clopper-Pearson) one-sided bounds for a binomial proportion.
  function cpLower(x, n, tail) {
    if (x <= 0) return 0;
    return bisect(function (p) { return binomSf(x, n, p) - tail; }, 0, 1, 50);
  }
  function cpUpper(x, n, tail) {
    if (x >= n) return 1;
    return bisect(function (p) { return tail - (1 - binomSf(x + 1, n, p)); }, 0, 1, 50);
  }

  function simpson(f, a, b, n) {
    var h = (b - a) / n, s = f(a) + f(b);
    for (var i = 1; i < n; i++) s += f(a + i * h) * (i % 2 ? 4 : 2);
    return s * h / 3;
  }

  // Thurstonian psychometric functions: proportion correct for a given d'.
  var PC = {
    afc2: function (d) { return normCdf(d / Math.SQRT2); },
    afc3: function (d) {
      return simpson(function (z) { return normPdf(z - d) * Math.pow(normCdf(z), 2); }, -9, 9 + d, 600);
    },
    duotrio: function (d) {
      var a = normCdf(d / Math.SQRT2), b = normCdf(d / Math.sqrt(6));
      return 1 - a - b + 2 * a * b;
    },
    triangle: function (d) {
      var k = d * Math.sqrt(2 / 3), r3 = Math.sqrt(3);
      return 2 * simpson(function (z) {
        return (normCdf(-z * r3 + k) + normCdf(-z * r3 - k)) * normPdf(z);
      }, 0, 9, 600);
    },
    tetrad: function (d) {
      return 1 - 2 * simpson(function (z) {
        var a = normCdf(z), b = normCdf(z - d);
        return normPdf(z) * (2 * a * b - b * b);
      }, -9, 9 + d, 600);
    }
  };

  var TESTS = {
    triangle: { name: 'Trojuholníkový test (ISO 4120)', p0: 1 / 3 },
    duotrio: { name: 'Duo-trio test (ISO 10399)', p0: 1 / 2 },
    afc2: { name: 'Párový test, smerový – jednostranný (ISO 5495)', p0: 1 / 2 },
    paired2: { name: 'Párový test – obojstranný (ISO 5495)', p0: 1 / 2, twoSided: true },
    afc3: { name: '3-AFC', p0: 1 / 3 },
    tetrad: { name: 'Tetrad test', p0: 1 / 3 },
    two5: { name: 'Dva z piatich', p0: 1 / 10 }
  };

  function mean(a) { var s = 0; for (var i = 0; i < a.length; i++) s += a[i]; return s / a.length; }
  function sd(a) {
    if (a.length < 2) return NaN;
    var m = mean(a), s = 0;
    for (var i = 0; i < a.length; i++) s += (a[i] - m) * (a[i] - m);
    return Math.sqrt(s / (a.length - 1));
  }

  // Compact letter display for values compared with one common critical
  // difference: values sharing a letter do not differ significantly.
  function letters(values, crit) {
    var ord = values.map(function (v, i) { return i; }).sort(function (a, b) { return values[b] - values[a]; });
    var groups = [], lastEnd = -1;
    for (var i = 0; i < ord.length; i++) {
      var j = i;
      while (j + 1 < ord.length && values[ord[i]] - values[ord[j + 1]] < crit) j++;
      if (j > lastEnd) { groups.push([i, j]); lastEnd = j; }
    }
    var out = values.map(function () { return ''; });
    groups.forEach(function (g, gi) {
      for (var k = g[0]; k <= g[1]; k++) out[ord[k]] += String.fromCharCode(97 + gi);
    });
    return out;
  }

  // ===================================================================
  // Computations (pure functions, one per calculator)
  // ===================================================================
  var C = {};

  // Best-estimate threshold (ASTM E679): ascending 3-AFC series per assessor.
  // rows[i][j] is truthy when assessor i was correct at concentration j.
  C.bet = function (conc, rows) {
    var k = conc.length, i;
    for (i = 0; i < k; i++) if (!(conc[i] > 0) || (i && conc[i] <= conc[i - 1])) return null;
    var lowStep = k > 1 ? conc[1] / conc[0] : 2, highStep = k > 1 ? conc[k - 1] / conc[k - 2] : 2;
    var bets = rows.map(function (r) {
      var miss = -1;
      for (var j = 0; j < k; j++) if (!r[j]) miss = j;
      if (miss < 0) return Math.sqrt(conc[0] * conc[0] / lowStep);
      if (miss === k - 1) return Math.sqrt(conc[k - 1] * conc[k - 1] * highStep);
      return Math.sqrt(conc[miss] * conc[miss + 1]);
    });
    var logs = bets.map(function (b) { return Math.log(b) / Math.LN10; });
    return { bets: bets, group: Math.pow(10, mean(logs)), logSd: sd(logs) };
  };

  // Williams design: serving orders balanced for position and first-order
  // carry-over (n sequences for even n, 2n for odd n).
  C.williams = function (n) {
    var first = [0], lo = 1, hi = n - 1, i;
    for (i = 1; i < n; i++) first.push(i % 2 ? lo++ : hi--);
    var seqs = [];
    for (i = 0; i < n; i++) seqs.push(first.map(function (v) { return (v + i) % n; }));
    if (n % 2) seqs = seqs.concat(seqs.map(function (s) { return s.slice().reverse(); }));
    return seqs;
  };

  function rankRow(row) {
    var idx = row.map(function (v, i) { return i; }).sort(function (a, b) { return row[a] - row[b]; });
    var r = [], ties = 0, i = 0;
    while (i < idx.length) {
      var j = i;
      while (j + 1 < idx.length && row[idx[j + 1]] === row[idx[i]]) j++;
      var t = j - i + 1;
      for (var k = i; k <= j; k++) r[idx[k]] = (i + j) / 2 + 1;
      ties += t * t * t - t;
      i = j + 1;
    }
    return { ranks: r, ties: ties };
  }

  // Friedman test on a J x P matrix (ISO 8587), with tie correction.
  C.friedman = function (m, alpha) {
    var J = m.length, P = m[0].length, sums = [], E = 0, j, p;
    for (p = 0; p < P; p++) sums.push(0);
    for (j = 0; j < J; j++) {
      var rr = rankRow(m[j]);
      E += rr.ties;
      for (p = 0; p < P; p++) sums[p] += rr.ranks[p];
    }
    var ss = 0;
    for (p = 0; p < P; p++) ss += sums[p] * sums[p];
    var F = 12 / (J * P * (P + 1)) * ss - 3 * J * (P + 1);
    var corr = 1 - E / (J * P * (P * P - 1));
    if (corr > 0) F /= corr;
    var lsd = normInv(1 - alpha / 2) * Math.sqrt(J * P * (P + 1) / 6);
    return { sums: sums, F: F, df: P - 1, p: chi2Sf(F, P - 1), lsd: lsd, letters: letters(sums, lsd), ties: E > 0 };
  };

  // Difference and similarity evaluation of a forced-choice discrimination test.
  C.discrim = function (test, n, x, alpha, pdMax, beta) {
    var t = TESTS[test], p0 = t.p0, r = { pc: x / n };
    if (t.twoSided) {
      var big = Math.max(x, n - x);
      r.p = Math.min(1, 2 * binomSf(big, n, p0));
      r.crit = binomCrit(n, p0, alpha / 2);
      r.significant = r.p <= alpha;
      return r;
    }
    r.p = binomSf(x, n, p0);
    r.crit = binomCrit(n, p0, alpha);
    r.significant = r.p <= alpha;
    r.pd = Math.max(0, (r.pc - p0) / (1 - p0));
    r.pdUpper = Math.max(0, (cpUpper(x, n, beta) - p0) / (1 - p0));
    r.similar = r.pdUpper < pdMax;
    return r;
  };

  C.power = function (n, p0, p1, alpha) {
    var crit = binomCrit(n, p0, alpha);
    return { crit: crit, power: binomSf(crit, n, p1), alpha: binomSf(crit, n, p0) };
  };

  // Exact binomial sample size. Power is a saw-tooth in n, so the result is
  // the smallest n from which power no longer drops below the target.
  C.sampleSize = function (p0, p1, alpha, power, max) {
    if (!(p1 > p0)) return null;
    var first = 0, lastFail = 2, n, r;
    max = max || 2000;
    for (n = 3; n <= max && (!first || n <= Math.max(2 * first, first + 100)); n++) {
      r = C.power(n, p0, p1, alpha);
      if (r.crit <= n && r.power >= power) { if (!first) first = n; } else lastFail = n;
    }
    if (!first || lastFail >= max) return null;
    r = C.power(lastFail + 1, p0, p1, alpha);
    r.n = lastFail + 1;
    return r;
  };

  // Hedonic frequency table: counts[i] respondents chose score i + 1.
  C.hedonic = function (counts) {
    var k = counts.length, n = 0, s = 0, ss = 0, acc = 0, rej = 0, mid = (k + 1) / 2, i;
    for (i = 0; i < k; i++) {
      n += counts[i]; s += counts[i] * (i + 1);
      if (i + 1 > mid) acc += counts[i];
      if (i + 1 < mid) rej += counts[i];
    }
    if (n < 1) return null;
    var m = s / n;
    for (i = 0; i < k; i++) ss += counts[i] * (i + 1 - m) * (i + 1 - m);
    var sdv = n > 1 ? Math.sqrt(ss / (n - 1)) : NaN;
    var half = n > 1 ? tCrit(0.05, n - 1) * sdv / Math.sqrt(n) : NaN;
    return { n: n, mean: m, sd: sdv, lo: m - half, hi: m + half, accept: acc / n, reject: rej / n, index: (m - 1) / (k - 1) };
  };

  // Two-way ANOVA without replication: assessors (rows) x products (columns).
  // The residual is the product x assessor interaction, so F(product) is the
  // mixed-model test with assessor as a random effect.
  C.anova = function (m, alpha) {
    var J = m.length, P = m[0].length, g = 0, rm = [], cm = [], j, p;
    for (p = 0; p < P; p++) cm.push(0);
    for (j = 0; j < J; j++) {
      rm.push(mean(m[j]));
      for (p = 0; p < P; p++) { cm[p] += m[j][p] / J; g += m[j][p] / (J * P); }
    }
    var ssP = 0, ssA = 0, ssT = 0;
    for (p = 0; p < P; p++) ssP += J * (cm[p] - g) * (cm[p] - g);
    for (j = 0; j < J; j++) {
      ssA += P * (rm[j] - g) * (rm[j] - g);
      for (p = 0; p < P; p++) ssT += (m[j][p] - g) * (m[j][p] - g);
    }
    var ssE = Math.max(0, ssT - ssP - ssA), dfP = P - 1, dfA = J - 1, dfE = dfP * dfA;
    var msP = ssP / dfP, msA = ssA / dfA, msE = ssE / dfE;
    var lsd = tCrit(alpha, dfE) * Math.sqrt(2 * msE / J);
    return {
      means: cm, grand: g, ssP: ssP, ssA: ssA, ssE: ssE, dfP: dfP, dfA: dfA, dfE: dfE,
      msP: msP, msA: msA, msE: msE, fP: msP / msE, fA: msA / msE,
      pP: fSf(msP / msE, dfP, dfE), pA: fSf(msA / msE, dfA, dfE), lsd: lsd, letters: letters(cm, lsd)
    };
  };

  // Penalty analysis for one JAR attribute.
  C.penalty = function (nLow, mLow, nJar, mJar, nHigh, mHigh) {
    var n = nLow + nJar + nHigh;
    if (!(n > 0) || !(nJar > 0)) return null;
    function side(k, m) {
      var share = k / n, drop = k > 0 ? mJar - m : NaN;
      return { share: share, drop: drop, weighted: share * drop };
    }
    return { n: n, jar: nJar / n, low: side(nLow, mLow), high: side(nHigh, mHigh) };
  };

  // Paired preference test for a claim: a / b = counts preferring each
  // product, none = "no preference" answers, mode = how they are handled.
  C.preference = function (a, b, none, mode, alpha, margin) {
    var xa = a, n = a + b;
    if (mode === 'split') { xa = a + Math.floor(none / 2); n = a + b + none; }
    if (n < 1) return null;
    var p = Math.min(1, 2 * binomSf(Math.max(xa, n - xa), n, 0.5));
    var r = {
      n: n, x: xa, share: xa / n, p: p,
      lo: cpLower(xa, n, alpha / 2), hi: cpUpper(xa, n, alpha / 2),
      eqLo: cpLower(xa, n, alpha), eqHi: cpUpper(xa, n, alpha)
    };
    r.superior = p <= alpha && xa > n - xa;
    r.inferior = p <= alpha && xa < n - xa;
    r.parity = r.eqLo > 0.5 - margin && r.eqHi < 0.5 + margin;
    return r;
  };

  // Accelerated shelf-life: Arrhenius fit of ln(shelf life) against 1/T.
  C.aslt = function (temps, lives, target) {
    var n = temps.length;
    if (n < 2) return null;
    function fit(xs, ys) {
      var mx = mean(xs), my = mean(ys), sxx = 0, sxy = 0, syy = 0;
      for (var i = 0; i < xs.length; i++) {
        sxx += (xs[i] - mx) * (xs[i] - mx); sxy += (xs[i] - mx) * (ys[i] - my); syy += (ys[i] - my) * (ys[i] - my);
      }
      if (!(sxx > 0)) return null;
      var b = sxy / sxx;
      return { a: my - b * mx, b: b, r2: syy > 0 ? sxy * sxy / (sxx * syy) : 1 };
    }
    var y = lives.map(Math.log);
    var arr = fit(temps.map(function (t) { return 1 / (t + 273.15); }), y);
    var lin = fit(temps, y);
    if (!arr || !lin) return null;
    var predict = function (t) { return Math.exp(arr.a + arr.b / (t + 273.15)); };
    return {
      ea: arr.b * 8.314 / 1000, r2: arr.r2, q10: Math.exp(-10 * lin.b),
      predict: predict, life: predict(target),
      extrapolated: target < Math.min.apply(null, temps) || target > Math.max.apply(null, temps)
    };
  };

  C.describe = function (a) {
    var n = a.length, m = mean(a), s = sd(a), se = s / Math.sqrt(n);
    var half = n > 1 ? tCrit(0.05, n - 1) * se : NaN;
    return { n: n, mean: m, sd: s, se: se, cv: s / m, lo: m - half, hi: m + half };
  };

  C.tTest = function (a, b, paired) {
    var diff, se, df;
    if (paired) {
      if (a.length !== b.length || a.length < 2) return null;
      var d = a.map(function (v, i) { return v - b[i]; });
      diff = mean(d); se = sd(d) / Math.sqrt(d.length); df = d.length - 1;
    } else {
      if (a.length < 2 || b.length < 2) return null;
      var va = Math.pow(sd(a), 2) / a.length, vb = Math.pow(sd(b), 2) / b.length;
      diff = mean(a) - mean(b); se = Math.sqrt(va + vb);
      df = (va + vb) * (va + vb) / (va * va / (a.length - 1) + vb * vb / (b.length - 1));
    }
    if (!(se > 0)) return null;
    var t = diff / se, half = tCrit(0.05, df) * se;
    return { diff: diff, t: t, df: df, p: tP2(t, df), lo: diff - half, hi: diff + half };
  };

  var API = {
    stat: {
      lgamma: lgamma, binomPmf: binomPmf, binomSf: binomSf, binomCrit: binomCrit, normCdf: normCdf,
      normInv: normInv, betaInc: betaInc, gammaP: gammaP, chi2Sf: chi2Sf, fSf: fSf, tP2: tP2, tCrit: tCrit,
      cpLower: cpLower, cpUpper: cpUpper, letters: letters, PC: PC, TESTS: TESTS
    },
    compute: C
  };
  if (typeof module !== 'undefined' && module.exports) module.exports = API;
  if (typeof document === 'undefined') return;

  // ===================================================================
  // DOM helpers
  // ===================================================================
  function h(tag, attrs, kids) {
    var e = document.createElement(tag), k;
    for (k in attrs || {}) {
      if (k === 'text') e.textContent = attrs[k];
      else if (k === 'html') e.innerHTML = attrs[k];
      else if (k.slice(0, 2) === 'on') e.addEventListener(k.slice(2), attrs[k]);
      else if (attrs[k] !== false && attrs[k] != null) e.setAttribute(k, attrs[k]);
    }
    (kids || []).forEach(function (c) { if (c != null) e.appendChild(typeof c === 'string' ? document.createTextNode(c) : c); });
    return e;
  }

  var SVG_NS = 'http://www.w3.org/2000/svg';
  function s(tag, attrs, kids) {
    var e = document.createElementNS(SVG_NS, tag);
    for (var k in attrs || {}) {
      if (k === 'text') e.textContent = attrs[k]; else e.setAttribute(k, attrs[k]);
    }
    (kids || []).forEach(function (c) { e.appendChild(c); });
    return e;
  }

  function fmt(x, d) {
    if (x == null || !isFinite(x)) return '–';
    return x.toFixed(d == null ? 2 : d).replace('.', ',').replace('-', '−');
  }
  function fmtSig(x) {
    if (!isFinite(x)) return '–';
    var a = Math.abs(x);
    return fmt(x, a >= 100 ? 0 : a >= 10 ? 1 : a >= 1 ? 2 : a >= 0.1 ? 3 : 4);
  }
  function fmtP(p) { return !isFinite(p) ? '–' : p < 0.001 ? '< 0,001' : fmt(p, 3); }
  function pct(x, d) { return isFinite(x) ? fmt(100 * x, d == null ? 1 : d) + ' %' : '–'; }
  function num(v) { return parseFloat(String(v).replace(',', '.')); }

  function input(attrs) {
    var a = { type: 'number', step: 'any', inputmode: 'decimal' };
    for (var k in attrs) a[k] = attrs[k];
    if (a.type !== 'number') { a.step = null; a.inputmode = null; }
    return h('input', a);
  }
  function select(options, value) {
    var el = h('select', {}, options.map(function (o) { return h('option', { value: o[0], text: o[1] }); }));
    el.value = value;
    return el;
  }
  function field(label, control, hint, wide) {
    return h('label', { class: 'sc-field' + (wide ? ' sc-wide' : '') }, [h('span', { class: 'sc-label', text: label }), control,
      hint ? h('span', { class: 'sc-hint', text: hint }) : null]);
  }
  function tiles(items) {
    return h('div', { class: 'sc-tiles' }, items.map(function (t) {
      return h('div', { class: 'sc-tile' }, [h('div', { class: 'sc-tile-label', text: t[0] }),
        h('div', { class: 'sc-tile-value', text: t[1] }), t[2] ? h('div', { class: 'sc-tile-note', text: t[2] }) : null]);
    }));
  }
  function verdict(kind, text) {
    var icon = { yes: '✓', no: '✕', info: 'i' }[kind];
    return h('div', { class: 'sc-verdict sc-' + kind }, [h('span', { class: 'sc-icon', 'aria-hidden': 'true', text: icon }), h('span', { text: text })]);
  }
  function note(html) { return h('div', { class: 'sc-note', html: html }); }
  function button(text, fn, cls) { return h('button', { type: 'button', class: 'sc-btn' + (cls ? ' ' + cls : ''), text: text, onclick: fn }); }
  function replace(host, kids) {
    while (host.firstChild) host.removeChild(host.firstChild);
    kids.forEach(function (k) { if (k) host.appendChild(k); });
  }
  function table(head, rows, cls) {
    return h('div', { class: 'sc-scroll' }, [h('table', { class: 'sc-table' + (cls ? ' ' + cls : '') }, [
      h('thead', {}, [h('tr', {}, head.map(function (c) { return h('th', { scope: 'col', text: c }); }))]),
      h('tbody', {}, rows.map(function (r) {
        return h('tr', {}, r.map(function (c, i) { return h(i ? 'td' : 'th', i ? {} : { scope: 'row' }, [typeof c === 'string' ? c : c]); }));
      }))
    ])]);
  }

  // Editable data grid. Cells are number inputs (or toggles); output columns
  // and footer rows are filled by the calculator after each change.
  function makeGrid(o) {
    var st = {
      cols: o.cols.slice(), rows: o.rows.slice(), data: o.data.map(function (r) { return r.slice(); })
    };
    var host = h('div', { class: 'sc-grid' }), refs = {};

    function cell(r, c) {
      if (o.toggle) {
        var btn = h('button', { type: 'button', class: 'sc-toggle' });
        var paint = function () {
          var on = !!st.data[r][c];
          btn.setAttribute('aria-pressed', on ? 'true' : 'false');
          btn.setAttribute('aria-label', st.rows[r] + ', ' + st.cols[c] + ': ' + (on ? 'správne' : 'nesprávne'));
          btn.textContent = on ? '✓' : '✕';
        };
        btn.addEventListener('click', function () { st.data[r][c] = st.data[r][c] ? 0 : 1; paint(); o.onChange(); });
        paint();
        return btn;
      }
      return input({
        value: isFinite(st.data[r][c]) ? st.data[r][c] : '', 'aria-label': st.rows[r] + ', ' + st.cols[c],
        oninput: function (e) { st.data[r][c] = num(e.target.value); o.onChange(); }
      });
    }

    function build() {
      refs = { out: [], foot: [] };
      var headCells = [h('th', { scope: 'col', text: o.corner || '' })];
      st.cols.forEach(function (name, c) {
        headCells.push(h('th', { scope: 'col' }, [o.colInput ? input({
          type: o.colInput, value: name, class: 'sc-head-input', 'aria-label': (o.colLabel || 'Stĺpec') + ' ' + (c + 1),
          oninput: function (e) { st.cols[c] = e.target.value; o.onChange(); }
        }) : name]));
      });
      (o.outCols || []).forEach(function (name) { headCells.push(h('th', { scope: 'col', class: 'sc-out', text: name })); });

      var body = st.rows.map(function (name, r) {
        var tds = [h('th', { scope: 'row' }, [o.rowInput ? input({
          type: 'text', value: name, class: 'sc-row-input', 'aria-label': (o.rowLabel || 'Riadok') + ' ' + (r + 1),
          oninput: function (e) { st.rows[r] = e.target.value; o.onChange(); }
        }) : name])];
        st.cols.forEach(function (_, c) { tds.push(h('td', {}, [cell(r, c)])); });
        refs.out.push((o.outCols || []).map(function () { var td = h('td', { class: 'sc-out' }); tds.push(td); return td; }));
        return h('tr', {}, tds);
      });

      var foot = (o.footRows || []).map(function (name) {
        var tds = [h('th', { scope: 'row', text: name })], row = [];
        st.cols.forEach(function () { var td = h('td', { class: 'sc-out' }); tds.push(td); row.push(td); });
        (o.outCols || []).forEach(function () { tds.push(h('td')); });
        refs.foot.push(row);
        return h('tr', {}, tds);
      });

      var ctrls = [];
      function addCtl(label, fn, disabled) { var b = button(label, fn, 'sc-btn-ghost'); b.disabled = disabled; ctrls.push(b); }
      if (o.addRow) {
        addCtl('+ ' + o.addRow, function () {
          st.rows.push(o.newRow(st.rows.length)); st.data.push(st.cols.map(function (_, c) { return o.newCell(st.rows.length - 1, c); }));
          build(); o.onChange();
        }, st.rows.length >= (o.maxRows || 60));
        addCtl('− ' + o.addRow, function () { st.rows.pop(); st.data.pop(); build(); o.onChange(); }, st.rows.length <= (o.minRows || 2));
      }
      if (o.addCol) {
        addCtl('+ ' + o.addCol, function () {
          st.cols.push(o.newCol(st.cols)); st.data.forEach(function (r, i) { r.push(o.newCell(i, st.cols.length - 1)); });
          build(); o.onChange();
        }, st.cols.length >= (o.maxCols || 10));
        addCtl('− ' + o.addCol, function () { st.cols.pop(); st.data.forEach(function (r) { r.pop(); }); build(); o.onChange(); }, st.cols.length <= (o.minCols || 2));
      }

      replace(host, [
        h('div', { class: 'sc-scroll' }, [h('table', { class: 'sc-table sc-data' }, [
          h('thead', {}, [h('tr', {}, headCells)]), h('tbody', {}, body), foot.length ? h('tfoot', {}, foot) : null])]),
        ctrls.length ? h('div', { class: 'sc-ctrls' }, ctrls) : null
      ]);
    }
    build();

    return {
      el: host, state: st,
      reset: function (cols, rows, data) { st.cols = cols; st.rows = rows; st.data = data; build(); },
      out: function (r, k, text) { if (refs.out[r] && refs.out[r][k]) refs.out[r][k].textContent = text; },
      foot: function (f, c, text) { if (refs.foot[f] && refs.foot[f][c]) refs.foot[f][c].textContent = text; },
      complete: function () {
        return st.data.every(function (r) { return r.every(function (v) { return typeof v === 'number' && isFinite(v); }); });
      }
    };
  }

  // ===================================================================
  // Charts (inline SVG)
  // ===================================================================
  var SERIES = ['#0a8f80', '#c4841a', '#8064b0'];
  var INK = '#16302c', MUTED = '#4b5f5a', GRID = '#e2e3da';

  function niceTicks(lo, hi, count) {
    var span = hi - lo || 1, step = Math.pow(10, Math.floor(Math.log(span / count) / Math.LN10));
    var err = span / count / step;
    step *= err >= 7.5 ? 10 : err >= 3.5 ? 5 : err >= 1.5 ? 2 : 1;
    var t = [], v = Math.ceil(lo / step - 1e-9) * step;
    for (; v <= hi + step * 1e-9; v += step) t.push(Math.abs(v) < step * 1e-9 ? 0 : v);
    return t;
  }

  function plot(o) {
    var W = 640, H = o.h || 260, m = { l: 64, r: 18, t: 14, b: 40 };
    var x0 = o.x[0], x1 = o.x[1], y0 = o.y[0], y1 = o.y[1];
    var ty = o.yLog ? function (v) { return Math.log(v); } : function (v) { return v; };
    function X(v) { return m.l + (v - x0) / (x1 - x0 || 1) * (W - m.l - m.r); }
    function Y(v) { return H - m.b - (ty(v) - ty(y0)) / (ty(y1) - ty(y0) || 1) * (H - m.t - m.b); }
    var root = s('svg', { viewBox: '0 0 ' + W + ' ' + H, class: 'sc-chart', role: 'img', 'aria-label': o.label });
    (o.yTicks || niceTicks(y0, y1, 5)).forEach(function (v) {
      root.appendChild(s('line', { x1: m.l, x2: W - m.r, y1: Y(v), y2: Y(v), stroke: GRID, 'stroke-width': 1 }));
      root.appendChild(s('text', { x: m.l - 8, y: Y(v) + 4, 'text-anchor': 'end', 'font-size': 12, fill: MUTED, text: (o.yFmt || fmtSig)(v) }));
    });
    (o.xTicks || niceTicks(x0, x1, 6)).forEach(function (v) {
      root.appendChild(s('text', { x: X(v.v == null ? v : v.v), y: H - m.b + 17, 'text-anchor': 'middle', 'font-size': 12, fill: MUTED, text: v.label == null ? (o.xFmt || fmtSig)(v) : v.label }));
    });
    root.appendChild(s('line', { x1: m.l, x2: W - m.r, y1: H - m.b, y2: H - m.b, stroke: '#cfd4cb', 'stroke-width': 1 }));
    if (o.xTitle) root.appendChild(s('text', { x: (m.l + W - m.r) / 2, y: H - 5, 'text-anchor': 'middle', 'font-size': 12, fill: MUTED, text: o.xTitle }));
    if (o.yTitle) root.appendChild(s('text', { x: 12, y: (m.t + H - m.b) / 2, 'text-anchor': 'middle', 'font-size': 12, fill: MUTED, transform: 'rotate(-90 12 ' + (m.t + H - m.b) / 2 + ')', text: o.yTitle }));
    return { el: root, X: X, Y: Y, W: W, H: H, m: m };
  }

  function tip(node, text) { node.appendChild(s('title', { text: text })); return node; }
  function dot(p, x, y, color, text) {
    return tip(s('circle', { cx: p.X(x), cy: p.Y(y), r: 5, fill: color, stroke: '#fff', 'stroke-width': 2 }), text);
  }
  function legend(names) {
    return h('div', { class: 'sc-legend' }, names.map(function (n, i) {
      return h('span', {}, [h('i', { style: 'background:' + SERIES[i] }), n]);
    }));
  }
  function figure(chart, caption, leg) {
    return h('figure', { class: 'sc-figure' }, [leg || null, chart, h('figcaption', { text: caption })]);
  }

  // ===================================================================
  // Calculators
  // ===================================================================
  var CALCS = {};

  // ---- 01 Best-estimate threshold -----------------------------------
  CALCS.prah = {
    title: 'Prah citlivosti – metóda najlepšieho odhadu (BET)',
    lead: 'Vzostupný rad koncentrácií, pri každej skúška 3-AFC. Kliknutím označte, či hodnotiteľ vzorku s látkou určil správne (✓) alebo nie (✕).',
    build: function (root) {
      var out = h('div');
      var g = makeGrid({
        corner: 'Hodnotiteľ', cols: ['0.5', '1', '2', '4', '8', '16'], colInput: 'number', colLabel: 'Koncentrácia',
        rows: ['H1', 'H2', 'H3', 'H4', 'H5', 'H6'], toggle: true, outCols: ['Prah (BET)'],
        data: [[0, 0, 1, 1, 1, 1], [0, 1, 0, 1, 1, 1], [0, 0, 0, 1, 1, 1], [1, 1, 1, 1, 1, 1], [0, 0, 1, 0, 0, 1], [0, 0, 0, 0, 1, 1]],
        addRow: 'hodnotiteľ', newRow: function (i) { return 'H' + (i + 1); }, newCell: function () { return 0; },
        addCol: 'koncentrácia', minCols: 3, maxCols: 10, minRows: 1,
        newCol: function (cols) { var a = num(cols[cols.length - 1]), b = num(cols[cols.length - 2]); return String(+(a * a / b).toPrecision(6)); },
        onChange: calc
      });
      function calc() {
        var conc = g.state.cols.map(num), r = C.bet(conc, g.state.data);
        if (!r) {
          g.state.rows.forEach(function (_, i) { g.out(i, 0, '–'); });
          return replace(out, [verdict('no', 'Koncentrácie musia byť kladné a zoradené vzostupne.')]);
        }
        r.bets.forEach(function (b, i) { g.out(i, 0, fmtSig(b)); });
        var lo = Math.min.apply(null, r.bets), hi = Math.max.apply(null, r.bets);
        replace(out, [tiles([
          ['Skupinový prah', fmtSig(r.group), 'geometrický priemer individuálnych prahov'],
          ['Rozsah individuálnych prahov', fmtSig(lo) + ' – ' + fmtSig(hi)],
          ['Rozptyl (log₁₀ SD)', fmt(r.logSd, 2), 'variabilita citlivosti v paneli']
        ]), note('Individuálny prah = geometrický priemer najvyššej nerozpoznanej a nasledujúcej vyššej koncentrácie. Kto odpovedal správne všade (alebo chybne pri najvyššej koncentrácii), dostane odhad o pol kroka pod (nad) radom – taký rad treba rozšíriť. Postup podľa ASTM E679; 3-AFC skúšku prahov opisuje ISO 13301.')]);
      }
      replace(root, [h('div', { class: 'sc-unit', text: 'Hlavička stĺpcov = koncentrácia (napr. g/l), vzostupne.' }), g.el, out]);
      calc();
    }
  };

  // ---- 02 Codes and serving order ------------------------------------
  CALCS.poradie = {
    title: 'Trojciferné kódy a vyvážené poradie podávania',
    lead: 'Náhodné kódy vzoriek a Williamsov dizajn: každá vzorka je rovnako často na každej pozícii a rovnako často nasleduje po každej inej.',
    build: function (root) {
      var nS = input({ min: 2, max: 8, step: 1, value: 4 }), nA = input({ min: 1, max: 200, step: 1, value: 12 });
      var per = h('input', { type: 'checkbox' });
      var out = h('div'), last = null;
      function codes(k) {
        var set = {}, list = [];
        while (list.length < k) { var c = 100 + Math.floor(Math.random() * 900); if (!set[c]) { set[c] = 1; list.push(c); } }
        return list;
      }
      function gen() {
        var k = Math.round(num(nS.value)), n = Math.round(num(nA.value));
        if (!(k >= 2 && k <= 8) || !(n >= 1 && n <= 200)) return replace(out, [verdict('no', 'Zadajte 2 – 8 vzoriek a 1 – 200 hodnotiteľov.')]);
        var names = [], i;
        for (i = 0; i < k; i++) names.push(String.fromCharCode(65 + i));
        var seqs = C.williams(k), shared = codes(k), rows = [], tsv = [];
        var head = ['Hodnotiteľ'];
        for (i = 0; i < k; i++) head.push((i + 1) + '. vzorka');
        tsv.push(head.join('\t'));
        for (i = 0; i < n; i++) {
          var cd = per.checked ? codes(k) : shared;
          var cells = seqs[i % seqs.length].map(function (smp) { return cd[smp] + ' (' + names[smp] + ')'; });
          rows.push(['H' + (i + 1)].concat(cells));
          tsv.push(['H' + (i + 1)].concat(cells).join('\t'));
        }
        last = tsv.join('\n');
        var complete = n % seqs.length === 0;
        replace(out, [
          per.checked ? null : tiles(names.map(function (nm, j) { return ['Vzorka ' + nm, String(shared[j])]; })),
          verdict(complete ? 'yes' : 'info', complete
            ? 'Dizajn je úplne vyvážený (' + n / seqs.length + ' × ' + seqs.length + ' poradí).'
            : 'Úplná vyváženosť vyžaduje násobok ' + seqs.length + ' hodnotiteľov; pri ' + n + ' je vyváženie len približné.'),
          table(head, rows)
        ]);
      }
      var copy = button('Kopírovať tabuľku', function () {
        if (last && navigator.clipboard) navigator.clipboard.writeText(last).then(function () {
          copy.textContent = 'Skopírované'; setTimeout(function () { copy.textContent = 'Kopírovať tabuľku'; }, 1500);
        });
      }, 'sc-btn-ghost');
      replace(root, [
        h('div', { class: 'sc-form' }, [field('Počet vzoriek', nS, '2 – 8'), field('Počet hodnotiteľov', nA),
          h('label', { class: 'sc-check' }, [per, 'vlastné kódy pre každého hodnotiteľa'])]),
        h('div', { class: 'sc-ctrls' }, [button('Generovať znova', gen), copy]), out,
        note('Kódy sú náhodné trojciferné čísla (ISO 6658). Tabuľku možno vložiť do Excelu.')
      ]);
      [nS, nA, per].forEach(function (e) { e.addEventListener('input', gen); });
      gen();
    }
  };

  // ---- 03 Ranking test (Friedman) -------------------------------------
  CALCS.friedman = {
    title: 'Poradový test – Friedmanov test (ISO 8587)',
    lead: 'Každý hodnotiteľ zoradí vzorky (1 = najnižšia intenzita alebo najmenej preferovaná). Rovnaké poradia sú povolené.',
    build: function (root) {
      var alpha = select([['0.05', '0,05'], ['0.01', '0,01']], '0.05'), out = h('div');
      var g = makeGrid({
        corner: 'Hodnotiteľ', cols: ['A', 'B', 'C', 'D'], colInput: 'text', colLabel: 'Vzorka',
        rows: ['H1', 'H2', 'H3', 'H4', 'H5', 'H6', 'H7', 'H8'],
        data: [[1, 2, 4, 3], [1, 3, 4, 2], [2, 1, 4, 3], [1, 2, 3, 4], [1, 3, 4, 2], [2, 1, 3, 4], [1, 2, 4, 3], [1, 4, 3, 2]],
        footRows: ['Súčet poradí', 'Skupina'],
        addRow: 'hodnotiteľ', newRow: function (i) { return 'H' + (i + 1); }, newCell: function () { return NaN; },
        addCol: 'vzorka', minCols: 3, maxCols: 8, newCol: function (c) { return String.fromCharCode(65 + c.length); },
        onChange: calc
      });
      function calc() {
        var P = g.state.cols.length;
        function blank() { for (var c = 0; c < P; c++) { g.foot(0, c, '–'); g.foot(1, c, '–'); } }
        if (!g.complete()) { blank(); return replace(out, [verdict('info', 'Doplňte poradie vo všetkých bunkách.')]); }
        var a = num(alpha.value), r = C.friedman(g.state.data, a);
        r.sums.forEach(function (v, c) { g.foot(0, c, fmt(v, v % 1 ? 1 : 0)); g.foot(1, c, r.p <= a ? r.letters[c] : 'a'); });
        replace(out, [tiles([
          ['Friedmanova štatistika F', fmt(r.F, 2), 'χ² s ' + r.df + ' st. voľnosti' + (r.ties ? ', korekcia na zhody' : '')],
          ['p-hodnota', fmtP(r.p)],
          ['Najmenší významný rozdiel súčtov', fmt(r.lsd, 1), 'LSD pre α = ' + fmt(a, 2)]
        ]), verdict(r.p <= a ? 'yes' : 'no', r.p <= a
          ? 'Medzi vzorkami je významný rozdiel. Vzorky s rovnakým písmenom sa nelíšia (rozdiel súčtov poradí < LSD).'
          : 'Rozdiel medzi vzorkami sa nepreukázal (p > ' + fmt(a, 2) + ').'),
        note('F = 12 / (J·P·(P+1)) · ΣR² − 3·J·(P+1); LSD = z·√(J·P·(P+1)/6). Pre malé panely porovnajte F s tabuľkou v ISO 8587.')]);
      }
      alpha.addEventListener('input', calc);
      replace(root, [h('div', { class: 'sc-form' }, [field('Hladina významnosti α', alpha)]), g.el, out]);
      calc();
    }
  };

  // ---- 04 Discrimination test evaluation -------------------------------
  CALCS.rozlisovaci = {
    title: 'Vyhodnotenie rozlišovacieho testu',
    lead: 'Presný binomický test rozdielu a test podobnosti pre testy s nútenou voľbou.',
    build: function (root) {
      var test = select(Object.keys(TESTS).map(function (k) { return [k, TESTS[k].name]; }), 'triangle');
      var n = input({ min: 1, step: 1, value: 30 }), x = input({ min: 0, step: 1, value: 16 });
      var alpha = select([['0.1', '0,10'], ['0.05', '0,05'], ['0.01', '0,01'], ['0.001', '0,001']], '0.05');
      var pdMax = input({ min: 1, max: 100, value: 30 }), beta = select([['0.2', '0,20'], ['0.1', '0,10'], ['0.05', '0,05']], '0.05');
      var xLabel = h('span', { class: 'sc-label' }), out = h('div');
      function calc() {
        var t = TESTS[test.value], N = Math.round(num(n.value)), X = Math.round(num(x.value));
        xLabel.textContent = t.twoSided ? 'Počet volieb vzorky A' : 'Počet správnych odpovedí';
        if (!(N >= 1) || !(X >= 0) || X > N) return replace(out, [verdict('no', 'Zadajte počet hodnotiteľov a počet odpovedí (0 až n).')]);
        var a = num(alpha.value), r = C.discrim(test.value, N, X, a, num(pdMax.value) / 100, num(beta.value));
        var critText = r.crit > N ? 'nedosiahnuteľná' : String(r.crit);
        var kids = [tiles([
          ['p-hodnota', fmtP(r.p), t.twoSided ? 'obojstranný test' : 'jednostranný test, p₀ = ' + fmt(t.p0, 3)],
          ['Kritická hodnota', critText, t.twoSided ? 'min. počet volieb častejšej vzorky' : 'min. počet správnych pre α = ' + fmt(a, a < 0.01 ? 3 : 2)],
          [t.twoSided ? 'Podiel volieb A' : 'Podiel správnych', pct(r.pc)]
        ].concat(t.twoSided ? [] : [['Podiel rozlišujúcich p_d', pct(r.pd), 'horná hranica ' + pct(r.pdUpper)]]))];
        kids.push(verdict(r.significant ? 'yes' : 'no', 'Test rozdielu: ' + (r.significant
          ? 'rozdiel medzi vzorkami je významný (p ≤ ' + fmt(a, a < 0.01 ? 3 : 2) + ').'
          : 'rozdiel sa nepreukázal. To ešte neznamená, že vzorky sú rovnaké.')));
        if (!t.twoSided) kids.push(verdict(r.similar ? 'yes' : 'no', 'Test podobnosti: horná hranica p_d (' + pct(r.pdUpper) + ') ' +
          (r.similar ? 'je pod' : 'nie je pod') + ' povoleným maximom ' + pct(num(pdMax.value) / 100, 0) + ' – vzorky ' + (r.similar ? 'možno považovať za podobné.' : 'nemožno vyhlásiť za podobné.')));
        kids.push(note('p_d = (p_c − p₀) / (1 − p₀). Horná hranica je presná jednostranná (Clopper–Pearson) na hladine 1 − β; normy ISO uvádzajú normálnu aproximáciu, ktorá sa pri malom n mierne líši.'));
        replace(out, kids);
      }
      [test, n, x, alpha, pdMax, beta].forEach(function (e) { e.addEventListener('input', calc); });
      replace(root, [h('div', { class: 'sc-form' }, [
        field('Test', test, null, true), field('Počet hodnotiteľov n', n), h('label', { class: 'sc-field' }, [xLabel, x]),
        field('α (test rozdielu)', alpha), field('Max. p_d pri podobnosti (%)', pdMax), field('β (test podobnosti)', beta)
      ]), out]);
      calc();
    }
  };

  // ---- 05 Power and sample size ----------------------------------------
  CALCS.sila = {
    title: 'Počet hodnotiteľov a sila rozlišovacieho testu',
    lead: 'Koľko hodnotiteľov treba, aby test odhalil rozdiel danej veľkosti? Presný binomický výpočet.',
    build: function (root) {
      var names = { triangle: 'Trojuholníkový', tetrad: 'Tetrad', duotrio: 'Duo-trio', afc2: '2-AFC (smerový párový)', afc3: '3-AFC' };
      var test = select(Object.keys(names).map(function (k) { return [k, names[k]]; }), 'triangle');
      var alpha = select([['0.1', '0,10'], ['0.05', '0,05'], ['0.01', '0,01']], '0.05');
      var power = select([['0.8', '0,80'], ['0.9', '0,90'], ['0.95', '0,95']], '0.8');
      var mode = select([['d', 'Thurstonov d′'], ['pd', 'podiel rozlišujúcich p_d (%)']], 'd');
      var size = input({ min: 0, value: 1 }), have = input({ min: 3, step: 1, placeholder: 'nepovinné' });
      var out = h('div');
      function calc() {
        var p0 = TESTS[test.value].p0, v = num(size.value), a = num(alpha.value), target = num(power.value);
        if (!(v > 0)) return replace(out, [verdict('no', 'Zadajte veľkosť rozdielu väčšiu ako 0.')]);
        var p1 = mode.value === 'd' ? PC[test.value](v) : p0 + Math.min(v, 100) / 100 * (1 - p0);
        var req = C.sampleSize(p0, p1, a, target, 3000), kids = [];
        var t = [['Potrebný počet hodnotiteľov', req ? String(req.n) : '> 3000', 'sila ≥ ' + fmt(target, 2) + ', α = ' + fmt(a, 2)]];
        if (req) t.push(['Kritická hodnota', String(req.crit), 'min. správnych z ' + req.n], ['Dosiahnutá sila', fmt(req.power, 3)]);
        t.push(['Očakávaný podiel správnych p_c', fmt(p1, 3), mode.value === 'd' ? 'p_d = ' + pct((p1 - p0) / (1 - p0)) : 'p₀ = ' + fmt(p0, 3)]);
        kids.push(tiles(t));
        var N = Math.round(num(have.value));
        if (N >= 3) {
          var r = C.power(N, p0, p1, a);
          kids.push(verdict(r.power >= target ? 'yes' : 'no', 'S ' + N + ' hodnotiteľmi je sila testu ' + fmt(r.power, 3) +
            ' (kritická hodnota ' + r.crit + ').' + (r.power >= target ? '' : ' Rozdiel tejto veľkosti by test často neodhalil.')));
        }
        if (req) {
          var top = Math.max(12, Math.ceil(req.n * 1.6)), step = Math.max(1, Math.ceil(top / 160)), pts = [], nn;
          for (nn = 3; nn <= top; nn += step) pts.push([nn, C.power(nn, p0, p1, a).power]);
          var p = plot({ x: [0, top], y: [0, 1], yTicks: [0, 0.2, 0.4, 0.6, 0.8, 1], yFmt: function (y) { return fmt(y, 1); }, xFmt: function (q) { return fmt(q, 0); }, xTitle: 'počet hodnotiteľov n', yTitle: 'sila testu', label: 'Sila testu podľa počtu hodnotiteľov' });
          p.el.appendChild(s('line', { x1: p.m.l, x2: p.W - p.m.r, y1: p.Y(target), y2: p.Y(target), stroke: MUTED, 'stroke-width': 1 }));
          p.el.appendChild(s('text', { x: p.W - p.m.r, y: p.Y(target) - 6, 'text-anchor': 'end', 'font-size': 12, fill: MUTED, text: 'cieľová sila ' + fmt(target, 2) }));
          p.el.appendChild(s('path', { d: pts.map(function (q, i) { return (i ? 'L' : 'M') + p.X(q[0]).toFixed(1) + ' ' + p.Y(q[1]).toFixed(1); }).join(''), fill: 'none', stroke: SERIES[0], 'stroke-width': 2, 'stroke-linejoin': 'round', 'stroke-linecap': 'round' }));
          pts.forEach(function (q) { p.el.appendChild(tip(s('circle', { cx: p.X(q[0]), cy: p.Y(q[1]), r: 7, fill: 'transparent' }), 'n = ' + q[0] + ': sila ' + fmt(q[1], 3))); });
          p.el.appendChild(dot(p, req.n, req.power, SERIES[0], 'n = ' + req.n + ': sila ' + fmt(req.power, 3)));
          p.el.appendChild(s('text', { x: p.X(req.n) + 9, y: p.Y(req.power) + 16, 'font-size': 12, 'font-weight': 600, fill: INK, text: 'n = ' + req.n }));
          kids.push(figure(p.el, 'Sila rastie pílovito, lebo kritická hodnota je celé číslo; uvedené n je najmenšie, od ktorého sila pod cieľ už neklesne.'));
        }
        kids.push(note('p_c pre d′ počítajú Thurstonove psychometrické funkcie. Pre rovnaký d′ potrebuje trojuholníkový test a duo-trio rádovo viac hodnotiteľov než tetrad alebo 2-AFC.'));
        replace(out, kids);
      }
      [test, alpha, power, mode, size, have].forEach(function (e) { e.addEventListener('input', calc); });
      replace(root, [h('div', { class: 'sc-form' }, [field('Test', test), field('α', alpha), field('Cieľová sila (1 − β)', power),
        field('Rozdiel zadaný ako', mode, null, true), field('Veľkosť rozdielu', size), field('Mám hodnotiteľov', have)]), out]);
      calc();
    }
  };

  // ---- 06 Hedonic scale frequencies --------------------------------------
  CALCS.hedonika = {
    title: 'Hedonická škála – frekvenčná tabuľka',
    lead: 'Zadajte, koľko respondentov zvolilo jednotlivé body škály. Pre každú vzorku sa vypočíta priemer, interval spoľahlivosti a podiel prijatia.',
    build: function (root) {
      var scale = select([['9', '9-bodová'], ['7', '7-bodová'], ['5', '5-bodová']], '9'), out = h('div'), g;
      var sample = { 9: [[30, 12], [34, 20], [22, 26], [8, 18], [3, 12], [2, 6], [1, 4], [0, 1], [0, 1]], 7: [[24, 10], [30, 18], [20, 22], [14, 20], [6, 14], [4, 10], [2, 6]], 5: [[30, 14], [36, 26], [20, 28], [10, 20], [4, 12]] };
      function labels(k) {
        var r = [];
        for (var v = k; v >= 1; v--) r.push(v + (v === k ? ' – mimoriadne chutí' : v === (k + 1) / 2 ? ' – ani chutí, ani nechutí' : v === 1 ? ' – mimoriadne nechutí' : ''));
        return r;
      }
      function calc() {
        var k = g.state.rows.length, names = g.state.cols, res = names.map(function (_, c) {
          return C.hedonic(g.state.data.map(function (r) { return r[c] > 0 ? r[c] : 0; }).reverse());
        });
        if (res.some(function (r) { return !r; })) return replace(out, [verdict('info', 'Zadajte počty odpovedí pre každú vzorku.')]);
        var mid = (k + 1) / 2, rows = [
          ['Počet respondentov n'].concat(res.map(function (r) { return String(r.n); })),
          ['Priemer x̄'].concat(res.map(function (r) { return fmt(r.mean, 2); })),
          ['Smerodajná odchýlka s'].concat(res.map(function (r) { return fmt(r.sd, 2); })),
          ['95 % interval spoľahlivosti'].concat(res.map(function (r) { return fmt(r.lo, 2) + ' – ' + fmt(r.hi, 2); })),
          ['Prijatie (skóre ≥ ' + (mid + 1) + ')'].concat(res.map(function (r) { return pct(r.accept); })),
          ['Odmietnutie (skóre ≤ ' + (mid - 1) + ')'].concat(res.map(function (r) { return pct(r.reject); })),
          ['Index prijatia (x̄ − 1) / ' + (k - 1)].concat(res.map(function (r) { return pct(r.index); }))
        ];
        var maxShare = 0, shares = res.map(function (r, c) {
          return g.state.data.map(function (row) { var v = (row[c] > 0 ? row[c] : 0) / r.n; maxShare = Math.max(maxShare, v); return v; }).reverse();
        });
        var top = Math.ceil(maxShare * 10) / 10 || 0.1, ticks = [];
        for (var i = 1; i <= k; i++) ticks.push({ v: i, label: String(i) });
        var p = plot({ x: [0.4, k + 0.6], y: [0, top], xTicks: ticks, yFmt: function (y) { return fmt(100 * y, 0) + ' %'; }, xTitle: 'bod škály', yTitle: 'podiel odpovedí', label: 'Rozdelenie odpovedí na hedonickej škále' });
        var band = (p.X(2) - p.X(1)) * 0.78, bw = Math.min(24, band / res.length - 2);
        shares.forEach(function (sh, c) {
          sh.forEach(function (v, j) {
            if (!(v > 0)) return;
            var x = p.X(j + 1) - (res.length * (bw + 2) - 2) / 2 + c * (bw + 2), y = p.Y(v), base = p.Y(0), r = Math.min(4, (base - y) / 2);
            p.el.appendChild(tip(s('path', { fill: SERIES[c], d: 'M' + x + ' ' + base + 'V' + (y + r) + 'Q' + x + ' ' + y + ' ' + (x + r) + ' ' + y + 'H' + (x + bw - r) + 'Q' + (x + bw) + ' ' + y + ' ' + (x + bw) + ' ' + (y + r) + 'V' + base + 'Z' }),
              names[c] + ', skóre ' + (j + 1) + ': ' + pct(v)));
          });
        });
        replace(out, [table([''].concat(names), rows, 'sc-result'), figure(p.el, 'Rozdelenie odpovedí; prekrývajúce sa intervaly spoľahlivosti ešte nie sú test rozdielu – na ten použite ANOVA alebo t-test.', res.length > 1 ? legend(names) : null)]);
      }
      function setup() {
        var k = +scale.value, names = g ? g.state.cols.slice(0, 2) : ['Vzorka A', 'Vzorka B'];
        var opts = {
          corner: 'Skóre', cols: names, colInput: 'text', colLabel: 'Vzorka', rows: labels(k), data: sample[k].map(function (r) { return r.slice(0, names.length); }),
          addCol: 'vzorka', minCols: 1, maxCols: 3, newCol: function (c) { return 'Vzorka ' + String.fromCharCode(65 + c.length); }, newCell: function () { return 0; }, onChange: calc
        };
        if (g) g.reset(opts.cols, opts.rows, opts.data); else g = makeGrid(opts);
        calc();
      }
      scale.addEventListener('input', setup);
      g = null;
      var holder = h('div');
      replace(root, [h('div', { class: 'sc-form' }, [field('Škála', scale)]), holder, out]);
      setup();
      holder.appendChild(g.el);
    }
  };

  // ---- 07 Panel ANOVA ---------------------------------------------------
  CALCS.anova = {
    title: 'Deskriptor v paneli – ANOVA hodnotiteľ × vzorka',
    lead: 'Intenzity jedného deskriptora: riadky sú hodnotitelia, stĺpce vzorky. Efekt vzorky sa testuje voči interakcii s hodnotiteľom.',
    build: function (root) {
      var alpha = select([['0.05', '0,05'], ['0.01', '0,01']], '0.05'), out = h('div');
      var g = makeGrid({
        corner: 'Hodnotiteľ', cols: ['Jogurt A', 'Jogurt B', 'Jogurt C'], colInput: 'text', colLabel: 'Vzorka',
        rows: ['H1', 'H2', 'H3', 'H4', 'H5', 'H6', 'H7', 'H8'],
        data: [[6.5, 8.0, 4.5], [7.0, 9.5, 5.0], [5.5, 8.5, 5.5], [6.0, 7.5, 3.5], [7.5, 9.0, 6.0], [6.5, 8.5, 4.0], [5.0, 7.0, 4.5], [7.0, 9.0, 5.5]],
        footRows: ['Priemer', 'Skupina'],
        addRow: 'hodnotiteľ', newRow: function (i) { return 'H' + (i + 1); }, newCell: function () { return NaN; },
        addCol: 'vzorka', minCols: 2, maxCols: 8, newCol: function (c) { return 'Vzorka ' + (c.length + 1); },
        onChange: calc
      });
      function calc() {
        var P = g.state.cols.length, c;
        if (!g.complete()) { for (c = 0; c < P; c++) { g.foot(0, c, '–'); g.foot(1, c, '–'); } return replace(out, [verdict('info', 'Doplňte hodnoty vo všetkých bunkách.')]); }
        var a = num(alpha.value), r = C.anova(g.state.data, a), sig = r.pP <= a;
        for (c = 0; c < P; c++) { g.foot(0, c, fmt(r.means[c], 2)); g.foot(1, c, sig ? r.letters[c] : 'a'); }
        replace(out, [
          table(['Zdroj variability', 'SS', 'df', 'MS', 'F', 'p'], [
            ['Vzorka', fmt(r.ssP, 2), String(r.dfP), fmt(r.msP, 3), fmt(r.fP, 2), fmtP(r.pP)],
            ['Hodnotiteľ', fmt(r.ssA, 2), String(r.dfA), fmt(r.msA, 3), fmt(r.fA, 2), fmtP(r.pA)],
            ['Vzorka × hodnotiteľ (rezíduum)', fmt(r.ssE, 2), String(r.dfE), fmt(r.msE, 3), '–', '–']
          ], 'sc-result'),
          tiles([['LSD (Fisher)', fmt(r.lsd, 2), 'najmenší významný rozdiel priemerov, α = ' + fmt(a, 2)], ['Celkový priemer', fmt(r.grand, 2)]]),
          verdict(sig ? 'yes' : 'no', sig ? 'Vzorky sa v tomto deskriptore významne líšia. Vzorky s rovnakým písmenom sa nelíšia (rozdiel priemerov < LSD).'
            : 'Rozdiel medzi vzorkami sa nepreukázal (p > ' + fmt(a, 2) + ').'),
          r.pA <= a ? verdict('info', 'Významný efekt hodnotiteľa: hodnotitelia používajú škálu na rôznej úrovni – bežné, model to zohľadňuje.') : null,
          note('Jedno hodnotenie na bunku. Pri opakovaniach a viacerých deskriptoroch použite zmiešaný model v R (SaIT, cvičenie 16).')
        ]);
      }
      alpha.addEventListener('input', calc);
      replace(root, [h('div', { class: 'sc-form' }, [field('Hladina významnosti α', alpha)]), g.el, out]);
      calc();
    }
  };

  // ---- 08 Penalty analysis ----------------------------------------------
  CALCS.penalty = {
    title: 'JAR škála – penalty analýza',
    lead: 'Pre každý atribút zadajte počet respondentov a ich priemernú obľúbenosť v skupinách „príliš málo", „práve tak" (JAR) a „príliš veľa".',
    build: function (root) {
      var out = h('div');
      var g = makeGrid({
        corner: 'Atribút', rowInput: true, rowLabel: 'Atribút',
        cols: ['Málo: n', 'Málo: x̄', 'JAR: n', 'JAR: x̄', 'Veľa: n', 'Veľa: x̄'],
        rows: ['Sladkosť', 'Kyslosť', 'Hustota'],
        data: [[40, 5.8, 80, 7.8, 30, 6.0], [18, 6.9, 96, 7.4, 36, 5.6], [52, 6.1, 84, 7.6, 14, 6.8]],
        addRow: 'atribút', minRows: 1, maxRows: 12, newRow: function (i) { return 'Atribút ' + (i + 1); }, newCell: function () { return NaN; },
        onChange: calc
      });
      function calc() {
        var rows = [], pts = [], maxDrop = 1;
        g.state.data.forEach(function (d, i) {
          var r = C.penalty(d[0] || 0, d[1], d[2] || 0, d[3], d[4] || 0, d[5]);
          if (!r) return;
          [['príliš málo', r.low], ['príliš veľa', r.high]].forEach(function (side) {
            var sd = side[1], ok = isFinite(sd.drop);
            var act = ok && sd.share >= 0.2 && sd.drop >= 1 ? 'upraviť' : ok && sd.share >= 0.2 && sd.drop >= 0.5 ? 'zvážiť' : '–';
            rows.push([g.state.rows[i] + ' – ' + side[0], pct(sd.share), fmt(sd.drop, 2), fmt(sd.weighted, 2), act]);
            if (ok) { pts.push({ x: sd.share, y: sd.drop, label: g.state.rows[i] + (side[0] === 'príliš málo' ? ' ↓' : ' ↑') }); maxDrop = Math.max(maxDrop, sd.drop); }
          });
        });
        if (!rows.length) return replace(out, [verdict('info', 'Zadajte počty a priemery aspoň pre jeden atribút (skupina JAR nesmie byť prázdna).')]);
        var minDrop = Math.min(0, Math.floor(Math.min.apply(null, pts.map(function (q) { return q.y; })) * 2) / 2);
        var p = plot({ x: [0, Math.max(0.5, Math.ceil(Math.max.apply(null, pts.map(function (q) { return q.x; })) * 10) / 10)], y: [minDrop, Math.ceil(maxDrop * 2) / 2], xFmt: function (v) { return fmt(100 * v, 0) + ' %'; }, yFmt: function (v) { return fmt(v, 1); }, xTitle: 'podiel respondentov', yTitle: 'pokles obľúbenosti', label: 'Penalty analýza: podiel respondentov a pokles obľúbenosti' });
        p.el.appendChild(s('line', { x1: p.X(0.2), x2: p.X(0.2), y1: p.m.t, y2: p.H - p.m.b, stroke: MUTED, 'stroke-width': 1 }));
        p.el.appendChild(s('text', { x: p.X(0.2) + 6, y: p.H - p.m.b - 7, 'font-size': 12, fill: MUTED, text: 'hranica 20 %' }));
        // Greedy label placement: right, left, above, below; a label that fits nowhere stays in the tooltip and table.
        var boxes = pts.map(function (q) { return [p.X(q.x) - 8, p.Y(q.y) - 8, p.X(q.x) + 8, p.Y(q.y) + 8]; });
        pts.forEach(function (q) {
          var cx = p.X(q.x), cy = p.Y(q.y), w = q.label.length * 6.6 + 4;
          p.el.appendChild(dot(p, q.x, q.y, SERIES[0], q.label + ': ' + pct(q.x) + ', pokles ' + fmt(q.y, 2)));
          [[cx + 9, cy + 4, 'start'], [cx - 9, cy + 4, 'end'], [cx, cy - 11, 'middle'], [cx, cy + 20, 'middle']].some(function (c) {
            var x0 = c[2] === 'start' ? c[0] : c[2] === 'end' ? c[0] - w : c[0] - w / 2, b = [x0, c[1] - 11, x0 + w, c[1] + 3];
            if (b[0] < p.m.l || b[2] > p.W - 2 || b[1] < 0 || b[3] > p.H - p.m.b) return false;
            if (boxes.some(function (o) { return b[0] < o[2] && b[2] > o[0] && b[1] < o[3] && b[3] > o[1]; })) return false;
            boxes.push(b);
            p.el.appendChild(s('text', { x: c[0], y: c[1], 'text-anchor': c[2], 'font-size': 12, fill: INK, text: q.label }));
            return true;
          });
        });
        replace(out, [table(['Skupina', 'Podiel', 'Pokles (penalty)', 'Vážený pokles', 'Odporúčanie'], rows, 'sc-result'),
          figure(p.el, '↓ = atribútu je príliš málo, ↑ = príliš veľa. Dôležité sú body vpravo hore: veľa respondentov a veľký pokles.'),
          note('Pokles = x̄(JAR) − x̄(skupina); vážený pokles = pokles × podiel skupiny. „Upraviť" = skupina ≥ 20 % a pokles ≥ 1 bod, „zvážiť" = pokles ≥ 0,5 bodu (konvencia, nie norma).')]);
      }
      replace(root, [g.el, out]);
      calc();
    }
  };

  // ---- 09 Preference claim ------------------------------------------------
  CALCS.claim = {
    title: 'Párový preferenčný test pre senzorické tvrdenie',
    lead: 'Podloží výsledok spotrebiteľského testu tvrdenie „uprednostňovaný pred…" alebo „rovnako obľúbený ako…"?',
    build: function (root) {
      var a = input({ min: 0, step: 1, value: 172 }), b = input({ min: 0, step: 1, value: 128 }), none = input({ min: 0, step: 1, value: 0 });
      var mode = select([['drop', 'vylúčiť'], ['split', 'rozdeliť rovnomerne']], 'drop');
      var alpha = select([['0.05', '0,05'], ['0.01', '0,01']], '0.05'), margin = input({ min: 1, max: 49, value: 10 }), out = h('div');
      function calc() {
        var A = Math.round(num(a.value)), B = Math.round(num(b.value)), N = Math.round(num(none.value)) || 0, al = num(alpha.value), mg = num(margin.value) / 100;
        var r = A >= 0 && B >= 0 && N >= 0 ? C.preference(A, B, N, mode.value, al, mg) : null;
        if (!r) return replace(out, [verdict('no', 'Zadajte počty odpovedí.')]);
        var conf = fmt(100 * (1 - al), 0) + ' %';
        replace(out, [tiles([
          ['Podiel preferencie A', pct(r.share), r.x + ' z ' + r.n],
          ['p-hodnota', fmtP(r.p), 'obojstranný binomický test, p₀ = 0,5'],
          [conf + ' interval spoľahlivosti', pct(r.lo) + ' – ' + pct(r.hi), 'presný (Clopper–Pearson)']
        ]),
        verdict(r.superior ? 'yes' : 'no', 'Nadradenosť („A je uprednostňovaný pred B"): ' + (r.superior ? 'tvrdenie je štatisticky podložené.'
          : r.inferior ? 'nepodložené – významne uprednostňovaný je B.' : 'nepodložené – preferencia sa významne nelíši od 50 : 50.')),
        verdict(r.parity ? 'yes' : 'no', 'Parita („rovnako obľúbený"): ' + fmt(100 * (1 - 2 * al), 0) + ' % interval ' + pct(r.eqLo) + ' – ' + pct(r.eqHi) +
          (r.parity ? ' leží celý v pásme ' : ' neleží celý v pásme ') + pct(0.5 - mg, 0) + ' – ' + pct(0.5 + mg, 0) + (r.parity ? ' – parita je podložená.' : ' – parita nie je podložená.')),
        note('Nevýznamný rozdiel sám osebe paritu nedokazuje – treba test ekvivalencie s vopred určeným pásmom. Spracovanie odpovedí „bez preferencie" a pásmo ekvivalencie stanovte pred testom (ASTM E1958, E2263). Výsledok je štatistický, nie právny posudok.')]);
      }
      [a, b, none, mode, alpha, margin].forEach(function (e) { e.addEventListener('input', calc); });
      replace(root, [h('div', { class: 'sc-form' }, [field('Uprednostnili A', a), field('Uprednostnili B', b), field('Bez preferencie', none),
        field('Odpovede bez preferencie', mode), field('α', alpha), field('Pásmo parity ± (p. b.)', margin)]), out]);
      calc();
    }
  };

  // ---- 10 Accelerated shelf-life -------------------------------------------
  CALCS.aslt = {
    title: 'Zrýchlený test trvanlivosti – Q10 a Arrheniusov model',
    lead: 'Zadajte senzorickú trvanlivosť zistenú pri aspoň dvoch teplotách skladovania a teplotu, pre ktorú ju chcete odhadnúť.',
    build: function (root) {
      var target = input({ value: 25 }), out = h('div');
      var g = makeGrid({
        corner: 'Meranie', cols: ['Teplota (°C)', 'Trvanlivosť (dni)'], rows: ['1', '2', '3'],
        data: [[20, 180], [30, 60], [40, 21]], addRow: 'meranie', minRows: 2, maxRows: 10,
        newRow: function (i) { return String(i + 1); }, newCell: function () { return NaN; }, onChange: calc
      });
      function calc() {
        var pts = g.state.data.filter(function (r) { return isFinite(r[0]) && r[1] > 0; }), T = num(target.value);
        var r = isFinite(T) ? C.aslt(pts.map(function (q) { return q[0]; }), pts.map(function (q) { return q[1]; }), T) : null;
        if (!r) return replace(out, [verdict('info', 'Zadajte aspoň dve merania pri rôznych teplotách a cieľovú teplotu.')]);
        var temps = pts.map(function (q) { return q[0]; }).concat([T]), lo = Math.min.apply(null, temps) - 3, hi = Math.max.apply(null, temps) + 3;
        var ys = pts.map(function (q) { return q[1]; }).concat([r.life, r.predict(lo), r.predict(hi)]);
        var yLo = Math.min.apply(null, ys) * 0.8, yHi = Math.max.apply(null, ys) * 1.25, ticks = [], e;
        for (e = Math.floor(Math.log(yLo) / Math.LN10); e <= Math.ceil(Math.log(yHi) / Math.LN10); e++) [1, 2, 5].forEach(function (k) { var v = k * Math.pow(10, e); if (v >= yLo * 0.999 && v <= yHi * 1.001) ticks.push(v); });
        var p = plot({ x: [lo, hi], y: [yLo, yHi], yLog: true, yTicks: ticks, yFmt: function (v) { return fmtSig(v).replace(/,0+$/, ''); }, xFmt: function (v) { return fmt(v, 0); }, xTitle: 'teplota skladovania (°C)', yTitle: 'trvanlivosť (dni, log)', label: 'Trvanlivosť podľa teploty s Arrheniusovým modelom' });
        var line = [];
        for (var i = 0; i <= 40; i++) { var t = lo + (hi - lo) * i / 40; line.push((i ? 'L' : 'M') + p.X(t).toFixed(1) + ' ' + p.Y(r.predict(t)).toFixed(1)); }
        p.el.appendChild(s('path', { d: line.join(''), fill: 'none', stroke: SERIES[0], 'stroke-width': 2, 'stroke-linecap': 'round' }));
        pts.forEach(function (q) { p.el.appendChild(dot(p, q[0], q[1], SERIES[0], fmt(q[0], 0) + ' °C: ' + fmtSig(q[1]) + ' dní (merané)')); });
        p.el.appendChild(tip(s('circle', { cx: p.X(T), cy: p.Y(r.life), r: 6, fill: '#fff', stroke: SERIES[1], 'stroke-width': 3 }), fmt(T, 0) + ' °C: ' + fmtSig(r.life) + ' dní (odhad)'));
        p.el.appendChild(s('text', { x: p.X(T) + 11, y: p.Y(r.life) - 8, 'font-size': 12, 'font-weight': 600, fill: INK, text: 'odhad ' + fmtSig(r.life) + ' dní' }));
        replace(out, [tiles([
          ['Trvanlivosť pri ' + fmt(T, 0) + ' °C', fmtSig(r.life) + ' dní', 'Arrheniusov model'],
          ['Q10', fmt(r.q10, 2), 'o 10 °C vyššia teplota skracuje trvanlivosť ' + fmt(r.q10, 1) + '×'],
          ['Aktivačná energia Ea', fmt(r.ea, 1) + ' kJ/mol'],
          ['R² modelu', pts.length > 2 ? fmt(r.r2, 3) : '–', pts.length > 2 ? '' : 'dva body určujú priamku presne']
        ]),
        r.extrapolated ? verdict('info', 'Cieľová teplota leží mimo meraného rozsahu – odhad je extrapolácia a treba ho overiť skladovaním v reálnych podmienkach.') : null,
        r.q10 < 1 ? verdict('no', 'Q10 < 1: trvanlivosť s teplotou rastie. Proces nie je arrheniovský (napr. starnutie chleba) a model sa naň nehodí.') : null,
        figure(p.el, 'Body = merania, krivka = Arrheniusov model, krúžok = odhad pre cieľovú teplotu.'),
        note('ln(trvanlivosť) = a + (Ea/R)·(1/T), T v kelvinoch, R = 8,314 J/(mol·K). Q10 je odhadnuté z regresie ln(trvanlivosť) na teplote v °C.')]);
      }
      target.addEventListener('input', calc);
      replace(root, [g.el, h('div', { class: 'sc-form' }, [field('Cieľová teplota (°C)', target)]), out]);
      calc();
    }
  };

  // ---- 11 Descriptive statistics and t-test ----------------------------------
  CALCS.statistika = {
    title: 'Popisná štatistika a porovnanie dvoch vzoriek',
    lead: 'Vložte hodnotenia (oddelené medzerou, bodkočiarkou alebo novým riadkom – možno skopírovať stĺpec z Excelu).',
    build: function (root) {
      function parse(text) {
        var toks = text.trim().split(/[\s;]+/), vals = [];
        toks.forEach(function (t) {
          if (!t) return;
          var parts = (t.match(/,/g) || []).length > 1 || /\./.test(t) ? t.split(',') : [t];
          parts.forEach(function (q) { if (q !== '') vals.push(num(q)); });
        });
        return vals;
      }
      var ta = h('textarea', { rows: 4, 'aria-label': 'Hodnoty vzorky A', text: '7 8 6 7 9 8 7 6 8 7' });
      var tb = h('textarea', { rows: 4, 'aria-label': 'Hodnoty vzorky B', text: '6 7 5 6 7 6 7 5 6 6' });
      var kind = select([['welch', 'dve nezávislé skupiny (Welchov t-test)'], ['paired', 'tí istí hodnotitelia (párový t-test)']], 'paired'), out = h('div');
      function calc() {
        var A = parse(ta.value), B = parse(tb.value);
        if (A.concat(B).some(function (v) { return !isFinite(v); })) return replace(out, [verdict('no', 'Niektorú hodnotu sa nepodarilo prečítať ako číslo.')]);
        if (A.length < 2) return replace(out, [verdict('info', 'Zadajte aspoň dve hodnoty vzorky A.')]);
        var sets = [['Vzorka A', C.describe(A)]];
        if (B.length >= 2) sets.push(['Vzorka B', C.describe(B)]);
        var col = function (f) { return sets.map(function (q) { return f(q[1]); }); };
        var kids = [table([''].concat(sets.map(function (q) { return q[0]; })), [
          ['Počet n'].concat(col(function (d) { return String(d.n); })),
          ['Priemer x̄'].concat(col(function (d) { return fmt(d.mean, 3); })),
          ['Smerodajná odchýlka s'].concat(col(function (d) { return fmt(d.sd, 3); })),
          ['Stredná chyba priemeru'].concat(col(function (d) { return fmt(d.se, 3); })),
          ['Variačný koeficient'].concat(col(function (d) { return pct(d.cv); })),
          ['95 % interval spoľahlivosti'].concat(col(function (d) { return fmt(d.lo, 2) + ' – ' + fmt(d.hi, 2); }))
        ], 'sc-result')];
        if (B.length >= 2) {
          var paired = kind.value === 'paired';
          if (paired && A.length !== B.length) kids.push(verdict('no', 'Párový test vyžaduje rovnaký počet hodnôt v rovnakom poradí hodnotiteľov (A: ' + A.length + ', B: ' + B.length + ').'));
          else {
            var t = C.tTest(A, B, paired);
            if (!t) kids.push(verdict('info', 'Rozdiel nemožno testovať – hodnoty nemajú žiadnu variabilitu.'));
            else kids.push(tiles([
              ['Rozdiel priemerov A − B', fmt(t.diff, 3), '95 % IS: ' + fmt(t.lo, 2) + ' – ' + fmt(t.hi, 2)],
              ['t', fmt(t.t, 3), 'df = ' + fmt(t.df, paired ? 0 : 1)], ['p-hodnota', fmtP(t.p), 'obojstranný test']
            ]), verdict(t.p <= 0.05 ? 'yes' : 'no', t.p <= 0.05 ? 'Priemery sa významne líšia (p ≤ 0,05).' : 'Rozdiel priemerov sa nepreukázal (p > 0,05).'));
          }
        }
        kids.push(note('IS = x̄ ± t(0,975; n−1) · s/√n. Pre viac než dve vzorky použite ANOVA (kalkulátor v kapitole Deskriptívne profily).'));
        replace(out, kids);
      }
      [ta, tb, kind].forEach(function (e) { e.addEventListener('input', calc); });
      replace(root, [h('div', { class: 'sc-form sc-form-wide' }, [field('Vzorka A', ta), field('Vzorka B (nepovinné)', tb)]),
        h('div', { class: 'sc-form' }, [field('Porovnanie', kind, null, true)]), out]);
      calc();
    }
  };

  // ===================================================================
  // Styles and mounting
  // ===================================================================
  var CSS = [
    '.sap-calc{--sc-ink:#16302c;--sc-soft:#4b5f5a;--sc-line:#e2e3da;--sc-line2:#cfd4cb;--sc-brand:#0f5c55;--sc-strong:#0b3d38;--sc-tint:#e4efec;--sc-alt:#f4f6f3;--sc-warm:#fbf2de;',
    'font:16px/1.5 Inter,"Segoe UI",system-ui,sans-serif;color:var(--sc-ink);text-align:left;max-width:none}',
    '.reveal .sap-calc{font-size:19px}',
    '.sap-calc *{box-sizing:border-box}',
    '.sap-calc .sc-title{font:600 1.2em/1.3 "Source Serif 4",Georgia,serif;color:var(--sc-strong);margin:0 0 4px}',
    '.sap-calc .sc-lead{color:var(--sc-soft);font-size:.92em;margin:0 0 16px;max-width:80ch}',
    '.sap-calc .sc-form{display:grid;grid-template-columns:repeat(auto-fill,minmax(180px,1fr));gap:12px 16px;margin:0 0 16px;align-items:start}',
    '.sap-calc .sc-form-wide{grid-template-columns:repeat(auto-fit,minmax(260px,1fr))}',
    '.sap-calc .sc-field{display:flex;flex-direction:column;gap:4px;margin:0}',
    '.sap-calc .sc-wide{grid-column:span 2}',
    '@media (max-width:480px){.sap-calc .sc-wide{grid-column:auto}}',
    '.sap-calc .sc-label{font-size:.8em;font-weight:600;color:var(--sc-strong)}',
    '.sap-calc .sc-hint{font-size:.74em;color:var(--sc-soft)}',
    '.sap-calc .sc-check{display:flex;align-items:center;gap:8px;font-size:.88em;padding-top:1.9em}',
    '.sap-calc input,.sap-calc select,.sap-calc textarea{font:inherit;font-size:.95em;color:var(--sc-ink);background:#fff;border:1px solid var(--sc-line2);border-radius:8px;padding:7px 10px;width:100%;min-width:0;margin:0;min-height:2.4em}',
    '.sap-calc input[type=checkbox]{width:18px;height:18px;min-height:0;padding:0;flex:none;accent-color:var(--sc-brand)}',
    '.sap-calc textarea{resize:vertical;font-family:"JetBrains Mono",Consolas,monospace;font-size:.88em}',
    '.sap-calc input:focus-visible,.sap-calc select:focus-visible,.sap-calc textarea:focus-visible,.sap-calc button:focus-visible{outline:2px solid #c98a1b;outline-offset:1px}',
    '.sap-calc .sc-scroll{overflow-x:auto;margin:0 0 12px;border:1px solid var(--sc-line);border-radius:10px;background:#fff}',
    '.sap-calc.sap-calc .sc-table{width:100%;border-collapse:collapse;margin:0;font-size:.9em;font-variant-numeric:tabular-nums;background:#fff;box-shadow:none;border-radius:0}',
    '.sap-calc.sap-calc .sc-table th,.sap-calc.sap-calc .sc-table td{padding:6px 10px;border:0;border-radius:0;border-bottom:1px solid var(--sc-line);text-align:right;vertical-align:middle;background:#fff;color:var(--sc-ink);font-size:1em;text-transform:none;letter-spacing:0;white-space:nowrap}',
    '.sap-calc.sap-calc .sc-table thead th{background:var(--sc-alt);color:var(--sc-strong);font-weight:600;border-bottom:1px solid var(--sc-line2)}',
    '.sap-calc.sap-calc .sc-table th:first-child{text-align:left;font-weight:600;color:var(--sc-strong)}',
    '.sap-calc.sap-calc .sc-table tr:last-child>*{border-bottom:0}',
    '.sap-calc.sap-calc .sc-table tbody tr:last-child>*{border-bottom:1px solid var(--sc-line)}',
    '.sap-calc.sap-calc .sc-table tbody:last-child tr:last-child>*{border-bottom:0}',
    '.sap-calc.sap-calc .sc-table .sc-out,.sap-calc.sap-calc .sc-table tfoot th{background:var(--sc-tint);font-weight:600}',
    '.sap-calc.sap-calc .sc-result td{white-space:normal}',
    '.sap-calc.sap-calc .sc-data{width:auto;min-width:0}',
    '.sap-calc.sap-calc .sc-data td,.sap-calc.sap-calc .sc-data thead th:not(:first-child){padding:4px 6px;text-align:center}',
    '.sap-calc.sap-calc .sc-data .sc-out{padding:6px 14px}',
    '.sap-calc .sc-data td input{width:4.6em;text-align:center;padding:5px 4px;min-height:0}',
    '.sap-calc .sc-head-input{width:5.2em;text-align:center;padding:5px 4px;font-weight:600;min-height:0}',
    '.sap-calc .sc-head-input[type=text]{width:7.5em}',
    '.sap-calc .sc-row-input{width:9em;padding:5px 8px;font-weight:600;min-height:0}',
    '.sap-calc .sc-toggle{width:2.4em;height:2.2em;border-radius:8px;border:1px solid var(--sc-line2);background:#fff;color:var(--sc-soft);font:inherit;font-weight:700;cursor:pointer;padding:0}',
    '.sap-calc .sc-toggle[aria-pressed=true]{background:var(--sc-brand);border-color:var(--sc-brand);color:#fff}',
    '.sap-calc .sc-ctrls{display:flex;flex-wrap:wrap;gap:8px;margin:0 0 16px}',
    '.sap-calc .sc-btn{font:inherit;font-size:.85em;font-weight:600;padding:7px 14px;border-radius:8px;border:1px solid var(--sc-brand);background:var(--sc-brand);color:#fff;cursor:pointer}',
    '.sap-calc .sc-btn-ghost{background:#fff;color:var(--sc-brand);border-color:var(--sc-line2)}',
    '.sap-calc .sc-btn:hover{background:var(--sc-strong);color:#fff}',
    '.sap-calc .sc-btn:disabled{opacity:.4;cursor:default;background:#fff;color:var(--sc-soft)}',
    '.sap-calc .sc-tiles{display:grid;grid-template-columns:repeat(auto-fit,minmax(170px,1fr));gap:10px;margin:0 0 12px}',
    '.sap-calc .sc-tile{background:var(--sc-alt);border:1px solid var(--sc-line);border-radius:10px;padding:10px 14px}',
    '.sap-calc .sc-tile-label{font-size:.76em;font-weight:600;color:var(--sc-soft)}',
    '.sap-calc .sc-tile-value{font-size:1.45em;font-weight:600;color:var(--sc-strong);line-height:1.25;font-variant-numeric:tabular-nums}',
    '.sap-calc .sc-tile-note{font-size:.74em;color:var(--sc-soft)}',
    '.sap-calc .sc-verdict{display:flex;gap:10px;align-items:flex-start;padding:10px 14px;border-radius:10px;margin:0 0 10px;font-size:.92em;border:1px solid var(--sc-line);background:#fff}',
    '.sap-calc .sc-icon{flex:none;width:1.5em;height:1.5em;border-radius:50%;display:grid;place-items:center;font-weight:700;font-size:.85em;color:#fff;background:var(--sc-soft)}',
    '.sap-calc .sc-yes{background:var(--sc-tint);border-color:#bfd9d3}.sap-calc .sc-yes .sc-icon{background:var(--sc-brand)}',
    '.sap-calc .sc-no{background:var(--sc-warm);border-color:#ecd9a8}.sap-calc .sc-no .sc-icon{background:#9a6408}',
    '.sap-calc .sc-note,.sap-calc .sc-unit{font-size:.8em;color:var(--sc-soft);margin:4px 0 0;max-width:90ch}',
    '.sap-calc .sc-unit{margin:0 0 8px}',
    '.sap-calc .sc-figure{margin:4px 0 12px;padding:0}',
    '.sap-calc .sc-chart{display:block;width:100%;max-width:640px;height:auto;font-family:inherit}',
    '.sap-calc figcaption{font-size:.8em;color:var(--sc-soft);max-width:640px;margin:2px 0 0;text-align:left}',
    '.sap-calc .sc-legend{display:flex;flex-wrap:wrap;gap:4px 16px;font-size:.82em;color:var(--sc-ink);margin:0 0 4px}',
    '.sap-calc .sc-legend span{display:inline-flex;align-items:center;gap:6px}',
    '.sap-calc .sc-legend i{width:12px;height:12px;border-radius:3px;display:inline-block}',
    '@media print{.sap-calc .sc-ctrls{display:none}}'
  ].join('\n');

  function mount(el) {
    var def = CALCS[el.getAttribute('data-sap-calc')];
    if (!def || el.getAttribute('data-sap-ready')) return;
    el.setAttribute('data-sap-ready', '1');
    el.classList.add('sap-calc');
    var body = h('div');
    replace(el, [h('div', { class: 'sc-title', role: 'heading', 'aria-level': '3', text: def.title }), h('div', { class: 'sc-lead', text: def.lead }), body]);
    def.build(body);
  }

  function init() {
    if (!document.getElementById('sap-calc-css')) document.head.appendChild(h('style', { id: 'sap-calc-css', text: CSS }));
    Array.prototype.forEach.call(document.querySelectorAll('[data-sap-calc]'), mount);
  }

  API.init = init;
  API.list = Object.keys(CALCS).map(function (k) { return [k, CALCS[k].title]; });
  window.SAPCalc = API;
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init); else init();
})();
