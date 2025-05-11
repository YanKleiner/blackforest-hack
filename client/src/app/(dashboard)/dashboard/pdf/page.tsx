'use client';

import { CodeComparison } from '@/components/magicui/code-comparison';

const beforeCode = `import { NextRequest } from 'next/server';

export const middleware = async (req: NextRequest) => {
  let user = undefined;
  let team = undefined;
  const token = req.headers.get('token'); 

  if(req.nextUrl.pathname.startsWith('/auth')) {
    user = await getUserByToken(token);

    if(!user) {
      return NextResponse.redirect('/login');
    }
  }

  if(req.nextUrl.pathname.startsWith('/team')) {
    user = await getUserByToken(token);

    if(!user) {
      return NextResponse.redirect('/login');
    }

    const slug = req.nextUrl.query.slug;
    team = await getTeamBySlug(slug); // [!code highlight]

    if(!team) { // [!code highlight]
      return NextResponse.redirect('/'); // [!code highlight]
    } // [!code highlight]
  } // [!code highlight]

  return NextResponse.next(); // [!code highlight]
}

export const config = {
  matcher: ['/((?!_next/|_static|_vercel|[\\w-]+\\.\\w+).*)'], // [!code highlight]
};`;

// const afterCode = `import { createMiddleware, type MiddlewareFunctionProps } from '@app/(auth)/auth/_middleware';
// import { auth } from '@/app/(auth)/auth/_middleware'; // [!code --]
// import { auth } from '@/app/(auth)/auth/_middleware'; // [!code ++]
// import { team } from '@/app/(team)/team/_middleware';

// const middlewares = {
//   '/auth{/:path?}': auth,
//   '/team{/:slug?}': [ auth, team ],
// };

// export const middleware = createMiddleware(middlewares); // [!code focus]

// export const config = {
//   matcher: ['/((?!_next/|_static|_vercel|[\\w-]+\\.\\w+).*)'],
// };`;

