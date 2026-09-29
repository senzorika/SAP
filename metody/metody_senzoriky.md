# Komplexný sprievodca senzorickými metódami

## Obsah

1. [Rozlišovacie testy](#1-rozlišovacie-testy-discrimination-tests)
2. [Deskriptívne metódy](#2-deskriptívne-metódy-descriptive-methods)
3. [Časovo intenzívne metódy](#3-časovo-intenzívne-metódy-time-intensity-methods)
4. [Spotrebiteľské metódy](#4-spotrebiteľské-metódy-consumer-methods)
5. [QC senzorika](#5-qc-senzorika-quality-control-sensory)
6. [NPD senzorika](#6-npd-senzorika-new-product-development-sensory)
7. [Rýchle metódy](#7-rýchle-metódy-rapid-methods)
8. [Prepojenie s cvičeniami v R (SaIT)](#9-prepojenie-s-praktickými-cvičeniami-v-r-sait)

> 🧪 Ku každej skupine metód existuje praktické cvičenie v R v repozitári [senzorika/SaIT](https://github.com/senzorika/SaIT) — odkazy sú priamo pri metódach a súhrnne v [poslednej kapitole](#9-prepojenie-s-praktickými-cvičeniami-v-r-sait).

---

## 1. Rozlišovacie testy (Discrimination tests)

### 1.1 Trojuholníkový test (Triangle Test)

**Princíp:** Panelista dostane tri vzorky, z ktorých sú dve rovnaké a jedna odlišná. Úlohou je identifikovať odlišnú vzorku.

**Špecifikácie:**
- Počet vzoriek: 3
- Pravdepodobnosť náhodnej voľby: 1/3
- Počet panelistov: ≥ 24 (ISO 4120 odporúča 24–30 a viac; pri malých rozdieloch výrazne viac — pozri sila testu)
- Úroveň významnosti: α = 0.05

**Postup:**
1. Pripraviť 6 podávaní (AAB, ABA, BAA, BBA, BAB, ABB) vyvážene medzi hodnotiteľov
2. Panelista ochutná vzorky v určenom poradí
3. Identifikuje odlišnú vzorku
4. Výsledky sa vyhodnotia pomocou binomického rozdelenia

**Výpočet:**

```
H0: p = 1/3 (náhodná voľba)
H1: p > 1/3 (schopnosť rozlišovať)

P(X ≥ k) = Σ C(n,i) × (1/3)^i × (2/3)^(n-i) pre i = k až n
```

**Kritické hodnoty (α = 0.05, presný binomický test):**

| n | Kritická hodnota |
|---|---|
| 18 | 10 |
| 24 | 13 |
| 30 | 15 |
| 36 | 18 |
| 48 | 22 |
| 60 | 27 |

**Výhody:**
- Nevyžaduje poznať smer rozdielu
- Dobre zavedený a normalizovaný (ISO 4120:2021)

**Nevýhody:**
- Pri danom senzorickom rozdiele (d′) nízka štatistická sila — tetrad aj 2-AFC potrebujú menej hodnotiteľov
- Môže byť náročný na pamäť a únavu (3 vzorky)

> 🧪 **SaIT:** [cvičenie 5a](https://senzorika.github.io/SaIT/teoria/cvicenie05a.html) (binomický test) · [cvičenie 13](https://senzorika.github.io/SaIT/teoria/cvicenie13.html) (d′) · [cvičenie 14](https://senzorika.github.io/SaIT/teoria/cvicenie14.html) (sila testu)

---

### 1.2 Duo-trio Test

**Princíp:** Panelista dostane referenčnú vzorku a dve neznáme vzorky (jedna rovná referencii, jedna odlišná). Úlohou je identifikovať vzorku, ktorá je **zhodná s referenciou** (ISO 10399:2017).

**Špecifikácie:**
- Počet vzoriek: 3 (1 referenčná + 2 testovacie)
- Pravdepodobnosť náhodnej voľby: 1/2
- Počet panelistov: ≥ 24 (pri malých rozdieloch výrazne viac)

**Postup:**
1. Podáva sa referenčná vzorka (R)
2. Následne dve vzorky (jedna = R, jedna ≠ R)
3. Panelista určí vzorku zhodnú s referenciou

**Výpočet:**

```
H0: p = 1/2 (náhodná voľba)
H1: p > 1/2 (schopnosť rozlišovať)

P(X ≥ k) = Σ C(n,i) × (1/2)^n pre i = k až n
```

**Kritické hodnoty (α = 0.05, presný binomický test):**

| n | Kritická hodnota |
|---|---|
| 16 | 12 |
| 24 | 17 |
| 30 | 20 |
| 36 | 24 |
| 48 | 31 |
| 60 | 37 |

**Výhody:**
- Jednoduchšie na pochopenie ako trojuholníkový test
- Menej náročný na panelistov
- Vhodný pre menej skúsené panely

**Nevýhody:**
- Pri danom d′ približne rovnako nízka sila ako trojuholníkový test
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
| 20 | 5 | 15 |
| 30 | 9 | 21 |
| 40 | 13 | 27 |
| 50 | 17 | 33 |
| 60 | 21 | 39 |

*Presný binomický test: rozdiel je významný, ak počet hlasov ≤ dolná alebo ≥ horná hodnota.*

**Výhody:**
- Veľmi jednoduchý
- Rýchly
- Vhodný pre screening

**Nevýhody:**
- Poskytuje len informáciu o tom, ktorý produkt je intenzívniejší
- Neposkytuje priamo veľkosť rozdielu (tú dá Thurstonov d′)
- Pozn.: pri známom atribúte je to naopak štatisticky najúčinnejší rozlišovací test (2-AFC)

---

### 1.4 "A" - "nie A" Test

**Princíp:** Panelista dostane vzorku a rozhodne, či podobá vzorke "A" alebo nie.

**Špecifikácie:**
- Počet vzoriek: 1 naraz (po oboznámení sa so vzorkou A)
- Norma: ISO 8588:2017
- Počet panelistov: ≥ 20–30, spolu typicky 40+ hodnotení

**Postup:**
1. Panelista sa naučí referenčnú vzorku "A"
2. Podávajú sa vzorky A aj „nie A"; panelista pri každej rozhodne: "A" alebo "nie A"
3. Výsledky sa zapíšu do tabuľky 2 × 2 (podaná vzorka × odpoveď)

**Výpočet:**

```
H0: podiel odpovedí "A" je rovnaký pre vzorku A aj "nie A"
- nezávislé hodnotenia → χ² test (1 df) / Fisherov test
- párové hodnotenia (každý hodnotiteľ obe vzorky) → McNemarov test
d′ = z(H) − z(F)   (H = podiel "A" pri vzorke A, F = podiel "A" pri "nie A")
```

> ⚠️ Nie binomický test s p = 1/2 — pravdepodobnosť odpovede „A" závisí od kritéria hodnotiteľa.

**Výhody:**
- Hodnotí sa jedna vzorka naraz (vhodné pri silnej dochuti)
- Vhodný pre kontrolu kvality voči štandardu

**Nevýhody:**
- Menej statisticky efektívny
- Vyžaduje dobrú pamäť panelistov
- Výsledky závisia od kvalite referencie

---

### 1.5 Test rovnakosti (Same-Different Test)

**Princíp:** Panelista dostane dve vzorky a rozhodne, či sú rovnaké alebo odlišné.

**Špecifikácie:**
- Počet vzoriek: 2 (rovnaké páry AA/BB aj odlišné páry AB/BA)
- Počet panelistov: ≥ 30, ideálne každý hodnotí rovnaký aj odlišný pár

**Postup:**
1. Podávajú sa rovnaké aj odlišné páry
2. Panelista rozhodne: "rovnaké" alebo "odlišné"
3. Porovná sa podiel odpovedí „odlišné" pri odlišných a pri rovnakých pároch

**Výpočet:**

```
H0: podiel odpovedí "odlišné" je rovnaký pre odlišné aj rovnaké páry
Test: χ² test / Fisherov test (nezávislé hodnotenia), McNemarov test (párové)
Veľkosť rozdielu: Thurstonov d′ (model same-different, sensR::samediff)
```

> ⚠️ Náhodná pravdepodobnosť 1/2 ani tabuľka kritických hodnôt tu neexistujú.

**Výhody:**
- Jednoduchý
- Vhodný pre rýchle testovanie
- Menej náročný na panelistov

**Nevýhody:**
- Menej statisticky efektívny
- Výsledky závisia od stratégie panelistov

---

### 1.6 Tetrad Test

**Princíp:** Panelista dostane štyri vzorky — dve vzorky A a dve vzorky B. Úlohou je rozdeliť ich do dvoch skupín rovnakých vzoriek (ASTM E3009).

**Špecifikácie:**
- Počet vzoriek: 4 (2 × A, 2 × B)
- Pravdepodobnosť náhodnej voľby: 1/3
- Počet panelistov: pri rovnakom d′ približne tretina oproti trojuholníku

**Postup:**
1. Podávajú sa štyri vzorky (napr. AABB v náhodnom poradí)
2. Panelista ich rozdelí do dvoch skupín po dvoch
3. Výsledky sa vyhodnotia pomocou binomického rozdelenia

**Výpočet:**

```
H0: p = 1/3 (náhodná voľba)
H1: p > 1/3 (schopnosť rozlišovať)

Kritické hodnoty (α = 0.05) — rovnaké ako pri trojuholníku:
```

| n | Kritická hodnota |
|---|---|
| 24 | 13 |
| 36 | 18 |
| 48 | 22 |
| 60 | 27 |

**Výhody:**
- Vyššia sila ako trojuholníkový test pri rovnakom senzorickom rozdiele
- Nevyžaduje poznať smer rozdielu

**Nevýhody:**
- Porovnáva len 2 produkty (nie je to metóda pre viac produktov)
- 4 vzorky na pokus → vyššie riziko únavy a adaptácie
- Normalizovaný len v ASTM, nie v ISO

---

### 1.7 Kedy použiť ktorý test

| Kritérium | Trojuholníkový | Duo-trio | Párový | A-nie A | Rovnakosti | Tetrad |
|---|---|---|---|---|---|---|
| Sila pri danom d′ | Nízka | Nízka | Vysoká (známy atribút) | Stredná | Nízka–stredná | Stredná |
| Náročnosť na panelistov | Vysoká | Stredná | Nízka | Stredná | Nízka | Vysoká |
| Rýchlosť | Stredná | Stredná | Vysoká | Vysoká | Vysoká | Stredná |
| Vhodnosť pre screening | Obmedzene | Obmedzene | Áno | Áno | Áno | Obmedzene |
| Vhodnosť pre referenciu | Nie | Áno | Nie | Áno | Nie | Nie |
| Vzorky na jeden pokus | 3 | 3 | 2 | 1 | 2 | 4 |
| Vyhodnotenie | binom. p₀=1/3 | binom. p₀=1/2 | binom. p₀=1/2 | χ² / McNemar | χ² / McNemar | binom. p₀=1/3 |

Podrobné porovnanie sily testov a potrebného počtu hodnotiteľov je v kapitole [Diskriminačné metódy](diskriminacne_metody.md#82-počet-testovateľov-pre-rovnakú-silu-testu-α--005-power--080).

---

## 2. Deskriptívne metódy (Descriptive methods)

### 2.1 Quantitative Descriptive Analysis (QDA)

**Princíp:** Trénovaní panelisti kvantifikujú intenzitu jednotlivých senzorických atribútov na škále.

**Špecifikácie:**
- Počet panelistov: 8-12 (Stone & Sidel: 10–12)
- Dĺžka tréningu: rádovo 10–20 hodín (niekoľko týždňov) — kratšia ako pri Spectrum
- Počet atribútov: 10-30
- Typ škály: nestrukturovaná lineárna škála (~15 cm, kotvy ~1,25 cm od okrajov)

**Postup:**
1. Výber a tréning panelistov (ISO 8586:2023)
2. Generovanie deskriptorov konsenzom panelu (ISO 13299:2016, ISO 11035)
3. Tréning na škále
4. Nezávislé hodnotenie v kabínach, s opakovaniami
5. Analýza dát (ANOVA, PCA)

**Výpočet:**

```
Pre každý atribút:
- Priemer: x̄ = Σxi / n
- Smerodajná odchýlka: s = √(Σ(xi - x̄)² / (n-1))
- 95% CI: x̄ ± t(0.025, n-1) × s/√n

ANOVA (produkt × hodnotiteľ × opakovanie):
- hodnotiteľ je náhodný efekt → F(produkt) = MS_produkt / MS_produkt×hodnotiteľ
  (zmiešaný model; F = MS_produkt / MS_chyba nadhodnocuje významnosť,
   ak je interakcia produkt × hodnotiteľ významná)
```

> 🧪 **SaIT:** ANOVA a post-hoc — [cvičenie 5b](https://senzorika.github.io/SaIT/teoria/cvicenie05b.html) · hodnotiteľ ako náhodný efekt (lmer) — [cvičenie 16](https://senzorika.github.io/SaIT/teoria/cvicenie16.html) · PCA — [cvičenie 7](https://senzorika.github.io/SaIT/teoria/cvicenie07.html) · výkonnosť panelu — [cvičenie 15](https://senzorika.github.io/SaIT/teoria/cvicenie15.html)

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

**Princíp:** Podobný ako QDA, ale používa štandardizované lexikóny a univerzálnu intenzitnú škálu (0–15) ukotvenú referenčnými vzorkami (Meilgaard, Civille & Carr).

**Špecifikácie:**
- Počet panelistov: 8-12
- Dĺžka tréningu: dlhá — často 100+ hodín počas niekoľkých mesiacov
- Typ škály: 0–15, ukotvená referenčnými štandardmi
- Slovník: Štandardizované lexikóny (Spectrum lexicons)

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

**Princíp:** Malý panel expertov identifikuje vôňové a chuťové zložky, ich poradie a intenzitu a dospeje ku **konsenzuálnemu profilu** (Arthur D. Little, koniec 40. rokov).

**Špecifikácie:**
- Počet panelistov: 4-6
- Dĺžka tréningu: dlhodobý výcvik expertov
- Počet atribútov: 10-20
- Typ škály: )( = na prahu, 1 = slabá, 2 = stredná, 3 = silná intenzita

**Postup:**
1. Výber a tréning panelistov
2. Individuálne hodnotenie
3. Diskusia vedená vedúcim panelu
4. Konsenzuálny profil (poradie, intenzita, dochuť, amplitúda)

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

**Princíp:** Panelisti hodnotia mechanické, geometrické a ďalšie (vlhkosť, tuk) textúrne vlastnosti v poradí, v akom sa objavujú (prvé zahryznutie → žuvanie → reziduum), s referenčnými škálami (Brandt, Skinner & Coleman, 1963; Szczesniak, 1963; ISO 11036:2020).

**Špecifikácie:**
- Počet panelistov: 8-12
- Dĺžka tréningu: dlhá (desiatky hodín a viac)
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
2. Každý si vytvorí vlastné deskriptory a podľa každého produkty **zoradí** (Dairou & Sieffermann, 2002)
3. Výsledky sa analyzujú pomocou GPA alebo MFA

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
3. Rozdiely medzi produktmi sa testujú **Cochranovým Q testom** (každý respondent hodnotí všetky produkty → závislé binárne dáta), párovo McNemarovým testom; mapa produktov a deskriptorov korešpondenčnou analýzou (CA)

**Výpočet:**

```
Frekvencia výberu: f_i = (počet výberov deskriptoru i) / n × 100

Cochranov Q test (pre každý deskriptor, k produktov, n respondentov):
Q = (k − 1) · [k·Σ C_j² − N²] / [k·N − Σ R_i²]
- C_j = počet výberov pri produkte j, R_i = počet výberov respondenta i, N = Σ C_j
- Q ~ χ²(k − 1)
Obyčajný χ² test nezávislosti tu nie je vhodný (opakované merania).
```

> 🧪 **SaIT:** CATA a napping — [cvičenie 17](https://senzorika.github.io/SaIT/teoria/cvicenie17.html) · korešpondenčná analýza — [cvičenie 9](https://senzorika.github.io/SaIT/teoria/cvicenie09.html)

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
- P_s = 1/m + 1.645 × √((1/m) × (1-1/m) / n)   (n = počet hodnotení)
- Ak % > P_s → atribút je signifikantne dominantný (Pineau et al., 2009)
```

> 🧪 **SaIT:** [cvičenie 18](https://senzorika.github.io/SaIT/teoria/cvicenie18.html) · interaktívna aplikácia [`TDS_app.R`](https://github.com/senzorika/SaIT/blob/master/Senzometricke_appky/TDS_app.R)

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
TCATA krivka: % panelistov, ktorí majú atribút i označený v čase t
(Castura, Antúnez, Giménez & Ares, 2016)

Porovnanie produktov:
- v každom čase t sa porovnajú podiely medzi produktmi
  (napr. Fisherov / McNemarov test, príp. Cochranov Q)
- úroveň náhody 1/m ako pri TDS sa tu NEPOUŽÍVA —
  hodnotiteľ môže označiť viac atribútov naraz
```

> 🧪 **SaIT:** TDS a TCATA krivky — [cvičenie 18](https://senzorika.github.io/SaIT/teoria/cvicenie18.html) · interaktívna aplikácia [`TCATA_app.R`](https://github.com/senzorika/SaIT/blob/master/Senzometricke_appky/TCATA_app.R)

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
- P_s = 1/m + 1.645 × √((1/m) × (1-1/m) / n)   (n = počet hodnotení)
- Ak % > P_s → atribút je signifikantne dominantný (Pineau et al., 2009)
```

> 🧪 **SaIT:** [cvičenie 18](https://senzorika.github.io/SaIT/teoria/cvicenie18.html) · interaktívna aplikácia [`TDS_app.R`](https://github.com/senzorika/SaIT/blob/master/Senzometricke_appky/TDS_app.R)

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
TCATA krivka: % panelistov, ktorí majú atribút i označený v čase t
(Castura, Antúnez, Giménez & Ares, 2016)

Porovnanie produktov:
- v každom čase t sa porovnajú podiely medzi produktmi
  (napr. Fisherov / McNemarov test, príp. Cochranov Q)
- úroveň náhody 1/m ako pri TDS sa tu NEPOUŽÍVA —
  hodnotiteľ môže označiť viac atribútov naraz
```

> 🧪 **SaIT:** TDS a TCATA krivky — [cvičenie 18](https://senzorika.github.io/SaIT/teoria/cvicenie18.html) · interaktívna aplikácia [`TCATA_app.R`](https://github.com/senzorika/SaIT/blob/master/Senzometricke_appky/TCATA_app.R)

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
- Signifikantnosť: % > P_s (úroveň náhody + významnosti)
- Rozdielové krivky medzi produktmi, TDS pásy (bands), trajektórie (CA)

**TCATA dáta:**
- TCATA krivky pre každý atribút
- Rozdiely medzi produktmi v čase (Fisherov/McNemarov test)
- Trajektórie produktov v priestore CA

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

Porovnanie viacerých produktov: ANOVA s respondentom ako blokom (alebo zmiešaný model), resp. Friedmanov test; post-hoc Tukey. ISO 11136 odporúča aspoň ~60 spotrebiteľov na skupinu, bežne 100+.

> 🧪 **SaIT:** [cvičenie 5b](https://senzorika.github.io/SaIT/teoria/cvicenie05b.html) (ANOVA, Friedman, post-hoc) · [cvičenie 5c](https://senzorika.github.io/SaIT/teoria/cvicenie05c.html) (kompletný postup s dátami z Excelu)

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
Interná preferenčná mapa (MDPREF):
- PCA na matici produkty × spotrebitelia (hedonické skóre)
- produkty = body, spotrebitelia = vektory (smer ich preferencie)
- senzorické atribúty sa do mapy premietnu dodatočne (korelácie)

Externá preferenčná mapa (PREFMAP):
- priestor produktov z deskriptívnej analýzy (PCA na QDA/CATA dátach)
- obľúbenosť každého spotrebiteľa sa regresiou modeluje v tomto priestore
  (vektorový, kruhový/ideálny bod model)
- výsledok: oblasti priestoru s najvyšším podielom spokojných spotrebiteľov
```

> 🧪 **SaIT:** mapa preferencií — [cvičenie 11a](https://senzorika.github.io/SaIT/teoria/cvicenie11a.html) · PCA — [cvičenie 7](https://senzorika.github.io/SaIT/teoria/cvicenie07.html)

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
Aditívny model užitočnosti:
- U_j = β_0 + Σ_i β_i(l) · x_ij(l)

Kde:
- U_j = celková užitočnosť profilu j
- β_i(l) = čiastková užitočnosť (part-worth) úrovne l atribútu i
- x_ij(l) = 1, ak profil j má úroveň l atribútu i, inak 0
Relatívna dôležitosť atribútu = rozpätie jeho part-worth / súčet rozpätí
(ratingový conjoint: regresia / ANOVA; výberový conjoint: logit, HB)
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
- Počet kandidátov (príchutí, variantov): 10-20
- Veľkosť portfólia: k položiek (napr. 3 z 12)

**Postup:**
1. Zber dát o akceptácii (napr. hedonické skóre ≥ 7 = „akceptuje")
2. Pre každú kombináciu k položiek výpočet pokrytia (reach)
3. Pri zhode reach rozhoduje frekvencia
4. Identifikácia optimálnej kombinácie

**Výpočet:**

```
Reach(S) = počet spotrebiteľov, ktorí akceptujú aspoň 1 položku z kombinácie S / n × 100
Frequency(S) = priemerný počet akceptovaných položiek z S na spotrebiteľa
Optimum = kombinácia s max. Reach (úplné prehľadanie alebo greedy algoritmus)
```

> 🧪 **SaIT:** TURF analýza — [cvičenie 11a](https://senzorika.github.io/SaIT/teoria/cvicenie11a.html)

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

Penalty analýza (pokles obľúbenosti):
Pokles_nízka  = Priemer liking "JAR" − Priemer liking "Príliš nízka"
Pokles_vysoká = Priemer liking "JAR" − Priemer liking "Príliš vysoká"
Vážený pokles = pokles × podiel respondentov v danej skupine
Interpretuje sa zvyčajne len skupina s ≥ 20 % respondentov.
```

**Výhody:**
- Poskytuje informáciu o optimalizácii
- Vhodný pre NPD
- Jednoduchý na použitie — určený pre netrénovaných spotrebiteľov

**Nevýhody:**
- Spája intenzitu a hodnotenie v jednej otázke
- Subjektívne hranice
- Nevhodný pre trénovaný deskriptívny panel

> 🧪 **SaIT:** JAR škála a penalty analýza — [cvičenie 12](https://senzorika.github.io/SaIT/teoria/cvicenie12.html)

---

### 4.6 Just-About-Right

Just-About-Right je iný názov tej istej metódy — pozri [4.5 JAR škála](#45-jar-škála). (Predošlá verzia tu duplicitne opakovala text sekcie 4.5.)

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
Graf priemerov (x̄-graf) pre skóre panelu:
Horná regulačná medza (UCL) = x̿ + 3·σ/√n
Stredná čiara (CL) = x̿
Dolná regulačná medza (LCL) = x̿ − 3·σ/√n

Kde:
- x̿ = dlhodobý priemer (z referenčného obdobia)
- σ = smerodajná odchýlka jednotlivých hodnotení (odhad z referenčného obdobia)
- n = počet hodnotení v jednom bode grafu (napr. hodnotiteľov na šaržu)
Pre jednotlivé hodnoty (n = 1) platí x̄ ± 3σ.
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
Podobnosť = 1 - (Σ|xi - yi|) / (n · R)

Kde:
- xi = intenzita atribútu i v novom produkte
- yi = intenzita atribútu i v benchmark produkte
- n = počet atribútov, R = rozsah škály (napr. 15) → výsledok v intervale 0–1
Alternatívy: euklidovská vzdialenosť v priestore PCA, RV koeficient.
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

Alternatívne (a pre spotrebiteľský pohľad vhodnejšie) je modelovať **pravdepodobnosť odmietnutia** produktu spotrebiteľmi analýzou prežitia (Hough, 2010) — pozri kapitolu [Shelf-life](../shelf_life/sensory_shelf_life.md). Norma: ISO 16779:2015.

> 🧪 **SaIT:** Kaplan-Meierov odhad a cut-off bod — [cvičenie 10](https://senzorika.github.io/SaIT/teoria/cvicenie10.html)

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
| Nadradenosť (superiority) | "Najsladší", "Chutí lepšie" | Porovnanie so všetkými relevantnými konkurentmi (škály, 2-AFC / preferenčný test) |
| Porovnávacie | "Sladší ako X" | Smerový párový test (2-AFC) alebo škála s trénovaným panelom |
| Parita / rovnocennosť | "Chutí rovnako" | Test podobnosti / ekvivalencie (nie „nevýznamný rozdiel") |
| Deskriptívne | "Má intenzívnu chuť" | Deskriptívna analýza |
| Spotrebiteľské | "Spotrebitelia ho preferujú" | Spotrebiteľské preferenčné / hedonické testy |

Návod: ASTM E1958 (Standard Guide for Sensory Claim Substantiation); podrobne kapitola [Senzorické claims](../claims/senzorické_claims.md).

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
Cieľom je preukázať PODOBNOSŤ, nie absenciu významného rozdielu:
- rozlišovací test v režime testu podobnosti: vopred zvolené p_d (napr. 20–30 %),
  α a malé β; podobnosť je preukázaná, ak horná hranica jednostranného
  intervalu spoľahlivosti pre p_d < zvolené p_d
- alebo test ekvivalencie (TOST) na škálových dátach s vopred danou hranicou δ
Nevýznamný rozdiel pri malom n NIE JE dôkazom podobnosti.
```

> 🧪 **SaIT:** test podobnosti — [cvičenie 13](https://senzorika.github.io/SaIT/teoria/cvicenie13.html) · sila testu — [cvičenie 14](https://senzorika.github.io/SaIT/teoria/cvicenie14.html)

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
Podobnosť = 1 - (Σ|xi - yi|) / (n · R)

Kde:
- xi = intenzita atribútu i v novej variácii
- yi = intenzita atribútu i v pôvodnom produkte
- n = počet atribútov, R = rozsah škály
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
3. Rozdiely medzi produktmi sa testujú **Cochranovým Q testom** (každý respondent hodnotí všetky produkty → závislé binárne dáta), párovo McNemarovým testom; mapa produktov a deskriptorov korešpondenčnou analýzou (CA)

**Výpočet:**

```
Frekvencia výberu: f_i = (počet výberov deskriptoru i) / n × 100

Cochranov Q test (pre každý deskriptor, k produktov, n respondentov):
Q = (k − 1) · [k·Σ C_j² − N²] / [k·N − Σ R_i²]
- C_j = počet výberov pri produkte j, R_i = počet výberov respondenta i, N = Σ C_j
- Q ~ χ²(k − 1)
Obyčajný χ² test nezávislosti tu nie je vhodný (opakované merania).
```

> 🧪 **SaIT:** CATA a napping — [cvičenie 17](https://senzorika.github.io/SaIT/teoria/cvicenie17.html) · korešpondenčná analýza — [cvičenie 9](https://senzorika.github.io/SaIT/teoria/cvicenie09.html)

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

**Princíp:** Panelisti triedia produkty do skupín podľa senzorickej podobnosti (voľné triedenie).

**Špecifikácie:**
- Počet panelistov: typicky 15–50 (aj netrénovaní spotrebitelia)
- Dĺžka tréningu: Minimálna
- Počet produktov: 10-20

**Postup:**
1. Panelisti dostanú všetky produkty naraz
2. Triedia ich do skupín podľa senzorickej podobnosti (počet skupín je voľný)
3. Z triedení sa vytvorí matica spoločného výskytu (co-occurrence) → MDS, DISTATIS alebo MCA

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

**Princíp:** Panelisti umiestnia produkty na hárok papiera („obrus", typicky 60 × 40 cm) tak, aby vzdialenosť zodpovedala senzorickej odlišnosti (projektívne mapovanie; Pagès, 2005).

**Špecifikácie:**
- Počet panelistov: typicky 15–30 (aj spotrebitelia)
- Dĺžka tréningu: Minimálna
- Počet produktov: 6-15

**Postup:**
1. Panelisti dostanú všetky produkty naraz
2. Umiestnia ich na hárok podľa senzorickej podobnosti; zapíšu sa súradnice X, Y
3. Výsledky sa analyzujú pomocou **viacnásobnej faktorovej analýzy (MFA)**, príp. GPA

> 🧪 **SaIT:** CATA a napping — [cvičenie 17](https://senzorika.github.io/SaIT/teoria/cvicenie17.html)

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

**Princíp:** Napping doplnený o voľné deskriptory, ktoré panelista napíše k skupinám produktov na hárku (Perrin et al., 2008).

**Špecifikácie:**
- Počet panelistov: 10-30
- Dĺžka tréningu: Minimálna
- Počet atribútov: voľné (vlastné slová panelistov)

**Postup:**
1. Panelisti dostanú všetky produkty naraz
2. Umiestnia ich na hárok (ako pri nappingu) a k produktom/skupinám pripíšu deskriptory
3. Súradnice + frekvencie slov sa analyzujú pomocou MFA (slová ako doplnkové premenné)

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
| Mapa podobnosti s popisom | Ultra Flash Profile | Napping + deskriptory |

---

## 8. Záver

Senzorické metódy sú nevyhnutné pre kvalitatívny vývoj a kontrolu potravinárskych produktov. Správna voľba metódy závisí od:
- Cieľa testovania (rozlišovanie vs. deskripcia vs. prijatie)
- Typu produktu a atribútov
- Dostupných zdrojov (čas, personál, financie)
- Požadovanej štatististickej sily

Dôležité je dodržať princípy dobrej senzorickej praxe (GSP) a zabezpečiť kvalifikáciu a tréning panelistov v súlade s ISO 8586:2023.

---

## 9. Prepojenie s praktickými cvičeniami v R (SaIT)

Repozitár [senzorika/SaIT](https://github.com/senzorika/SaIT) (Senzometria v R) obsahuje ku každej metóde R skript (SK aj EN) a teoretickú stránku s grafmi. Prehľad väzieb na túto kapitolu:

| Metóda v tejto kapitole | Cvičenie SaIT | Teória | Skript |
|---|---|---|---|
| Rozlišovacie testy – binomický test, χ², McNemar | 5a | [📖](https://senzorika.github.io/SaIT/teoria/cvicenie05a.html) | [`cvicenie5a.R`](https://github.com/senzorika/SaIT/blob/master/cvicenie5a.R) |
| Hedonické testy, QDA – ANOVA, Friedman, post-hoc | 5b, 5c | [📖](https://senzorika.github.io/SaIT/teoria/cvicenie05b.html) [📖](https://senzorika.github.io/SaIT/teoria/cvicenie05c.html) | [`cvicenie5b.R`](https://github.com/senzorika/SaIT/blob/master/cvicenie5b.R) |
| Neúplné bloky (veľa vzoriek) | 5d | [📖](https://senzorika.github.io/SaIT/teoria/cvicenie05d.html) | [`cvicenie5d.R`](https://github.com/senzorika/SaIT/blob/master/cvicenie5d.R) |
| Senzorika vs. inštrumentálne merania | 6 | [📖](https://senzorika.github.io/SaIT/teoria/cvicenie06.html) | [`cvicenie6.R`](https://github.com/senzorika/SaIT/blob/master/cvicenie6.R) |
| PCA deskriptívnych profilov | 7 | [📖](https://senzorika.github.io/SaIT/teoria/cvicenie07.html) | [`cvicenie7.R`](https://github.com/senzorika/SaIT/blob/master/cvicenie7.R) |
| Segmentácia produktov/spotrebiteľov | 8 | [📖](https://senzorika.github.io/SaIT/teoria/cvicenie08.html) | [`cvicenie8.R`](https://github.com/senzorika/SaIT/blob/master/cvicenie8.R) |
| Korešpondenčná analýza (CATA) | 9 | [📖](https://senzorika.github.io/SaIT/teoria/cvicenie09.html) | [`cvicenie9.R`](https://github.com/senzorika/SaIT/blob/master/cvicenie9.R) |
| Shelf-life – analýza prežitia | 10 | [📖](https://senzorika.github.io/SaIT/teoria/cvicenie10.html) | [`cvicenie10.R`](https://github.com/senzorika/SaIT/blob/master/cvicenie10.R) |
| TURF, preferenčná mapa | 11a | [📖](https://senzorika.github.io/SaIT/teoria/cvicenie11a.html) | [`cvicenie11a.R`](https://github.com/senzorika/SaIT/blob/master/cvicenie11a.R) |
| Otvorené odpovede spotrebiteľov (text mining) | 11b | [📖](https://senzorika.github.io/SaIT/teoria/cvicenie11b.html) | [`cvicenie11b.R`](https://github.com/senzorika/SaIT/blob/master/cvicenie11b.R) |
| JAR a penalty analýza | 12 | [📖](https://senzorika.github.io/SaIT/teoria/cvicenie12.html) | [`cvicenie12.R`](https://github.com/senzorika/SaIT/blob/master/cvicenie12.R) |
| Thurstonov d′, test podobnosti | 13 | [📖](https://senzorika.github.io/SaIT/teoria/cvicenie13.html) | [`cvicenie13.R`](https://github.com/senzorika/SaIT/blob/master/cvicenie13.R) |
| Sila testu, počet hodnotiteľov | 14 | [📖](https://senzorika.github.io/SaIT/teoria/cvicenie14.html) | [`cvicenie14.R`](https://github.com/senzorika/SaIT/blob/master/cvicenie14.R) |
| Výkonnosť panelu (QC panel, QDA) | 15 | [📖](https://senzorika.github.io/SaIT/teoria/cvicenie15.html) | [`cvicenie15.R`](https://github.com/senzorika/SaIT/blob/master/cvicenie15.R) |
| Zmiešané modely (hodnotiteľ ako náhodný efekt) | 16 | [📖](https://senzorika.github.io/SaIT/teoria/cvicenie16.html) | [`cvicenie16.R`](https://github.com/senzorika/SaIT/blob/master/cvicenie16.R) |
| CATA, napping | 17 | [📖](https://senzorika.github.io/SaIT/teoria/cvicenie17.html) | [`cvicenie17.R`](https://github.com/senzorika/SaIT/blob/master/cvicenie17.R) |
| TDS, TCATA | 18 | [📖](https://senzorika.github.io/SaIT/teoria/cvicenie18.html) | [`cvicenie18.R`](https://github.com/senzorika/SaIT/blob/master/cvicenie18.R) |
| Prípadové štúdie (rozlišovanie, receptúra, JAR, shelf-life, audit panelu) | 19, 20 | [📖](https://senzorika.github.io/SaIT/teoria/cvicenie19.html) [📖](https://senzorika.github.io/SaIT/teoria/cvicenie20.html) | [`cvicenie19.R`](https://github.com/senzorika/SaIT/blob/master/cvicenie19.R) |

Interaktívne Shiny aplikácie (PCA, TDS, TCATA, NPS, LDA): [`Senzometricke_appky/`](https://github.com/senzorika/SaIT/tree/master/Senzometricke_appky).
