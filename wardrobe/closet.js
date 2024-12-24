//    case "":
//      document.getElementById("closet-display").style.backgroundImage="url(/wardrobe/wardrobe_images/)";
//      document.getElementById("label").innerHTML = "";
//      document.getElementById("brand").innerHTML = "Brand:  <a href='' target='_blank'>(Link)</a>";
//      document.getElementById("description").innerHTML = "";
//    break;

function selectItem(item) {
  switch (item)
  {
    case "acryl_tartansarouel":
      document.getElementById("closet-display").style.backgroundImage="url(wardrobe_images/acryl_tartansarouel_front.png)";
      document.getElementById("label").innerHTML = "Dyed Check Sarouel Pants With Suspenders (2020)";
      document.getElementById("brand").innerHTML = "Brand: Acryl agitt <a href='https://acryl-bones.square.site/product/AA4-P029PN/414?cp=true&sa=false&sbp=false&q=false&category_id=69' target='_blank'>(Link)</a>";
      document.getElementById("description").innerHTML = "A pair of sarouel-style pants I bought at an Acryl agitt pop-up store. This piece is comprised of 100% thin cotton that retains wrinkles in complement to its bold print. Mock-suspender straps hang from the elastic waistband. I was very happy to meet Acryl's designer Daisuke Ichikawa, also former chief designer of H.Naoto.";
    break;
    case "aatp_butterfly":
      document.getElementById("closet-display").style.backgroundImage="url(wardrobe_images/aatp_butterfly_front.png)";
      document.getElementById("label").innerHTML = "Back Butterfly Blouse (2007)";
      document.getElementById("brand").innerHTML = "Brand: Alice and the Pirates <a href='https://lolibrary.org/items/aatp-back-butterfly-blouse' target='_blank'>(Link)</a>";
      document.getElementById("description").innerHTML = "A 2007 men's variant of the back butterfly blouse. Off-white colorway, 100% cotton. One of my favorite details is the asymmetrical bat-designed collar because although the jewel of this piece is the butterfly, I like to wear this blouse with layers.";
    break;
    case "aatp_embroideredtie":
      document.getElementById("closet-display").style.backgroundImage="url(wardrobe_images/aatp_embroideredtie.png)";
      document.getElementById("label").innerHTML = "a/p Embroidered Tie (2012)";
      document.getElementById("brand").innerHTML = "Brand: Alice and the Pirates <a href='https://lolibrary.org/items/aatp-ap-embroidered-tie' target='_blank'>(Link)</a>";
      document.getElementById("description").innerHTML = "Completely cotton ascot with a torchon lace edge. Writes &quot;Alice and the Pirates&quot; vertically on the blade punctuated with an embroidered rose.";
    break;
    case "aatp_griottine":
      document.getElementById("closet-display").style.backgroundImage="url(wardrobe_images/aatp_griottine.png)";
      document.getElementById("label").innerHTML = "Griottine Blouse (2015)";
      document.getElementById("brand").innerHTML = "Brand: Alice and the Pirates <a href='https://lolibrary.org/items/aatp-griottines-blouse-2015' target='_blank'>(Link)</a>";
      document.getElementById("description").innerHTML = "A 2015 re-release of a piece of the same name. Black colorway, 100% cotton. A soft crochet lace that runs along the edges of its bib-style collar and down the front plackets. Gathered ruffles ornate the sleeves with 3 buttons per arm. This piece features a couple detachable items such as a jabot that can be tied from the back and front with ribbons, and a decorative antique-gold chain tipped with an iridescent jewel.<br>Very cute piece.";
    break;
    case "aatp_onduras":
      document.getElementById("closet-display").style.backgroundImage="url(wardrobe_images/aatp_onduras_front.png)";
      document.getElementById("label").innerHTML = "Onduras Half Pants (2007)";
      document.getElementById("brand").innerHTML = "Brand: Alice and the Pirates <a href='https://lolibrary.org/items/aatp-onduras-half-pants-burberry' target='_blank'>(Link)</a>";
      document.getElementById("description").innerHTML = "A pair of knee-length burberry cotton pants. To my surprise this piece features nautical motifs, in reference to the anchor-themed metal buttons sewn along the pant-legs vertically before ending in a sturdy, detachable bow. Frills decorate the cuffs and in layers on the buttcape. Admittedly these pants are hard to capture on camera, but are elegant in person.";
    break;
    case "aatp_rudolfpants":
      document.getElementById("closet-display").style.backgroundImage="url(wardrobe_images/aatp_rudolfpants.png)";
      document.getElementById("label").innerHTML = "Rudolf Pants (2011)";
      document.getElementById("brand").innerHTML = "Brand: Alice and the Pirates <a href='https://lolibrary.org/items/aatp-rudolf-pants' target='_blank'>(Link)</a>";
      document.getElementById("description").innerHTML = "Pumpkin-style 100% cotton shorts in the black colorway. Torchon lace detailed pocket flaps and cuffs. The buttons are actually replica plastic Dominion buttons, LOL.";
    break;
    case "algonquins_checkdrop":
      document.getElementById("closet-display").style.backgroundImage="url(wardrobe_images/algonquins_checkdrop_front.png)";
      document.getElementById("label").innerHTML = "&#9632;&#9632;&#9632;";
      document.getElementById("brand").innerHTML = "Brand: Algonquins";
      document.getElementById("description").innerHTML = "Knee-length black x white tartan-patterned sarouel pants. The front pockets shape into a Union Jack with a cross-array of studs.";
    break;
    case "angeltype_lainbeanie":
      document.getElementById("closet-display").style.backgroundImage="url(wardrobe_images/angeltype_lainbeanie.png)";
      document.getElementById("label").innerHTML = "Serial Experiment Headwear";
      document.getElementById("brand").innerHTML = "Brand: ANGELtype";
      document.getElementById("description").innerHTML = "A woven hat based off of the iconic beanie from Serial Experiments Lain. Knitted into a cream base, it gradients towards the top into a soft purple &quot;eggshell&quot; pattern before peaking into a pseudo-tassel. A teddy bear design is patched onto the front. Flapped, and technically can be fastened with strings. This piece is probably discontinued after the brand started distance itself from nerd fashion and took a serious direction in designer streetwear.";
    break;
    case "btssb_birdcageparasol":
      document.getElementById("closet-display").style.backgroundImage="url(wardrobe_images/btssb_birdcageparasol_closed.png)";
      document.getElementById("label").innerHTML = "Rococo Umbrella (2017)";
      document.getElementById("brand").innerHTML = "Brand: Baby, The Stars Shine Bright <a href='https://lolibrary.org/items/btssb-baby-bird-cage-umbrella-2017' target='_blank'>(1)</a> <a href='https://store.babyssb.co.jp/en/products/b48um804' target='_blank'>(2)</a>";
      document.getElementById("description").innerHTML = "My favorite feature of this umbrella is definitely its unique leather handle. A functional waterproof parasol. If you look closer, there are hearts in the scallop trims.";
    break;
    case "bpn_highwaistedstripes":
      document.getElementById("closet-display").style.backgroundImage="url(wardrobe_images/bpn_highwaistedstripes_front.png)";
      document.getElementById("label").innerHTML = "&#9632;&#9632;&#9632;";
      document.getElementById("brand").innerHTML = "Brand: Black Peace Now";
       ocument.getElementById("description").innerHTML = "High-waisted pinstripe pants from Black Peace Now. A balloon-constructed layer drapes over the pockets and supports boning around the waist. The silhouette can be tightened with the two strap buckles in the back. Pant-leg cuffs can button up and cut off around the mid-calf.";
    break;
    case "bpn_stripedsuspenders":
      document.getElementById("closet-display").style.backgroundImage="url(wardrobe_images/bpn_stripedsuspenders.png)";
      document.getElementById("label").innerHTML = "&#9632;&#9632;&#9632;";
      document.getElementById("brand").innerHTML = "Brand: Black Peace Now";
      document.getElementById("description").innerHTML = "High-waisted shorts from Black Peace Now. Its pair of suspenders are adjustable by grommets. It's pretty tight on me so, e-mail me if you want to buy this off of me.";
    break;
    case "breathmint_tartan":
      document.getElementById("closet-display").style.backgroundImage="url(wardrobe_images/breathmint_tartan_front.png)";
      document.getElementById("label").innerHTML =         document.getElementById("label").innerHTML = "&#9632;&#9632;&#9632;";
      document.getElementById("brand").innerHTML = "Brand: BreathMINt";
      document.getElementById("description").innerHTML = "Tartan-style wool pants from BreathMINt. Flares at the legs and all the zippers have functional pockets. Sad to say I couldn't find many archives or local feedback about this brand, but I really like it a lot and I wear these pants all the time for errands.";
    break;
    case "janemarple_coat":
      document.getElementById("closet-display").style.backgroundImage="url(wardrobe_images/janemarple_coat_front.png)";
      document.getElementById("label").innerHTML = "&#9632;&#9632;&#9632;";
      document.getElementById("brand").innerHTML = "Brand: Jane Marple";
      document.getElementById("description").innerHTML = "A double breasted raincoat. Beautifully constructed in 100% cotton and accomodates space for a lolita dress. Metal buttons are engraved with heraldic imagery and a &quot;JM&quot; in the middle. Features a frilled collar and leather buckled cuffs.";
    break;
    case "marble_bellsleeve":
      document.getElementById("closet-display").style.backgroundImage="url(wardrobe_images/marble_bellsleeve_front.png)";
      document.getElementById("label").innerHTML = "Classical Decoration Blouse (2022)";
      document.getElementById("brand").innerHTML = "Brand: Marble <a href='https://lolibrary.org/items/offbrand-marbleclassical-decoration-blouse-with-tie' target='_blank'>(Link)</a>";
      document.getElementById("description").innerHTML = "A soft polyester gothic blouse. Its bell sleeves are layered with a raschel lace and accented with a black ribbon per sleeve. Frilled at the top of the collar band.";
    break;
    case "miho_doublebreastedjacket":
      document.getElementById("closet-display").style.backgroundImage="url(wardrobe_images/miho_doublebreastedjacket.png)";
      document.getElementById("label").innerHTML = "&#9632;&#9632;&#9632;";
      document.getElementById("brand").innerHTML = "Brand: Miho Matsuda";
      document.getElementById("description").innerHTML = "An 100% polyester jacquard jacket with a sleek, feminine, silhouette. The button alignment dips into a V-shape to ennunciate the waist, and the jacket itself is form-fitting.";
    break;
    case "mmm_updownfrill":
      document.getElementById("closet-display").style.backgroundImage="url(wardrobe_images/mmm_updownfrill.png)";
      document.getElementById("label").innerHTML = "Up and Down Frill Collar Blouse (2002)";
      document.getElementById("brand").innerHTML = "Brand: Moi-même-Moitié <a href='https://lolibrary.org/items/moitie-up-and-down-frill-collar-blouse' target='_blank'>(Link)</a>";
      document.getElementById("description").innerHTML = "A Moi-même-Moitié frilled collar blouse. Black colorway, 100% cotton fabric. Moitié's candelabra embroidery quietly blends into the left breast in a black thread.";
    break;
    case "hnaoto_gabrieljacket":
      document.getElementById("closet-display").style.backgroundImage="url(wardrobe_images/hnaoto_gabrieljacket_front.png)";
      document.getElementById("label").innerHTML = "GabrieL Jacket (2006)";
      document.getElementById("brand").innerHTML = "Brand: H.Naoto";
      document.getElementById("description").innerHTML = "A black double-zipper jacket from H.Naoto. &quot;GabrieL&quot; is printed onto the right panel, framed with a cross and feathered wings. The back of the hoodie is also printed with a pair of angel wings in a silver glittered ink.";
    break;
    case "putumayo_coatofarms":
      document.getElementById("closet-display").style.backgroundImage="url(wardrobe_images/putumayo_coatofarms_front.png)";
      document.getElementById("label").innerHTML = "Coat of Arms Sailor Cutsew (2013)";
      document.getElementById("brand").innerHTML = "Brand: Putumayo <a href='https://lolibrary.org/items/putumayo-coat-of-arms-sailor-cutsew' target='_blank'>(Link)</a>";
      document.getElementById("description").innerHTML = "A 2013 sailor-style collared cutsew. White x black colorway with red ribbon accents, 100% cotton. A red royal emblem with crown and flag imagery is embroidered into the left breast around 'PM' for Putumayo.";
    break;
    case "putumayo_crosscrownvest":
      document.getElementById("closet-display").style.backgroundImage="url(wardrobe_images/putumayo_crosscrownvest_front.png)";
      document.getElementById("label").innerHTML = "Cross Crown Embroidery Vest (2013)";
      document.getElementById("brand").innerHTML = "Brand: Putumayo <a href='https://lolibrary.org/items/putumayo-cross-crown-embroidery-vest' target='_blank'>(Link)</a>";
      document.getElementById("description").innerHTML = "TBA";
    break;
    case "putumayo_emblemjacket":
      document.getElementById("closet-display").style.backgroundImage="url(wardrobe_images/putumayo_emblemjacket.png)";
      document.getElementById("label").innerHTML = "&#9632;&#9632;&#9632;";
      document.getElementById("brand").innerHTML = "Brand: Putumayo";
      document.getElementById("description").innerHTML = "A thin cotton-synthetic blend jacket with ribbon trims. Red ribbon lines the collar panels and around the bottom of the jacket. Features metal engraved buttons on the front and over the pockets in a gold to match the brilliant yellow embroidered emblem on the breast. It's a fine jacket for casual-wear.";
    break;
    case "putumayo_openenemyfalsefriend":
      document.getElementById("closet-display").style.backgroundImage="url(wardrobe_images/putumayo_openenemyfalsefriend_front.png)";
      document.getElementById("label").innerHTML = "&#9632;&#9632;&#9632;";
      document.getElementById("brand").innerHTML = "Brand: Putumayo";
      document.getElementById("description").innerHTML = "100% cotton black x red parka. The inner hood and sleeve cuffs are red with blue and black pinstripes. Both the front and back designs write &quot;Better be an open enemy than a false friend, Putumayo.&quot; Double zipper.";
    break;
    case "putumayo_longbeltblouse":
      document.getElementById("closet-display").style.backgroundImage="url(wardrobe_images/putumayo_longbeltblouse.png)";
      document.getElementById("label").innerHTML = "Long Belt Blouse (2015)";
       ocument.getElementById("brand").innerHTML = "Brand: Putumayo <a href='https://lolibrary.org/items/putumayo-long-belt-blouse' target='_blank'>(Link)</a>";
      document.getElementById("description").innerHTML = "A 2015 button-up from Putumayo. Bordeaux colorway, 100% cotton. The plackets are crossed with three black straps each ornated with 2 metal buttons. All 6 buttons are branded with crown imagery and 'Putumayo' in matching with the left sleeve's crown print.";
    break;
    case "putumayo_pinstripeassym":
      document.getElementById("closet-display").style.backgroundImage="url(wardrobe_images/putumayo_pinstripeassym_front.png)";
      document.getElementById("label").innerHTML = "&#9632;&#9632;&#9632;";
      document.getElementById("brand").innerHTML = "Brand: Putumayo";
      document.getElementById("description").innerHTML = "A button-up that drapes below the hips. Yellow colorway, cotton.";
    break;
    case "putumayo_wingstripeknit":
      document.getElementById("closet-display").style.backgroundImage="url(wardrobe_images/putumayo_wingstripeknit.png)";
      document.getElementById("label").innerHTML = "Wing Stripe Knit Top (2003)";
      document.getElementById("brand").innerHTML = "Brand: Putumayo <a href='https://lolibrary.org/items/putumayo-wing-border-knit' target='_blank'>(Link)</a>";
      document.getElementById("description").innerHTML = "An acrylic x wool striped shirt from Putumayo. A pair of feathered wings are printed onto the front.";
    break;
    case "superlovers_velvettie":
      document.getElementById("closet-display").style.backgroundImage="url(wardrobe_images/superlovers_velvettie.png)";
      document.getElementById("label").innerHTML = "&#9632;&#9632;&#9632;";
      document.getElementById("brand").innerHTML = "Brand: Super Lovers";
      document.getElementById("description").innerHTML = "A sturdy velvet tie with a skull and bones embroidered onto the blade tip, framed by two olive branches.";
    break;
    case "vw_navycardigan":
      document.getElementById("closet-display").style.backgroundImage="url(wardrobe_images/vw_navycardigan.png)";
      document.getElementById("label").innerHTML = "&#9632;&#9632;&#9632;";
      document.getElementById("brand").innerHTML = "Brand: Vivienne Westwood";
      document.getElementById("description").innerHTML = "A soft, thin, navy cotton cardigan from the MAN line indicated by tag. Embroidered subtly into the chest is Vivienne Westwood's saturn to match the top button's engravement. Great for the Summer and can be worn either layered or alone.";
    break;
    case "vw_minibas":
      document.getElementById("closet-display").style.backgroundImage="url(wardrobe_images/vw_minibas.png)";
      document.getElementById("label").innerHTML = "Mini Bas Relief Pendant Necklace";
      document.getElementById("brand").innerHTML = "Brand: Vivienne Westwood <a href= 'https://www.viviennewestwood.com/en-us/women/jewellery/necklaces/mini-bas-relief-pendant-necklace-platinum-crystal/63020086-02P116-CN-platinum-crystal.html' target='_blank'>(Link)</a>";
      document.getElementById("description").innerHTML = "A &quot;platinum&quot; silver-plated 100% brass necklace with glass crystals. Bought from the in-person store while visiting Osaka. On the minimalist side.";
      break;
    }
  }