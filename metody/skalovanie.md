# Škálovanie v senzorikej analýze

## 1. Úvod do škálovania

### 1.1 Čo je škálovanie?

Škálovanie (scaling) je proces **priradení číselných hodnôt** senzorickým vlastnostiam alebo subjektívnym pocitom. V senzorikej analýze umožňuje kvantifikovať kvalitatívne vlastnosti produktov (napr. sladkosť, horkosť, príjemnosť) do **kvantitatívnych dát**, ktoré je možné štatisticky analyzovať.

### 1.2 Prečo je škálovanie dôležité?

| Dôvod | Vysvetlenie |
|---|---|
| **Kvantifikácia** | Prevod subjektívnych pocitov na číselné hodnoty |
| **Štatistická analýza** | Umožňuje výpočet priemerov, smerodajných odchýlok, testov |
| **Porovnateľnosť** | Umožňuje porovnávať produkty, panely, časové body |
| **Komunikácia** | Objektívny spôsob prenosu senzorických výsledkov |
| **Vývoj produktu** | Sledovanie zmien v čase, optimalizácia receptúr |
| **Kontrola kvality** | Stanovenie akceptačných limitov |

### 1.3 Typy škál

```
Škály v senzorikej analýze
├── Kvalitatívé škály
│   ├── Nominálne (kategorické)
│   └── Ordinálne (poradové)
├── Kvantitatívne škály
│   ├── Intervalové
│   └── Poměrové
└── Špeciálne senzorické škály
    ├── Hedonické škály
    ├── Intenzitné škály
    ├── Semantické škály
    ├── JAR škála
    └── Lineárne škály (VAS)
```

---

## 2. Hedonické škály (Hedonic Scales)

### 2.1 9-bodová hedonická škála (Peryam & Pilgrim)

Najrozšírenejšia hedonická škála, predstavená Peryamom a Pilgrimom v roku 1957. Používa sa na meranie **celkovej príjemnosti** (overall liking) produktu.

**Škála:**

| Bod | Označenie | Popis |
|---|---|---|
| 9 | Extrémne mi sa páči | Najvyššia možná príjemnosť |
| 8 | Veľmi mi sa páči | Vysoká príjemnosť |
| 7 | Mierne mi sa páči | Stredne vysoká príjemnosť |
| 6 | Trochu mi sa páči | Mierna príjemnosť |
| 5 | Ani mi sa páči, ani nepáči | Neutrálna hodnota |
| 4 | Trochu sa mi nepáči | Mierna nepríjemnosť |
| 3 | Mierne sa mi nepáči | Stredne vysoká nepríjemnosť |
| 2 | Veľmi sa mi nepáči | Vysoká nepríjemnosť |
| 1 | Extrémne sa mi nepáči | Najnižšia možná príjemnosť |

### 2.2 7-bodová škála

Kompaktná verzia 9-bodovej škály, vhodná pre **rýchle testy** alebo **konzumentov**.

| Bod | Označenie |
|---|---|
| 7 | Veľmi mi sa páči |
| 6 | Mi sa páči |
| 5 | Trochu mi sa páči |
| 4 | Neutrálne |
| 3 | Trochu sa mi nepáči |
| 2 | Nepáči sa mi |
| 1 | Veľmi sa mi nepáči |

### 2.3 5-bodová škála

Najjednoduchšia hedonická škála, vhodná pre **rýchle screeningové testy** alebo **deti**.

| Bod | Označenie |
|---|---|
| 5 | Veľmi dobré |
| 4 | Dobré |
| 3 | Priemerné |
| 2 | Zlé |
| 1 | Veľmi zlé |

### 2.4 Výpočet prijatia a odmietnutia

**Priemerné skóre (Mean Score):**

$$\bar{x} = \frac{\sum_{i=1}^{n} x_i}{n}$$

**Percento prijatia (% Acceptance):**

$$\% \text{ Prijatia} = \frac{\text{Počet testovateľov so skóre} \geq 6}{n} \times 100$$

