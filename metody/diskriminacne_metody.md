# Diskriminačné metody v senzorikej analýze

## 1. Úvod do diskriminačných metód

### 1.1 Čo sú diskriminačné metody?

Diskriminačné metody (tiež nazývané **testy rozlíšenia** alebo **difference tests**) predstavujú skupinu senzorických techník, ktorých cieľom je zistiť, či existuje **významný senzorický rozdiel** medzi dvoma alebo viacerými vzorkami. Na rozdiel od deskriptívnych metód, ktoré sa zameriavajú na popis vlastností produktu, diskriminačné metody odpovedajú na jednu konkrétnu otázku: *„Rozpozná testovateľ rozdiel medzi vzorkami?"*

### 1.2 Na čo sa používajú?

| Oblast aplikácie | Príklad použitia |
|---|---|
| **Kontrola kvality** | Zmena suroviny, nový dodávateľ |
| **Vývoj produktu** | Optimalizácia receptúry, zníženie cukru/tuku |
| **Stabilita produktu** | Overenie trvanlivosti, porovnanie s referenciou |
| **Výrobný proces** | Zmena parametrov výroby (teplota, čas) |
| **Konzumentské testy** | Porovnanie s konkurenciou, testovanie „me-too" produktu |
| **Výber panelistov** | Skríning tréning senzorového panelu |

### 1.3 Typy diskriminačných metód

```
Diskriminačné metody
├── Trojuholníkový test (Triangle Test)
├── Duo-trio test
├── Párový porovnávací test (Paired Comparison)
├── "A" – "nie A" test
├── Test rovnakosti (Same-Different)
├── Tetrad test
├── 2-out-of-5 test
├── 3-AFC (Three-Alternative Forced Choice)
└── n-AFC (n-Alternative Forced Choice)
```

---

## 2. Trojuholníkový test (Triangle Test)

### 2.1 Princíp a história

Trojuholníkový test je jednou z najstarších a najrozšírenejších diskriminačných metód. Bol popísaný v roku 1943 (Roessler et al.) a odvtedy sa stal štandardom v senzorickom priemysle.

**Princíp:** Testovateľovi sa predložia **tri vzorky**, z ktorých sú **dve rovnaké** a **jedna odlišná**. Testovateľ má za úlohu identifikovať **odlišnú vzorku**. Vzorky sú prezentované v náhodnom poradí, pričom existuje 6 možných kombinácií poradia (AAB, ABA, BAA, BBA, BAB, ABB).

### 2.2 Kedy použiť

- Keď existujú **dve vzorky** na porovnanie
- Keď sa predpokladá, že rozdiel je **subtilný** (nie výrazný)
- Keď je potrebná **vysoká citlivosť** pri minimálnom počte vzoriek
- Keď testovateľia sú **cvičení** (trained panel)
- Keď sa testujú **homogénne** výrobky (napr. mlieko, olej, víno)

### 2.3 Výpočet binomického rozdelenia

Pravdepodobnosť správneho rozpoznania odlišnej vzorky pri náhodnom hádaní je **p = 1/3**.

**Vzorec pre pravdepodobnosť k správnych odpovedí:**

$$P(X = k) = \binom{n}{k} \cdot p^k \cdot (1-p)^{n-k}$$

Kde:
- **n** = počet testovateľov (alebo počet opakovaní)
- **k** = počet správnych odpovedí
- **p** = 1/3 (pravdepodobnosť úspechu pri náhodnom hádaní)

**Výpočet kumulatívnej pravdepodobnosti:**

$$P(X \geq k) = \sum_{i=k}^{n} \binom{n}{i} \cdot \left(\frac{1}{3}\right)^i \cdot \left(\frac{2}{3}\right)^{n-i}$$

### 2.4 Kritické hodnoty

Kritická hodnota je minimálny počet správnych odpovedí potrebný na preukázanie štatisticky významného rozdielu.

**Kritické hodnoty pre trojuholníkový test (α = 0.05):**

| n (počet testovateľov) | Kritická hodnota (α = 0.05) | Kritická hodnota (α = 0.01) | Kritická hodnota (α = 0.001) |
|---|---|---|---|
| 10 | 7 | 8 | 9 |
| 15 | 9 | 10 | 12 |
| 20 | 11 | 12 | 14 |
| 25 | 13 | 14 | 16 |
| 30 | 14 | 16 | 18 |
| 35 | 16 | 17 | 19 |
| 40 | 17 | 19 | 21 |
| 45 | 19 | 20 | 22 |
| 50 | 20 | 22 | 24 |
| 60 | 23 | 25 | 27 |
| 70 | 26 | 28 | 30 |
| 80 | 28 | 30 | 32 |
| 90 | 31 | 33 | 35 |
| 100 | 33 | 35 | 37 |

