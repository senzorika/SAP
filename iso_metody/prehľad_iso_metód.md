# Prehľad ISO metód pre senzorickú analýzu

## 1. Prehľad ISO standardov

### 1.1 Hlavné ISO standardy pre senzorickú analýzu

| ISO Štandard | Názov | Rok | Hlavný účel |
|---|---|---|---|
| ISO 8586:2012 | Výber a tréning hodnotiteľov | 2012 | Kvalifikácia a tréning senzorických panelistov |
| ISO 13299:2016 | Metodológia senzorickej analýzy | 2016 | Všeobecná metodológia a návody pre senzorické testovanie |
| ISO 4120:2004 | Trojuholníkový test | 2004 | Rozlišovanie dvoch produktov pomocou trojice vzoriek |
| ISO 5495:2005 | Párový porovnávací test | 2005 | Rozlišovanie dvoch produktov pomocou páru vzoriek |
| ISO 10399:2004 | Duo-trio test | 2004 | Rozlišovanie dvoch produktov s referenčnou vzorkou |
| ISO 4121:2003 | Škála intenzity | 2003 | Použitie škál intenzity v senzorickom hodnotení |
| ISO 11035:1994 | Identifikácia deskriptorov | 1994 | Výber a identifikácia deskriptorov pre profilovú analýzu |
| ISO 11036:1994 | Textúrna profilová analýza | 1994 | Metodológia hodnotenia textúry potravín |
| ISO 11037:1999 | Vnímanie textúry | 1999 | Vzájemné vzťahy medzi senzorickými a fyzikálnymi meraniami textúry |
| ISO 16779:2015 | Časovo intenzívna analýza | 2015 | Meranie intenzity senzorických atribútov v čase |
| ISO 11136:2014 | Spotrebiteľské testy | 2014 | Metodológia testovania prijatia produktov spotrebiteľmi |
| ISO 16741:2015 | Shelf-life testy | 2015 | Stanovenie trvanlivosti potravín senzorickými metódami |
| ISO 20784:2005 | Rýchla senzorická profilová analýza | 2005 | Rýchle metódy profilového hodnotenia |
| ISO 22308:2005 | Senzorické metódy pre kávu | 2005 | Špecifické senzorické metódy pre hodnotenie kávy |
| ISO 11036:2021 | Textúrna profilová analýza (aktualizovaná) | 2021 | Aktualizovaná verzia textúrnych profilových metód |

### 1.2 Doplnkové ISO standardy

| ISO Štandard | Názov | Rok | Hlavný účel |
|---|---|---|---|
| ISO 5492:2008 | Senzorická terminológia | 2008 | Definície senzorických pojmov |
| ISO 6658:2005 | Metodológia senzorickej analýza — Všeobecné usmernenia | 2005 | Základné usmernenia pre senzorické testovanie |
| ISO 11035:1994 | Identifikácia deskriptorov | 1994 | Výber deskriptorov pre senzorické profily |
| ISO 16741:2015 | Stanovenie trvanlivosti | 2015 | Senzorické aspekty stanovenia trvanlivosti |
| ISO 20784:2005 | Rýchle senzorické metódy | 2005 | Profilové metódy pre rýchle hodnotenie |

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
| 36 | 17 |
| 48 | 21 |
| 60 | 25 |

**Interpretácia:**
- Ak počet správnych odpovedí ≥ kritická hodnota → produkty sa signifikantne líšia
- Ak počet správnych odpovedí < kritická hodnota → produkty sa nedajú rozlišovať

**Výhody:**
- Jednoduchý na pochopenie
- Náročný na panelistov (dobrá senzorická citlivosť)
- Štatisticky efektívny

**Nevýhody:**
- Vyžaduje trénovaných panelistov
- Náročný na organizáciu (6 podávaní pre plný dizajn)
- Panelista môže byť zmätený

---

### 2.2 Duo-trio Test

**Princíp:** Panelista dostane referenčnú vzorku a dve neznáme vzorky (jedna rovná referencii, jedna odlišná). Úlohou je identifikovať vzorku, ktorá sa líši od referencie.

**Postup:**
1. Podáva sa referenčná vzorka (R)
2. Následne dve vzorky (jedna = R, jedna ≠ R)
3. Panelista identifikuje odlišnú vzorku

**Výpočet:**

```
H0: p = 1/2 (náhodná voľba)
H1: p > 1/2 (schopnosť rozlišovať)

Kritické hodnoty (α = 0.05):
```

| n (panelistov) | Kritická hodnota (min. správnych) |
|---|---|
| 10 | 8 |
| 15 | 11 |
| 20 | 13 |
| 25 | 16 |
| 30 | 18 |
| 36 | 21 |
| 48 | 27 |
| 60 | 33 |

**Výhody:**
- Jednoduchšie na pochopenie ako trojuholníkový test
- Menej náročný na panelistov
- Vhodný pre menej zkušené panely

**Nevýhody:**
- Menej statisticky efektívny ako trojuholníkový test
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

| n (panelistov) | Dolná kritická | Horná kritická |
|---|---|---|
| 20 | 6 | 14 |
| 30 | 10 | 20 |
| 40 | 13 | 27 |
| 50 | 16 | 34 |
| 60 | 19 | 41 |

**Výhody:**
- Veľmi jednoduchý
- Rýchly
- Vhodný pre screening

**Nevýhody:**
- Poskytuje len informáciu o tom, ktorý produkt je intenzívnejší
- Neposkytuje informáciu o veľkosti rozdielu
- Menej citlivý ako iné rozlišovacie testy

---

### 2.4 "A" - "nie A" Test