**Percento odmietnutia (% Rejection):**

$$\% \text{ Odmietnutia} = \frac{\text{Počet testovateľov so skóre} \leq 4}{n} \times 100$$

**Index prijatia (Acceptance Index):**

$$AI = \frac{\bar{x} - 1}{8} \times 100$$

Kde $\bar{x}$ je priemerné skóre na 9-bodovej škále.

### 2.5 Kedy použiť ktorú

| Škála | Odporúčané použitie |
|---|---|
| **9-bodová** | Výskum produktu, konzumentské testy, porovnanie produktov |
| **7-bodová** | Rýchle testy, konzumentské testy, deti |
| **5-bodová** | Screeningové testy, deti, rýchle kontroly |

### 2.6 Výhody a nevýhody

| Výhody | Nevýhody |
|---|---|
| Jednoduchá na použitie | Subjektívne skóre (závisí od testovateľa) |
| Široko akceptovaná | Menej citlivá ako intenzitné škály |
| Vhodná pre konzumentov | Nemožnosť kvantifikovať intenzitu rozdielu |
| Jednoduchá interpretácia | „Central tendency bias" (testovateľia sa vyhýbajú extrémom) |
| Umožňuje rýchle testy | Kultúrne rozdiely v používaní škál |

---

## 3. Intenzitné škály (Intensity Scales)

### 3.1 Kategorické škály (3, 5, 7, 9-bodové)

Kategorické škály sa používajú na meranie **intenzity** konkrétneho senzorického atribútu (napr. sladkosť, horkosť, kyslosť).

**Príklad – 9-bodová intenzitná škála pre sladkosť:**

| Bod | Označenie |
|---|---|
| 9 | Extrémne sladké |
| 8 | Veľmi sladké |
| 7 | Výrazne sladké |
| 6 | Stredne sladké |
| 5 | Mierne sladké |
| 4 | Trochu sladké |
| 3 | Slabo sladké |
| 2 | Veľmi slabo sladké |
| 1 | Nesladké |

### 3.2 Lineárna škála (15 cm)

Lineárna škála (tiež **Visual Analogue Scale – VAS**) je **nepretržitá škála** dlhá 15 cm, kde testovateľ označí intenzitu atribútu čiarou.

**Formát:**
```
0 cm                                          15 cm
|─────────────────────────────────────────────|
Najslabšie                              Najsilnejšie
vnímané                                  vnímané
```

**Výpočet hodnoty:**

$$Hodnota = \frac{\text{Vzdialenosť od ľavého okraja (cm)}}{15} \times 100$$

### 3.3 Semantická diferenciálna škála

Semantická diferenciálna škála (Osgood, 1957) používa **bipolárne adjektíva** na meranie **perceptuálnych** a **afektívnych** reakcií.

**Príklad – 7-bodová semantická škála:**

```
Nepríjemné  ←──┼──┼──┼──┼──┼──→  Príjemné
              1  2  3  4  5  6  7

Slabé       ←──┼──┼──┼──┼──┼──→  Silné
              1  2  3  4  5  6  7

Prírodné    ←──┼──┼──┼──┼──┼──→  Umelé
              1  2  3  4  5  6  7
```

### 3.4 Výpočet priemerov a CI

**Priemerné skóre:**

$$\bar{x} = \frac{\sum_{i=1}^{n} x_i}{n}$$

**Smerodajná odchýlka:**

$$s = \sqrt{\frac{\sum_{i=1}^{n} (x_i - \bar{x})^2}{n-1}}$$

**95% Interval spoľahlivosti (CI):**

$$CI = \bar{x} \pm t_{0.025, n-1} \times \frac{s}{\sqrt{n}}$$

Kde $t_{0.025, n-1}$ je kritická hodnota t-rozdelenia pre n-1 stupňov voľnosti.

### 3.5 Kedy použiť ktorú