const afterCodeMock = `<?xml version="1.0" encoding="UTF-8"?>
<order>
   <customerId>109349</customerId>
   <commission>1901 / Sägemühle</commission>
   <type>A</type>
   <shippingConditionId>2</shippingConditionId>
   <items>
      <item>
         <sku>620001</sku>
         <name>TVB - Türblatt 875x2125 mm</name>
         <text>Liefern und Einbauen von Innentür-Elementen.<br/>
Elementgröße Richtmaß: 875 x 2.125 mm<br/>
Angebotenes Fabrikat: Jeld-Wen Optima 30.</text>
         <quantity>140</quantity>
         <quantityUnit>Stk</quantityUnit>
         <price>183.00</price>
         <priceUnit>€</priceUnit>
         <purchasePrice></purchasePrice>
         <commission>LV-POS. 01.1</commission>
      </item>
      <item>
         <sku>620001</sku>
         <name>TVB - Türblatt 750x2125 mm</name>
         <text>Wie Position 01.1 jedoch Elementgröße: 750 x 2.125 mm.<br/>
Angebotenes Fabrikat: Jeld-Wen Optima 30.</text>
         <quantity>1</quantity>
         <quantityUnit>Stk</quantityUnit>
         <price>183.00</price>
         <priceUnit>€</priceUnit>
         <purchasePrice></purchasePrice>
         <commission>LV-POS. 01.2</commission>
      </item>
      <item>
         <sku>620001</sku>
         <name>TVB - Türblatt 625x2000 mm mit Dichtung</name>
         <text>Wie Position 01.1 jedoch:<br/>
Elementgröße: 625 x 2.000 mm<br/>
mit absenkbarer Bodendichtung.<br/>
Angebotenes Fabrikat: Jeld-Wen Optima 30.</text>
         <quantity>1</quantity>
         <quantityUnit>Stk</quantityUnit>
         <price>227.00</price>
         <priceUnit>€</priceUnit>
         <purchasePrice></purchasePrice>
         <commission>LV-POS. 01.3</commission>
      </item>
      <item>
         <sku>620001</sku>
         <name>Feuchtraum-Türblatt 875x2125 mm</name>
         <text>Wie Position 01.1 jedoch:<br/>
Feuchteschutz und Klimaklasse II.<br/>
Angebotenes Fabrikat: Jeld-Wen Feuchtraumtür Typ Y.</text>
         <quantity>75</quantity>
         <quantityUnit>Stk</quantityUnit>
         <price>300.00</price>
         <priceUnit>€</priceUnit>
         <purchasePrice></purchasePrice>
         <commission>LV-POS. 01.4</commission>
      </item>
      <item>
         <sku>620001</sku>
         <name>Feuchtraum-Türblatt 750x2125 mm</name>
         <text>Wie Position 01.1 jedoch:<br/>
Feuchteschutz und Klimaklasse II.<br/>
Elementgröße: 750 x 2.125 mm<br/>
Angebotenes Fabrikat: Jeld-Wen Feuchtraumtür Typ Y.</text>
         <quantity>11</quantity>
         <quantityUnit>Stk</quantityUnit>
         <price>300.00</price>
         <priceUnit>€</priceUnit>
         <purchasePrice></purchasePrice>
         <commission>LV-POS. 01.5</commission>
      </item>
      <item>
         <sku>620001</sku>
         <name>Eventual: HPL-Beschichtung</name>
         <text>Alternative: Alle Türblätter (Pos 01.1-01.5) mit HPL-Beschichtung.<br/>
Angebotenes Fabrikat: Jeld-Wen.</text>
         <quantity>84</quantity>
         <quantityUnit>Stk</quantityUnit>
         <price>228.00</price>
         <priceUnit>€</priceUnit>
         <purchasePrice></purchasePrice>
         <commission>LV-POS. 01.6</commission>
      </item>
      <item>
         <sku>240001</sku>
         <name>Beschläge Bad- und WC-Türen</name>
         <text>Beschläge bestehend aus:<br/>
<ul>
<li>WC-Einsteckschloss, Klasse 1, 1-tourig</li>
<li>Edelstahl-WC-Rosettengarnitur</li>
</ul>
Angebotenes Fabrikat: Hoppe Amsterdam.</text>
         <quantity>133</quantity>
         <quantityUnit>Stk</quantityUnit>
         <price>24.00</price>
         <priceUnit>€</priceUnit>
         <purchasePrice></purchasePrice>
         <commission>LV-POS. 02.3</commission>
      </item>
      <item>
         <sku>240001</sku>
         <name>Eventual: Beschläge Zimmertüren BB-Schloss</name>
         <text>Beschläge bestehend aus:<br/>
<ul>
<li>Buntbart-Einsteckschloss, 1-tourig, je 1 Schlüssel</li>
<li>Edelstahl-Rosettengarnitur</li>
</ul>
Türdrücker: FSB 1076 Edelstahl feingebürstet.<br/>
Angebotenes Produkt: Hoppe Amsterdam.</text>
         <quantity>38</quantity>
         <quantityUnit>Stk</quantityUnit>
         <price>38.00</price>
         <priceUnit>€</priceUnit>
         <purchasePrice></purchasePrice>
         <commission>LV-POS. 02.1</commission>
      </item>
      <item>
         <sku>240001</sku>
         <name>Beschläge Zimmertüren PZ-Schloss</name>
         <text>Wie Pos 02.1 jedoch:<br/>
<ul>
<li>Profilzylinderschloss, 1-tourig inkl. Schlüssel</li>
<li>Edelstahl-Rosettengarnitur</li>
</ul>
Türdrücker: Hoppe Amsterdam.</text>
         <quantity>95</quantity>
         <quantityUnit>Stk</quantityUnit>
         <price>37.00</price>
         <priceUnit>€</priceUnit>
         <purchasePrice></purchasePrice>
         <commission>LV-POS. 02.2</commission>
      </item>
      <item>
         <sku>330001</sku>
         <name>Türstopper</name>
         <text>Türstopper Wandbefestigung, Kunststoff weiß, ø ca. 40 mm, Bummsinchen o.glw.</text>
         <quantity>228</quantity>
         <quantityUnit>Stk</quantityUnit>
         <price>6.00</price>
         <priceUnit>€</priceUnit>
         <purchasePrice></purchasePrice>
         <commission>LV-POS. 03.1</commission>
      </item>
      <item>
         <sku>DL5010008</sku>
         <name>Service- / Montagetechniker Polier</name>
         <text>Stundenlohnarbeiten durch Polier/in.<br/>
Verrechnungssatz umfasst sämtliche Lohn- und Nebenkosten, Gemeinkosten, Wagnis und Gewinn.<br/>
Zeit wird nach tatsächlichem Aufwand gemäß Tätigkeitsnachweis abgerechnet.</text>
         <quantity>15</quantity>
         <quantityUnit>Stk</quantityUnit>
         <price>95.00</price>
         <priceUnit>€</priceUnit>
         <purchasePrice></purchasePrice>
         <commission>LV-POS. 04.1</commission>
      </item>
      <item>
         <sku>DL5010008</sku>
         <name>Service- / Montagetechniker Facharbeiter</name>
         <text>Stundenlohnarbeiten durch Facharbeiter/in.<br/>
Verrechnungssatz umfasst sämtliche Lohn- und Nebenkosten, Gemeinkosten, Wagnis und Gewinn.<br/>
Zeit wird nach tatsächlichem Aufwand gemäß Tätigkeitsnachweis abgerechnet.</text>
         <quantity>40</quantity>
         <quantityUnit>Stk</quantityUnit>
         <price>75.00</price>
         <priceUnit>€</priceUnit>
         <purchasePrice></purchasePrice>
         <commission>LV-POS. 04.2</commission>
      </item>
      <item>
         <sku>DL5010008</sku>
         <name>Service- / Montagetechniker Bauhelfer</name>
         <text>Stundenlohnarbeiten durch Bauhelfer/in.<br/>
Verrechnungssatz umfasst sämtliche Lohn- und Nebenkosten, Gemeinkosten, Wagnis und Gewinn.<br/>
Zeit wird nach tatsächlichem Aufwand gemäß Tätigkeitsnachweis abgerechnet.</text>
         <quantity>15</quantity>
         <quantityUnit>Stk</quantityUnit>
         <price>58.00</price>
         <priceUnit>€</priceUnit>
         <purchasePrice></purchasePrice>
         <commission>LV-POS. 04.3</commission>
      </item>
   </items>
</order>
`;

import { useStore } from '@/lib/store';
import { after } from 'node:test';

export default function CodeComparisonDemo() {
  const { serverResponse } = useStore();
  const afterCode = serverResponse?.xml || afterCodeMock;

  return (
    <div className='relative top-28 flex flex-1 flex-col'>
      <CodeComparison
        beforeCode={beforeCode}
        afterCode={afterCode}
        language='typescript'
        filename='output.xml'
        lightTheme='github-light'
        darkTheme='github-dark'
        highlightColor='rgba(101, 117, 133, 0.16)'
      />
    </div>
  );
}