### 2.5 Výhody a nevýhody

| Výhody | Nevýhody |
|---|---|
| Jednoduchý na pochopenie | Náročný na testovateľov (vysoká kognitívna záťaž) |
| Vysoká citlivosť | Vyžaduje cvičený panel |
| Štandardizovaný a široko akceptovaný | Môže spôsobiť únavu pri opakovaní |
| Náhodné poradie eliminuje bias | Nekontroluje sa „guessing strategy" |
| Vhodný pre väčšinu produktov | Menej vhodný pre výrazne odlišné vzorky |

### 2.6 Praktický príklad s výpočtom

**Scénár:** Testuje sa, či zmena dodávateľa cukru spôsobí rozdiel v chuti koláča. Používa sa panel 30 cvičených testovateľov.

**Výsledky:** 16 testovateľov správne identifikovalo odlišnú vzorku.

**Výpočet:**

```
n = 30, k = 16, p = 1/3

P(X ≥ 16) = Σ (30 choose i) × (1/3)^i × (2/3)^(30-i)
            pre i = 16 až 30

P(X ≥ 16) ≈ 0.0089
```

**Interpretácia:** Keďže p-hodnota (0.0089) < α (0.05), existuje **štatisticky významný rozdiel** medzi vzorkami. Zmena dodávateľa cukru má merateľný vplyv na senzorické vlastnosti koláča.

---

## 3. Duo-trio test

### 3.1 Princíp

Duo-trio test bol navrhnutý ako **menej náročná alternatíva** k trojuholníkovému testu. Testovateľ najprv dostane **referenčnú vzorku** (R), potom dve anonymné vzorky (jedna zhodná s R, jedna odlišná). Úlohou je identifikovať, ktorá z anonymných vzoriek je **rovnaká** ako referenčná.

**Prezentácia:**
```
Krok 1: R (referenčná vzorka)
Krok 2: X, Y (anonymné vzorky v náhodnom poradí)
Úloha: Ktorá z X, Y je rovnaká ako R?
```

### 3.2 Kedy použiť

- Keď sú testovateľia **menej cvičení**
- Keď je potrebná **nižšia kognitívna záťaž**
- Pri testovaní **výrazne odlišných** vzoriek (kde by trojuholníkový test bol príliš jednoduchý)
- Keď sa preferuje **referenčný rámec** (anchoring)
- Pri **rýchlych screeningových** testoch

### 3.3 Výpočet

Pravdepodobnosť správnej odpovede pri náhodnom hádaní je **p = 1/2**.

$$P(X \geq k) = \sum_{i=k}^{n} \binom{n}{i} \cdot \left(\frac{1}{2}\right)^i \cdot \left(\frac{1}{2}\right)^{n-i}$$

### 3.4 Kritické hodnoty

**Kritické hodnoty pre duo-trio test (α = 0.05):**

| n | Kritická hodnota (α = 0.05) | Kritická hodnota (α = 0.01) |
|---|---|---|
| 10 | 8 | 9 |
| 15 | 11 | 12 |
| 20 | 14 | 15 |
| 25 | 16 | 18 |
| 30 | 19 | 20 |
| 35 | 21 | 23 |
| 40 | 23 | 25 |
| 45 | 25 | 27 |
| 50 | 27 | 29 |
| 60 | 31 | 33 |
| 70 | 34 | 37 |
| 80 | 38 | 40 |
| 90 | 41 | 44 |
| 100 | 44 | 47 |

### 3.5 Výhody a nevýhody

| Výhody | Nevýhody |
|---|---|
| Nižšia kognitívna záťaž | Nižšia citlivosť ako trojuholníkový test |
| Vhodný pre menej cvičené panelisty | Vyžaduje viac testovateľov pre rovnakú silu testu |
| Referenčná vzorka pomáha | Môže viesť k „bias" v preferencii |
| Jednoduchý na organizácie | Menej vhodný pre produkty s výraznými rozdielmi |

---

## 4. Párový porovnávací test (Paired Comparison)

### 4.1 Princíp

