# Deskriptívne profily

## 1. Úvod do deskriptívnych profilov

### Čo sú deskriptívne profily?

Deskriptívne profily predstavujú systematické, kvantitatívne popisy senzorických vlastností produktov. Poskytujú objektívny opis toho, čo senzorický panelista vníma – vrátane intenzity jednotlivých atribútov chuti, vônej, textúry a vizuálnych charakterík.

### Na čo sa používajú?

- **Vývoj produktov** – porovnanie prototypov s referenciami
- **Kontrola kvality** – monitorovanie konzistentnosti v čase
- **Stabilita produktu** – sledovanie senzorických zmien počas skladovania
- **Korekcia receptúr** – identifikácia senzorických deficitov
- **Kategorizácia produktov** – mapovanie produktového priestoru
- **Korelačná analýza** – prepojenie senzorických dát s preferenciami spotrebiteľov

### História

| Obdobie | Vývoj |
|---------|-------|
| koniec 1940s | Flavor Profile Method (Arthur D. Little; Cairncross & Sjöström, 1950) |
| 1963 | Texture Profile Method (Brandt, Skinner & Coleman; Szczesniak – General Foods) |
| 1974 | Quantitative Descriptive Analysis (QDA) – Stone, Sidel et al. |
| 1980s | Spectrum Method (Civille; Meilgaard, Civille & Carr) · Free Choice Profiling (Williams & Langron, 1984) |
| 2000s | Flash Profile (Dairou & Sieffermann, 2002) · CATA (Adams et al., 2007) · TDS (Pineau et al., 2009) |
| 2010s | TCATA (Castura et al., 2016) a ďalšie rýchle a dynamické metódy |

