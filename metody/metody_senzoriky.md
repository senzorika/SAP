# Komplexný sprievodca senzorickými metódami

## Obsah

1. [Rozlišovacie testy](#1-rozlišovacie-testy-discrimination-tests)
2. [Deskriptívne metódy](#2-deskriptívne-metódy-descriptive-methods)
3. [Časovo intenzívne metódy](#3-časovo-intenzívne-metódy-time-intensity-methods)
4. [Spotrebiteľské metódy](#4-spotrebiteľské-metódy-consumer-methods)
5. [QC senzorika](#5-qc-senzorika-quality-control-sensory)
6. [NPD senzorika](#6-npd-senzorika-new-product-development-sensory)
7. [Rýchle metódy](#7-rýchle-metódy-rapid-methods)

---

## 1. Rozlišovacie testy (Discrimination tests)

### 1.1 Trojuholníkový test (Triangle Test)

**Princíp:** Panelista dostane tri vzorky, z ktorých sú dve rovnaké a jedna odlišná. Úlohou je identifikovať odlišnú vzorku.

**Špecifikácie:**
- Počet vzoriek: 3
- Pravdepodobnosť náhodnej voľby: 1/3
- Minimálny počet panelistov: 18
- Odporúčaný počet panelistov: 24-36
- Úroveň významnosti: α = 0.05

**Postup:**
1. Pripraviť 6 podávaní (AAB, ABA, BAA, BBA, BAB, ABB) v náhodnom poradí
2. Panelista ochutná vzorky v určenom poradí
3. Identifikuje odlišnú vzorku
4. Výsledky sa vyhodnotia pomocou binomického rozdelenia

**Výpočet:**

```
H0: p = 1/3 (náhodná voľba)
H1: p > 1/3 (schopnosť rozlišovať)

P(X ≥ k) = Σ C(n,i) × (1/3)^i × (2/3)^(n-i) pre i = k až n
```

**Kritické hodnoty (α = 0.05):**

| n | Kritická hodnota |
|---|---|
| 18 | 10 |
| 24 | 12 |
| 30 | 15 |
| 36 | 17 |
| 48 | 21 |
| 60 | 25 |

**Výhody:**
- Najcitlivejší rozlišovací test
- Vyžaduje menej podávaní ako iné testy
- Dobre zavedený a široko akceptovaný

**Nevýhody:**
- Vyžaduje trénovaných panelistov
- Môže byť náročný na pamäť
- Panelista môže byť zmätený

---

### 1.2 Duo-trio Test

**Princíp:** Panelista dostane referenčnú vzorku a dve neznáme vzorky (jedna rovná referencii, jedna odlišná). Úlohou je identifikovať vzorku, ktorá sa líši od referencie.

**Špecifikácie:**
- Počet vzoriek: 3 (1 referenčná + 2 testovacie)
- Pravdepodobnosť náhodnej voľby: 1/2
- Minimálny počet panelistov: 16
- Odporúčaný počet panelistov: 24-36

**Postup:**
1. Podáva sa referenčná vzorka (R)
2. Následne dve vzorky (jedna = R, jedna ≠ R)
3. Panelista identifikuje odlišnú vzorku

**Výpočet:**

```
H0: p = 1/2 (náhodná voľba)
H1: p > 1/2 (schopnosť rozlišovať)

P(X ≥ k) = Σ C(n,i) × (1/2)^n pre i = k až n
```

**Kritické hodnoty (α = 0.05):**

| n | Kritická hodnota |
|---|---|
| 16 | 11 |
| 24 | 15 |
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

### 1.3 Párový porovnávací test (Paired Comparison Test)

**Princíp:** Panelista dostane dve vzorky a vyberie tú, ktorá je viac intenzívna v konkrétnom atribute.

**Špecifikácie:**
- Počet vzoriek: 2
- Pravdepodobnosť náhodnej voľby: 1/2
- Minimálny počet panelistov: 20
- Odporúčaný počet panelistov: 30-40

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

| n | Dolná kritická | Horná kritická |
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
- Poskytuje len informáciu o tom, ktorý produkt je intenzívniejší
- Neposkytuje informáciu o veľkosti rozdielu
- Menej citlivý ako iné rozlišovacie testy

---

### 1.4 "A" - "nie A" Test

**Princíp:** Panelista dostane vzorku a rozhodne, či podobá vzorke "A" alebo nie.

**Špecifikácie:**
- Počet vzoriek: 1 (plus referencia)
- Pravdepodobnosť náhodnej voľby: 1/2
- Minimálny počet panelistov: 16
- Odporúčaný počet panelistov: 24-36

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

| n | Kritická hodnota |
|---|---|
| 16 | 11 |
| 24 | 15 |
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
- Výsledky závisia od kvalite referencie

---

### 1.5 Test rovnakosti (Same-Different Test)

**Princíp:** Panelista dostane dve vzorky a rozhodne, či sú rovnaké alebo odlišné.

**Špecifikácie:**
- Počet vzoriek: 2
- Pravdepodobnosť náhodnej voľby: 1/2
- Minimálny počet panelistov: 16
- Odporúčaný počet panelistov: 24-36

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

| n | Kritická hodnota |
|---|---|
| 16 | 11 |
| 24 | 15 |
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

### 1.6 Tetrad Test

**Princíp:** Panelista dostane štyri vzorky, z ktorých sú dve rovnaké a dve odlišné. Úlohou je rozdeliť ich do dvoch skupín po dvoch.

**Špecifikácie:**
- Počet vzoriek: 4
- Pravdepodobnosť náhodnej voľby: 1/3
- Minimálny počet panelistov: 24
- Odporúčaný počet panelistov: 36-48

**Postup:**
1. Podáva sa štyri vzorky (napr. AABB)
2. Panelista rozdelí ich do dvoch skupín po dvoch
3. Výsledky sa vyhodnotia pomocou binomického rozdelenia

**Výpočet:**

```
H0: p = 1/3 (náhodná voľba)
H1: p > 1/3 (schopnosť rozlišovať)

Kritické hodnoty (α = 0.05):
```

| n | Kritická hodnota |
|---|---|
| 24 | 12 |
| 36 | 17 |
| 48 | 21 |
| 60 | 25 |

**Výhody:**
- Efektívny pre porovnanie viacerých produktov
- Menej podávaní ako trojuholníkový test
- Vhodný pre screening

**Nevýhody:**
- Vyžaduje trénovaných panelistov
- Môže byť náročný na pozornosť
- Menej intuitívny

---

### 1.7 Kedy použiť ktorý test

| Kritérium | Trojuholníkový | Duo-trio | Párový | A-nie A | Rovnakosti | Tetrad |
|---|---|---|---|---|---|---|
| Citlivosť | Vysoká | Stredná | Nízka | Nízka | Nízka | Vysoká |
| Náročnosť na panelistov | Vysoká | Stredná | Nízka | Nízka | Nízka | Vysoká |
| Rýchlosť | Stredná | Stredná | Vysoká | Vysoká | Vysoká | Stredná |
| Vhodnosť pre screening | Nie | Nie | Áno | Áno | Áno | Nie |
| Vhodnosť pre referenciu | Nie | Áno | Nie | Áno | Nie | Nie |
| Počet podávaní | 6 | 6 | 2 | 1 | 2 | 3 |

---

## 2. Deskriptívne metódy (Descriptive methods)

### 2.1 Quantitative Descriptive Analysis (QDA)

**Princíp:** Trénovaní panelisti kvantifikujú intenzitu jednotlivých senzorických atribútov na škále.

**Špecifikácie:**
- Počet panelistov: 8-12
- Dĺžka tréningu: 60-90 hodín
- Počet atribútov: 10-30
- Typ škály: Lineárna (15 cm)

**Postup:**
1. Výber a tréning panelistov (ISO 8586)
2. Generovanie deskriptorov (ISO 11035)
3. Tréning na škále
4. Nezávislé hodnotenie
5. Analýza dát (ANOVA, PCA)

**Výpočet:**

```
Pre každý atribút:
- Priemer: x̄ = Σxi / n
- Smerodajná odchýlka: s = √(Σ(xi - x̄)² / (n-1))
- 95% CI: x̄ ± t(0.025, n-1) × s/√n

ANOVA:
- F = MS_atribút / MS_chyba
- p-hodnota z F-rozdelenia
```

**Výhody:**
- Podrobné a kvantitatívne výsledky
- Vhodné pre porovnanie produktov
- Umožňuje štatistickú analýzu

**Nevýhody:**
- Časovo náročný
- Vyžaduje trénovaných panelistov
- Drahý

---

### 2.2 Spectrum Method

**Princíp:** Podobný ako QDA, ale používa sa štandardizovaná slovníka a intenzitná škála.

**Špecifikácie:**
- Počet panelistov: 8-12
- Dĺžka tréningu: 60-90 hodín
- Typ škála: Lineárna (15 cm)
- Slovník: Štandardizovaný (napr. ASTM)

**Postup:**
1. Výber a tréning panelistov
2. Štandardizácia slovníka
3. Tréning na škále
4. Nezávislé hodnotenie
5. Analýza dát

**Výhody:**
- Štandardizovaný prístup
- Vhodný pre medzinárodné porovnanie
- Reprodukovateľný

**Nevýhody:**
- Časovo náročný
- Vyžaduje trénovaných panelistov
- Menej flexibilný ako QDA

---

### 2.3 Flavor Profile Method

**Princíp:** Panelisti identifikujú a kvantifikujú chuťové atribúty pomocou špecifického slovníka.

**Špecifikácie:**
- Počet panelistov: 4-6
- Dĺžka tréningu: 40-60 hodín
- Počet atribútov: 10-20
- Typ škála: Špecifická (4-bodová)

**Postup:**
1. Výber a tréning panelistov
2. Identifikácia chuťových atribútov
3. Tréning na škále
4. Nezávislé hodnotenie
5. Analýza dát

**Výhody:**
- Rýchlejší ako QDA
- Vhodný pre chuťové atribúty
- Menej náročný na panelistov

**Nevýhody:**
- Menej podrobný
- Obmedzený na chuťové atribúty
- Menej vhodný pre komplexné produkty

---

### 2.4 Texture Profile Method

**Princíp:** Panelisti hodnotia textúrne atribúty pomocou štandardizovaného slovníka.

**Špecifikácie:**
- Počet panelistov: 8-12
- Dĺžka tréningu: 60-90 hodín
- Počet atribútov: 10-20
- Typ škála: Lineárna (15 cm)

**Postup:**
1. Výber a tréning panelistov
2. Identifikácia textúrnych atribútov
3. Tréning na škále
4. Nezávislé hodnotenie
5. Analýza dát

**Výhody:**
- Štandardizovaný prístup
- Vhodný pre textúrne atribúty
- Reprodukovateľný

**Nevýhody:**
- Časovo náročný
- Vyžaduje trénovaných panelistov
- Obmedzený na textúrne atribúty

---

### 2.5 Free Choice Profiling

**Princíp:** Panelisti používajú vlastné deskriptory na hodnotenie produktov.

**Špecifikácie:**
- Počet panelistov: 10-15
- Dĺžka tréningu: Minimálna
- Počet atribútov: Neobmedzené
- Typ škály: Vlastná

**Postup:**
1. Panelisti generujú vlastné deskriptory
2. Hodnotia produkty pomocou vlastných deskriptorov
3. Výsledky sa analyzujú pomocou GPA (Generalized Procrustes Analysis)

**Výhody:**
- Rýchly
- Vyžaduje minimálny tréning
- Flexibilný

**Nevýhody:**
- Ťažké na analýzu
- Subjektívne
- Menej reprodukovateľný

---

### 2.6 Flash Profile

**Princíp:** Panelisti porovnávajú produkty a generujú deskriptory v reálnom čase.

**Špecifikácie:**
- Počet panelistov: 10-15
- Dĺžka tréningu: Minimálna
- Počet atribútov: Neobmedzené
- Typ škály: Vlastná

**Postup:**
1. Panelisti dostanú všetky produkty naraz
2. Porovnávajú produkty a generujú deskriptory
3. Výsledky sa analyzujú pomocou GPA

**Výhody:**
- Veľmi rýchly
- Vyžaduje minimálny tréning
- Vhodný pre screening

**Nevýhody:**
- Ťažké na analýzu
- Subjektívne
- Menej reprodukovateľný

---

### 2.7 Check-All-That-Apply (CATA)

**Princíp:** Panelista vyberie všetky deskriptory, ktoré sa vzťahujú k produktu.

**Špecifikácie:**
- Počet panelistov: 50-100
- Dĺžka tréningu: Minimálna
- Počet atribútov: 20-40
- Typ škály: Binárna (áno/nie)

**Postup:**
1. Panelista dostane zoznam deskriptorov
2. Vyberie všetky deskriptory, ktoré sa vzťahujú k produktu
3. Výsledky sa analyzujú pomocou chi-square testu

**Výpočet:**

```
Frekvencia výberu: f_i = (počet výberov deskriptoru i) / n × 100

Chi-square test:
χ² = Σ (O_i - E_i)² / E_i

Kde:
- O_i = pozorovaná frekvencia
- E_i = očakávaná frekvencia
```

**Výhody:**
- Rýchly
- Jednoduchý na použitie
- Vhodný pre spotrebiteľov

**Nevýhody:**
- Obmedzené rozlíšenie
- Neposkytuje informáciu o intenzite
- Vyžahuje dobrý zoznam deskriptorov

---

### 2.8 Temporal Dominance of Sensations (TDS)

**Princíp:** Panelista sleduje dominantné senzorické atribúty v čase.

**Špecifikácie:**
- Počet panelistov: 10-15
- Dĺžka tréningu: 20-30 hodín
- Počet atribútov: 5-10
- Typ škála: Binárna (dominantný/nie)

**Postup:**
1. Panelista dostane zoznam atribútov
2. Počas konzumácie vyberie dominantný atribút
3. Výsledky sa analyzujú pomocou TDS kriviek

**Výpočet:**

```
TDS krivka: % panelistov vyberajúcich atribút i v čase t

Signifikantnosť:
- P_h0 = 1/m (m = počet atribútov)
- P_chance = 1/m + 1.645 × √((1/m) × (1-1/m) / n)
- Ak % > P_chance → atribút je signifikantne dominantný
```

**Výhody:**
- Poskytuje informáciu o časovej dynamike
- Vhodný pre komplexné produkty
- Umožňuje sledovanie sekvencie

**Nevýhody:**
- Vyžaduje trénovaných panelistov
- Náročný na analýzu
- Obmedzený počet atribútov

---

### 2.9 Temporal Check-All-That-Apply (TCATA)

**Princíp:** Panelista sleduje všetky aktívne senzorické atribúty v čase.

**Špecifikácie:**
- Počet panelistov: 10-15
- Dĺžka tréningu: 20-30 hodín
- Počet atribútov: 5-10
- Typ škála: Binárna (aktívny/nie)

**Postup:**
1. Panelista dostane zoznam atribútov
2. Počas konzumácie vyberie všetky aktívne atribúty
3. Výsledky sa analyzujú pomocou TCATA kriviek

**Výpočet:**

```
TCATA krivka: % panelistov vyberajúcich atribút i v čase t

Signifikantnosť:
- P_h0 = 1/m (m = počet atribútov)
- P_chance = 1/m + 1.645 × √((1/m) × (1-1/m) / n)
- Ak % > P_chance → atribút je signifikantne aktívny
```

**Výhody:**
- Poskytuje informáciu o časovej dynamike
- Vhodný pre komplexné produkty
- Umožňuje sledovanie viacerých atribútov

**Nevýhody:**
- Vyžaduje trénovaných panelistov
- Náročný na analýzu
- Obmedzený počet atribútov

---

## 3. Časovo intenzívne metódy (Time-intensity methods)

### 3.1 Time-Intensity (TI)

**Princíp:** Panelista sleduje intenzitu konkrétneho atribútu v čase.

**Špecifikácie:**
- Počet panelistov: 10-15
- Dĺžka tréningu: 20-30 hodín
- Počet atribútov: 1-3
- Typ škála: Lineárna (15 cm)

**Postup:**
1. Panelista dostane produkt
2. Počas konzumácie sleduje intenzitu atribútu
3. Výsledky sa analyzujú pomocou TI kriviek

**Výpočet:**

```
TI krivka: intenzita atribútu v čase t

Parametre:
- I_max: maximálna intenzita
- T_max: čas dosiahnutia maximálnej intenzity
- T_total: celková doba vnímania
- AUC: plocha pod krivkou (Area Under Curve)
```

**Výhody:**
- Poskytuje informáciu o časovej dynamike
- Vhodný pre jednotlivé atribúty
- Umožňuje sledovanie intenzity

**Nevýhody:**
- Vyžaduje trénovaných panelistov
- Náročný na analýzu
- Obmedzený počet atribútov

---

### 3.2 Temporal Dominance of Sensations (TDS)

**Princíp:** Panelista sleduje dominantné senzorické atribúty v čase.

**Špecifikácie:**
- Počet panelistov: 10-15
- Dĺžka tréningu: 20-30 hodín
- Počet atribútov: 5-10
- Typ škála: Binárna (dominantný/nie)

**Postup:**
1. Panelista dostane zoznam atribútov
2. Počas konzumácie vyberie dominantný atribút
3. Výsledky sa analyzujú pomocou TDS kriviek

**Výpočet:**

```
TDS krivka: % panelistov vyberajúcich atribút i v čase t

Signifikantnosť:
- P_h0 = 1/m (m = počet atribútov)
- P_chance = 1/m + 1.645 × √((1/m) × (1-1/m) / n)
- Ak % > P_chance → atribút je signifikantne dominantný
```

**Výhody:**
- Poskytuje informáciu o časovej dynamike
- Vhodný pre komplexné produkty
- Umožňuje sledovanie sekvencie

**Nevýhody:**
- Vyžaduje trénovaných panelistov
- Náročný na analýzu
- Obmedzený počet atribútov

---

### 3.3 TCATA

**Princíp:** Panelista sleduje všetky aktívne senzorické atribúty v čase.

**Špecifikácie:**
- Počet panelistov: 10-15
- Dĺžka tréningu: 20-30 hodín
- Počet atribútov: 5-10
- Typ škála: Binárna (aktívny/nie)

**Postup:**
1. Panelista dostane zoznam atribútov
2. Počas konzumácie vyberie všetky aktívne atribúty
3. Výsledky sa analyzujú pomocou TCATA kriviek

**Výpočet:**

```
TCATA krivka: % panelistov vyberajúcich atribút i v čase t

Signifikantnosť:
- P_h0 = 1/m (m = počet atribútov)
- P_chance = 1/m + 1.645 × √((1/m) × (1-1/m) / n)
- Ak % > P_chance → atribút je signifikantne aktívny
```

**Výhody:**
- Poskytuje informáciu o časovej dynamike
- Vhodný pre komplexné produkty
- Umožňuje sledovanie viacerých atribútov

**Nevýhody:**
- Vyžaduje trénovaných panelistov
- Náročný na analýzu
- Obmedzený počet atribútov

---

### 3.4 Ako analyzovať časové dáta

**TI dáta:**
- TI krivky pre každého panelistu
- Priemerné TI krivky
- Parametre: I_max, T_max, T_total, AUC
- Štatistická analýza: ANOVA, PCA

**TDS dáta:**
- TDS krivky pre každý atribút
- Signifikantnosť: % > P_chance
- TDS tabuľka: sekvencia dominantných atribútov
- Štatistická analýza: chi-square test

**TCATA dáta:**
- TCATA krivky pre každý atribút
- Signifikantnosť: % > P_chance
- TCATA tabuľka: sekvencia aktívnych atribútov
- Štatistická analýza: chi-square test

---

## 4. Spotrebiteľské metódy (Consumer methods)

### 4.1 Hedonické testy

**Princíp:** Spotrebiteľi vyjadrujú mieru prijatia produktu na hedonickéj škále.

**Špecifikácie:**
- Počet spotrebiteľov: 100-200
- Typ škály: 9-bodová hedonická
- Podmienky: Normálne spotrebiteľské podmienky

**Postup:**
1. Rekrutácia spotrebiteľov
2. Podávanie produktov v náhodnom poradí
3. Hodnotenie na hedonickéj škále
4. Analýza dát

**Výpočet:**

```
Priemer: x̄ = Σxi / n
Smerodajná odchýlka: s = √(Σ(xi - x̄)² / (n-1))
95% CI: x̄ ± t(0.025, n-1) × s/√n

% Prijatie = (počet odpovedí ≥ 6) / n × 100
% Odmietnutie = (počet odpovedí ≤ 4) / n × 100
```

**Výhody:**
- Priamo meria prijatie
- Jednoduchý na použitie
- Vhodný pre spotrebiteľov

**Nevýhody:**
- Subjektívne
- Kultúrne závislé
- Neposkytuje informáciu o príčinách

---

### 4.2 Preference Mapping

**Princíp:** Kombinuje hedonické dáta s deskriptívnymi dátami na vytvorenie preferenčných máp.

**Špecifikácie:**
- Počet spotrebiteľov: 100-200
- Počet produktov: 6-12
- Deskriptívne dáta: QDA alebo CATA

**Postup:**
1. Hedonicke hodnotenie produktov
2. Deskriptívna analýza produktov
3. Vytvorenie preferenčnej mapy (PCA, PLS)
4. Interpretácia máp

**Výpočet:**

```
Preferenčná mapa:
- X-os: deskriptívne atribúty (z QDA alebo CATA)
- Y-os: hedonické hodnotenie
- Vektory: produkty
- Smer: preferencia spotrebiteľov
```

**Výhody:**
- Vizualizuje preferencie
- Identifikuje cieľové produkty
- Umožňuje segmentáciu

**Nevýhody:**
- Vyžaduje viacero dát
- Náročný na interpretáciu
- Menej presný ako iné metódy

---

### 4.3 Conjoint Analysis

**Princíp:** Spotrebiteľi hodnotia produkty na základe kombinácií atribútov.

**Špecifikácie:**
- Počet spotrebiteľov: 100-200
- Počet atribútov: 3-6
- Počet úrovní: 2-4

**Postup:**
1. Definícia atribútov a úrovní
2. Vytvorenie profilov produktov
3. Hodnotenie profilov
4. Analýza dát (ANOVA, regresia)

**Výpočet:**

```
Part-worth utilities:
- U_j = Σ (w_ij × x_ij) / n

Kde:
- U_j = celková utilita profilu j
- w_ij = váha atribútu i v profile j
- x_ij = hodnota atribútu i v profile j
```

**Výhody:**
- Identifikuje dôležité atribúty
- Simuluje trh
- Umožňuje optimalizáciu

**Nevýhody:**
- Zložitý na návrh
- Vyžaduje štatistické znalosti
- Menej intuitívny

---

### 4.4 TURF Analysis

**Princíp:** Identifikuje optimálnu kombináciu produktov pre maximalizáciu pokrytia trhu.

**Špecifikácie:**
- Počet spotrebiteľov: 100-200
- Počet produktov: 10-20
- Počet úrovní: 2-4

**Postup:**
1. Zber dát o preferenciách
2. Výpočet pokrytia (reach)
3. Výpočet frekvencie (frequency)
4. Identifikácia optimálnej kombinácie

**Výpočet:**

```
Reach = (počet spotrebiteľov, ktorí aspoň raz vybrali produkt) / n × 100
Frequency = (počet výberov) / (počet spotrebiteľov × počet produktov)
```

**Výhody:**
- Maximalizuje pokrytie trhu
- Identifikuje optimálnu kombináciu
- Vhodný pre NPD

**Nevýhody:**
- Zložitý na výpočet
- Vyžaduje štatistické znalosti
- Menej intuitívny

---

### 4.5 JAR škála

**Princíp:** Spotrebiteľi hodnotia, či je intenzita atribútu príliš nízka, príliš vysoká, alebo práve správna.

**Špecifikácie:**
- Počet spotrebiteľov: 100-200
- Typ škály: 5-bodová (JAR)

**Postup:**
1. Spotrebiteľi hodnotia intenzitu atribútov
2. Vyberajú: príliš nízka, príliš vysoká, alebo práve správna
3. Výsledky sa analyzujú pomocou penalty analysis

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
- Vhodný pre NPD
- Jednoduchý na použitie

**Nevýhody:**
- Vyžahuje trénovaných spotrebiteľov
- Subjektívne hranice
- Menej vhodný pre deskriptívne atribúty

---

### 4.6 Just-About-Right

**Princíp:** Podobný ako JAR škála, ale zameraný na konkrétne atribúty.

**Špecifikácie:**
- Počet spotrebiteľov: 100-200
- Typ škály: 5-bodová (JAR)

**Postup:**
1. Spotrebiteľi hodnotia intenzitu atribútov
2. Vyberajú: príliš nízka, príliš vysoká, alebo práve správna
3. Výsledky sa analyzujú pomocou penalty analysis

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
- Vhodný pre NPD
- Jednoduchý na použitie

**Nevýhody:**
- Vyžahuje trénovaných spotrebiteľov
- Subjektívne hranice
- Menej vhodný pre deskriptívne atribúty

---

### 4.7 Liking scales

**Princíp:** Spotrebiteľi vyjadrujú mieru prijatia produktu na rôznych typoch škál.

**Typy škál:**

| Typ škály | Počet bodov | Príklad |
|---|---|---|
| 9-bodová hedonická | 9 | 1 = výnimočne sa mi nepáči, 9 = výnimočne sa mi páči |
| 7-bodová | 7 | 1 = veľmi sa mi nepáči, 7 = veľmi sa mi páči |
| 5-bodová | 5 | 1 = nepáči sa mi, 5 = páči sa mi |
| Semantická | 5-7 | Rôzne popisy |

**Výpočet:**

```
Priemer: x̄ = Σxi / n
Smerodajná odchýlka: s = √(Σ(xi - x̄)² / (n-1))
95% CI: x̄ ± t(0.025, n-1) × s/√n
```

**Výhody:**
- Jednoduché
- Rýchle
- Vhodné pre spotrebiteľov

**Nevýhody:**
- Subjektívne
- Kultúrne závislé
- Neposkytujú informáciu o príčinách

---

### 4.8 Purchase intent

**Princíp:** Spotrebiteľi vyjadrujú pravdepodobnosť zakúpenia produktu.

**Špecifikácie:**
- Počet spotrebiteľov: 100-200
- Typ škály: 5-bodová

**Škála:**

| Hodnotenie | Popis |
|---|---|
| 5 | Určite kúpiem |
| 4 | Pravdepodobne kúpiem |
| 3 | Možno kúpiem, možno nie |
| 2 | Pravdepodobne nekúpiem |
| 1 | Určite nekúpiem |

**Výpočet:**

```
Priemer: x̄ = Σxi / n
Smerodajná odchýlka: s = √(Σ(xi - x̄)² / (n-1))
95% CI: x̄ ± t(0.025, n-1) × s/√n

% Pozitívny purchase intent = (počet odpovedí ≥ 4) / n × 100
```

**Výhody:**
- Predikuje správanie
- Vhodný pre NPD
- Jednoduchý na použitie

**Nevýhody:**
- Subjektívne
- Neposkytuje informáciu o príčinách
- Menej presný ako skutočné správanie

---

## 5. QC senzorika (Quality Control sensory)

### 5.1 Ako nastaviť senzorický QC program

**Kroky na nastavenie QC programu:**

1. **Definícia kvalitatívnych atribútov**
   - Identifikácia kľúčových senzorických atribútov
   - Stanovenie akceptačných limít
   - Vytvorenie senzorických špecifikácií

2. **Výber a tréning QC panelu**
   - Výber 8-12 panelistov
   - Tréning na identifikáciu atribútov
   - Tréning na používanie škál

3. **Vytvorenie protokolov**
   - Štandardné operačné postupy (SOP)
   - Frekvencia testovania
   - Dokumentácia

4. **Implementácia**
   - Integrovanie do produkčného procesu
   - Monitorovanie a reporting
   - Prijímanie opatrení

---

### 5.2 Tréning QC panelu

**Fázy tréningu:**

| Fáza | Trvanie | Obsah |
|---|---|---|
| 1. Základný tréning | 10-15 hodín | Identifikácia základných chutí a vôní |
| 2. Atribútový tréning | 20-30 hodín | Identifikácia a kvantifikácia atribútov |
| 3. Škálový tréning | 10-15 hodín | Používanie škál intenzity |
| 4. Praktický tréning | 10-15 hodín | Testovanie reálnych produktov |
| 5. Kalibrácia | Priebežná | Udržiavanie konzistencie |

**Kritériá pre QC panelistov:**
- Senzorická citlivosť
- Konzistencia
- Schopnosť rozlišovať
- Závažnosť

---

### 5.3 Atributové testy pre QC

**Typy atribútových testov:**

| Test | Princíp | Výhody | Nevýhody |
|---|---|---|---|
| Go/No-Go | Binárne rozhodnutie | Rýchly | Obmedzené informácie |
| Grading | Kategorické hodnotenie | Jednoduchý | Subjektívny |
| Profiling | Komplexné hodnotenie | Podrobný | Časovo náročný |
| Specifický | Hodnotenie konkrétneho atribútu | Cielený | Obmedzený |

---

### 5.4 Go/No-Go testy

**Princíp:** Panelista rozhodne, či produkt spĺňa kvalitatívne kritériá (Go) alebo nie (No-Go).

**Špecifikácie:**
- Počet panelistov: 4-6
- Typ rozhodnutia: Binárne (Go/No-Go)
- Frekvencia: Každá dávka

**Postup:**
1. Panelista ochutná produkt
2. Rozhodne: Go (akceptovateľný) alebo No-Go (neakceptovateľný)
3. Ak viac ako X% panelistov rozhodne No-Go → produkt je zamietnutý

**Výpočet:**

```
% Go = (počet Go odpovedí) / n × 100
% No-Go = (počet No-Go odpovedí) / n × 100

Pravidlá:
- Ak % No-Go > prahová hodnota → produkt je zamietnutý
- Ak % No-Go ≤ prahová hodnota → produkt je akceptovaný
```

**Výhody:**
- Rýchly
- Jednoduchý
- Vhodný pre každodenné testovanie

**Nevýhody:**
- Obmedzené informácie
- Subjektívne
- Neposkytuje informáciu o príčinách

---

### 5.5 Senzorická špecifikácia

**Komponenty senzorickéj špecifikácie:**

| Komponent | Popis | Príklad |
|---|---|---|
| Atribút | Senzorická vlastnosť | Sladkosť |
| Škála | Typ škály | 9-bodová |
| Cieľová hodnota | Požadovaná intenzita | 6.5 |
| Tolerancia | Prijateľný rozsah | 6.0-7.0 |
| Prahová hodnota | Minimálna akceptovateľná | 6.0 |

**Vytvorenie špecifikácie:**
1. Definícia atribútov
2. Stanovenie cieľových hodnôt
3. Stanovenie tolerancií
4. Stanovenie prahových hodnôt
5. Dokumentácia

---

### 5.6 Monitorovanie kvality v čase

**Metódy monitorovania:**

| Metóda | Princíp | Výhody | Nevýhody |
|---|---|---|---|
| Kontrolné grafy | Sledovanie trendov | Vizuálne | Vyžaduje dáta |
| CUSUM | Kumulatívny súčet | Citlivý | Zložitý |
| EWMA | Exponenciálne vážený priemer | Citlivý | Zložitý |
| Shewhart | Kontrolné limity | Jednoduchý | Menej citlivý |

**Kontrolný graf:**

```
Horná kontrolná hodnota (UCL) = x̄ + 3σ
Stredná čiara (CL) = x̄
Dolná kontrolná hodnota (LCL) = x̄ - 3σ

Kde:
- x̄ = priemer
- σ = smerodajná odchýlka
```

---

### 5.7 Senzorické limity (sensory limits)

**Typy senzorických limít:**

| Typ | Popis | Príklad |
|---|---|---|
| Akceptačný limit | Prijateľná hodnota | Sladkosť ≥ 6.0 |
| Prahový limit | Minimálna akceptovateľná | Sladkosť ≥ 5.5 |
| Cieľový limit | Požadovaná hodnota | Sladkosť = 6.5 |
| Tolerančný limit | Prijateľný rozsah | Sladkosť 6.0-7.0 |

**Stanovenie limít:**
1. Historické dáta
2. Expertné hodnotenie
3. Spotrebiteľské testy
4. Regulačné požiadavky

---

## 6. NPD senzorika (New Product Development sensory)

### 6.1 Senzorický vývoj produktu

**Fázy vývoja:**

| Fáza | Cieľ | Metóda |
|---|---|---|
| Koncept | Overenie konceptu | Spotrebiteľské testy |
| Prototyp | Optimalizácia | Deskriptívna analýza |
| Pilot | Validácia | Rozlišovacie testy |
| Produkcia | Implementácia | QC senzorika |

---

### 6.2 Benchmarking

**Princíp:** Porovnanie nového produktu s existujúcimi produktmi na trhu.

**Postup:**
1. Výber benchmark produktov
2. Deskriptívna analýza
3. Porovnanie profilov
4. Identifikácia príležitostí

**Výpočet:**

```
Podobnosť = 1 - (Σ|xi - yi|) / n

Kde:
- xi = intenzita atribútu i v novom produkte
- yi = intenzita atribútu i v benchmark produkte
```

**Výhody:**
- Identifikuje príležitosti
- Poskytuje kontext
- Vhodný pre NPD

**Nevýhody:**
- Závisí od výberu benchmarkov
- Menej presný ako iné metódy
- Vyžaduje dostupnosť benchmarkov

---

### 6.3 Optimization (Response Surface Methodology)

**Princíp:** Systematická optimalizácia produktu pomocou experimentálneho dizajnu.

**Špecifikácie:**
- Počet faktorov: 2-5
- Počet úrovní: 3-5
- Počet experimentov: 15-50

**Postup:**
1. Definícia faktorov a úrovní
2. Návrh experimentu
3. Vykonanie experimentov
4. Analýza dát (ANOVA, regresia)
5. Optimalizácia

**Výpočet:**

```
Model: y = β0 + Σβi×xi + Σβij×xi×xj + Σβii×xi²

Kde:
- y = odozva (napr. liking)
- β = koeficienty
- x = faktory
```

**Výhody:**
- Systematický prístup
- Identifikuje optimálne kombinácie
- Umožňuje interakcie

**Nevýhody:**
- Zložitý na návrh
- Vyžaduje štatistické znalosti
- Časovo náročný

---

### 6.4 Shelf-life testing

**Princíp:** Stanovenie trvanlivosti produktu senzorickými metódami.

**Špecifikácie:**
- Počet časových bodov: 4-6
- Počet panelistov: 8-12
- Podmienky skladovania: Normálne a stresové

**Postup:**
1. Priprava vzoriek
2. Skladovanie v rôznych podmienkách
3. Testovanie v pravidelných intervaloch
4. Analýza dát (ANOVA, regresia)
5. Stanovenie trvanlivosti

**Výpočet:**

```
Model: y = β0 + β1×t + β2×t²

Kde:
- y = senzorická hodnota
- t = čas
- β = koeficienty

Trvanlivosť: čas, kedy y = prahová hodnota
```

**Výhody:**
- Stanoví trvanlivosť
- Identifikuje degradácie
- Vhodný pre NPD

**Nevýhody:**
- Časovo náročný
- Vyžaduje dlhodobé skladovanie
- Náročný na organizáciu

---

### 6.5 Claim substantiation

**Princíp:** Overenie tvrdení o produkte senzorickými metódami.

**Typy tvrdení:**

| Typ | Príklad | Metóda |
|---|---|---|
| Absolútne | "Najsladší" | Porovnanie s konkurenciou |
| Relatívne | "Sladší ako" | Rozlišovacie testy |
| Deskriptívne | "Má intenzívnu chuť" | Deskriptívna analýza |
| Spotrebiteľské | "Spotrebiteľi ho preferujú" | Spotrebiteľské testy |

**Postup:**
1. Definícia tvrdenia
2. Výber metódy
3. Vykonanie testu
4. Analýza dát
5. Záver

---

### 6.6 Cost reduction studies

**Princíp:** Identifikácia možností zníženia nákladov bez zníženia kvality.

**Postup:**
1. Identifikácia nákladových faktorov
2. Návrh experimentov
3. Vykonanie testov
4. Analýza dát
5. Identifikácia optimalizácií

**Výpočet:**

```
Rozdiel v kvalite = |x_nový - x_pôvodný|

Ak rozdiel < prahová hodnota → zníženie nákladov je prijateľné
```

**Výhody:**
- Znižuje náklady
- Udržuje kvalitu
- Vhodný pre optimalizáciu

**Nevýhody:**
- Vyžaduje štatistické znalosti
- Menej presný ako iné metódy
- Vyžaduje dostupnosť dát

---

### 6.7 Line extensions

**Princíp:** Vývoj nových variácií existujúceho produktu.

**Postup:**
1. Definícia variácií
2. Deskriptívna analýza
3. Porovnanie s pôvodným produktom
4. Identifikácia rozdielov
5. Optimalizácia

**Výpočet:**

```
Podobnosť = 1 - (Σ|xi - yi|) / n

Kde:
- xi = intenzita atribútu i v novej variácii
- yi = intenzita atribútu i v pôvodnom produkte
```

**Výhody:**
- Využíva existujúcu základňu
- Nižšie riziko
- Rýchlejší vývoj

**Nevýhody:**
- Obmedzená inovácia
- Menej presný ako iné metódy
- Vyžaduje dostupnosť pôvodného produktu

---

## 7. Rýchle metódy (Rapid methods)

### 7.1 Flash Profile

**Princíp:** Panelisti porovnávajú produkty a generujú deskriptory v reálnom čase.

**Špecifikácie:**
- Počet panelistov: 10-15
- Dĺžka tréningu: Minimálna
- Počet atribútov: Neobmedzené
- Typ škály: Vlastná

**Postup:**
1. Panelisti dostanú všetky produkty naraz
2. Porovnávajú produkty a generujú deskriptory
3. Výsledky sa analyzujú pomocou GPA

**Výhody:**
- Veľmi rýchly
- Vyžaduje minimálny tréning
- Vhodný pre screening

**Nevýhody:**
- Ťažké na analýzu
- Subjektívne
- Menej reprodukovateľný

---

### 7.2 CATA

**Princíp:** Panelista vyberie všetky deskriptory, ktoré sa vzťahujú k produktu.

**Špecifikácie:**
- Počet panelistov: 50-100
- Dĺžka tréningu: Minimálna
- Počet atribútov: 20-40
- Typ škála: Binárna (áno/nie)

**Postup:**
1. Panelista dostane zoznam deskriptorov
2. Vyberie všetky deskriptory, ktoré sa vzťahujú k produktu
3. Výsledky sa analyzujú pomocou chi-square testu

**Výpočet:**

```
Frekvencia výberu: f_i = (počet výberov deskriptoru i) / n × 100

Chi-square test:
χ² = Σ (O_i - E_i)² / E_i

Kde:
- O_i = pozorovaná frekvencia
- E_i = očakávaná frekvencia
```

**Výhody:**
- Rýchly
- Jednoduchý na použitie
- Vhodný pre spotrebiteľov

**Nevýhody:**
- Obmedzené rozlíšenie
- Neposkytuje informáciu o intenzite
- Vyžahuje dobrý zoznam deskriptorov

---

### 7.3 Sorting

**Princíp:** Panelisti triedia produkty podľa senzorického podobnosti.

**Špecifikácie:**
- Počet panelistov: 10-15
- Dĺžka tréningu: Minimálna
- Počet produktov: 10-20

**Postup:**
1. Panelisti dostanú všetky produkty naraz
2. Triedia ich do skupín podľa senzorického podobnosti
3. Výsledky sa analyzujú pomocou GPA

**Výhody:**
- Rýchly
- Vyžaduje minimálny tréning
- Vhodný pre screening

**Nevýhody:**
- Ťažké na analýzu
- Subjektívne
- Menej reprodukovateľný

---

### 7.4 Napping

**Princíp:** Panelisti umiestnia produkty na podlahe podľa senzorického podobnosti.

**Špecifikácie:**
- Počet panelistov: 10-15
- Dĺžka tréningu: Minimálna
- Počet produktov: 10-20

**Postup:**
1. Panelisti dostanú všetky produkty naraz
2. Umiestnia ich na podlahe podľa senzorického podobnosti
3. Výsledky sa analyzujú pomocou GPA

**Výhody:**
- Veľmi rýchly
- Vyžaduje minimálny tréning
- Vhodný pre screening

**Nevýhody:**
- Ťažké na analýzu
- Subjektívne
- Menej reprodukovateľný

---

### 7.5 Ultra Flash Profile

**Princíp:** Kombinácia Flash Profile a CATA.

**Špecifikácie:**
- Počet panelistov: 10-15
- Dĺžka tréningu: Minimálna
- Počet atribútov: 20-40

**Postup:**
1. Panelisti dostanú všetky produkty naraz
2. Vyberú deskriptory z preddefinovaného zoznamu
3. Výsledky sa analyzujú pomocou GPA

**Výhody:**
- Veľmi rýchly
- Vyžaduje minimálny tréning
- Vhodný pre screening

**Nevýhody:**
- Obmedzený zoznam deskriptorov
- Subjektívne
- Menej reprodukovateľný

---

### 7.6 Kedy použiť rýchle metódy

| Situácia | Odporúčaná metóda | Dôvod |
|---|---|---|
| Screening | Flash Profile | Rýchly |
| Identifikácia rozdielov | CATA | Jednoduchý |
| Triedenie produktov | Sorting | Rýchly |
| Vizualizácia podobnosti | Napping | Intuitívny |
| Komplexný screening | Ultra Flash Profile | Rýchly a podrobný |

---

## 8. Záver

Senzorické metódy sú nevyhnutné pre kvalitatívny vývoj a kontrolu potravinárskych produktov. Správna voľba metódy závisí od:
- Cieľa testovania (rozlišovanie vs. deskripcia vs. prijatie)
- Typu produktu a atribútov
- Dostupných zdrojov (čas, personál, financie)
- Požadovanej štatististickej sily

Dôležité je dodržať princípy dobrej senzorickéj praxie (GSP) a zabezpečiť kvalifikáciu a tréning panelistov v súlade s ISO 8586:2012.
