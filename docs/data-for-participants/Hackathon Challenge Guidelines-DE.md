# Hackathon Challenge Guidelines

## Übersicht

Die Teilnehmer müssen ein System entwickeln, das die Klassifizierung und Organisation von Bauelementen und Dienstleistungen gemäß vorgegebenen Kategorien und Anforderungen automatisiert. Die Herausforderung besteht darin, verschiedene Arten von Türen, Zubehör und Dienstleistungen zu verwalten und dabei die Einhaltung spezifischer Standards sicherzustellen. Ziel ist es, eine Benutzeroberfläche zu entwickeln, in der Benutzer eine Kunden-ID eingeben und ein Leistungsverzeichnis hochladen können. Das System sollte die Informationen automatisch extrahieren und in Produkte und Dienstleistungen klassifizieren, um sie dann in bearbeitbare Angebotspositionen umzuformatieren, die als XML für die ERP-Integration exportiert werden können.

Die Funktionalität der Benutzeroberfläche kann wie folgt vereinfacht werden:

#### EINGABE:

- Kunden-ID
- Leistungsverzeichnis

#### AUSGABE:

- Angebot im XML-Format, bereit für den ERP-Import

### Zur Unterstützung der Herausforderung stellen wir Folgendes zur Verfügung:

- Produkt- und Servicekatalog (weiter unten in diesem Dokument)
- Zwei Beispiele, die jeweils das Muster-Leistungsverzeichnis, ein generiertes Angebot für ein ERP-System und die erwartete XML-Ausgabe für die Herausforderung enthalten.

Hier ist ein Beispiel für das erwartete Format der XML-Ausgabe:

```
<?xml version="1.0" encoding="UTF-8"?>
<order>
   <customerId>102736</customerId>
   <commission>Cerdia Leitwarte</commission>
   <type>A</type>
   <shippingConditionId>2</shippingConditionId>
   <items>
      <item>
         <sku>620001</sku>
         <name>Bürotür mit Stahl-U-Zarge (0,76 x 2,135 m)</name>
         <text>Hörmann Stahlfutterzarge VarioFix für Mauerwerk oder TRB<br/>- Drückerhöhe 1050 mm<br/>- Meterrissmarkierung<br/>- Maulweitenkante 15 mm<br/>- Stahlblech verzinkt, Materialstärke 1,5 mm<br/>- Hörmann BaseLine HPL Türblatt<br/>- Türgewicht ca. 18,1 kg/m²<br/>- Türstärke ca. 40,7 mm</text>
         <quantity>1</quantity>
         <quantityUnit>Stk</quantityUnit>
         <price>695.00</price>
         <priceUnit>€</priceUnit>
         <commission>LV-POS. 1.1.10</commission>
      </item>
      ...hier werden so viele Positionen aufgeführt, wie im Leistungsverzeichnis enthalten sind.
   </items>
</order>
```

#### Formaterklärung:

- customerId: Die ID des Kunden, die in der Benutzeroberfläche abgefragt werden soll.
- commission: Die Provision für den Kunden.
- type: Die Art des Angebots; es kann sich um einen statischen Wert handeln, beispielsweise „A“, das für „Angebot“ steht.
- shippingConditionId: Die ID der Versandbedingung, ebenfalls ein statischer Wert, beispielsweise „2“, was für den Versand mit DHL steht.
- items: Die im Angebot enthaltenen Artikel, dargestellt als Array. Jeder Artikel ist ein Objekt mit den folgenden Eigenschaften:
  - sku: Die SKU des Artikels, entsprechend der Artikelnummern aus dem Produkt- und Servicekatalog.
  - name: Der Name des Artikels.
  - text: Die Beschreibung des Artikels.
  - quantity: Die Menge des Artikels.
  - quantityUnit: Die Maßeinheit für die Menge.
  - price: Der Preis des Artikels.
  - priceUnit: Die Maßeinheit für den Preis.
  - commission: Die Provision für den Artikel.

## Zusätzliche Richtlinien:

- Lieferant in Pos. Hinterlegen (gem. Fabrikat, nur bei Elementen, nicht bei Zubehör und Dienstleistungen)
- LV prüfen und Liste ausgeben, welche Gewerke / Artikel gefordert werden mit Seitenangaben, als Vorbereitung zur Weiterleitung an die Hersteller mit Anzahl der Elemente / Artikel
  - z.B. 50 Holzelemente (S. 7 - 15), 10 Stahltüren (S. 16 - 20) 60 Beschläge (S. 21 - 23), 3 Obentürschließer, 1 Drehtürantrieb
  - ggf. Vorschläge an wen das LV / die einzelnen Teile gesendet werden können
- Die Benutzeroberfläche sollte einfach zu bedienen und zu verstehen sein; sie sollte selbsterklärend sein.
- Alle Arten von fortschrittlichem UX, die die Erstellung des Angebots vereinfachen, werden geschätzt, wie zum Beispiel eine Live-Darstellung des Angebots als PDF, die vom Benutzer vor dem Export der gewünschten Ausgabe inline bearbeitet werden kann.

#### Aufteilung nach Produktgruppen:

- Holztüren
- Stahltüren
- Rohrrahmentüren
- Tore
- Stahlzargen
- Zubehör (Drückergarnituren, Obentürschließer)
- Drehtürantriebe
- Haustüren
- Fluchtwegssicherung / Fluchttürsteuerung

#### Erkennung bestimmter Anforderungen

- Schallschutz
- Einbruchschutz
- Brandschutz
- Rauchschutz
- Nassraum
- Feuchtraum
- Klimaklasse
- Außentüren
- Pfosten-Riegelkonstruktion
- Wärmedämmung (U-Wert)
- Strahlenschutz
- Barrierefreiheit
- Einfachfalz
- Stumpf
- Doppelfalz

## Grobe Übersicht über LV

Was steckt im LV?

- Welche Produkte?
- Welche Anzahl des jeweiligen Produkts?
- Welche Anforderungen haben diese Produkte? (Summiert auf Produktgruppe)
- Welche Fabrikate werden gefordert? (Innerhalb der Produktgruppe)
  Beispiel: Holztüren, 20 Stk., Schallschutzklasse 3, Klimaklasse 3, Gefälzt, Fabrikat Jeld-Wen

Eventualpositionen / Bedarfspositionen separat aufführen und nicht in Gesamtmenge der Produktgruppen einrechnen.
Separate Übersicht, welche Zulagen im LV gefordert werden
(Beispiel 02, service-specification.pdf: Pos. 01.6 HPL-Beschichtung)

## Zuordnung Gewerk - Diversnr.:

### Elemente

- Holztüren, Holzzargen - Divers-Artikelnr.: 620001
- Stahltüren, Stahlzargen, Rohrrahmentüren - Divers-Artikelnr.: 670001
- Haustüren - Divers-Artikelnr.: 660001
- Glastüren - Divers-Artikelnr.: 610001
- Tore - Divers-Artikelnr.: 680001
- Zusätzliche Infos:
  - Türblatt ist maßgebend (Häufig Holztürblatt mit Stahlzarge im LV - dann auf 620001)
  - Verglasungen --> Zarge maßgebend (Häufig Festverglasungen mit Stahlzarge - dann auf 670001)

### Zubehör

- Beschläge - Divers-Artikelnr.: 240001
- Türstopper - Divers-Artikelnr.: 330001
- Lüftungsgitter - Divers-Artikelnr.: 450001
- Türschließer - Divers-Artikelnr.: 290001
- Schlösser / E-Öffner - Divers-Artikelnr.: 360001

### Dienstleistungen

- Wartung - Artikelnr.: DL8110016
- Stundenlohnarbeiten - Artikelnr.: DL5010008
- Sonstige Arbeiten (z.B. Baustelleneinrichtung, Aufmaß, Mustertürblatt, etc.) - Artikelnr.: DL5019990