| Škála | Odporúčané použitie |
|---|---|
| **3-bodová** | Rýchle screeningové testy, deti |
| **5-bodová** | Konzumentské testy, rýchle testy |
| **7-bodová** | Výskum produktu, porovnanie atribútov |
| **9-bodová** | Cvičený panel, detaná analýza |
| **Lineárna (VAS)** | Výskum, maximálna citlivosť |
| **Semantická** | Perceptuálna analýza, branding |

### 3.6 Výhody a nevýhody

| Výhody | Nevýhody |
|---|---|
| Kvantifikuje intenzitu | Vyžaduje tréning (pre kategorické škály) |
| Vysoká citlivosť (VAS) | „End-effect bias" (testovateľia sa vyhýbajú extrémom) |
| Umožňuje štatistickú analýzu | Kultúrne rozdiely v používaní škál |
| Vhodná pre cvičený panel | Menej vhodná pre konzumentov (VAS) |

---

## 4. Waldova sekvenčná analýza (Wald's Sequential Analysis)

### 4.1 Princíp

Waldova sekvenčná analýza je **adaptívny prístup** k testovaniu, kde sa rozhodnutie prijíma **postupne** po každej odpovedi testovateľa. Na rozdiel od tradičných metód s fixným počtom testovateľov, sekvenčná analýza umožňuje **skončiť test skôr**, ak je výsledok jednoznačný.

### 4.2 Ako funguje

**Kroky:**

1. **Stanovenie hypotéz:**
   - H₀: Neexistuje rozdiel medzi vzorkami (p = p₀)
   - H₁: Existuje rozdiel (p = p₁)

2. **Stanovenie parametrov:**
   - α = pravdepodobnosť chyby I. typu (typicky 0.05)
   - β = pravdepodobnosť chyby II. typu (typicky 0.20)
   - p₀ = pravdepodobnosť úspechu pri H₀ (napr. 1/3 pre trojuholníkový test)
   - p₁ = pravdepodobnosť úspechu pri H₁ (napr. 0.5)

3. **Výpočet hraníc:**
   - Horná hranica (H₁): $a_n = \frac{\ln\left(\frac{1-\beta}{\alpha}\right) + n \cdot \ln\left(\frac{1-p_0}{1-p_1}\right)}{\ln\left(\frac{p_1}{p_0}\right) - \ln\left(\frac{1-p_0}{1-p_1}\right)}$
   - Dolná hranica (H₀): $b_n = \frac{\ln\left(\frac{\beta}{1-\alpha}\right) + n \cdot \ln\left(\frac{1-p_0}{1-p_1}\right)}{\ln\left(\frac{p_1}{p_0}\right) - \ln\left(\frac{1-p_0}{1-p_1}\right)}$

4. **Pravidlá rozhodovania:**
   - Ak počet správnych odpovedí ≥ a_n → **Zamietni H₀** (existuje rozdiel)
   - Ak počet správnych odpovedí ≤ b_n → **Prijmni H₀** (neexistuje rozdiel)
   - Ak b_n < počet správnych odpovedí < a_n → **Pokračuj v testovaní**

### 4.3 Výpočet

**Príklad pre trojuholníkový test (p₀ = 1/3, p₁ = 0.5, α = 0.05, β = 0.20):**

```
a_n = [ln(0.80/0.05) + n × ln(0.5/0.5)] / [ln(0.5/0.333) - ln(0.5/0.667)]
     = [2.773 + 0] / [0.405 - (-0.405)]
     = 2.773 / 0.810
     ≈ 3.42 + 0.5n

b_n = [ln(0.20/0.95) + n × ln(0.5/0.5)] / [ln(0.5/0.333) - ln(0.5/0.667)]
     = [-1.558 + 0] / [0.405 - (-0.405)]
     = -1.558 / 0.810
     ≈ -1.92 + 0.5n
```

### 4.4 Kedy použiť

- Keď je **čas obmedzený**
- Keď je **náročné získať testovateľov**
- Pri **drahých** alebo **vzácnych** vzorkách
- Keď je potrebné **rýchlo rozhodnúť**
- Pri **pilotných** testoch