Párový porovnávací test (tiež **dvojvzorkový test** alebo **directional difference test**) je najjednoduchšia diskriminačná metóda. Testovateľ dostane **dve vzorky** a musí určiť, ktorá je **viac intenzívna** v konkrétnej senzorickej dimenzii (napr. „Ktorá vzorka je sladšia?").

**Dôležité:** Testovateľ musí poznať **smer rozdielu** (napr. sladkosť, horkosť, kyslosť). Nejedná sa o „ktorá je odlišná", ale o „ktorá je viac X".

### 4.2 Kedy použiť

- Keď je známy **konkrétny atribút** rozdielu
- Pri **rýchlych screeningových** testoch
- Keď sa testuje **jeden konkrétny atribút** (napr. sladkosť)
- Pri **konzumentských** testoch (jednoduché na pochopenie)
- Keď je potrebná **maximálna jednoduchosť**

### 4.3 Výpočet

Pravdepodobnosť správnej odpovede pri náhodnom hádaní je **p = 1/2**.

$$P(X \geq k) = \sum_{i=k}^{n} \binom{n}{i} \cdot \left(\frac{1}{2}\right)^n$$

### 4.4 Kritické hodnoty

**Kritické hodnoty pre párový porovnávací test (α = 0.05):**

| n | Kritická hodnota (α = 0.05) | Kritická hodnota (α = 0.01) |
|---|---|---|
| 10 | 9 | 10 |
| 15 | 12 | 13 |
| 20 | 15 | 16 |
| 25 | 18 | 19 |
| 30 | 20 | 22 |
| 35 | 23 | 24 |
| 40 | 25 | 27 |
| 45 | 27 | 29 |
| 50 | 29 | 31 |
| 60 | 33 | 35 |
| 70 | 37 | 39 |
| 80 | 41 | 43 |
| 90 | 44 | 47 |
| 100 | 47 | 50 |

### 4.5 Výhody a nevýhody

| Výhody | Nevýhody |
|---|---|
| Najjednoduchšia metóda | Známy smer rozdielu môže viesť k bias |
| Vysoká rýchlosť testovania | Nedá sa použiť, ak smer rozdielu nie je známy |
| Vhodný pre konzumentov | Nižšia citlivosť (vyžaduje viac testovateľov) |
| Jednoduchá interpretácia | Testuje len jeden atribút naraz |

---

## 5. "A" – "nie A" test

### 5.1 Princíp

Testovateľ je najprv **cvičený** na rozpoznávanie vzorky „A" (referenčná vzorka). Potom dostáva sériu vzoriek a musí pre každú rozhodnúť, či je „A" alebo „nie A". Tento test je založený na **pamäti** a **rozpoznávaní vzoru**.

**Prezentácia:**
```
Fáza tréningu: Opakovaná prezentácia vzorky A
Fáza testovania: Náhodné vzorky A a B
Úloha: Je táto vzorka A alebo nie A?
```

### 5.2 Kedy použiť

- Keď je potrebné testovať **rozpoznávanie** (nie len rozdiel)
- Pri **rýchlych kontrolných** testoch (napr. na výrobe)
- Keď je dôležité **zapamätanie si referencie**
- Pri testovaní **komplexných** produktov (kde je rozdiel subtilný)
- Keď sa testuje **viacero atribútov** naraz

### 5.3 Výpočet

Pravdepodobnosť správnej odpovede pri náhodnom hádaní je **p = 1/2**.

$$P(X \geq k) = \sum_{i=k}^{n} \binom{n}{i} \cdot \left(\frac{1}{2}\right)^n$$

### 5.4 Kritické hodnoty

Kritické hodnoty sú **rovnaké** ako pre duo-trio test (p = 1/2).

### 5.5 Výhody a nevýhody

| Výhody | Nevýhody |
|---|---|
| Vysoká citlivosť pri tréningu | Vyžaduje intenzívny tréning |
| Vhodný pre komplexné produkty | Pamäť môže byť kľúčovým faktorom |
| Rýchly po tréningu | Môže viesť k „false positives" |
| Vhodný pre kontrolu kvality | Nekontroluje sa úroveň tréningu |

---

## 6. Test rovnakosti (Same-Different)

### 6.1 Princíp

Testovateľ dostane **dve vzorky** a musí rozhodnúť, či sú **rovnaké** alebo **odlišné**. Na rozdiel od trojuholníkového testu, testovateľ **nevypisuje** ktorá je odlišná, len rozhoduje o rovnakosti/odlišnosti.

**Prezentácia:**
```
Vzorka 1: X
Vzorka 2: Y
Otázka: Sú tieto vzorky rovnaké alebo odlišné?
```

### 6.2 Kedy použiť

- Keď sa testuje **celková podobnosť** (nie konkrétny atribút)
- Pri **rýchlych screeningových** testoch
- Keď testovateľia **nevypisú** ktorá vzorka je odlišná
- Pri testovaní **viacerých atribútov** naraz
- Keď je potrebná **nižšia kognitívna záťaž**

### 6.3 Výpočet

Pravdepodobnosť správnej odpovede pri náhodnom hádaní je **p = 1/2**.

$$P(X \geq k) = \sum_{i=k}^{n} \binom{n}{i} \cdot \left(\frac{1}{2}\right)^n$$

### 6.4 Výhody a nevýhody

| Výhody | Nevýhody |
|---|---|
| Jednoduchý na pochopenie | Nižšia citlivosť |
| Neznámy smer rozdielu | Menej informatívny (nevie sa ktorá je odlišná) |
| Vhodný pre rýchle testy | Vyžaduje viac testovateľov |
| Nízka kognitívna záťaž | Môže byť náročný na interpretáciu |

---

## 7. Tetrad test

### 7.1 Princíp

Tetrad test je **novšia metóda** (navrhnutá v roku 2001), ktorá kombinuje prvky trojuholníkového a duo-trio testu. Testovateľ dostane **štyri vzorky**, z ktorých sú **dve rovnaké** a **dve odlišné** (napr., AABB). Úlohou je **zoskupiť** vzorky do dvoch párov rovnakých vzoriek.

**Prezentácia:**
```
Vzorky: A, A, B, B (v náhodnom poradí)
Úloha: Zoskupte vzorky do dvoch párov rovnakých vzoriek
```

### 7.2 Kedy použiť

- Keď je potrebná **vyššia citlivosť** ako pri trojuholníkovom teste
- Pri testovaní **subtilných** rozdielov
- Keď je dôležité **minimalizovať únavu** testovateľov
- Pri **komplexných** produktoch s viacerými atribútmi

### 7.3 Výpočet

Pravdepodobnosť správnej odpovede pri náhodnom hádaní je **p = 1/3** (rovnaké ako trojuholníkový test).

$$P(X \geq k) = \sum_{i=k}^{n} \binom{n}{i} \cdot \left(\frac{1}{3}\right)^i \cdot \left(\frac{2}{3}\right)^{n-i}$$

### 7.4 Výhody a nevýhody

| Výhody | Nevýhody |
|---|---|
| Vyššia citlivosť ako trojuholníkový test | Menej známa metóda |
| Nižšia kognitívna záťaž | Vyžaduje viac vzoriek na testovateľa |
| Vhodný pre subtilné rozdiely | Menej štandardizovaná |
| Menej únavný | Vyžaduje špeciálny tréning |

---

## 8. Porovnanie metód

### 8.1 Komparatívna tabuľka

| Metóda | p (náhodný úspech) | Citlivosť | Náročnosť na testovateľa | Rýchlosť | Vhodnosť pre konzumentov |
|---|---|---|---|---|---|
| **Trojuholníkový** | 1/3 | Vysoká | Vysoká | Stredná | Nie |
| **Duo-trio** | 1/2 | Stredná | Stredná | Stredná | Občas |
| **Párový porovnávací** | 1/2 | Nízka | Nízka | Vysoká | Áno |
| **"A" – "nie A"** | 1/2 | Stredná | Vysoká (tréning) | Vysoká (po tréningu) | Občas |
| **Same-Different** | 1/2 | Stredná | Nízka | Vysoká | Áno |
| **Tetrad** | 1/3 | Vysoká | Stredná | Stredná | Nie |

### 8.2 Počet testovateľov pre rovnakú silu testu (α = 0.05, power = 0.80)

| Metóda | Odhadovaný počet testovateľov |
|---|---|
| Trojuholníkový | 30–50 |
| Duo-trio | 50–80 |
| Párový porovnávací | 60–100 |
| "A" – "nie A" | 50–80 |
| Same-Different | 50–80 |
| Tetrad | 25–40 |

---

## 9. Výber správnej metódy

### 9.1 Rozhodovací diagram

```
                    ┌─────────────────────────┐
                    │  Je smer rozdielu známy? │
                    └───────────┬─────────────┘
                                │
                    ┌───────────┴───────────┐
                    │                       │
                   Áno                     Nie
                    │                       │
            ┌───────┴───────┐       ┌───────┴───────┐
            │ Párový        │       │  Je rozdiel   │
            │ porovnávací   │       │  subtilný?    │
            │ test          │       └───────┬───────┘
            └───────────────┘               │
                                  ┌─────────┴─────────┐
                                  │                   │
                                 Áno                 Nie
                                  │                   │
                          ┌───────┴───────┐   ┌───────┴───────┐
                          │ Trojuholníkový│   │  Duo-trio     │
                          │ alebo Tetrad  │   │  alebo        │
                          │ test          │   │  Same-Different│
                          └───────────────┘   └───────────────┘
```

### 9.2 Kritériá výbera

| Kritérium | Odporúčaná metóda |
|---|---|
| Známy smer rozdielu | Párový porovnávací test |
| Subtilný rozdiel, cvičený panel | Trojuholníkový test |
| Subtilný rozdiel, menej cvičený panel | Tetrad test |
| Rýchly screening | Párový porovnávací test |
| Konzumentský test | Párový porovnávací test |
| Komplexný produkt, viac atribútov | "A" – "nie A" test |
| Kontrola kvality na výrobe | "A" – "nie A" test |
| Minimálna kognitívna záťaž | Same-Different test |

---

## 10. Praktické príklady

### Príklad 1: Trojuholníkový test – Zmena receptúry jogurta

**Scénár:** Výrobca chce znížiť obsah cukru v jogurte o 30% bez zmeny chuti. Testuje sa, či cvičený panel (n = 40) rozpozná rozdiel.

**Výsledky:** 22 testovateľov správne identifikovalo odlišnú vzorku.

**Výpočet:**

```
n = 40, k = 22, p = 1/3

P(X ≥ 22) = Σ (40 choose i) × (1/3)^i × (2/3)^(40-i)
            pre i = 22 až 40

P(X ≥ 22) ≈ 0.0032
```

**Záver:** p < 0.01 → **Významný rozdiel**. Zníženie cukru o 30% je senzoricky detekovateľné. Odporúča sa buď postupné znižovanie cukru alebo použitie sladidla.

---

### Príklad 2: Duo-trio test – Nový dodávateľ kávy

**Scénár:** Testuje sa, či nový dodávateľ kávy spôsobí rozdiel v chuti. Používa sa panel 50 menej cvičených testovateľov.

**Výsledky:** 32 testovateľov správne identifikovalo vzorku zhodnú s referenciou.

**Výpočet:**

```
n = 50, k = 32, p = 1/2

P(X ≥ 32) = Σ (50 choose i) × (1/2)^50
            pre i = 32 až 50

P(X ≥ 32) ≈ 0.033
```

**Záver:** p < 0.05 → **Významný rozdiel**. Nový dodávateľ kávy má merateľne mení senzorické vlastnosti. Odporúča sa buď návrat k pôvodnému dodávateľovi alebo ďalšie testy s cvičeným panelom.

---

### Príklad 3: Párový porovnávací test – Sladkosť dvoch typov medu

**Scénár:** Testuje sa, ktorý z dvoch typov medu (lipový vs. akáciový) je sladší. Používa sa 60 konzumentov.

**Výsledky:** 38 konzumentov označilo lipový med ako sladší.

**Výpočet:**

```
n = 60, k = 38, p = 1/2

P(X ≥ 38) = Σ (60 choose i) × (1/2)^60
            pre i = 38 až 60

P(X ≥ 38) ≈ 0.014
```

**Záver:** p < 0.05 → **Významný rozdiel**. Lipový med je štatisticky významne sladší ako akáciový med. Tento rozdiel je dôležité zohľadniť pri marketingových tvrdeniach.

---

## Záver

Diskriminačné metody sú **nástrojmi prvej línie** v senzorikej analýze. Výber správnej metody závisí od:
- **Cieľa testu** (screening vs. potvrdenie)
- **Úrovne panelu** (cvičený vs. konzument)
- **Povahy rozdielu** (subtilný vs. výrazný)
- **Dostupných zdrojov** (čas, počet testovateľov)

Vždy je dôležité **kombinovať** diskriminačné metódy s deskriptívnymi pre kompletný obraz o senzorických vlastnostiach produktu.

---

*Referencie: Lawless, H.T. & Heymann, H. (2010). Sensory Evaluation of Food: Principles and Practices. Springer. | Stone, H. & Sidel, J.L. (2004). Sensory Evaluation Practices. Elsevier.*