**Princíp:** Panelista dostane vzorku a rozhodne, či podobá vzorke "A" alebo nie.

**Postup:**
1. Panelista sa naučí referenčnú vzorku "A"
2. Podáva sa vzorka a panelista rozhodne: "A" alebo "nie A"
3. Výsledky sa vyhodnotia pomocou binomického rozdelenia

**Výpočet:**

```
H0: p = 1/2 (náhodná voľba)
H1: p > 1/2 (správne rozpoznanie)

Kritické hodnoty (α = 0.05):
```

| n (panelistov) | Kritická hodnota (min. správnych) |
|---|---|
| 10 | 8 |
| 15 | 11 |
| 20 | 13 |
| 25 | 16 |
| 30 | 18 |
| 36 | 21 |
| 48 | 27 |
| 60 | 33 |

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
1. Podáva sa dve vzorky (rovnaké alebo odlišné)
2. Panelista rozhodne: "rovnaké" alebo "odlišné"
3. Výsledky sa vyhodnotia pomocou štatistického testu

**Výpočet:**

```
Používa sa chi-square test alebo binomické rozdelenie

H0: p = 1/2 (náhodná voľba)
H1: p ≠ 1/2 (schopnosť rozlišovať)

Kritické hodnoty (α = 0.05):
```

| n (panelistov) | Kritická hodnota (min. správnych) |
|---|---|
| 10 | 8 |
| 15 | 11 |
| 20 | 13 |
| 25 | 16 |
| 30 | 18 |
| 36 | 21 |
| 48 | 27 |
| 60 | 33 |

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
- Jednoduchá na použitie

**Nevýhody:**
- Vyžaduje trénovaných panelistov
- Subjektívne hranice
- Menej vhodná pre deskriptívne atribúty

---

### 2.10 Hedonická škála (9-bodová)

**Princíp:** Panelista vyjadruje mieru prijatia produktu na 9-bodovej škále.

**Škála:**

| Hodnotenie | Popis |
|---|---|
| 9 | Výnimočne sa mi páči |
| 8 | Veľmi sa mi páči |
| 7 | Mierne sa mi páči |
| 6 | Trochu sa mi páči |
| 5 | Ani sa mi páči, ani sa mi nepáči |
| 4 | Trochu sa mi nepáči |
| 3 | Mierne sa mi nepáči |
| 2 | Veľmi sa mi nepáči |
| 1 | Výnimočne sa mi nepáči |

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
| Párový porovnávací test | 1/2 |
| "A" - "nie A" test | 1/2 |
| Test rovnakosti | 1/2 |
| Tetrad test | 1/3 |

### 3.2 Kritické hodnoty pre rôzne úrovne významnosti

**Trojuholníkový test (p = 1/3):**

| n | α = 0.10 | α = 0.05 | α = 0.01 |
|---|---|---|---|
| 10 | 6 | 7 | 8 |
| 15 | 8 | 9 | 11 |
| 20 | 10 | 11 | 13 |
| 25 | 12 | 13 | 15 |
| 30 | 13 | 15 | 17 |
| 36 | 15 | 17 | 19 |
| 48 | 19 | 21 | 24 |
| 60 | 23 | 25 | 28 |

**Duo-trio test (p = 1/2):**

| n | α = 0.10 | α = 0.05 | α = 0.01 |
|---|---|---|---|
| 10 | 7 | 8 | 9 |
| 15 | 10 | 11 | 12 |
| 20 | 12 | 13 | 15 |
| 25 | 14 | 16 | 17 |
| 30 | 16 | 18 | 20 |
| 36 | 19 | 21 | 23 |
| 48 | 25 | 27 | 29 |
| 60 | 30 | 33 | 36 |

### 3.3 Výpočet počtu panelistov

**Vzorec pre binomické rozdelenie:**

```
n = (Zα/2)² × p × (1-p) / E²

Kde:
- Zα/2 = kritická hodnota z-rozdelenia (1.96 pre α = 0.05)
- p = očakávaná pravdepodobnosť správnej odpovedi
- E = požadovaná presnosť (margin of error)
```

**Príklad výpočtu:**

```
Pre trojuholníkový test (p = 0.5, E = 0.1, α = 0.05):
n = (1.96)² × 0.5 × 0.5 / (0.1)²
n = 3.8416 × 0.25 / 0.01
n = 96.04 ≈ 97 panelistov
```

**Odporúčané počty panelistov:**

| Typ testu | Minimálny počet | Odporúčaný počet |
|---|---|---|
| Trojuholníkový test | 18 | 24-36 |
| Duo-trio test | 16 | 24-36 |
| Párový porovnávací test | 20 | 30-40 |
| "A" - "nie A" test | 16 | 24-36 |
| Test rovnakosti | 16 | 24-36 |
| Tetrad test | 24 | 36-48 |

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
| Zistiť, či sa produkty líšia | Trojuholníkový test | Najcitlivejší rozlišovací test |
| Zistiť, ktorý produkt je intenzívniejší | Párový porovnávací test | Jednoduchý a rýchly |
| Overiť, či sa produkt líši od referencie | Duo-trio test | Vhodný pre porovnanie s referenciou |
| Rýchly screening | "A" - "nie A" test | Náročný na pamäť |
| Overiť konzistenciu | Test rovnakosti | Jednoduchý |
| Porovnať viac produktov | Tetrad test | Efektívny pre viacero produktov |

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

Dôležité je dodržať princípy dobrej senzorickéj praxie (GSP) a zabezpečiť kvalifikáciu a tréning panelistov v súlade s ISO 8586:2012.