### 4.5 Výhody a nevýhody

| Výhody | Nevýhody |
|---|---|
| Môže skrátiť test o 30–50% | Zložitá interpretácia |
| Flexibilný počet testovateľov | Vyžaduje počítačovú podporu |
| Etický prístup (menej testovateľov) | Menej známa v praxi |
| Vhodný pre drahé vzorky | Nemožnosť presného plánovania |

---

## 5. Thurstone d-prime (d')

### 5.1 Princíp signal detection theory

Thurstone d-prime (d') je miera **citlivosti** (sensitivity) odvodená z **teórie detekcie signálu** (Signal Detection Theory – SDT). Meria schopnosť testovateľa **rozlíšiť** signál (rozdiel) od šumu (náhodná variabilita).

**Koncepcia:**
- **Signál:** Skutočný rozdiel medzi vzorkami
- **Šum:** Náhodná variabilita v percepcii
- **d':** Vzdialenosť medzi distribúciou signálu a šumu (v jednotkách smerodajnej odchýlky)

### 5.2 Výpočet d'

$$d' = z(\text{Hit Rate}) - z(\text{False Alarm Rate})$$

Kde:
- **Hit Rate (H):** Pravdepodobnosť správnej identifikácie odlišnej vzorky
- **False Alarm Rate (F):** Pravdepodobnosť chybnej identifikácie (keď testovateľ povie „odlišná", ale vzorky sú rovnaké)
- **z:** Inverzná kumulatívna funkcia štandardného normálneho rozdelenia

**Výpočet krokov:**

1. Vypočítaj Hit Rate: $H = \frac{\text{Počet správnych identifikácií}}{\text{Celkový počet pokusov s odlišnou vzorkou}}$
2. Vypočítaj False Alarm Rate: $F = \frac{\text{Počet chybných identifikácií}}{\text{Celkový počet pokusov s rovnakými vzorkami}}$
3. Prevod na z-skóre pomocou inverznej normálnej funkcie
4. Výpočet d' = z(H) - z(F)

### 5.3 Interpretácia d'

| d' hodnota | Interpretácia | Úroveň citlivosti |
|---|---|---|
| 0.0 | Žiadna citlivosť | Náhodné hádanie |
| 0.5 | Veľmi slabá | Takmer neznáma |
| 1.0 | Slabá | Rozoznateľná |
| 1.5 | Umiernená | Jasná |
| 2.0 | Dobrá | Veľmi jasná |
| 2.5 | Výborná | Tmer dokonalá |
| 3.0+ | Výborná | Tmer dokonalá |

### 5.4 Tabuľka d' hodnôt a ich význam

| d' | % správnych odpovedí (pre p = 0.5) | Význam v praxi |
|---|---|---|
| 0.0 | 50% | Náhodné hádanie |
| 0.5 | 62% | Subtilný rozdiel |
| 1.0 | 69% | Mierny rozdiel |
| 1.5 | 77% | Výrazný rozdiel |
| 2.0 | 84% | Veľmi výrazný rozdiel |
| 2.5 | 90% | Extrémne výrazný rozdiel |
| 3.0 | 93% | Takmer identické vnímanie |

### 5.5 Kedy použiť

- Keď je potrebné **oddeliť** citlivosť od response bias
- Pri **porovnaní** citlivosti rôznych panelov
- Keď sa testuje **subtilný** rozdiel
- Pri **výskumných** štúdiách senzorického vnímania
- Keď je potrebné **korigovať** za guessing strategy

### 5.6 Praktický príklad s výpočtom

**Scénár:** Testuje sa schopnosť panelu rozlíšiť dve vzorky kávy. Panel má 20 testovateľov, každý vykoná 10 pokusov (5 s rovnakými vzorkami, 5 s odlišnými).

**Výsledky:**
- Pri odlišných vzorkách: 85 správnych identifikácií z 100 pokusov
- Pri rovnakých vzorkách: 15 chybných identifikácií z 100 pokusov

**Výpočet:**

```
Hit Rate (H) = 85/100 = 0.85
False Alarm Rate (F) = 15/100 = 0.15

z(H) = z(0.85) ≈ 1.036
z(F) = z(0.15) ≈ -1.036

d' = 1.036 - (-1.036) = 2.072
```

**Interpretácia:** d' = 2.072 → **Dobrá citlivosť**. Panel je schopný spoľahlivo rozlíšiť dve vzorky kávy. Táto hodnota zodpovedá približne 84% správnych odpovedí pri náhodnom hádaní.

---

## 6. Just-About-Right (JAR) škála

### 6.1 Princíp

JAR škála je **speciálna senzorická škála** používaná na meranie **optimálnej intenzity** atribútu. Testovateľ hodnotí, či je intenzita atribútu **príliš nízka**, **práve správna** alebo **príliš vysoká**.

**JAR škála:**

| Hodnotenie | Označenie |
|---|---|
| 1 | Príliš slabé |
| 2 | Trochu slabé |
| 3 | Práve správne (JAR) |
| 4 | Trochu silné |
| 5 | Príliš silné |

### 6.2 5-bodová škála

```
1        2        3        4        5
│────────│────────│────────│────────│
Príliš   Trochu   Práve    Trochu   Príliš
slabé    slabé    správne  silné    silné
```

### 6.3 Penalty analysis

Penalty analysis je **kľúčová analýza** pre JAR dáta. Vypočíta sa **priemerné skóre** pre každú kategóriu a **penalty** (trest) za odchýlku od optima.

**Výpočet penalty:**

$$\text{Penalty} = \bar{x}_{JAR} - \bar{x}_{non-JAR}$$

Kde:
- $\bar{x}_{JAR}$ = priemerné skóre príjemnosti pre testovateľov, ktorí označili atribút ako JAR
- $\bar{x}_{non-JAR}$ = priemerné skóre príjemnosti pre testovateľov, ktorí označili atribút ako príliš slabý/silný

**Interpretácia penalty:**

| Penalty | Význam |
|---|---|
| < 0.5 | Zanedbateľný |
| 0.5 – 1.0 | Malý |
| 1.0 – 1.5 | Stredný |
| > 1.5 | Významný |

### 6.4 Výpočet

**Príklad:**

| Kategória | Počet testovateľov | Priemerné skóre príjemnosti |
|---|---|---|
| Príliš slabé (1) | 15 | 5.2 |
| Trochu slabé (2) | 25 | 6.1 |
| JAR (3) | 40 | 7.8 |
| Trochu silné (4) | 18 | 6.3 |
| Príliš silné (5) | 12 | 5.5 |

**Penalty za „príliš slabé":**

$$\text{Penalty}_{slabé} = 7.8 - \frac{(15 \times 5.2) + (25 \times 6.1)}{15 + 25} = 7.8 - 5.76 = 2.04$$

**Penalty za „príliš silné":**

$$\text{Penalty}_{silné} = 7.8 - \frac{(18 \times 6.3) + (12 \times 5.5)}{18 + 12} = 7.8 - 5.98 = 1.82$$

### 6.5 Kedy použiť

- Pri **optimalizácii** receptúr
- Keď je potrebná **maximálna** príjemnosť
- Pri **vývoji** nových produktov
- Keď sa testuje **konkrétny atribút** (napr. sladkosť, horkosť)
- Pri **konzumentských** testoch

### 6.6 Výhody a nevýhody

| Výhody | Nevýhody |
|---|---|
| Identifikuje optimum | Vyžaduje vzorky s rôznou intenzitou |
| Jednoduchá interpretácia | Nekontroluje celkovú príjemnosť |
| Vhodná pre optimalizáciu | Menej vhodná pre porovnanie produktov |
| Kvantifikuje penalty | Závisí od výberu atribútu |

---

## 7. Porovnanie škál

### 7.1 Komparatívna tabuľka

| Škála | Typ | Citlivosť | Jednoduchosť | Vhodnosť pre konzumentov | Vhodnosť pre cvičený panel |
|---|---|---|---|---|---|
| **9-bodová hedonická** | Kategorická | Stredná | Vysoká | Vysoká | Vysoká |
| **7-bodová hedonická** | Kategorická | Stredná | Vysoká | Vysoká | Vysoká |
| **5-bodová hedonická** | Kategorická | Nízka | Vysoká | Vysoká | Stredná |
| **9-bodová intenzitná** | Kategorická | Vysoká | Stredná | Nízka | Vysoká |
| **Lineárna (VAS)** | Kontinuálna | Vysoká | Stredná | Nízka | Vysoká |
| **Semantická** | Kategorická | Stredná | Stredná | Stredná | Vysoká |
| **JAR** | Kategorická | Vysoká | Vysoká | Vysoká | Vysoká |

### 7.2 Výhody a nevýhody podľa typu

| Typ škály | Výhody | Nevýhody |
|---|---|---|
| **Hedonické** | Jednoduché, rýchle, vhodné pre konzumentov | Nekvantifikuje intenzitu |
| **Intenzitné** | Kvantifikujú intenzitu, vysoká citlivosť | Vyžadujú tréning |
| **Semantické** | Komplexný obraz, perceptuálne dimenzie | Zložitá interpretácia |
| **JAR** | Identifikuje optimum, praktické | Vyžaduje špeciálne vzorky |

---

## 8. Výber správnej škály

### 8.1 Rozzhodovacie kritériia

```
                    ┌─────────────────────────┐
                    │  Aký je cieľ merania?    │
                    └───────────┬─────────────┘
                                │
            ┌───────────────────┼───────────────────┐
            │                   │                   │
        Príjemnosť          Intenzita          Optimalizácia
            │                   │                   │
    ┌───────┴───────┐   ┌───────┴───────┐   ┌───────┴───────┐
    │ Hedonická     │   │ Intenzitná    │   │ JAR škála     │
    │ škála         │   │ škála         │   │               │
    └───────┬───────┘   └───────┬───────┘   └───────────────┘
            │                   │
    ┌───────┴───────┐   ┌───────┴───────┐
    │ Kto testuje?  │   │ Kto testuje?  │
    └───────┬───────┘   └───────┬───────┘
            │                   │
    ┌───────┴───────┐   ┌───────┴───────┐
    │ Konzument →   │   │ Cvičený →     │
    │ 9-bodová      │   │ 9-bodová      │
    │               │   │ intenzitná    │
    │ Cvičený →     │   │               │
    │ 9-bodová      │   │ Konzument →   │
    │               │   │ 5-bodová      │
    └───────────────┘   └───────────────┘
```

### 8.2 Kritériá výbera

| Kritérium | Odporúčaná škála |
|---|---|
| Celková príjemnosť | 9-bodová hedonická |
| Intenzita atribútu | 9-bodová intenzitná |
| Maximálna citlivosť | Lineárna (VAS) |
| Optimalizácia produktu | JAR škála |
| Rýchly screening | 5-bodová hedonická |
| Konzumentský test | 9-bodová hedonická |
| Perceptuálna analýza | Semantická škála |
| Výskum vnímania | Thurstone d' |

---

## 9. Praktické príklady

### Príklad 1: 9-bodová hedonická škála – Test príjemnosti jogurta

**Scénár:** Testuje sa príjemnosť nového jogurta s nízkym obsahom cukru. Vzorka: 50 konzumentov.

**Výsledky:**

| Skóre | Počet testovateľov |
|---|---|
| 9 | 5 |
| 8 | 12 |
| 7 | 15 |
| 6 | 10 |
| 5 | 5 |
| 4 | 2 |
| 3 | 1 |
| 2 | 0 |
| 1 | 0 |

**Výpočet:**

```
Priemerné skóre = (9×5 + 8×12 + 7×15 + 6×10 + 5×5 + 4×2 + 3×1 + 2×0 + 1×0) / 50
               = (45 + 96 + 105 + 60 + 25 + 8 + 3 + 0 + 0) / 50
               = 342 / 50
               = 6.84

% Prijatia (skóre ≥ 6) = (5 + 12 + 15 + 10) / 50 × 100 = 84%
% Odmietnutia (skóre ≤ 4) = (2 + 1 + 0 + 0) / 50 × 100 = 6%

Index prijatia = (6.84 - 1) / 8 × 100 = 73%
```

**Záver:** Jogurt má **vysokú príjemnosť** (84% prijatia, index 73%). Produkt je vhodný pre trh.

---

### Príklad 2: Thurstone d' – Citlivosť panelu

**Scénár:** Testuje sa schopnosť panelu rozlítiť dve vzorky syra. Panel má 20 testovateľov, každý vykoná 10 pokusov (5 s rovnakými vzorkami, 5 s odlišnými).

**Výsledky:**
- Pri odlišných vzorkách: 80 správnych identifikácií z 100 pokusov
- Pri rovnakých vzorkách: 20 chybných identifikácií z 100 pokusov

**Výpočet:**

```
Hit Rate (H) = 80/100 = 0.80
False Alarm Rate (F) = 20/100 = 0.20

z(H) = z(0.80) ≈ 0.842
z(F) = z(0.20) ≈ -0.842

d' = 0.842 - (-0.842) = 1.684
```

**Interpretácia:** d' = 1.684 → **Umiernená citlivosť**. Panel je schopný rozlíšiť vzorky, ale existuje priestor pre zlepšenie. Odporúča sa ďalší tréning.

---

### Príklad 3: JAR škála – Optimalizácia sladkosti limonády

**Scénár:** Testuje sa sladkosť limonády s rôznym obsahom cukru. Vzorka: 80 konzumentov.

**Výsledky:**

| Kategória | Počet | Priemerné skóre príjemnosti |
|---|---|---|
| Príliš sladká (1) | 10 | 4.5 |
| Trochu sladká (2) | 20 | 6.2 |
| JAR (3) | 35 | 7.9 |
| Trochu sladká (4) | 12 | 6.5 |
| Príliš sladká (5) | 3 | 4.8 |

**Výpočet penalty:**

```
Penalty za „príliš sladké" = 7.9 - [(10×4.5 + 20×6.2) / (10+20)]
                          = 7.9 - [(45 + 124) / 30]
                          = 7.9 - 5.63
                          = 2.27

Penalty za „príliš sladké" = 7.9 - [(12×6.5 + 3×4.8) / (12+5)]
                          = 7.9 - [(78 + 14.4) / 15]
                          = 7.9 - 6.16
                          = 1.74
```

**Záver:** Obe kategórie majú **významný penalty** (> 1.5). Limonáda je buď príliš sladká, alebo príliš kyslá. Odporúča sa **zníženie obsahu cukru** o 15% a **zníženie kyslosti** o 10%.

---

## Záver

Škálovanie je **základný pilier** senzorikej analýze. Výber správnej škály závisí od:
- **Cieľa merania** (príjemnosť vs. intenzita vs. optimalizácia)
- **Typu panelu** (cvičený vs. konzument)
- **Počtu atribútov** (jeden vs. viacero)
- **Dostupných zdrojov** (čas, testovatelia)

Vždy je dôležité **kombinovať** rôzne škály pre kompletný obraz o senzorických vlastnostiach produktu. Moderná senzorická analýza často používa **mix prístupov** – hedonické škály pre celkovú príjemnosť, intenzitné škály pre jednotlivé atribúty a JAR škály pre optimalizáciu.

---

*Referencies: Lawless, H.T. & Heymann, H. (2010). Sensory Evaluation of Food: Principles and Practices. Springer. | Stone, H. & Sidel, J.L. (2004). Sensory Evaluation Practices. Elsevier. | Osgood, C.E. et al. (1957). The Measurement of Meaning. University of Illinois Press.*
