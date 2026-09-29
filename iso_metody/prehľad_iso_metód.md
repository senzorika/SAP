# Prehľad ISO metód pre senzorickú analýzu

## 1. Prehľad ISO standardov

### 1.1 Hlavné ISO standardy pre senzorickú analýzu

> **Poznámka k aktuálnosti (overené 09/2026):** Uvádzame posledné známe vydanie normy. Pred citovaním v protokole vždy over platnosť v [katalógu ISO/TC 34/SC 12](https://www.iso.org/committee/47858/x/catalogue/).

| ISO Štandard | Názov | Hlavný účel |
|---|---|---|
| ISO 8586:2023 | Všeobecné pokyny na výber, výcvik a monitorovanie hodnotiteľov | Kvalifikácia a tréning senzorických panelistov (nahrádza vydanie 2012) |
| ISO 8589:2007 (+Amd 1:2014) | Všeobecné pokyny na navrhovanie senzorických miestností | Senzorické laboratórium, kabíny, osvetlenie |
| ISO 6658:2017 | Metodológia — všeobecné pokyny | Prehľad metód a ich výber |
| ISO 13299:2016 | Metodológia — všeobecné pokyny na zostavenie senzorického profilu | Deskriptívna (profilová) analýza |
| ISO 4120:2021 | Trojuholníkový test | Rozlišovanie dvoch produktov (trojica vzoriek) |
| ISO 5495:2005 (+Amd 1:2016) | Párový porovnávací test | Smerový rozdiel / preferencia medzi dvoma vzorkami |
| ISO 10399:2017 | Duo-trio test | Rozlišovanie dvoch produktov s referenčnou vzorkou |
| ISO 8588:2017 | Test „A" – „nie A" | Rozlišovanie pri nemožnosti priameho porovnania |
| ISO 8587:2006 (+Amd 1:2013) | Poradový test (ranking) | Zoradenie vzoriek podľa intenzity / preferencie |
| ISO 4121:2003 | Pokyny na používanie kvantitatívnych škál odpovedí | Škály intenzity |
| ISO 11035:1994 | Identifikácia a výber deskriptorov (multidimenzionálny prístup) | Výber deskriptorov pre profil (starší dokument; over platnosť) |
| ISO 11036:2020 | Profil textúry | Metodológia hodnotenia textúry potravín |
| ISO 11037:2011 | Hodnotenie farby potravín | Vizuálne hodnotenie farby, osvetlenie |
| ISO 11132:2021 | Pokyny na meranie výkonnosti kvantitatívneho deskriptívneho panelu | Diskriminácia, zhoda a opakovateľnosť panelu |
| ISO 11136:2014 (+Amd 1:2020) | Všeobecné pokyny na vykonávanie hedonických testov | Spotrebiteľské testy prijatia |
| ISO 13301:2018 | Metódy stanovenia prahov (3-AFC) | Detekčné prahy vôní, chutí |
| ISO 16779:2015 | Hodnotenie (stanovenie a overenie) trvanlivosti potravín | Senzorická trvanlivosť (shelf-life) |
| ISO 16820:2019 | Sekvenčná analýza | Sekvenčné rozlišovacie testy |
| ISO 29842:2011 | Vyvážené neúplné blokové usporiadania | Dizajn pri veľkom počte vzoriek |
| ISO 22308-1:2021 | Korok — senzorické hodnotenie (nahrádza ISO 22308:2005) | Cudzie pachy korkových zátok (nie káva) |

### 1.2 Doplnkové ISO / ASTM dokumenty

| Dokument | Názov | Hlavný účel |
|---|---|---|
| ISO 5492:2008 (+Amd 2016) | Senzorická terminológia | Definície senzorických pojmov |
| ISO 3972:2011 | Metóda skúmania citlivosti chuti | Skríning hodnotiteľov |
| ISO 5496:2006 | Iniciácia a výcvik hodnotiteľov v detekcii a rozpoznávaní vôní | Tréning čuchu |
| ASTM E1885 | Triangle test (ASTM) | Alternatíva k ISO 4120 |
| ASTM E3009 | Tetrad test | Tetrádový test (ISO norma pre tetrádu neexistuje) |
| ASTM E1958 | Sensory claim substantiation | Senzorické tvrdenia |

> ⚠️ **Opravy oproti predošlej verzii:** „ISO 16741:2015 (shelf-life)" a „ISO 20784:2005 (rýchle profily)" sa v katalógu ISO nenachádzajú; normou pre senzorickú trvanlivosť je **ISO 16779:2015** (nie časovo-intenzitná analýza — pre T-I samostatná ISO norma neexistuje). **ISO 22308** sa týka korkových zátok, nie kávy. **ISO 11037** rieši farbu, nie textúru.

---

## 2. Detailný popis kľúčových metód

### 2.1 Trojuholníkový test (Triangle Test)

**Princíp:** Panelista dostane tri vzorky, z ktorých sú dve rovnaké a jedna odlišná. Úlohou je identifikovat odlišnú vzorku.

**Postup:**
1. Podáva sa tri vzorky (napr. AAB, ABA, BAA v náhodnom poradí)
2. Panelista identifikuje odlišnú vzorku
3. Výsledky sa vyhodnotia pomocou binomického rozdelenia

**Výpočet:**

```
H0: p = 1/3 (náhodná voľba)
H1: p > 1/3 (schopnosť rozlišovať)

Počet správnych odpovedí: k
Počet panelistov: n

P(X ≥ k) = Σ (n choose i) × p^i × (1-p)^(n-i) pre i = k až n
```

**Kritické hodnoty (α = 0.05):**

| n (panelistov) | Kritická hodnota (min. správnych) |
|---|---|
| 10 | 7 |
| 15 | 9 |
| 20 | 11 |
| 25 | 13 |
| 30 | 15 |
| 36 | 18 |
| 48 | 22 |
| 60 | 27 |

*Presné binomické hodnoty (jednostranný test, p₀ = 1/3), prepočítané; zhodujú sa s ISO 4120:2021.*

**Interpretácia:**
- Ak počet správnych odpovedí ≥ kritická hodnota → produkty sa signifikantne líšia
- Ak počet správnych odpovedí < kritická hodnota → rozdiel **nebol preukázaný** (to nie je dôkaz podobnosti — na ten treba test podobnosti s vopred zvoleným p_d a β, pozri [SaIT cvičenie 13](https://senzorika.github.io/SaIT/teoria/cvicenie13.html))

**Výhody:**
- Jednoduchý na pochopenie
- Nevyžaduje poznať smer rozdielu
- Široko zavedený a normalizovaný

**Nevýhody:**
- Pri danom d′ patrí medzi štatisticky najmenej účinné testy (menej účinný ako tetrad, 2-AFC či 3-AFC)
- Náročný na pamäť a únavu (3 vzorky na pokus)
- Vyvážené poradie vyžaduje 6 permutácií (AAB, ABA, BAA, BBA, BAB, ABB)

> 🧪 **Precvič v R:** binomický test v rozlišovacích skúškach — [SaIT cvičenie 5a](https://senzorika.github.io/SaIT/teoria/cvicenie05a.html) · Thurstonov model a d′ — [cvičenie 13](https://senzorika.github.io/SaIT/teoria/cvicenie13.html)

---

### 2.2 Duo-trio Test

**Princíp:** Panelista dostane referenčnú vzorku a dve neznáme vzorky (jedna rovná referencii, jedna odlišná). Úlohou je identifikovať vzorku, ktorá je **zhodná s referenciou** (ISO 10399:2017).

**Postup:**
1. Podáva sa referenčná vzorka (R)
2. Následne dve vzorky (jedna = R, jedna ≠ R)
3. Panelista určí, ktorá vzorka zodpovedá referencii

**Výpočet:**

```
H0: p = 1/2 (náhodná voľba)
H1: p > 1/2 (schopnosť rozlišovať)

Kritické hodnoty (α = 0.05, jednostranný test):
```

| n (panelistov) | Kritická hodnota (min. správnych) |
|---|---|
| 10 | 9 |
| 15 | 12 |
| 20 | 15 |
| 25 | 18 |
| 30 | 20 |
| 36 | 24 |
| 48 | 31 |
| 60 | 37 |

**Výhody:**
- Jednoduchšie na pochopenie ako trojuholníkový test
- Menej náročný na panelistov
- Vhodný pre menej zkušené panely

**Nevýhody:**
- Pri danom d′ štatisticky približne rovnako málo účinný ako trojuholníkový test (oba potrebujú veľa hodnotiteľov)
- Vyžaduje konzistentnú referenčnú vzorku

---

### 2.3 Párový porovnávací test (Paired Comparison Test)

**Princíp:** Panelista dostane dve vzorky a vyberie tú, ktorá je viac intenzívna v konkrétnom atribute (napr. sladká, kyslá).

**Postup:**
1. Podáva sa dve vzorky (A a B)
2. Panelista vyberie vzorku s vyššou intenzitou zvoleného atribútu
3. Výsledky sa vyhodnotia pomocou binomického rozdelenia

**Výpočet:**

```
H0: p = 1/2 (žiadny rozdiel)
H1: p ≠ 1/2 (existuje rozdiel)

Dvojitý test (two-tailed):
Kritické hodnoty pre α = 0.05:
```

Rozdiel je významný, ak počet hlasov pre jednu vzorku ≤ dolná alebo ≥ horná hodnota (presný binomický test):

| n (panelistov) | Dolná kritická | Horná kritická |
|---|---|---|
| 20 | 5 | 15 |
| 30 | 9 | 21 |
| 40 | 13 | 27 |
| 50 | 17 | 33 |
| 60 | 21 | 39 |

**Výhody:**
- Veľmi jednoduchý
- Rýchly
- Ak je atribút vopred známy, ide (ako 2-AFC) o štatisticky **najúčinnejší** rozlišovací test pri danom d′

**Nevýhody:**
- Poskytuje len informáciu o tom, ktorý produkt je intenzívnejší v jednom atribúte
- Neposkytuje priamo veľkosť rozdielu (tú dá až Thurstonov d′)
- Hodnotitelia musia rovnako rozumieť atribútu

---

### 2.4 "A" - "nie A" Test

**Princíp:** Panelista sa oboznámi so vzorkou „A". Potom dostáva sériu vzoriek (A aj „nie A") a pri každej rozhodne, či ide o „A" alebo „nie A" (ISO 8588:2017).

**Postup:**
1. Panelista sa naučí referenčnú vzorku "A"
2. Podávajú sa vzorky A aj „nie A" v náhodnom poradí; panelista rozhodne: "A" alebo "nie A"
3. Výsledky sa zapíšu do tabuľky 2 × 2 (skutočná vzorka × odpoveď)

**Výpočet:**

```
Tabuľka 2 × 2:           odpoveď "A"   odpoveď "nie A"
  podaná vzorka A            n11            n12
  podaná vzorka nie A        n21            n22

H0: podiel odpovedí "A" je rovnaký pre obe vzorky
- rôzni hodnotitelia na každú vzorku → Pearsonov χ² test (1 df) alebo Fisherov test
- každý hodnotiteľ hodnotí obe vzorky → McNemarov test
Veľkosť rozdielu: d′ = z(H) − z(F), H = n11/(n11+n12), F = n21/(n21+n22)
```

> ⚠️ Predošlá verzia uvádzala binomický test s p = 1/2 a tabuľku kritických hodnôt. To je nesprávne — pravdepodobnosť odpovede „A" závisí od kritéria hodnotiteľa, preto sa porovnávajú dva podiely (ISO 8588).

**Výhody:**
- Jednoduchý
- Vhodný pre rýchle testovanie
- Menej náročný na panelistov

**Nevýhody:**
- Menej statisticky efektívny
- Vyžaduje dobrú pamäť panelistov
- Výsledky závisia na kvalite referencie

---

### 2.5 Test rovnakosti (Same-Different Test)

**Princíp:** Panelista dostane dve vzorky a rozhodne, či sú rovnaké alebo odlišné.

**Postup:**
1. Podávajú sa páry rovnakých (AA, BB) aj odlišných (AB, BA) vzoriek
2. Panelista rozhodne: "rovnaké" alebo "odlišné"
3. Porovná sa podiel odpovedí „odlišné" pri odlišných a pri rovnakých pároch

**Výpočet:**

```
H0: podiel odpovedí "odlišné" je rovnaký pre odlišné aj rovnaké páry
Test: χ² test (alebo Fisherov / McNemarov test) na tabuľke 2 × 2
Veľkosť rozdielu: Thurstonov d′ podľa modelu same-different
(napr. funkcia samediff() v R balíku sensR)
```

> ⚠️ Pre tento test neexistuje „náhodná pravdepodobnosť 1/2" ani jednoduchá tabuľka kritických hodnôt — výsledok závisí od toho, ako prísne hodnotiteľ volí „odlišné".

**Výhody:**
- Jednoduchý
- Vhodný pre rýchle testovanie
- Menej náročný na panelistov

**Nevýhody:**
- Menej statisticky efektívny
- Výsledky závisia od stratégie panelistov

---

### 2.6 Škála intenzity (Category Scale)

**Princíp:** Panelista priraďuje intenzitu senzorického atribútu na diskrétnej škále.

**Typy škál:**

| Typ škály | Počet bodov | Príklad |
|---|---|---|
| 3-bodová | 3 | Sladké, stredne sladké, nesladké |
| 5-bodová | 5 | Veľmi slabé, slabé, stredné, silné, veľmi silné |
| 7-bodová | 7 | 1 = veľmi slabé, 7 = veľmi silné |
| 9-bodová | 9 | 1 = veľmi slabé, 9 = veľmi silné |

**Výpočet:**

```
Priemer: x̄ = Σxi / n
Smerodajná odchýlka: s = √(Σ(xi - x̄)² / (n-1))
95% CI: x̄ ± t(0.025, n-1) × s/√n
```

**Výhody:**
- Jednoduchá na použitie
- Rýchla
- Vhodná pre väčšinu senzorických atribútov

**Nevýhody:**
- Obmedzené rozlíšenie
- Subjektívne hranice medzi kategóriami
- Vyžaduje trénovaných panelistov

---

### 2.7 Lineárna škála (Line Scale)

**Princíp:** Panelista označí intenzitu atribútu na kontinuálnej linnej škále.

**Postup:**
1. Škála je obvykle 15 cm dlhá
2. Panelista umiestni značku na škálu
3. Výsledok sa meria v mm od ľavého okraja

**Výpočet:**

```
Priemer: x̄ = Σxi / n
Smerodajná odchýlka: s = √(Σ(xi - x̄)² / (n-1))
95% CI: x̄ ± t(0.025, n-1) × s/√n
```

**Výhody:**
- Väčšia citlivosť ako kategorické škály
- Vhodná pre štatistickú analýzu
- Flexibilná

**Nevýhody:**
- Vyžaduje trénovaných panelistov
- Náročnejšia na vyhodnotenie
- Menej intuitívna pre panelistov

---

### 2.8 Semantická diferenciálna škála (Semantic Differential Scale)

**Princíp:** Panelista hodnotí produkt pomocou bipolárnych adjektív na škále.

**Príklad:**

```
Nepríjemné  1 — 2 — 3 — 4 — 5 — 6 — 7  Príjemné
Slabé       1 — 2 — 3 — 4 — 5 — 6 — 7  Silné
Nezaujímavé 1 — 2 — 3 — 4 — 5 — 6 — 7  Zaujímavé
```

**Výpočet:**

```
Priemer pre každý atribút: x̄ = Σxi / n
Analýza profilov: porovnanie priemerov medzi produktami
Faktorská analýza: identifikácia hlavných dimenzií
```

**Výhody:**
- Vhodná pre spotrebiteľské testy
- Jednoduchá na pochopenie
- Poskytuje holistický obraz

**Nevýhody:**
- Subjektívne interpretácie adjektív
- Kultúrne závislé
- Menej vhodná pre technické atribúty

---

### 2.9 Just-About-Right (JAR) škála

**Princíp:** Panelista hodnotí, či je intenzita atribútu príliš nízka, príliš vysoká, alebo práve správna.

**Škála:**

```
1 = Príliš nízka (Príliš málo)
2 = Trochu nízka
3 = Práve správna (Just About Right)
4 = Trochu vysoká
5 = Príliš vysoká (Príliš veľa)
```

**Výpočet:**

```
% JAR = (počet odpovedí "3") / n × 100
% Príliš nízka = (počet odpovedí "1" + "2") / n × 100
% Príliš vysoká = (počet odpovedí "4" + "5") / n × 100

Penalizácia (Penalty Analysis):
Priemer liking pre "Príliš nízka" - Priemer liking pre "JAR"
Priemer liking pre "Príliš vysoká" - Priemer liking pre "JAR"
```

**Výhody:**
- Poskytuje informáciu o optimalizácii
- Vhodná pre NPD
- Jednoduchá na použitie — určená pre **spotrebiteľov**, nie trénovaný panel

**Nevýhody:**
- Kombinuje intenzitu a hodnotenie v jednej otázke (môže ovplyvniť hedonické odpovede)
- Penalty analýza vyžaduje súčasne zbierať celkovú obľúbenosť
- Nevhodná pre trénovaný deskriptívny panel

> 🧪 **Precvič v R:** JAR škála a penalty analýza — [SaIT cvičenie 12](https://senzorika.github.io/SaIT/teoria/cvicenie12.html)

---

### 2.10 Hedonická škála (9-bodová)

**Princíp:** Panelista vyjadruje mieru prijatia produktu na 9-bodovej škále.

**Škála:**

| Hodnotenie | Popis |
|---|---|
| 9 | Mimoriadne sa mi páči |
| 8 | Veľmi sa mi páči |
| 7 | Stredne sa mi páči |
| 6 | Trochu sa mi páči |
| 5 | Ani sa mi páči, ani sa mi nepáči |
| 4 | Trochu sa mi nepáči |
| 3 | Stredne sa mi nepáči |
| 2 | Veľmi sa mi nepáči |
| 1 | Mimoriadne sa mi nepáči |

**Výpočet:**

```
Priemer: x̄ = Σxi / n
Smerodajná odchýlka: s = √(Σ(xi - x̄)² / (n-1))
95% CI: x̄ ± t(0.025, n-1) × s/√n

% Prijatie = (počet odpovedí ≥ 6) / n × 100
% Odmietnutie = (počet odpovedí ≤ 4) / n × 100
```

**Výhody:**
- Široko používaná
- Jednoduchá na pochopenie
- Vhodná pre spotrebiteľov
- Umožňuje porovnanie produktov

**Nevýhody:**
- Subjektívne
- Kultúrne závislé
- Neposkytuje informáciu o príčinách

> 🧪 **Precvič v R:** interval spoľahlivosti priemeru — [SaIT cvičenie 2](https://senzorika.github.io/SaIT/teoria/cvicenie02.html) · porovnanie viacerých vzoriek (ANOVA, Friedman, post-hoc) — [cvičenie 5b](https://senzorika.github.io/SaIT/teoria/cvicenie05b.html)

---

## 3. Výpočty a štatistika

### 3.1 Binomické rozdelenie pre rozlišovacie testy

**Všeobecný vzorec:**

```
P(X = k) = C(n,k) × p^k × (1-p)^(n-k)

Kde:
- n = počet panelistov (pokusov)
- k = počet správnych odpovedí
- p = pravdepodobnosť správnej odpovedi pri náhodnej voľbe
- C(n,k) = n! / (k! × (n-k)!)
```

**Pravdepodobnosti náhodnej voľby pre jednotlivé testy:**

| Test | p (náhodná voľba) |
|---|---|
| Trojuholníkový test | 1/3 |
| Duo-trio test | 1/2 |
| Párový porovnávací test (2-AFC) | 1/2 |
| 3-AFC | 1/3 |
| Tetrad test | 1/3 |
| "A" - "nie A" test | — (porovnanie dvoch podielov, χ²/McNemar) |
| Test rovnakosti (same-different) | — (porovnanie dvoch podielov, χ²) |

### 3.2 Kritické hodnoty pre rôzne úrovne významnosti

Presné binomické hodnoty (jednostranný test; minimálny počet správnych odpovedí), prepočítané v Pythone (`scipy.stats.binom`):

**Trojuholníkový test a tetrad (p₀ = 1/3):**

| n | α = 0.10 | α = 0.05 | α = 0.01 |
|---|---|---|---|
| 10 | 6 | 7 | 8 |
| 15 | 8 | 9 | 10 |
| 20 | 10 | 11 | 13 |
| 25 | 12 | 13 | 15 |
| 30 | 14 | 15 | 17 |
| 36 | 17 | 18 | 20 |
| 48 | 21 | 22 | 25 |
| 60 | 26 | 27 | 30 |

**Duo-trio a smerový párový test, jednostranne (p₀ = 1/2):**

| n | α = 0.10 | α = 0.05 | α = 0.01 |
|---|---|---|---|
| 10 | 8 | 9 | 10 |
| 15 | 11 | 12 | 13 |
| 20 | 14 | 15 | 16 |
| 25 | 17 | 18 | 19 |
| 30 | 20 | 20 | 22 |
| 36 | 23 | 24 | 26 |
| 48 | 29 | 31 | 33 |
| 60 | 36 | 37 | 40 |

### 3.3 Výpočet počtu panelistov

Počet hodnotiteľov pre rozlišovací test závisí od **α, β (sila testu) a veľkosti rozdielu**, ktorý chceme odhaliť (p_d — podiel „rozlišujúcich" hodnotiteľov, alebo Thurstonov d′). Vzorec pre šírku intervalu spoľahlivosti (n = z²·p(1−p)/E²) na to **nie je vhodný** — rieši presnosť odhadu, nie silu testu.

**Aproximácia normálnym rozdelením (jednostranný test):**

```
n ≈ [ z_α·√(p₀(1−p₀)) + z_β·√(p₁(1−p₁)) ]² / (p₁ − p₀)²

p₀ = pravdepodobnosť uhádnutia (1/3 alebo 1/2)
p₁ = p₀ + p_d·(1 − p₀)  … očakávaný podiel správnych odpovedí
z_α = 1.645 (α = 0.05), z_β = 0.842 (sila 0.80)
```

**Príklad:** trojuholníkový test, p_d = 25 % → p₁ = 0.50:
n ≈ (1.645·0.471 + 0.842·0.5)² / (0.167)² ≈ 52; presný binomický výpočet dáva **n = 60**.

**Rovnaký senzorický rozdiel (d′ = 1), α = 0.05, sila 0.80 — presný binomický výpočet s Thurstonovým modelom:**

| Test | p_c pri d′ = 1 | Potrebný počet hodnotiteľov |
|---|---|---|
| 2-AFC (smerový párový) | 0.760 | 26 |
| 3-AFC | 0.634 | 22 |
| Tetrad | 0.494 | 65 |
| Trojuholníkový | 0.418 | 220 |
| Duo-trio | 0.582 | 241 |

→ Pri rovnakom senzorickom rozdiele potrebuje trojuholníkový test ~3× viac hodnotiteľov ako tetrad a ~8× viac ako 2-AFC. Orientačné „minimálne počty" (napr. 18–36) preto platia len pre veľké rozdiely.

> 🧪 **Precvič v R:** sila testu a veľkosť panelu — [SaIT cvičenie 14](https://senzorika.github.io/SaIT/teoria/cvicenie14.html) · psychometrické funkcie a d′ — [cvičenie 13](https://senzorika.github.io/SaIT/teoria/cvicenie13.html)

### 3.4 Power Analysis

**Výpočet výkonu testu (Power):**

```
Power = 1 - β = P(zodmietnuť H0 | H1 je pravdivá)

Kde:
- β = pravdepodobnosť chyby druhého druhu
- Power = pravdepodobnosť správneho zamietnutia H0
```

**Faktory ovplyvňujúce power:**

| Faktor | Vplyv na power |
|---|---|
| Počet panelistov (n) | Vyššie n → vyššia power |
| Veľkosť efektu (effect size) | Väčší efekt → vyššia power |
| Úroveň významnosti (α) | Vyššia α → vyššia power |
| Variabilita dát | Nižšia variabilita → vyššia power |

**Odporúčané hodnoty power:**

| Typ štúdie | Minimálna power | Odporúčaná power |
|---|---|---|
| Screeningové testy | 0.70 | 0.80 |
| Konfirmatorné testy | 0.80 | 0.90 |
| Regulačné testy | 0.90 | 0.95 |

---

## 4. Aplikácie — Ktorú metódu použiť v ktorej situácii

### 4.1 Rozhodovací tabuľka

| Situácia | Odporúčaná metóda | Dôvod |
|---|---|---|
| Zistiť, či sa produkty líšia (smer neznámy) | Tetrad alebo trojuholníkový test | Tetrad má pri rovnakom d′ vyššiu silu; trojuholník je normalizovaný (ISO 4120) |
| Zistiť, ktorý produkt je intenzívnejší | Párový porovnávací test (2-AFC) | Najvyššia sila pri známom atribúte |
| Overiť, či sa produkt líši od referencie | Duo-trio test | Vhodný pri známej referencii |
| Vzorky nemožno podať súčasne (napr. výrazná dochuť) | "A" - "nie A" test | Hodnotí sa jedna vzorka naraz |
| Overiť zhodu dvoch vzoriek | Test rovnakosti (same-different) | Nízka záťaž, hodnotí celkovú odlišnosť |
| Viac ako dve vzorky | Poradový test (ISO 8587), škála + ANOVA | Rozlišovacie testy porovnávajú vždy len 2 produkty |

### 4.2 Podľa typu atribútu

| Typ atribútu | Odporúčaná metóda |
|---|---|
| Vôňa | Trojuholníkový test, Duo-trio test |
| Chuť | Párový porovnávací test, Škála intenzity |
| Textúra | Lineárna škála, Textúrna profilová analýza |
| Vzhľad | Škála intenzity, Semantická diferenciálna škála |
| Zvuk | Škála intenzity, Lineárna škála |

### 4.3 Podľa fázy vývoja

| Fáza | Odporúčaná metóda |
|---|---|
| Koncept | Spotrebiteľské testy, Hedonická škála |
| Prototyp | Deskriptívna analýza, QDA |
| Optimalizácia | Response Surface Methodology, JAR škála |
| Validácia | Rozlišovacie testy, Shelf-life testy |
| Produkcia | QC senzorika, Go/No-Go testy |

---

## 5. Záver

ISO štandardy poskytujú robustný rámec pre senzorickú analýzu potravín. Správna voľba metódy závisí od:
- Cieľa testovania (rozlišovanie vs. deskripcia vs. prijatie)
- Typu produktu a atribútov
- Dostupných zdrojov (čas, personál, financie)
- Požadovanej štatististickej sily

Dôležité je dodržať princípy dobrej senzorickej praxe (GSP) a zabezpečiť kvalifikáciu a tréning panelistov v súlade s ISO 8586:2023.

---

## 6. Prepojenie s praktickými cvičeniami v R (SaIT)

Repozitár [senzorika/SaIT](https://github.com/senzorika/SaIT) obsahuje R skripty a teóriu k štatistickému vyhodnoteniu metód z tejto kapitoly:

| Téma v tejto kapitole | Cvičenie SaIT | Skript |
|---|---|---|
| Binomický test, χ², McNemar (rozlišovacie testy, A – nie A) | [5a – Normalita a porovnanie dvoch vzoriek](https://senzorika.github.io/SaIT/teoria/cvicenie05a.html) | [`cvicenie5a.R`](https://github.com/senzorika/SaIT/blob/master/cvicenie5a.R) |
| Hedonické a intenzitné škály — ANOVA, Friedman, post-hoc | [5b – Porovnanie viacerých vzoriek](https://senzorika.github.io/SaIT/teoria/cvicenie05b.html) | [`cvicenie5b.R`](https://github.com/senzorika/SaIT/blob/master/cvicenie5b.R) |
| Neúplné bloky (ISO 29842) | [5d – Durbinov test a BIBD](https://senzorika.github.io/SaIT/teoria/cvicenie05d.html) | [`cvicenie5d.R`](https://github.com/senzorika/SaIT/blob/master/cvicenie5d.R) |
| JAR škála, penalty analýza | [12 – JAR škála a radarový graf](https://senzorika.github.io/SaIT/teoria/cvicenie12.html) | [`cvicenie12.R`](https://github.com/senzorika/SaIT/blob/master/cvicenie12.R) |
| Thurstonov d′, test podobnosti | [13 – Thurstonov model a d′](https://senzorika.github.io/SaIT/teoria/cvicenie13.html) | [`cvicenie13.R`](https://github.com/senzorika/SaIT/blob/master/cvicenie13.R) |
| Sila testu a počet hodnotiteľov | [14 – Sila testu a veľkosť panelu](https://senzorika.github.io/SaIT/teoria/cvicenie14.html) | [`cvicenie14.R`](https://github.com/senzorika/SaIT/blob/master/cvicenie14.R) |
| Výkonnosť panelu (ISO 11132) | [15 – Výkonnosť senzorického panelu](https://senzorika.github.io/SaIT/teoria/cvicenie15.html) | [`cvicenie15.R`](https://github.com/senzorika/SaIT/blob/master/cvicenie15.R) |
