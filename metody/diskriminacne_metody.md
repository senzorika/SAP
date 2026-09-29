# Diskriminačné metody v senzorickej analýze

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

> 🧪 **Precvič v R ([SaIT](https://github.com/senzorika/SaIT)):** binomický test v rozlišovacích skúškach — [cvičenie 5a](https://senzorika.github.io/SaIT/teoria/cvicenie05a.html) · Thurstonov model, d′ a test podobnosti — [cvičenie 13](https://senzorika.github.io/SaIT/teoria/cvicenie13.html) · sila testu a počet hodnotiteľov — [cvičenie 14](https://senzorika.github.io/SaIT/teoria/cvicenie14.html) · prípadová štúdia „zmena dodávateľa" — [cvičenie 19](https://senzorika.github.io/SaIT/teoria/cvicenie19.html)

---

## 2. Trojuholníkový test (Triangle Test)

### 2.1 Princíp a história

Trojuholníkový test je jednou z najstarších a najrozšírenejších diskriminačných metód. Vznikol v 40. rokoch 20. storočia (Bengtsson, 1943; Helm & Trolle, 1946 – pivovar Carlsberg) a dnes ho upravuje **ISO 4120:2021**.

**Princíp:** Testovateľovi sa predložia **tri vzorky**, z ktorých sú **dve rovnaké** a **jedna odlišná**. Testovateľ má za úlohu identifikovať **odlišnú vzorku**. Vzorky sú prezentované v náhodnom poradí, pričom existuje 6 možných kombinácií poradia (AAB, ABA, BAA, BBA, BAB, ABB).

### 2.2 Kedy použiť

- Keď existujú **dve vzorky** na porovnanie
- Keď **nie je známy smer** (atribút) rozdielu
- Keď sa testujú **homogénne** výrobky (napr. mlieko, olej, víno)
- Hodnotitelia by mali byť vybraní a oboznámení s testom (ISO 4120 nevyžaduje expertný panel)
- Pozor: pri **subtilných** rozdieloch má trojuholník nízku silu — zvážte tetrad alebo 2-AFC (pozri kapitolu 8.2)

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
| 20 | 11 | 13 | 14 |
| 25 | 13 | 15 | 17 |
| 30 | 15 | 17 | 19 |
| 35 | 17 | 19 | 22 |
| 40 | 19 | 21 | 24 |
| 45 | 21 | 24 | 26 |
| 50 | 23 | 26 | 28 |
| 60 | 27 | 30 | 33 |
| 70 | 31 | 34 | 37 |
| 80 | 35 | 38 | 41 |
| 90 | 38 | 42 | 45 |
| 100 | 42 | 46 | 49 |

*Presné binomické hodnoty (jednostranný test), prepočítané. Predošlá verzia tabuľky mala pre n ≥ 20 hodnoty nižšie, než je správne (napr. n = 100: 33 namiesto 42), čo by viedlo k falošne pozitívnym záverom.*

### 2.5 Výhody a nevýhody

| Výhody | Nevýhody |
|---|---|
| Jednoduchý na pochopenie | Náročný na testovateľov (vysoká kognitívna záťaž) |
| Nevyžaduje poznať smer rozdielu | Pri danom d′ nízka sila — potrebuje veľa hodnotiteľov |
| Štandardizovaný a široko akceptovaný (ISO 4120) | Môže spôsobiť únavu a adaptáciu (3 vzorky) |
| Náhodné/vyvážené poradie znižuje bias | Nekvantifikuje veľkosť rozdielu (tú dá až d′) |
| Vhodný pre väčšinu produktov | Nevhodný pre produkty so silnou dochuťou |

### 2.6 Praktický príklad s výpočtom

**Scénár:** Testuje sa, či zmena dodávateľa cukru spôsobí rozdiel v chuti koláča. Používa sa panel 30 cvičených testovateľov.

**Výsledky:** 16 testovateľov správne identifikovalo odlišnú vzorku.

**Výpočet:**

```
n = 30, k = 16, p = 1/3

P(X ≥ 16) = Σ (30 choose i) × (1/3)^i × (2/3)^(30-i)
            pre i = 16 až 30

P(X ≥ 16) ≈ 0.019
```

**Interpretácia:** Keďže p-hodnota (0.019) < α (0.05), existuje **štatisticky významný rozdiel** medzi vzorkami. Zmena dodávateľa cukru má merateľný vplyv na senzorické vlastnosti koláča.

> 💻 V R: `binom.test(16, 30, p = 1/3, alternative = "greater")` alebo `sensR::discrim(16, 30, method = "triangle")` (vráti aj d′). Podobnú úlohu rieši [SaIT cvičenie 19](https://senzorika.github.io/SaIT/teoria/cvicenie19.html).

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
- Keď existuje prirodzená **referencia** (napr. štandardná výroba)
- Pri produktoch so silnou dochuťou, kde je menej porovnaní výhodou
- Pri **rýchlych screeningových** testoch (pri väčších rozdieloch)

### 3.3 Výpočet

Pravdepodobnosť správnej odpovede pri náhodnom hádaní je **p = 1/2**.

$$P(X \geq k) = \sum_{i=k}^{n} \binom{n}{i} \cdot \left(\frac{1}{2}\right)^i \cdot \left(\frac{1}{2}\right)^{n-i}$$

### 3.4 Kritické hodnoty

**Kritické hodnoty pre duo-trio test (α = 0.05):**

| n | Kritická hodnota (α = 0.05) | Kritická hodnota (α = 0.01) |
|---|---|---|
| 10 | 9 | 10 |
| 15 | 12 | 13 |
| 20 | 15 | 16 |
| 25 | 18 | 19 |
| 30 | 20 | 22 |
| 35 | 23 | 25 |
| 40 | 26 | 28 |
| 45 | 29 | 31 |
| 50 | 32 | 34 |
| 60 | 37 | 40 |
| 70 | 43 | 46 |
| 80 | 48 | 51 |
| 90 | 54 | 57 |
| 100 | 59 | 63 |

*Presné binomické hodnoty (jednostranný test, p₀ = 1/2), prepočítané.*

### 3.5 Výhody a nevýhody

| Výhody | Nevýhody |
|---|---|
| Nižšia kognitívna záťaž | Pri danom d′ najnižšia sila spomedzi bežných testov |
| Vhodný pre menej cvičené panelisty | Vyžaduje viac testovateľov pre rovnakú silu testu |
| Referenčná vzorka pomáha | Výsledok závisí od voľby referencie (konštantná vs. vyvážená) |
| Jednoduchý na organizáciu | Nekvantifikuje veľkosť rozdielu |

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

Test je **jednostranný**, ak je smer rozdielu vopred známy (napr. „vzorka B má viac cukru — je sladšia?"), a **obojstranný**, ak nie je (napr. „ktorý z dvoch medov je sladší?").

### 4.4 Kritické hodnoty

**Kritické hodnoty pre párový porovnávací test** (minimálny počet hlasov pre častejšie zvolenú vzorku; presné binomické hodnoty):

| n | jednostranný α = 0.05 | jednostranný α = 0.01 | obojstranný α = 0.05 | obojstranný α = 0.01 |
|---|---|---|---|---|
| 10 | 9 | 10 | 9 | 10 |
| 15 | 12 | 13 | 12 | 13 |
| 20 | 15 | 16 | 15 | 17 |
| 25 | 18 | 19 | 18 | 20 |
| 30 | 20 | 22 | 21 | 23 |
| 35 | 23 | 25 | 24 | 26 |
| 40 | 26 | 28 | 27 | 29 |
| 45 | 29 | 31 | 30 | 32 |
| 50 | 32 | 34 | 33 | 35 |
| 60 | 37 | 40 | 39 | 41 |
| 70 | 43 | 46 | 44 | 47 |
| 80 | 48 | 51 | 50 | 52 |
| 90 | 54 | 57 | 55 | 58 |
| 100 | 59 | 63 | 61 | 64 |

### 4.5 Výhody a nevýhody

| Výhody | Nevýhody |
|---|---|
| Najjednoduchšia metóda | Hodnotitelia musia rovnako chápať atribút |
| Vysoká rýchlosť testovania | Nedá sa použiť, ak atribút rozdielu nie je známy |
| Pri známom atribúte **najvyššia sila** zo všetkých testov (2-AFC) | Pri zmene receptúry môžu vzniknúť aj iné, nesledované rozdiely |
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

- Keď vzorky **nemožno podať súčasne** (výrazná dochuť, rozdielny vzhľad, ktorý nemožno zamaskovať)
- Pri **kontrolných** testoch (napr. na výrobe), keď je „A" štandardný produkt
- Keď je dôležité **zapamätanie si referencie**
- Pri testovaní **komplexných** produktov

### 5.3 Výpočet (ISO 8588:2017)

Výsledky sa zapíšu do tabuľky 2 × 2:

| | odpoveď „A" | odpoveď „nie A" |
|---|---|---|
| podaná vzorka A | n₁₁ | n₁₂ |
| podaná vzorka „nie A" | n₂₁ | n₂₂ |

- **H₀:** podiel odpovedí „A" je rovnaký pre obe vzorky
- rôzni hodnotitelia pre každú vzorku → **Pearsonov χ² test** (1 df) alebo Fisherov presný test
- ten istý hodnotiteľ hodnotí obe vzorky → **McNemarov test**
- veľkosť rozdielu: **d′ = z(H) − z(F)**, kde H = n₁₁/(n₁₁+n₁₂) a F = n₂₁/(n₂₁+n₂₂)

### 5.4 Kritické hodnoty

Jednoduchá tabuľka kritických hodnôt s p = 1/2 **neexistuje** — pravdepodobnosť odpovede „A" závisí od kritéria hodnotiteľa, preto sa porovnávajú dva podiely. (Predošlá verzia tu nesprávne odkazovala na tabuľku duo-trio testu.) Výpočet v R: `chisq.test()`, `mcnemar.test()` — [SaIT cvičenie 5a](https://senzorika.github.io/SaIT/teoria/cvicenie05a.html); d′ a jeho neistota: `sensR::AnotA()`.

### 5.5 Výhody a nevýhody

| Výhody | Nevýhody |
|---|---|
| Hodnotí sa jedna vzorka naraz | Vyžaduje oboznámenie sa so vzorkou „A" |
| Vhodný pre komplexné produkty a silné dochute | Pamäť môže byť kľúčovým faktorom |
| Rýchly po tréningu | Výsledok ovplyvňuje sklon hodnotiteľa odpovedať „A" (response bias) |
| Vhodný pre kontrolu kvality | Nižšia sila ako pri 2-AFC |

---

## 6. Test rovnakosti (Same-Different)

### 6.1 Princíp

Testovateľ dostane **dve vzorky** a musí rozhodnúť, či sú **rovnaké** alebo **odlišné**. Podávajú sa rovnaké páry (AA, BB) aj odlišné páry (AB, BA). Na rozdiel od trojuholníkového testu testovateľ **neurčuje**, ktorá vzorka je odlišná, len rozhoduje o rovnakosti/odlišnosti.

**Prezentácia:**
```
Vzorka 1: X
Vzorka 2: Y
Otázka: Sú tieto vzorky rovnaké alebo odlišné?
```

### 6.2 Kedy použiť

- Keď sa testuje **celková odlišnosť** (nie konkrétny atribút)
- Pri produktoch so silnou dochuťou (len 2 vzorky na pokus)
- Pri testovaní **viacerých atribútov** naraz
- Keď je potrebná **nižšia kognitívna záťaž**

### 6.3 Výpočet

Porovnáva sa podiel odpovedí „odlišné" pri **odlišných** pároch s podielom pri **rovnakých** pároch (tabuľka 2 × 2, **χ² test**, Fisherov alebo McNemarov test). „Náhodná pravdepodobnosť 1/2" tu neexistuje — výsledok závisí od toho, ako prísne hodnotiteľ volí „odlišné". Thurstonov d′ pre tento test počíta napr. `sensR::samediff()`.

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

Tetrad test (nešpecifikovaný tetrad) sa do senzorickej praxe dostal hlavne po prácach Ennisa a kol. (napr. Ennis & Jesionka, 2011, *J. Sensory Studies*), ktoré na Thurstonovom modeli ukázali jeho vyššiu silu oproti trojuholníku; normalizuje ho **ASTM E3009**. Testovateľ dostane **štyri vzorky** — **dve vzorky A a dve vzorky B** (napr. AABB v náhodnom poradí). Úlohou je **zoskupiť** vzorky do dvoch párov rovnakých vzoriek.

**Prezentácia:**
```
Vzorky: A, A, B, B (v náhodnom poradí)
Úloha: Zoskupte vzorky do dvoch párov rovnakých vzoriek
```

### 7.2 Kedy použiť

- Keď je potrebná **vyššia sila** ako pri trojuholníkovom teste (smer rozdielu neznámy)
- Pri testovaní **subtilných** rozdielov s obmedzeným počtom hodnotiteľov
- Keď produkt **nespôsobuje** výraznú únavu či adaptáciu (4 vzorky na pokus)

### 7.3 Výpočet

Pravdepodobnosť správnej odpovede pri náhodnom hádaní je **p = 1/3** (rovnaké ako trojuholníkový test).

$$P(X \geq k) = \sum_{i=k}^{n} \binom{n}{i} \cdot \left(\frac{1}{3}\right)^i \cdot \left(\frac{2}{3}\right)^{n-i}$$

### 7.4 Výhody a nevýhody

| Výhody | Nevýhody |
|---|---|
| Vyššia sila ako trojuholníkový test (pri d′ = 1 cca 3× menej hodnotiteľov) | Menej známa metóda |
| Nevyžaduje poznať smer rozdielu | Vyžaduje viac vzoriek na testovateľa (4) |
| Vhodný pre subtilné rozdiely | Vyššie riziko únavy/adaptácie pri silných chutiach |
| Rovnaké p₀ = 1/3 → rovnaké kritické hodnoty ako trojuholník | Normalizovaný len v ASTM (nie v ISO) |

---

## 8. Porovnanie metód

### 8.1 Komparatívna tabuľka

| Metóda | p (náhodný úspech) | Citlivosť | Náročnosť na testovateľa | Rýchlosť | Vhodnosť pre konzumentov |
|---|---|---|---|---|---|
| **Trojuholníkový** | 1/3 | Nízka (pri danom d′) | Vysoká | Stredná | Obmedzene |
| **Duo-trio** | 1/2 | Nízka (pri danom d′) | Stredná | Stredná | Občas |
| **Párový porovnávací (2-AFC)** | 1/2 | Vysoká (ak je atribút známy) | Nízka | Vysoká | Áno |
| **3-AFC** | 1/3 | Vysoká (ak je atribút známy) | Stredná | Stredná | Občas |
| **"A" – "nie A"** | — (χ²) | Stredná | Stredná | Vysoká (po oboznámení) | Občas |
| **Same-Different** | — (χ²) | Nízka až stredná | Nízka | Vysoká | Áno |
| **Tetrad** | 1/3 | Stredná (vyššia ako trojuholník) | Stredná | Stredná | Obmedzene |

„Citlivosť" tu znamená štatistickú silu pri rovnakom senzorickom rozdiele (Thurstonov d′). Intuícia „nižšia pravdepodobnosť uhádnutia = citlivejší test" neplatí: trojuholník má p₀ = 1/3, a predsa je menej účinný ako 2-AFC s p₀ = 1/2 (Ennis, 1993; Bi, 2006).

### 8.2 Počet testovateľov pre rovnakú silu testu (α = 0.05, power = 0.80)

Presný binomický výpočet pre rovnaký senzorický rozdiel. Pre A – nie A a same-different závisí počet aj od kritéria hodnotiteľov, preto nie sú uvedené.

| Metóda | p_c pri d′ = 1 | n pri d′ = 1 | n pri d′ = 1.5 |
|---|---|---|---|
| 2-AFC (párový smerový) | 0.760 | 26 | 13 |
| 3-AFC | 0.634 | 22 | 9 |
| Tetrad | 0.494 | 65 | 20 |
| Trojuholníkový | 0.418 | 220 | 57 |
| Duo-trio | 0.582 | 241 | 65 |

*Vypočítané v Pythone (psychometrické funkcie podľa Ennisa, presný binomický test). V R: `sensR::d.primePwr()`, `sensR::discrimSS()` — pozri [SaIT cvičenie 14](https://senzorika.github.io/SaIT/teoria/cvicenie14.html).*

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
| Známy smer rozdielu | Párový porovnávací test (2-AFC) alebo 3-AFC |
| Neznámy smer, subtilný rozdiel | Tetrad test (alebo trojuholník s dostatočným n) |
| Neznámy smer, normalizovaný postup | Trojuholníkový test (ISO 4120) |
| Rýchly screening | Párový porovnávací test |
| Konzumentský test | Párový porovnávací test |
| Vzorky nemožno podať súčasne | "A" – "nie A" test |
| Kontrola kvality na výrobe | "A" – "nie A" test, duo-trio s konštantnou referenciou |
| Minimálna kognitívna záťaž | Same-Different test |
| Cieľom je preukázať **podobnosť** (napr. náhrada suroviny) | Ktorýkoľvek test v režime **testu podobnosti** (vopred zvolené p_d, malé β) — [SaIT cvičenie 13](https://senzorika.github.io/SaIT/teoria/cvicenie13.html) |

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

P(X ≥ 22) ≈ 0.0039
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

**Scénár:** Testuje sa, ktorý z dvoch typov medu (lipový vs. akáciový) je sladší. Smer rozdielu **nie je vopred známy** → obojstranný test. Používa sa 60 konzumentov.

**Výsledky:** 38 konzumentov označilo lipový med ako sladší.

**Výpočet:**

```
n = 60, k = 38, p = 1/2, obojstranný test

P(X ≥ 38) = Σ (60 choose i) × (1/2)^60   pre i = 38 až 60
P(X ≥ 38) ≈ 0.026
p (obojstranne) = 2 × 0.026 ≈ 0.052
```

**Záver:** p ≈ 0.052 > 0.05 → rozdiel **nie je štatisticky významný** (obojstranná kritická hodnota pre n = 60 je 39). Tvrdenie „lipový med je sladší" z týchto dát **nemožno** použiť. Jednostranný test (p ≈ 0.026) by bol oprávnený iba vtedy, ak by hypotéza o smere bola stanovená **pred** zberom dát. (Predošlá verzia uvádzala p ≈ 0.014 a významný rozdiel — to bola chyba.)

---

## Záver

Diskriminačné metody sú **nástrojmi prvej línie** v senzorickej analýze. Výber správnej metody závisí od:
- **Cieľa testu** (screening vs. potvrdenie)
- **Úrovne panelu** (cvičený vs. konzument)
- **Povahy rozdielu** (subtilný vs. výrazný)
- **Dostupných zdrojov** (čas, počet testovateľov)

Vždy je dôležité **kombinovať** diskriminačné metódy s deskriptívnymi pre kompletný obraz o senzorických vlastnostiach produktu.

---

## Prepojenie s praktickými cvičeniami v R (SaIT)

| Téma | Cvičenie [SaIT](https://github.com/senzorika/SaIT) | Skript |
|---|---|---|
| Binomický test, χ², McNemar | [5a – Porovnanie dvoch vzoriek](https://senzorika.github.io/SaIT/teoria/cvicenie05a.html) | [`cvicenie5a.R`](https://github.com/senzorika/SaIT/blob/master/cvicenie5a.R) |
| Thurstonov d′, psychometrické funkcie, test podobnosti | [13 – Thurstonov model a d′](https://senzorika.github.io/SaIT/teoria/cvicenie13.html) | [`cvicenie13.R`](https://github.com/senzorika/SaIT/blob/master/cvicenie13.R) |
| Sila testu, počet hodnotiteľov | [14 – Sila testu a veľkosť panelu](https://senzorika.github.io/SaIT/teoria/cvicenie14.html) | [`cvicenie14.R`](https://github.com/senzorika/SaIT/blob/master/cvicenie14.R) |
| Prípadová štúdia: zmena dodávateľa | [19 – Kontrolné prípadové štúdie I](https://senzorika.github.io/SaIT/teoria/cvicenie19.html) | [`cvicenie19.R`](https://github.com/senzorika/SaIT/blob/master/cvicenie19.R) |
| Prednáška | [Rozlišovacie testy a Thurstonov model (slajdy)](https://senzorika.github.io/SaIT/prezentacie/sk/03_rozlisovacie_testy.html) | — |

---

*Referencie: Lawless, H.T. & Heymann, H. (2010). Sensory Evaluation of Food: Principles and Practices (2nd ed.). Springer. | Stone, H. & Sidel, J.L. (2004). Sensory Evaluation Practices (3rd ed.). Elsevier Academic Press. | Ennis, D.M. (1993). The power of sensory discrimination methods. J. Sensory Studies 8, 353–370. | Ennis, J.M. & Jesionka, V. (2011). The power of sensory discrimination methods revisited. J. Sensory Studies 26(5). | Bi, J. (2006). Sensory Discrimination Tests and Measurements. Blackwell. | ISO 4120:2021, ISO 10399:2017, ISO 5495:2005, ISO 8588:2017, ASTM E3009.*
