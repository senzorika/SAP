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
| 1940s | Prvé systematické pokusy o deskriptívnu analýzu v USDA |
| 1950s | Vývoj Flavor Profile Method (Arthur D. Little) |
| 1970s | Vznik Quantitative Descriptive Analysis (QDA) – Stone et al. |
| 1980s | Texture Profile Method (Brandt et al.) |
| 1990s | Spectrum Method – standardizované slovníky |
| 2000s | Free Choice Profiling, Flash Profile |
| 2010s | CATA, TDS, TCATA – dynamické metódy |

---

## 2. Quantitative Descriptive Analysis (QDA)

### Princíp a história

QDA bola vyvinutá Haroldom Stoneom a jeho kolegami na začiatku 70. rokov. Metóda je založená na princípe, že skúsení panelisti dokážu nezávisle identifikovať a kvantifikovať absolútné intenzity senzorických atribútov na numerickej škále.

### Počet panelistov a tréning

- **Počet panelistov:** 8–12 trénovaných panelistov
- **Tréning:** 60–90 hodín v priebehu 3–6 mesiacov
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

QDA používa **lineárnu škálu** (typicky 15-bodovú alebo 100 mm VAS – Visual Analog Scale):

```
0 = neprítomné                    15 = extrémne intenzívne
|---------|---------|---------|---------|
0         5        10        15
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

#### PCA (Analýza hlavných zložiek)

PCA sa používa na:
- Redukciu dimenzionality
- Identifikáciu hlavných zdrojov variability
- Vizualizáciu vzťahov medzi produktmi a atribútmi
- Detekciu outlierov

### Výhody a nevýhody

| Výhody | Nevýhody |
|--------|----------|
| Vysoká citlivosť a diskriminácia | Dlhý tréning panelistov |
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

Spectrum Method je deskriptívna metóda vyvinutá Gail Vance Civille, ktorá používa **štandardizované slovníky** pre každú senzorickú dimenziu. Každý atribút má definovanú škálu s referenčnými bodmi, čo zabezpečuje konzistentnosť medzi panelistami a laboratóriami.

### Štandardizované slovníky

| Senzorická dimenzia | Príklad atribútov | Referenčné štandardy |
|---------------------|-------------------|----------------------|
| Vôňa | kvetinová, ovocná, orechová, korenenová | Etapy, vanilín, citrónová kyselina |
| Chuť | sladká, kyslá, slaná, horká, umami | Sacharóz, kyselina citrónová, NaCl, kofeín, MSG |
| Textúra | krémová, tuhá, vláčna, chrumkavá | Nátierky, želatín, karamel |
| Vizuálna | farba, lesk, homogenita | Farebné štandardy, fotky |

### Výhody a nevýhody

| Výhody | Nevýhody |
|--------|----------|
| Vysoká reprodukateľnosť medzi laboratóriami | Náročný tréning na štandardizované škály |
| Široká databáza referenčných štandardov | Menej flexibilná pri nových kategóriách produktov |
| Kompatibilita s databázami (e-senses) | Vyžaduje dokonalé znalosti slovníka |
| Rýchlejšie než QDA pri opakovaných testoch | Náklady na certifikáciu |

---

## 4. Flavor Profile Method

### Princíp

Flavor Profile Method bola vyvinutá v roku 1949 v spoločnosti Arthur D. Little. Je to **kvalitatívno-kvantitatívna metóda**, ktorá popisuje komplexnú vôňu a chuť produktu pomocou špeciálneho jazyka.

### 4-bodová škála

| Úroveň | Označenie | Popis |
|--------|-----------|-------|
| 1 | T (threshold) | Len znateľná intenzita |
| 2 | S (slight) | Slabá intenzita |
| 3 | M (moderate) | Stredná intenzita |
| 4 | L (large) | Vysoká intenzita |

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

Texture Profile Method (TPM) bola vyvinutá Alinou Brandtovou a kolegami. Metóda kvantifikuje mechanické, geometrické a chemické vlastnosti textúry prostredníctvom **dvojitého hodnotenia** (simulovanie dvoch žuvacích pohybov).

### Atribúty textúry

| Kategória | Atribúty | Popis |
|-----------|----------|-------|
| Mechanická | Tvrdosť, žuvacívosť, lepkavosť, pružnosť | Silové vlastnosti |
| Geometrická | Hrubosť, zrnitosť, vláčnosť | Fyzická štruktúra |
| Chemická | Tukovitosť, vlhkosť | Vlastnosti surovín |

### Výhody a nevýhody

| Výhody | Nevýhody |
|--------|----------|
| Objektívne meranie textúry | Vyžaduje tréning v texturologii |
| Korelácia s instrumentálnymi meraniami | Časovo náročné hodnotenie |
| Široké využitie v potravinárstve | Obmedzené na textúru |

---

## 6. Free Choice Profiling

### Princíp

Free Choice Profiling (FCP) umožňuje panelistom používať **vlastné deskriptory** namiesto predpísaného zoznamu. Každý panelista vypracuje slovník podľa vlastného vnímania, čo znižuje kultúrny bias.

### GPA analýza

Generalized Procrustes Analysis (GPA) sa používa na:
- Zarovnanie individuálnych konfigurácií do spoločného priestoru
- Vytvorenie konsenzuálneho senzorického profilu
- Vizualizáciu rozdielov medzi panelistami

### Výhody a nevýhody

| Výhody | Nevýhody |
|--------|----------|
| Žiadny predpísaný slovník | Zložitá štatistická analýza |
| Nízky kultúrny bias | Ťažké porovnanie medzi štúdiami |
| Vhodná pre nové kategórie | Vyžaduje pokročilú štatistiku |
| Rýchlejšie tréning | Menšia reprodukateľnosť |

---

## 7. Flash Profile

### Princíp

Flash Profile je **rýchla deskriptívna metóda**, ktorá kombinuje princípy FCP s priamym porovnaním produktov. Panelisti hodnotia všetky produkty naraz a generujú vlastné deskriptory.

### Kedy použiť

- Screening veľkého počtu produktov
- Exploratórna fáza výskumu
- Keď je potrebná rýchla odpoveď
- Pri obmedzených zdrojoch

### Výhody a nevýhody

| Výhody | Nevýhody |
|--------|----------|
| Veľmi rýchle (15–30 min) | Nízka reprodukateľnosť |
| Náročné na panelistov | Obmedzená štatistická analýza |
| Flexibilné deskriptory | Vyžaduje skúsených panelistov |
| Náklady na tréning | |

---

## 8. Check-All-That-Apply (CATA)

### Princíp

CATA je **kvalitatívna metóda**, kde spotrebiteľi (nie trénovaní panelisti) označia všetky deskriptory, ktoré podľa nich charakterizujú produkt. Výsledkom je binárna matica (0/1).

### Výpočet frekvencií

Pre každý deskriptor sa vypočíta frekvencia výskytu:

```
Frekvencia (%) = (Počet označení / Počet respondentov) × 100
```

### Chi-square test

Chi-square test sa používa na overenie, či sa frekvencie líšia medzi produktami:

```
χ² = Σ (O - E)² / E
```

Kde O = pozorovaná frekvencia, E = očakávaná frekvencia.

### Výhody a nevýhody

| Výhody | Nevýhody |
|--------|----------|
| Jednoduché pre respondentov | Kvalitatívne (nie kvantitatívne) dáta |
| Rýchle zber dát | Nemožnosť merania intenzity |
| Vhodné pre spotrebiteľov | Závislé na zozname deskriptorov |
| Náklady na tréning | |

---

## 9. Temporal Dominance of Sensations (TDS)

### Princíp

TDS je **dynamická metóda**, ktorá sleduje dominantné senzorické vjemy v čase počas spotreby produktu. Panelista označuje, ktorý atribút je v danom okamihu dominantný.

### TDS krivky

TDS krivka zobrazuje:
- **Os X:** Čas (s)
- **Os Y:** Pravdepodobnosť, že je atribút dominantný
- **Každá krivka:** Jeden atribút

### Signifikantnosť

Signifikantná dominancia sa vypočíta pomocou binomického testu:

```
P(X ≥ k) = Σ (n choose i) × p₀^i × (1-p₀)^(n-i)
```

Kde p₀ = 1/n (náhodná dominancia), n = počet panelistov.

### Výhody a nevýhody

| Výhody | Nevýhody |
|--------|----------|
| Dynamický pohľad na spotrebu | Vyžaduje špecializovaný softvér |
| Identifikácia sekvencie vjemov | Náročné na panelistov |
| Vhodné pre produkty s dlhou spotrebou | Obmedzené na dominantné vjemy |

---

## 10. Temporal Check-All-That-Apply (TCATA)

### Princíp

TCATA je **dynamická verzia CATA**. Spotrebiteľi v priebehu spotreby označujú všetky atribúty, ktoré v danom okamihu vnímajú (nie len dominantné).

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
| Flash Profile | Kvantitatívna | Nízky | Nízky | Stredná | Nízka | Screening |
| CATA | Kvalitatívna | Žiadny | Nízky | Stredná | Stredná | Spotrebiteľské testy |
| TDS | Kvantitatívna | Stredný | Stredný | Vysoká | Vysoká | Dynamické produkty |
| TCATA | Kvalitatívna | Žiadny | Stredný | Stredná | Stredná | Dynamické produkty |

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
| Spotrebiteľské preferencie | CATA, Flash Profile |

---

## 13. Praktické príklady

### Príklad 1: Výnový jogurt

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

**Záver:** Krémosť je najdôležitejší atribút pre spotrebiteľov.

### Príklad 3: Čaj

**Cieľ:** Sledovať dynamiku senzorických vjemov pri spotrebi čaju.

**Metóda:** TDS s 12 panelistami, 8 atribútov.

**Výsledky:**
- 0–10 s: dominantná sladkosť
- 10–25 s: dominantná horkosť
- 25–40 s: dominantná horkosť + horká chuť

**Záver:** Počiatočná sladkosť sa mení na horkosť, čo môže byť negatívny signál pre niektorých spotrebiteľov.