> 🧪 **Precvič v R ([SaIT](https://github.com/senzorika/SaIT)):** ANOVA profilov — [cvičenie 5b](https://senzorika.github.io/SaIT/teoria/cvicenie05b.html) · PCA — [cvičenie 7](https://senzorika.github.io/SaIT/teoria/cvicenie07.html) · výkonnosť panelu — [cvičenie 15](https://senzorika.github.io/SaIT/teoria/cvicenie15.html) · zmiešané modely — [cvičenie 16](https://senzorika.github.io/SaIT/teoria/cvicenie16.html) · CATA — [cvičenie 17](https://senzorika.github.io/SaIT/teoria/cvicenie17.html) · TDS/TCATA — [cvičenie 18](https://senzorika.github.io/SaIT/teoria/cvicenie18.html)

---

## 2. Quantitative Descriptive Analysis (QDA)

### Princíp a história

QDA bola vyvinutá Herbertom Stoneom a jeho kolegami (Stone, Sidel, Oliver, Woolsey & Singleton, 1974). Metóda je založená na princípe, že trénovaní panelisti dokážu nezávisle a opakovateľne kvantifikovať **relatívne rozdiely** v intenzite atribútov medzi produktmi; rozdiely v tom, ako jednotliví hodnotitelia používajú škálu, rieši štatistická analýza (ANOVA).

### Počet panelistov a tréning

- **Počet panelistov:** 8–12 trénovaných panelistov
- **Tréning:** relatívne krátky — rádovo 10–20 hodín (niekoľko týždňov), zameraný na konkrétnu kategóriu produktov
- **Selekcia:** panelisti musia mať nadpriemernú senzorickú citlivosť a schopnosť verbálne popísať vjemy
- **Certifikácia:** pravidelné testy citlivosti a reprodukovateľnosti

### Generovanie deskriptorov

Proces generácie pozostáva z niekoľkých krokov:

1. **Brainstorming** – panelisti generujú zoznam potenciálnych atribútov
2. **Konsenzus** – skupina diskutuje a konsoliduje zoznam
3. **Definícia** – každý atribút dostane jasnú definíciu a referenčný štandard
4. **Tréning na škále** – panelisti sa učia používať škálu konzistentne
5. **Validácia** – overenie, že panelisti rozumejú atribútom rovnako

### Škálovanie

QDA používa **nestrukturovanú lineárnu škálu** (pôvodne 6 palcov ≈ 15 cm, so slovnými kotvami ~1,25 cm od okrajov); výsledok sa odčíta ako vzdialenosť, napr. 0–15 alebo 0–100:

```
       slabé                                  silné
|--|------------------------------------------|--|
0                                                15
```

### Analýza dát

#### ANOVA (Analýza rozptylu)

```
Zdroj variability    SS        df        MS        F        p
─────────────────────────────────────────────────────────────
Produkt             SS_P      p-1       MS_P      F_P      p_P
Panelista            SS_S      s-1       MS_S      F_S      p_S
Produkt × Panelista   SS_PS     (p-1)(s-1) MS_PS    F_PS     p_PS
Chyba                SS_E      ...       MS_E      —        ─
Celkovo              SS_T      n-1       ─         ─        ─
```

> **Pozor:** Panelista je náhodný efekt (reprezentuje populáciu možných hodnotiteľov). V zmiešanom modeli sa efekt produktu testuje proti interakcii: **F_P = MS_P / MS_PS**. Test proti MS_E nadhodnocuje významnosť, keď hodnotitelia nie sú v zhode. V R: `lmer()` alebo balík `SensoMineR::panelperf` — [SaIT cvičenie 16](https://senzorika.github.io/SaIT/teoria/cvicenie16.html).

#### PCA (Analýza hlavných zložiek)

PCA sa používa na:
- Redukciu dimenzionality
- Identifikáciu hlavných zdrojov variability
- Vizualizáciu vzťahov medzi produktmi a atribútmi
- Detekciu outlierov

### Výhody a nevýhody

| Výhody | Nevýhody |
|--------|----------|
| Vysoká citlivosť a diskriminácia | Tréning a udržiavanie panelu |
| Reprodukovateľné výsledky | Náročné na čas a finančné zdroje |
| Komplexný popis produktu | Vyžaduje skúsených panelistov |
| Široké využitie v priemysle | Generácia počiatočných deskriptorov je zložitá |
| Kvantitatívne dáta vhodné na štatistickú analýzu | Panelisti môžu byť zatížení kultúrnymi predsudkami |

### Praktický príklad

**Cieľ:** Popísať senzorický profil 4 rôznych typov jogurtov.

**Postup:**
1. Panel 10 trénovaných panelistov
2. Generovanie 15 deskriptorov (kyslosť, sladkosť, krémosť, hustota, vôňa bazy, atď.)
3. Každý produkt hodnotený 3× na 15-bodovej škále
4. ANOVA: signifikantný efekt produktu na všetkých atribútoch (p < 0.05)
5. PCA: prvé dve komponenty vysvetľujú 78% variability

**Výsledok:** PCA biplot ukáže, že jogurt A je charakterizovaný vysokou krémosťou a nízkou kyslosťou, zatiaľ čo jogurt B má vysokú kyslosť a nízku krémosť.

---

## 3. Spectrum Method

### Princíp

Spectrum Method je deskriptívna metóda vyvinutá Gail Vance Civille (popísaná v Meilgaard, Civille & Carr, *Sensory Evaluation Techniques*), ktorá používa **štandardizované lexikóny** a **univerzálnu škálu 0–15** ukotvenú referenčnými vzorkami. Cieľom je, aby intenzity boli porovnateľné medzi atribútmi, produktmi aj laboratóriami (kvázi absolútna škála).

### Štandardizované slovníky

| Senzorická dimenzia | Príklad atribútov | Referenčné štandardy |
|---------------------|-------------------|----------------------|
| Vôňa / aróma | kvetinová, ovocná, orechová, korenistá | Referenčné látky a produkty (napr. vanilín, citral) |
| Chuť | sladká, kyslá, slaná, horká, umami | Roztoky sacharózy, kyseliny citrónovej, NaCl, kofeínu, MSG v odstupňovaných koncentráciách |
| Textúra | tvrdosť, súdržnosť, lepivosť, chrumkavosť | Referenčné potraviny na škále (napr. syr, olivy, arašidy pre tvrdosť) |
| Vizuálna | farba, lesk, homogenita | Farebné štandardy, fotografie |

### Výhody a nevýhody

| Výhody | Nevýhody |
|--------|----------|
| Vysoká reprodukovateľnosť medzi laboratóriami | Dlhý a náročný tréning (často mesiace) |
| Škála porovnateľná naprieč atribútmi a produktmi | Menej flexibilná pri nových kategóriách produktov |
| Rozsiahle publikované lexikóny a referencie | Vyžaduje dôkladnú znalosť lexikónu |
| Vhodná pre dlhodobé sledovanie (QC, benchmarking) | Vysoké náklady na zavedenie |

---

## 4. Flavor Profile Method

### Princíp

Flavor Profile Method bola vyvinutá koncom 40. rokov v spoločnosti Arthur D. Little (publikovaná Cairncrossom & Sjöströmom, 1950). Je to **kvalitatívno-kvantitatívna metóda**: malý panel expertov (4–6) popíše zložky vône a chuti, ich poradie, intenzitu, dochuť a celkový dojem (amplitúdu) a dospeje ku **konsenzu**.

### Škála intenzity

| Symbol | Význam |
|--------|--------|
| 0 | Neprítomné |
| )( | Na prahu (threshold, len postrehnuteľné) |
| 1 | Slabá intenzita (slight) |
| 2 | Stredná intenzita (moderate) |
| 3 | Silná intenzita (strong) |

### Výhody a nevýhody

| Výhody | Nevýhody |
|--------|----------|
| Jednoduchá škála | Nízka citlivosť diskriminácie |
| Rýchle hodnotenie | Subjektívne interpretácie úrovní |
| Vhodná pre komplexné vône | Obmedzená na vôňu a chuť |
| Historicky významná | Nahradená presnejšími metódami |

---

## 5. Texture Profile Method

### Princíp

Texture Profile Method (TPM) bola vyvinutá v General Foods (Brandt, Skinner & Coleman, 1963; klasifikácia textúry Szczesniak, 1963). Panelisti hodnotia textúrne vlastnosti **v poradí, v akom sa objavujú**: vzhľad → prvé zahryznutie → žuvanie → reziduum po prehltnutí, s použitím štandardizovaných referenčných škál (ISO 11036:2020).

> Nezamieňať s inštrumentálnou **TPA** (Texture Profile Analysis) na textúrometri, ktorá simuluje dve zahryznutia dvojitou kompresiou vzorky.

### Atribúty textúry

| Kategória | Atribúty | Popis |
|-----------|----------|-------|
| Mechanická | Tvrdosť, súdržnosť, lepivosť, pružnosť, žuvateľnosť | Reakcia na pôsobenie sily |
| Geometrická | Zrnitosť, vláknitosť, kryštalickosť | Veľkosť, tvar a orientácia častíc |
| Ostatné (vlhkosť, tuk) | Vlhkosť, šťavnatosť, mastnosť, olejovitosť | Vnímanie vody a tuku |

### Výhody a nevýhody

| Výhody | Nevýhody |
|--------|----------|
| Štandardizované hodnotenie textúry s referenčnými škálami | Vyžaduje dlhý tréning |
| Korelácia s instrumentálnymi meraniami | Časovo náročné hodnotenie |
| Široké využitie v potravinárstve | Obmedzené na textúru |

---

## 6. Free Choice Profiling

### Princíp

Free Choice Profiling (FCP; Williams & Langron, 1984) umožňuje panelistom používať **vlastné deskriptory** namiesto predpísaného zoznamu. Každý panelista vypracuje slovník podľa vlastného vnímania a hodnotí produkty na vlastných škálach; nie je potrebná zhoda panelu na slovníku.

### GPA analýza

Generalized Procrustes Analysis (GPA) sa používa na:
- Zarovnanie individuálnych konfigurácií do spoločného priestoru
- Vytvorenie konsenzuálneho senzorického profilu
- Vizualizáciu rozdielov medzi panelistami

### Výhody a nevýhody

| Výhody | Nevýhody |
|--------|----------|
| Žiadny predpísaný slovník | Zložitá štatistická analýza |
| Netreba konsenzus na slovníku | Ťažké porovnanie medzi štúdiami |
| Vhodná pre nové kategórie | Vyžaduje pokročilú štatistiku |
| Rýchlejší tréning | Menšia reprodukovateľnosť, ťažšia interpretácia slov |

---

## 7. Flash Profile

### Princíp

Flash Profile (Dairou & Sieffermann, 2002) je **rýchla deskriptívna metóda**, ktorá kombinuje princípy FCP s priamym porovnaním produktov. Panelisti dostanú všetky produkty naraz, vytvoria vlastné deskriptory a podľa každého deskriptora produkty **zoradia**; dáta sa analyzujú GPA alebo MFA.

### Kedy použiť

- Screening veľkého počtu produktov
- Exploratórna fáza výskumu
- Keď je potrebná rýchla odpoveď
- Pri obmedzených zdrojoch

### Výhody a nevýhody

| Výhody | Nevýhody |
|--------|----------|
| Veľmi rýchle (jedno až niekoľko sedení) | Nižšia reprodukovateľnosť |
| Nízke náklady na tréning | Porovnávanie všetkých produktov naraz je kognitívne náročné |
| Flexibilné deskriptory | Najlepšie výsledky so skúsenými hodnotiteľmi |
| | Výsledky sú relatívne (poradia), nie intenzity |

---

## 8. Check-All-That-Apply (CATA)

### Princíp

CATA (Adams et al., 2007; rozšírená najmä prácami Aresa a kol.) je metóda, kde spotrebitelia (nie trénovaní panelisti) označia všetky deskriptory, ktoré podľa nich charakterizujú produkt. Výsledkom je binárna matica (0/1), z ktorej sa počítajú frekvencie.

### Výpočet frekvencií

Pre každý deskriptor sa vypočíta frekvencia výskytu:

```
Frekvencia (%) = (Počet označení / Počet respondentov) × 100
```

### Cochranov Q test

Keďže každý respondent hodnotí všetky produkty, odpovede sú **závislé**. Rozdiely vo frekvencii deskriptora medzi produktmi sa preto testujú **Cochranovým Q testom** (párové porovnania McNemarovým testom), nie obyčajným χ² testom nezávislosti:

```
Q = (k − 1) · [k·Σ C_j² − N²] / [k·N − Σ R_i²]  ~  χ²(k − 1)
```

Kde k = počet produktov, C_j = počet označení pri produkte j, R_i = počet označení respondenta i, N = celkový počet označení. Mapu produktov a deskriptorov poskytne korešpondenčná analýza (CA) kontingenčnej tabuľky produkt × deskriptor.

### Výhody a nevýhody

| Výhody | Nevýhody |
|--------|----------|
| Jednoduché pre respondentov | Binárne dáta (frekvencie, nie intenzity) |
| Rýchly zber dát | Nemožnosť priamo merať intenzitu |
| Vhodné pre spotrebiteľov | Závislé od zoznamu a poradia deskriptorov |
| Žiadne náklady na tréning | |

> 🧪 **SaIT:** [cvičenie 17](https://senzorika.github.io/SaIT/teoria/cvicenie17.html) (CATA, napping) · [cvičenie 9](https://senzorika.github.io/SaIT/teoria/cvicenie09.html) (korešpondenčná analýza)

---

## 9. Temporal Dominance of Sensations (TDS)

### Princíp

TDS (Pineau et al., 2009) je **dynamická metóda**, ktorá sleduje dominantné senzorické vnemy v čase počas konzumácie produktu. Panelista označuje, ktorý atribút je v danom okamihu dominantný (v každom okamihu len jeden).

### TDS krivky

TDS krivka zobrazuje:
- **Os X:** Čas (s)
- **Os Y:** Pravdepodobnosť, že je atribút dominantný
- **Každá krivka:** Jeden atribút

### Signifikantnosť

Úroveň náhody je **P₀ = 1/k**, kde **k = počet atribútov** v zozname (nie počet panelistov). Hranica významnosti (Pineau et al., 2009) je založená na normálnej aproximácii binomického rozdelenia:

```
P_s = P₀ + 1.645 · √( P₀ · (1 − P₀) / n )
```

Kde n = počet hodnotení (hodnotitelia × opakovania). Atribút, ktorého krivka prekročí P_s, je v danom čase významne dominantný.

> 🧪 **SaIT:** [cvičenie 18](https://senzorika.github.io/SaIT/teoria/cvicenie18.html) · aplikácia [`TDS_app.R`](https://github.com/senzorika/SaIT/blob/master/Senzometricke_appky/TDS_app.R)

### Výhody a nevýhody

| Výhody | Nevýhody |
|--------|----------|
| Dynamický pohľad na spotrebu | Vyžaduje špecializovaný softvér |
| Identifikácia sekvencie vjemov | Náročné na panelistov |
| Vhodné pre produkty s dlhou spotrebou | Obmedzené na dominantné vjemy |

---

## 10. Temporal Check-All-That-Apply (TCATA)

### Princíp

TCATA (Castura, Antúnez, Giménez & Ares, 2016) je **dynamická verzia CATA**. Hodnotitelia (trénovaní aj spotrebitelia) v priebehu konzumácie označujú a odznačujú všetky atribúty, ktoré v danom okamihu vnímajú (nie len dominantné). Produkty sa v každom čase porovnávajú testami podielov (napr. Fisherov/McNemarov test).

> 🧪 **SaIT:** [cvičenie 18](https://senzorika.github.io/SaIT/teoria/cvicenie18.html) · aplikácia [`TCATA_app.R`](https://github.com/senzorika/SaIT/blob/master/Senzometricke_appky/TCATA_app.R)

### Výhody a nevýhody

| Výhody | Nevýhody |
|--------|----------|
| Komplexný dynamický profil | Veľa dát na analýzu |
| Vhodné pre produkty s komplexnou senzorikou | Vyžaduje špecializovaný softvér |
| Menej náročné na panelistov než TDS | |

---

## 11. Porovnanie metód

| Metóda | Typ | Tréning | Čas | Citlivosť | Reprodukovateľnosť | Vhodné pre |
|--------|-----|---------|-----|-----------|---------------------|------------|
| QDA | Kvantitatívna | Vysoký | Vysoký | Vysoká | Vysoká | Vývoj, kontrola kvality |
| Spectrum | Kvantitatívna | Vysoký | Stredný | Vysoká | Vysoká | Priemysel, certifikácia |
| Flavor Profile | Kvalitatívno-kvantitatívna | Stredný | Nízky | Nízka | Stredná | Rýchly screening |
| Texture Profile | Kvantitatívna | Vysoký | Vysoký | Vysoká | Vysoká | Textúra produktov |
| Free Choice | Kvantitatívna | Nízky | Stredný | Stredná | Nízka | Nové kategórie |
| Flash Profile | Poradová (ranking) | Nízky | Nízky | Stredná | Nízka | Screening |
| CATA | Binárna (frekvencie) | Žiadny | Nízky | Stredná | Stredná | Spotrebiteľské testy |
| TDS | Binárna v čase | Stredný | Stredný | Stredná | Stredná | Dynamické produkty |
| TCATA | Binárna v čase | Nízky–stredný | Stredný | Stredná | Stredná | Dynamické produkty |

---

## 12. Výber správnej metody

### Rozhodovacie kritériá

```
                    ┌─────────────────────────────┐
                    │    Aký je cieľ štúdie?      │
                    └──────────────┬──────────────┘
                                   │
           ┌───────────────────────┼───────────────────────┐
           │                       │                       │
    ┌──────▼──────┐         ┌──────▼──────┐         ┌──────▼──────┐
    │  Vývoj      │         │  Screening  │         │  Spotreb.   │
    │  produktu   │         │             │         │  testy      │
    └──────┬──────┘         └──────┬──────┘         └──────┬──────┘
           │                       │                       │
    ┌──────▼──────┐         ┌──────▼──────┐         ┌──────▼──────┐
    │ QDA/Spectrum│         │Flash Profile│         │    CATA     │
    │             │         │             │         │             │
    └─────────────┘         └─────────────┘         └─────────────┘
```

### Faktory rozhodovania

| Faktor | Odporúčaná metóda |
|--------|-------------------|
| Potreba kvantitatívnych dát | QDA, Spectrum |
| Obmedzený čas | Flash Profile, CATA |
| Nová kategória produktu | Free Choice Profiling |
| Dynamické vjemy | TDS, TCATA |
| Nízke náklady | CATA, Flash Profile |
| Vysoká reprodukateľnosť | QDA, Spectrum |
| Spotrebiteľský popis produktov | CATA (+ hedonická otázka → penalty-lift analýza) |

---

## 13. Praktické príklady

### Príklad 1: Jogurt

**Cieľ:** Porovnať senzorický profil 3 výrobcov jogurtov.

**Metóda:** QDA s 10 panelistami, 15 deskriptorov.

**Výsledky:**
- Jogurt A: vysoká krémosť (12.3), stredná kyslosť (7.1)
- Jogurt B: nízka krémosť (5.2), vysoká kyslosť (11.8)
- Jogurt C: stredná krémosť (8.5), stredná kyslosť (8.2)

**Záver:** Jogurt A je najviac krémový, Jogurt B najkyslejší.

### Príklad 2: Čokoláda

**Cieľ:** Identifikovať kľúčové deskriptory kvality čokolády.

**Metóda:** CATA s 150 spotrebiteľmi, 20 deskriptorov.

**Výsledky:**
- "Krémosť" označená 78% spotrebiteľov
- "Horká chuť" označená 45% spotrebiteľov
- "Orechová vôňa" označená 32% spotrebiteľov

**Záver:** Krémosť je deskriptor, ktorý spotrebitelia pri tejto čokoláde označujú najčastejšie. Samotná frekvencia však **nehovorí o dôležitosti** pre obľúbenosť — na to treba CATA doplniť hedonickou otázkou a urobiť *penalty-lift* analýzu (rozdiel priemernej obľúbenosti, keď je deskriptor označený vs. neoznačený).

### Príklad 3: Čaj

**Cieľ:** Sledovať dynamiku senzorických vjemov pri spotrebi čaju.

**Metóda:** TDS s 12 panelistami, 8 atribútov.

**Výsledky:**
- 0–10 s: dominantná sladkosť
- 10–25 s: dominantná horkosť
- 25–40 s: dominantná trpkosť (adstringencia)

**Záver:** Počiatočná sladkosť prechádza do horkosti a v dochuti do trpkosti, čo môže byť negatívny signál pre niektorých spotrebiteľov.

---

## 14. Prepojenie s praktickými cvičeniami v R (SaIT)

| Téma | Cvičenie [SaIT](https://github.com/senzorika/SaIT) | Skript |
|---|---|---|
| ANOVA profilov, post-hoc | [5b](https://senzorika.github.io/SaIT/teoria/cvicenie05b.html) | [`cvicenie5b.R`](https://github.com/senzorika/SaIT/blob/master/cvicenie5b.R) |
| PCA, biplot profilov | [7](https://senzorika.github.io/SaIT/teoria/cvicenie07.html) | [`cvicenie7.R`](https://github.com/senzorika/SaIT/blob/master/cvicenie7.R) |
| Zhluková analýza produktov | [8](https://senzorika.github.io/SaIT/teoria/cvicenie08.html) | [`cvicenie8.R`](https://github.com/senzorika/SaIT/blob/master/cvicenie8.R) |
| Radarový graf (profilogram) | [12](https://senzorika.github.io/SaIT/teoria/cvicenie12.html) | [`cvicenie12.R`](https://github.com/senzorika/SaIT/blob/master/cvicenie12.R) |
| Výkonnosť panelu (ISO 11132) | [15](https://senzorika.github.io/SaIT/teoria/cvicenie15.html) | [`cvicenie15.R`](https://github.com/senzorika/SaIT/blob/master/cvicenie15.R) |
| Zmiešané modely (lmer) | [16](https://senzorika.github.io/SaIT/teoria/cvicenie16.html) | [`cvicenie16.R`](https://github.com/senzorika/SaIT/blob/master/cvicenie16.R) |
| CATA, napping | [17](https://senzorika.github.io/SaIT/teoria/cvicenie17.html) | [`cvicenie17.R`](https://github.com/senzorika/SaIT/blob/master/cvicenie17.R) |
| TDS, TCATA | [18](https://senzorika.github.io/SaIT/teoria/cvicenie18.html) | [`cvicenie18.R`](https://github.com/senzorika/SaIT/blob/master/cvicenie18.R) |
| Prednášky | [Panel ako merací prístroj](https://senzorika.github.io/SaIT/prezentacie/sk/04_panel.html) · [Viacrozmerné metódy](https://senzorika.github.io/SaIT/prezentacie/sk/05_viacrozmerne_metody.html) · [Rýchle a temporálne metódy](https://senzorika.github.io/SaIT/prezentacie/sk/07_rychle_temporalne_metody.html) | — |

---

*Referencie: Stone, H., Sidel, J., Oliver, S., Woolsey, A. & Singleton, R.C. (1974). Sensory evaluation by quantitative descriptive analysis. Food Technology 28(11), 24–34. | Brandt, M.A., Skinner, E.Z. & Coleman, J.A. (1963). Texture profile method. J. Food Science 28, 404–409. | Williams, A.A. & Langron, S.P. (1984). The use of free-choice profiling for the evaluation of commercial ports. J. Sci. Food Agric. 35, 558–568. | Dairou, V. & Sieffermann, J.-M. (2002). A comparison of 14 jams characterized by conventional profile and a quick original method, the Flash Profile. J. Food Science 67, 826–834. | Pineau, N. et al. (2009). Temporal Dominance of Sensations. Food Quality and Preference 20, 450–455. | Castura, J.C. et al. (2016). Temporal Check-All-That-Apply (TCATA). Food Quality and Preference 47, 79–90. | Meilgaard, M.C., Civille, G.V. & Carr, B.T. (2016). Sensory Evaluation Techniques (5th ed.). CRC Press.*
